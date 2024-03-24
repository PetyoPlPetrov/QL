const fakeAPi = (data: any) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });

export const fetchToppings = () =>
  fakeAPi([
    { id: 1, name: 'Cheese', price: 1 },
    { id: 2, name: 'Pepperoni', price: 2 },
  ]);
