$(document).ready(function(){
    $("#yesDelivery").click(function(){
        $(".location").show();
    })
    $("#bttn1").click(function(){
        var userLocation= document.getElementById("deliveryLocation");
        alert("Your order will be delivered to " + userLocation.value);
    })
    $("#orderNow").click(function(){
        $("#orderAnother").show();
    })
    event.preventDefault();
    

})
var orders=[];
function Order(size, crust, toppings, delivery) {
    this.size=size;
    this.crust=crust;
    this.toppings=toppings;
    this.delivery=delivery;
}
var order= new Order(
    document.getElementsByName("size").value,
    document.getElementsByName("crust").value,
    document.getElementsByName("toppings").value,
    document.getElementsByName("delivery").value,
)
orders.push(order);

var totalCost= function(){
    var large=document.getElementById("pizzaLarge");
    var medium= document.getElementById("pizzaMedium");
    var small=document.getElementById("pizzaSmall");
    var stuffed=document.getElementById("crustStuffed");
    var crispy=document.getElementById("crustCrispy");
    var glutenFree=document.getElementById("crustGlutenFree");
    var chicken=document.getElementById("bbqChickenToppings");
    var pepperoni=document.getElementById("pepperoniToppings");
    var veggiemix=document.getElementById("veggieToppings");
    var yesDelivery=document.getElementById("yesDelivery");
    var noDelivery=document.getElementById("noDelivery");


    function Ordercost(sizeCost, crustCost, toppingsCost, deliveryFee) {
        this.sizeCost=sizeCost;
        this.crustCost=crustCost;
        this.toppingsCost=toppingsCost;
        this.deliveryFee=deliveryFee;
    }
    var sizeCost= function(){
        if(large.checked===true){
            return sizeCost=350;
        } else if(medium.checked===true) {
            return sizeCost=250;
        } else if(small.checked===true) {
            return sizeCost=150;
        } 
    }
    var crustCost= function(){
        if(stuffed.checked===true){
            return crustCost=300;
        } else if(crispy.checked===true) {
            return crustCost=200;
        } else if(glutenFree.checked===true) {
            return crustCost=400;
        } 
    }
    var toppingsCost= function(){
        if(chicken.checked===true){
            return toppingsCost=350;
        } else if(pepperoni.checked===true) {
            return toppingsCost=250;
        } else if(veggiemix.checked===true) {
            return toppingsCost=150;
        } 
    }
    var deliveryFee= function(){
        if(yesDelivery.checked===true&& noDelivery.checked===false){
            return deliveryFee=150;
        } else if(noDelivery.checked===true&& yesDelivery.checked===false) {
            return deliveryFee=0;
        } else {
            return false;
        }
    }
    var newSizeCost= sizeCost();
    var newCrustCost= crustCost();
    var newToppingsCost= toppingsCost();
    var newDeliveryFee= deliveryFee();
    var total=0
    var newTotalCost= function() {
        return total+=newSizeCost+ newCrustCost + newToppingsCost + newDeliveryFee;
    }
    var overallCost= newTotalCost();
    alert("your bill is "+ overallCost);
    document.getElementById("userCost").innerHTML= overallCost;

    
}
var deliveryLocator= function(){
    var userLocation= document.getElementById("deliveryLocation");
    var yesDelivery=document.getElementById("yesDelivery");
    var noDelivery=document.getElementById("noDelivery");

    if(yesDelivery.checked===true&& noDelivery.checked===false){
        alert("Your order will be delivered to "+userLocation.value+ ". Delivery fee is Kshs.150");
    } else if(noDelivery.checked===true&& yesDelivery.checked===false) {
        "";
    } 
}