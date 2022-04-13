const listWithId = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listWithId.length}`);
const ulCatLi = document.querySelectorAll('#categories>li');
ulCatLi.forEach(el => { console.log(`Category: ${el.firstElementChild.textContent} Elements: ${el.lastElementChild.children.length}`,);
});