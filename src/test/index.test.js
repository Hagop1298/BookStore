import { fireEvent, render, screen } from '@testing-library/react';
import Nav from '../navigation';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Nav component', () => {
      test('filter by category', () => {
        render(
            <MemoryRouter>
                <Nav />
            </MemoryRouter>
        )
        const selectCategory = screen.getByRole('combobox');
        fireEvent.change(selectCategory, { target: { value: 'Science Fiction' } });
      });

    test('filter by price', () => {
        render(
            <MemoryRouter>
                <Nav />
            </MemoryRouter>
        )
        const inputElement = screen.getByPlaceholderText('Search-price');
        expect(inputElement).toBeInTheDocument();
    });


    test('reset filters', () => {
        render(
            <MemoryRouter>
                <Nav />
            </MemoryRouter>
        )
        const resetButton = screen.getByTestId("button")
        expect(resetButton).toBeInTheDocument()
    });
});
