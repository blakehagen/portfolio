angular.module('portfolio').service('projService', function ($q) {

    this.getProjectData = function (projectCode) {

        if (projectCode === 'fw') {
            return {
                project_name: 'Futbol Watch',
                icon: '<i class="fa fa-futbol-o"></i>',
                live_url: 'http://futbolwatch.com/',
                source_code_url: 'https://github.com/blakehagen/futbolwatch',
                description: 'Stay up to date with information from your favorite European soccer leagues. See up-to-date league standings, upcoming fixtures, results, and leading goal scorers for the English Premier League, German Bundesliga, Spanish Primera Dvision, Dutch Eredivisie, Italian Serie A, Portugal Primeira, France Ligue 1, and the UEFA Champions League.',
                tech: 'Built with AngularJS, CSS, HTML. Also built a proxy server with Node.js and Express to make API calls to gather soccer data for the application.',
                img_urls: ['', '', '', '']
            }
        } else {
            return 'false';
        }
    }

});