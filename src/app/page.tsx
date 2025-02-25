'use client'

import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const pages = [
  { title: "", content: "", cover: true }, // Capa do livro
  { title: "Nosso Início", content: "Era uma vez... o começo da nossa linda história." },
  { title: "Primeiro Encontro", content: "O dia em que nossos olhares se cruzaram e tudo mudou." },
  { title: "Momentos Felizes", content: "Cada risada, cada abraço, cada momento inesquecível." },
  { title: "Nosso Futuro", content: "E essa história continua... para sempre ao seu lado." },
  { title: "", content: "", backCover: true }, // Contra capa do livro
];

export default function Home() {
  const bookRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-pink-200 p-4">
      {!isOpen ? (
        <div
          className="w-[300px] h-[400px] bg-pink-500 text-white font-bold text-2xl flex items-center justify-center shadow-lg cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <h1>Nosso Livro de Amor 💖</h1>
        </div>
      ) : (
        <HTMLFlipBook
          width={300}
          height={400}
          minWidth={250}
          maxWidth={500}
          minHeight={300}
          maxHeight={600}
          showCover={true}
          className=""
          ref={bookRef}
          style={{ margin: "auto" }}
          startPage={0}
          size="fixed"
          drawShadow={true}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          clickEventForward={false}
          useMouseEvents={true}
          swipeDistance={2}
          showPageCorners={true}
          disableFlipByClick={true}
        >
          {pages.map((page, index) => (
            <div
              key={index}
              className={`w-full h-full flex flex-col justify-center items-center bg-white p-6 text-center ${
                page.cover ? 'bg-pink-500 text-white font-bold text-2xl' :
                page.backCover ? 'bg-gray-300 text-gray-700 font-bold text-2xl' : ''
              }`}
            >
              {page.cover ? (
                <h1>Nosso Livro de Amor 💖</h1>
              ) : page.backCover ? (
                <h1>Fim 💖</h1>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-pink-600">{page.title}</h2>
                  <p className="mt-4 text-gray-700">{page.content}</p>
                </>
              )}
            </div>
          ))}
        </HTMLFlipBook>
      )}
    </div>
  );
}
