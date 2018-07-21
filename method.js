
var bmw, mazda, toyota;

function init (){
    createObj();
}

function  createObj(){
bmw={
    model:"x6",
    price:15000,
    year:2012,
    color:"black",
    showInfo:function(){
        id_h2.innerHTML="the car model is: " +this.model +  " and it's color is: " + this.color;
    }
}
mazda = {
    model:"3",
    price:60000,
    year:2011,
    color:"blue",
    showInfo:function(){
        id_h2.innerHTML="the car model is: " +this.model +  " and it's color is: " + this.color;
    }
}
toyota = {
    model:"corola",
    price:74000,
    year:2013,
    color:"red"
}
}
function onBmwClick(){
    bmw.showInfo();
}

function onMazdaClick(){
    mazda.showInfo();
}