const removeUsersBlocked = (id) => {
  fetch(API_URL+`/blocked-users/${id}.json`, {
    method: 'DELETE'
  });

  alert('Pronto, Usuario bloqueado excluido');

  findListUsersBlocked();
};

const openModalEditUsersBlocked = (id, name, email, cidade) => {
  document.getElementById('users_blocked_email').value = email;
  document.getElementById('users_blocked_name').value = name;
  document.getElementById('users_blocked_cidade').value = cidade;
  document.getElementById('users_blocked_id').value = id;
};

const updateUsersBlocked = () => {
  event.preventDefault();

  let id = document.getElementById('users_blocked_id').value;
  let name = document.getElementById('users_blocked_name').value;
  let cidade = document.getElementById('users_blocked_cidade').value;
  let email = document.getElementById('users_blocked_email').value;

  fetch(API_URL+`/blocked-users/${id}.json`, {
    method: 'PATCH',
    body: JSON.stringify({
      name: name,
      cidade: cidade,
      email: email,
    })
  });

  alert('Pronto, Usuario bloqueado atualizado');

  findListUsersBlocked();

  document.getElementById('modal-cancel').click();
}

const findListUsersBlocked = () => {
  fetch (API_URL+'/blocked-users.json')
  .then(response => response.json())
  .then(blockedUsers => {
    document.getElementById('table_users_blocked').innerHTML = '';
    for (let id in blockedUsers) {
      document.getElementById('table_users_blocked').innerHTML += `
      <tr>
        <td>${blockedUsers[id].name}</td>
        <td>${blockedUsers[id].email}</td>
        <td>${blockedUsers[id].cidade}</td>
          <td>
            <button type="button" onclick="openModalEditUsersBlocked('${id}', '${blockedUsers[id].name}', '${blockedUsers[id].email}', '${blockedUsers[id].cidade}')" class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#modalEditUsersblocked">Editar</button>
            <button onclick="removeUsersBlocked('${id}')" type="button" class="btn btn-danger">Excluir</button>
          </td>
      </tr>
        `;
      }
  });
}

  function listUsersBlocked() {
    findListUsersBlocked();

return `
  ${navbar()}
  <hr>
    <h1>Lista de Usuários Bloqueados</h1>
  </hr>

  <!-- Modal -->
  <div class="modal fade" id="modalEditUsersblocked" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Editar Usuários Bloqueados</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form method="post" action="#" id="form_users_blocked" onsubmit="updateUsersBlocked()">
            <label for="users_blocked_name">Nome</label>
            <input id="users_blocked_name" class="form-control mb-3" placeholder="Nome" required>
            <br>

            <label for="users_blocked_email">E-mail</label>
            <input id="users_blocked_email" class="form-control mb-3" placeholder="E-mail" required>
            <br>

            <input id="users_blocked_id" type="hidden">

            <label for="users_blocked_cidade">Cidade</label>
            <input id="users_blocked_cidade" class="form-control mb-3" placeholder="Cidade" required>
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

  <article class="card card-body">
    <table class="table table-hover table-striped">
      <thead class="table-dark">
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Cidade</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody id="table_users_blocked">

      </tbody>

    </table>
  </article>
${footer()}
`;
}
