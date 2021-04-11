import { connect } from "react-redux";
import {List} from './../components'



export const mapStateToProps = state => {
  return {
    state : state
  };
};

const mapDispatchToProps = dispatch => {
  return {
   
  }
};

const ListContainer = connect(mapStateToProps,mapDispatchToProps)(
    List
);

export default ListContainer;
