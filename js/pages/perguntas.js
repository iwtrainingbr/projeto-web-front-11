function perguntas(){
  return `
  ${navbar()}
  <br>
  <form class=>
    <div>
      <label>CATEGORIAS</label>
    <br>
        <select class="form-control">
          <option>--selecione--</option>
          <option>categoria 1</option>
          <option>categoria 2</option>
          <option>categoria 3</option>
        </select>
    </div>
    <br>
    <div>
      <label>PERGUNTA</label>
    <br>
      <input class="form-control" value="titulo da pergunta">
    </div>
    <br>
    <button class="btn btn-primary">Cadastrar</button>
    </form>
  `;
}
