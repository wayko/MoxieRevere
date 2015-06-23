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
app.controller("ItemsController",['ngCart', '$scope', function(ngCart, $scope){
	
	ngCart.setTaxRate(0.00);
    ngCart.setShipping(2.99); 
	this.items = allItems;
	$scope.itemsPerListing = 3;
	
$scope.prevPage = function() {
		if($scope.itemsPerListing <= 3)
		{
			$scope.itemsPerListing =  3;
		}
		else
		{
			if($scope.itemsPerListing % 3 == 0)
			{
				$scope.itemsPerListing = $scope.itemsPerListing - 3 ;
			alert($scope.itemsPerListing);
			}
			else
			{
				$scope.itemsPerListing = $scope.itemsPerListing - 1 ;
			alert($scope.itemsPerListing);
			}
			
		}
    
  };
  $scope.nextPage = function() {
	  this.items = allItems;
	
		if($scope.itemsPerListing >= this.items.length)
		{
			$scope.itemsPerListing =  this.items.length;
		}
		else
		{
			  alert($scope.itemsPerListing + "<" + this.items.length);
		$scope.itemsPerListing = $scope.itemsPerListing + 3 ;
		}
  };
}]);
var allItems = [
{
	id:0,
	name: "item1",
	image: "http://dreamcpu.com/moxierevere/images/br.JPG" ,
	price: 2.00,
	available: 10,
	size: "S , M, L"
},
{
	id:1,
	name: "item2",
	image: "http://dreamcpu.com/moxierevere/images/avacados.JPG" ,
	price: 5.00,
	available: 10,
	size: "S , M, L"
},
{
	id:2,
	name: "item3",
	image: "http://dreamcpu.com/moxierevere/images/chicha.JPG" ,
	price: 2.00,
	available: 3,
	size: "S , M, L"
},
{
	id:3,
	name: "item4",
	image: "http://dreamcpu.com/moxierevere/images/lomo.JPG" ,
	price: 6.00,
	available: 0,
	size: "S , M, L"
},
{
	id:4,
	name: "item5",
	image: "http://dreamcpu.com/moxierevere/images/satuna.JPG" ,
	price: 2.00,
	available: 5,
	size: "S , M, L"
},
{
	id:5,
	name: "item5",
	image: "http://dreamcpu.com/moxierevere/images/satuna.JPG" ,
	price: 2.00,
	available: 5,
	size: "S , M, L"
},
{
	id:6,
	name: "item5",
	image: "http://dreamcpu.com/moxierevere/images/satuna.JPG" ,
	price: 2.00,
	available: 5,
	size: "S , M, L"
}
];
	
})();