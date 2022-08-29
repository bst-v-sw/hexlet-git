//Свойства DOM элементов
document.body.myData = {
    name: 'Caesar',
    title: 'Imperator'
};
console.log(document.body.myData.title); // Imperator
//==============================================================
// Есть также методы
document.body.sayTagName = function() {
    console.log(this.tagName);
};

document.body.sayTagName(); // BODY (значением "this" в этом методе будет document.body)
//====================================================
// Также можно изменять встроенные прототипы, такие как Element.prototype и добавлять новые методы ко всем элементам:
Element.prototype.sayHi = function() {
    alert(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY


