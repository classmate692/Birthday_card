import React, { Component } from 'react'
class Props_with_class extends Component{
    render()
    { return(
        <div>
        <div>student name:{this.props.name}</div>
         <div>student enrollment number:{this.props.enrollment}</div>
        </div>
    )
    }

}
export default Props_with_class;