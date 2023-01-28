const color = prompt('выберите цвет')
class Lego {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
}
class Circle extends Lego {
    constructor(options) {
        super(options.selector);
        this.$element.style.backgroundColor = options.color
    }
}

if (color === 'красный') {
    const red = new Circle({
        selector: '#red',
        color: 'red'
    })
} else if (color === 'желтый') {
    const yellow = new Circle({
        selector: '#yellow',
        color: 'yellow'
    })
} else if (color === 'зеленый') {
    const green = new Circle({
        selector: '#green',
        color: 'green'
    })
} else {
    alert('ERROR')
}