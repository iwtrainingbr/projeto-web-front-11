const removeCategory = (id) => {
  fetch(API_URL+`/categories/${id}.json`, {
    method: 'DELETE'
  });

  alert('Pronto, Categoria excluida');

  findCategory();
};

const findCategory = () => {
  fetch (API_URL+'/categories.json')
    .then(response => response.json())
    .then(categorias => {
      //limpando a tabela
      document.getElementById('table_categorias').innerHTML = '';

      for (let id in categorias) {
        document.getElementById('table_categorias').innerHTML += `
          <tr>
            <td>${categorias[id].name}</td>
            <td>${categorias[id].description}</td>
            <td>
              <button class='btn bg-warning'>Editar</button>
              <button onclick="removeCategory('${id}')" class='btn btn-danger'>Excluir</button>
            </td>
          </tr>
        `;
      }
    });
}

    function categorias() {
      findCategory();

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
