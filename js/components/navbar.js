function navbar() {
  return `
    <nav class="text-end">
      <button class="btn btn-outline-dark" onclick="changeContent('home')">Inicio</button>
      <button class="btn btn-outline-dark" onclick="changeContent('profile')">Meu Perfil</button>
      <button class="btn btn-outline-dark" onclick="changeContent('settings')">Configurações</button>
      <button class="btn btn-outline-dark" onclick="changeContent('contact')">Contato</button>
      <button class="btn btn-outline-dark" onclick="changeContent('tubarao')">Tubarao</button>
      <button class="btn btn-outline-dark" onclick="changeContent('categorias')">Categorias</button>
      <button class="btn btn-outline-dark" onclick="changeContent('carliane')">Carliane</button>
      <button class="btn btn-outline-dark" onclick="changeContent('mariana')">Saiba Mais</button>
      <button class="btn btn-outline-dark" onclick="changeContent('mikael')">Mikael</button>
      <button class="btn btn-outline-dark" onclick="changeContent('users')">Usuários</button>
      <button class="btn btn-outline-dark" onclick="changeContent('help')">Help</button>
      <button class="btn btn-outline-dark" onclick="changeContent('cadastrarcategoria')">Cadastar Categoria</button>

      <div class="btn-group">
        <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Perguntas
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" onclick="changeContent('perguntas')" href="#">Nova</a></li>
          <li><a class="dropdown-item" onclick="changeContent('questions')" href="#">Listar</a></li>
        </ul>
      </div>

      <div class="btn-group">
        <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Cidades
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" onclick="changeContent('addCity')" href="#">Nova</a></li>
          <li><a class="dropdown-item" onclick="changeContent('listCities')" href="#">Listar</a></li>
        </ul>
      </div>
    </nav>
  `;
}
