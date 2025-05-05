window.onload = () => {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLogado"));
  if (!usuario) {
    alert("Você precisa estar logado.");
    window.location.href = "index.html";
  }

  document.getElementById("nome-usuario").textContent = usuario.nome;

  // Simular dados
  const certificados = [
    {
      id: "001",
      aluno: "Jose Ricardo",
      curso: "HTML Básico",
      data: "2025-04-01",
      status: "Emitido",
    },
    {
      id: "002",
      aluno: "Nathália Leite",
      curso: "CSS Intermediário",
      data: "2025-04-03",
      status: "Emitido",
    },
    {
      id: "003",
      aluno: "Wellington Carneiro",
      curso: "JavaScript Avançado",
      data: "2025-04-05",
      status: "Pendente",
    },
  ];

  const tbody = document.getElementById("lista-certificados");
  certificados.forEach((cert) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${cert.id}</td>
      <td>${cert.aluno}</td>
      <td>${cert.curso}</td>
      <td>${cert.data}</td>
      <td>${cert.status}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("total-cursos").textContent = 5;
  document.getElementById("total-certificados").textContent = 12;
  document.getElementById("total-alunos").textContent = 8;
};

function logout() {
  sessionStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
}
