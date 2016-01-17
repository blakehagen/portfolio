angular.module('portfolio').service('projService', function ($q) {

    this.getProjectData = function (projectCode) {

        if (projectCode === 'fw') {
            return {
                project_name: 'Futbol Watch',
                icon: '<i class="fa fa-futbol-o"></i>',
                live_url: 'http://futbolwatch.com/',
                source_code_url: 'https://goo.gl/ONpAhj',
                description: 'Stay up to date with information from top European soccer leagues. See league standings, upcoming fixtures, results, and leading goal scorers for the English Premier League, German Bundesliga, Spanish Primera Dvision, UEFA Champions League, & others.',
                tech: 'Built with AngularJS, CSS, HTML. JavaScript used to maniputlate data to display. Also built a separate server with Node.js and Express to make API calls to gather soccer data for the application.',
                img_urls: ['/styles/assets/screenshots/fw/fw1.jpg', '/styles/assets/screenshots/fw/fw2.jpg']
            }
        }
        
        else if (projectCode === 'gs') {
            return {
                project_name: 'GroopScroop',
                icon: '<i class="fa fa-group"></i>',
                live_url: 'http://groopscoop.com/',
                source_code_url: 'https://goo.gl/lzkaRS',
                description: 'GroopScoop is a real-time group chat/forum application. Log in with Google, create groups and invite other users to your groups. Chat in real time, or post a message/video/image and come back later to check responses.',
                tech: 'My official Personal Project during my time at <a href="https://devmounta.in/" target="_blank">DevMountain</a> (completed course January 2016). Real time capability powered by Socket.io. Learned Socket.io outside of the DevMountain curriculum. GroopScoop is built on Angular, Node, Express, Mongoose, and MongoDB.',
                img_urls: ['/styles/assets/screenshots/gs/gs1.jpg', '/styles/assets/screenshots/gs/gs2.jpg']
            }
        }
        
        else if (projectCode === 'tc') {
            return {
                project_name: 'TaskCheckr',
                icon: '<i class="fa fa-check-square-o"></i>',
                live_url: 'http://taskcheckr.com/',
                source_code_url: 'https://goo.gl/P1xdze',
                description: 'To-do web application. Because every portfolio needs a to-do app! Set tasks due by end of day, week, or month. Application calculates in relative time how much time is remaining for you to complete the task.',
                tech: 'Learned and experimented with Moment.js for relative time and calendar time. Built on Angular, Node, Express, Mongoose, & MongoDB. Passport authentication used for login and clean/simple UI with my own CSS.',
                img_urls: ['/styles/assets/screenshots/tc/tc1.jpg', '/styles/assets/screenshots/tc/tc2.jpg']
            }
        }
        
        else if (projectCode === 'lc') {
            return {
                project_name: 'LocationCheckr',
                icon: '<i class="fa fa-map-o"></i>',
                live_url: 'http://locationcheckr.com/',
                source_code_url: 'https://goo.gl/tc1Ah5',
                description: 'Map your current location and see locations of other locationCheckr users you have connected with. You can decide to share or stop sharing your locations with the click of a button.',
                tech: 'Learned to use the Google Maps API with this project. Learned geolocation and Google Maps reverse geolocation. Real-time map updates with Socket.io. Built on Angular, Node, Express, Mongoose, & MongoDB. User authentication with Passport.',
                img_urls: ['/styles/assets/screenshots/lc/lc1.jpg', '/styles/assets/screenshots/lc/lc2.jpg']
            }
        }
        
        else if (projectCode === 'ftf') {
            return {
                project_name: 'Food Truck Finder',
                icon: '<i class="fa fa-cutlery"></i>',
                live_url: 'http://45.55.33.203/',
                source_code_url: 'https://goo.gl/UNY6dQ',
                description: 'Mobile application (available on iOS and Android) displaying food trucks near your current location. When hunger hits, see if your favorite food truck is nearby.',
                tech: '<a href="https://devmounta.in/" target="_blank">DevMountain</a> group project built using Ionic. Worked with 4 other team members. Learned Ionic outside of DevMountain class time. My responsibilities included incorporating the Google Maps API, real-time truck location sharing using Socket.io, & overall troubleshooting and bug fixing across multiple parts of the project. Learned GitHub in a team setting.',
                img_urls: ['/styles/assets/screenshots/ftf/ftf1.jpg', '/styles/assets/screenshots/ftf/ftf2.jpg']
            }
        }
        
        else if (projectCode === 'b') {
            return {
                project_name: 'Blackjack 1.0',
                icon: '<i class="fa fa-usd"></i>',
                live_url: 'http://blakehagen.github.io/blackjack/',
                source_code_url: 'https://goo.gl/tkom3C',
                description: 'Simple blackjack card game application. See how many hands you can play without going broke while maximizing your cash (not a real gambling site!). Good luck and have fun!',
                tech: 'Built with JavaScript, jQuery and my own CSS. I wanted to learn how to use jQuery better so I built this game as a short project during my time as a full-time web-dev student at <a href="https://devmounta.in/" target="_blank">DevMountain</a> (completed course January 2016).',
                img_urls: ['/styles/assets/screenshots/b/b1.jpg', '/styles/assets/screenshots/b/b2.jpg']
            }
        }
        
         else if (projectCode === 'f') {
            return {
                project_name: 'Fitstantly',
                icon: '<i class="fa fa-heart-o"></i>',
                live_url: 'http://fitstantly.com/',
                source_code_url: 'https://goo.gl/jfpbtf',
                description: 'Use Fitstantly to instantly see your Fitbit steps and "Very Active Minutes" for the last 7 days. Designed to help you compete against yourself – in the short-term.',
                tech: 'Fitstantly is my first complete front-end web application and was my personal project during my time as a <a href="https://devmounta.in/" target="_blank">DevMountain</a> student in the web-dev after hours course (part-time - completed March 2015). Built on Angular and uses the Fitbit API to display the user\'s activity data.',
                img_urls: ['/styles/assets/screenshots/f/f1.jpg', '/styles/assets/screenshots/f/f2.jpg']
            }
        }
    }

});