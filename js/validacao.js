document.getElementById("form-validacao").addEventListener("submit", function (e) {
  e.preventDefault();

  const codigo = document.getElementById("codigo-validacao").value.trim();
  const certificados = JSON.parse(localStorage.getItem("certificados")) || [];

  const certificado = certificados.find(c => c.codigo_validacao === codigo);
  const resultadoDiv = document.getElementById("resultado-validacao");

  if (certificado) {
    resultadoDiv.innerHTML = `
      <h3>Certificado Válido ✅</h3>
      <p><strong>Aluno:</strong> ${certificado.aluno_nome}</p>
      <p><strong>Curso:</strong> ${certificado.curso_nome}</p>
      <p><strong>Data de Emissão:</strong> ${certificado.data_emissao}</p>
      <p><strong>Código:</strong> ${certificado.codigo_validacao}</p>
    `;
    resultadoDiv.classList.remove("erro");
    resultadoDiv.classList.add("sucesso");
  } else {
    resultadoDiv.innerHTML = `<h3>❌ Certificado não encontrado</h3>`;
    resultadoDiv.classList.remove("sucesso");
    resultadoDiv.classList.add("erro");
  }
});
