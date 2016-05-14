/**
 * Number Input Plugin
 *
 *
 * A single number input plugin
 */
const validation = require('./lib/validation.js');

/**
 * Single Number Input Plugin
 * @module numberInputPlugin
 */
module.exports = {
  name: 'Number',
  description: 'A single number input plugin',
  validation: {
    numberValidation: validation,
  },
  inputs: {
    number: {
      validation: {
        function: 'numberValidation',
        on: 'blur',
      },
      label: 'Please enter a number',
      placeholder: '42',
      type: 'number',
      settings: {
        empty: true,
      },
    },
  },
  html: '<label for="{{number.id}}">{{number.label}}</label><input type="{{number.type}}" id="{{number.id}}" name="{{number.name}}" value="{{number.value}}" placeholder="{{number.placeholder}}" />',
};
