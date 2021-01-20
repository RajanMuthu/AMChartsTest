export default function mapData(state = [], action) {
    switch (action.type) {
      case 'GET_MAP_MARKERS_SUCCESS':
        return Object.assign({}, state, {markers: action.markers});
      default:
        return state;
    }
  }