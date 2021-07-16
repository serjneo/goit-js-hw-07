const categoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.length} категории.`);

const arrRef = Array.from(categoriesRef);
arrRef.forEach(item => {
  console.log(`Категория: ${item.firstElementChild.textContent}
Количество элементов: ${item.lastElementChild.children.length}`);
});