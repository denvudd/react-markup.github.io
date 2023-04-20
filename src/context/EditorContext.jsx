import { createContext, useState } from "react";

const EditorContext = createContext({
  markdownText: ``,
  setMarkdownText: () => {},
});

export default EditorContext;
