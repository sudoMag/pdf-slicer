import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../renderer/App';
import getPDF from '../renderer/services/getPDF';

describe('App', () => {
  it('should render', () => {
    expect(render(<App getPDF={getPDF} />)).toBeTruthy();
  });
});
