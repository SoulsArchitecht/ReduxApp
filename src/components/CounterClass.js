import { Component } from "react";
import * as actions from '../actions';
import {connect} from 'react-redux';


class CounterClass extends Component {
    render() {
        const {counter, inc, dec, rnd} = this.props;
        return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>  
        )
    }
}

const mapStateToProps = (state) => {
    return {
      counter: state.value,
      something: state.foo
    }
}

export default connect(mapStateToProps, actions)(CounterClass);
  