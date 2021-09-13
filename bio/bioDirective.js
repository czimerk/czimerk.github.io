
app.directive('bioPage', function(){
    var directive = {
        restrict: 'E',
        templateUrl: './bio/bio-view.html',
        controller: 'bioController'
    }
    return directive;
});