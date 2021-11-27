function users() {
  return `
    ${navbar()}
  <body class="containe bg-dark">
    <table class="table table-hover table striped bg-white mt-5" width="100%">
      <thead class=table-dark>
        <tr>
          <th>Foto</th>
          <th>Nome</th>
          <th>Cidade</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="img/hamster-99.gif" width = '30%'></td>
          <td>fulano</td>
          <td>fortaleza-CE</td>
          <td><span class='badge bg-success'>ativo</span></td>
          <td>
            <button class='btn btn-dark'>Editar</button>
            <button class='btn btn-danger'>Excluir</button>
          </td>
        </tr>
        <tr>
          <td><img src="img/gifgabriel.gif" width = '30%'></td>
          <td>acicrano</td>
          <td>caucaia-CE</td>
          <td><span class='badge bg-danger'>inativo</span></td>
          <td>
            <button class='btn btn-dark'>Editar</button>
            <button class='btn btn-danger'>Excluir</button>
          </td>
        </tr>
        <tr>
          <td><img src="img/gato.jpg" width = '30%'></td>
          <td>cicrano</td>
          <td>eusebio-CE</td>
          <td><span class='badge bg-warning'>pendente</span></td>
          <td>
            <button class='btn btn-dark'>Editar</button>
            <button class='btn btn-danger'>Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
    <hr>
    ${footer()}
  `;
}
