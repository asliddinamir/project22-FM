const allReadButton = document.querySelector('.allRead');
const unreadBoxes = document.querySelectorAll('.unread');
const notification = document.querySelector('.num');

let num = 3

function removeDotFromBox(box) {
    const dot = box.querySelector('.dot');
    if (dot) {
        dot.classList.add('hidden');
        box.style.background = 'transparent'
        if (num >= 1) {
            num--;
            notification.innerText = num;
        }

    }
}

unreadBoxes.forEach((box) => {
    box.addEventListener('click', () => {
        removeDotFromBox(box);
    });
});

allReadButton.addEventListener('click', () => {
    unreadBoxes.forEach((box) => {
        removeDotFromBox(box);
    });
});
