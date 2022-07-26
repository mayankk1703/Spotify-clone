export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:"BQCuU0bu-rMQz7saQod5mfqiUauyymgDygP3Hke_vJ53bxc4mlDOUFq7ZbVi1hEll64jsI-4K1BPv0dE2ZmeH1kXlUq6C8y20yEl0sVysCuagg8kZIVfHCCOiPVkNBxawdkvmeuq82QxisWt1-PUU4iTw6-8KE-No_tlNOHTQ44HlkrCDnxTwKbPHoeM38RzAzI99j_mLSC2rlvhe7w3",
    // set token to null after completing project
    // token:null
};
const reducer=(state,action)=>{
    switch(action.type){
        
        case('SET_USER'):
            return{
                ...state,
                user:action.user,
            };
        case('SET_TOKEN'):
        return {
            ...state,
            token:action.token,
        };
        default:
            return state;
    }
};
 export default reducer;