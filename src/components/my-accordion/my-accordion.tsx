import { Component, State, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-accordion',
  styleUrl: 'my-accordion.css',
  shadow: true,
})
export class MyComponent {
  @State() toggle: boolean = false;

  @Prop() label: string;
  @Prop() description: string;
  @Prop() width: string;
  @Prop() color: string;

  render() {
    return [
      <button
        class="accordion"
        style={{
          backgroundColor: this.color,
        }}
        onClick={() => this.toggle = !this.toggle}
      >
        {this.label}
        {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
      </button>,
      <div class={`content-box ${this.toggle ? 'open' : 'close'}`}>
        <p>{this.description}</p>
      </div>,
    ];
  }
}
