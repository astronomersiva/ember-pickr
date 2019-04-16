import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

// This horror is because, pickr has CSS transitions
// while values are set. Without these, most tests will fail.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getPickerElement(selector = '.pcr-app') {
  let matches = document.querySelectorAll(selector);
  return matches[matches.length - 1];
}

module('Integration | Component | color-picker', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{color-picker default="#ffffff"}}`);
    await sleep(1000);

    assert.equal(
      getComputedStyle(this.element.querySelector('.pcr-button')).color,
      'rgb(255, 255, 255)'
    );
  });

  test('it applies the disabled property', async function(assert) {
    await render(hbs`{{color-picker disabled=true}}`);
    await sleep(1000);

    assert.ok(this.element.querySelector('.pcr-button').className.includes('disabled'));
  });

  test('it is not disabled by default', async function(assert) {
    await render(hbs`{{color-picker}}`);
    await sleep(1000);

    assert.notOk(this.element.querySelector('.pcr-button').className.includes('disabled'));
  });

  test('it applies the comparison property', async function(assert) {
    await render(hbs`{{color-picker comparison=false}}`);
    await sleep(1000);

    assert.equal(this.element.querySelector('.pcr-button').style.transition, 'none 0s ease 0s');
  });

  test('it applies the default value', async function(assert) {
    await render(hbs`{{color-picker default="#333"}}`);
    await sleep(1000);

    assert.equal(
      getComputedStyle(this.element.querySelector('.pcr-button')).color,
      'rgb(51, 51, 51)'
    );
  });

  test('it takes the color assigned to value in initial render', async function(assert) {
    await render(hbs`{{color-picker value="#fff"}}`);
    await sleep(1000);

    assert.equal(
      getComputedStyle(this.element.querySelector('.pcr-button')).color,
      'rgb(255, 255, 255)'
    );
  });

  test('it takes the color assigned to value in initial render even when default is present', async function(assert) {
    await render(hbs`{{color-picker default="#ff0000" value="#fff"}}`);
    await sleep(1000);

    assert.equal(
      getComputedStyle(this.element.querySelector('.pcr-button')).color,
      'rgb(255, 255, 255)'
    );
  });

  test('it keeps the color palette hidden when rendered', async function(assert) {
    await render(hbs`{{color-picker}}`);
    await sleep(1000);

    // this is because the color picker is created as a child of body
    assert.equal(
      getComputedStyle(getPickerElement()).visibility,
      'hidden'
    );

    // this is because the color picker is created as a child of body
    assert.equal(
      getComputedStyle(getPickerElement()).opacity,
      0
    );
  });

  test('it opens the color palette when clicked', async function(assert) {
    await render(hbs`{{color-picker showAlways=true}}`);
    await sleep(1000);
    await click('.pcr-button');

    // this is because the color picker is created as a child of body
    assert.equal(
      getComputedStyle(getPickerElement()).visibility,
      'visible'
    );

    // this is because the color picker is created as a child of body
    assert.equal(
      getComputedStyle(getPickerElement()).opacity,
      1
    );
  });

  test('it respects component options', async function(assert) {
    let components = {
      opacity: false,
      interaction: {
        rgba: false,
        hsva: false
      }
    };

    this.set('componentOpts', components);

    await render(hbs`{{color-picker components=componentOpts}}`);
    await sleep(1000);
    await click('.pcr-button');

    // this is because the color picker is created as a child of body
    assert.equal(
      getComputedStyle(getPickerElement('.pcr-color-opacity')).display,
      'none'
    );
  });

  test('it respects the format option', async function(assert) {
    this.set('color', '#123');

    await render(hbs`
      {{color-picker value=color format="hex"}}
    `);
    await sleep(1000);
    assert.equal(this.get('color'), '#123123');

    await render(hbs`
      {{color-picker value=color format="hsva"}}
    `);
    await sleep(1000);
    assert.equal(this.get('color'), 'hsva(153, 64%, 20%, 1.0)');

  });

  test('it changes color when the bound value is changed', async function(assert) {
    this.set('color', '#123');

    await render(hbs`
      {{input value=color}}
      {{color-picker value=color format="hex"}}
    `);
    await sleep(1000);

    assert.equal(this.get('color'), '#123123');
    assert.equal(this.element.querySelector('input').value, '#123123');

    await fillIn('input', '#00ff00');
    assert.equal(this.get('color'), '#00ff00');
  });
});
