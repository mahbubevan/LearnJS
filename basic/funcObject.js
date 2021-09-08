const cars = {
    _name:"",
    model:"",
    weight:0,
    color:"",
    start:function(){
        return "The Car Has Started"
    },
    drive:function(){
        return "Car is now dirving"
    },
    brake:function(){
        return "Brake has been pressed"
    },
    stop:function(){
        return "Car has stopped"
    }
}

cars._name = "Toyota"
cars['model'] = 2019

console.log(cars);

console.log(cars.start());