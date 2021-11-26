function navbar() {
  return `
    <nav>
      <button class="btn btn-outline-dark" onclick="changeContent('home')">Inicio</button>
      <button class="btn btn-outline-dark" onclick="changeContent('profile')">Perfil</button>
      <button class="btn btn-outline-dark" onclick="changeContent('settings')">Configurações</button>
      <button class="btn btn-outline-dark" onclick="changeContent('chagas')">Chagas</button>
      <button class="btn btn-outline-dark" onclick="changeContent('contact')">Contato</button>
      <button class="btn btn-outline-dark" onclick="changeContent('help')">Help</button>
    </nav>
  `;
}
