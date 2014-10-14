module.exports = angular.module('chApp.promotion', [])
    .directive('promoRed', require('./promo.dir'))
    .directive('promoBlue', require('./promo2.dir'))
;