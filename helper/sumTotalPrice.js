export function sumTotalPrice(project) {
  const sumUpArray = (accumulator, currentValue) => accumulator + currentValue;
  const totalPrice = project.items
    .map((item) => Number(item.price))
    .reduce(sumUpArray, 0);

  return totalPrice;
}
