// Task 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.stateValue = state;
        this.type = type;
    }

    fix() {
        this.state = this.stateValue * 1.5
    }
    get state() {
        return this.stateValue
    }
    set state(number) {
        if (number < 0) this.stateValue = 0
        else if (number > 100) this.stateValue = 100
        else this.stateValue = number
    }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

// console.log(sherlock.releaseDate); //2019
// console.log(sherlock.state); //100
// sherlock.fix();
// console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state, 'magazine');
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'book'
        this.author = author
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'novel'
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'detective'
    }
}

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);

// console.log(picknick.author); //"Аркадий и Борис Стругацкие"
// picknick.state = 10;
// console.log(picknick.state); //10
// picknick.fix();
// console.log(picknick.state); //15

// Task 2
class Library {
    constructor(name) {
        this.name = name
        this.books = []
    }
    addBook(book) {
        if (book.state > 30) this.books.push(book)
    }
    findBookBy(type, value){
        let result = null
        this.books.forEach(book => {
            if (book[type] === value) {
                result = book
            }
        })
        return result
    }
    giveBookByName(bookName) {
        let result = null
        this.books.forEach((book, i) => {
            if (book.name === bookName) {
                result = book
                this.books.splice(i, 1)
            }
        })
        return result
    }
}

// const library = new Library("Библиотека имени Ленина");
//
// library.addBook(
//     new DetectiveBook(
//         "Артур Конан Дойл",
//         "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
//         2019,
//         1008
//     )
// );
// library.addBook(
//     new FantasticBook(
//         "Аркадий и Борис Стругацкие",
//         "Пикник на обочине",
//         1972,
//         168
//     )
// );
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));
//
// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
//
// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// Task 3
class Student {
    constructor(name) {
        this.name = name
        this.diary = {}
    }
    addMark(mark, subject) {
        if (mark >= 1 && mark <= 5 && mark % 1 === 0) {
            const dairy = this.diary
            if (dairy[subject]) dairy[subject].push(mark)
            else {
                dairy[subject] = [mark]
            }
        }
        else console.log("Ошибка, оценка должна быть числом от 1 до 5")
    }
    getAverageBySubject(subject) {
        if (this.diary[subject]) {
            const sum = this.diary[subject].reduce((acc, i) => acc + i)
            const average = sum / this.diary[subject].length
            console.log(`Средний балл по предмету ${subject} ${average}`)
            return average
        }
        else {
            console.log('Несуществующий предмет')
        }
    }
    getAverage() {
        let sum = 0
        let count = 0
        for (const subject in this.diary) {
            sum += this.getAverageBySubject(subject)
            count++
        }
        console.log(count === 0 ? 'Нет оценок' : `Средний балл по всем предметам ${sum / count}`)
    }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
console.log(student)
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
// student.exclude("Исключен за попытку подделать оценки");