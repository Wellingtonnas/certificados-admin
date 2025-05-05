document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const user = JSON.parse(localStorage.getItem('usuario')) || {};

  if (user.email === email && user.senha === senha) {
    sessionStorage.setItem('usuarioLogado', JSON.stringify(user));
    window.location.href = 'dashboard.html';
  } else {
    alert("Email ou senha incorretos.");
  }
});

function registrar() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (!email || !senha) {
    alert("Preencha email e senha para registrar.");
    return;
  }

  const novoUsuario = {
    nome: email.split('@')[0],
    email: email,
    senha: senha
  };

  localStorage.setItem('usuario', JSON.stringify(novoUsuario));
  alert("Usuário registrado com sucesso!");
}