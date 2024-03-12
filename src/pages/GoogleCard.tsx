import * as React from "react";
export default function GoogleCard() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <img src="/image/google-project.png" />
        <img src="/image/stars.png" className="h-[18px]" />
      </div>
      <p className="text-gray-700">
        “Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
        przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
        nieznanego drukarza do wypełnienia tekstem próbnej książki.”
      </p>
      <div className="flex gap-10">
        <img src="/image/dummy.png" />{" "}
        <div className="flex flex-col gap-4">
          <span>Jan dames</span>
          <span className="text-blue-700 font-bold">CEO - google.com</span>
        </div>
      </div>
    </main>
  );
}
