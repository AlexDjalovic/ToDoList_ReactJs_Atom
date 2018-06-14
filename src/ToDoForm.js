import React, {
  Component
} from 'react';
class ToDoForm extends Component {
  constructor() {
    super();
    this.submituj = this.submituj.bind(this);
    this.promeni = this.promeni.bind(this);
    //this.ukucanaVrednost=React.createRef(); NOV NACIN ZA KORISCENJE REFOVA
  }
  promeni(e) {
    this.props.promeniTextObaveze(e.target.value);


  }
  submituj(e) {
    e.preventDefault();
    var textic = this.refs.text.value;
//  var textic= this.ukucanaVrednost.value.value; NOV NACIN ZA KORISCENJE REFOVA
    if (!textic) {
      alert('morate uneti obavezu');
      return;
    }
    if(this.props.isEdited){
      var promenjenaObaveza={
        id:this.props.isEdited,
        name:textic
      }
      this.props.ontodoUpdate(promenjenaObaveza);
      this.refs.text.value = '';

    }else{
        this.props.ontodoAdd(textic);
        this.refs.text.value = "";

    }


    // console.log(this.refs.text.value);

  }
  render() {
    return (
      < div className = "ukupnaForma" >
         < form onSubmit = { this.submituj } >
          < div className = "form-group" id = "formicaZaUnos" >
                < label > Nova obaveza: < /label>
                < input type = "text"  ref = "text"  onChange = { this.promeni}  className = "form-control"  value={this.props.text}/ >
                < br / > < br / >
          < /div>
        < /form >
      < /div>);
    }
  }
  export default ToDoForm;
