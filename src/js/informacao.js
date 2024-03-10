const url = "https://restaurante-oriental.fly.dev/produtos"

function pedirPrato(idPrato) {
    alert(`Você pediu o prato ${idPrato}`);

    if( idPrato === 1) {
        var info = {
            aluno: "Gui Mota",
            restaurante: "HAO KAI",
            imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/ce5a90e759e6e136127a80d546625866_XL.jpg",
            produto: "Sunomono simples",
            descricao: "Salada de pepino japonês",
        }
    }
    if( idPrato === 2) {
        var info = {
            aluno: "Gui Mota",
            restaurante: "HAO KAI",
            imagem: "https://1.bp.blogspot.com/-5--fDZq5zoc/UbDFB1bjGTI/AAAAAAAAAm0/EtSj7wNIbgA/s1600/COOKBEER_121219_020.jpg",
            produto: "Sunomono com kani",
            descricao: "Salada de pepino japonês com kani",
        }
    }
    if( idPrato === 3) {
        var info = {
            aluno: "Gui Mota",
            restaurante: "HAO KAI",
            imagem: "https://marizafoods.com.br/upload/receita/foto-receita2.jpg",
            produto: "Pipoca de camarão",
            descricao: "Camarões empanados",
        }
    }
    if( idPrato === 4) {
        var info = {
            aluno: "Gui Mota",
            restaurante: "HAO KAI",
            imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/e8dcebfd55c9d5d7bbfc0a0f8263a6f3_L.jpg",
            produto: "Harumaki de frango",
            descricao: "Tradicional petisco chinês recheado com frango",
        }
    }
    if( idPrato === 5) {
        var info = {
            aluno: "Gui Mota",
            restaurante: "HAO KAI",
            imagem: "https://receitatodahora.com.br/wp-content/uploads/2021/09/yakisoba-scaled.jpg",
            produto: "Yakisoba",
            descricao: "Tradicional massa japonesa com legumes",
        }
    }
    if( idPrato === 6) {
        var info = {
            aluno: "Gui Mota",
            restaurante: "HAO KAI",
            imagem: "https://i.ytimg.com/vi/cEhJBb8Xmkg/maxresdefault.jpg",
            produto: "Filadélfia",
            descricao: "Salmão e cream cheese",
        }
    }

    const config = {
        method: 'post', 
        headers: {
        'content-Type': "application/json",
    },
    body: JSON.stringify(info),
}

    fetch(url, config).then(response).then(dados);

    function response(res) {
        return res.json();
    }

    function dados(data) {
        const resposta = document.getElementById("resposta");
        resposta.innerText = "Prato craido com o id " + data.id;
    }
}