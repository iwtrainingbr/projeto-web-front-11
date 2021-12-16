function listUsersBlocked(){
  fetch (API_URL+'/blocked-users.json')
  .then(response => response.json())
  .then(blockedUsers => {
    for (let id in blockedUsers) {
      document.getElementById('table_users_blocked').innerHTML += `
      <tr>
        <td>${blockedUsers[id].name}</td>
        <td>${blockedUsers[id].email}</td>
        <td>${blockedUsers[id].cidade}</td>
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
    <h1>Lista de Usuários Bloqueados</h1>
  </hr>

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
