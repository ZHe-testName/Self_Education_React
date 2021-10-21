import { useReducer } from 'react';
import c from './advanced_counter.module.css';

const INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    CHANGE_COLOR = 'CHANGE_COLOR';

const colorsArr = [
    'tomato',
    'brown',
    'chocolate',
    'cornflowerblue'
];

const initialState = {
    count: 0,
    color: 0,
};

function reducer(state, action) {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };

        case CHANGE_COLOR:
            return {
                ...state,
                color: action.payload,
            };
        
        default:
            throw new Error('Unknown action')
    };
};

function AdvancedCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const style = {
        color: colorsArr[state.color],
    };

    return (
        <div className={c.advanced}>
            <h2
                style={style}>
                {`Нажато ${state.count} раз`}
            </h2>

            <div>
                <button
                    onClick={() => dispatch({type: INCREMENT})}>+</button>

                <button
                    onClick={() => dispatch({type: DECREMENT})}>-</button>
            </div>

            <button
                onClick={() => dispatch({
                                            type: CHANGE_COLOR, 
                                            payload: (state.color >= colorsArr.length ? 0 : state.color + 1)})}>Поменять цвет</button>
        </div>
    );
};

export default AdvancedCounter;