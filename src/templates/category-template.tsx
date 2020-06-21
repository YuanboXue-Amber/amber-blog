import ThemedLayout from '../components/ThemedLayout';
import Posts from '../components/Posts';
import React from 'react';
import { graphql } from 'gatsby';

const CategoryTemplate = (props: any) => {
  const {
    pageContext: { category },
  } = props;
  const {
    data: {
      categories: { nodes: posts },
    },
  } = props;
  return (
    <ThemedLayout displayHero={true}>
      <Posts posts={posts} title={`category / ${category}`} />
    </ThemedLayout>
  );
};

export const query = graphql`
  query MyQuery($category: String!) {
    categories: allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          category
          readTime
          date(formatString: "MMMM Do, YYYY")
          slug
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

export default CategoryTemplate;
