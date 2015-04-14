(function(){
var app = angular.module("moxierevere",[]);

app.controller("ItemsController", function(){
	this.items = allItems;
	
});
var allItems = [
{
	name: "item1",
	image: "images/br.JPG" ,
	price: 2.00,
	available: true,
	size: "S , M, L"
},
{
	name: "item2",
	image: "images/avacados.JPG" ,
	price: 5.00,
	available: true,
	size: "S , M, L"
},
{
	name: "item3",
	image: "images/chicha.JPG" ,
	price: 2.00,
	available: false,
	size: "S , M, L"
},
{
	name: "item4",
	image: "images/lomo.JPG" ,
	price: 6.00,
	available: true,
	size: "S , M, L"
},
{
	name: "item5",
	image: "images/satuna.JPG" ,
	price: 2.00,
	available: false,
	size: "S , M, L"
}
];
})();