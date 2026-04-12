//define the actions of the cars objects
function printCars()
{
    var make_line = "<td>" + this.make + "</td>";
    var model_line = "<td>" + this.model + "</td>";
    var year_line = "<td>" + this.year + "</td>";
    var color_line = "<td>" + this.color + "</td>";
    var fuelType_line = "<td>" + this.fuelType + "</td>";

    var row ="<tr>" + make_line + model_line + year_line + color_line + fuelType_line + "</tr>";
    document.write(row);
}

//define an object using constructor function
function Cars(make, model, year, color, fuelType)
{
    //list of attributes of the car object
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelType = fuelType;

    //assign method to the car object
    this.printCars = printCars;
}

//create car object
var car1 = new Cars("Toyota", "Camry", "2020", "Red", "Regular");
var car2 = new Cars("Honda", "Civic", "2019", "Blue", "Premium");
var car3 = new Cars("Ford", "Mustang", "2021", "Black", "Regular");
var car4 = new Cars("Tesla", "Model 3", "2022", "White", "Electric");
var car5 = new Cars("Chevrolet", "Impala", "2018", "Silver", "Regular");

//display the car information
car1.printCars();
car2.printCars();
car3.printCars();
car4.printCars();
car5.printCars(); 

//create an array of cars
var carsArray = [car1, car2, car3, car4, car5];
carsArray = carsArray();
for (var counter = 0; counter < carsArray.length; counter++)
{
    document.write(carsArray[counter]);
}
