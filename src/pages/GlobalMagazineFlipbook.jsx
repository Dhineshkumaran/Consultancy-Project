// Please paste your entire existing GlobalMagazineFlipbook.jsx here so I can update it completely.

// I need the full file content you are currently using because multiple earlier versions were discussed
// and I should not guess the final structure. Once you paste it, I will rewrite the entire file correctly
import React, { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "pdfjs-dist/build/pdf.worker";
import Header from "./Header";
import Footer from "./Footer";

export default function GlobalMagazineFlipbook() {
  const [magazines, setMagazines] = useState([]);
  const [selected, setSelected] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingPdf, setIsLoadingPdf] = useState(false);

  const leftCanvasRef = useRef(null);
  const rightCanvasRef = useRef(null);
  const containerRef = useRef(null);
  const pdfDocRef = useRef(null);

  // -------------------------------------
  // LOAD ONE LOCAL MAGAZINE (NO SUPABASE)
  // -------------------------------------
  useEffect(() => {
    const localMagazines = [
      {
        name: "Global-Magazine.pdf",
        publicURL: "/magazines/Global-Magazine.pdf",
      },
    ];

    setMagazines(localMagazines);
    setSelected(localMagazines[0]);
  }, []);

  // Load PDF when selected changes
  useEffect(() => {
    if (selected) loadPdf(selected.publicURL);
  }, [selected]);

  // -------------------------------------
  // LOAD PDF
  // -------------------------------------
  async function loadPdf(url) {
    setIsLoadingPdf(true);
    setNumPages(0);
    setCurrentPage(1);
    pdfDocRef.current = null;

    try {
      const loadingTask = pdfjsLib.getDocument(url);
      const pdf = await loadingTask.promise;
      pdfDocRef.current = pdf;
      setNumPages(pdf.numPages);

      await renderSpread(1);
    } catch (e) {
      console.error("Error loading PDF:", e);
    } finally {
      setIsLoadingPdf(false);
    }
  }

  // -------------------------------------
  // RENDER SINGLE PAGE
  // -------------------------------------
  async function renderPageToCanvas(pageNumber, canvas) {
    if (!pdfDocRef.current) return;

    if (pageNumber < 1 || pageNumber > pdfDocRef.current.numPages) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const page = await pdfDocRef.current.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });

    const targetWidth = Math.min(900, window.innerWidth - 80) / 2;
    const scale = targetWidth / viewport.width;
    const scaledViewport = page.getViewport({ scale });

    canvas.width = scaledViewport.width;
    canvas.height = scaledViewport.height;

    await page.render({
      canvasContext: canvas.getContext("2d"),
      viewport: scaledViewport,
    }).promise;
  }

  // -------------------------------------
  // RENDER 2-PAGE SPREAD
  // -------------------------------------
  async function renderSpread(page) {
    const leftPage = page - 1;
    const rightPage = page;

    await renderPageToCanvas(leftPage, leftCanvasRef.current);
    await renderPageToCanvas(rightPage, rightCanvasRef.current);
  }

  // -------------------------------------
  // NEXT / PREVIOUS PAGE
  // -------------------------------------
  async function goNext() {
    if (!pdfDocRef.current) return;
    let next = currentPage + 2;
    if (next > numPages) next = numPages;

    setCurrentPage(next);
    triggerFlip("next");
    await renderSpread(next);
  }

  async function goPrev() {
    if (!pdfDocRef.current) return;
    let prev = currentPage - 2;
    if (prev < 1) prev = 1;

    setCurrentPage(prev);
    triggerFlip("prev");
    await renderSpread(prev);
  }

  function triggerFlip(dir) {
    const el = containerRef.current;
    el.classList.remove("flip-next", "flip-prev");
    el.offsetWidth; // reflow
    el.classList.add(dir === "next" ? "flip-next" : "flip-prev");
    setTimeout(() => el.classList.remove("flip-next", "flip-prev"), 700);
  }

  return (
    <>
    <Header />
    <div className="max-w-4xl mx-auto px-42 py-32 mt-10">
      <h2 className="text-3xl font-extrabold text-blue-900 mb-6">
        Global Magazine
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        

        {/* Flipbook */}
        <main className="flex-1">
          {selected ? (
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">{selected.name}</h3>
                  <p className="text-sm text-gray-500">Pages: {numPages}</p>
                </div>

                <a
                  href={selected.publicURL}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 bg-gray-100 rounded-md text-sm hover:bg-gray-200"
                >
                  Open PDF
                </a>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={goPrev}
                  disabled={currentPage <= 1}
                  className="px-4 py-2 bg-gray-100 rounded-md"
                >
                  Prev
                </button>
                <span className="text-sm">
                  Page {currentPage} / {numPages}
                </span>
                <button
                  onClick={goNext}
                  disabled={currentPage >= numPages}
                  className="px-4 py-2 bg-gray-100 rounded-md"
                >
                  Next
                </button>
              </div>

              {/* Flipbook Canvas */}
              <div ref={containerRef} className="flipbook-container">
                <div className="spread flex shadow-lg rounded-md overflow-hidden max-w-3xl mx-auto">
                  <canvas ref={leftCanvasRef} className="w-1/2 bg-white" />
                  <canvas ref={rightCanvasRef} className="w-1/2 bg-white" />
                </div>
              </div>

              {isLoadingPdf && (
                <p className="text-sm text-gray-500 mt-3">Loading PDF…</p>
              )}
            </div>
          ) : (
            <p>Select a magazine.</p>
          )}
        </main>
      </div>

      <style>{`
        .flipbook-container { perspective: 1500px; }
        .spread { transform-origin: center; transition: transform 0.7s ease; }
        .flip-next .spread { transform: rotateY(-8deg); }
        .flip-prev .spread { transform: rotateY(8deg); }
      `}</style>
    </div>
    <Footer />
    </>
  );
}


