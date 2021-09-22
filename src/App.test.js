/* eslint-disable no-undef */
import React from 'react'
import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 
 
describe("<Form />", () => {
 
  test('render search input', () => {
    render(<App />);
 
    const inputEl = screen.getAllByTestId('input-feild')
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "search");
  });
 
  test('pass valid data to test the input', () => {
    render(<App />);
 
    const inputEl = screen.getByTestId("input-feild");
    userEvent.type(inputEl, "java and javascript");
 
    expect(screen.getByTestId("input-feild")).toHaveValue("java and javascript");
  });
 
});
