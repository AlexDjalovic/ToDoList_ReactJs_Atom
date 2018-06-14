import React,{Component} from 'react';

class ToDoList extends Component{

deleteToDo(todo){
  // console.log(todo);
  this.props.obrisiObavezu(todo);
}

updateToDo(todo){
  this.props.promeniObavezu(todo);
}

render(){
    return(
<div className="doLista">
<h1>Moja  to_do lista:</h1>
<br/>
  <ul className="list-group">
    {this.props.obaveze.map(todo =>{
      // return <li className="list-group-item" todo={todo} key={todo.id}>{todo.name}</li>
      return <li className="list-group-item"  key={todo.id}>
                {todo.id}.{todo.name}
                   {/*<a  className="delete" href="#" onClick={this.deleteToDo.bind(this,todo)}>   Obrisi</a>*/}
                   <span className="dugmici">
                   <button type="button" className="btn btn btn-primary" onClick={this.updateToDo.bind(this,todo)}> Promeni </button>
                  <button type="button" className="btn btn-danger" onClick={this.deleteToDo.bind(this,todo)}> Obrisi </button>
                  </span>
             </li> //mora da se ima key jer inace u konzoli javlja gresku
    })}
  </ul>
</div>
    );
  }
}
export default ToDoList;
