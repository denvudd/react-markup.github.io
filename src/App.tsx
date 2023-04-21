import { useState, useContext } from "react";
import EditorContext from "./context/EditorContext";
import MarkedInput from "./components/MarkedInput";
import Result from "./components/Result";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [markdownText, setMarkdownText] = useState<string>(`
  # Markup Editor
  ## _The Last Markdown Editor, Ever_
  
  [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
  
  - Type some Markdown on the left
  - See HTML in the right
  - ✨Magic ✨
  
  Markdown is a lightweight markup language based on the formatting conventions
  that people naturally use in email.
  As [John Gruber] writes on the [Markdown site][df1]
  
  > The overriding design goal for Markdown's
  > formatting syntax is to make it as readable
  > as possible. The idea is that a
  > Markdown-formatted document should be
  > publishable as-is, as plain text, without
  > looking like it's been marked up with tags
  > or formatting instructions.
  
  This text you see here is *actually- written in Markdown! To get a feel
  for Markdown's syntax, type some text into the left window and
  watch the results in the right.

  `);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  function handleToggleTheme(): void {
    const newTheme = theme === "light" ? "dark" : "light";
    toggleTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <EditorContext.Provider value={contextValue}>
      <div className="w-full sml:h-screen flex flex-col items-center lgl:overflow-y-hidden">
        <h1
          className="sml:text-3xl text-xl font-bold bg-slate-800 w-full sml:text-center 
        text-neutral-100 p-6"
        >
          Markdown Editor
        </h1>
        <div className="absolute top-7 right-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              onClick={handleToggleTheme}
              className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
           dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
           peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white
          after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 
          peer-checked:bg-blue-600"
            ></div>
            <span className="ml-3 text-sm font-medium text-white">
              {theme === "light" ? "Light" : "Dark"}
            </span>
          </label>
        </div>
        <div
          className={`${
            theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
          } 
        w-full h-full flex lgl:flex-row flex-col p-3 duration-75`}
        >
          <MarkedInput />
          <Result />
        </div>
      </div>
    </EditorContext.Provider>
  );
}

export default App;
