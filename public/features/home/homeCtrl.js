angular.module('portfolio').controller('homeCtrl', function ($scope) {

    // TAB TOGGLES //
    $scope.activeTab1 = true;
    $scope.activeTab2 = false;
    $scope.activeTab3 = false;
    $scope.activeTab4 = false;
    $scope.activeTab5 = false;
    $scope.activeTab6 = false;
    $scope.activeTab7 = false;
    $scope.activeTab8 = false;

    $scope.bio = true;
    $scope.blackjack = false;
    $scope.food = false;
    $scope.fit = false;
    $scope.futbol = false;
    $scope.gs = false;
    $scope.lc = false;
    $scope.tc = false;


    // TAB 1 - BIO //
    $scope.toggleTab1 = function () {
        $scope.activeTab1 = true;
        $scope.activeTab2 = false;
        $scope.activeTab3 = false;
        $scope.activeTab4 = false;
        $scope.activeTab5 = false;
        $scope.activeTab6 = false;
        $scope.activeTab7 = false;
        $scope.activeTab8 = false;

        $scope.bio = true;
        $scope.gs = false;
        $scope.futbol = false;
        $scope.tc = false;
        $scope.lc = false;
        $scope.food = false;
        $scope.blackjack = false;
        $scope.fit = false;
    }
    
    // TAB 2 - GROOPSCOOP //
    $scope.toggleTab2 = function () {
        $scope.activeTab1 = false;
        $scope.activeTab2 = true;
        $scope.activeTab3 = false;
        $scope.activeTab4 = false;
        $scope.activeTab5 = false;
        $scope.activeTab6 = false;
        $scope.activeTab7 = false;
        $scope.activeTab8 = false;

        $scope.bio = false;
        $scope.gs = true;
        $scope.futbol = false;
        $scope.tc = false;
        $scope.lc = false;
        $scope.food = false;
        $scope.blackjack = false;
        $scope.fit = false;
    }
    
    // TAB 3 - FUTBOLWATCH //
    $scope.toggleTab3 = function () {
        $scope.activeTab1 = false;
        $scope.activeTab2 = false;
        $scope.activeTab3 = true;
        $scope.activeTab4 = false;
        $scope.activeTab5 = false;
        $scope.activeTab6 = false;
        $scope.activeTab7 = false;
        $scope.activeTab8 = false;

        $scope.bio = false;
        $scope.gs = false;
        $scope.futbol = true;
        $scope.tc = false;
        $scope.lc = false;
        $scope.food = false;
        $scope.blackjack = false;
        $scope.fit = false;
    }
    
    // TAB 4 - TASKCHECKR //
    $scope.toggleTab4 = function () {
        $scope.activeTab1 = false;
        $scope.activeTab2 = false;
        $scope.activeTab3 = false;
        $scope.activeTab4 = true;
        $scope.activeTab5 = false;
        $scope.activeTab6 = false;
        $scope.activeTab7 = false;
        $scope.activeTab8 = false;

        $scope.bio = false;
        $scope.gs = false;
        $scope.futbol = false;
        $scope.tc = true;
        $scope.lc = false;
        $scope.food = false;
        $scope.blackjack = false;
        $scope.fit = false;
    }
    
    // TAB 5 - LOCATIONCHECKR //
    $scope.toggleTab5 = function () {
        $scope.activeTab1 = false;
        $scope.activeTab2 = false;
        $scope.activeTab3 = false;
        $scope.activeTab4 = false;
        $scope.activeTab5 = true;
        $scope.activeTab6 = false;
        $scope.activeTab7 = false;
        $scope.activeTab8 = false;

        $scope.bio = false;
        $scope.gs = false;
        $scope.futbol = false;
        $scope.tc = false;
        $scope.lc = true;
        $scope.food = false;
        $scope.blackjack = false;
        $scope.fit = false;
    }
    
    // TAB 6 - FOOD TRUCK FINDER //
    $scope.toggleTab6 = function () {
        $scope.activeTab1 = false;
        $scope.activeTab2 = false;
        $scope.activeTab3 = false;
        $scope.activeTab4 = false;
        $scope.activeTab5 = false;
        $scope.activeTab6 = true;
        $scope.activeTab7 = false;
        $scope.activeTab8 = false;

        $scope.bio = false;
        $scope.gs = false;
        $scope.futbol = false;
        $scope.tc = false;
        $scope.lc = false;
        $scope.food = true;
        $scope.blackjack = false;
        $scope.fit = false;
    }

    // TAB 7 - BLACKJACK //
    $scope.toggleTab7 = function () {
        $scope.activeTab1 = false;
        $scope.activeTab2 = false;
        $scope.activeTab3 = false;
        $scope.activeTab4 = false;
        $scope.activeTab5 = false;
        $scope.activeTab6 = false;
        $scope.activeTab7 = true;
        $scope.activeTab8 = false;

        $scope.bio = false;
        $scope.gs = false;
        $scope.futbol = false;
        $scope.tc = false;
        $scope.lc = false;
        $scope.food = false;
        $scope.blackjack = true;
        $scope.fit = false;
    }

    // TAB 7 - FITSTANTLY //
    $scope.toggleTab8 = function () {
        $scope.activeTab1 = false;
        $scope.activeTab2 = false;
        $scope.activeTab3 = false;
        $scope.activeTab4 = false;
        $scope.activeTab5 = false;
        $scope.activeTab6 = false;
        $scope.activeTab7 = false;
        $scope.activeTab8 = true;

        $scope.bio = false;
        $scope.gs = false;
        $scope.futbol = false;
        $scope.tc = false;
        $scope.lc = false;
        $scope.food = false;
        $scope.blackjack = false;
        $scope.fit = true;
    }


});