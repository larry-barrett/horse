(function() {
	'use strict';

	var app = angular.module('app');

	///
	// Controllers: Score
	///

	app.controller('ScoreController', controller);
	
	controller.$inject = [
		'$scope', '$http', 'messenger', '$rootScope',
		'$window', '$routeParams', 'layoutMgmt',
		'deviceMgr', 'trdMgmt', 'customerMgmt'
	];

	function controller(
		$scope, $http, messenger, $rootScope,
		$window, $routeParams, layoutMgmt,
		deviceMgr, trdMgmt, customerMgmt
	) {

		if(deviceMgr.isBigScreen()) {
			$scope.bigScreen = true;
		} else {
			$scope.bigScreen = false;
		}

		$scope.exacta = '';
		$scope.trifecta = '';
		$scope.superfecta = '';
		$scope.pentafecta = '';
		$scope.double = [];
		$scope.pick3 = [];
		$scope.pick4 = [];
		$scope.pick5 = [];
		$scope.pick6 = [];
		$scope.pick7 = [];
		$scope.pick8 = [];
		$scope.pick9 = [];
		$scope.pick10 = [];

		$scope.show1st = false;
		$scope.show1stFirstTie = false;
		$scope.show1stSecondTie = false;
		$scope.show2nd = false;
		$scope.show2ndFirstTie = false;
		$scope.show2ndSecondTie = false;
		$scope.show3rd = false;
		$scope.show3rdFirstTie = false;
		$scope.show3rdSecondTie = false;
		$scope.show4th = false;
		$scope.show4thFirstTie = false;
		$scope.show4thSecondTie = false;
		$scope.show5th = false;
		$scope.show5thFirstTie = false;
		$scope.show5thSecondTie = false;
		$scope.showExactaAA = false;
		$scope.showExactaAB = false;
		$scope.showExactaBA = false;
		$scope.showExactaBB = false;
		$scope.showTrifecta = false;
		$scope.showTrifectaAAA = false;
		$scope.showTrifectaAAB = false;
		$scope.showTrifectaABA = false;
		$scope.showTrifectaABB = false;
		$scope.showTrifectaBAA = false;
		$scope.showTrifectaBAB = false;
		$scope.showTrifectaBBA = false;
		$scope.showTrifectaBBB = false;
		$scope.showSuperfectaAAAA = false;
		$scope.showSuperfectaAAAB = false;
		$scope.showSuperfectaAABA = false;
		$scope.showSuperfectaAABB = false;
		$scope.showSuperfectaABAA = false;
		$scope.showSuperfectaABAB = false;
		$scope.showSuperfectaABBA = false;
		$scope.showSuperfectaABBB = false;
		$scope.showSuperfectaBAAA = false;
		$scope.showSuperfectaBAAB = false;
		$scope.showSuperfectaBABA = false;
		$scope.showSuperfectaBABB = false;
		$scope.showSuperfectaBBAA = false;
		$scope.showSuperfectaBBAB = false;
		$scope.showSuperfectaBBBA = false;
		$scope.showSuperfectaBBBB = false;
		$scope.showPentafectaAAAAA = false;
		$scope.showPentafectaAAAAB = false;
		$scope.showPentafectaAAABA = false;
		$scope.showPentafectaAAABB = false;
		$scope.showPentafectaAABAA = false;
		$scope.showPentafectaAABAB = false;
		$scope.showPentafectaAABBA = false;
		$scope.showPentafectaAABBB = false;
		$scope.showPentafectaABAAA = false;
		$scope.showPentafectaABAAB = false;
		$scope.showPentafectaABABA = false;
		$scope.showPentafectaABABB = false;
		$scope.showPentafectaABBAA = false;
		$scope.showPentafectaABBAB = false;
		$scope.showPentafectaABBBA = false;
		$scope.showPentafectaABBBB = false;
		$scope.showPentafectaBAAAA = false;
		$scope.showPentafectaBAAAB = false;
		$scope.showPentafectaBAABA = false;
		$scope.showPentafectaBAABB = false;
		$scope.showPentafectaBABAA = false;
		$scope.showPentafectaBABAB = false;
		$scope.showPentafectaBABBA = false;
		$scope.showPentafectaBABBB = false;
		$scope.showPentafectaBBAAA = false;
		$scope.showPentafectaBBAAB = false;
		$scope.showPentafectaBBABA = false;
		$scope.showPentafectaBBABB = false;
		$scope.showPentafectaBBBAA = false;
		$scope.showPentafectaBBBAB = false;
		$scope.showPentafectaBBBBA = false;
		$scope.showPentafectaBBBBB = false;
		$scope.showDouble = false;
		$scope.showDoubleAlt = false;
		$scope.showPickThree = false;
		$scope.showPickThreeAlt = false;
		$scope.showPickFour = false;
		$scope.showPickFourAlt = false;
		$scope.showPickFourConsolation = false;
		$scope.showPickFive = false;
		$scope.showPickFiveAlt = false;
		$scope.showPickFiveConsolation = false;
		$scope.showPickSix = false;
		$scope.showPickSixAlt = false;
		$scope.showPickSixConsolation = false;
		$scope.showPickSeven = false;
		$scope.showPickSevenAlt = false;
		$scope.showPickEight = false;
		$scope.showPickEightAlt = false;
		$scope.showPickNine = false;
		$scope.showPickNineAlt = false;
		$scope.showPickTen = false;
		$scope.showPickTenAlt = false;

		var sessionPromise = customerMgmt.getSession();
		sessionPromise.then(function(sessionData) {
			if(sessionData.customerId) {
				var getCustomerPromise = customerMgmt.getCustomer(sessionData.customerId);
				getCustomerPromise.then(function(customerData) {
					if(!customerData.admin) {
						$window.location.href = '/';
						return;
					}
				});
			} else {
				$window.location.href = '/';
				return;
			}

			var rpPcs = $routeParams.id.split('-');

			var trId = rpPcs[0];
			var raceNum = rpPcs[1];

			$scope.trId = trId;
			$scope.raceNum = raceNum;

			var getTrdPromise = trdMgmt.getTrd(trId);
			getTrdPromise.then(function(trdData) {
				$scope.trdData = trdData[0];
console.log('$scope.trdData:');
console.log($scope.trdData);
				var checkDouble = false;
				var checkPick3 = false;
				var checkPick4 = false;
				var checkPick5 = false;
				var checkPick6 = false;
				var checkPick7 = false;
				var checkPick8 = false;
				var checkPick9 = false;
				var checkPick10 = false;
				if(raceNum > 1) {
					checkDouble = true;
				}
				if(raceNum > 2) {
					checkPick3 = true;
				}
				if(raceNum > 3) {
					checkPick4 = true;
				}
				if(raceNum > 4) {
					checkPick5 = true;
				}
				if(raceNum > 5) {
					checkPick6 = true;
				}
				if(raceNum > 6) {
					checkPick7 = true;
				}
				if(raceNum > 7) {
					checkPick8 = true;
				}
				if(raceNum > 8) {
					checkPick9 = true;
				}
				if(raceNum > 9) {
					checkPick10 = true;
				}
				$scope.trdData.races.forEach(function(race) {
					if(checkDouble) {
console.log('checking double');
						if(race.number == (raceNum - 1)) {
							race.wagers.forEach(function(wager) {
								if(wager.wager === 'Daily Double') {
console.log('double found: '+race.score.firstNumber);
									$scope.doubleFirst = race.score.firstNumber;
								}
							});
						}
					}
					if(checkPick3) {
console.log('checking pick 3');
						if(race.number == (raceNum - 2)) {
							race.wagers.forEach(function(wager) {
								if(wager.wager === 'Pick 3') {
console.log('pick 3 first runner found: '+race.score.firstNumber);
									$scope.pick3First = race.score.firstNumber;
								}
							});
						}
						if(race.number == (raceNum - 1)) {
console.log('pick 3 second runner found: '+race.score.firstNumber);
							$scope.pick3Second = race.score.firstNumber;
						}
					}
					if(checkPick4) {
console.log('checking pick 4');
						if(race.number == (raceNum - 3)) {
							race.wagers.forEach(function(wager) {
								if(wager.wager === 'Pick 4') {
console.log('pick 4 first runner found: '+race.score.firstNumber);
									$scope.pick4First = race.score.firstNumber;
								}
							});
						}
						if(race.number == (raceNum - 2)) {
console.log('pick 4 second runner found: '+race.score.firstNumber);
							$scope.pick4Second = race.score.firstNumber;
						}
						if(race.number == (raceNum - 1)) {
console.log('pick 4 third runner found: '+race.score.firstNumber);
							$scope.pick3Third = race.score.firstNumber;
						}
					}
					if(checkPick5) {
console.log('checking pick 5');
						if(race.number == (raceNum - 4)) {
							race.wagers.forEach(function(wager) {
								if(wager.wager === 'Pick 5') {
console.log('pick 5 first runner found: '+race.score.firstNumber);
									$scope.pick5First = race.score.firstNumber;
								}
							});
						}
						if(race.number == (raceNum - 3)) {
console.log('pick 5 second runner found: '+race.score.firstNumber);
							$scope.pick5Second = race.score.firstNumber;
						}
						if(race.number == (raceNum - 2)) {
console.log('pick 5 third runner found: '+race.score.firstNumber);
							$scope.pick5Third = race.score.firstNumber;
						}
						if(race.number == (raceNum - 1)) {
console.log('pick 5 fourth runner found: '+race.score.firstNumber);
							$scope.pick5Fourth = race.score.firstNumber;
						}
					}
// TODO
// Pick 6
// Pick 7
// Pick 8
// Pick 9
// Pick 10
					if(race.number == raceNum) {
						$scope.race = race;
						race.wagers.forEach(function(wager) {
							if(wager.wager === 'Win') {
								$scope.show1st = true;
							}
							if(wager.wager === 'Place') {
								$scope.show2nd = true;
							}
							if(wager.wager === 'Show') {
								$scope.show3rd = true;
							}
							if(wager.wager === 'Exacta') {
								$scope.showExactaAA = true;
							}
							if(wager.wager === 'Trifecta') {
								$scope.showTrifectaAAA = true;
							}
							if(wager.wager === 'Superfecta') {
								$scope.show4th = true;
								$scope.showSuperfectaAAAA = true;
							}
							if(wager.wager === 'Pentafecta') {
								$scope.show5th = true;
								$scope.showPentafectaAAAAA = true;
							}
							if($scope.doubleFirst) {
								$scope.showDailyDouble = true;
							}
							if($scope.pick3First) {
								$scope.showPickThree = true;
							}
							if($scope.pick4First) {
								$scope.showPickFour = true;
							}
							if($scope.pick5First) {
								$scope.showPickFive = true;
							}
							if(wager.wager === 'Pick 6') {
								$scope.showPickSix = true;
								$scope.showPickSixAlt = true;
							}
							if(wager.wager === 'Pick 7') {
								$scope.showPickSeven = true;
							}
							if(wager.wager === 'Pick 8') {
								$scope.showPickEight = true;
							}
							if(wager.wager === 'Pick 9') {
								$scope.showPickNine = true;
							}
							if(wager.wager === 'Pick 10') {
								$scope.showPickTen = true;
							}
						});
					}
				});
			});
		});

		$scope.getJockey = function(whichJockey) {
			var finderMap = [];
			finderMap['first'] = $scope.firstNumber;
			finderMap['first1stTie'] = $scope.first1stTieNumber;
			finderMap['first2ndTie'] = $scope.first2ndTieNumber;
			finderMap['second'] = $scope.secondNumber;
			finderMap['second1stTie'] = $scope.second1stTieNumber;
			finderMap['second2ndTie'] = $scope.second2ndTieNumber;
			finderMap['third'] = $scope.thirdNumber;
			finderMap['third1stTie'] = $scope.third1stTieNumber;
			finderMap['third2ndTie'] = $scope.third2ndTieNumber;
			finderMap['fourth'] = $scope.fourthNumber;
			finderMap['fourth1stTie'] = $scope.fourth1stTieNumber;
			finderMap['fourth2ndTie'] = $scope.fourth2ndTieNumber;
			finderMap['fifth'] = $scope.fifthNumber;
			finderMap['fifth1stTie'] = $scope.fifth1stTieNumber;
			finderMap['fifth2ndTie'] = $scope.fifth2ndTieNumber;

			var getNumber = finderMap[whichJockey];

			$scope.race.entries.forEach(function(entry) {
				if(entry.number == getNumber) {
					if(whichJockey === 'first') {
						$scope.firstJockey = entry.jockey;
					}
					if(whichJockey === 'first1stTie') {
						$scope.first1stTieJockey = entry.jockey;
					}
					if(whichJockey === 'first2ndTie') {
						$scope.first2ndTieJockey = entry.jockey;
					}
					if(whichJockey === 'second') {
						$scope.secondJockey = entry.jockey;
					}
					if(whichJockey === 'second1stTie') {
						$scope.second1stTieJockey = entry.jockey;
					}
					if(whichJockey === 'second2ndTie') {
						$scope.second2ndTieJockey = entry.jockey;
					}
					if(whichJockey === 'third') {
						$scope.thirdJockey = entry.jockey;
					}
					if(whichJockey === 'third1stTie') {
						$scope.third1stTieJockey = entry.jockey;
					}
					if(whichJockey === 'third2ndTie') {
						$scope.third2ndTieJockey = entry.jockey;
					}
					if(whichJockey === 'fourth') {
						$scope.fourthJockey = entry.jockey;
					}
					if(whichJockey === 'fourth1stTie') {
						$scope.fourth1stTieJockey = entry.jockey;
					}
					if(whichJockey === 'fourth2ndTie') {
						$scope.fourth2ndTieJockey = entry.jockey;
					}
					if(whichJockey === 'fifth') {
						$scope.fifthJockey = entry.jockey;
					}
					if(whichJockey === 'fifth1stTie') {
						$scope.fifth1stTieJockey = entry.jockey;
					}
					if(whichJockey === 'fifth2ndTie') {
						$scope.fifth2ndTieJockey = entry.jockey;
					}
				}
			});
		};

		$scope.updateExotics = function(posAndVal) {
			var pavPcs = posAndVal.split('-');
			var pos = pavPcs[0];
			var val = pavPcs[1];

			if(pos === 'first') {
				if($scope.showExactaAA) {
					$scope.updateExacta(pos, val);
				}
				if($scope.showTrifectaAAA) {
					$scope.updateTrifecta(pos, val);
				}
				if($scope.showSuperfectaAAAA) {
					$scope.updateSuperfecta(pos, val);
				}
				if($scope.showPentafectaAAAAA) {
					$scope.updatePentafecta(pos, val);
				}

				if($scope.showDailyDouble) {
					$scope.updateDailyDouble();
				}
			}

			if(pos === 'second') {
				if($scope.showExactaAA) {
					$scope.updateExacta(pos, val);
				}
				if($scope.showTrifectaAAA) {
					$scope.updateTrifecta(pos, val);
				}
				if($scope.showSuperfectaAAAA) {
					$scope.updateSuperfecta(pos, val);
				}
				if($scope.showPentafectaAAAAA) {
					$scope.updatePentafecta(pos, val);
				}
			}

			if(pos === 'third') {
				if($scope.showTrifectaAAA) {
					$scope.updateTrifecta(pos, val);
				}
				if($scope.showSuperfectaAAAA) {
					$scope.updateSuperfecta(pos, val);
				}
				if($scope.showPentafectaAAAAA) {
					$scope.updatePentafecta(pos, val);
				}
			}

			if(pos === 'fourth') {
				if($scope.showSuperfectaAAAA) {
					$scope.updateSuperfecta(pos, val);
				}
				if($scope.showPentafectaAAAAA) {
					$scope.updatePentafecta(pos, val);
				}
			}

			if(pos === 'fifth') {
				if($scope.showPentafectaAAAAA) {
					$scope.updatePentafecta(pos, val);
				}
			}
		}

		$scope.updateExacta = function(pos, val) {
			if($scope.exacta.length > 1){
				$scope.exactaPcs = $scope.exacta.split('/');
				if(pos === 'first') {
					if(val === 'firstNumber') {
						$scope.exactaPcs[0] = $scope.firstNumber;
					}
				}
				if(pos === 'second') {
					if(val === 'secondNumber') {
						$scope.exactaPcs[1] = $scope.secondNumber;
					}
				}
			} else {
				$scope.exactaPcs = [];
			}
			if(pos === 'first') {
				if(val === 'firstNumber') {
					$scope.exactaPcs.push($scope.firstNumber);
				}
				if($scope.exactaPcs[1] === undefined) {
					$scope.exactaPcs[1] = '';
				}
			}
			if(pos === 'second') {
				if(val === 'secondNumber') {
					$scope.exactaPcs.push('');
					$scope.exactaPcs.push($scope.secondNumber);
				}
				if($scope.exactaPcs[0] === undefined) {
					$scope.exactaPcs[0] = '';
				}
			}
			$scope.exacta = $scope.exactaPcs[0] + '/' + $scope.exactaPcs[1];
		}

		$scope.updateTrifecta = function(pos, val) {
			if($scope.trifecta.length > 1){
				$scope.trifectaPcs = $scope.trifecta.split('/');
				if(pos === 'first') {
					if(val === 'firstNumber') {
						$scope.trifectaPcs[0] = $scope.firstNumber;
					}
				}
				if(pos === 'second') {
					if(val === 'secondNumber') {
						$scope.trifectaPcs[1] = $scope.secondNumber;
					}
				}
				if(pos === 'third') {
					if(val === 'thirdNumber') {
						$scope.trifectaPcs[2] = $scope.thirdNumber;
					}
				}
			} else {
				$scope.trifectaPcs = [];
			}
			if(pos === 'first') {
				if(val === 'firstNumber') {
					$scope.trifectaPcs.push($scope.firstNumber);
				}
				if($scope.trifectaPcs[1] === undefined) {
					$scope.trifectaPcs[1] = '';
				}
				if($scope.trifectaPcs[2] === undefined) {
					$scope.trifectaPcs[2] = '';
				}
			}
			if(pos === 'second') {
				if(val === 'secondNumber') {
					$scope.trifectaPcs.push('');
					$scope.trifectaPcs.push($scope.secondNumber);
				}
				if($scope.trifectaPcs[0] === undefined) {
					$scope.trifectaPcs[0] = '';
				}
				if($scope.trifectaPcs[2] === undefined) {
					$scope.trifectaPcs[2] = '';
				}
			}
			if(pos === 'third') {
				if(val === 'thirdNumber') {
					$scope.trifectaPcs.push('');
					$scope.trifectaPcs.push('');
					$scope.trifectaPcs.push($scope.thirdNumber);
				}
				if($scope.trifectaPcs[0] === undefined) {
					$scope.trifectaPcs[0] = '';
				}
				if($scope.trifectaPcs[1] === undefined) {
					$scope.trifectaPcs[1] = '';
				}
			}
			$scope.trifecta = $scope.trifectaPcs[0] + '/' + $scope.trifectaPcs[1] + '/' + $scope.trifectaPcs[2];
		}

		$scope.updateSuperfecta = function(pos, val) {
			if($scope.superfecta.length > 1){
				$scope.superfectaPcs = $scope.superfecta.split('/');
				if(pos === 'first') {
					if(val === 'firstNumber') {
						$scope.superfectaPcs[0] = $scope.firstNumber;
					}
				}
				if(pos === 'second') {
					if(val === 'secondNumber') {
						$scope.superfectaPcs[1] = $scope.secondNumber;
					}
				}
				if(pos === 'third') {
					if(val === 'thirdNumber') {
						$scope.superfectaPcs[2] = $scope.thirdNumber;
					}
				}
				if(pos === 'fourth') {
					if(val === 'fourthNumber') {
						$scope.superfectaPcs[3] = $scope.fourthNumber;
					}
				}
			} else {
				$scope.superfectaPcs = [];
			}
			if(pos === 'first') {
				if(val === 'firstNumber') {
					$scope.superfectaPcs.push($scope.firstNumber);
				}
				if($scope.superfectaPcs[1] === undefined) {
					$scope.superfectaPcs[1] = '';
				}
				if($scope.superfectaPcs[2] === undefined) {
					$scope.superfectaPcs[2] = '';
				}
				if($scope.superfectaPcs[3] === undefined) {
					$scope.superfectaPcs[3] = '';
				}
			}
			if(pos === 'second') {
				if(val === 'secondNumber') {
					$scope.superfectaPcs.push('');
					$scope.superfectaPcs.push($scope.secondNumber);
				}
				if($scope.superfectaPcs[0] === undefined) {
					$scope.superfectaPcs[0] = '';
				}
				if($scope.superfectaPcs[2] === undefined) {
					$scope.superfectaPcs[2] = '';
				}
				if($scope.superfectaPcs[3] === undefined) {
					$scope.superfectaPcs[3] = '';
				}
			}
			if(pos === 'third') {
				if(val === 'thirdNumber') {
					$scope.superfectaPcs.push('');
					$scope.superfectaPcs.push('');
					$scope.superfectaPcs.push($scope.thirdNumber);
				}
				if($scope.superfectaPcs[0] === undefined) {
					$scope.superfectaPcs[0] = '';
				}
				if($scope.superfectaPcs[1] === undefined) {
					$scope.superfectaPcs[1] = '';
				}
				if($scope.superfectaPcs[3] === undefined) {
					$scope.superfectaPcs[3] = '';
				}
			}
			if(pos === 'fourth') {
				if(val === 'fourthNumber') {
					$scope.superfectaPcs.push('');
					$scope.superfectaPcs.push('');
					$scope.superfectaPcs.push('');
					$scope.superfectaPcs.push($scope.fourthNumber);
				}
				if($scope.superfectaPcs[0] === undefined) {
					$scope.superfectaPcs[0] = '';
				}
				if($scope.superfectaPcs[1] === undefined) {
					$scope.superfectaPcs[1] = '';
				}
				if($scope.superfectaPcs[2] === undefined) {
					$scope.superfectaPcs[2] = '';
				}
			}
			$scope.superfecta = $scope.superfectaPcs[0] + '/' + $scope.superfectaPcs[1] + '/' + $scope.superfectaPcs[2] + '/' + $scope.superfectaPcs[3];
		}

		$scope.updatePentfecta = function(pos, val) {
			if($scope.pentafecta.length > 1){
				$scope.pentafectaPcs = $scope.pentafecta.split('/');
				if(pos === 'first') {
					if(val === 'firstNumber') {
						$scope.pentafectaPcs[0] = $scope.firstNumber;
					}
				}
				if(pos === 'second') {
					if(val === 'secondNumber') {
						$scope.pentafectaPcs[1] = $scope.secondNumber;
					}
				}
				if(pos === 'third') {
					if(val === 'thirdNumber') {
						$scope.pentafectaPcs[2] = $scope.thirdNumber;
					}
				}
				if(pos === 'fourth') {
					if(val === 'fourthNumber') {
						$scope.pentafectaPcs[3] = $scope.fourthNumber;
					}
				}
				if(pos === 'fifth') {
					if(val === 'fifthNumber') {
						$scope.pentafectaPcs[4] = $scope.fifthNumber;
					}
				}
			} else {
				$scope.pentafectaPcs = [];
			}
			if(pos === 'first') {
				if(val === 'firstNumber') {
					$scope.pentafectaPcs.push($scope.firstNumber);
				}
				if($scope.pentafectaPcs[1] === undefined) {
					$scope.pentafectaPcs[1] = '';
				}
				if($scope.pentafectaPcs[2] === undefined) {
					$scope.pentafectaPcs[2] = '';
				}
				if($scope.pentafectaPcs[3] === undefined) {
					$scope.pentafectaPcs[3] = '';
				}
				if($scope.pentafectaPcs[4] === undefined) {
					$scope.pentafectaPcs[4] = '';
				}
			}
			if(pos === 'second') {
				if(val === 'secondNumber') {
					$scope.pentafectaPcs.push('');
					$scope.pentafectaPcs.push($scope.secondNumber);
				}
				if($scope.pentafectaPcs[0] === undefined) {
					$scope.pentafectaPcs[0] = '';
				}
				if($scope.pentafectaPcs[2] === undefined) {
					$scope.pentafectaPcs[2] = '';
				}
				if($scope.pentafectaPcs[3] === undefined) {
					$scope.pentafectaPcs[3] = '';
				}
				if($scope.pentafectaPcs[4] === undefined) {
					$scope.pentafectaPcs[4] = '';
				}
			}
			if(pos === 'third') {
				if(val === 'thirdNumber') {
					$scope.pentafectaPcs.push('');
					$scope.pentafectaPcs.push('');
					$scope.pentafectaPcs.push($scope.thirdNumber);
				}
				if($scope.pentafectaPcs[0] === undefined) {
					$scope.pentafectaPcs[0] = '';
				}
				if($scope.pentafectaPcs[1] === undefined) {
					$scope.pentafectaPcs[1] = '';
				}
				if($scope.pentafectaPcs[3] === undefined) {
					$scope.pentafectaPcs[3] = '';
				}
				if($scope.pentafectaPcs[4] === undefined) {
					$scope.pentafectaPcs[4] = '';
				}
			}
			if(pos === 'fourth') {
				if(val === 'fourthNumber') {
					$scope.pentafectaPcs.push('');
					$scope.pentafectaPcs.push('');
					$scope.pentafectaPcs.push('');
					$scope.pentafectaPcs.push($scope.fourthNumber);
				}
				if($scope.pentafectaPcs[0] === undefined) {
					$scope.pentafectaPcs[0] = '';
				}
				if($scope.pentafectaPcs[1] === undefined) {
					$scope.pentafectaPcs[1] = '';
				}
				if($scope.pentafectaPcs[2] === undefined) {
					$scope.pentafectaPcs[2] = '';
				}
				if($scope.pentafectaPcs[4] === undefined) {
					$scope.pentafectaPcs[4] = '';
				}
			}
			if(pos === 'fifth') {
				if(val === 'fifthNumber') {
					$scope.pentafectaPcs.push('');
					$scope.pentafectaPcs.push('');
					$scope.pentafectaPcs.push('');
					$scope.pentafectaPcs.push('');
					$scope.pentafectaPcs.push($scope.fifthNumber);
				}
				if($scope.pentafectaPcs[0] === undefined) {
					$scope.pentafectaPcs[0] = '';
				}
				if($scope.pentafectaPcs[1] === undefined) {
					$scope.pentafectaPcs[1] = '';
				}
				if($scope.pentafectaPcs[2] === undefined) {
					$scope.pentafectaPcs[2] = '';
				}
				if($scope.pentafectaPcs[3] === undefined) {
					$scope.pentafectaPcs[3] = '';
				}
			}
			$scope.pentafecta = $scope.pentafectaPcs[0] + '/' + $scope.pentafectaPcs[1] + '/' + $scope.pentafectaPcs[2] + '/' + $scope.pentafectaPcs[3] + '/' + $scope.pentafectaPcs[4];
		}

		$scope.updateDailyDouble = function() {
			$scope.dailyDouble = $scope.doubleFirst + '/' + $scope.firstNumber;
		}

		$scope.updatePick3 = function() {
			$scope.pick3 = $scope.pick3First + '/' + $scope.pick3Second + '/' + $scope.firstNumber;
		}

		$scope.updatePick4 = function() {
			$scope.pick4 = $scope.pick4First + '/' + $scope.pick4Second + '/' + $scope.pick4Third + '/' + $scope.firstNumber;
		}

		$scope.updatePick5 = function() {
			$scope.pick5 = $scope.pick5First + '/' + $scope.pick5Second + '/' + $scope.pick5Third + '/' + $scope.pick5Fourth + '/' + $scope.firstNumber;
		}

// TODO
// updatePick6
// updatePick7
// updatePick8
// updatePick9
// updatePick10

		$scope.score = function() {
			var score = {};
			score.firstNumber = $scope.firstNumber;
			score.firstJockey = $scope.firstJockey;
			score.firstWinPrice = $scope.firstWinPrice;
			if($scope.firstPlacePrice) {
				score.firstPlacePrice = $scope.firstPlacePrice;
			}
			if($scope.firstShowPrice) {
				score.firstShowPrice = $scope.firstShowPrice;
			}
			if($scope.secondNumber) {
				score.secondNumber = $scope.secondNumber;
				score.secondJockey = $scope.secondJockey;
				score.secondPlacePrice = $scope.secondPlacePrice;
				if($scope.secondShowPrice) {
					score.secondShowPrice = $scope.secondShowPrice;
				}
				score.exacta = $scope.exacta;
				score.exactaPrice = $scope.exactaPrice;
			}
			if($scope.thirdNumber) {
				score.thirdNumber = $scope.thirdNumber;
				score.thirdJockey = $scope.thirdJockey;
				score.thirdShowPrice = $scope.thirdShowPrice;
				score.trifecta = $scope.trifecta;
				score.trifectaPrice = $scope.trifectaPrice;
			}
			if($scope.superfectaPrice) {
				score.superfecta = $scope.superfecta;
				score.superfectaPrice = $scope.superfectaPrice;
			}
			if($scope.pentafectaPrice) {
				score.pentafecta = $scope.pentafecta;
				score.pentafectaPrice = $scope.pentafectaPrice;
			}

			if($scope.dailyDoublePrice) {
				score.dailyDouble = $scope.dailyDouble;
				score.dailyDoublePrice = $scope.dailyDoublePrice;
			}

			if($scope.pick3Price) {
				score.pick3 = $scope.pick3;
				score.pick3Price = $scope.pick3Price;
			}

			if($scope.pick4Price) {
				score.pick4 = $scope.pick4;
				score.pick4Price = $scope.pick4Price;
			}

			if($scope.pick5Price) {
				score.pick5 = $scope.pick5;
				score.pick5Price = $scope.pick5Price;
			}

			if($scope.pick6Price) {
				score.pick6 = $scope.pick6;
				score.pick6Price = $scope.pick6Price;
			}

			if($scope.pick6ConsolationPrice) {
				score.pick6Consolation = $scope.pick6Consolation;
				score.pick6ConsolationPrice = $scope.pick6ConsolationPrice;
			}

			if($scope.pick7Price) {
				score.pick7 = $scope.pick7;
				score.pick7Price = $scope.pick7Price;
			}

			if($scope.pick8Price) {
				score.pick8 = $scope.pick8;
				score.pick8Price = $scope.pick8Price;
			}

			if($scope.pick9Price) {
				score.pick9 = $scope.pick9;
				score.pick9Price = $scope.pick9Price;
			}

			if($scope.pick10Price) {
				score.pick10 = $scope.pick10;
				score.pick10Price = $scope.pick10Price;
			}

			$scope.race.score = score;

			var newRaces = [];

			$scope.trdData.races.forEach(function(race) {
				if(race.number === $scope.race.number) {
					newRaces.push($scope.race);
				} else {
					newRaces.push(race);
				}
			});

			$scope.trdData.races = newRaces;

			var updateTrdPromise = trdMgmt.updateTrd($scope.trdData);
			updateTrdPromise.then(function(response) {
console.log('response:');
console.log(response);
			});
		}

	}
}());
