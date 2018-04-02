/**
 * Created by kk on 2018/4/2.
 */

function user(state={
    loading:true,
    data:{
        loginname:"",
        avatar_url:"",
        create_at:"",
        score:"",
        recent_topics:[],
        recent_replies:[]
    }
},action){
    switch (action.type){
        case "USER_UPDATA":
            return {
                data: state.data,
                loading: true
            }
        case "USER_UPDATA_SUCC":
            return {
                data: action.data.data,
                loading: false
            }
        case "USER_UPDATA_ERROR":
            return {
                data:{
                    avatar_url:"",
                    create_at:"",
                    loginname:"",
                    score:"",
                    recent_replies:[],
                    recent_topics:[]
                },
                loading: false
            }
        default:
            return state
    }
}


export default user;