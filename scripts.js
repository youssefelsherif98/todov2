const text = document.getElementById('text');
const done = document.getElementById('done');

done.addEventListener('click', () => {
    text.value = '';
}, false);  