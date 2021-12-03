function categorias() {
  fetch (API_URL+'/categories.json')
    .then(response => response.json())
    .then(categorias => {
      for (let id in categorias) {
        document.getElementById('table_categorias').innerHTML += `
          <tr>
            <td>${categorias[id].name}</td>
            <td>${categorias[id].description}</td>
            <td>
              <button class='btn bg-warning'>Editar</button>
              <button class='btn btn-danger'>Excluir</button>
            </td>
          </tr>
        `;
      }
    });

  return `
    ${navbar()}
    <hr>
    <h1>Listar Categorias</h1>
    <hr>

    <section class="card card-body">
      <table class="table table-hover table-striped">
        <thead class="table-dark">
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Ações</th>

          </tr>
        </thead>

        <tbody id="table_categorias">

        </tbody>
      </table>
    </section>
  `;
}
