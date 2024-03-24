
const fakeAPi = (data: any) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data)
    }, 3000)
})

export const fetchToppings = () => fakeAPi([])