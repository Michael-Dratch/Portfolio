import React from "react";
import Tag from "./tag";

export default function Project({ data }) {
  const { title, description, imgUrl, technologies } = data;
  return (
    <div className="px-6 rounded-3xl w-full border-2 border-slate-200 py-4 flex flex-col-reverse sm:grid sm:grid-cols-8 gap-4">
      <a className="col-span-2" href={data.link}>
        <img
          className="hover:border-cyan-500 hover:border-1 rounded border border-slate-200  object-cover w-full max-w-48"
          src={imgUrl}
        ></img>
      </a>
      <div className="flex flex-col gap-4 sm:col-span-6">
        <a
          href={data.link}
          className="w-fit hover:text-cyan-500 text-slate-800"
        >
          <span className="flex items-center gap-1">
            <h1 className="leading-tight p-0 m-0 font-semibold">{title}</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="relative top-[1px] size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
        </a>
        <p className="text-sm text-slate-700">{description}</p>
        <div className="flex flex-wrap gap-1">
          {technologies.map((item, index) => {
            return <Tag key={index} text={item}></Tag>;
          })}
        </div>
      </div>
    </div>
  );
}
