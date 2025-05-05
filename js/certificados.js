window.onload = () => {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLogado"));
  if (!usuario) {
    alert("Faça login primeiro.");
    window.location.href = "index.html";
  }
  document.getElementById("nome-usuario").textContent = usuario.nome;

  preencherSelects();
  exibirCertificados();
};

function preencherSelects() {
  const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
  const cursos = JSON.parse(localStorage.getItem("cursos")) || [];

  const alunoSelect = document.getElementById("aluno-select");
  const cursoSelect = document.getElementById("curso-select");

  alunoSelect.innerHTML = "<option value=''>Selecione o aluno</option>";
  cursoSelect.innerHTML = "<option value=''>Selecione o curso</option>";

  alunos.forEach(aluno => {
    const option = document.createElement("option");
    option.value = aluno.id;
    option.textContent = aluno.nome;
    alunoSelect.appendChild(option);
  });

  cursos.forEach(curso => {
    const option = document.createElement("option");
    option.value = curso.id;
    option.textContent = curso.nome;
    cursoSelect.appendChild(option);
  });
}

document.getElementById("certificado-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const alunoId = document.getElementById("aluno-select").value;
  const cursoId = document.getElementById("curso-select").value;

  const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
  const cursos = JSON.parse(localStorage.getItem("cursos")) || [];

  const aluno = alunos.find(a => a.id === alunoId);
  const curso = cursos.find(c => c.id === cursoId);

  const codigo = uuid.v4();
  const dataEmissao = new Date().toLocaleDateString("pt-BR");

  const certificados = JSON.parse(localStorage.getItem("certificados")) || [];

  const novoCertificado = {
    id: certificados.length + 1,
    aluno_id: alunoId,
    curso_id: cursoId,
    aluno_nome: aluno.nome,
    curso_nome: curso.nome,
    data_emissao: dataEmissao,
    codigo_validacao: codigo
  };

  certificados.push(novoCertificado);
  localStorage.setItem("certificados", JSON.stringify(certificados));

  gerarPDF(aluno, curso, dataEmissao, codigo);
  exibirCertificados();
});

function exibirCertificados() {
  const certificados = JSON.parse(localStorage.getItem("certificados")) || [];
  const tbody = document.getElementById("lista-certificados");
  tbody.innerHTML = "";

  certificados.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${c.aluno_nome}</td>
      <td>${c.curso_nome}</td>
      <td>${c.data_emissao}</td>
      <td>${c.codigo_validacao}</td>
      <td><button onclick="baixarPDF('${c.aluno_nome}', '${c.curso_nome}', '${c.data_emissao}', '${c.codigo_validacao}')">Baixar PDF</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function gerarPDF(aluno, curso, data, codigo) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("CERTIFICADO", 105, 30, null, null, "center");
  doc.setFontSize(12);
  doc.text(`Certificamos que ${aluno.nome} concluiu o curso de ${curso.nome}`, 20, 50);
  doc.text(`com carga horária de ${curso.carga} horas, realizado em ${data}.`, 20, 60);
  doc.text(`Código de verificação: ${codigo}`, 20, 80);

  doc.save(`certificado-${aluno.nome}.pdf`);
}

function baixarPDF(nome, curso, data, codigo) {
  gerarPDF({ nome }, { nome: curso }, data, codigo);
}

function logout() {
  sessionStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
}
