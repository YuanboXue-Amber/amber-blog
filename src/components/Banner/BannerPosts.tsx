import Title from './Title';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

export interface BannerPostsProps {
  title: string;
  posts: any[];
}

const BannerPosts = ({ title, posts }: BannerPostsProps) => {
  return (
    <Wrapper>
      <Title title={title} />
      {posts.map((post) => {
        const {
          title,
          slug,
          date,
          image: {
            childImageSharp: { fluid },
          },
        } = post.frontmatter;
        return (
          <Link to={`/posts/${slug}`} key={post.id} className='post'>
            <Image fluid={fluid} className='img' />
            <div>
              <h5>{title}</h5>
              <p>{date}</p>
            </div>
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .post {
    display: grid;
    grid-template-columns: 75px 1fr;
    column-gap: 1rem;
    margin-bottom: 1rem;
  }
  .img {
    border-radius: var(--radius);
  }
  h5 {
    font-size: 0.7rem;
    margin-bottom: 0.25rem;
    letter-spacing: 0;
    line-height: 1.2;
    color: var(--clr-grey-1);
  }
  p {
    font-size: 0.6rem;
    margin-bottom: 0;
    color: var(--clr-grey-5);
  }
  .post:hover {
    h5 {
      color: var(--clr-pink);
    }
  }
`;

export default BannerPosts;
