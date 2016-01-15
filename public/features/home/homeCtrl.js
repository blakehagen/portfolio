angular.module('portfolio').controller('homeCtrl', function () {

    var home = this;

    home.selectedTab = 'bio';

    home.tabs = [
        { code: 'bio' },
        { code: 'gs' }

    ];
    
    home.toggleTab = function(tabCode){
        home.selectedTab = tabCode;
        
    }
    
    

    // TAB TOGGLES //
    home.activeTab1 = true;
    home.activeTab2 = false;
    home.activeTab3 = false;
    home.activeTab4 = false;
    home.activeTab5 = false;
    home.activeTab6 = false;
    home.activeTab7 = false;
    home.activeTab8 = false;

    home.bio = true;
    home.blackjack = false;
    home.food = false;
    home.fit = false;
    home.futbol = false;
    home.gs = false;
    home.lc = false;
    home.tc = false;


    // TAB 1 - BIO //
    home.toggleTab1 = function () {
        home.activeTab1 = true;
        home.activeTab2 = false;
        home.activeTab3 = false;
        home.activeTab4 = false;
        home.activeTab5 = false;
        home.activeTab6 = false;
        home.activeTab7 = false;
        home.activeTab8 = false;

        home.bio = true;
        home.gs = false;
        home.futbol = false;
        home.tc = false;
        home.lc = false;
        home.food = false;
        home.blackjack = false;
        home.fit = false;
    }
    
    // TAB 2 - GROOPSCOOP //
    home.toggleTab2 = function () {
        home.activeTab1 = false;
        home.activeTab2 = true;
        home.activeTab3 = false;
        home.activeTab4 = false;
        home.activeTab5 = false;
        home.activeTab6 = false;
        home.activeTab7 = false;
        home.activeTab8 = false;

        home.bio = false;
        home.gs = true;
        home.futbol = false;
        home.tc = false;
        home.lc = false;
        home.food = false;
        home.blackjack = false;
        home.fit = false;
    }
    
    // TAB 3 - FUTBOLWATCH //
    home.toggleTab3 = function () {
        home.activeTab1 = false;
        home.activeTab2 = false;
        home.activeTab3 = true;
        home.activeTab4 = false;
        home.activeTab5 = false;
        home.activeTab6 = false;
        home.activeTab7 = false;
        home.activeTab8 = false;

        home.bio = false;
        home.gs = false;
        home.futbol = true;
        home.tc = false;
        home.lc = false;
        home.food = false;
        home.blackjack = false;
        home.fit = false;
    }
    
    // TAB 4 - TASKCHECKR //
    home.toggleTab4 = function () {
        home.activeTab1 = false;
        home.activeTab2 = false;
        home.activeTab3 = false;
        home.activeTab4 = true;
        home.activeTab5 = false;
        home.activeTab6 = false;
        home.activeTab7 = false;
        home.activeTab8 = false;

        home.bio = false;
        home.gs = false;
        home.futbol = false;
        home.tc = true;
        home.lc = false;
        home.food = false;
        home.blackjack = false;
        home.fit = false;
    }
    
    // TAB 5 - LOCATIONCHECKR //
    home.toggleTab5 = function () {
        home.activeTab1 = false;
        home.activeTab2 = false;
        home.activeTab3 = false;
        home.activeTab4 = false;
        home.activeTab5 = true;
        home.activeTab6 = false;
        home.activeTab7 = false;
        home.activeTab8 = false;

        home.bio = false;
        home.gs = false;
        home.futbol = false;
        home.tc = false;
        home.lc = true;
        home.food = false;
        home.blackjack = false;
        home.fit = false;
    }
    
    // TAB 6 - FOOD TRUCK FINDER //
    home.toggleTab6 = function () {
        home.activeTab1 = false;
        home.activeTab2 = false;
        home.activeTab3 = false;
        home.activeTab4 = false;
        home.activeTab5 = false;
        home.activeTab6 = true;
        home.activeTab7 = false;
        home.activeTab8 = false;

        home.bio = false;
        home.gs = false;
        home.futbol = false;
        home.tc = false;
        home.lc = false;
        home.food = true;
        home.blackjack = false;
        home.fit = false;
    }

    // TAB 7 - BLACKJACK //
    home.toggleTab7 = function () {
        home.activeTab1 = false;
        home.activeTab2 = false;
        home.activeTab3 = false;
        home.activeTab4 = false;
        home.activeTab5 = false;
        home.activeTab6 = false;
        home.activeTab7 = true;
        home.activeTab8 = false;

        home.bio = false;
        home.gs = false;
        home.futbol = false;
        home.tc = false;
        home.lc = false;
        home.food = false;
        home.blackjack = true;
        home.fit = false;
    }

    // TAB 7 - FITSTANTLY //
    home.toggleTab8 = function () {
        home.activeTab1 = false;
        home.activeTab2 = false;
        home.activeTab3 = false;
        home.activeTab4 = false;
        home.activeTab5 = false;
        home.activeTab6 = false;
        home.activeTab7 = false;
        home.activeTab8 = true;

        home.bio = false;
        home.gs = false;
        home.futbol = false;
        home.tc = false;
        home.lc = false;
        home.food = false;
        home.blackjack = false;
        home.fit = true;
    }


});