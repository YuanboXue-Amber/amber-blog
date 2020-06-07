import { Blockquote, Code, PrismSetup } from './src/components/Complete';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const components = {
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup,
};
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
