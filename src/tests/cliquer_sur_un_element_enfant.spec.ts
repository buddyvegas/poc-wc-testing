import 'components/todo-list';
import { fixture, html } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

test('cliquer sur un élément enfant', async () => {
  const component = fixture(html`<todo-list></todo-list>`);

  const nestedButton = querySelectorDeep('some-element button', await component);

  nestedButton.click();

  expect(querySelectorDeep('some-element', await component).shadowRoot.innerHTML).toMatch(/Hello/);
});
