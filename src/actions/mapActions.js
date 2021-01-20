import API from "../api";

export const getMapMarkerData = () => {
    return async (dispatch) => {
        let sampleData = await API.get('posts');
        setTimeout(() => {
            let lineSeries = [{
                "multiGeoLine": [
                  [
                    { "latitude": 48.856614, "longitude": 2.352222 },
                    { "latitude": 40.712775, "longitude": -74.005973 },
                    { "latitude": 49.282729, "longitude": -123.120738 }
                  ]
                ]
              }];
              let imageSeries = [{
                "latitude": 48.856614,
                "longitude": 2.352222,
                "title": "Paris"
              }, {
                "latitude": 40.712775,
                "longitude": -74.005973,
                "title": "New York"
              }, {
                "latitude": 49.282729,
                "longitude": -123.120738,
                "title": "Vancouver"
              }]; 
            dispatch({type: 'GET_MAP_MARKERS_SUCCESS', markers: {lineSeries, imageSeries, sampleData}})
        }, 5000);
    };
}