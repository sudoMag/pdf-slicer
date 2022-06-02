import styled from 'styled-components';

interface Props {
  showMenu: boolean;
}

const MenuButton = styled.div`
  width: 54px;
  height: 54px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: #68b0b5;
  border-radius: 50px;
  margin: 0 auto 15px;
  align-self: end;
  overflow: hidden;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.64, -0.41, 0.61, 1.5);
  ${({ showMenu }: Props) => {
    if (showMenu === true) {
      return `
        width: 80vw;
        height: 50vh;
        left: calc(50vw - (80vw / 2));
        transform: translateY(-50px);
        border-radius: 35px;
        margin: 0 auto 30px;
      `;
    }
    if (showMenu === false) {
      return `
        cursor: pointer;
        left: calc(50vw - (54px / 2));

        &:hover {
          box-shadow: 0px 0px 14px 0px #68b0b5;
        }
      `;
    }
    return null;
  }}
`;

export default MenuButton;
