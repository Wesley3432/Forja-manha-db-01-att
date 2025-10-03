const resultsDiv = document.getElementById("results");

async function imagemTC() {
    resultsDiv.innerHTML = "<p>Carregando...</p>";

    try {
        const response = await fetch('dadosempresa.json');
        const data = await response.json();
        resultsDiv.innerHTML = '';

        data.forEach(ImagensTC => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img class="img" src="${ImagensTC.imagem}" alt="${ImagensTC.nome}"/>
                <h2>${ImagensTC.nome}</h2>
                <h3>Idade: ${ImagensTC.idade}</h3>
                <p>${ImagensTC.cargo}</p>
            `;
            resultsDiv.appendChild(card);
        });

    } catch (error) {
        resultsDiv.innerHTML = "<p>Erro ao carregar os dados!</p>";
    }
}
imagemTC();