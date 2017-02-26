var courseApp = angular.module("courseApp", []);
courseApp.controller("mapController", function (mapService) {
    this.initialize = function () {
        mapService.load()
    }
});

courseApp.service('mapService', function () {
    return {
        pointsSource: new ol.source.Vector({
            features: []
        }),
        load: function () {
            var map = new ol.Map({
                target: 'map',
                layers: [
                  new ol.layer.Tile({
                      source: new ol.source.OSM()
                  }),
                  new ol.layer.Vector({
                      source: this.pointsSource
                  })
                ],
                view: new ol.View({
                    center: ol.proj.fromLonLat([37.41, 8.82]),
                    zoom: 4
                })
            });
            
        },
    }

})