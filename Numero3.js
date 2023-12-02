const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const fullList = document.querySelector('.list-tasks')
let minhaListaDeItens = []




function adicionarNovaTarefa(){
  minhaListaDeItens.push({
    task: input.value,
    concluida: false
  })
  
  input.value = ''
  
  mostrarTarefas()
}

function mostrarTarefas() {
  
  let novaLi =''
  
// ['compra pão', 'escova os dentes']
  
  minhaListaDeItens.forEach((item, position) => {
      novaLi = novaLi+`
    
      <li class="task ${item.concluida && "done"} ">
        <img class="" src="check.png" alt="check-na-tarefa" onclick="concluirTarefa(${position})">
        <p> ${item.task} </p>
        <img src="lixo.png" alt="tarefa-para-o-lixo" onclick="deleteItem(${position})">
      </li>
    
    `
  })
  
  
  fullList.innerHTML = novaLi
  
  localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
  
}

function concluirTarefa(position){
  minhaListaDeItens[position].concluida = !minhaListaDeItens[position].concluida
  
  mostrarTarefas()
}

function deleteItem(position){
  minhaListaDeItens.splice(position, 1)
  mostrarTarefas()
  
  
}

function recarregarTarefas(){
  const tarefaDoLocalStorage = localStorage.getItem('lista')
  if(tarefaDoLocalStorage){
  minhaListaDeItens = JSON.parse(tarefaDoLocalStorage)
  }
  mostrarTarefas()
}
recarregarTarefas()

button.addEventListener('click', adicionarNovaTarefa)