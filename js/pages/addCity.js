const saveCity = () => {
    event.preventDefault();

    let newCity = {
        name: document.getElementById('city_name').value,
        state: document.getElementById('city_uf').value,
    };

    fetch(API_URL + '/cities.json', {
        method: 'POST',
        body: JSON.stringify(newCity),
    });

    alert('Pronto, nova cidade inserida');

    document.getElementById('form_city').reset();
};

function addCity() {

    return `
    ${navbar()}
    <hr>
    <h1>Adicionar Cidade</h1>
    <hr>

    <section class="row">
      <div class="col-6">
        <div class="card card-body">
          <form method="post" action="#" id="form_city" onsubmit="saveCity()">
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

    </section>
  `;
}