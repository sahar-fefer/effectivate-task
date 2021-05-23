import { render, screen } from "@testing-library/react";
import Form from "../form";

test('render form component', () => {
    render(<Form/>);
    const formElement = screen.getByTestId('form-1');
    expect(formElement).toBeInTheDocument();
    expect(formElement).toHaveTextContent('Contact');
})