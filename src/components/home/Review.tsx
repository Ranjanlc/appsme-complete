import * as React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Review() {
  // let sliderRef = React.useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // const next = () => {
  //   console.log("hellp");
  //   sliderRef.current!.slickNext();
  // };
  return (
    <div className="bg-white pl-10">
      <Slider {...settings}>
        <div>
          <main
            className="flex flex-col md:flex-row justify-between gap-10 w-full md:items-center"
            style={{ display: "flex" }}
          >
            <img className="w-[140px] h-[100px]" src="/image/google.png" />
            <section className="flex flex-col">
              <article className="font-bold text-xl">
                Jak oceniają nas Klienci po realizacji?
              </article>
              <article className="py-2 px-2 md:py-[49px] md:px-[69px] flex flex-col gap-10">
                <section>
                  “Lorem Ipsum jest tekstem stosowanym jako przykładowy
                  wypełniacz w przemyśle poligraficznym. Został po raz pierwszy
                  użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem
                  próbnej książki.”
                </section>
                <section className=" flex-col md:flex-row flex justify-between md:items-center gap-10 md:gap-0">
                  <div className="flex gap-10">
                    <img src="/image/dummy.png" />{" "}
                    <div className="flex flex-col gap-4">
                      <span>Jan dames</span>
                      <span className="text-blue-500">CEO of google</span>
                    </div>
                  </div>
                  <div className="font-bold text-blue-500">
                    Pokaż następną &rarr;
                  </div>
                </section>
              </article>
            </section>
          </main>
        </div>
        <div>
          <main className="flex-col md:flex-row flex justify-between gap-10 w-full md:items-center">
            <img className="w-[140px] h-[100px]" src="/image/google.png" />
            <section className="flex flex-col">
              <article className="font-bold text-xl">
                Jak oceniają nas Klienci po realizacji?
              </article>
              <article className="py-2 px-2 md:py-[49px] md:px-[69px] flex flex-col gap-10">
                <section>
                  “Lorem Ipsum jest tekstem stosowanym jako przykładowy
                  wypełniacz w przemyśle poligraficznym. Został po raz pierwszy
                  użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem
                  próbnej książki.”
                </section>
                <section className=" flex-col md:flex-row flex justify-between md:items-center gap-10 md:gap-0">
                  <div className="flex gap-10">
                    <img src="/image/dummy.png" />{" "}
                    <div className="flex flex-col gap-4">
                      <span>Jan dames</span>
                      <span className="text-blue-500">CEO of google</span>
                    </div>
                  </div>
                  <div className="font-bold text-blue-500">
                    Pokaż następną &rarr;
                  </div>
                </section>
              </article>
            </section>
          </main>
        </div>
      </Slider>
    </div>
  );
}
