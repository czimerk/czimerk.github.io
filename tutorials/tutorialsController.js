

app.controller('tutorialsController', function ($scope) {

    $scope.activeTitle = $scope.tutorials && $scope.tutorials.length
        ? $scope.tutorials[0] : null;

    //Az aktuális tutorial indexe
    $scope.activeIndex = 0;

    //a previous gomb megnyomására
    $scope.previous = function () {
        if ($scope.tutorials && $scope.tutorials.length) {
            //ha nem az első, akkor kiválasztjuk az előző indexet
            $scope.activeIndex = $scope.activeIndex ? $scope.activeIndex - 1 : $scope.activeIndex;
            //beállítjuk a címet
            $scope.activeTitle = $scope.tutorials[$scope.activeIndex];
        }
    }

    $scope.next = function () {
        if ($scope.tutorials && $scope.tutorials.length) {
            //ha nem az utolsó, akkor kiválasztjuk a következő indexet
            var isNotLastIndex = (($scope.tutorials.length-1) - $scope.activeIndex);
            $scope.activeIndex =  isNotLastIndex ? $scope.activeIndex + 1 : $scope.activeIndex;
            $scope.activeTitle = $scope.tutorials[$scope.activeIndex];
        }
    }
});