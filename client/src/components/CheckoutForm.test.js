import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
  });
  
  test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const fValue = 'Eric';
    const lValue = 'Capiz';
    const addressValue = '123 fake st';
    const cityValue = 'Chicago';
    const stateValue = 'Illinois';
    const zipValue = '60647';

    const fName = screen.getByLabelText(/First Name:/i);
    const lName = screen.getByLabelText(/Last Name:/i);
    const address = screen.getByLabelText(/Address:/i);
    const city = screen.getByLabelText(/City:/i);
    const state = screen.getByLabelText(/State:/i);
    const zip = screen.getByLabelText(/Zip:/i);

    userEvent.type(fName, fValue);
    userEvent.type(lName, lValue);
    userEvent.type(address, addressValue);
    userEvent.type(city, cityValue);
    userEvent.type(state, stateValue);
    userEvent.type(zip, zipValue);
    
    expect(fName).toHaveValue(fValue);
    expect(lName).toHaveValue(lValue);
    expect(address).toHaveValue(addressValue);
    expect(city).toHaveValue(cityValue);
    expect(state).toHaveValue(stateValue);
    expect(zip).toHaveValue(zipValue);

    const submitButton = screen.getByTestId('checkouts');
    userEvent.click(submitButton);

    const successMessage = screen.getByTestId('successMessage')
    expect(successMessage).toBeInTheDocument();

});
  