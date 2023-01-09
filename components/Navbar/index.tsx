import { useRef, useEffect } from "react";
import NavItems from "./NavItems";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Navbar() {
  gsap.registerPlugin(ScrollTrigger);

  let navbarRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      start: "top -20",
      end: 99999,
      toggleClass: {
        className: "nav-glass",
        targets: navbarRef.current,
      },
    });
  }, []);

  return (
    <nav
      className="flex justify-between px-32 py-10 fixed z-50 top-0 w-full ease-in duration-300"
      ref={navbarRef}
    >
      <NavItems href="profile" title="PROFILE" />
      <NavItems href="experiences" title="EXPERIENCES" />
      <NavItems href="projects" title="PROJECTS" />
      <NavItems href="contacts" title="CONTACTS" />
    </nav>
  );
}
