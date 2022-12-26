const initialState = {
    modalOpen: "",
};

const global = (state = initialState, action) => {
    switch (action.type) {

        case "MODAL_OPEN":
            return { ...state, modalOpen: action.payload };

        default:
            return state;
    }
};

export default global;