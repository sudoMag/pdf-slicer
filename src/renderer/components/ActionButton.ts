import styled from 'styled-components';
import opacity from 'renderer/animations/opacity';

interface Props {
  index: number;
}

const ActionButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: #4a5d68;
  margin: 10px;
  display: flex;
  align-items: center;
  opacity: 0;
  animation: ${opacity} 200ms ${({ index }: Props) => 100 * index + 150}ms
    linear forwards;
  transition: 200ms cubic-bezier(0.64, -0.41, 0.61, 1.5);
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #4e748b;
    transform: scale(1.2);
  }
`;
export default ActionButton;
