ember-pickr [![Build Status](https://travis-ci.org/astronomersiva/ember-pickr.svg?branch=master)](https://travis-ci.org/astronomersiva/ember-pickr)
==============================================================================

Color Picker for EmberJS using [pickr](https://github.com/Simonwep/pickr)

[Demo & Documentation](https://astronomersiva.github.io/ember-pickr/)

Installation
------------------------------------------------------------------------------

```
ember install ember-pickr
```


Usage
------------------------------------------------------------------------------
```
{{color-picker
  value=value
  default="#e04e39"
  format="hexa"
}}
```

Options
------------------------------------------------------------------------------

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
* **`format`**: One of `hsva`, `hsla`, `rgba`, `hexa`, `cmyk` | **`{ h, s, v, a }`**
* To use the **`onChange`** and **`onSave`** handlers, use closure actions.
```
{{color-picker
  value=value
  default="#e04e39"
  format="hexa"
  saveLabel="Set Color"
}}
```
The **`onSave`** and **`onChange`** handlers can take two parameters - **`hsva`** and **`instance`** where **`hsva`** is an HSVa color object
and **`instance`** is the current instance of Pickr. The HSVa object has **`toHSVA`**, **`toHSLA`**, **`toRGBA`**, **`toHEXA`**, **`toCMYK`**,
and **`clone`** methods that return the converts the object into corresponding arrays. You can call **`toString`** on the
resulting array to get the string representation of the colors.
* To toggle components inside the color picker, you can pass the following options to the **`components`** property:
```javascript
{
  palette: true,  // Will be overwritten with true if preview, opacity or hue are true
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


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
