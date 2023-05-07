const btitle = document.getElementById("btitle")
const bdetails = document.getElementById("bdetails")




class Book {
    constructor(title, details) {
        this.title = title
        this.details = details 
    }


}

let myLibrary = []


function addBookToLibrary() {  
    let book = new Book(btitle.value, bdetails.value)
    console.log(book)
    myLibrary.push(book)
    console.log(myLibrary)
    display()
}

document.querySelector(".add-book").addEventListener("click", () => {
    addBookToLibrary()
})


function display() {
    myLibrary.forEach(book => {
        document.querySelector(".books-shelf").innerHTML += `
            <div class="book">
                <h2 class="book-title">${book.title}</h2>
                <p class="book-description">${book.details}</p>
            </div>`})
}