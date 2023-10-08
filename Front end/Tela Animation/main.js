

	function login() {
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;

		// Aqui você pode adicionar lógica de autenticação
		// Verificar as credenciais e redirecionar para a página apropriada

		if (username === "ADM" && password === "3012") {
			window.location.href = "paginaADM.html";
		} else if (username === "GR" && password === "3112") {
			window.location.href = "paginaGR.html";
		} else if (username === "LD" && password === "3212") {
			window.location.href = "paginaLD.html";
		} else {
			alert("Usuário ou senha incorretos. Tente novamente.");
		}
	}
