import './App.css';
import {connect} from "react-redux";
import Counters from "./Counters";



function App(props) {
    return (

        <div>
            <div className='Counter'>

                <Counters counters={props.counters} />


            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    counters: state.counters
})


export default connect(mapStateToProps)(App);
