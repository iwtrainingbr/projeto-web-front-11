function listCities() {
  fetch (API_URL+'/cities.json')
    .then(response => response.json())
    .then(cities => {
      for (let id in cities) {
        document.getElementById('table_cities').innerHTML += `
          <tr>
            <td>${cities[id].name}</td>
            <td>${cities[id].state}</td>
            <td>
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        `;
      }
    });

  return `
    ${navbar()}
    <hr>
    <h1>Listar Cidades</h1>
    <hr>

    <section class="card card-body">
      <table class="table table-hover table-striped">
        <thead class="table-dark">
          <tr>
            <th>Nome</th>
            <th>UF</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody id="table_cities">

        </tbody>
      </table>
    </section>
  `;
}
