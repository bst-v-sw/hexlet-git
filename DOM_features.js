//Свойства DOM элементов
document.body.myData = {
    name: 'Caesar',
    title: 'Imperator'
};
console.log(document.body.myData.title); // Imperator

// Есть также методы
document.body.sayTagName = function() {
    console.log(this.tagName);
};

document.body.sayTagName(); // BODY (значением "this" в этом методе будет document.body)


