angular.module('portfolio').controller('homeCtrl', function ($sanitize) {

    var home = this;

    home.selectedTab = 'bio';

    home.tabs = [
        { code: 'bio', 
          icon:  '<i class="fa fa-home fa-lg"></i>',
          live_url: '',
          source_code_url: '',
          description: '',
          tech: '',
          img_urls: ['', '', '', '']
        },
        
        { code: 'gs',
          icon: '<i class="fa fa-users"></i>',
         },
         
        { code: 'fw',
          icon: '<i class="fa fa-futbol-o"></i>', },
        
        { code: 'tc',
          icon: '<i class="fa fa-check-square-o"></i>', },
        
        { code: 'lc',
          icon: '<i class="fa fa-map-o"></i>', },
        
        { code: 'ftf',
          icon: '<i class="fa fa-cutlery"></i>', },
        
        { code: 'b',
          icon: '<i class="fa fa-usd"></i>', },
        
        { code: 'f' ,
          icon: '<i class="fa fa-heart-o"></i>',}
        

    ];
    
    home.toggleTab = function(tabCode){
        home.selectedTab = tabCode; 
    }

});