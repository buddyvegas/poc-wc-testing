import domTestingLib, { prettyDOM, queryHelpers } from "@testing-library/dom";
import { fixture, html } from "@open-wc/testing";

export function getByWebcomponent(container: HTMLElement, tagName: string) {
  const element = container.querySelector(tagName);
  const compoennt = fixture(element);

  if (!element) {
    throw queryHelpers.getElementError(
      `Unable to find a web component with tag: ${tagName}`,
      container
    );
  }

  console.log(prettyDOM(element));

  // return
  // <style>
  //   .completed {
  //     text-decoration-line: line-through;
  //     color: #777;
  //   }
  // </style>
  // ????????
  return element.shadowRoot;
}

const extendQueries = {
  ...domTestingLib,
  getByWebcomponent,
};

export default extendQueries;
