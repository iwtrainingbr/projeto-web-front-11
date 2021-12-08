function home() {
  let urlusuarios = API_URL+'/users.json'
  let urlperguntas = API_URL+'/questions.json'
  let urlcategorias = API_URL+'/categories.json'

  fetch(urlusuarios)
  .then(response => response.json())
  .then(users => {
    document.getElementById('user_dash').innerHTML = Object.keys(users).length
  })

  fetch(urlperguntas)
  .then(response => response.json())
  .then(questions => {
    document.getElementById('question_dash').innerHTML = Object.keys(questions).length
  })

  fetch(urlcategorias)
  .then(response => response.json())
  .then(categories => {
    document.getElementById('categories_dash').innerHTML = Object.keys(categories).length
  })

  return `
    ${navbar()}
    <hr>
    <article class="row">
      <div class="rounded bg-primary col-sm p-3"><p><strong>Usuários</strong></p><button class="btn btn-info disable mb-2" id= "user_dash">0</button></div>
      &nbsp;
      <div class="rounded bg-success col-sm p-3"><p><strong>Perguntas</strong></p><button class="btn btn-info disable mb-2" id= "question_dash">0</button></div>
      &nbsp;
      <div class="rounded bg-danger col-sm p-3"><p><strong>Categorias</strong></p><button class="btn btn-info disable mb-2" id= "categories_dash">0</button></div>
      &nbsp;
    </article>

    <br>
    ${footer()}
  `;
}
