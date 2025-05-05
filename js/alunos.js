window.onload = () => {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLogado"));
  if (!usuario) {
    alert("Faça login primeiro.");
    window.location.href = "index.html";
  }
  document.getElementById("nome-usuario").textContent = usuario.nome;

  exibirAlunos();
};

document.getElementById("aluno-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const cpf = document.getElementById("cpf").value;

  const alunos = JSON.parse(localStorage.getItem("alunos")) || [];

  const novoAluno = {
    id: "A" + (alunos.length + 1).toString().padStart(3, "0"),
    nome,
    email,
    cpf
  };

  alunos.push(novoAluno);
  localStorage.setItem("alunos", JSON.stringify(alunos));

  document.getElementById("aluno-form").reset();
  exibirAlunos();
});

function exibirAlunos() {
  const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
  const tbody = document.getElementById("lista-alunos");
  tbody.innerHTML = "";

  alunos.forEach(aluno => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${aluno.id}</td>
      <td>${aluno.nome}</td>
      <td>${aluno.email}</td>
      <td>${aluno.cpf}</td>
    `;
    tbody.appendChild(tr);
  });
}

function logout() {
  sessionStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
}
