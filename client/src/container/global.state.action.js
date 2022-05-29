import { connect } from "react-redux";
import { fetchCollections } from "../actions/collections";
import { setDataDashBoard } from "../actions/dashboard";
import { setCart } from "../actions/cart";
import { setUser } from "../actions/auth";
export default function globalStateAndAction(name) {
  const mapStateToProps = (state) => {
    return {
      collections: state.collections.list,
      pagination: state.pagination.page,
      cart: state.cart,
      user: state.user,
      listDashBoard: state.admin.listDashBoard,
    };
  };

  const mapActionToProps = (dispatch) => ({
    fetchCollections: (endpoint) => dispatch(fetchCollections(endpoint)),
    setCart: (count, store, totalPrice) =>
      dispatch(setCart(count, store, totalPrice)),
    setUser: (payload) => dispatch(setUser(payload)),
    setDataDashBoard: (payload) => dispatch(setDataDashBoard(payload)),
  });
  return connect(mapStateToProps, mapActionToProps)(name);
}
