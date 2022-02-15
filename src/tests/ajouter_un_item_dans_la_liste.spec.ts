import 'components/todo-list';
import { fixture, html } from '@open-wc/testing';

test('ajouter un item dans la liste', async () => {
  const component = fixture(html`<todo-list></todo-list>`);

  const shadow = (await component).shadowRoot;

  const input = shadow.querySelector('input');
  const addButton = shadow.querySelector('button');

  input.value = 'add new todo';
  addButton.click();

  expect((await component).shadowRoot.querySelector('ul').querySelectorAll('li').length).toBe(3);
  expect((await component).shadowRoot.querySelector('ul').querySelectorAll('li')[2].innerHTML).toMatch(/add new todo/);
});
