export const githubReducer = (state = 0, action) => {
    switch(action.type){
        case "GET_API_SUCCESS":
            return action.data
        case 'GET_API_FAILED':
            return state
        default:
            return state
    }
}