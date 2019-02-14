import React, {Component}  from 'react';

class InputTask extends Component {

   state = {task:'' , place:''}

   handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value });
   }

   render() {
       return (
           <div>
              
               <input type="hidden" name="id" value={this.props.id} />
               <input type="text" name="task" onChange={this.handleChange} />
               <input type="text" name="place" onChange={this.handleChange} />
               <button onClick={() => this.props.addTask(this.state.task,this.state.place)}>Add</button>
           </div>
       )
   }
}

export default InputTask