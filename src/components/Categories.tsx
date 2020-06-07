import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Categories = () => {
  const {
    allMdx: { distinct },
  } = useStaticQuery(graphql`
    {
      allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `);
  return (
    <ul className='categories'>
      {distinct.map((category: string, index: number) => {
        return (
          <li key={index}>
            <Link to={`/${category}`} className='category'>
              {category}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
