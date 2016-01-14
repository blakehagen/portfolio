angular.module('portfolio').controller('homeCtrl', function ($scope) {

    // TAB TOGGLES //
    $scope.activeTab1 = true;
    $scope.activeTab2 = false;
    $scope.activeTab3 = false;
    $scope.activeTab4 = false;
    $scope.activeTab5 = false;
    $scope.activeTab6 = false;

    $scope.toggleTab1 = function () {
        $scope.activeTab1 = true;
        $scope.activeTab2 = false;
        $scope.activeTab3 = false;
        $scope.activeTab4 = false;
        $scope.activeTab5 = false;
        $scope.activeTab6 = false;
    }
    $scope.toggleTab2 = function () {
        $scope.activeTab1 = false;
        $scope.activeTab2 = true;
        $scope.activeTab3 = false;
        $scope.activeTab4 = false;
        $scope.activeTab5 = false;
        $scope.activeTab6 = false;
    }
    $scope.toggleTab3 = function () {
        $scope.activeTab1 = false;
        $scope.activeTab2 = false;
        $scope.activeTab3 = true;
        $scope.activeTab4 = false;
        $scope.activeTab5 = false;
        $scope.activeTab6 = false;
    }
    $scope.toggleTab4 = function () {
        $scope.activeTab1 = false;
        $scope.activeTab2 = false;
        $scope.activeTab3 = false;
        $scope.activeTab4 = true;
        $scope.activeTab5 = false;
        $scope.activeTab6 = false;
    }
    $scope.toggleTab5 = function () {
        $scope.activeTab1 = false;
        $scope.activeTab2 = false;
        $scope.activeTab3 = false;
        $scope.activeTab4 = false;
        $scope.activeTab5 = true;
        $scope.activeTab6 = false;
    }
    $scope.toggleTab6 = function () {
        $scope.activeTab1 = false;
        $scope.activeTab2 = false;
        $scope.activeTab3 = false;
        $scope.activeTab4 = false;
        $scope.activeTab5 = false;
        $scope.activeTab6 = true;
    }


});