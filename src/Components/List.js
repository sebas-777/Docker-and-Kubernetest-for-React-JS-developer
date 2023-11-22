import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
        <ul class="list-group my-3">
            {
                this.props.items.map((value,index)=>{
                    return(
                        <React.Fragment key={index}>
                            <li class="list-group-item">{index}{value}</li>
                            <button type="button" class="btn btn-danger w-2 mx-auto btn-sm my-1" onClick={()=>(this.props.deleteItem(index))}>X</button>
                        </React.Fragment>
                    )
                }
                )
            }
        </ul>
    )
  }
}
