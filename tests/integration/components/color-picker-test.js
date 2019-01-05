import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | color-picker', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{color-picker}}`);

    assert.equal(
      getComputedStyle(this.element.querySelector('.pcr-button')).backgroundColor,
      'rgb(255, 255, 255)'
    );
  });

  test('it applies the disabled property', async function(assert) {
    await render(hbs`{{color-picker disabled=true}}`);

    assert.ok(this.element.querySelector('.pcr-button').className.includes('disabled'));
  });

  test('it is not disabled by default', async function(assert) {
    await render(hbs`{{color-picker}}`);

    assert.notOk(this.element.querySelector('.pcr-button').className.includes('disabled'));
  });

  test('it applies the default value', async function(assert) {
    await render(hbs`{{color-picker default="#333"}}`);

    assert.equal(
      getComputedStyle(this.element.querySelector('.pcr-button')).backgroundColor,
      'rgb(51, 51, 51)'
    );
  });

  test('it takes the color assigned to value in initial render', async function(assert) {
    await render(hbs`{{color-picker value="#fff"}}`);

    assert.equal(
      getComputedStyle(this.element.querySelector('.pcr-button')).backgroundColor,
      'rgb(255, 255, 255)'
    );
  });

  test('it takes the color assigned to value in initial render even when default is present', async function(assert) {
    await render(hbs`{{color-picker default="#ff0000" value="#fff"}}`);

    assert.equal(
      getComputedStyle(this.element.querySelector('.pcr-button')).backgroundColor,
      'rgb(255, 255, 255)'
    );
  });

  test('it keeps the color palette hidden when rendered', async function(assert) {
    await render(hbs`{{color-picker}}`);

    assert.equal(
      getComputedStyle(this.element.querySelector('.pcr-app')).visibility,
      'hidden'
    );

    assert.equal(
      getComputedStyle(this.element.querySelector('.pcr-app')).opacity,
      0
    );
  });

  test('it opens the color palette when clicked', async function(assert) {
    await render(hbs`{{color-picker showAlways=true}}`);
    await click('.pcr-button');

    assert.equal(
      getComputedStyle(this.element.querySelector('.pcr-app')).visibility,
      'visible'
    );

    assert.equal(
      getComputedStyle(this.element.querySelector('.pcr-app')).opacity,
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
    await click('.pcr-button');

    assert.equal(
      getComputedStyle(this.element.querySelector('.pcr-color-opacity')).display,
      'none'
    );
  });
});
