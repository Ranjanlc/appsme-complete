import * as React from "react";
export default function Card({
  img,
  p,
  title,
  highlighted,
}: {
  img: string;
  p: string;
  title: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`space-y-4 w-full ${
        highlighted && "bg-blue-600"
      } rounded-md py-4`}
    >
      <section className="flex gap-4 items-center  pl-4 ">
        <img src={img} className="w-[60px] h-[60px]" />
        <h3 className="font-bold text-gray-700">{title}</h3>
      </section>
      <section className="text-gray-700 pl-4">{p}</section>
    </div>
  );
}
