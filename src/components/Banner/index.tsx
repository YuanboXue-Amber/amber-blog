import BannerCategories from './BannerCategories';
import BannerPosts, { BannerPostsProps } from './BannerPosts';
import styled from 'styled-components';
import React from 'react';

interface Props {
  bannerPost?: BannerPostsProps;
}
const Banner = ({ bannerPost }: Props) => {
  return (
    <Wrapper>
      <BannerCategories />
      {bannerPost != null && bannerPost.posts != null && bannerPost.posts.length > 0 && (
        <BannerPosts title={bannerPost.title} posts={bannerPost.posts} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
  row-gap: 1rem;
  @media (min-width: 576px) {
    & {
      grid-template-columns: repeat(auto-fit, 200px);
      column-gap: 3rem;
    }
  }
`;

export default Banner;
