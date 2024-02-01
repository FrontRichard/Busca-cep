const btnBusca = document.querySelector(".btn-busca");
const ul = document.querySelector(".dados-cep");
const erroMsg = document.querySelector(".error");

btnBusca.addEventListener("click", async () => {
  const inputBusca = document.querySelector(".buscar-cep").value;
  const data = await conexao(inputBusca);

  if (data.erro) {
    erroMsg.style.display = "block";
  } else {
    erroMsg.style.display = "none";
    ul.innerHTML = `
                    <li class="info">
                    <span>Rua:</span>
                    <p>${data.logradouro}</p>
                </li>
                <li class="info">
                    <span>Bairro:</span>
                    <p>${data.bairro}</p>
                </li>
                <li class="info">
                    <span>Cidade:</span>
                    <p>${data.localidade}</p>
                </li>
                <li class="info">
                    <span>UF:</span>
                    <p>${data.uf}</p>
                </li>
                <li class="info">
                    <span>DDD:</span>
                    <p>${data.ddd}</p>
                </li>
            `;
  }
});
