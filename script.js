
//array - while loop//
const selectColor = ['red', 'blue', 'yellow', 'orange'];

let i = 0
let color = '';

while (selectColor[i]) {
  color += selectColor[i] + '\n';
  i++;

}
console.log(color)


//array - for loop//
const selectColor2 = ['red', 'blue', 'yellow', 'orange'];

let i2, lengte, color2;

for (i2 = 0, lengte = selectColor2.length, color2 = ''; i2 < lengte; i2++) {
  color2 += selectColor2[i2] + '\n';
  
}
console.log(color2)


//array - for each//
const selectColor3 = ['red', 'blue', 'yellow', 'orange'];

selectColor3.forEach(function(element)  {
    console.log(element);
});


//while loop 8 regels
//for loop 6 regels
//foreach 4 regels


const selectColors4 = {
  1: "red",
  2: "yellow",
  3: "blue",
  4: "green",
  5: "orange",
};

//Looping through the properties of an object://

for(const [key,value]of Object.entries(selectColors4)){
  console.log(`${key}: ${value}`)
}

Object.entries(selectColors4).forEach(([key,value]) =>{
  console.log(`${key}: ${value}`)
})