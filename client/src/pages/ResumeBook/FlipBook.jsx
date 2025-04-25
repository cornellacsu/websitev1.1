import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { GlobalWorkerOptions, getDocument } from "pdfjs-dist";
import "./ResumeBook.css";

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js`;

const PageCover = React.forwardRef((props, ref) => (
  <div className="cover" ref={ref} data-density="hard">
    <div className="flex items-center justify-center h-full">
      <h2 className="text-2xl font-bold">{props.children}</h2>
    </div>
  </div>
));

const Page = React.forwardRef(({ children, number }, ref) => (
  <div className="page bg-white p-4" ref={ref}>
    {children}
  </div>
));

const FlipBook = ({ pdfUrl }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const loadingTask = getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const pageImages = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 1 });
          const scale = 500 / viewport.width;
          const scaledViewport = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.width = scaledViewport.width;
          canvas.height = scaledViewport.height;

          await page.render({ canvasContext: context, viewport: scaledViewport }).promise;
          pageImages.push(canvas.toDataURL());
        }

        setPages(pageImages);
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  const bookWidth = 541;
  const bookHeight = 700;

  return (
    <div className="flex justify-center p-6 bg-gray-100 min-h-screen">
      {pages.length > 0 ? (
        <HTMLFlipBook
          width={bookWidth}
          height={bookHeight}
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          showCover={true}
          flippingTime={1000}
          className="album-web"
          style={{ margin: "0 auto" }}
          maxShadowOpacity={0.5}
        >
          <PageCover>ACSU Resume Book 2025</PageCover>

          {pages.map((src, idx) => (
            <Page key={idx}>
              <img
                src={src}
                alt={`Page ${idx + 1}`}
                className="w-full h-full object-contain"
              />
            </Page>
          ))}

          <PageCover />
        </HTMLFlipBook>
      ) : (
        <div>Loading PDF...</div>
      )}
    </div>
  );
};

export default FlipBook;