import React, { useState } from "react";

import { Theme, BaseBanner } from "@components/layout";
import { ResolutionType, useWindowResolutionType } from "@hooks";
import { Button, Paragraph, Chip } from "@components/inputs";

import {
  Headline,
  HighlightedPhrase,
} from "../components/layout/header/base-banner/base-baner.styles";
import Card from "./Card";

const DATA = [
  {
    id: "1",
    text: "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.",
    title: "Rozmowa z Klientem",
  },
  {
    id: "2",
    text: "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.",
    title: "Rozmowa z Klientem",
  },
  {
    id: "3",
    text: "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.",
    title: "Rozmowa z Klientem",
  },
  {
    id: "4",
    text: "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.",
    title: "Rozmowa z Klientem",
  },
  {
    id: "5",
    text: "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.",
    title: "Rozmowa z Klientem",
  },
  {
    id: "6",
    text: "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.",
    title: "Rozmowa z Klientem",
  },
];

const WhoWeArePage = () => {
  const resolutionType: ResolutionType = useWindowResolutionType();
  const [curService, setCurService] = useState("1");

  return (
    <Theme>
      <BaseBanner
        header={
          <Headline>
            Kompleksowe{" "}
            <HighlightedPhrase className="text-primary">
              rozwiązania
            </HighlightedPhrase>{" "}
            i<br />
            <HighlightedPhrase>
              {" "}
              najnowocześniejsze technologię{" "}
            </HighlightedPhrase>
            dostępne na rynku
          </Headline>
        }
        description={
          <Paragraph>
            Tworzymy dedykowane oprogramowanie, które rozwiązuje problemy
            biznesowe naszych klientów lub optymalizuje ich procesy. Tworzymy
            oprogramowanie dla każdej wielkości firmy,
          </Paragraph>
        }
        buttons={
          <Button variant="primary" className="action-button md:mr-5">
            Zamów darmową wycenę projektu
          </Button>
        }
      />
      <header className="text-center font-semibold text-blue-700 mt-16 mb-6">
        CO ROBIMY
      </header>
      <h1 className="text-center text-4xl">Tworzymy różne rodzaje aplikacji</h1>
      <p className="my-10 text-gray-700">
        W <span className="text-blue-700 font-bold">apps</span>
        <span className="font-bold">{"{me}"}</span> staramy się sprostać każdemu
        wymaganiu naszych klientów i każdy projekt to dla nas wyzwanie, a my
        mocno kochamy wyzwania.
      </p>
      <p className="text-gray-700">
        Specjalizujemy się w aplikacjach i systemach internetowych. Nie ważne
        jakiej wielkości jest to aplikacja, zawsze dbamy żeby była jak
        najlepszej jakości. Tworzymy oprogramowanie które się skaluję i nie ma
        problemu z jego dalszym rozwojem oraz rozbudową. Dbamy o to, żeby nasze
        aplikacje były napisane w sposób optymalny, czyli szukamy najlepszych
        sposobów i algorytmów na rozwiązanie Twojego problemu. Dbamy o szybkość,
        wydajność, a przede wszystkim o User experience, ponieważ wiemy jak
        bardzo ważny jest czas każdego z nas, więc chcemy by końcowi użytkownicy
        naszych systemów i aplikacji znaleźli to czego szukają w jak najkrótszym
        czasie.
      </p>
      <main className="space-y-10 my-12">
        <section className="flex flex-col md:flex-row md:gap-8 items-center">
          {" "}
          <Chip className="mb-5 min-w-[280px]">
            Kompletne aplikacje internetowe
          </Chip>
          <span className="text-gray-700">
            Zadbamy o całokształt aplikacji, zbudujemy dla Ciebie piękny i
            szybki interfejs, który będzie świetnie się prezentował na każdym
            urządzeniu - telefon, tablet, monitor i będzie połączony z szybką
            częścią serwerową działajvącą w chmurze.
          </span>
        </section>
        <section className="flex md:gap-8 md:flex-row flex-col items-center">
          {" "}
          <Chip className="mb-5 min-w-[280px]">
            Kompletne aplikacje internetowe
          </Chip>
          <span className="text-gray-700">
            Zadbamy o całokształt aplikacji, zbudujemy dla Ciebie piękny i
            szybki interfejs, który będzie świetnie się prezentował na każdym
            urządzeniu - telefon, tablet, monitor i będzie połączony z szybką
            częścią serwerową działajvącą w chmurze.
          </span>
        </section>
        <section className="flex md:gap-8 md:flex-row flex-col items-center">
          {" "}
          <Chip className="mb-5 min-w-[280px]">
            Kompletne aplikacje internetowe
          </Chip>
          <span className="text-gray-700">
            Zadbamy o całokształt aplikacji, zbudujemy dla Ciebie piękny i
            szybki interfejs, który będzie świetnie się prezentował na każdym
            urządzeniu - telefon, tablet, monitor i będzie połączony z szybką
            częścią serwerową działajvącą w chmurze.
          </span>
        </section>
        <section className="flex md:gap-8 md:flex-row flex-col items-center">
          {" "}
          <Chip className="mb-5 min-w-[280px]">
            Kompletne aplikacje internetowe
          </Chip>
          <span className="text-gray-700">
            Zadbamy o całokształt aplikacji, zbudujemy dla Ciebie piękny i
            szybki interfejs, który będzie świetnie się prezentował na każdym
            urządzeniu - telefon, tablet, monitor i będzie połączony z szybką
            częścią serwerową działajvącą w chmurze.
          </span>
        </section>
      </main>
      <header className="space-y-4 mt-24">
        <h3 className="text-blue-700 font-bold text-center">
          WYKORZYSTYWANE TECHNOLOGIE
        </h3>
        <h1 className=" font-bold text-4xl text-center">
          Stosujemy najlepsze rozwiązania
        </h1>
      </header>
      <p className="text-gray-700 mt-12">
        Działamy w metodyce agile, współpracujemy blisko z klientem, używamy
        najnowszych technologii, a poszczególne technologie dobieramy do
        problemu, który będziemy rozwiązywać. Używamy najlepszych praktyk
        programistycznych, a nasz kod jest przetestowany jednostkowo, e2e oraz
        integracyjnie. Dbamy o procesy CI i CD, a nasz kod serwujemy w chmurze
        lub na dedykowanych serwerach aplikacyjnych w zależności od budżetu lub
        potrzeb klienta.
      </p>
      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14">
        <Card
          img="/image/languages/angular.png"
          p="“Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.”"
          title="Angular"
        ></Card>
        <Card
          img="/image/languages/cypress.png"
          p="“Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.”"
          title="Cypress"
          highlighted={true}
        ></Card>
        <Card
          img="/image/languages/karma.png"
          p="“Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.”"
          title="Karma"
        ></Card>
        <Card
          img="/image/languages/react.png"
          p="“Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.”"
          title="React"
        ></Card>

        <Card
          img="/image/languages/react.png"
          p="“Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.”"
          title="Node"
        ></Card>
        <Card
          img="/image/languages/net.png"
          p="“Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.”"
          title=".Net"
        ></Card>
        <Card
          img="/image/languages/t-sql.png"
          p="“Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.”"
          title="T-SQL"
        ></Card>
        <Card
          img="/image/languages/sql.png"
          p="“Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.”"
          title="SQL"
        ></Card>
        <Card
          img="/image/languages/azure.png"
          p="“Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.”"
          title="Azure"
        ></Card>
      </main>
      <header className="text-center font-semibold text-blue-700 mt-16 mb-6">
        JAK DZIAŁAMY
      </header>
      <h1 className="text-center text-4xl mb-20">
        Przebieg realizacji projektu krok po kroku
      </h1>
      <article className="flex justify-between w-full items-center gap-6 md:flex-col xl:flex-row">
        <section className="flex flex-col md:flex-row md:justify-around md:w-full gap-6">
          {Array(6)
            .fill()
            .map((el, i) => (
              <article
                className={`flex flex-col pr-2 gap-2 ${
                  curService === `${i + 1}`
                    ? "border-r-4 md:border-r-0 md:border-b-4 border-blue-500"
                    : ""
                }`}
                onClick={() => {
                  setCurService(`${i + 1}`);
                }}
              >
                <img src={`/image/krok/${i + 1}.png`} />
                <span>Krok {i + 1}</span>
              </article>
            ))}
        </section>
        <section className="flex flex-col gap-3 bg-blue-600 text-white p-2 max-w-[450px] md:h-[200px] md:p-8 justify-center ">
          <h3>
            {curService}. {DATA.find((el) => el.id === curService)?.title}
          </h3>
          <p>{DATA.find((el) => el.id === curService)?.text}</p>
        </section>
      </article>
    </Theme>
  );
};

export default WhoWeArePage;
