window.onload = function() {
    var savedValue = localStorage.getItem('input');
    if (savedValue) {
        document.getElementById('a').innerText = savedValue;
        document.getElementById('inpu').value = savedValue;
    }
}

function st(event) {
    if (event.key === 'Enter') {
        var inputValue = document.getElementById('inpu').value;
        document.getElementById('a').innerText = inputValue;
        localStorage.setItem('input', inputValue);
    }
}

function handleBlur() {
    var inputValue = document.getElementById('inpu').value;
    document.getElementById('a').innerText = inputValue;
    localStorage.setItem('input', inputValue);
}