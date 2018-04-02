/**
 * Created by kk on 2018/4/2.
 */

function list(state={
    loading:true,
    data:[]
},action){
    switch (action.type){
        case "LIST_UP":
            return{
                loading:true,
                data:state.data
            };
        case "LIST_UPDATA_SUCC":
            return {
                data:action.data.data,
                loadig:false
            };
        case "LIST_DATA_ERROR":
            return {
                data:[],
                loading:false
            };
        default:
            return state
    }
}


export default list