import * as types from './actionsTypes';

export function loadCompanySuccess(data) {
  debugger;
  return {type: types.LOAD_COMPANY, data};
}
export function getCompany() {
  return (dispatch) => {
    debugger;
    var data = ['All','jate','mau','british'];
    dispatch(loadCompanySuccess(data));
  }
};
