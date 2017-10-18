import * as types from '../action-types'
let initState={
    list:{
        computers:[],
        phones:[],
        other:[]
    }
}
export default function (state=initState,action) {
   switch (action.type){
       // case types.GET_COMPUTERS_LIST:
       //     return {
       //         ...state,
       //         list:{
       //             ...state.list,...action.list,
       //
       //         }
       //         };
       case types.GET_COMPUTERS_LIST:
           return {
               ...state,
               list:{
                   ...state.list,
                   computers:action.computers,

               }
           };
       case types.GET_PHONES_LIST:
           return {
               ...state,
               list:{
                   ...state.list,
                   phones:action.phones,

               }
           };
       case types.GET_OTHER_LIST:
           return {
               ...state,
               list:{
                   ...state.list,
                   other:action.other,

               }
           };



       // case types.GET_PHONES_LIST:
       //     return {
       //         ...state,
       //         list:{
       //             ...state.list,...action.list,
       //
       //         }
       //     };
       // case types.GET_OTHER_LIST:
       //     return {...state,other:action.other};
       default:
           return state
   }
}