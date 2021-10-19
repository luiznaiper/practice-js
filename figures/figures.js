// Square code


const perimeterSquare = (side) => side * 4
const areaSquare = (side) => side * side
perimeterSquare();
areaSquare();


// Triangle code


const perimeterTriangle = (side1, side2, base) => side1 + side2 + base
const areaTriangle = (base, height) => (base * height) / 2
perimeterTriangle()
areaTriangle()

// Isosceles code
const isoscelesHeight= (side1, side2, base) => {
    if (side1 === side2 && side1 > base)
    {        
        return Math.sqrt(side1**2 - base**2/ 4)
    } else {
        alert('Side 1 is different from side 2 or the base is bigger than the sides')
    }
}


// Circle code

const diameterCircle = (radio) => radio * 2
const pi = Math.PI
const circunference = (radio) => diameterCircle(radio) * pi
const areaCircle = (radio) => pi * Math.pow(radio, 2)


// HTML INTERACTION

//Square
function calcPerimeterSquare () {
    const input = document.getElementById('inputSquareSides')
    const value = input.value
    const perimeter = perimeterSquare(value)
    document.getElementById('perimeterSquareP').innerHTML = perimeter
} 

function calcAreaSquare () {
    const input = document.getElementById('inputSquareSides')
    const value = input.value
    const area = areaSquare(value)
    document.getElementById('areaSquareP').innerHTML = area
} 

// Triangle
function calcPerimeterTriangle(){
    const input1 = document.getElementById('inputSide1Triangle')
    const value1 = Number(input1.value)

    const input2 = document.getElementById('inputSide2Triangle')
    const value2 = Number(input2.value)

    const input3 = document.getElementById('inputBaseTriangle')
    const value3 = Number(input3.value)

    const perimeter = perimeterTriangle(value1, value2, value3)
    document.getElementById('perimeterTriangleP').innerHTML = perimeter
}


function calcHeightTriangle(){
    const input1 = document.getElementById('inputSide1Triangle')
    const value1 = Number(input1.value)

    const input2 = document.getElementById('inputSide2Triangle')
    const value2 = Number(input2.value)

    const input3 = document.getElementById('inputBaseTriangle')
    const value3 = Number(input3.value)

    const height = isoscelesHeight(value1, value2, value3)
    document.getElementById('heightTriangleP').innerHTML = height
}

function calcAreaTriangle(){
    const input1 = document.getElementById('inputSide1Triangle')
    const value1 = Number(input1.value)

    const input2 = document.getElementById('inputSide2Triangle')
    const value2 = Number(input2.value)

    const input3 = document.getElementById('inputBaseTriangle')
    const value3 = Number(input3.value)

    const height = isoscelesHeight(value1, value2, value3)
    area = areaTriangle(value3, height)
    document.getElementById('areaTriangleP').innerHTML = area
}

function calcDiameterCircle(){
    const input1 = document.getElementById('inputRadio')
    const value1 = Number(input1.value)

    const diameter = diameterCircle(value1)
    document.getElementById('diameterP').innerHTML = diameter
}

function calcCircunference(){
    const input1 = document.getElementById('inputRadio')
    const value1 = Number(input1.value)

    const circunferenceArea = circunference(value1)
    document.getElementById('circunferenceP').innerHTML = circunferenceArea
}

function calcCircleArea(){
    const input1 = document.getElementById('inputRadio')
    const value1 = Number(input1.value)

    const circleArea = areaCircle(value1)
    document.getElementById('areaCircleP').innerHTML = circleArea
}

