const themeButton = document.getElementById("botao-tema");
let dark = true;

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.innerText = "Tema Claro";
  } else {
    themeButton.innerText = "Tema Escuro";
  }
});

const sections = document.querySelectorAll("main section");

sections.forEach((section) => {
  const title = section.querySelector("h2");

  //const content = document.createElement("div");
  // const children = Array.from(section.children).filter(
  //   (el) => el.tagName !== "H2"
  // );

  const content = section.querySelector("div");
  // children.forEach((el) => content.appendChild(el));
  // section.appendChild(content);
  content.classList.add("collapse-content");
  title.style.cursor = "pointer";

  title.addEventListener("click", () => {
    content.classList.toggle("open");
    title.classList.toggle("active");
  });
});
const form = document.getElementById("formContato");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const empresa = form.empresa.value.trim();
  const vaga = form.vaga.value.trim();
  const mensagem = form.mensagem.value.trim();
  const corpoEmail =
    `Empresa: ${empresa}\n` + `Vaga: ${vaga}\n\n` + `Mensagem: ${mensagem}`;
  form.action = `mailto:as123123123d@hotmail.com?subject=***Contato%20${encodeURIComponent(
    empresa
  )}***%20Vaga%20${encodeURIComponent(vaga)}&body=${encodeURIComponent(
    corpoEmail
  )}`;

  form.submit();
});