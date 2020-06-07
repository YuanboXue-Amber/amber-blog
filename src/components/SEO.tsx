import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

interface Props {
  title: string;
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        siteUrl
      }
    }
  }
`;

const SEO = ({ title }: Props) => {
  const { site } = useStaticQuery(query);
  const { defaultTitle, siteUrl } = site.siteMetadata;
  return (
    <Helmet title={`${defaultTitle}`} htmlAttributes={{ lang: 'en' }}>
      <meta property='og:url' content={siteUrl} />
      {title && <meta property='og:title' content={`${title} | ${defaultTitle}`} />}
    </Helmet>
  );
};

export default SEO;
