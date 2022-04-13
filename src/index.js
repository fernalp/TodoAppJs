// import { saludar } from './js/componentes';

import { Todo,TodoList } from './class'
import { crearTodoHtml } from './js/componentes';

// import { Todo } from './class/todo.class.js'
// import { TodoList } from './class/todo-list.class.js'

import './styles.css';

export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml(todo));
todoList.todos.forEach( crearTodoHtml);



// const tarea = new Todo('Aprender JavaScript');
 
// todoList.nuevoTodo( tarea );

// console.log( todoList )

// crearTodoHtml(  );

// localStorage.setItem('mi-key','ABC123');

// setTimeout( () =>{
//     localStorage.removeItem('mi-key');
// },4000 )