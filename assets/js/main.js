const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    
    const imc = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');
    if (imc < 18.5) {
        description = 'Cuidado! Abaixo do peso.';
    } else if (imc <= 25) {
        description = 'Peso normal.';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (imc <= 30) {
        description = 'CUIDADO! Você está Sobrepeso.';
    } else if (imc <= 35) {
        description = 'CUIDADO! Obesidade grau 1 (Moderada). CUIDE DA SUA SAUDE!';
    } else if (imc <= 40) {
        description = 'Obesidade grau 2 (Severa). CUIDE DA SUA SAUDE!';
    } else {
        description = 'Obesidade grau 3 (Mórbida). CUIDE DA SUA SAUDE!';
    }

    value.textContent = imc.replace('.', ',');
    document.getElementById('description').textContent = description;

})
