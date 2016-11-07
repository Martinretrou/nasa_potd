app.controller('MainContent', function($scope, $http) {

  var apiKey = 'fhXBsHhORdxBVMqvBOHwouMKm8VpE4zSYrXIaIH4';

    $http({
        method: 'GET',
        dataType:"json",
        contentType:"application/json; charset=utf-8",
        params:{
          //date:'2016-11-03', set date to see specific img
        },
        url: 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey,
    }).then(function successCallback(response) {
        $scope.copyright = response.data.copyright;
        $scope.date = response.data.date;
        $scope.explanation = response.data.explanation;
        $scope.hdurl = response.data.hdurl;
        $scope.url = response.data.url;
        $scope.title = response.data.title;

    }, function errorCallback(response) {
        console.log('Something went wrong...');
    });
});






