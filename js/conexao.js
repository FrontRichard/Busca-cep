 async function conexao(cep){
    try {
        const url = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
         const data = await url.json(); 
          return data
    } catch (error) {
        alert('Erro na requisição, tente novamente mais tarde')
    }
  
}


