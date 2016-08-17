(function() {
	'use strict';
	angular
	.module('couples')
	.controller('couplesController', ['$scope','$timeout', function($scope, $timeout) {
		var cp = this;
		$scope.profs = [{"id":"1", "job":'lawyer', "state":"no-rotated"},
						{"id":"2", "job":'doctor', "state":"no-rotated"},
						{"id":"3", "job":'builder', "state":"no-rotated"},
						{"id":"4", "job":'architect', "state":"no-rotated"},
						{"id":"5", "job":'courier', "state":"no-rotated"},
						{"id":"6", "job":'consultant',  "state":"no-rotated"},
						{"id":"7", "job":'plumber',  "state":"no-rotated"},
						{"id":"8", "job":'nurse',  "state":"no-rotated"},
						{"id":"9", "job":'painter', "state":"no-rotated"},
						{"id":"10", "job":'electrician', "state":"no-rotated"},
						{"id":"11", "job":'lawyer', "state":"no-rotated"},
						{"id":"12", "job":'doctor', "state":"no-rotated"},
						{"id":"13", "job":'builder', "state":"no-rotated"},
						{"id":"14", "job":'architect', "state":"no-rotated"},
						{"id":"15", "job":'courier', "state":"no-rotated"},
						{"id":"16", "job":'consultant', "state":"no-rotated"},
						{"id":"17", "job":'plumber', "state":"no-rotated"},
						{"id":"18", "job":'nurse', "state":"no-rotated"},
						{"id":"19", "job":'painter', "state":"no-rotated"},
						{"id":"20", "job":'electrician',"state":"no-rotated"}

						];
    	$scope.rotate = '';
    	var profChecked = '';
    	var checked = 0;
    	cp.clicks = 0;
    	cp.couples = 0;
    	cp.hiScore = 999999999;
    	suffle();

    	function suffle() {
			$scope.profs = $scope.profs.sort(function() {return Math.random() - 0.5});
    	}

    	$scope.selectCard = function(prof) {
    		//solo pueden haber 2 en check
    		cp.clicks++;
    		angular.forEach($scope.profs, function(value){
						if (value.id == prof.id) {
							value.state = "rotate";
							if(checked>0){
								if(profChecked.job===prof.job&&profChecked.id!=prof.id){
									profChecked = '';
									checked = 0;
									cp.couples++;								}
								else{
									$timeout( function() {
										reverseRotate(profChecked.id);
										reverseRotate(prof.id);
										profChecked = '';
										checked = 0;
									} ,900);
									
								}
							}
							else{
								profChecked = prof;
								checked ++;
							}
						}

					}, profChecked);

    	};

    	function reverseRotate(idProf){
    		angular.forEach($scope.profs, function(value) {
				if (value.id == idProf) {
					value.state = "no-rotated";
				};
			});
    	}

    	cp.reset= function(){
    		angular.forEach($scope.profs, function(value) {
				value.state = "no-rotated";
			});
			suffle();
			cp.couples =  0;
			cp.hiScore = (cp.hiScore>cp.clicks)? cp.clicks : cp.hiScore ;
			cp.clicks = 0;
    	}


    }]);


})()