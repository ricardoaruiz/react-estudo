export const COUNTER_ACTIONS = {
    COUNTER_INCREMENT: 'COUNTER_INCREMENT',
    COUNTER_DECREMENT: 'COUNTER_DECREMENT',
    STEP_CHANGED: 'STEP_CHANGED'
}

export const increment = () => {
    return {
        type: COUNTER_ACTIONS.COUNTER_INCREMENT
    }
}

export const decrement = () => {
    return {
        type: COUNTER_ACTIONS.COUNTER_DECREMENT
    }
}

export const stepChanged = event => {
    return {
        type: COUNTER_ACTIONS.STEP_CHANGED,
        payload: event.target.value
    }
}