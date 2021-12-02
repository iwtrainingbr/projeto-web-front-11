function profile() {
  return `
      ${navbar()}

      <hr>
      <h1 class="mt-5">Editar meu Perfil</h1>
      <hr>

      <section class="row">
        <div class="col-6">
            <form action="#" method="post" id="form-card">

              <label for="form-usuario">Nome do usuário</label> <br>
              <input class="form-control" placeholder="Paulo Junior" id="form-usuario" name="usuario">
              <br>

              <label for="form-email">Email do usuário</label> <br>
              <input class="form-control" placeholder="paulojunior@gmail.com" id="form-email" name="email">
              <br>


              <label for="form-senha">Senha</label> <br>
              <input class="form-control" type="text" id="form-senha" name="senha" pattern="[0-9]{11}" placeholder="Ex: 12312312312">
              <br>

              <button class="btn btn-outline-dark">Salvar alterações</button>

              </div>
              </form>
              </section>

      <hr>

      ${footer()}
  `
}
