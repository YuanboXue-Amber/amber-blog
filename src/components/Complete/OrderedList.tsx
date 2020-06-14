import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const OrderedList = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.ol`
  margin-left: 1rem;
  list-style: none;
  counter-reset: item;
  li {
    counter-increment: item;
  }
  li:before {
    content: counter(item);
    margin-right: 0.5rem;
    font-size: 80%;
    background-color: var(--clr-text-primary-alternate);
    color: white;
    font-weight: bold;
    padding: 2px 5px;
    border-radius: var(--radius);
  }
`;
export default OrderedList;
