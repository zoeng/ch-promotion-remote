module.exports = function() {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            element.css('border', '1px solid red');
        }
    };
};