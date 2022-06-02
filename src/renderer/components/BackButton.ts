import styled from 'styled-components';

const BackButton = styled.button`
  width: 100%;
  height: 40px;
  align-self: end;
  margin: 10px auto 0 auto;
  border: none;
  transition-duration: 200ms;
  background-color: #68b0b5;
  cursor: pointer;

  &:hover {
    background-color: #559499;
  }
`;

export default BackButton;
