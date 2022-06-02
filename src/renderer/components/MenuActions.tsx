import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import BackButton from './BackButton';
import ActionButton from './ActionButton';

const ButtonsContainer = styled.div`
  height: 80%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilesInput = styled.input`
  width: 100%;
  opacity: 0;
  position: absolute;
  cursor: pointer;
`;

interface Props {
  handleVisibility: () => void;
  handleFile: (files: FileList | null) => void;
}

const MenuActions = ({ handleVisibility, handleFile }: Props): JSX.Element => {
  const dictoriesInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (dictoriesInputRef.current !== null) {
      // convert files input to directories input
      dictoriesInputRef.current.setAttribute('directory', '');
      dictoriesInputRef.current.setAttribute('webkitdirectory', '');
    }
  }, [dictoriesInputRef]);

  const handleDirectory = (target: HTMLElement) => {
    // console.log(target);
    return target;
  };

  return (
    <>
      <ButtonsContainer>
        <ActionButton index={0}>
          <FilesInput
            type="file"
            accept="application/pdf"
            onChange={(e) => {
              handleFile(e.target.files);
            }}
          />
          abrir
        </ActionButton>
        <ActionButton index={1}>guardar seleccion</ActionButton>
        <ActionButton index={2}>
          <FilesInput
            type="file"
            ref={dictoriesInputRef}
            onChange={(e) => {
              handleDirectory(e.target);
            }}
          />
          guardar todos
        </ActionButton>
        <ActionButton index={3}>configuracion</ActionButton>
      </ButtonsContainer>
      <BackButton onClick={handleVisibility} />
    </>
  );
};

export default MenuActions;
