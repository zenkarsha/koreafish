"use strict";var memoryGameApp=angular.module("memoryGameApp",[]);memoryGameApp.factory("game",function(){var e=["card1","card2","card3","card4","card5","card6","card7","card8"];return new Game(e)});memoryGameApp.controller("GameCtrl",function(t,n){t.game=n});memoryGameApp.directive("mgCard",function(){return{restrict:"E",template:'<div class="container">'+'<div class="card" ng-class="{flipped: tile.flipped}">'+'<img class="front" ng-src="img/back.png">'+'<img class="back" ng-src="img/{{tile.title}}.png">'+"</div>"+"</div>",scope:{tile:"="}}})