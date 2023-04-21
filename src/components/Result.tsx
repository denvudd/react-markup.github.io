import React, { useContext, useState, useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { MarkdownRules } from "./MarkdownRules";
import EditorContext from "../context/EditorContext";
import { ThemeContext } from "../context/ThemeContext";

const Result = () => {
  const { markdownText } = useContext(EditorContext);
  const { theme } = useContext(ThemeContext);
  const [words, setWords] = useState<number>(0);
  const [characters, setCharacters] = useState<number>(0);

  useEffect(() => {
    const converted = document.querySelector(".converted") as HTMLElement;

    if (converted) {
      const text = converted.innerText;
      const countWords = text.trim().split(/\s+/).length;
      const countCharacters = text.length;
      setWords(countWords);
      setCharacters(countCharacters);
    }
  }, [markdownText]);

  return (
    <div className="lgl:w-1/2 w-full h-[100%] lgl:h-full p-3">
      <div
        className={`w-full flex justify-between items-center border-b-[1.5px] border-solid ${
          theme === "light" ? "border-black" : "border-white"
        } mb-1`}
      >
        <h3 className="text-xl font-semibold py-2 px-0">Converted Text</h3>
        <div className="flex gap-3 text-sm">
          <p>Number of words: {words}</p>
          <p>Number of characters: {characters}</p>
        </div>
      </div>
      <div
        className="converted w-full h-full border-none text-lg overflow-y-auto overflow-x-hidden px-2 scrollbar-thin 
      scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-thumb-rounded-lg"
      >
        <ReactMarkdown components={MarkdownRules}>{markdownText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Result;
