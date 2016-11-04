app.controller('Header', ['$scope', function($scope) { 
  $scope.sections = [ 
  { 
    title: 'Glitch',
    link: 'glitch.html', 
  }, 
  { 
    title: 'Identity',
    link: 'identity.html', 
  },
  { 
    title: 'Webdesign', 
    link: 'webdesign.html', 
  },
  { 
    title: 'About', 
    link: 'about.html', 
  }
	];

}]);