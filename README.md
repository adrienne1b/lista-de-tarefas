# Atividade: Lista de Tarefas em Angular (WoMakersCode)

Aplicação simples e didática de lista de tarefas desenvolvida em **Angular**, com foco na prática de componentes, templates, data binding (`[(ngModel)]`), eventos, diretivas e estilização condicional.

---

## 📁 Estrutura de Pastas

Para manter tudo organizado e não misturar as informações, os arquivos foram separados por responsabilidade:

```text
src/
└── app/
    ├── models/
    │   └── tarefa.model.ts               # Interface TypeScript com a estrutura de uma Tarefa
    │
    ├── components/
    │   └── lista-tarefas/
    │       ├── lista-tarefas.component.ts     # Lógica: lista inicial, adicionar, remover e contador
    │       ├── lista-tarefas.component.html   # Template: campos, botões, checkboxes e texto
    │       ├── lista-tarefas.component.css    # Estilos: visual dos cards e texto riscado
    │       └── lista-tarefas.component.spec.ts# Testes unitários cobrindo todos os requisitos
    │
    ├── app.ts                            # Componente raiz da aplicação
    ├── app.html                          # Template raiz chamando <app-lista-tarefas>
    └── app.css                           # Estilos específicos do app raiz
```

---

## 🚀 Como abrir e rodar no VS Code

### 1. Abrir a pasta no VS Code
- Abra o VS Code.
- Clique em **File > Open Folder...** (ou `Arquivo > Abrir Pasta...`).
- Selecione a pasta do projeto:


### 2. Abrir o Terminal integrado
- No VS Code, use o atalho: `Ctrl + '` (ou menu superior **Terminal > New Terminal**).

### 3. Rodar a aplicação
- No terminal, execute:
  ```bash
  npm start
  ```
- Abra seu navegador no endereço: **http://localhost:4200/**

---

## 🧪 Como rodar os testes unitários

Para validar automaticamente que todos os requisitos da atividade estão funcionando:
```bash
npm test -- --watch=false
```

---

## 🎯 Requisitos Implementados

1. **Componente Principal com Lista Inicial**:
   - `Estudar Angular` (pendente)
   - `Fazer exercício de programação` (concluída)
   - `Revisar conteúdo da aula` (pendente)
2. **Exibição das Tarefas**:
   - Caixa de seleção (checkbox)
   - Descrição da tarefa
   - Botão para remover a tarefa
3. **Adicionar Tarefa**:
   - Campo de entrada com placeholder
   - Botão "Adicionar" (ou pressionar `Enter`)
   - Validação que impede tarefas vazias ou só com espaços
4. **Concluir Tarefa**:
   - Checkbox com `[(ngModel)]`
   - Tarefas concluídas com efeito visual de **texto riscado**
5. **Remover Tarefa**:
   - Botão "Remover" que exclui o item pelo seu índice
6. **Contador Dinâmico**:
   - Rodapé mostrando a quantidade atualizada de tarefas concluídas.
