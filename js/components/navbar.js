function navbar() {
  return `
    <nav>
      <button class="btn btn-outline-dark" onclick="changeContent('home')">Inicio</button>
      <button class="btn btn-outline-dark" onclick="changeContent('profile')">Perfil</button>
      <button class="btn btn-outline-dark" onclick="changeContent('settings')">Configurações</button>
      <button class="btn btn-outline-dark" onclick="changeContent('chagas')">Chagas</button>
      <button class="btn btn-outline-dark" onclick="changeContent('contact')">Contato</button>
      <button class="btn btn-outline-dark" onclick="changeContent('tubarao')">Tubarao</button>
      <button class="btn btn-outline-dark" onclick="changeContent('categorias')">Categorias</button>
      <button class="btn btn-outline-dark" onclick="changeContent('carliane')">Carliane</button>
      <button class="btn btn-outline-dark" onclick="changeContent('mariana')">Saiba Mais</button>
      <button class="btn btn-outline-dark" onclick="changeContent('mikael')">Mikael</button>
      <button class="btn btn-outline-dark" onclick="changeContent('help')">Help</button>
    </nav>
  `;
}
