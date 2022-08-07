const reducer = (store = {data: []}, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD':
            return {data: [...store.data, action.payload]}
        default:
            return store
    }
}

export const addCard = (name, currentPrice, initialPrice, photo) => ({
        type: 'ADD', payload: {
            name: name.current.value,
            currentPrice: currentPrice.current.value,
            initialPrice: initialPrice.current.value,
            photo: photo.current.files[0] // не понимаю почему индекс 0 так влияет на результат. Без него files пустой объкет
        }
    })


export default reducer
