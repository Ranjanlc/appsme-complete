import React from "react";

import { Theme, BaseBanner } from "@components/layout";
import { ResolutionType, useWindowResolutionType } from "@hooks";
import { Button, Paragraph, Chip } from "@components/inputs";
import HeartIcon from "@assets/images/heart.svg";
import ShieldIcon from "@assets/images/shield.svg";
import StarIcon from "@assets/images/star.svg";

import {
  Headline,
  HighlightedPhrase,
} from "../components/layout/header/base-banner/base-baner.styles";
import Card from "./Card";
import {
  DescriptionHeader,
  Highlight,
  IconChip,
  IconChipContainer,
  IconChipText,
} from "../components/layout/section/who-we-are";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  const resolutionType: ResolutionType = useWindowResolutionType();

  return (
    <Theme>
      <BaseBanner
        header={
          <Headline>
            Jesteśmy ,
            <HighlightedPhrase className="text-primary">
              Software House’m
            </HighlightedPhrase>{" "}
            który spełni
            <br />
            Twoje oczekiwania projektowe
          </Headline>
        }
        description={
          <Paragraph>
            Mamy wieloletnie doświadczenie w różnych firmach z różnych sektorów,
            co pozwoliło nam zbudować solidne fundamenty i szerokie horyzonty
            technologiczne.
          </Paragraph>
        }
        buttons={
          <Button variant="primary" className="action-button md:mr-5">
            Skontaktuj się z nami
          </Button>
        }
      />
      <header className="text-center font-semibold text-blue-700 mt-16 mb-6">
        KIM JESTEŚMY
      </header>
      <h1 className="text-center text-4xl font-bold">
        To my będziemy pracować nad Twoim projektem
      </h1>
      <p className="my-10 text-gray-700">
        Jesteśmy grupą zaufanych osób oraz przyjaciół, która z pasji do
        programowania postanowiła zacząć tworzyć dedykowane oprogramowanie.
      </p>
      <div className="grid md:grid-rows-1 md:grid-cols-3">
        <div>
          <img
            src="/image/what-we-do.png"
            alt="phones"
            width={360}
            height={305}
          />
        </div>
        <div className="col-span-2 auto-rows-auto mt-12 md:ml-20 ">
          <span className="text-4xl">
            Pozwól, że opowiem Ci o{" "}
            <span className="font-extrabold text-blue-700">
              apps{"{me}"}...
            </span>
          </span>
        </div>
      </div>
      <header className="text-center font-semibold text-blue-700 mt-16 mb-6">
        CO NAS WYRÓŻNIA
      </header>
      <h1 className="text-center text-4xl font-bold">
        Kierujemy się ważnymi dla nas wartościami
      </h1>
      <div className="w-full flex justify-center mt-16">
        <footer className="flex gap-32">
          <section className="flex flex-col gap-8 justify-center items-center">
            <img src="/image/home-1.png" className="w-[60px] h-[60px]" />
            <span className="font-bold">Pasja do tego, co robimy</span>
          </section>
          <section className="flex flex-col gap-8 justify-center items-center">
            <img src="/image/home-1.png" className="w-[60px] h-[60px]" />
            <span className="font-bold">Zaufanie i bezpieczenstwo</span>
          </section>
          <section className="flex flex-col gap-8 justify-center items-center">
            <img src="/image/home-1.png" className="w-[60px] h-[60px]" />
            <span className="font-bold">Pasja do tego, co robimy</span>
          </section>
        </footer>
      </div>
    </Theme>
  );
};

export default HomePage;
