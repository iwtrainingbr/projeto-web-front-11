function categorias() {
  return`
${navbar()}

<form class="mt-3" #="/pagina-processa-dados-do-form" method="post">
    <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nomee" />
    </div>
<br>
    <div>
        <label for="Descrição">Descrição:</label>
        <input type="descrição" id="descrição" />
    </div>
<br>

    <button class="btn btn-success">Editar</button>
    <button class="btn btn-danger">Excluir</button>

    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>
</form>
<br>

${footer()}
  `;

}
