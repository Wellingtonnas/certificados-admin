# 🎓 Sistema de Gerenciamento de Certificados

Este projeto permite que administradores cadastrem cursos e alunos, emitam certificados com código de validação único (UUID), e disponibilizem uma página pública para validação desses certificados.

---

## 🚀 Tecnologias Utilizadas

- HTML5, CSS3, JavaScript (Vanilla)
- Geração de PDF com `html2pdf.js`
- UUID com `uuid`
- Armazenamento local com `localStorage`
- Versionamento com Git e GitHub

---

## 📦 Funcionalidades

- Login e Registro de Administradores
- Cadastro de Cursos e Alunos
- Emissão de Certificados com código único
- Validação Pública de Certificados
- Dashboard Administrativo

---

## 📁 Estrutura de Pastas

```
certificados/
├── index.html
├── dashboard.html
├── cursos.html
├── alunos.html
├── certificados.html
├── validacao.html
├── css/
├── js/
└── assets/
```

---

## 🧪 Documentação Mínima da API (Simulada via LocalStorage)

Mesmo que o sistema seja **frontend puro**, o fluxo simula chamadas de API com `localStorage`.

### 📚 Entidades

#### Administradores

```json
{
  "usuario": "admin",
  "senha": "123456",
  "nome": "Administrador"
}
```

#### Cursos

```json
{
  "id": "c001",
  "nome": "JavaScript Básico",
  "descricao": "Curso introdutório",
  "carga_horaria": "10h",
  "data": "2025-05-01"
}
```

#### Alunos

```json
{
  "id": "a001",
  "nome_completo": "João da Silva",
  "email": "joao@email.com",
  "cpf": "123.456.789-00"
}
```

#### Certificados

```json
{
  "id": "ct001",
  "aluno_id": "a001",
  "curso_id": "c001",
  "data_emissao": "2025-05-01",
  "codigo_validacao": "c8bfb460-1b47-4c2e-8d3e-17ef720a1a10"
}
```

---

## 🔐 Autenticação

- Simulada no frontend com `sessionStorage`
- Apenas administradores registrados conseguem acessar o dashboard

---

## 📄 Validação Pública

A página `validacao.html` permite que qualquer pessoa insira um código e veja os dados do certificado correspondente, se for válido.

---

## 📌 Como Executar

1. Baixe o projeto
2. Extraia o `.zip`
3. Abra o `index.html` no navegador

---

## 📂 Versão e Branches

- `main`: versão estável
- `feature/nome-da-feature`: novas funcionalidades

---

## 👥 Equipe

- José Ricardo (Análise de Requisitos, Modelagem de Dados)
- Nathália Leite (Front-end, UI Design)
- Wellington Nascimento (Front-end, Integração e Testes)

---

## 📃 Licença

Este projeto é acadêmico e de uso livre para fins educacionais.
