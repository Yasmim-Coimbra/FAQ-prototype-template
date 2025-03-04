const questionsAndAnswers = document.querySelectorAll('.item');

for (const item of questionsAndAnswers) {
    item.addEventListener('click', () => {
        const activeItem = document.querySelector('.active');
        
        item.classList.toggle('active');

        if (activeItem) {
            activeItem.classList.remove('active');
        }
    });
}