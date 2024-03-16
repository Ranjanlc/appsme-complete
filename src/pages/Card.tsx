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
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={`space-y-4 w-full ${
        isHovered && "bg-blue-600"
      } rounded-md py-4`}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {isHovered && (
        <>
          <section className="flex gap-4 items-center  pl-4 ">
            <img src={img} className="w-[60px] h-[60px]" />
            <h3 className="font-bold text-gray-700">{title}</h3>
          </section>
          <section className="text-gray-700 pl-4">{p}</section>
        </>
      )}
      {!isHovered && (
        <div className="flex justify-center items-center h-[200px]">
          <img src={img} className="w-[60px] h-[60px]" />
        </div>
      )}
    </div>
  );
}
