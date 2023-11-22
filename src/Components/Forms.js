import React, { Component } from "react";
import TodoList from './List'

export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputData: "",
      todoItems:['Do Exercise','Create React project']
    };
  }
  changeTodoInput = (event) => {
    this.setState({inputData:event.target.value});
    console.log(this.state.inputData);
  }; 
  handleSubmit= (event)=>{
    //alert(`${this.state.inputData}`);
    if(this.state.inputData!=''){
      let newItem = [...this.state.todoItems,this.state.inputData]
      this.setState({
        todoItems:newItem,
        inputData:""
      })
    }
  } 

  deleteItem=(index)=>{
    let original=this.state.todoItems
    let selected=original.filter((value,key)=>{
      return index!=key
    })
  }

  render() {
    return (
      <>
        <div class="container my-3">
          <div className="row justify-content-center">
            <div
              className="col-md-10"
              style={{
                border: "2px solid",
                borderRadius: "50px",
                padding: "30px",
                backgroundColor: "#fff",
                color: "#fff",
              }}
            >
              <form onSubmit={this.handleSubmit}>
                <div class="mb-3">
                  <h1> Todo app</h1>
                  <input
                    type="text"
                    class="form-control"
                    id="todo"
                    placeholder="Try typing:Do Exercise"
                    onChange={this.changeTodoInput}
                    value={this.state.inputData}
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-primary w-100"
                  style={{ borderRadius: "50px", padding: "5px" }}
                >
                  <span onClick={this.handleSubmit}>Add</span>
                 
                </button>
              </form> 
              <TodoList items={this.state.todoItems} deleteItem ={this.deleteItem}/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
