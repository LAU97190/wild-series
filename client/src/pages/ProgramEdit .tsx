import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import ProgramForm from "../components/ProgramForm";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

function ProgramEdit() {
  const { id } = useParams();
  const [program, setProgram] = useState<Program | null>(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/program/${id}`)
      .then((response) => response.json())
      .then((data: Program) => setProgram(data));
  }, [id]);

  if (redirect && program) {
    return <Navigate to={`/program/${program.id}`} />;
  }

  if (!program) {
    return <p>Chargement...</p>;
  }

  return (
    <ProgramForm
      defaultValue={program}
      onSubmit={(programData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/program/${program.id}`, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(programData),
        }).then((response) => {
          if (response.status === 204) {
            setRedirect(true);
          }
        });
      }}
    >
      Modifier
    </ProgramForm>
  );
}

export default ProgramEdit;
