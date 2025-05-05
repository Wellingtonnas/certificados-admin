window.onload = () => {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLogado"));
  if (!usuario) {
    alert("Faça login primeiro.");
    window.location.href = "index.html";
  }
  document.getElementById("nome-usuario").textContent = usuario.nome;

  exibirCursos();
};

document.getElementById("curso-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const carga = document.getElementById("carga").value;
  const data = document.getElementById("data").value;
  const descricao = document.getElementById("descricao").value;

  const cursos = JSON.parse(localStorage.getItem("cursos")) || [];

  const novoCurso = {
    id: "C" + (cursos.length + 1).toString().padStart(3, "0"),
    nome,
    carga,
    data,
    descricao
  };

  cursos.push(novoCurso);
  localStorage.setItem("cursos", JSON.stringify(cursos));

  document.getElementById("curso-form").reset();
  exibirCursos();
});

function exibirCursos() {
  const cursos = JSON.parse(localStorage.getItem("cursos")) || [];
  const tbody = document.getElementById("lista-cursos");
  tbody.innerHTML = "";

  cursos.forEach(curso => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${curso.id}</td>
      <td>${curso.nome}</td>
      <td>${curso.carga}h</td>
      <td>${curso.data}</td>
      <td>${curso.descricao}</td>
    `;
    tbody.appendChild(tr);
  });
}

function logout() {
  sessionStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
}