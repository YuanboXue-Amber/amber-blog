import React from 'react';
import Image from 'gatsby-image';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { FaRegClock } from 'react-icons/fa';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Post = ({ frontmatter, excerpt }: any) => {
  const { title, image, slug, date, category, readTime } = frontmatter;
  return (
    <Wrapper>
      <Link to={`/posts/${slug}`}>
        <Image fluid={image.childImageSharp.fluid} className='img' />
      </Link>
      <div className='info'>
        <span className='category'>{category}</span>
        <Link to={`/posts/${slug}`}>
          <h3>{title}</h3>
          <div className='underline'></div>
        </Link>
        <p>{excerpt}</p>
        <Link to={`/posts/${slug}`} className='link'>
          Continue Reading <IoMdArrowRoundForward />
        </Link>
        <footer>
          <span className='date'>
            <FaRegClock className='icon'></FaRegClock>
            {date}
          </span>
          <span>{readTime} min read</span>
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-bottom: 3rem;
  .info {
    text-align: center;
  }
  .img {
    margin-bottom: 1rem;
    border-radius: var(--radius);
    height: 17rem;
    cursor: pointer;
  }
  .category {
    display: inline-block;
    margin-bottom: 1rem;
    background: var(--clr-grey-5);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: var(--clr-bg);
  }
  h3 {
    color: var(--clr-primary-1);
    font-weight: 700;
    letter-spacing: var(--spacing);
    margin-bottom: 1rem;
    text-transform: initial;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-5);
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  p {
    color: var(--clr-grey-1);
    line-height: 1.8;
  }
  .link {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-weight: 700;
    color: var(--clr-primary-2);
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }
  .link:hover {
    color: var(--clr-pink);
  }
  footer {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--clr-grey-5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--clr-grey-4);

    & .date {
      display: flex;
      align-items: center;
      & .icon {
        color: var(--clr-grey-4);
        margin-right: 0.5rem;
      }
    }
  }
  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      height: 25rem;
    }
  }
  @media (min-width: 992px) {
    & {
      display: grid;
      grid-template-columns: 30rem 1fr;
      column-gap: 1.5rem;
      .info {
        text-align: left;
      }
      .img {
        height: 100%;
        max-height: 20rem;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
      .link {
        justify-content: flex-start;
      }
    }
  }
`;

export default Post;
