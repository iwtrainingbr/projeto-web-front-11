const saveQuestions = () => {
  event.preventDefault();

  let newQuestions = {
    category: document.getElementById('questions_category').value,
    name: document.getElementById('questions_questions').value,
  };

  fetch(API_URL+'/questions.json', {
    method: 'POST',
    body: JSON.stringify(newQuestions),
  });

  alert('Pronto, nova pergunta inserida')

  document.getElementById('form_questions').reset();
};

function addQuestions() {

  return `
    ${navbar()}
    <hr>
    <h1>Adicionar Pergunta</h1>
    <hr>

    <section class="row">
      <div class="col-6">
        <div class="card card-body">
          <form method="post" action="#" id="form_questions" onsubmit="saveQuestions()">
            <label for="questions_category">Categoria</label>
            <input id="questions_category" class="form-control mb-3" placeholder="Pergunta" required>
            <br>

            <label for="quastions_questions">Pergunta</label>
            <input id="questions_questions" class="form-control mb-3" placeholder="Pergunta" required>

            <br>
            <button type="button" class="btn btn-success">Enviar</button>
          </form>
        </div>
      </div>

      <div class="col-6">
        <img src="img/question.svg" alt="" width="100%">
      </div>

    </section>

  ${footer()}

  `;
}
