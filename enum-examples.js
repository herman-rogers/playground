var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
})(Color || (Color = {}));
var green = Color[Color.Green];
var color = Color[green];
console.log('To String');
console.log(green);
console.log('To Enum');
console.log(color);
