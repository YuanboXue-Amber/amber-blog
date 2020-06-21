import ThemedLayout from '../components/ThemedLayout';
import Posts from '../components/Posts';
import React from 'react';
import { graphql } from 'gatsby';

const PostsPage = ({ data }: any) => {
  const {
    allMdx: { nodes: posts },
  } = data;
  return (
    <ThemedLayout displayHero={true}>
      <Posts posts={posts} title='all posts' />
    </ThemedLayout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
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

export default PostsPage;
