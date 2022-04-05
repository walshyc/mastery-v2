const AppReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ENTRIES':
            return {
                ...state,
                entries: action.payload,
                loading: false,
            };
        case 'GET_RANKINGS':
            return {
                ...state,
                worldRankings: action.payload,
                loading: false,
            };
        case 'GET_COMBINED':
            return {
                ...state,
                combined: action.payload,
                loading: false,
            };
        case 'GET_TEAMS':
            return {
                ...state,
                picks: action.payload,
                loading: false,
            };
        case 'GET_LEADERBOARD':
            return {
                ...state,
                scores: action.payload,
                loading: false,
            };

        default:
            return {
                ...state,
            };
    }
};
export default AppReducer;
