const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listContainerRef = document.querySelector('#ingredients');
const insertListItems = items => {
  const unit = document.createElement(`li`);
  unit.textContent = items;
  return unit;
};
const allUnits = ingredients.map(insertListItems);
listContainerRef.append(...allUnits);