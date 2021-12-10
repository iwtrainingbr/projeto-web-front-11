const removeCity = (id) => {
  fetch(API_URL+`/cities/${id}.json`, {
    method: 'DELETE'
  });

  alert('Pronto, cidade excluida');

  findCities();
};

const openModalEdit = (id, name, uf) => {
  document.getElementById('city_name').value = name;
  document.getElementById('city_uf').value = uf;
  document.getElementById('city_id').value = id;
};

const updateCity = () => {
  event.preventDefault();

  let id = document.getElementById('city_id').value;
  let name = document.getElementById('city_name').value;
  let uf = document.getElementById('city_uf').value;

  fetch(API_URL+`/cities/${id}.json`, {
    method: 'PATCH',
    body: JSON.stringify({
      name: name,
      uf: uf,
    })
  });

  alert('Pronto, cidade atualizada');

  findCities();

  document.getElementById('modal-cancel').click();
}

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
              <button type="button" onclick="openModalEdit('${id}', '${cities[id].name}', '${cities[id].state}')" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#modalEditCity">Editar</button>
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



<!-- Modal -->
<div class="modal fade" id="modalEditCity" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar Cidade</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form method="post" action="#" id="form_city" onsubmit="updateCity()">
          <label for="city_name">Nome</label>
          <input id="city_name" class="form-control mb-3" placeholder="Nome da Cidade" required>
          <br>

          <input id="city_id" type="hidden">

          <label for="city_uf">Estado</label>
          <input id="city_uf" class="form-control mb-3" placeholder="UF da Cidade" required>
          <br>
          <button class="btn btn-dark">ENVIAR</button>
        </form>
      </div>
      <div class="modal-footer">
        <button id="modal-cancel" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
      </div>
    </div>
  </div>
</div>


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
