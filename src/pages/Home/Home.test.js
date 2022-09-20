import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./index";

const mockNavComponent = () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

beforeEach(() => {
  mockNavComponent();
});

describe("Home page test", () => {
  it("should render title", function () {
    expect(screen.getByText("Post Reader App")).toBeInTheDocument();
  });
  it("should render input field", () => {
    expect(
      screen.getByPlaceholderText("Enter Post ID - Must Be A Number")
    ).toBeInTheDocument();
  });
  it("should render the button", () => {
    expect(screen.getByText("Read Post")).toBeInTheDocument();
  });
  it("should have an enabled text input", () => {
    const input = screen.getByPlaceholderText(
      "Enter Post ID - Must Be A Number"
    );
    fireEvent.change(input, { target: { value: "123" } });
    expect(screen.getByDisplayValue("123")).toBeInTheDocument();
  });
  // it("should test if button calls the method", async () => {
  //   const input = screen.getByPlaceholderText(
  //     "Enter Post ID - Must Be A Number"
  //   );
  //   fireEvent.change(input, { target: { value: "-1" } });
  //   const btn = screen.getByText("Read Post");
  //   fireEvent.click(btn);
  //   expect(btn).toBeCalledTimes(1);

  //   jest.mock("axios");

  //   const users = [
  //     { id: 1, name: "John" },
  //     { id: 2, name: "Andrew" },
  //   ];
  //   axios.get.mockResolvedValueOnce(users);
  // });
});
