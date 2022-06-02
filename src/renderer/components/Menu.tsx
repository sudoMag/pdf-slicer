import useVisibility from 'renderer/hooks/useVisibility';
import MenuActions from 'renderer/components/MenuActions';
import MenuIconSrc from 'renderer/icons/Menu Icon.svg';
import styled from 'styled-components';
import opacity from 'renderer/animations/opacity';
import MenuButton from './MenuButton';

const MenuIcon = styled.img`
  margin: auto;
  animation: ${opacity} 500ms 0ms linear;
`;

interface Props {
  handleFile: (files: FileList | null) => void;
}

const Menu = ({ handleFile }: Props) => {
  const { visibility, handleVisibility } = useVisibility(false);

  return (
    <MenuButton
      onClick={visibility === false ? handleVisibility : undefined}
      showMenu={visibility}
    >
      {visibility === true ? (
        <MenuActions
          handleVisibility={handleVisibility}
          handleFile={handleFile}
        />
      ) : (
        <MenuIcon src={MenuIconSrc} />
      )}
    </MenuButton>
  );
};

export default Menu;
