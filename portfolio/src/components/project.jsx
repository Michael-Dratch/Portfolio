import React from "react";
import Tag from "./tag";

export default function Project({ data }) {
  const { title, description, imgUrl, technologies } = data;
  return (
    <div className="p-4 rounded-3xl w-full border-2 border-slate-200">
      <h1>{title}</h1>
      <div className="flex flex-row gap-4">
        <img className="w-28 h-28" src={imgUrl}></img>
        <div className="flex flex-col gap-4">
          <p className="text-sm">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((item) => {
              return <Tag text={item}></Tag>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
