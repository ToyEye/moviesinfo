import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 80px;
  padding-top: 80px;
`;

export const ReviewList = styled.ul`
  display: grid;
  gap: 20px;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const AuthorThumb = styled.div`
  border-radius: 5px;
  overflow: hidden;
  padding: 10px 15px;
`;

export const ContentThumb = styled.div`
  padding: 10px 15px;
`;
