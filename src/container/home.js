import React from 'react';
import { getMapMarkerData } from '../actions/mapActions';
import { connect } from 'react-redux';
import MapComponent from '../components/mapComponent';

class Home extends React.Component {

  componentDidMount() {
    this.props.getMapMarkerData();
  }

  render() {
    return (
      <MapComponent
        getMapMarkerData={this.props.getMapMarkerData}
        markers={this.props.markers}/>
    );
  }
}

const mapState = state => {
  return{
    markers: state.mapData.markers
  }
};

const mapDispatch = {
  getMapMarkerData
}

export default connect(
  mapState,
  mapDispatch
)(Home);
