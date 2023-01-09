/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
/* eslint-disable react/jsx-no-comment-textnodes */
import type { NextPage } from "next";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Head from "next/head";
import Line from "../components/Experience/Line";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

const Home: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const components = document.querySelectorAll("#component");
    const container: HTMLElement = document.querySelector("#container")!;

    gsap.to(components, {
      xPercent: -100 * (components.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (components.length - 1),
        end: () => "+=3500",
      },
    });
  }, []);

  return (
    <>
      <Head>
        <title>Dian's Personal Website</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins"
          rel="stylesheet"
        />
      </Head>
      <main className="bg-doff">
        <Navbar />
        <Profile />
        {/* <ProfileImg /> */}
        <div id="container" className="overflow-x-hidden">
          <div
            id="component"
            className="bg-gradient-to-r from-[#111111] to-[#330867]"
          >
            <Experience />
          </div>
          <div
            id="component"
            className="bg-gradient-to-r from-[#330867] to-[#111111] flex"
          >
            <Line position={2} />
            <Line position={3} />
          </div>
        </div>
        <Projects />
        <Contacts />
      </main>
    </>
  );
};

export default Home;
