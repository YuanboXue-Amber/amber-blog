import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Code = ({ children }: Props) => {
  return (
    <code
      style={{
        background: 'var(--clr-grey-10)',
        color: 'var(--clr-grey-5)',
        padding: '1rem',
        borderRadius: 'var(--radius)',
      }}
    >
      {children}
    </code>
  );
};

export default Code;
