import React from 'react';
import {connect} from "react-redux";
import Counter from "./Counter";

function Counters(props) {
    return (
        <div>
            {props.counters.sort((a, b) => b.weight - a.weight).map((counter, index) =>
                <Counter
                    counters={props.counters}
                    isLast={index === props.counters.length - 1}
                    isFirst={index === 0}
                    index={index}
                    counter={counter}
                    key={counter.id}
                    plus={props.plus}
                    minus={props.minus}
                    moveUp={props.moveUp}
                    moveDawn={props.moveDawn}
                    reset={props.reset}
                    delete_counter={props.delete_counter}/>)}
            <button onClick={props.addCounter}>Add Counter</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({

    addCounter: (id) => dispatch({type: 'ADD_COUNTER', payload: id}),


})
const mapStateToProps = state => (
    {
        counters: state.counters
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Counters);