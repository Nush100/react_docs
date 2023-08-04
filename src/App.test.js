import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const testElement =  screen.getByText('Go to game start');
  expect(testElement).toBeInTheDocument();
});
