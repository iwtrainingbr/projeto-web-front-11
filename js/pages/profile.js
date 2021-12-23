function profile() {
  return `
      ${navbar()}

      <style>
        @font-face {
            font-family: 'Love3';
            src: url(fonts/love3.ttf) format('truetype');
            font-weight: normal;
            font-style: normal;
        }

        h2, label {
          color: #06A4AE;
        }

        img {
          width: 500px;
          padding-top: 150px;
        }
      </style>

      <main class="row">

        <section class="col-6">

          <div>
            <form action="#" id="form-card" class="form-control" method="post">
              <h2>Editar perfil</h2>
              <br>

              <label for="form-usuario">Nome do usuário</label> <br>
              <input class="form-control" placeholder="Paulo Junior" id="form-usuario" name="usuario">
              <br>

              <label for="form-email">Email do usuário</label> <br>
              <input class="form-control" placeholder="paulojunior@gmail.com" id="form-email" name="email">
              <br>

              <label for="form-senha">Senha</label> <br>
              <input class="form-control" type="text" id="form-senha" name="senha" pattern="[0-9]{11}" placeholder="Ex: 12312312312">
              <br>

              <button class="btn btn-info">Salvar alterações</button>
            </form>
          </div>
        </section>
        <article class="col-6">
          <img src="img/gato.jpg">
        </article>
      </main>

    
  `
}
