const removeQuestions = (id) => {
    fetch (API_URL+ `/questions/${id}.json`,{
      method: 'DELETE'
    });
    alert('Pronto, pergunta excluída');

    findQuestions();
};

const openModalEditPergunta = (id, categoria, pergunta) => {
  document.getElementById('questions_category').value = categoria;
  document.getElementById('questions_questions').value = pergunta;
  document.getElementById('questions_id').value = id;
};

const updateQuestions = () => {
  event.preventDefault();

  let id = document.getElementById('questions_id').value;
  let categoria = document.getElementById('questions_category').value;
  let pergunta = document.getElementById('questions_questions').value;

  fetch(API_URL+`/questions/${id}.json`, {
    method: 'PATCH',
    body: JSON.stringify({
      categoria: categoria,
      pergunta: pergunta,
    })
  });

  alert('Pronto, pergunta atualizada');

  findQuestions();
  document.getElementById('modal-cancel').click();
}


  const findQuestions = () => {
    fetch(API_URL+'/questions.json')
      .then(response => response.json())
      .then(questions => {
        document.getElementById('table_questions').innerHTML = '';

      for (let id in questions) {
        document.getElementById('table_questions').innerHTML += `
          <tr>
            <td>${questions[id].name}</td>
            <td>${questions[id].category}</td>
            <td>
              <button data-bs-toggle="modal" data-bs-target="#exampleModal" class='btn btn-dark'>Editar</button>
              <button onclick="removeQuestion('${id}')" type="button" class='btn btn-danger'>Excluir</button>
            </td>
          </tr>
        `;
      }
    });
  }
function listQuestions (){
   findQuestions ();

    return `
    ${navbar()}
    ${editQuestionModal()}
    <hr>
    <h1>Listar Perguntas</h1>
    <hr>

    <!-- Modal -->
    <div class="modal fade" id="modalEditQuestions" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar Perguntas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form method="post" action="#" id="form_questions" onsubmit="updateCity()">
              <label for="questions_category">Categoria</label>
              <input id="questions_category" class="form-control mb-3" placeholder="Categoria" required>
              <br>

              <input id="questions_id" type="hidden">

              <label for="question_questions">Pergunta</label>
              <input id="questions_questions" class="form-control mb-3" placeholder="NOva Pergunta" required>
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
