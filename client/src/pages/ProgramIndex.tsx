import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

function ProgramIndex() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/program`)
      .then((res) => res.json())
      .then((data) => setPrograms(data));
  }, []);

  return (
    <>
      <Link to={"/programs/new"}>Ajouter</Link>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <Link to={`/program/${program.id}`}>{program.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProgramIndex;
