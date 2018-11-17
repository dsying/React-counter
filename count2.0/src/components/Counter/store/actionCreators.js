import counterAction from './actionType'

const counterIncrement = (counterCaption) => {
    return {
        type: counterAction.INCREMENT,
        caption: counterCaption
    }
}

const counterDecrement = (counterCaption) => {
    return {
        type: counterAction.DECREMENT,
        caption: counterCaption
    }
}

export { counterIncrement, counterDecrement }