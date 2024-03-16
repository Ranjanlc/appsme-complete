import * as React from "react";
import { Theme } from "../components/layout";
import ProjectCard from "./ProjectCard";
import ArrowDown from "../assets/ArrowDown.svg";
import GoogleCard from "./GoogleCard";
export default function WhatWeDo() {
  const [projects, setProjects] = React.useState([
    {
      img: "/image/project.png",
      slug: "Kompletne aplikacje internetowe",
      title: "Leanovatica",
      date: "2021",
    },
    {
      img: "/image/project.png",
      slug: "Kompletne aplikacje internetowe",
      title: "Leanovatica",
      date: "2021",
    },
    {
      img: "/image/project.png",
      slug: "Kompletne aplikacje internetowe",
      title: "Leanovatica",
      date: "2021",
    },
    {
      img: "/image/project.png",
      slug: "Kompletne aplikacje internetowe",
      title: "Leanovatica",
      date: "2021",
    },
    {
      img: "/image/project.png",
      slug: "Kompletne aplikacje internetowe",
      title: "Leanovatica",
      date: "2021",
    },
    {
      img: "/image/project.png",
      slug: "Kompletne aplikacje internetowe",
      title: "Leanovatica",
      date: "2021",
    },
  ]);
  const handleMoreClick = () => {
    setProjects((projects) => [
      ...projects,
      {
        img: "/image/project.png",
        slug: "Kompletne aplikacje internetowe",
        title: "Leanovatica",
        date: "2021",
      },
    ]);
  };
  return (
    <Theme>
      <div className="my-20 ">
        <h1 className="font-extrabold xl:text-[55px] text-[30px] ">
          Zapoznaj się z <span className="text-blue-700">realizacjami</span> ,
          które
        </h1>
        <h1 className="font-extrabold xl:text-[55px] text-[30px]">
          <span className="text-blue-700">wykonaliśmy </span> dla naszych
          Klientów
        </h1>
      </div>
      <main className="grid grid-cols-1 content-center items-center justify-center 2xl:grid-cols-2 2xl:gap-6">
        {projects.map(({ img, title, slug, date }, i) => (
          <ProjectCard
            img={img}
            key={i}
            slug={slug}
            title={title}
            date={date}
          />
        ))}
      </main>

      <div className="flex justify-center">
        <button
          onClick={handleMoreClick}
          className="flex items-center gap-8 cursor-pointer text-gray-700"
        >
          Pokaż więcej <ArrowDown />
        </button>
      </div>
      <div className="flex flex-col items-center my-28">
        <h4 className="text-blue-500 text-sm font-bold">OPINIE</h4>
        <h1 className="font-bold text-4xl">
          Referencje naszych Klientów po realizacjach
        </h1>
      </div>
      <article className="grid grid-cols-1 xl:grid-cols-2 gap-16 ">
        <GoogleCard />
        <GoogleCard />
        <GoogleCard />
        <GoogleCard />
      </article>
    </Theme>
  );
}
