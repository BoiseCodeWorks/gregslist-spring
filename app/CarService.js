function CarService(cb){
  //This is where the data lives
  var baseUrl = "https://bcw-gregslist.herokuapp.com/api/cars"
  //PRIVATE
  var cars = []
  

  function Car(img, year, model, make, price, description){
    this.imgUrl = img || "//placehold.it/200x200"
    this.year = year
    this.model = model
    this.make = make
    this.price = price
    this.description = description || "No description provided"
   }


  function loadCars(){
    $.get(baseUrl).then(res=>{
      cb(res.data)
    })
  }
loadCars()
  //PUBLIC
  this.getCars = function getCars(){
    return JSON.parse(JSON.stringify(cars))
  }

  this.addCar = function addCar(car){
    var newCar = new Car(car.img, car.year, car.model, car.make, car.price)
    $.post(baseUrl, newCar)
    .then(res=>{
      loadCars()
    })
  }




}