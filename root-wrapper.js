import {
  Blockquote,
  Code,
  PrismSetup,
  OrderedList,
  Headings2,
  Headings3,
} from './src/components/Complete';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const components = {
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup,
  ol: OrderedList,
  h2: Headings2,
  h3: Headings3,
};
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
