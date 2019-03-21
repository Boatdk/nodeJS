import axios from 'axios'
import {store} from '../reducer/index'

export const getApiSuccess = data => ({ type: 'GET_API_SUCCESS', data})
export const getApiFailed = () => ({type:'GET_API_FAILED'})
export const getApi = (USER) => async (dispatch) => {
    try{
        console.log('get data')
        const res = await axios.get(`https://api.github.com/users/1`)
        console.log(res)
        const resBody = await res.data
        console.log(res.data)
        console.log('res:' , resBody)
        dispatch(getApiSuccess(resBody))
    } catch(error){
        console.error(error)
        dispatch(getApiFailed())
    }
    console.log(store)
}
