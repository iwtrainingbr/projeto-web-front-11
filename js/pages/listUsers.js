function updatePhoto(src) {
    document.getElementById('userPhoto').src = src
}

function listUsers() {
    fetch(API_URL + '/users.json')
        .then(response => response.json())
        .then(users => {
            for (let id in users) {
                document.getElementById('table_users').innerHTML += `
      <tr>
        <td>
        <img src="${users[id].photo}" onclick="${updatePhoto(users[id].photo)}" data-bs-toggle="modal" data-bs-target="#modalEditUser" width = '50'></td>
        <td>${users[id].name}</td>
        <td>${users[id].city}</td>
        <td>${users[id].status}</td>
          <td>
            <button class= "btn btn-warning">Editar</button>
            <button class= "btn btn-danger">Excluir</button>
          </td>
      </tr>
        `;
            }
        });


    return `
  ${navbar()}
  <hr>
    <h1>Listar Usuários</h1>
  </hr>

  <!-- Modal -->
<div class="modal fade" id="modalEditUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar Perfil</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img height="100" width="100" id="userPhoto" width = '50'>
      </div>
      <div class="modal-footer">
        <button id="modal-cancel" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
      </div>
    </div>
  </div>
</div>

  <article class="card card-body">
    <table class="table table-hover table-striped">
      <thead class="table-dark">
        <tr>
          <th>Foto</th>
          <th>Nome</th>
          <th>Cidade</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody id="table_users">

      </tbody>

    </table>
  </article>
  ${footer()}
`;


}
