import FilterComponent from '../Components/FilterComponent'
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Filter Component Test',()=>
{
    render(<FilterComponent/>);
    test('is render correctly',()=>
    {
        
        const buttonElement=screen.getByTestId("filter_button");
        expect(buttonElement).toBeInTheDocument();
    });
    test('is filter button works correctly',() =>
    {
        render(<FilterComponent/>);
        const buttonElement=screen.getByTestId("filter_button");
        buttonElement.click();
        const applybuttonElement=screen.getByTestId("filter_apply_button");
        expect(applybuttonElement).toBeInTheDocument();
    });
}
);
