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

                <form method="post" id="form_category" action="#" onsubmit="saveCategory()">
                     <br>
                    <label for="nome">Nome</label>
                     <input id="category_name" class="form-control" type="text" name="nome" placeholder="Ex: Musica" required>
                    <br>

                    <label for="desc">Descrição</label>
                    <textarea id="category_description" class="form-control" name="desc" id="descricao" placeholder="Digite aqui..."></textarea>
                    <br>

                    <button class="btn btn-primary">Enviar</button>
                 </form>
            </div>
         </section>
         <article class="col-6">
            <img src="img/musica.png">
         </article>
      ${footer()}
    `;

    }
