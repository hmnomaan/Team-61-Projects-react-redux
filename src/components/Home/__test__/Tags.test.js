import { render, screen } from '@testing-library/react';
import Tags from '../Tags';

test('renders learn react link', () => {
    render(<Tags />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});