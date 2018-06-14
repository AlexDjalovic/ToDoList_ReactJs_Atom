import React, { Component } from 'react';
import './App.css';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

class App extends Component {

  constructor(props){
    super(props);
 this.dodajNovuObavezu=this.dodajNovuObavezu.bind(this);
 this.obradiBrisanje=this.obradiBrisanje.bind(this);
 this.editujTextObaveze=this.editujTextObaveze.bind(this);
 this.obradiEdit=this.obradiEdit.bind(this);
 this.updateTextObaveze=this.updateTextObaveze.bind(this);
    this.state={
      text:'' ,
      isEdited:0,
      todos:[
         {id:1, name:'Meeting at work'},
         {id:2, name:'dovedi decu kuci'},
         {id:3, name: 'ici u kupovinu'}
            ]
                };
  }


dodajNovuObavezu(ukucano){
  // alert(ukucano);
var duzina=this.state.todos.length;
  var novaObaveza={
    id:duzina+1,
    name:ukucano
  };
  this.setState({todos:this.state.todos.concat(novaObaveza)});
}

obradiBrisanje(todo){
  // console.log(todo.id);
  var todos=this.state.todos;
  for(var i=0;i<todos.length;i++){
    if(todos[i].id===todo.id){
      todos.splice(i,1);
    }
  }
  this.setState({todos:todos});
}

editujTextObaveze(todo){
 this.setState({
         text:todo.name,
         isEdited:todo.id
       });
}
obradiEdit(text){
  this.setState({text:text});
}
updateTextObaveze(todo){
  var todos=this.state.todos;
  for(var i=0;i<todos.length;i++){
    if(todos[i].id===todo.id){
     todos.splice(i,1);
    //  todos[i].name=todo.name;

    }
  }
  todos.push(todo);

  this.setState({todos:todos});
}

render() {
    return (
      <div className="App">
        <h2>Ukupno imam : {this.state.todos.length} obaveza</h2>
        <ToDoForm ontodoAdd={this.dodajNovuObavezu} ontodoUpdate={this.updateTextObaveze} {...this.state} promeniTextObaveze={this.obradiEdit}/> {/* on preporucuje {.....this.state} umesto */}
        <br/>
        <ToDoList obaveze={this.state.todos} obrisiObavezu={this.obradiBrisanje} promeniObavezu={this.editujTextObaveze}/>
      </div>
    );
  }
}
export default App;
//mora da se prepravi projekat
