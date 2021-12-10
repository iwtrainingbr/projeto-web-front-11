const removeCity = (id) => {
  fetch(API_URL+`/cities/${id}.json`, {
    method: 'DELETE'
  });

  alert('Pronto, cidade excluida');

  findCities();
};

const findCities = () => {
  fetch (API_URL+'/cities.json')
    .then(response => response.json())
    .then(cities => {
      //limpando a tabela
      document.getElementById('table_cities').innerHTML = '';

      for (let id in cities) {
        document.getElementById('table_cities').innerHTML += `
          <tr>
            <td>${cities[id].name}</td>
            <td>${cities[id].state}</td>
            <td>
              <button type="button" class="btn btn-primary">Editar</button>
              <button onclick="removeCity('${id}')" type="button" class="btn btn-danger">Excluir</button>
            </td>
          </tr>
        `;
      }
    });
}

function listCities() {
  findCities();

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
