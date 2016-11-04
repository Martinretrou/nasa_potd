app.controller('MainContent', function($scope, $http) {

    $http({
        method: 'GET',
        dataType:"json",
        contentType:"application/json; charset=utf-8",
        url: 'https://api.nasa.gov/planetary/apod?api_key=fhXBsHhORdxBVMqvBOHwouMKm8VpE4zSYrXIaIH4'
    }).then(function successCallback(response) {
        console.log(response);
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
