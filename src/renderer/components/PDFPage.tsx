import { useRef } from 'react';
import { Page } from 'react-pdf/dist/esm/entry.webpack';
import styled from 'styled-components';

const PageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin: 20px;
  background-color: #4f6579;
`;

interface Props {
  pageNumber: number;
  scale: number;
}

const PDFPage = ({ pageNumber, scale }: Props) => {
  const refCanvasPage = useRef<HTMLCanvasElement>(null);
  const imgFile = {
    jpg: 'image/jpeg',
    png: 'image/png',
    bestQuality: 1,
    mediunQuality: 0.5,
    lowQuality: 0.1,
  };

  const onRenderPage = () => {
    if (refCanvasPage.current != null) {
      refCanvasPage.current.toBlob(
        (blob) => blob,
        imgFile.jpg,
        imgFile.bestQuality
      );
    }
  };

  return (
    <PageContainer>
      <Page
        canvasRef={refCanvasPage}
        pageNumber={pageNumber}
        scale={scale}
        onRenderSuccess={onRenderPage}
      />
    </PageContainer>
  );
};
export default PDFPage;
