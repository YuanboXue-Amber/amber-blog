import {
  Blockquote,
  Code,
  PrismSetup,
  OrderedList,
  UnorderedList,
  Headings2,
  Headings3,
  Headings4,
  Link,
  Image,
} from './src/components/Complete';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const components = {
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup,
  ol: OrderedList,
  ul: UnorderedList,
  h2: Headings2,
  h3: Headings3,
  h4: Headings4,
  a: Link,
  img: Image,
};
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
