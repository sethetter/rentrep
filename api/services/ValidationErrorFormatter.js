/**
 * ValidationErrorFormatter
 *
 * Spits out a human friendly version validation error messages
 *
 *
 * TODO: this
 */
module.exports = function(err) {
  if (!err || err.length === 0) return;

  err.forEach(function(err) {
    console.log(err);
  });
};
