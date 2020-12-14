export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    // We have to change it deployment time
    // token: 'BQCLiT86bUzw8L-a4MkEHT2O4UdBGwBo6X4DY8_fyLXs5NfbM4gp1UFhW3LPV-No9_jL4YjZgac_EmEHh8MgNPRNrrum0kmCQS-O1hLNY9a6Hj0BTYULfRJD1DJFm8gSaDYKaVQ0bQmOiJCcvfhZ9lowR5qWNaV-Uw4omRvW4qLbBUcwDD9p',
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
             return {
                 ...state,
                 user: action.user,
             };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }    
            
        case 'SET_PLAYLISTS' : 
            return {
                ...state,
                playlists: action.playlists,
            }    
             
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }    
        default:
                return state;
    }
}

export default reducer;