angular.module('portfolio').controller('homeCtrl', function ($sanitize, projService) {

    var home = this;

    home.selectedTab = 'bio';

    home.tabs = [
        {   code: 'bio', 
            icon:  '<i class="fa fa-home fa-lg"></i>',
        },
        
        {   code: 'gs',
            icon:  '<i class="fa fa-group"></i>',
         },
         
        {   code: 'fw',
            icon: '<i class="fa fa-futbol-o"></i>'
          },
        
        {   code: 'tc',
            icon: '<i class="fa fa-check-square-o"></i>'
        },
        
        {   code: 'lc',
            icon: '<i class="fa fa-map-o"></i>'
          },
        
        {   code: 'ftf',
            icon: '<i class="fa fa-cutlery"></i>'
          },
        
         {  code: 'b',
            icon: '<i class="fa fa-usd"></i>' 
          },
        
         {  code: 'f' ,
            icon: '<i class="fa fa-heart-o"></i>'       
          }
    ];
    
    home.toggleTab = function (tabCode) {
        home.projectData ='';
        home.selectedTab = tabCode;
         home.getThisProject(); 
        
    }

    home.getThisProject = function(){
       home.projectData = projService.getProjectData(home.selectedTab);
    }
    
});