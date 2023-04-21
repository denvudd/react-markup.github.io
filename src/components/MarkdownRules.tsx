/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
const Heading1 = ({ ...props }) => (
  <h1 className="text-4xl font-bold my-6" {...props} />
);
const Heading2 = ({ ...props }) => (
  <h2 className="text-3xl font-bold my-6" {...props} />
);
const Heading3 = ({ ...props }) => (
  <h3 className="text-2xl font-bold my-6" {...props} />
);
const Heading4 = ({ ...props }) => (
  <h3 className="text-xl font-bold my-6" {...props} />
);
const Heading5 = ({ ...props }) => (
  <h3 className="text-lg font-medium my-6" {...props} />
);
const Heading6 = ({ ...props }) => (
  <h3 className="text-md font-medium my-6" {...props} />
);
const Anchor = ({ ...props }) => (
  <a className="underline text-sky-500" {...props} />
);
const Code = ({ ...props }) => (
  <code
    className="bg-gray-400 p-4 overflow-auto text-md my-2 rounded-md text-white block"
    {...props}
  />
);
const HorizontalRule = ({ ...props }) => (
  <hr className="h-1 my-6 bg-gray-300" {...props} />
);
const OrderedList = ({ ...props }) => (
  <ol className="pl-4 mb-4 list-decimal" {...props} />
);

const UnorderedList = ({ ...props }) => (
  <ul className="pl-4 mb-4 list-disc" {...props} />
);

const Paragraph = ({ ...props }) => <p className="mb-4" {...props} />;

const Blockquote = ({ ...props }) => (
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
  blockquote: Blockquote,
};
