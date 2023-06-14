
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

        case "Add_Post":{
            return{
                ...state,
                posts: action.payload,
            }
        }

        case "Like_Post":{
            return{
                ...state,
                posts: action.payload,
            }
        }

        case "Dislike_Post":{
            return{
                ...state,
                posts:action.payload,
            }
        }
        default:{
            
        }
    }
}