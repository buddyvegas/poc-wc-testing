import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('some-element')
export class InputText extends LitElement {
  @property()
  uselessText: string;

  doNothingUsefull() {
    this.uselessText = 'Hello';
  }

  render() {
    return html`
      <p>
        <br />
        <button @click=${() => this.doNothingUsefull()}>Useless button</button>
        ${this.uselessText}
      </p>
    `;
  }
}
