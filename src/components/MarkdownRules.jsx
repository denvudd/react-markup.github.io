const Heading1 = ({ node, ...props }) => (
  <h1 className="text-4xl font-bold my-6" {...props} />
);
const Heading2 = ({ node, ...props }) => (
  <h2 className="text-3xl font-bold my-6" {...props} />
);
const Heading3 = ({ node, ...props }) => (
  <h3 className="text-2xl font-bold my-6" {...props} />
);
const Heading4 = ({ node, ...props }) => (
  <h3 className="text-xl font-bold my-6" {...props} />
);
const Heading5 = ({ node, ...props }) => (
  <h3 className="text-lg font-medium my-6" {...props} />
);
const Heading6 = ({ node, ...props }) => (
  <h3 className="text-md font-medium my-6" {...props} />
);
const Anchor = ({ node, ...props }) => (
  <a className="underline text-sky-500" {...props} />
);
const Code = ({ node, ...props }) => (
  <code
    className="bg-gray-400 p-4 overflow-auto text-md my-2 rounded-md text-white block"
    {...props}
  />
);
const HorizontalRule = ({ node, ...props }) => (
  <hr className="h-1 my-6 bg-gray-300" {...props} />
);
const OrderedList = ({ node, ...props }) => (
  <ol className="pl-4 mb-4 list-decimal" {...props} />
);

const UnorderedList = ({ node, ...props }) => (
  <ul className="pl-4 mb-4 list-disc" {...props} />
);

const Paragraph = ({ node, ...props }) => <p className="mb-4" {...props} />;

const Blockquote = ({ node, ...props }) => (
  <blockquote
    className="px-3 text-neutral-500 border-l-[0.25em] border-solid border-neutral-400"
    {...props}
  />
);

export const MarkdownRules = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  a: Anchor,
  code: Code,
  hr: HorizontalRule,
  ol: OrderedList,
  ul: UnorderedList,
  p: Paragraph,
  blockquote: Blockquote
};
