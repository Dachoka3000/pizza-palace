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
    function meal(){
        var order= new Order(str, crs, tpg);
        orders.push(order);
        orderlist();
    }
