
export const reducer = (state,action) => {
    switch(action.type){
        case "Post_Feed":{
            return{
                ...state,
                posts : action.payload,
            }
        }
        case "Filter":{
            return{
                ...state,
                filters : action.payload,
            }
        }
        default:{
            
        }
    }
}