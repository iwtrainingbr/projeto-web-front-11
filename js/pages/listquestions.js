function listQuestions() {
    fetch(API_URL + '/questions.json')
        .then(response => response.json())
        .then(questions => {
            for (let id in questions) {
                document.getElementById('table_questions').innerHTML += `
          <tr>
            <td>${questions[id].name}</td>
            <td>${questions[id].category}</td>
            <td>
              <button class='btn btn-dark' data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
              <button class='btn btn-danger'>Excluir</button>
            </td>
          </tr>
        `;
            }
        });

    return `
    ${navbar()}
    ${editQuestionModal()}
    <hr>
    <h1>Listar Perguntas</h1>
    <hr>

    <section class="card card-body">
      <table class="table table-hover table-striped">
        <thead class="table-dark">
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody id="table_questions">

        </tbody>
      </table>
    </section>
  `;
}