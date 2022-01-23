hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];


native.reverse();
destination.reverse();


rainbow = hero.concat(native, destination);
rainbow.splice(0, 1, 'Richard');
rainbow.splice(3, 0, 'Gave', 'Battle');
rainbow.splice(6, 1, 'Vain');

circles = [];
text = [];
colors = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'purple'];

for (i = 0; i < colors.length; i++) {
    circles[circles.length] = `<div><div class='circle' style = 'background: ${colors[i]}'></div><div>${rainbow[i]}</div></div>`
}
document.write(`<div class = 'wrapper'>${circles.join('')}</div>`)