// ===== Lista inicial (normalizada) =====
let amigos = ["Luiz", "Marcelo", "Vitor", "Erika", "Nicolas"].map(n => n.trim());

// ===== Adicionar amigo =====
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (!nome) {
    alert("Por favor, insira um nome.");
    return;
  }

  // Evita duplicados (case-insensitive)
  const jaExiste = amigos.some(a => a.toLowerCase() === nome.toLowerCase());
  if (jaExiste) {
    alert("Esse nome já foi adicionado.");
    input.value = "";
    return;
  }

  amigos.push(nome);
  mostrarAmigos();
  input.value = "";
}

// ===== Mostrar lista de amigos =====
function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // evita duplicar

  for (const amigo of amigos) {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  }
}

// ===== Utilitário para exibir resultado (funciona com UL/OL ou DIV/P) =====
function renderResultado(html) {
  const el = document.getElementById("resultado");
  if (!el) return;

  // Se for lista, coloca dentro de um <li>; senão, injeta direto
  if (el.tagName === "UL" || el.tagName === "OL") {
    el.innerHTML = "";
    const li = document.createElement("li");
    li.innerHTML = html;
    el.appendChild(li);
  } else {
    el.innerHTML = html;
  }
}

// ===== Sortear amigo =====
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia! Adicione pelo menos um nome.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indice];

  renderResultado(`🎉 O amigo secreto sorteado é: <strong>${sorteado}</strong>`);
}

// ===== Render inicial =====
mostrarAmigos();

// ===== Atalho: Enter no campo adiciona =====
const campoAmigo = document.getElementById("amigo");
campoAmigo.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    adicionarAmigo();
  }
});
