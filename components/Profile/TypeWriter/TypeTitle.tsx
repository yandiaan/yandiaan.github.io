/* eslint-disable react-hooks/rules-of-hooks */
import Typed from "typed.js";
import { useRef, useEffect } from "react";

export default function TypeTitle() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Fullstack Developer",
        "Frontend Developer",
        "Backend Developer",
        "UI/UX Designer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <div className="type-wrap text-xl font-bold mb-4">
        <span style={{ whiteSpace: "pre" }} ref={el} />
      </div>
    </>
  );
}
