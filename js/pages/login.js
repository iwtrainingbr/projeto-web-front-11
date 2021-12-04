function login() {
    return `  
    <form class="bg-white p-3 login" onsubmit="changeContent('login')">

        <div><img src="img/we_match!02.png" class="mx-auto d-block mt-3 pt-3"></div>

        <h3 class="text-center mt-2">Fazer login</h4>
        <h6 class="text-center">Ir para o We Match!</h5><br>

        <div class="mb-3">
            <label for="#" class="form-label">nome@examplo.com</label>
            <input type="email" class="form-control" id="#" placeholder="nome@examplo.com">
        </div>

        <button class="btn btn-info btn-lg float-end" onclick="changeContent('home')">Enviar</button><br><br>


        <div class="text-center">
            <a class="text-center" href="#">Esqueceu a senha?</a><br>
            <a class="text-center" href="#">Clique aqui</a>
        </div>

    </form>
    `
}