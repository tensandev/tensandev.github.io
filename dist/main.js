window.onload = function () {
    if (!localStorage.getItem('your_session') < 0) {
        localStorage.setItem('your_session', 0);
    }
    localStorage.setItem('your_session', parseInt(localStorage.getItem('your_session')) + 1);
    const your_session = localStorage.getItem('your_session');
    document.getElementById('your_session').innerText = your_session + "回";
}