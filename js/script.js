function getSize() {
    var sizes= document.getElementsByName("sizes");
    if(sizes[0].checked) {
        var size= document.getElementById("pizzaLarge").value;
        document.getElementById("orderSize").innerHTML=size;
    } else if(sizes[1].checked){
        var size= document.getElementById("pizzaMedium").value;
        document.getElementById("orderSize").innerHTML=size;
    } else if(sizes[2].checked) {
        var size= document.getElementById("pizzaSmall").value;
        document.getElementById("orderSize").innerHTML=size
    }
}
function getCrust() {
    var crusts= document.getElementsByName("crusts");
    if(crusts[0].checked) {
        var crust= document.getElementById("crustStuffed").value;
        document.getElementById("orderCrust").innerHTML=crust;
    } else if(crusts[1].checked){
        var crust= document.getElementById("crustCrispy").value;
        document.getElementById("orderCrust").innerHTML=crust;
    } else if(crusts[2].checked) {
        var crust= document.getElementById("crustGlutenFree").value;
        document.getElementById("orderCrust").innerHTML=crust;
    }
}
    
function getTopping(){
    var toppings= document.getElementsByClassName("toppings");
    if(toppings[0].checked){
        var topping= document.getElementById("bbqChickenToppings").value;
        document.getElementById("topping1").innerHTML=topping;
    }
    if(toppings[1].checked){
        var topping= document.getElementById("pepperoniToppings").value;
        document.getElementById("topping2").innerHTML=topping;
    }
    if(toppings[2].checked){
        var topping= document.getElementById("veggieToppings").value;
        document.getElementById("topping3").innerHTML=topping;
    }
}

    // function Order(size, crust, toppings) {
    //     this.size=size;
    //     this.crust=crust;
    //     this.toppings=toppings;
    //     this.orderlist=function(){
    //         return this.size+'with'+this.crust+'crust and'+this.toppings+'toppings.';
    //     }
    // }
    // function orderlist(){
    //     output="";
    //     for (let i = 0; i < orders.length; i++) {
    //         output +=(i+1) +")"+orders[i].orderlist()+"";
            
    //     }
    //     document.getElementById("newOrders").innerHTML=output;
    // }
    // function meal(){
    //     var order= new Order(size, crust, topping);
    //     orders.push(order);
    //     orderlist();
    // }
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
    
        var costs=[];
        function Ordercost(sizeCost, crustCost, toppingsCost, deliveryFee) {
            this.sizeCost=sizeCost;
            this.crustCost=crustCost;
            this.toppingsCost=toppingsCost;
            this.deliveryFee=deliveryFee;
            this.newTotalCost=function(){
                return
            }   
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
            if(yesDelivery.checked===true && noDelivery.checked===false){
                return deliveryFee=150;
            } else if(noDelivery.checked===true && yesDelivery.checked===false) {
                return deliveryFee=0;
            } 
        }
        var newSizeCost= sizeCost();
        var newCrustCost= crustCost();
        var newToppingsCost= toppingsCost();
        var newDeliveryFee= deliveryFee();
        var total=0
        var newTotalCost= function() {
            return newSizeCost+ newCrustCost + newToppingsCost + newDeliveryFee;
        }
        var overallCost= newTotalCost();
        var amount=parseInt(document.getElementById("pizzaNumber").value);
        var absoluteCost= function(){
            return overallCost*amount;
        }
        var newAbsoluteCost= absoluteCost();
        alert("your bill for one pizza is "+ overallCost+ " and your total bill is "+newAbsoluteCost);
        document.getElementById("userCost").innerHTML= newAbsoluteCost;
    
        
}
var deliveryLocator= function(){
    var userLocation= document.getElementById("deliveryLocation");
    var yesDelivery=document.getElementById("yesDelivery");
    var noDelivery=document.getElementById("noDelivery");

    if(yesDelivery.checked===true&& noDelivery.checked===false){
        alert("Your order will be delivered to "+userLocation.value+ ". Delivery fee is Kshs.150");
        document.getElementById("orderDelivery").innerHTML="To be delivered to "+ userLocation.value;
    } else if(noDelivery.checked===true&& yesDelivery.checked===false) {
        "";
    }
}

$(document).ready(function(){
    $("#yesDelivery").click(function(){
        $(".location").show();
    })
});