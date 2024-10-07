import React from 'react';
import styled from 'styled-components';

const StarRating = () => {
  return (
    <Container>
      <Stars>
        ★★★★☆
      </Stars>
      <Text className='text-lg md:text-2xl text-gray-500 font-sans'>768-123 Reviews</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Stars = styled.span`
  color: red;
  font-size: 32px; /* adjust size as needed */
`;

const Text = styled.span`
  margin-left: 10px;
  color: #777;
  font-size: 20px; /* adjust size as needed */
`;

export default StarRating;
