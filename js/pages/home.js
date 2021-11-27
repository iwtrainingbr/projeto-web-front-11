function home() {
  return `
    ${navbar()}
    <hr>
    <article class="row">
      <div class="rounded bg-primary col-sm p-3"><p><strong>Usuários</strong></p><button class="btn btn-info disable mb-2">99</button></div>
      &nbsp;<div class="rounded bg-success col-sm p-3"><p><strong>Perguntas</strong></p><button class="btn btn-info disable mb-2">20</button></div>
      &nbsp;<div class="rounded bg-danger col-sm p-3"><p><strong>Categorias</strong></p><button class="btn btn-info disable mb-2">40</button></div>
      &nbsp;<div class="rounded bg-warning col-sm p-3"><p><strong>Etc..</strong></p><button class="btn btn-info disable mb-2">50</button></div>
    </article>

    <br>
    ${footer()}
  `;
}
