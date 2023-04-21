import { createContext } from "react";

interface EditorContextProps {
  markdownText: string;
  setMarkdownText: (value: string) => void;
}

const EditorContext = createContext<EditorContextProps>({
  markdownText: "",
  setMarkdownText: (value: string) => {},
});

export default EditorContext;
