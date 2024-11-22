<<<<<<< HEAD
import Home from "./pages/Home";

function App() {
  return (
    <Home />
  );
}

export default App;
=======
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders book store", () => {
  render(<App />);
  const linkElement = screen.getByText(/book store/i);
  expect(linkElement).toBeInTheDocument();
});
>>>>>>> 067a098 (Final)
