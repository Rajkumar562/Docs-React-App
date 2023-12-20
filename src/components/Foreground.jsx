import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet.",
      size: "0.5mb",
      download: false,
      tag: { isOpen: true, title: "Download Now!!!", color: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum.",
      size: "0.8mb",
      download: true,
      tag: { isOpen: true, title: "Upload Now!!!", color: "sky" },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error vero sit veniam? Esse, neque?",
      size: "0.5mb",
      download: true,
      tag: { isOpen: false, title: "Download Now!!!", color: "sky" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-full h-full z-[3] flex p-5 gap-10 flex-wrap"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
