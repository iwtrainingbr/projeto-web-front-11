
function perguntas(){
  return `
  ${navbar()}
  <br><br>
  <hr>
  <form>
    <div class="row">
    <div class="col-8">
      <label>CATEGORIAS</label>
  <br>
      <select class="form-control">
        <option>--selecione--</option>
        <option>categoria 1</option>
        <option>categoria 2</option>
        <option>categoria 3</option>
      </select>
  <br>
    <label>PERGUNTA</label>
  <br>
      <input class="form-control" value="titulo da pergunta">
    <br>
      <button class="btn btn-primary">Cadastrar</button>
      </div>
      <div class="col-4">
      <img width="300px" heigth="300px" src="img/checklist.png">
      </div>
      </div>
    </form>
  `;
}
