const loader = document.querySelector('.loader')

const content = document.querySelector('.wrapper')
content.style.display = 'none'

const tbody = document.querySelector('tbody')
const thArray = document.querySelectorAll('th')
const input = document.querySelector('input')
input.style.background = 'white' 

const listState = {
    data: [],
    list: '',
    searchList: [],
}

const searchCategoryState = {
    name: false,
    age: false,
    gender: false,
    ticket: false,
    survived: false,
}

const checkField = (value) => {
    if (typeof(value) === 'number') return Math.round(value)
    if (typeof(value) === 'boolean') return value == true ? 'yes' : 'no'
    return value
}

const jsx = (person) => {
    return `
    <tr>
        <td class="name">${person.name ? person.name : 'unknown name'}</td>
        <td class="gender">${person.gender ? person.gender : 'unknown gender'}</td>
        <td class="age">${person.age ? checkField(person.age) : 'unknown age'}</td>
        <td class="ticket">${person.ticket ? person.ticket: 'unknown ticket'}</td>
        <td class="survived">${checkField(person.survived)}</td>
    </tr>
    `
}

let trueKeys = []
const searching = () => {
    if (input.value) {
        const regExp = new RegExp(`^${input.value}`, 'i')
        listState.data.forEach(person => {
            trueKeys.forEach(key => {
                if (regExp.test(checkField(person[key]))) listState.searchList.push(jsx(person))
            })
        })
        tbody.innerHTML = listState.searchList.join('')
        listState.searchList = []
        return
    }
    tbody.innerHTML = listState.list
    listState.searchList = []
}

let currentPassengerIndex = 0
const addData = () => {
    for (let i = 0; i < 20; i++) {
        if (currentPassengerIndex === listState.data.length) break
        const currentPassenger = listState.data[currentPassengerIndex++]
        listState.list += jsx(currentPassenger)
    }
    tbody.innerHTML = listState.list
}

const isSearching = () => {
    return Object.values(searchCategoryState).includes(true)
}

const changeSearchCategory = (e) => {
    if (e) {
        const name = e.target.dataset.name
        searchCategoryState[name] = !searchCategoryState[name]
        e.target.style.background = searchCategoryState[name] ? 'rgb(46, 228, 46)' : null;
        trueKeys = []
        Object.keys(searchCategoryState).forEach(key => {
            if (searchCategoryState[key]) trueKeys.push(key) 
        })
        if (isSearching()) {
            searching()
            input.focus()
        }
        else tbody.innerHTML = listState.list
    }
    input.disabled = !isSearching()
    input.style.cursor = isSearching() ? null : 'not-allowed'
    input.placeholder = isSearching() ? "🔍 Search" : 'Select a search category'
    input.value = isSearching() ? input.value : ''
};

thArray.forEach(th => {
    th.onclick = (e) => changeSearchCategory(e)
})

changeSearchCategory();

(async function () {
    const response = await fetch('https://raw.githubusercontent.com/altkraft/for-applicants/master/frontend/titanic/passengers.json')
    listState.data = await response.json()
    loader.style.display = 'none'
    content.style.display = null
    const table = document.querySelector('table')
    const tablePosition = table.getBoundingClientRect().top + pageYOffset;
    const loadMore = () => {
        if (pageYOffset + document.documentElement.clientHeight > tablePosition + table.offsetHeight && currentPassengerIndex < listState.data.length && !isSearching()) {
            addData()
            loadMore()
        }
    }
    loadMore()

    window.onscroll = loadMore
})()

input.oninput = searching