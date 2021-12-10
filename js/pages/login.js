function login() {
    return `
    <form class="bg-white p-3 login form-login" onsubmit="changeContent('login')">

        <div><img src="img/we_match!02.png" class="mx-auto d-block mt-2 pt-2 logo-login"></div>

        <h3 class="text-center mt-2">Fazer login</h4>
        <h6 class="text-center">Ir para o We Match!</h5><br>

        <div class="mb-3">
            <label for="#" class="form-label">Email</label>
            <input type="email" class="form-control" id="#" placeholder="nome@examplo.com" aria-label="email">
        </div>

        <div class="mb-3">
            <label for="senha" class="form-label">Senha</label>
            <input type="password" class="form-control" id="senha" placeholder="********">
        </div>
        <button class="btn btn-info btn-lg float-end" onclick="changeContent('home')">Enviar</button>

        </form>

        <div class="text-center mt-3">
            <a class="text-center" href="#">Esqueceu a senha?</a><br>
            <a class="text-center" href="#">Clique aqui</a>
        </div><br>
    `
}
