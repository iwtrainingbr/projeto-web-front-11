
function cadastrarcategoria() {
    return `
      ${navbar()}
      <style>
        @font-face {
            font-family: 'Love3';
            src: url(fonts/love3.ttf) format('truetype');
            font-weight: normal;
            font-style: normal;
        }
        section {
            font-family: 'Love3', 'Times New Roman', Times, serif;
            background-image: linear-gradient(to right, #fff, #ceebffc4);
            color: #2397e4e5;
            border-radius: 10px;
            box-shadow: 5px 5px 15px #616464a1;
            width: 500px;
            padding: 10px;
        }
      </style>
      <main class="row">
      <hr>
          <section class="col-6">
                  <div>
                      <h1>Cadastrar Categoria</h1>
                                
                                    <form action="#">
                      <br>
                      <label for="nome">Nome</label>
                      <input class="form-control" type="text" name="nome" placeholder="Ex: Musica" required>
                      <br>
                      <label for="desc">Descrição</label>
                      <textarea class="form-control" name="desc" id="descricao" placeholder="Digite aqui..."></textarea>
                      <br>
                      <button class="btn btn-primary">Enviar</button>
                                    </form>
                  </div>
          <section>
                  <h1>Cadastrar Categoria</h1>
          
              <form action="#">
                  <br>
                  <label for="nome">Nome</label>
                  <input class="form-control" type="text" name="nome" placeholder="Ex: Musica" required>
                  <br>
                  <label for="desc">Descrição</label>
                  <textarea class="form-control" name="desc" id="descricao" placeholder="Digite aqui..."></textarea>
                  <br>
                  <button class="btn btn-primary">Enviar</button>
              </form>
          </section>
          <article class="col-6">
              <div>
                  <img src="img/musica.png">
              </div>
          </article>
      </main>
              <label for="desc">Descrição</label>
              <textarea class="form-control" name="desc" id="descricao" placeholder="Digite aqui..."></textarea>
              <br>

              <button class="btn btn-primary">Enviar</button>
          </form>
      </section>
      <hr>
          <h1>Cadastrar Categoria</h1>

          <section class="row ">
            <div class="col-md-6">
            <article class="card card-body">
                <form action="#">
                    <br>
                    <label for="nome">Nome:</label>
                    <input class="form-control" type="text" name="nome" placeholder="Ex: Musica" required>
                    <br>

                    <label for="desc">Descrição:</label>
                    <textarea class="form-control" name="desc" id="descricao" placeholder="Digite aqui..."></textarea>
                    <br>
                    <button class="btn btn-primary">Enviar</button>
                </form>
              </article>
            </div>
          </section>
      ${footer()}
    `;

    }
