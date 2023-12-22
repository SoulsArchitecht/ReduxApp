import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, rnd, something}) => {
    return (    
      <div className="jumbotron">
        <h1>{counter}{something}</h1>
        <button onClick={dec} className="btn btn-primary">DEC</button>
        <button onClick={inc} className="btn btn-primary">INC</button>
        <button onClick={rnd} className="btn btn-primary">RND</button>
      </div>        
    )
}

const mapStateToProps = (state) => {
  return {
    counter: state.value,
    something: state.foo
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     //inc: () => dispatch({type: 'INC'})
//     inc: () => dispatch(inc()),
//     dec: () => dispatch(dec()),
//     rnd: () => {
//       const value = Math.floor(Math.random() * 10);
//       dispatch(rnd(value))
//     } 
//   }
// }


// код дальше тоже сокращается:
// const mapDispatchToProps = (dispatch) => {
  
//   const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
//   return {
//     inc,
//     dec,
//     rnd     
//   }
// }


// следующее тоже сокращается:
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default connect(mapStateToProps, actions) (Counter);