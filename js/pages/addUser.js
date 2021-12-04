const addUser = () => {
  event.preventDefault();

  let addUser = {
    photo: document.getElementById('photo').value,
    name: document.getElementById('name').value,
    city: document.getElementById('city').value,
    status: document.getElementById('status').value,
  };

  fectch(API_URL+'addUser.json', {
    method: 'POST',
    body: JSON.stringfy(newUser),
  });

  alert('Novo usuário cadastrado');

  document.getElementById('form_user').reset();
};

function addUser() {

  return `
    ${navbar()}
    <hr>
    <h1>Adicionar Usuários</h1>
    <hr>

    <section class="row">
      <div class="col-6">
        <div class="card card-body">
          <form method="post" action="#" id="form_user" onsubmit="saveUser()">
            <label for="city_name">Nome</label>
            <input id="city_name" class="form-control mb-3" placeholder="Nome da Cidade" required>
            <br>

            <label for="city_uf">Estado</label>
            <input id="city_uf" class="form-control mb-3" placeholder="UF da Cidade" required>

            <br>
            <button class="btn btn-dark">ENVIAR</button>
          </form>
        </div>
      </div>

      <div class="col-6">
        <img src="img/city/cities.svg" alt="" width="80%">
      </div>
    </section>
  `;
}
