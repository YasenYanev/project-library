const bTitle = document.getElementById("btitle")
const bDetails = document.getElementById("bdetails")
const bShelf = document.querySelector(".books-shelf")
const popUpForm = document.getElementById("popupForm")
const addBookButton = document.getElementById("bookFormBtn")
const closePopUp = document.querySelector(".close-popup")


class Book {
    constructor(title, details) {
        this.title = title
        this.details = details 
    }


}

let myLibrary = []


addBookButton.addEventListener("click", () => {
    popUpForm.style.display = "block"
    gsap.to(".popup", {y: -60, duration: 1.5})
})


const display = function () {
    bShelf.innerHTML = ""
    myLibrary.forEach(book => {
    bShelf.innerHTML += `
            <div class="book">
                <h2 class="book-title">${book.title}</h2>
                <p class="book-description">${book.details}</p>
            </div>`})
}

document.querySelector(".add-book").addEventListener("click", (e) => {
    let book = new Book(bTitle.value, bDetails.value)
    myLibrary.push(book)
    display()
    e.preventDefault()
    popUpForm.reset()
    console.log(myLibrary)
})

closePopUp.addEventListener("click", () => {
    popUpForm.style.display = "none"
    gsap.to(".popup", {y: 0, duration: 1.5})
})