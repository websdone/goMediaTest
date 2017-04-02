
angular.module('myApp', ['ngMaterial']).controller('MainController', ['$scope', '$mdDialog', function ($scope, $mdDialog) {
    $scope.promo = 'TV';
    $scope.products = [
      {
          "name": 'Alan Partridge Mid Morning Matters',
          "episodes": 6,
          "pubdate": 2014,
          "cover": 'assets/TVshows/img_tv_01.png',
          "rating": '15',
          "season": 'Season 1',
          "episodeImg": 'assets/Index/02-img_home_tv.png',
          "sinopsis": 'lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen',
          "episode1": "Episode 1",
          "episode1video": 'assets/Episodes/img_episode_01.png',
          "timeEpisode": "25min"
      },
      {
          "name": 'Camping',
          "episodes": 6,
          "pubdate": 2013,
          "cover": 'assets/TVshows/img_tv_02.png',
          "rating": '15',
          "season": 'Season 1',
          "episodeImg": 'assets/Index/01-img_home_movies.png',
          "sinopsis": 'Camping - lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen',
          "episode1": "Camping 1",
          "episode1video": 'assets/Episodes/img_episode_01.png',
          "timeEpisode": "25min"
      },
      {
          "name": 'Doll & Em',
          "episodes": 6,
          "pubdate": 2012,
          "cover": 'assets/TVshows/img_tv_03.png',
          "rating": '15',
          "season": 'Season 1',
          "episodeImg": 'assets/Index/02-img_home_tv.png',
          "sinopsis": 'Doll & Em - lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen',
          "episode1": "Doll & Em 1",
          "episode1video": 'assets/Episodes/img_episode_01.png',
          "timeEpisode": "25min"
      },
      {
          "name": 'Flemming',
          "episodes": 6,
          "pubdate": 2014,
          "cover": 'assets/TVshows/img_tv_04.png',
          "rating": '15',
          "season": 'Season 1',
          "episodeImg": 'assets/Index/01-img_home_movies.png',
          "sinopsis": 'Flemming - lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen',
          "episode1": "Flemming 1",
          "episode1video": 'assets/Episodes/img_episode_01.png',
          "timeEpisode": "25min"
      },
      {
          "name": 'Guitar Star',
          "episodes": 6,
          "pubdate": 2014,
          "cover": 'assets/TVshows/img_tv_05.png',
          "rating": '15',
          "season": 'Season 1',
          "episodeImg": 'assets/Index/02-img_home_tv.png',
          "sinopsis": 'Guitar Star - lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen',
          "episode1": "Guitar Star 1",
          "episode1video": 'assets/Episodes/img_episode_01.png',
          "timeEpisode": "25min"
      },
      {
          "name": 'Landscape Artist',
          "episodes": 6,
          "pubdate": 2014,
          "cover": 'assets/TVshows/img_tv_06.png',
          "rating": '15',
          "season": 'Season 1',
          "episodeImg": 'assets/Index/01-img_home_movies.png',
          "sinopsis": 'Landscape Artist - lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen',
          "episode1": "Landscape Artist 1",
          "episode1video": 'assets/Episodes/img_episode_01.png',
          "timeEpisode": "25min"
      },
      {
          "name": 'The marriage of reason and squalor',
          "episodes": 6,
          "pubdate": 2014,
          "cover": 'assets/TVshows/img_tv_07.png',
          "rating": '15',
          "season": 'Season 1',
          "episodeImg": 'assets/Index/02-img_home_tv.png',
          "sinopsis": 'The marriage of reason and squalor - lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen',
          "episode1": "The marriage 1..",
          "episode1video": 'assets/Episodes/img_episode_01.png',
          "timeEpisode": "25min"
      },
      {
          "name": 'The nightmare Worlds of HG Wells',
          "episodes": 6,
          "pubdate": 2014,
          "cover": 'assets/TVshows/img_tv_08.png',
          "rating": '15',
          "season": 'Season 1',
          "episodeImg": 'assets/Index/01-img_home_movies.png',
          "sinopsis": 'The nightmare Worlds - lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen',
          "episode1": "The nightmare 1..",
          "episode1video": 'assets/Episodes/img_episode_01.png',
          "timeEpisode": "25min"
      },
      {
          "name": 'Tunnel',
          "episodes": 6,
          "pubdate": 2014,
          "cover": 'assets/TVshows/img_tv_09.png',
          "rating": '15',
          "season": 'Season 1',
          "episodeImg": 'assets/Index/02-img_home_tv.png',
          "sinopsis": 'Tunnel - lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen',
          "episode1": "Tunnel 1",
          "episode1video": 'assets/Episodes/img_episode_01.png',
          "timeEpisode": "25min"
      },
      {
          "name": 'The Southbank show',
          "episodes": 6,
          "pubdate": 2014,
          "cover": 'assets/TVshows/img_tv_10.png',
          "rating": '15',
          "season": 'Season 1',
          "episodeImg": 'assets/Index/01-img_home_movies.png',
          "sinopsis": 'The Southbank show - lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen lorem ipsidum dolor sit amen',
          "episode1": "The Southbank 1..",
          "episode1video": 'assets/Episodes/img_episode_01.png',
          "timeEpisode": "25min"
      }
  ];

    // ACCORDION
    $scope.showCustom = function(event, product) {
        $mdDialog.show({
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true,
            templateUrl: '../../popUp.html',
            locals: {
                product: product
            },
            controller: function DialogController($scope, $mdDialog, product) {
                $scope.product = product;

                $scope.closeDialog = function() {
                    $mdDialog.hide();
                }
            }
        });
    };

    $scope.collapseAll = function(data) {
        for(var i in $scope.product) {
            if($scope.product[i] != data) {
                $scope.product[i].expanded = false;
            }
        }
        data.expanded = !data.expanded;

    };
}]);