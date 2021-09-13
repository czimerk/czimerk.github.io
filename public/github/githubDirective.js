
app.directive('githubPage', function(){
    var directive = {
        restrict: 'E',
        templateUrl: './github/github-view.html',
        controller: 'githubController'
    }
    return directive;
});