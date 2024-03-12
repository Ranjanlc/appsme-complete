import * as React from "react";
import { Contact, Theme } from "../components/layout";
import { ContactForm } from "../components/layout/section/contact/contact-form";
import Phone from "@assets/images/phone.svg";
import Envelope from "@assets/images/envelope.svg";
import { SocialLinks } from "../components/layout/section/social-links";
export default function ContactPage() {
  return (
    <Theme>
      <h1 className="font-extrabold xl:text-[55px] text-[30px] mt-12">
        Skontaktuj się <span className="text-blue-700">z nami</span> w celu
      </h1>
      <h1 className="font-extrabold xl:text-[55px] text-[30px]">
        <span className="text-blue-700">omówienia szczegółów </span> nowego
        projektu
      </h1>
      <p className="text-gray-700 text-lg my-12">
        Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
        przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
        nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków
        później zaczął być używany przemyśle elektronicznym.
      </p>
      <main className="flex flex-col gap-8 xl:flex-row-reverse xl:gap-16 my-16">
        <article className="flex flex-col gap-8 mb-8">
          <img src="/image/map.png" alt="map" className="rounded-lg" />
          <h4 className="text-blue-700 text-xl font-bold">
            Apps Me Software Solutions
          </h4>
          <div className="flex flex-col gap-4">
            <section className="flex justify-between">
              <div className="font-light text-gray-700">ul,Prosta 15/20</div>
              <div className="font-bold flex items-center gap-8 min-w-[166px]">
                <Envelope /> bok@appsme.io
              </div>
            </section>
            <section className="flex justify-between">
              <div className="font-light text-gray-700">00-324 Warszawa</div>
              <div className="font-bold flex items-center gap-8 min-w-[166px]">
                <Phone /> 547 154 647
              </div>
            </section>
          </div>
          <SocialLinks />
        </article>
        <ContactForm />
      </main>
    </Theme>
  );
}
