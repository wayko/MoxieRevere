(function(){
var app = angular.module("moxierevere",['ngCart']);
   


   app.filter('myFilter', function () {
        return function (items, count) {
            var result = [];
            for (var i = 0; i < items.length && result.length < count; ++i) {
                if (items[i].available > 0) result.push(items[i]);
            }
            return result;
        };
    });
app.controller("ItemsController",['$scope', '$http', 'ngCart', function($scope, $http, ngCart){
	
	ngCart.setTaxRate(0.00);
    ngCart.setShipping(2.99); 
	this.items = allItems;
	$scope.itemsPerListing = 3;
	 $scope.myVariable = "My Variable value";
	var shifteditem = [];
	var shifteditems = [];
	var counter;
$scope.nextitem = function () {
	  this.items = allItems;
		if($scope.itemsPerListing >= this.items.length)
		{
			$scope.itemsPerListing =  this.items.length;
			console.log($scope.itemsPerListing);
		}
		else
		{
		shifteditem.push( $scope.items.shift());
		counter = shifteditem.length;
		 console.log(this.items.length);
		 if (counter > $scope.itemsPerListing)
		 {
			 counter  = this.items.length + 2;
			
		 }
		}		 
  };
 
$scope.previtem = function() {
	this.items = allItems;
	
	if(counter > 0){
		$scope.items.unshift(shifteditem[counter-1]);
		counter = counter - 1;
		console.log(counter);
	}	
};
}]);
var allItems = [
{
	id:0,
	name: "item1",
	image: "./images/br.JPG" ,
	price: 2.00,
	available: 10,
	size: "S , M, L"
},
{
	id:1,
	name: "item2",
	image: "./images/avacados.JPG" ,
	price: 5.00,
	available: 0,
	size: "S , M, L"
},
{
	id:2,
	name: "item3",
	image: "./images/chicha.JPG" ,
	price: 2.00,
	available: 20,
	size: "S , M, L"
},
{
	id:3,
	name: "item4",
	image: "./images/lomo.JPG" ,
	price: 6.00,
	available: 4,
	size: "S , M, L"
},
{
	id:4,
	name: "item5",
	image: "./images/satuna.JPG" ,
	price: 2.00,
	available: 5,
	size: "S , M, L"
},
{
	id:5,
	name: "item5",
	image: "./images/satuna.JPG" ,
	price: 2.00,
	available: 5,
	size: "S , M, L"
},
{
	id:6,
	name: "item5",
	image: "./images/satuna.JPG" ,
	price: 2.00,
	available: 5,
	size: "S , M, L"
},
{
	id:7,
	name: "item5",
	image: "./images/satuna.JPG" ,
	price: 2.00,
	available: 5,
	size: "S , M, L"
}
];
	
})();