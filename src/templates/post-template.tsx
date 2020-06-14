import Layout from '../components/Layout';
import Banner from '../components/Banner';
import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

const PostTemplate = ({ data }: any) => {
  const {
    mdx: {
      frontmatter: { title, category, date, readTime, image },
      body,
    },
    allMdx: { nodes },
  } = data;

  return (
    <Layout>
      <Wrapper>
        <article className='post-body'>
          <Image className='post-head-img' fluid={image.childImageSharp.fluid} />
          <div className='post-info'>
            <span>{category}</span>
            <h2>{title}</h2>
            <div className='date'>
              <p>{date}</p>
              <p> {`${readTime} min read`}</p>
            </div>
          </div>
          <MDXRenderer>{body}</MDXRenderer>
          <Link to='/posts' className='btn center-btn'>
            back to all posts
          </Link>
        </article>
        <article>
          <Banner bannerPost={{ title: 'related', posts: nodes }} />
        </article>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query GetSinglePost_andRelatedPosts($slug: String, $tag: String) {
    # query to get everythin about the current post
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        category
        date(formatString: "MMMM Do, YYYY")
        title
        readTime
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }

    # query to get info about all the other posts with the same first tag as the current post
    allMdx(limit: 5, filter: { frontmatter: { tags: { eq: $tag }, slug: { ne: $slug } } }) {
      nodes {
        frontmatter {
          slug
          date(formatString: "MMMM Do, YYYY")
          title
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`;

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
  .post-body {
    font-family: var(--ff-primary);

    /*
    ===============
    Post head
    ===============
    */
    .post-head-img {
      max-height: 40vh;
    }
    .post-info {
      margin: 2rem 0 4rem 0;
      text-align: center;
      span {
        background: var(--clr-primary-4);
        color: var(--clr-bg);
        border-radius: var(--radius);
        padding: 0.25rem 0.5rem;
        text-transform: uppercase;
        letter-spacing: var(--spacing);
      }
      h2 {
        font-family: var(--ff-secondary);
        font-size: 2.5rem;
        margin: 1rem 0;
        letter-spacing: var(--spacing);
        font-weight: 700;
      }
      p {
        color: var(--clr-grey-4);
      }
      .date {
        display: flex;
        justify-content: center;
        p {
          margin: auto 1rem;
        }
      }
    }

    /*
    ===============
    button at the bottom
    ===============
    */
    .btn {
      padding: 0.375rem 0.75rem;
      text-transform: uppercase;
      background: var(--clr-bg);
      color: var(--clr-primary-1);
      letter-spacing: var(--spacing);
      font-weight: 400;
      font-size: 0.875rem;
      border: 2px solid transparent;
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      border-radius: var(--radius);
      -webkit-transition: var(--transition);
      transition: var(--transition);
    }
    .btn:hover {
      color: var(--clr-bg);
      background: var(--clr-primary-4);
    }
    .center-btn {
      display: block;
      width: 12rem;
      text-align: center;
      margin: 4rem auto 2rem auto;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
  }
`;

export default PostTemplate;
