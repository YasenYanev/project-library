// const variables
const bTitle = document.getElementById("btitle")
const bDetails = document.getElementById("bdetails")
const bShelf = document.getElementById("books-shelf")
const formBtn = document.getElementById("bookFormBtn")
const popUpForm = document.getElementById("popupForm")
const closeFormPopUp = document.getElementById("close-popup")
const errorPopUp = document.getElementById("error")
const closeErrorPopUp = document.getElementById("close-error-popup")
const addBookBtn = document.getElementById("addBook")

// class
class Book {
    constructor(title, details) {
        this.title = title
        this.details = details 
    }


}
// arrays
let myLibrary = []

// functions
function display() {
    bShelf.innerHTML = ""
    myLibrary.forEach(book => {
    bShelf.innerHTML += `
            <div class="book">
                <h2 class="book-title">${book.title}</h2>
                <p class="book-description">${book.details}</p>
            </div>`})
}

// event listeners and functions
formBtn.addEventListener("click", () => {
    popUpForm.style.display = "block"
    gsap.to(".popup", {y: -60, duration: 1.5})
})

addBookBtn.addEventListener("click", (e) => {
    if (bTitle.value === "" || null) {
        errorPopUp.style.display = "block"
    }
    if (bDetails.value === "" || null) {
        errorPopUp.style.display = "block"
    }
    let book = new Book(bTitle.value, bDetails.value)
    myLibrary.push(book)
    display()
    e.preventDefault()
    popUpForm.reset()
    console.log(myLibrary)
})

closeFormPopUp.addEventListener("click", () => {
    popUpForm.style.display = "none"
    gsap.to(".popup", {y: 0, duration: 1.5})
    popUpForm.reset()
})

closeErrorPopUp.addEventListener("click", () => {
    errorPopUp.style.display = "none"
})