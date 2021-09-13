
app.directive('homePage', function(){
    var directive = {
        restrict: 'E',
        templateUrl: './home/home-view.html',
        controller: 'homeController'
    }
    return directive;
});