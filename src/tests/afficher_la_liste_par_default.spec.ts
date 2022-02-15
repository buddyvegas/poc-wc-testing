import 'components/todo-list';
import { fixture, html } from '@open-wc/testing';

test('afficher la liste par defaut', async () => {
  const shadow = (await fixture(html`<todo-list></todo-list>`)).shadowRoot;

  expect(shadow.querySelector('h2').innerHTML).toBe('To Do');
  expect(shadow.querySelector('ul').querySelectorAll('li').length).toBe(2);
});
