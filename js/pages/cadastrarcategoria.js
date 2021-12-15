const saveCategory = () => {
  event.preventDefault();

  let newCategory = {
    name: document.getElementById('category_name').value,
    description: document.getElementById('category_description').value,
  };

  fetch(API_URL+'/categories.json', {
    method: 'POST',
    body: JSON.stringify(newCategory),
  });

  alert('Pronto, Nova categoria inserida')
  document.getElementById('form_category').reset();
};

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

        h2, label {
          color: #06A4AE;
        }
        img {
          width: 500px;
          padding-top: 150px;
        }

      </style>
      <main class="row">
      <hr>
         <section class="col-6">
            <div>

                <form class="form-control" method="post" id="form_category" action="#" onsubmit="saveCategory()">
                    <h2>Cadastrar Categoria</h2>
                     <br>
                    <label for="nome">Nome</label>
                     <input id="category_name" class="form-control" type="text" name="nome" placeholder="Ex: Musica" required>
                    <br>

                    <label for="desc">Descrição</label>
                    <textarea id="category_description" class="form-control" name="desc" id="descricao" placeholder="Digite aqui..."></textarea>
                    <br>

                    <button class="btn btn-info">Enviar</button>
                 </form>
            </div>
         </section>
         <article class="col-6">
            <img src="img/ilustras/musica.png">
         </article>
      </main>


    `;

    }
    // function cadastrarcategoria() {
