// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
            tags
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `);

  result.data.allMdx.nodes.forEach(({ frontmatter: { slug, tags } }) => {
    // Tag is used to search all blogs with the same tag and display their preview on the side
    let tag = '';
    if (tags != null && tags.length > 0) tag = tags[0];
    createPage({
      path: `/posts/${slug}`,
      component: path.resolve(`src/templates/post-template.tsx`),
      context: {
        slug,
        tag,
      },
    });
  });

  result.data.categories.distinct.forEach((category) => {
    createPage({
      path: `/${category}`,
      component: path.resolve(`src/templates/category-template.tsx`),
      context: {
        category,
      },
    });
  });
};
