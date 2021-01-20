import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

am4core.useTheme(am4themes_animated);

class MapComponent extends React.Component {

  componentDidMount() {
    this.setInitialMap();
    // this.getMapMarkerData();
  }

  setInitialMap() {
    let map = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    map.geodata = am4geodata_worldLow;

    // Set projection
    map.projection = new am4maps.projections.Miller();

    // Create map polygon series
    var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    map.zoomControl = new am4maps.ZoomControl();
    map.zoomControl.showTooltipOn = 'always';

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#74B266");

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    // Remove Antarctica
    polygonSeries.exclude = ["AQ"];

    // Add some data
    polygonSeries.data = [{
      "id": "US",
      "name": "United States",
      "value": 100,
      "fill": am4core.color("#F05C5C")
    }, {
      "id": "FR",
      "name": "France",
      "value": 50,
      "fill": am4core.color("#5C5CFF")
    }];

    // Bind "fill" property to "fill" key in data
    polygonTemplate.propertyFields.fill = "fill";

    // Add line series
    var lineSeries = map.series.push(new am4maps.MapLineSeries());
    // lineSeries.data = [{
    //   "multiGeoLine": [
    //     [
    //       { "latitude": 48.856614, "longitude": 2.352222 },
    //       { "latitude": 40.712775, "longitude": -74.005973 },
    //       { "latitude": 49.282729, "longitude": -123.120738 }
    //     ]
    //   ]
    // }];
    this.lineSeries = lineSeries;

    // Create image series
    var imageSeries = map.series.push(new am4maps.MapImageSeries());
    this.imageSeries = imageSeries;

    // Create a circle image in image series template so it gets replicated to all new images
    var imageSeriesTemplate = imageSeries.mapImages.template;
    var circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("#B27799");
    circle.stroke = am4core.color("#FFFFFF");
    circle.strokeWidth = 2;
    circle.nonScaling = true;
    circle.tooltipText = "{title}";

    // Set property fields
    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";
    imageSeriesTemplate.propertyFields.showTooltipOn = "always";

    // Add data for the three cities
    // imageSeries.data = [{
    //   "latitude": 48.856614,
    //   "longitude": 2.352222,
    //   "title": "Paris"
    // }, {
    //   "latitude": 40.712775,
    //   "longitude": -74.005973,
    //   "title": "New York"
    // }, {
    //   "latitude": 49.282729,
    //   "longitude": -123.120738,
    //   "title": "Vancouver"
    // }];

    this.map = map;
  }

  getMapMarkerData() {
    this.props.getMapMarkerData();
  }

  componentDidUpdate(oldprops) {
    if(this.lineSeries && this.props.markers !== oldprops.markers) {
      this.lineSeries.data = this.props.markers.lineSeries;
      this.imageSeries.data = this.props.markers.imageSeries;
      alert(JSON.stringify(this.props.markers.sampleData));
    }
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}

export default MapComponent;
