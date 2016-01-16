angular.module('portfolio').service('projService', function ($q) {

    this.getProjectData = function (projectCode) {

        if (projectCode === 'fw') {
            return {
                project_name: 'Futbol Watch',
                icon: '<i class="fa fa-futbol-o"></i>',
                live_url: 'http://futbolwatch.com/',
                source_code_url: 'https://goo.gl/ONpAhj',
                description: 'Stay up to date with information from top European soccer leagues. See league standings, upcoming fixtures, results, and leading goal scorers for the English Premier League, German Bundesliga, Spanish Primera Dvision, Dutch Eredivisie, Italian Serie A, Portugal Primeira, France Ligue 1, and the UEFA Champions League.',
                tech: 'Built with AngularJS, CSS, HTML. JavaScript used to maniputlate data to display. Also built a proxy server with Node.js and Express to make API calls to gather soccer data for the application.',
                img_urls: ['/styles/assets/screenshots/fw/fw1.jpg', '/styles/assets/screenshots/fw/fw2.jpg']
            }
        }
        else if (projectCode === 'gs') {
            return {
                project_name: 'GroopScroop',
                icon: '<i class="fa fa-group"></i>',
                live_url: 'http://groopscoop.com/',
                source_code_url: 'https://goo.gl/lzkaRS',
                description: '',
                tech: '',
                img_urls: ['', '', '', '']
            }
        }
        else if (projectCode === 'tc') {
            return {
                project_name: 'TaskCheckr',
                icon: '<i class="fa fa-check-square-o"></i>',
                live_url: 'http://taskcheckr.com/',
                source_code_url: 'https://goo.gl/P1xdze',
                description: '',
                tech: '',
                img_urls: ['', '', '', '']
            }
        }
        else if (projectCode === 'lc') {
            return {
                project_name: 'LocationCheckr',
                icon: '<i class="fa fa-map-o"></i>',
                live_url: 'http://locationcheckr.com/',
                source_code_url: 'https://goo.gl/tc1Ah5',
                description: '',
                tech: '',
                img_urls: ['', '', '', '']
            }
        }
        else if (projectCode === 'ftf') {
            return {
                project_name: 'FoodTruck Finder',
                icon: '<i class="fa fa-cutlery"></i>',
                live_url: 'http://45.55.33.203/',
                source_code_url: 'https://goo.gl/UNY6dQ',
                description: '',
                tech: '',
                img_urls: ['', '', '', '']
            }
        }
        else if (projectCode === 'b') {
            return {
                project_name: 'Blackjack 1.0',
                icon: '<i class="fa fa-usd"></i>',
                live_url: 'http://blakehagen.github.io/blackjack/',
                source_code_url: 'https://goo.gl/tkom3C',
                description: '',
                tech: '',
                img_urls: ['', '', '', '']
            }
        }
         else if (projectCode === 'f') {
            return {
                project_name: 'Fitstantly',
                icon: '<i class="fa fa-heart-o"></i>',
                live_url: 'http://fitstantly.com/',
                source_code_url: 'https://goo.gl/jfpbtf',
                description: '',
                tech: '',
                img_urls: ['', '', '', '']
            }
        }
    }

});