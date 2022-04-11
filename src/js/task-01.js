const listWithId = document.querySelectorAll("li.item");
console.log(listWithId);
listWithId.forEach((sol) => console.log(sol.firstElementChild));
listWithId.forEach((sol) => console.log(sol.lastElementChild));
