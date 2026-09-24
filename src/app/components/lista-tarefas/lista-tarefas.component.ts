import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css'
})
export class ListaTarefasComponent {
  // 1. Lista inicial conforme especificado no enunciado
  tarefas: Tarefa[] = [
    { descricao: 'Estudar Angular', concluida: false },
    { descricao: 'Fazer exercício de programação', concluida: true },
    { descricao: 'Revisar conteúdo da aula', concluida: false }
  ];

  // Campo para armazenar o valor digitado no input
  novaTarefa: string = '';

  // 3. Adicionar uma nova tarefa (não permitindo adicionar vazia)
  adicionarTarefa(): void {
    if (this.novaTarefa && this.novaTarefa.trim() !== '') {
      this.tarefas.push({
        descricao: this.novaTarefa.trim(),
        concluida: false
      });
      this.novaTarefa = ''; // Limpa o campo após adicionar
    }
  }

  // 5. Remover uma tarefa pelo índice
  removerTarefa(index: number): void {
    this.tarefas.splice(index, 1);
  }

  // 6. Contador dinâmico de tarefas concluídas
  get totalConcluidas(): number {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }
}
