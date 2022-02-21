import { render, waitFor } from "@testing-library/react";
import screen from "./tests/extend-query-shadow";
// import screen from "./tests/extend-query-shadow";
import App from "./App";

test("renders learn react link", async () => {
  const { container } = render(<App />);

  const test = screen.getByWebcomponent(container, "todo-list");

  console.log(test?.innerHTML);

  // const test = screen.getByWebcomponent("todo-list", container);

  // const nestedButton = container.shadowRoot
  //   ?.querySelector("some-element")
  //   ?.shadowRoot?.querySelector("button");

  // nestedButton?.click();

  // await waitFor(() => {
  //   expect(
  //     container.shadowRoot?.querySelector("some-element")?.shadowRoot?.innerHTML
  //   ).toMatch(/Hello/);
  // });

  // expect(
  //   container.shadowRoot?.querySelector("some-element")?.shadowRoot?.innerHTML
  // ).toMatch(/Hello/);

  // const nestedButton = querySelectorDeep("some-element button");

  // nestedButton.click();

  // expect(querySelectorDeep("some-element").shadowRoot.innerHTML).toMatch(
  //   /Hello/
  // );
});
