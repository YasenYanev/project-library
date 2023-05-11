const btitle = document.getElementById("btitle")
const bdetails = document.getElementById("bdetails")
const bshelf = document.querySelector(".books-shelf")

class Book {
    constructor(title, details) {
        this.title = title
        this.details = details 
    }


}

let myLibrary = []

document.querySelector(".add-book").addEventListener("click", (e) => {
    let book = new Book(btitle.value, bdetails.value)
    myLibrary.push(book)
    display()
    e.preventDefault()
    document.getElementById("popupForm").reset()
    console.log(myLibrary)
})


function display() {
    bshelf.innerHTML = ""
    myLibrary.forEach(book => {
    bshelf.innerHTML += `
            <div class="book">
                <h2 class="book-title">${book.title}</h2>
                <p class="book-description">${book.details}</p>
            </div>`})
}