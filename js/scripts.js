$(document).ready(function(){
    $("#yesDelivery").click(function(){
        $(".location").show();
    })
    $("#bttn1").click(function(){
        var userLocation= document.getElementById("deliveryLocation");
        alert("Your order will be delivered to " + userLocation.value);
    })
    function Pizzasize(size, price) {
        this.size= size;
        this.price= price;
    }
    var large= new Pizzasize("large", 350);
    var medium= new Pizzasize("medium", 250);
    var small= new Pizzasize("small", 150)
})