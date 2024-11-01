document.querySelectorAll('.hc-qa__list > div').forEach(item => {
    item.addEventListener('click', function() {
        const answer = item.nextElementSibling;
        const downArrow = item.querySelector('.fa-angle-down');
        const upArrow = item.querySelector('.fa-angle-up');

        answer.classList.toggle('open');
        
        if (answer.classList.contains('open')) {
            downArrow.style.display = 'none';
            upArrow.style.display = 'block';
        } else {
            downArrow.style.display = 'block';
            upArrow.style.display = 'none';
        }
    });
});