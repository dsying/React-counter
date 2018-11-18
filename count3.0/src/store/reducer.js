import {actionType} from '../components/Counter/store'
const initState = {
    'First': 0,
    'Second': 10,
    'Third': 20
}

const reducer = (state = initState, action) => {
    const { type, caption } = action
    switch (type) {
        case actionType.INCREMENT:
            return {...state,[caption]:state[caption] + 1}  
        case actionType.DECREMENT:
            return {...state,[caption]:state[caption] - 1}  
        default:
            return state
    }
}

export default reducer