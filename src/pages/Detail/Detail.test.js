import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Detail from "./index";

const mockNavComponent = () => {
  render(
    <BrowserRouter>
      <Detail></Detail>
    </BrowserRouter>
  );
};

beforeEach(() => {
  mockNavComponent();
});

describe("Detail page test", () => {
  it("should have", function () {
    expect(screen.getByText("Post Reader App")).toBeInTheDocument();
  });
});
