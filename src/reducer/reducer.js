
const initialState = {
    user: {
        name: "",
        password: "",
        email: "",
        id: "",
        phone: "",
        _id: ""
    }
}

console.log(initialState, "initialState");

const userReducer = (state = initialState, action) => {
    console.log(action, "action");
    switch (action.type) {
        case 'USER':
            return { ...state, user: action.user }

        default:
            return state
    }

}

export default userReducer;