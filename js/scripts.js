$(document).ready(function(){
    $("#yesDelivery").click(function(){
        $(".location").show();
    })
    $("#bttn1").click(function(){
        var userLocation= document.getElementById("deliveryLocation");
        alert("Your order will be delivered to " + userLocation.value);
    })
})