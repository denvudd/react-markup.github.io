import { useContext, useState } from "react";
import EditorContext from "../context/EditorContext";
import { ThemeContext } from "../context/ThemeContext";
import { CopyToClipboard } from "react-copy-to-clipboard";

const MarkedInput = () => {
  const { markdownText, setMarkdownText } = useContext(EditorContext);
  const { theme } = useContext(ThemeContext);
  const [copied, setCopied] = useState(false);

  const onInputChange = (e) => {
    const value = e.currentTarget.value;
    setMarkdownText(value);
  };

  const handleCopyToClipboard = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className={`lgl:w-1/2 w-full h-[50%] lgl:h-full p-3 border-r-[1.5px] border-solid ${
        theme === "light" ? "border-black" : "border-white"
      } lgl:mb-0 mb-10`}
    >
      <div
        className={`w-full flex justify-between items-center border-b-[1.5px] border-solid ${
          theme === "light" ? "border-black" : "border-white"
        } mb-1`}
      >
        <h3 className="text-xl font-semibold py-2 px-0">Markdown Text</h3>
        <CopyToClipboard text={markdownText} onCopy={handleCopyToClipboard}>
          <button
            className={`ml-2 px-2 py-1 text-white ${
              copied ? "bg-green-500" : "bg-blue-500"
            } rounded duration-200 ease-out`}
            type="button"
          >
            {copied ? "Copied!" : "Copy to clipboard"}
          </button>
        </CopyToClipboard>
      </div>
      <div className="w-full h-full">
        <textarea
          onChange={onInputChange}
          value={markdownText}
          className="w-full h-full resize-none border-none outline-none text-lg font-mono overflow-auto px-2 
        scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-thumb-rounded-lg bg-inherit z-1"
        ></textarea>
      </div>
    </div>
  );
};

export default MarkedInput;
