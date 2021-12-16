function navbar() {
    return `
    <nav class="text-end">
      <div class="btn-group">

      <div class="btn-group">
        <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Home
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" onclick="changeContent('home')" href="#">Inicio</a></li>
        </ul>
      </div>

        <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Meu Perfil
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" onclick="changeContent('profile')" href="#">Meu perfil</a></li>
          <li><a class="dropdown-item" onclick="changeContent('contact')" href="#">Contato</a></li>
          <li><a class="dropdown-item" onclick="changeContent('listUsers')" href="#">Usuário</a></li>
        </ul>
      </div>

      <div class="btn-group">
        <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Configurações
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" onclick="changeContent('settings')" href="#">Configurações</a></li>
          <li><a class="dropdown-item" onclick="changeContent('mariana')" href="#">Saiba Mais</a></li>
          <li><a class="dropdown-item" onclick="changeContent('help')" href="#">Ajuda</a></li>
        </ul>
      </div>

      <div class="btn-group">
        <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Cadastrar Categorias
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" onclick="changeContent('cadastrarcategoria')" href="#">Nova</a></li>
          <li><a class="dropdown-item"onclick="changeContent('categorias')" href="#">Listar</a></li>
        </ul>
      </div>

      <div class="btn-group">
        <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Perguntas
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" onclick="changeContent('addQuestions')" href="#">Nova</a></li>
          <li><a class="dropdown-item" onclick="changeContent('listQuestions')" href="#">Listar</a></li>
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

      <div class="btn-group">
        <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Bloquear Usuário
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" onclick="changeContent('UsersBlocked')" href="#">Bloquear Usuário</a></li>
          <li><a class="dropdown-item" onclick="changeContent('listUsersBlocked')" href="#">Usuários Bloqueados</a></li>
        </ul>
      </div>

      <div class="btn-group">
        <button class="btn btn-danger" onclick="changeContent('login')" type="button" id="logout" data-bs-toggle="dropdown" aria-expanded="false">
          Sair
        </button>
      </div>
    </nav>
  `;
}
