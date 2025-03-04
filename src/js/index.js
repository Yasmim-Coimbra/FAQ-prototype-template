const questionsAndAnswers = document.querySelectorAll('.item');

questionsAndAnswers.forEach(item => {
    item.addEventListener('click', () => {
        const activeItem = document.querySelector('.active');
        
        item.classList.toggle('active');

        if (activeItem) {
            activeItem.classList.remove('active');
        }
    })
})