import styled from 'styled-components';

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

export const Item = styled.li`
  background-color: ${getRandomHexColor};
`;
