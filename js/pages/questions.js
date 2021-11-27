function questions(){
  let data = [0,1,2,3,4,5,6,7,8,9].map(() => {
    return `
      <tr>
          <td>Pergunta</td>
          <td>Categoria</td>
          <td><button type="button" class="btn btn-light">Editar</button>
              <button type="button" class="btn btn-light">Excluir</button>
          </td>
      </tr>
    `
  }).join('');

return `
${navbar()}
    <table class="table table-dark table-striped">
      <thead>
        <tr>
            <th>NOME</th>
            <th>CATEGORIA</th>
            <th>AÇÕES</th>
        </tr>
      </thead>
      <tbody>
        ${data}
      </tbody>
    </table>
`
}
