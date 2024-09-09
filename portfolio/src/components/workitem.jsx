import React from "react";
import Tag from "./tag";

export default function WorkItem({ data }) {
  const { title, description, date, technologies } = data;
  return (
    <div className="flex flex-col gap-1 sm:grid sm:grid-cols-8 n px-6 py-4 rounded-3xl w-full border-2 border-slate-200">
      <div className="sm:col-span-2">
        <div className="text-xs font-bold text-slate-500">{date}</div>
      </div>
      <div className="flex flex-col gap-4 sm:col-span-6">
        <h1 className="font-semibold text-slate-800">{title}</h1>
        <p className="text-sm  text-slate-700">{description}</p>
        <div className="flex flex-wrap gap-1">
          {technologies.map((item) => {
            return <Tag text={item}></Tag>;
          })}
        </div>
      </div>
    </div>
  );
}
