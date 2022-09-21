const initialSate = {
    counters: [
        {id: '1', value: 1, weight: 1},
        {id: '2', value: 2, weight: 2},
        {id: '3', value: 3, weight: 3}]
}

export const reducers = (state = initialSate, action) => {
    if (action.type === 'DELETE') {
        return {
            ...state,
            counters: state.counters.filter(el => el.id !== action.payload)
        }
    }
    if (action.type === 'RESET') {
        return {
            ...state,
            counters: state.counters.map(el => el.id === action.payload ?
                {...el, value: 0} : el)
        }
    }

    if (action.type === 'PLUS') {
        return {
            ...state,
            counters: state.counters.map(el => el.id === action.payload ?
                {...el, value: el.value + 1} : el)
        }
    }
    if (action.type === 'MINUS') {
        return {
            ...state,
            counters: state.counters.map(el => el.id === action.payload ?
                {...el, value: el.value - 1} : el)
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counters: [...state.counters,
                {
                    id: Math.random(),
                    value: 0,
                    weight:  Math.max(...state.counters.map(el => el.weight)) + 1
                }]
        }
    }
    if (action.type === 'MOVE_UP') {
        return {
            ...state,
            counters: state.counters.map(el => el.id === action.payload ?
                {...el, weight: state.counters.filter(el => el.id === action.payload)[0].weight + 1} : el)
                .map(el => el.id !== action.payload &&
                el.weight === state.counters.filter(el => el.id === action.payload)[0].weight + 1 ?
                    {...el, weight: el.weight - 1} : el)
        }

    }
    if (action.type === 'MOVE_DOWN') {
        return {
            ...state,
            counters: state.counters.map(el => el.id === action.payload ?
                {...el, weight: state.counters.filter(el => el.id === action.payload)[0].weight - 1} : el)
                .map(el => el.id !== action.payload &&
                el.weight === state.counters.filter(el => el.id === action.payload)[0].weight - 1 ?
                    {...el, weight: el.weight + 1} : el)
        }

    }
    return state
}