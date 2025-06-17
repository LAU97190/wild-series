import type { ReactNode } from "react";

type ProgramData = {
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

interface ProgramFormProps {
  children: ReactNode;
  defaultValue: ProgramData;
  onSubmit: (program: ProgramData) => void;
}

export default function ProgramForm({
  children,
  defaultValue,
  onSubmit,
}: ProgramFormProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        onSubmit({
          title: formData.get("title") as string,
          synopsis: formData.get("synopsis") as string,
          poster: formData.get("poster") as string,
          country: formData.get("country") as string,
          year: Number(formData.get("year")),
          category_id: Number(formData.get("category_id")), // 👈 ici maintenant bien présent
        });
      }}
    >
      <input
        type="text"
        name="title"
        placeholder="Titre"
        defaultValue={defaultValue.title}
      />
      <textarea
        name="synopsis"
        placeholder="Synopsis"
        defaultValue={defaultValue.synopsis}
      />
      <input
        type="text"
        name="poster"
        placeholder="URL de l'affiche"
        defaultValue={defaultValue.poster}
      />
      <input
        type="text"
        name="country"
        placeholder="Pays"
        defaultValue={defaultValue.country}
      />
      <input
        type="number"
        name="year"
        placeholder="Année"
        defaultValue={defaultValue.year}
      />
      <input
        type="number"
        name="category_id"
        placeholder="ID de la catégorie"
        defaultValue={defaultValue.category_id}
      />

      <button type="submit">{children}</button>
    </form>
  );
}
