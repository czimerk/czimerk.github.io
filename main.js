var app = angular.module('myApp', []);

app.controller('mainController', function ($scope) {

    var activePage = 'home';

    $scope.isActive = function (page) {
        return activePage === page;
    }

    $scope.setActivePage = function (page) {
        activePage = page;
    }

    $scope.tutorialTitles = [
        "Authentication",
        "Connecting ClientApp to an API",
        "Interacting with CosmosDB"
    ]
});

