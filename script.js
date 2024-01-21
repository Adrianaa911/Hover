const circle = document.querySelector('#circle')

//Now we're gonna target it =>circle
//'mouseenter' another event for addEventListener!
//! =>means NOT : so if circle doesn;t countain hover!
//and then we ADD it!
circle.addEventListener('mouseenter', () => {
if (!circle.classList.contains('hover')) {
circle.classList.add('hover');
}
});

circle.addEventListener('mouseleave', () => {
    if (circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
});