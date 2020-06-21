import { ThemeContext, defaultTheme } from './ThemedLayout';
import React, { useContext } from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Wrapper = styled.div`
  .hero-img {
    display: none;
    @media screen and (min-width: 800px) {
      display: block;
      width: 100vw;
      height: 20rem;
      position: relative;
      z-index: -1;
      margin-top: -5rem;
    }
  }
  .hero-img-shadow {
    display: none;
    @media screen and (min-width: 800px) {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100vw;
      height: 20rem;
      z-index: -1;
      box-shadow: 0px -59px 95px 58px var(--clr-bg) inset;
    }
  }
`;

const Hero = () => {
  const {
    allFile: { nodes },
  } = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "assets" }, relativePath: { regex: "/hero(.*)/" } }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const theme = useContext(ThemeContext);
  return (
    <Wrapper>
      <Image
        className='hero-img'
        fluid={
          theme == defaultTheme ? nodes[0].childImageSharp.fluid : nodes[1].childImageSharp.fluid
        }
      />
      <div className='hero-img-shadow'></div>
    </Wrapper>
  );
};

export default Hero;
