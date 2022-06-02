import { render } from 'react-dom';
import App from './App';
import getPDF from './services/getPDF';

render(<App getPDF={getPDF} />, document.getElementById('root'));
