const listWithId = document.querySelectorAll('li.item');
console.log(`В списке ${listWithId.length} категории.`);
const ulCat = document.querySelectorAll('#categories>li');
ulCat.forEach(el => { console.log(`Категория: ${el.firstElementChild.textContent}, Количество элементов: ${el.lastElementChild.children.length}`,);
});