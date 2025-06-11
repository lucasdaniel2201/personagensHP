async function buscarDados() {
    const busca = fetch('https://hp-api.onrender.com/api/characters');
    const resposta = await busca;
    const dados = await resposta.json();
    console.log(dados);
    return dados;
}


async function exibirDados() {
    const dados = await buscarDados();
    const root = document.getElementById('root');
    dados.map((personagem) => { 
        const personagemNome = personagem.name;
        const personagemEspecie = personagem.species;
        const personagemCasa = personagem.house ? personagem.house : 'Desconhecida/Inexistente';
        const personagemVivo = personagem.alive;
        const personagemImagem = personagem.image ? personagem.image : 'https://placehold.co/150x200';
        const personagemDiv = document.createElement('div');
        personagemDiv.className = 'personagemDiv';
        if (personagemCasa === 'Gryffindor') {
            personagemDiv.classList.add('gryffindor');
        } else if (personagemCasa === 'Slytherin') {
            personagemDiv.classList.add('slytherin');
        } else if (personagemCasa === 'Hufflepuff') {
            personagemDiv.classList.add('hufflepuff');
        } else if (personagemCasa === 'Ravenclaw') {
            personagemDiv.classList.add('ravenclaw');
        } else if (personagemCasa === 'Desconhecida/Inexistente') {
            personagemDiv.classList.add('desconhecida');
        }
        personagemDiv.innerHTML = `
            <h2>${personagemNome}</h2>
            <img src="${personagemImagem}" alt="">
            <p>Espécie: ${personagemEspecie}</p>
            <p>Casa: ${personagemCasa}</p>
            <p>Status: ${personagemVivo ? 'Vivo' : 'Falecido'}</p>
        `;
        root.appendChild(personagemDiv);

});}

exibirDados();