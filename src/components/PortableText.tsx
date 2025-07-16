import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { ReactNode } from "react";

interface ChildrenType {
  children: ReactNode;
}

const urlFor = (source: any) => {
  return source;
};

const portableTextComponents = {
  // Block Styles
  block: {
    h1: ({ children }: ChildrenType) => (
      <h1 className="text-4xl md:text-5xl font-extrabold my-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: ChildrenType) => (
      <h2 className="text-3xl md:text-4xl font-bold my-5 leading-snug">
        {children}
      </h2>
    ),
    h3: ({ children }: ChildrenType) => (
      <h3 className="text-2xl md:text-3xl font-semibold my-4 leading-normal">
        {children}
      </h3>
    ),
    h4: ({ children }: ChildrenType) => (
      <h4 className="text-xl md:text-2xl font-semibold my-4 leading-normal">
        {children}
      </h4>
    ),
    normal: ({ children }: ChildrenType) => (
      <p className="text-base leading-relaxed my-4">{children}</p>
    ),
    blockquote: ({ children }: ChildrenType) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-6 text-gray-600 dark:text-gray-400">
        {children}
      </blockquote>
    ),
    // You can add custom styles here as well, e.g.,
    // customHeading: ({children}) => <h2 className="text-lg text-primary">{children}</h2>
  },

  // Marks (inline text decorators)
  marks: {
    strong: ({ children }: ChildrenType) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: ChildrenType) => <em className="italic">{children}</em>,
    underline: ({ children }: ChildrenType) => (
      <u className="underline">{children}</u>
    ),
    "strike-through": ({ children }: ChildrenType) => (
      <s className="line-through">{children}</s>
    ),
    code: ({ children }: ChildrenType) => (
      <code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm text-red-600 dark:text-red-400">
        {children}
      </code>
    ),
    link: ({ children, value }: ChildrenType & { value: { href: "" } }) => {
      const href = value?.href || "";
      const isExternal = href.startsWith("http");
      const rel = isExternal ? "noopener noreferrer" : undefined;
      const target = isExternal ? "_blank" : undefined;

      return (
        <Link
          href={href}
          rel={rel}
          target={target}
          className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        >
          {children}
        </Link>
      );
    },
    // Example: Custom mark for highlighting
    // highlight: ({children}) => <span className="bg-yellow-200 dark:bg-yellow-700">{children}</span>,
  },

  // Custom Block Types (defined in your Sanity schema)
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        console.warn("Image block is missing asset reference:", value);
        return null; // Don't render if asset is missing
      }
      const imageUrl = urlFor(value)
        ?.width(1200) // Adjust max width as needed
        .auto("format")
        .url();

      if (!imageUrl) {
        console.warn(
          "Could not generate URL for image asset:",
          value.asset._ref,
        );
        return null; // Don't render if URL generation fails
      }

      return (
        <figure className="my-6">
          <img
            src={imageUrl}
            alt={value.alt || ""} // Provide empty string alt if not set
            loading="lazy"
            className="max-w-full h-auto rounded-md shadow-md mx-auto" // Center image, add styling
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }: any) => {
      // Basic code block rendering (consider a syntax highlighter like react-syntax-highlighter)
      if (!value || !value.code) {
        return null;
      }
      return (
        <div className="my-6 relative">
          {value.filename && (
            <div className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-t-md">
              {value.filename}
            </div>
          )}
          <pre
            className={`bg-gray-800 dark:bg-gray-900 text-white p-4 rounded-md ${
              value.filename ? "rounded-t-none" : ""
            } overflow-x-auto text-sm leading-relaxed`}
          >
            <code>{value.code}</code>
          </pre>
          {value.language && (
            <span className="absolute top-0 right-0 bg-gray-600 text-gray-200 text-xs px-2 py-0.5 rounded-bl-md rounded-tr-md">
              {value.language}
            </span>
          )}
        </div>
      );
    },
    // Add components for any other custom block types from your schema
    // e.g., callToAction: ({ value }) => <MyCallToActionComponent {...value} />,
    // youtubeEmbed: ({ value }) => <MyYoutubeEmbed url={value.url} />,
  },

  // List Styles
  list: {
    bullet: ({ children }: ChildrenType) => (
      <ul className="list-disc pl-5 my-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: ChildrenType) => (
      <ol className="list-decimal pl-5 my-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    // Use defaults for bullet and number, but you could customize li here too
    bullet: ({ children }: ChildrenType) => (
      <li className="text-base">{children}</li>
    ),
    number: ({ children }: ChildrenType) => (
      <li className="text-base">{children}</li>
    ),
  },
};

/**
 * Renders Sanity Portable Text content with Tailwind CSS styling.
 *
 * @param {object} props - Component props.
 * @param {Array} props.value - The Portable Text array value from Sanity.
 * @param {object} [props.components] - Optional additional or overriding components.
 */
function PortableTextWrapper({ value, components = {} }: any) {
  if (!value || !Array.isArray(value) || value.length === 0) {
    return null; // Don't render anything if value is missing or empty
  }

  // Deep merge custom components with defaults, allowing overrides
  const mergedComponents = {
    ...portableTextComponents,
    ...components,
    block: { ...portableTextComponents.block, ...components.block },
    marks: { ...portableTextComponents.marks, ...components.marks },
    types: { ...portableTextComponents.types, ...components.types },
    list: { ...portableTextComponents.list, ...components.list },
    listItem: { ...portableTextComponents.listItem, ...components.listItem },
  };

  return <PortableText value={value} components={mergedComponents} />;
}

export default PortableTextWrapper;
