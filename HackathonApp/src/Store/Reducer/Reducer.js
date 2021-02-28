const INITIAL_STATE = {
    forcheck: '',
    NewSignUP: [],
}

export default (state = INITIAL_STATE, action) => {
    console.log("state==>", state)
    // console.log("action2==>", action)
    switch (action.type) {
        // case "setData":
        //     return ({
        //         ...state,
        //         name: [...state.name, action.payload]
        //     })

        case "forcheck":
            return ({
                ...state,
                forcheck: action.payload
            })
        case "register1":
            return ({
                ...state,
                NewSignUP: action.payload
            })
        case "registerdone":
            return ({
                ...state,
                NewSignUP: [...state.NewSignUP, action.payload]
            })
        default:
            return state;
    }

}