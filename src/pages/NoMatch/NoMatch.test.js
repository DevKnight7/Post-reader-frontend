import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NoMatch from "./index";

const mockNavComponent = () => {
  render(
    <BrowserRouter>
      <NoMatch></NoMatch>
    </BrowserRouter>
  );
};

beforeEach(() => {
  mockNavComponent();
});

describe("Nomatch page test", () => {
  it("should have", () => {
    expect(screen.getByText("Page Not Found. Go to")).toBeInTheDocument();
  });
});
