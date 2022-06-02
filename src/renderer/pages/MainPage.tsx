import styled from 'styled-components';
import MainContainer from 'renderer/components/MainContainer';
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import PDFPage from 'renderer/components/PDFPage';
import Menu from 'renderer/components/Menu';
import { useState } from 'react';

const StyledDocument = styled(Document)`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  align-content: center;
`;

interface Props {
  getPDF: (PDFPath: string) => Uint8Array;
}

const MainPage = ({ getPDF }: Props): JSX.Element => {
  const [PDFFile, setPDFFile] = useState<null | Uint8Array>(null);
  const [numberPages, setNumberPages] = useState<number>(0);

  const handleFile = (files: FileList | null) => {
    if (files !== null) {
      const file = Array.from(files)[0];
      const fileName = file.name;
      const PDFPath = file.path;
      const PDFUint8Array: Uint8Array = getPDF(PDFPath);
      setPDFFile(PDFUint8Array);
    }
  };

  interface DocumentProps {
    numPages: number;
  }

  const onDocumentLoadSuccess = ({ numPages }: DocumentProps) => {
    setNumberPages(numPages);
  };

  return (
    <MainContainer>
      {PDFFile !== null ? (
        <StyledDocument
          file={{ data: PDFFile }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numberPages), (_el, i) => (
            <PDFPage key={i} pageNumber={i + 1} scale={0.2} />
          ))}
        </StyledDocument>
      ) : null}
      <Menu handleFile={handleFile} />
    </MainContainer>
  );
};

export default MainPage;
