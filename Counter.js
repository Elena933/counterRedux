import {Button} from "@mui/material";
import {connect} from "react-redux";



const Counter = (props) => {
    return (
        <div>

            <Button onClick={() => props.plus(props.counter.id)} variant="contained">Plus</Button>
            {props.counter.value}
            <Button onClick={() => props.minus(props.counter.id)} variant="contained">Minus</Button>
            <Button onClick={() => props.reset(props.counter.id)} variant="contained">Reset</Button>
            <Button onClick={() => props.delete_counter(props.counter.id)} variant="contained">X</Button>
            <Button onClick={() => props.moveUp(props.counter.id)} variant="contained">↑</Button>
            <Button onClick={() => props.moveDown(props.counter.id)} variant="contained">↓</Button>

        </div>
    )
}

    const mapDispatchToProps = dispatch => ({
        moveUp: (id) => dispatch({type: 'MOVE_UP', payload: id}),
        moveDown: (id) => dispatch({type: 'MOVE_DOWN', payload: id}),
        plus: (id) => dispatch({type: 'PLUS', payload: id}),
        minus: (id) => dispatch({type: 'MINUS', payload: id}),
        reset: (id) => dispatch({type: 'RESET', payload: id}),
        delete_counter: (id) => dispatch({type: 'DELETE', payload: id}),

    })


export default connect(null, mapDispatchToProps)(Counter);