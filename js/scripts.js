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

var size=document.getElementsByName("size").value;
var crust= document.getElementsByName("crust").value;
var toppings=document.getElementsByName("toppings").value;
var delivery=document.getElementsByName("delivery").value;

