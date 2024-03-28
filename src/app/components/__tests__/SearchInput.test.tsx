import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/utils-for-test";
import SearchInput from "../SearchInput";

describe("SearchInput", () => {
  beforeEach(() => {
    renderWithProviders(<SearchInput />);
  });
  it("should contain text that user type", async () => {
    const inputEl = screen.getByRole("textbox");

    expect(inputEl).toBeInTheDocument();
    fireEvent.change(inputEl, { target: { value: "Proba, jedan dva" } });
    expect(inputEl).toHaveValue("Proba, jedan dva");
  });
  
});