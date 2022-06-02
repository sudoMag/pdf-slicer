import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

interface Props {
  getPDF: (PDFPath: string) => Uint8Array;
}

export default function App({ getPDF }: Props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage getPDF={getPDF} />} />
      </Routes>
    </Router>
  );
}
