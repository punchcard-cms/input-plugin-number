/**
 * Validation for Number Input Plugin
 *
 * @param {Object} input - inputs in this plugin's instance and their values as {String}
 * @param {Object} input.target - the triggering input's name and value as {String}
 * @param {String} input.target.name - the triggering input's name
 * @param {String|Bool} input.target.value - the triggering input's value
 * @param {Object} input.all - all inputs in this plugin's instance
 * @param {String|Bool} input.all.number - value of input number
 * @param {Object} [settings] - settings for this input plugin instance
 * @param {Object} [settings.target] - the triggering input's settings as an {Object}
 * @param {Object} [settings.all] - all settings in this plugin instance as an {Object}
 * @param {Object} [settings.all.number] - settings of input number {Object}
 *
 * @returns {Bool|String} true or a string with the text describing the error
 *
 * @module numberValidation
 */

module.exports = function numberValidation(input, settings) {
  if (input.target.value === '' && !settings.target.empty) {
    return `${input.target.name} cannot be left blank!`;
  }

  return true;
};
