function listUsers(){
  fetch (API_URL+'/users.json')
  .then(response => response.json())
  .then(users => {
    for (let id in users) {
      document.getElementById('table_users').innerHTML += `
      <tr>
        <td>${users[id].photo}</td>
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

  <article class="card card-body">
    <table class="table table-hover table-striped">
      <thead class="table-dark">
        <tr>
          <th>photo</th>
          <th>name</th>
          <th>city</th>
          <th>status</th>
        </tr>
      </thead>

      <tbody id="table_users">

      </tbody>

    </table>
  </article>

`;
}
