
'use strict';

module.exports = function() {
  return actor({

      uri: function(link) {
          this.amOnPage(link);
      }

  });
};
