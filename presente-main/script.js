document.getElementById('open-rose').addEventListener('click', () => {
    const rose = document.getElementById('rose');
    const petals = document.querySelectorAll('.petal');
    const center = document.querySelector('.center');
    const messages = document.getElementById('messages');

    // Abrir a rosa
    rose.style.width = '200px';
    rose.style.height = '200px';

    // Mostrar pétalas
    petals.forEach((petal, index) => {
        setTimeout(() => {
            petal.style.opacity = '1';
        }, index * 300); // Intervalo entre as pétalas
    });

    // Mostrar o centro da rosa
    setTimeout(() => {
        center.style.opacity = '1';
        // Exibir mensagens após a rosa abrir
        messages.style.display = 'block';
        messages.innerHTML = `
            <p>Mensagem 1: Você é incrível!</p>
            <p>Mensagem 2: Continue sempre aprendendo!</p>
            <p>Mensagem 3: Nunca desista dos seus sonhos!</p>
        `;
    }, petals.length * 300 + 500); // Tempo para mostrar o centro
});
