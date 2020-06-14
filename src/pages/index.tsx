import ThemedLayout from '../components/ThemedLayout';
import Posts from '../components/Posts';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import React from 'react';
import { graphql } from 'gatsby';

const IndexPage = ({ data }: any) => {
  const {
    allMdx: { nodes: posts },
  } = data;
  return (
    <ThemedLayout>
      <SEO title={`Home`} />
      <Hero />
      <Posts posts={posts} title='recently published' />
    </ThemedLayout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 10) {
      nodes {
        frontmatter {
          slug
          date(formatString: "MMMM Do, YYYY")
          category
          readTime
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
        id
      }
    }
  }
`;

export default IndexPage;
