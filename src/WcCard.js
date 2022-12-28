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
        height: 180px;
        border-top-left-radius: calc(.25rem - 1px);
        border-top-right-radius: calc(.25rem - 1px);
      }

      .card-action{
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        border: 1px solid transparent;
        padding: .375rem .75 rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        color: var(--action-button-color,#fff);
        background-color:var(--action-button-bg,#007bff);
        border-color:var(--action-button-bg,#007bff);
        cursor: pointer;
      }

      .card-action:hover{
        color: var(--action-button-color,#fff);
        background-color:var(--action-button-bg-hover,#0069d9);
        border-color:var(--action-button-bg-hover,#0062cc);
      }
    `;
  }

  static get properties() {
    return {
      title :{type:String},
      header:{type:String},
      footer :{type:String},
      img :{type:String},
      action :{type:String},
    };
  }

  constructor() {
    super();
    this.title = 'Card title';
    this.action = 'Aceptar';
  };



  render() {
    return html`
      <div class="card">
        ${this.header
          ? html`<div class="card-header">${this.header}</div>`
          : ''
        }
        ${this.img && !this.header
          ? html `<img class='card-img' src='${this.img}' alt='Imagen de cabecera'>`
          : ''
        }
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <slot></slot>
          ${this.action
            ? html`<button class='card-action' @click=${this.handleAction}>${this.action}</button>`
            : ''
          }
        </div>
        ${this.footer
          ? html`<div class="card-footer">${this.footer}</div>`
          : ''
        }
      </div>

    `;
  }

  handleAction (){
    const event = new CustomEvent('card-action');
    this.dispatchEvent(event);
  }
}
