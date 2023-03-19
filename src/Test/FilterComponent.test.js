import { FilterComponent } from '../Components/FilterComponent'
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExpensesList } from '../Pages/ExpensesList';

describe("filter component", () => {
    test("renders correctly", () => {
        render(<FilterComponent />);
        const element = screen.getByTestId("filter_button");
        expect(element).toBeInTheDocument();
    });
    test("filter button works correctly", async () => {
        render(<FilterComponent />);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const checkbox = await screen.findAllByTestId("custom-checkbox-element");
        expect(checkbox).not.toHaveLength(0);
    });
    test("checkboxes works correctly", async () => {
        function ApplyFilterData(filter) { };
        const { getByTestId } = render(<FilterComponent applyFilter={(filter) => ApplyFilterData(filter)} />);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const checkbox = await screen.findAllByTestId("custom-checkbox-element");
        expect(checkbox).not.toHaveLength(0);  //filter butonuna tıklandığında filtre listesi açılıyor mu?
        expect(checkbox[0].checked).toEqual(false); //checkboxlara tıklanmadığında unchecked durumunda mı?
        await userEvent.click(checkbox[0]);
        expect(checkbox[0].checked).toEqual(true); //checkboxlardan birine tıklandığında checked oluyor mu?
        await userEvent.click(checkbox[0]);
        expect(checkbox[0].checked).toEqual(false); // checked olan checkbox a tekrar tıklandığında unchecked oluyor mu?
        const applyButton = getByTestId("filter_apply_button");
        userEvent.click(applyButton);
        expect(checkbox[0]).not.toBeInTheDocument();  //apply filter butonuna basıldığında checkboxların kaybolması gerekir.
    });
    test("apply filter button works correctly", () => {
        function ApplyFilterData(filter) { };
        const { getByTestId } = render(<FilterComponent applyFilter={(filter) => ApplyFilterData(filter)} />);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement); //filtre butonuna tıklandığında filtreler açılsın
        const applyButton = getByTestId("filter_apply_button");
        expect(applyButton).toBeInTheDocument(); //apply filter butonu bulunuyor mu?
        userEvent.click(applyButton); //apply filter butonuna basıldığında butonun kaybolması gerekir.
        expect(applyButton).not.toBeInTheDocument(); // apply filter butonuna basıldığında buton kayboluyor mu?
    });
});