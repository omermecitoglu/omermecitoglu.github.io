"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";

type TypingProps = {
  strings: string[],
};

const Typing = ({
  strings,
}: TypingProps) => {
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
};

export default Typing;
