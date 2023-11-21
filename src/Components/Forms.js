import React, { Component } from "react";

export default class Forms extends Component {
  render() {
    return (
      <> 
        <form>
          <div class="mb-3">
            <h1> Todo app</h1>
            <input type="text" class="form-control" id="todo" />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}
