import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../wc-card.js';

describe('WcCard', () => {
  it('has a default title "Card title"', async () => {
    const el = await fixture(html`<wc-card></wc-card>`);

    expect(el.title).to.equal('Card title');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`<wc-card title="Test"></wc-card>`);

    expect(el.title).to.equal('Test');
  });


});
