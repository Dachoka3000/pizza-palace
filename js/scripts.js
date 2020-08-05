var newMeal= function(){
    var orders=[];
    function Order(size, crust, toppings) {
        this.size=size;
        this.crust=crust;
        this.toppings=toppings;
        this.orderlist=function(){
            return this.size+'with'+this.crust+'crust and'+this.toppings+'toppings.';
        }
    }
    function orderlist(){
        output="";
        for (let i = 0; i < orders.length; i++) {
            output +=(i+1) +")"+orders[i].orderlist()+"";
            
        }
        document.getElementById("newOrders").innerHTML=output;
    }





    var sizeValue= function(){
        var largePizza=document.getElementById("pizzaLarge");
        var mediumPizza= document.getElementById("pizzaMedium");
        var smallPizza=document.getElementById("pizzaSmall");

        if(largePizza.checked===true){
            sizeValue="large";
        } else if(mediumPizza.checked===true) {
            sizeValue="medium";
        } else if(smallPizza.checked===true) {
            sizeValue="small";
        } 
    }
    var crustValue= function(){
        var stuffedPizza=document.getElementById("crustStuffed");
        var crispyPizza=document.getElementById("crustCrispy");
        var glutenFreePizza=document.getElementById("crustGlutenFree");

        if(stuffedPizza.checked===true){
            crustValue="stuffed";
        } else if(crispyPizza.checked===true) {
            crustValue="crispy";
        } else if(glutenFreePizza.checked===true) {
            crustValue="gluten free";
        } 
    }
    var toppingValue= function(){
        var chickenPizza=document.getElementById("bbqChickenToppings");
        var pepperoniPizza=document.getElementById("pepperoniToppings");
        var veggiemixPizza=document.getElementById("veggieToppings");

        if(chickenPizza.checked===true){
            toppingValue="barbaqued chicken";
        } else if(pepperoniPizza.checked===true) {
            toppingValue="pepperoni";
        } else if(veggiemixPizza.checked===true) {
            toppingValue="veggie mix";
        } 
    }
    var deliveryValue= function(){
        var yesDeliver=document.getElementById("yesDelivery");
        var noDeliver=document.getElementById("noDelivery");

        if(yesDeliver.checked===true && noDelivery.checked===false){
            deliveryValue="Yes";
        } else if(noDeliver.checked===true && yesDelivery.checked===false) {
            deliveryFee="No";
        } ;
    }
    var newSizeValue= sizeValue();
    var newCrustValue= crustValue();
    var newToppingValue= toppingValue();
    var newDeliveryValue= deliveryValue();

    function meal(){
        var order= new Order(newSizeValue, newCrustValue, newToppingValue, newDeliveryValue);
        orders.push(order);
        orderlist();
    }
}

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



$(document).ready(function(){
    $("#yesDelivery").click(function(){
        $(".location").show();
    })
    // $("#bttn1").click(function(){
    //     var userLocation= document.getElementById("deliveryLocation");
    //     alert("Your order will be delivered to " + userLocation.value);
    // })
    // $("#orderNow").click(function(){
    //     $("#orderAnother").show();
    // })
    
    $("#orderNow").click(function(){
        $("#orderAnother").show();
        
        // var sizePizza=$("input[type='radio'][name='size']:checked").val("");
        // var crustPizza=$("input[type='radio'][name='crust']:checked").val("");
        // var toppingsPizza=$("input[type='radio'][name='toppings']:checked").val("");
        // var deliveryPizza=$("input[type='radio'][name='delivery']:checked").val("");

        

        // var order=new Order(sizePizza, crustPizza, toppingsPizza, deliveryPizza);

        // $("ul#newOrders").append("<li><span class='userorder'>"+order.sizepizza+"</span></li>");

        // $('input[name="size"]:checked').val("");
        // $('input[name="crust"]:checked').val("");
        // $('input[name="toppings"]:checked').val("");
        // $('input[name="delivery"]:checked').val("");
    })

})
