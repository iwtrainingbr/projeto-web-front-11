const saveusersblocked = () => {
    event.preventDefault();
  
    let newusersblocked = {
      name: document.getElementById('category_name').value,
      description: document.getElementById('category_description').value,
    };
  
    fetch(API_URL+'/blocked-users.json', {
      method: 'POST',
      body: JSON.stringify(usersblocked),
    });
  
    alert('Pronto, Usuário Bloqueado')
    document.getElementById('form_blocked').reset();
  };
  
  function UsersBlocked() {
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
  
                  <form class="form-control" method="post" id="form_blocked" action="#" onsubmit="saveusersblocked()">
                      <h2>Bloquear Usuário</h2>
                       <br>
                      <label for="nome">Nome</label>
                       <input id="blocked_name" class="form-control" type="text" name="nome" placeholder="Nome do Usuário que deseja bloquear..." required>
                      <br>
  
                      <label for="email">E-mail</label>
                       <input id="blocked_email" class="form-control" type="text" name="email" placeholder="Digite o E-mail ..." required>
                      <br>
  
                      <label for="desc">Descreva o motivo do bloqueio.</label>
                      <textarea id="category_description" class="form-control" name="desc" id="descricao" placeholder="Digite aqui..."></textarea>
                      <br>
  
                      <button class="btn btn-info">Enviar</button>
                   </form>
              </div>
           </section>
           <article class="col-6">
              <img src="img/trash.svg">
           </article>
        </main>
  
        ${footer()}
      `;
  
      }
  