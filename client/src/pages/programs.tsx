import { programs } from "../../../server/src/modules/program/programActions";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

export default function Programs() {
  return (
    <div>
      <h1>Liste des programmes</h1>
      <ul>
        {programs.map((program: Program) => (
          <li key={program.id}>
            <strong>{program.title}</strong>: {program.synopsis}
          </li>
        ))}
      </ul>
    </div>
  );
}
