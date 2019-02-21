import React, {Component}  from 'react';
import axios from "axios"
import { Card, Button, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class Data extends Component {

    state = { user: '', data:''}
 
    componentDidMount = () => this.fetchUser(this.state.user)
 
    fetchUser = (USER) => {
        axios.get(`https://api.github.com/users`)
            .then(res=> {
                this.setState({data: res.data})
                console.log(res.data)
            })
    }

 
    render() {
        let {data} = this.state
        let count=0
        console.log(data.length)
        console.log(count)
            if (data)
            return ( <div class="container">
                              <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Type</th>
      <th>url</th>
    </tr>
  </thead>
  {data.map((item)=> {
      count++
      return (
<tbody>
    <tr>
      <td>{count}</td>
      <td>{item.login}</td>
      <td>{item.type}</td>
      <td>{item.url}</td>
    </tr>
  </tbody>
      )
  })}
  
</Table>;
            </div> )
            return (<div>.</div>);
        
        }
        
        
    
 }
 
 export default Data




