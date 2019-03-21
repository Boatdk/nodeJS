import React, {Component}  from 'react';
// import axios from "axios"
import {getApi} from '../App'
import {connect} from 'react-redux'

class Github extends Component {

    componentDidMount(){
        console.log('props', this.props)
        this.props.getApi()
    }

    // state = { user: 'wwarodom', data:''}
 
    // componentDidMount = () => this.fetchUser(this.state.user)
 
    // fetchUser = (USER) => {
    //     axios.get(`https://api.github.com/users/${USER}`)
    //         .then(res=> {
    //             this.setState({data: res.data})
    //             console.log(res.data)
    //         })
    // }

    
    renderUser = () => {
        // console.log(data)
        console.log('props: ', this.props.data)
        if(this.props.data){
           return this.props.data.url
           
        }
    }
    render() {
      return (
          <div>
              <h2> RENDER USER</h2>  
              <ul>
                  {this.renderUser()}
              </ul>
          </div>
      )
    }
 }

 const mapStateToProps = ({data}) => {
     return {data}
 }

 const mapDispatchToProps = (dispatch) => {
     return {
         getApi: () => dispatch(getApi())
     }
 }
 
 export default connect (mapStateToProps,mapDispatchToProps)(Github)