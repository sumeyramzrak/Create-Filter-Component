import FilterComponent from '../Components/FilterComponent'
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
describe('Filter Component Test', () => {
    test('is render correctly', () => {
        render(<FilterComponent />);
        const buttonElement = screen.getByTestId("filter_button");
        expect(buttonElement).toBeInTheDocument();
    });
    test('is filter button works correctly', () => {
        render(<FilterComponent />);
        const buttonElement = screen.getByTestId("filter_button");
        userEvent.click(buttonElement);
        const applybuttonElement = screen.getByTestId("filter_apply_button");
        expect(applybuttonElement).toBeInTheDocument();
    });
    test("checkboxes creates correctly", async () => {
        render(<FilterComponent />);
        const buttonElement = screen.getByTestId("filter_button");
        userEvent.click(buttonElement);
        const checkbox =  await screen.findAllByTestId("custom-checkbox-element");
        expect(checkbox).not.toHaveLength(0);
    });
}
);
