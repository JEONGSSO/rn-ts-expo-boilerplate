import React from "react";
import App from "./App";

import { render } from "./test-utils/renderWithProvider";

test("renders correctly", () => {
  const { getByText } = render(<App />);

  getByText("App.tsx");
});
