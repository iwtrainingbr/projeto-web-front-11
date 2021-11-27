function questions(){
  let data = [0,1,2,3,4,5,6,7,8,9].map(() => {
    return `
      <tr>
          <td>pergunta</td>
          <td>categoria</td>
          <td><button>editar</button><button>excluir</button></td>
      </tr>
    `
  }).join('');

return `
${navbar()}
    <table class="table table-hover table-striped">
      <thead>
        <tr>
            <th>NOME</th>
            <th>CATEGORIAS</th>
            <th>AÇÕES</th>
        </tr>
      </thead>
      <tbody>
        ${data}
      </tbody>
    </table>
`
}
