function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.style.backgroundColor = 'lightgreen';
        alert('¡Correcto!');
    } else {
        button.style.backgroundColor = 'lightcoral';
        alert('Intenta de nuevo');
    }
}

