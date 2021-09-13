
app.directive('tutorialsPage', function(){
    var directive = {
        restrict: 'E',
        templateUrl: './tutorials/tutorials-view.html',
        scope:{
            tutorials: "=tutorialsin"
        },
        controller: 'tutorialsController'
    }
    return directive;
});