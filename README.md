# 🎁 Amigo Secreto — Projeto em JavaScript

Aplicação web simples para **gerenciar uma lista de amigos** e realizar o **sorteio de Amigo Secreto** diretamente no navegador.  

---

## ✨ Funcionalidades

- ➕ **Adicionar amigos** à lista (sem duplicados e com validação de campo vazio).  
- 📜 **Listar amigos** na tela em tempo real.  
- ⌨️ Adicionar também pelo **Enter** no campo de texto.  
- 🎲 **Sortear um amigo aleatório** e exibir o resultado.  

---

## 🚀 Demonstração

- **Repositório GitHub**: [NicolasIfran/amigo-secreto](https://github.com/NicolasIfran/amigo-secreto)  
- **GitHub Pages**: [Acessar demo](https://nicolasifran.github.io/amigo-secreto/)  

> Dica: use a extensão **Live Server** do VS Code para recarregar a página automaticamente durante o desenvolvimento.

---

## 🧩 Estrutura do projeto

.
├── index.html # Estrutura da página
├── style.css # Estilos (cores, layout, responsividade)
├── app.js # Lógica do app (array, adicionar, sortear, render)
└── assets/ # Imagens, ícones ou screenshots (opcional)

---

## 🧠 Como funciona

- A lista de participantes é mantida em um **array** (`amigos`).  
- Ao adicionar, o nome é **normalizado** (`trim`) e checado para **evitar duplicatas** (`some` + `toLowerCase()`).  
- A UI é atualizada via **DOM** com `createElement` e `appendChild` em `mostrarAmigos()`.  
- O sorteio usa um **índice aleatório**:
  ```js
  const indice = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indice];
O resultado é exibido no elemento #resultado.

✅ Checklist
 Impede nomes duplicados

 Adição de nomes com Enter

 Mensagens de erro amigáveis (campo vazio, lista vazia)

 Exibição do sorteio no navegador

🛣️ Possíveis melhorias
❌ Botão para remover nomes da lista

🔄 Sorteio completo de pares (cada um tira alguém, ninguém tira a si mesmo)

📤 Exportar pares em JSON ou PDF

🎨 Tema claro/escuro

🤝 Contribuindo
Faça um fork do repositório

Crie uma branch: git checkout -b feature/minha-melhoria

Commit: git commit -m "feat: descreva sua melhoria"

Push: git push origin feature/minha-melhoria

Abra um Pull Request

📄 Licença
Este projeto está sob a licença MIT.
Sinta-se livre para usar, modificar e compartilhar.

🙌 Créditos
Feito com HTML, CSS e JavaScript puro.
Desenvolvido como prática de lógica e manipulação do DOM no Visual Studio Code.
