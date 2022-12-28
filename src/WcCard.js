import { html, css, LitElement } from 'lit';

export class WcCard extends LitElement {
  static get styles() {
    return css`
      :host{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }

      .card{
        border: 1px solid rgba(0,0,0,0.125);
        border-radius: .25rem;
      }

      .card-header, .card-footer{
        padding: .75rem 1.25rem;
        background-color: rgba(0,0,0,.03);
      }

      .card-header{
        border-bottom: 1px solid rgba(0,0,0,0.125);
      }

      .card-footer{
        border-top: 1px solid rgba(0,0,0,0.125);
        text-align: var(--footer-align, left);
      }

      .card-body{
        padding:1.25rem;
        line-height:1.5;
      }

      h5{
        font-size:1.25rem;
        margin-block-start:0;
        margin-block-end:0;
        margin-bottom: .75rem;
      }

      ::slotted(p){
        margin-block-start:0;
        margin-block-end: 1rem;
      }

      .card-image{
        width: 100%;
      }



    `;
  }

  static get properties() {
    return {
      title :{type:String},
      header:{type:String},
      footer :{type:String},
    };
  }

  constructor() {
    super();
    this.title = 'Card title';
  };



  render() {
    return html`
      <div class="card">
        ${this.header
          ? html`<div class="card-header">${this.header}</div>`
          : ''
        }
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <slot></slot>
        </div>
        ${this.footer
          ? html`<div class="card-footer">${this.footer}</div>`
          : ''
        }
      </div>

    `;
  }
}
