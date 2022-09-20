import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./index";

const mockNavComponent = () => {
  render(
    <BrowserRouter>
      <Nav></Nav>
    </BrowserRouter>
  );
};

beforeEach(() => {
  mockNavComponent();
});

describe("Nav Component test", () => {
  it("should render Nav component", function () {
    expect(screen.getByText("Post Reader App")).toBeInTheDocument();
  });
});
