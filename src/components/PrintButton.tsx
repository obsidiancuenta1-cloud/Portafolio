"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="shrink-0 rounded-full border px-4 py-2 text-xs font-semibold print:hidden"
    >
      Imprimir / PDF
    </button>
  );
}
