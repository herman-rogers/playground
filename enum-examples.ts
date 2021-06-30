enum Color {
  Red, Green
}

const green: string = Color[Color.Green]

const color: Color = Color[green];

console.log('To String');
console.log(green);

console.log('To Enum');
console.log(color);