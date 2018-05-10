function CarController(){
//CONTROLLERS ARE RESPONSIBLE FOR 
  //INTERACTING WITH THE DOM/USER
  //COMMUNICATION WITH THE SERVICE

  //PRIVATE
  var carService = new CarService(drawCars)

  function drawCars(cars){
    var template = ''
    for (let i = 0; i < cars.length; i++) {
      const car = cars[i];
      template += `
      <div>
        <img src="${car.imgUrl}" alt="">
        <h3>Make: ${car.make}</h3>
        <h3>Model: ${car.model}</h3>
        <h3>Year: ${car.year}</h3>
        <h3>Price: ${car.price}</h3>
        <p>Description: ${car.description}</p>
      </div>
    ` 
    }
    document.getElementById('cars').innerHTML = template
  }


  //PUBLIC
  this.addCar = function addCar(e){
    e.preventDefault();
    debugger
    var data = e.target
    var newCar = {
      img: data.img.value,
      make: data.make.value,
      model: data.model.value,
      year: data.year.value,
      price: data.price.value
    }
    carService.addCar(newCar)
    drawCars()
  }





}