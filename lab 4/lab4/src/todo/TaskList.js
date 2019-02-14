import React,{Component} from 'react'

class TaskList extends Component {
   render() {
       if ( this.props.tasks )
           return (<center><ul > {
                   this.props.tasks.map((item) => (
                       <li key={item.id}>{item.task} at {item.place}</li>
                   ))
               }
           </ul></center>)
   }
}

export default TaskList