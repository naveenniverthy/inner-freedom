"use client";

import { useRef, useState } from "react";
import AssessmentGuidance from "./AssessmentGuidance";

export default function AssessmentPdfExport({ scores, resultTitle, resultDescription }) {
  const reportRef = useRef(null);
  const [exporting, setExporting] = useState(false);

  async function exportPdf() {
    if (!reportRef.current) return;

    setExporting(true);

    try {
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;

      const canvas = await html2canvas(reportRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("moksha-spiritual-assessment.pdf");
    } finally {
      setExporting(false);
    }
  }

  return (
    <div className="mt-10">
      <button
        type="button"
        onClick={exportPdf}
        disabled={exporting}
        className="rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700 disabled:opacity-60"
      >
        {exporting ? "Preparing PDF..." : "Download PDF Report"}
      </button>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-[-10000px] top-0 w-[794px] bg-white"
      >
        <div ref={reportRef} className="bg-white p-8 text-gray-900">
          <header className="border-b pb-5">
            <p className="text-sm uppercase tracking-wide text-gray-500">
              Moksha | Keys to Inner Freedom
            </p>
            <h1 className="mt-2 text-3xl font-semibold">
              Spiritual Assessment Report
            </h1>
            <p className="mt-2 text-gray-600">
              A simple reflection on your current inner journey.
            </p>
          </header>

          <main className="py-6">
            {resultTitle && (
              <section className="mb-6">
                <h2 className="text-2xl font-semibold">{resultTitle}</h2>
                {resultDescription && (
                  <p className="mt-2 text-gray-700">{resultDescription}</p>
                )}
              </section>
            )}

            <section className="mb-8">
              <h2 className="text-xl font-semibold">Your Scores</h2>
              <div className="mt-3 space-y-2">
                {Object.entries(scores || {}).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b py-2">
                    <span className="capitalize">{key}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </section>

            <AssessmentGuidance scores={scores} />
          </main>

          <footer className="border-t pt-5 text-sm text-gray-500">
            <p>
              This report is for reflection and self-understanding. It is not a judgment.
            </p>
            <p className="mt-1">
              Continue your journey at Moksha - Keys to Inner Freedom.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
