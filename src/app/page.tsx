'use client'

import { content } from "@/interfaces/content-pages";
import Image from "next/image";
import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

export default function Home() {
  const bookRef = useRef(null);

  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-pink-200 p-4">
      <HTMLFlipBook
        className="relative"
        width={300}
        height={400}
        minWidth={250}
        maxWidth={500}
        minHeight={300}
        maxHeight={600}
        showCover={true}
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
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={2}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {content.map((page, index) => {
          const isFirstPage = index === 0;
          const isLastPage = index === content.length - 1;

          return (
            <div
              key={index}
              className={`relative w-full h-full flex flex-col justify-center items-center p-6 text-center overflow-hidden bg-white
              }`}
            >
              <div className="absolute inset-0 bg-heart-pattern opacity-30 animate-float"></div>

              <div className="relative z-10">
                
                <h2 className={`text-xl font-bold text-pink-600 font-letter ${isFirstPage || isLastPage ? "flex text-4xl justify-center items-center mt-24" : ""}`}>{page.title}</h2>
                <p className={`mt-4 text-gray-700 text-sm font-classic ${isFirstPage || isLastPage ? "text-base" : ""}`}>{page.content}</p>
                <div className="flex justify-center items-center mt-10">
                  {page.imageSrc && page.imageSrc !== "" ? (
                    <div className="w-52 h-52 relative">
                      <Image
                        src={`/images/${page.imageSrc}`}
                        alt={page.title}
                        fill
                        objectFit="cover"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </HTMLFlipBook>
    </div>
  );
}
