import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Code = ({ children }: Props) => {
  return (
    <code
      style={{
        color: 'var(--clr-bright-pumpkin)',
        fontSize: '1.25rem',
      }}
    >
      {children}
    </code>
  );
};

export default Code;
