import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTarefasComponent } from './lista-tarefas.component';

describe('ListaTarefasComponent', () => {
  let component: ListaTarefasComponent;
  let fixture: ComponentFixture<ListaTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTarefasComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar com as 3 tarefas requeridas e 1 concluída', () => {
    expect(component.tarefas.length).toBe(3);
    expect(component.tarefas[0].descricao).toBe('Estudar Angular');
    expect(component.tarefas[0].concluida).toBe(false);
    expect(component.tarefas[1].descricao).toBe('Fazer exercício de programação');
    expect(component.tarefas[1].concluida).toBe(true);
    expect(component.totalConcluidas).toBe(1);
  });

  it('deve adicionar uma nova tarefa com sucesso', () => {
    component.novaTarefa = 'Praticar testes no Angular';
    component.adicionarTarefa();
    expect(component.tarefas.length).toBe(4);
    expect(component.tarefas[3].descricao).toBe('Praticar testes no Angular');
    expect(component.tarefas[3].concluida).toBe(false);
    expect(component.novaTarefa).toBe('');
  });

  it('não deve permitir adicionar tarefa vazia ou com apenas espaços', () => {
    component.novaTarefa = '   ';
    component.adicionarTarefa();
    expect(component.tarefas.length).toBe(3);
  });

  it('deve remover uma tarefa da lista ao chamar removerTarefa', () => {
    const tarefaRemovida = component.tarefas[0].descricao;
    component.removerTarefa(0);
    expect(component.tarefas.length).toBe(2);
    expect(component.tarefas[0].descricao).not.toBe(tarefaRemovida);
  });

  it('deve atualizar o contador de tarefas concluídas dinamicamente', () => {
    expect(component.totalConcluidas).toBe(1);
    component.tarefas[0].concluida = true;
    expect(component.totalConcluidas).toBe(2);
    component.tarefas[1].concluida = false;
    expect(component.totalConcluidas).toBe(1);
  });
});
