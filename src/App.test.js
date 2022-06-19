import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const contactUsButton =  await screen.findAllByRole('button',{name:'Contact us'})
 
});
