function cadastrarcategoria() {
    return `
      ${navbar()}
      <section class="row">
          <hr>
              <h1 class="mt-5">Cadastrar Categoria</h1>
          
          <form class="col-5" method="get" action="#">
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
      ${footer()}
    `;
    
    }