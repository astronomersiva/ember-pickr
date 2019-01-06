# Introduction

ember-pickr is an EmberJS addon that wraps [pickr](https://simonwep.github.io/pickr/),
a flat, simple, responsive and hackable color picker. It has zero dependencies and
works without jQuery.

## Installation

```sh
ember install ember-pickr
```

## Usage

{{#docs-demo class='docs-text-left' as |demo|}}
  {{#demo.example name='template.hbs'}}
    <p>The currently selected color is <strong>{{selectedColor}}</strong>.</p>
    <div class="docs-flex">
      {{color-picker
        value=selectedColor
        default="#e04e39"
        format="hex"
      }}
    </div>
  {{/demo.example}}

  {{demo.snippet 'template.hbs'}}
{{/docs-demo}}

## Options

Takes all [options](https://github.com/Simonwep/pickr#optional-options) that are applicable to pickr.

* **`disabled`**: Start state. If `true`, 'disabled' will be added to the button's classlist | **`false`**
* **`default`**: Default color | **#fff**
* **`comparison`**: If set to `false` it would directly apply the selected color on the button and preview | **`true`**
* **`defaultRepresentation`**: Default color representation. Valid options are `HEX`, `RGBA`, `HSVA`, `HSLA` and `CMYK` | **`HEX`**
* **`showAlways`**: Option to keep the color picker always visible | **`false`**
* **`closeWithKey`**: Close pickr with this specific key. Can be the event key or code | **`Escape`**
* **`position`**: Defines the position of the color-picker. Available options are top, left and middle relative
to the picker button. If clipping occurs, the color picker will automatically choose his position. | **`middle`**
* **`adjustableNumbers`**: Enables the ability to change numbers in an input field with the scroll-wheel.
To use it set the cursor on a position where a number is and scroll, use ctrl to make steps of five | **`true`**
* **`saveLabel`**: Button label for save button | **`Save`**
* **`clearLabel`**: Button label for clear button | **`Clear`**
* **`format`**: One of `hsva`, `hsla`, `rgba`, `hex`, `cmyk` | **`{ h, s, v, a }`**
* To use the **`onChange`** and **`onSave`** handlers, use closure actions.
{{#docs-demo class='docs-text-left' as |demo|}}
  {{#demo.example name='template-onSave.hbs'}}
    <p>The currently selected color is <strong>{{color}}</strong>.</p>
    <div class="docs-flex">
      {{color-picker
        value=color
        default="#e04e39"
        format="hex"
        saveLabel="Set Color"
        onSave=(action "handleOnSave")
      }}
    </div>
  {{/demo.example}}

  {{demo.snippet 'template-onSave.hbs'}}
  {{demo.snippet 'controller-onSave.js' title='controller.js'}}
{{/docs-demo}}
The **`onSave`** and **`onChange`** handlers can take two parameters - **`hsva`** and **`instance`** where **`hsva`** is an HSVa
color object and **`instance`** is the current instance of Pickr. The HSVa object has **`toHSVA`**, **`toHSLA`**,
**`toRGBA`**, **`toHEX`**, **`toCMYK`**, and **`clone`** methods that return the converts the object into corresponding arrays.
You can call **`toString`** on the resulting array to get the string representation of the colors.
* To toggle components inside the color picker, you can pass the following options to the **`components`** property:
```javascript
{
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      hex: true,
      rgba: true,
      hsva: true,
      input: true,
      clear: true,
      save: true
    }
}
```
{{#docs-demo class='docs-text-left' as |demo|}}
  {{#demo.example name='template-components.hbs'}}
    <p>The currently selected color is <strong>{{value}}</strong>.</p>
    <div class="docs-flex">
      {{color-picker
        value=value
        format="hex"
        default="00f1f1"
        components=components
        onChange=(action "handleOnChange")
      }}
    </div>
  {{/demo.example}}

  {{demo.snippet 'template-components.hbs'}}
  {{demo.snippet 'controller-components.js' title='controller.js'}}
{{/docs-demo}}
