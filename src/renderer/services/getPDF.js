const getPDF = (PDFPath) => {
  const Uint8Array = window.electron.getPDF(PDFPath);
  return Uint8Array;
};
export default getPDF;
