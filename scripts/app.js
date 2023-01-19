// Rotating Text
const text = document.querySelector('.title-text p');
text.innerHTML = text.innerText.split("").map(
    (char, i) => `<span style="transform:rotate(${i * 6.4}deg)">${char}</span>`
).join("");


// Revealing extra stuff
let toggle = document.querySelector('.title-circle');
let title = document.querySelector('#section-title');
toggle.onclick = function () {
    title.classList.toggle('activated');
}

// Scroll functions
function scrollToAbout() {
    let e = document.getElementById("section-about");
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    })
}
function scrollToHobbies() {
    let e = document.getElementById("section-hobbies");
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    })
}
function scrollToContact() {
    let e = document.getElementById("section-contact");
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    })
}

// Scroll observer stuff
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));