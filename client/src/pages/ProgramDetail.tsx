import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProgramDeleteForm from "../components/ProgramDeleteForm";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

function ProgramDetail() {
  const { id } = useParams<{ id: string }>();
  const [program, setProgram] = useState<Program | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`${import.meta.env.VITE_API_URL}/api/program/${id}`)
      .then((res) => res.json())
      .then((data) => setProgram(data))
      .catch(() => setProgram(null));
  }, [id]);

  if (!program) return <p>erreur.</p>;

  return (
    <div>
      <h1>{program.title}</h1>
      <img src={program.poster} alt={program.title} width={200} />
      <p>
        <strong>Synopsis :</strong> {program.synopsis}
      </p>
      <p>
        <strong>Pays :</strong> {program.country}
      </p>
      <p>
        <strong>Année :</strong> {program.year}
      </p>

      <Link to={`/program/${program.id}/edit`}>Modifier</Link>
      <ProgramDeleteForm id={program.id}>Supprimer</ProgramDeleteForm>
    </div>
  );
}

export default ProgramDetail;
