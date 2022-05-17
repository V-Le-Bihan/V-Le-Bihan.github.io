var size = 0;
var placement = 'point';

var style_stations_vig_28 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#ff0000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("STATION") !== null) {
        labelText = String(feature.get("STATION"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}), fill: new ol.style.Fill({color: 'rgba(164,113,88,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
