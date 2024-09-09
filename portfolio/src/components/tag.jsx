import React from "react";

export default function Tag({ text }) {
  return (
    <span className="text-sm font-semibold px-4 py-0.5 bg-slate-200 text-cyan-800 rounded-2xl">
      {text}
    </span>
  );
}
