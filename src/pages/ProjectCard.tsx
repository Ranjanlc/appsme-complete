import * as React from "react";
import { Chip } from "../components/inputs";
import { Button } from "@components/inputs";

export default function ProjectCard({
  img,
  slug,
  title,
  date,
}: {
  img: string;
  slug: string;
  title: string;
  date: string;
}) {
  return (
    <section className="flex flex-col md:flex-row gap-4   p-4 justify-self-center mb-8 bg-gray-100">
      <img src={img} />
      <div className="mt-8 flex flex-col gap-8">
        <h3 className="font-bold text-gray-700">{title}</h3>
        <span>{date}</span>
        <Chip className="max-w-[350px] md:mb-20">{slug}</Chip>
        <Button variant="link">Pełny podglądject</Button>
        {/* <Button>
            <span>Pełny podglądject</span>
          </Button> */}
      </div>
    </section>
  );
}
