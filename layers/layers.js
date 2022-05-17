var wms_layers = [];

var format_ZICH_M711241010_5000_0 = new ol.format.GeoJSON();
var features_ZICH_M711241010_5000_0 = format_ZICH_M711241010_5000_0.readFeatures(json_ZICH_M711241010_5000_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M711241010_5000_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M711241010_5000_0.addFeatures(features_ZICH_M711241010_5000_0);
var lyr_ZICH_M711241010_5000_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M711241010_5000_0, 
                style: style_ZICH_M711241010_5000_0,
                interactive: true,
    title: 'ZICH_M711241010_5000<br />\
    <img src="styles/legend/ZICH_M711241010_5000_0_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_5000_0_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M711241010_5000_0_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_5000_0_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M711241010_5000_0_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M711241010_4700_1 = new ol.format.GeoJSON();
var features_ZICH_M711241010_4700_1 = format_ZICH_M711241010_4700_1.readFeatures(json_ZICH_M711241010_4700_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M711241010_4700_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M711241010_4700_1.addFeatures(features_ZICH_M711241010_4700_1);
var lyr_ZICH_M711241010_4700_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M711241010_4700_1, 
                style: style_ZICH_M711241010_4700_1,
                interactive: true,
    title: 'ZICH_M711241010_4700<br />\
    <img src="styles/legend/ZICH_M711241010_4700_1_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_4700_1_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M711241010_4700_1_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_4700_1_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M711241010_4700_1_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M711241010_4200_2 = new ol.format.GeoJSON();
var features_ZICH_M711241010_4200_2 = format_ZICH_M711241010_4200_2.readFeatures(json_ZICH_M711241010_4200_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M711241010_4200_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M711241010_4200_2.addFeatures(features_ZICH_M711241010_4200_2);
var lyr_ZICH_M711241010_4200_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M711241010_4200_2, 
                style: style_ZICH_M711241010_4200_2,
                interactive: true,
    title: 'ZICH_M711241010_4200<br />\
    <img src="styles/legend/ZICH_M711241010_4200_2_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_4200_2_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M711241010_4200_2_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_4200_2_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M711241010_4200_2_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M711241010_3900_3 = new ol.format.GeoJSON();
var features_ZICH_M711241010_3900_3 = format_ZICH_M711241010_3900_3.readFeatures(json_ZICH_M711241010_3900_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M711241010_3900_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M711241010_3900_3.addFeatures(features_ZICH_M711241010_3900_3);
var lyr_ZICH_M711241010_3900_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M711241010_3900_3, 
                style: style_ZICH_M711241010_3900_3,
                interactive: true,
    title: 'ZICH_M711241010_3900<br />\
    <img src="styles/legend/ZICH_M711241010_3900_3_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_3900_3_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M711241010_3900_3_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_3900_3_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M711241010_3900_3_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M711241010_3100_4 = new ol.format.GeoJSON();
var features_ZICH_M711241010_3100_4 = format_ZICH_M711241010_3100_4.readFeatures(json_ZICH_M711241010_3100_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M711241010_3100_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M711241010_3100_4.addFeatures(features_ZICH_M711241010_3100_4);
var lyr_ZICH_M711241010_3100_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M711241010_3100_4, 
                style: style_ZICH_M711241010_3100_4,
                interactive: true,
    title: 'ZICH_M711241010_3100<br />\
    <img src="styles/legend/ZICH_M711241010_3100_4_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_3100_4_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M711241010_3100_4_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_3100_4_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M711241010_3100_4_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M711241010_2900_5 = new ol.format.GeoJSON();
var features_ZICH_M711241010_2900_5 = format_ZICH_M711241010_2900_5.readFeatures(json_ZICH_M711241010_2900_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M711241010_2900_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M711241010_2900_5.addFeatures(features_ZICH_M711241010_2900_5);
var lyr_ZICH_M711241010_2900_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M711241010_2900_5, 
                style: style_ZICH_M711241010_2900_5,
                interactive: true,
    title: 'ZICH_M711241010_2900<br />\
    <img src="styles/legend/ZICH_M711241010_2900_5_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_2900_5_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M711241010_2900_5_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_2900_5_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M711241010_2900_5_4.png" /> sup. à 2 m<br />'
        });
var format_points_atlas_Tiffauges_6 = new ol.format.GeoJSON();
var features_points_atlas_Tiffauges_6 = format_points_atlas_Tiffauges_6.readFeatures(json_points_atlas_Tiffauges_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_atlas_Tiffauges_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_atlas_Tiffauges_6.addFeatures(features_points_atlas_Tiffauges_6);
var lyr_points_atlas_Tiffauges_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_points_atlas_Tiffauges_6, 
                style: style_points_atlas_Tiffauges_6,
                interactive: true,
                title: '<img src="styles/legend/points_atlas_Tiffauges_6.png" /> points_atlas_Tiffauges'
            });
var format_ZICH_M750242010_3800_7 = new ol.format.GeoJSON();
var features_ZICH_M750242010_3800_7 = format_ZICH_M750242010_3800_7.readFeatures(json_ZICH_M750242010_3800_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M750242010_3800_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M750242010_3800_7.addFeatures(features_ZICH_M750242010_3800_7);
var lyr_ZICH_M750242010_3800_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M750242010_3800_7, 
                style: style_ZICH_M750242010_3800_7,
                interactive: true,
    title: 'ZICH_M750242010_3800<br />\
    <img src="styles/legend/ZICH_M750242010_3800_7_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M750242010_3800_7_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M750242010_3800_7_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M750242010_3800_7_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M750242010_3800_7_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M750242010_3500_8 = new ol.format.GeoJSON();
var features_ZICH_M750242010_3500_8 = format_ZICH_M750242010_3500_8.readFeatures(json_ZICH_M750242010_3500_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M750242010_3500_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M750242010_3500_8.addFeatures(features_ZICH_M750242010_3500_8);
var lyr_ZICH_M750242010_3500_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M750242010_3500_8, 
                style: style_ZICH_M750242010_3500_8,
                interactive: true,
    title: 'ZICH_M750242010_3500<br />\
    <img src="styles/legend/ZICH_M750242010_3500_8_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M750242010_3500_8_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M750242010_3500_8_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M750242010_3500_8_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M750242010_3500_8_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M750242010_3100_9 = new ol.format.GeoJSON();
var features_ZICH_M750242010_3100_9 = format_ZICH_M750242010_3100_9.readFeatures(json_ZICH_M750242010_3100_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M750242010_3100_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M750242010_3100_9.addFeatures(features_ZICH_M750242010_3100_9);
var lyr_ZICH_M750242010_3100_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M750242010_3100_9, 
                style: style_ZICH_M750242010_3100_9,
                interactive: true,
    title: 'ZICH_M750242010_3100<br />\
    <img src="styles/legend/ZICH_M750242010_3100_9_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M750242010_3100_9_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M750242010_3100_9_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M750242010_3100_9_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M750242010_3100_9_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M750242010_2800_10 = new ol.format.GeoJSON();
var features_ZICH_M750242010_2800_10 = format_ZICH_M750242010_2800_10.readFeatures(json_ZICH_M750242010_2800_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M750242010_2800_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M750242010_2800_10.addFeatures(features_ZICH_M750242010_2800_10);
var lyr_ZICH_M750242010_2800_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M750242010_2800_10, 
                style: style_ZICH_M750242010_2800_10,
                interactive: true,
    title: 'ZICH_M750242010_2800<br />\
    <img src="styles/legend/ZICH_M750242010_2800_10_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M750242010_2800_10_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M750242010_2800_10_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M750242010_2800_10_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M750242010_2800_10_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M750242010_2000_11 = new ol.format.GeoJSON();
var features_ZICH_M750242010_2000_11 = format_ZICH_M750242010_2000_11.readFeatures(json_ZICH_M750242010_2000_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M750242010_2000_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M750242010_2000_11.addFeatures(features_ZICH_M750242010_2000_11);
var lyr_ZICH_M750242010_2000_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M750242010_2000_11, 
                style: style_ZICH_M750242010_2000_11,
                interactive: true,
    title: 'ZICH_M750242010_2000<br />\
    <img src="styles/legend/ZICH_M750242010_2000_11_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M750242010_2000_11_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M750242010_2000_11_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M750242010_2000_11_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M750242010_2000_11_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M750242010_1400_12 = new ol.format.GeoJSON();
var features_ZICH_M750242010_1400_12 = format_ZICH_M750242010_1400_12.readFeatures(json_ZICH_M750242010_1400_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M750242010_1400_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M750242010_1400_12.addFeatures(features_ZICH_M750242010_1400_12);
var lyr_ZICH_M750242010_1400_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M750242010_1400_12, 
                style: style_ZICH_M750242010_1400_12,
                interactive: true,
    title: 'ZICH_M750242010_1400<br />\
    <img src="styles/legend/ZICH_M750242010_1400_12_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M750242010_1400_12_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M750242010_1400_12_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M750242010_1400_12_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M750242010_1400_12_4.png" /> sup. à 2 m<br />'
        });
var format_points_atlas_Vertou_13 = new ol.format.GeoJSON();
var features_points_atlas_Vertou_13 = format_points_atlas_Vertou_13.readFeatures(json_points_atlas_Vertou_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_atlas_Vertou_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_atlas_Vertou_13.addFeatures(features_points_atlas_Vertou_13);
var lyr_points_atlas_Vertou_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_points_atlas_Vertou_13, 
                style: style_points_atlas_Vertou_13,
                interactive: true,
                title: '<img src="styles/legend/points_atlas_Vertou_13.png" /> points_atlas_Vertou'
            });
var format_ZICH_M730242010_4700_14 = new ol.format.GeoJSON();
var features_ZICH_M730242010_4700_14 = format_ZICH_M730242010_4700_14.readFeatures(json_ZICH_M730242010_4700_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M730242010_4700_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M730242010_4700_14.addFeatures(features_ZICH_M730242010_4700_14);
var lyr_ZICH_M730242010_4700_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M730242010_4700_14, 
                style: style_ZICH_M730242010_4700_14,
                interactive: true,
    title: 'ZICH_M730242010_4700<br />\
    <img src="styles/legend/ZICH_M730242010_4700_14_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M730242010_4700_14_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M730242010_4700_14_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M730242010_4700_14_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M730242010_4700_14_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M730242010_4400_15 = new ol.format.GeoJSON();
var features_ZICH_M730242010_4400_15 = format_ZICH_M730242010_4400_15.readFeatures(json_ZICH_M730242010_4400_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M730242010_4400_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M730242010_4400_15.addFeatures(features_ZICH_M730242010_4400_15);
var lyr_ZICH_M730242010_4400_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M730242010_4400_15, 
                style: style_ZICH_M730242010_4400_15,
                interactive: true,
    title: 'ZICH_M730242010_4400<br />\
    <img src="styles/legend/ZICH_M730242010_4400_15_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M730242010_4400_15_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M730242010_4400_15_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M730242010_4400_15_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M730242010_4400_15_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M730242010_3900_16 = new ol.format.GeoJSON();
var features_ZICH_M730242010_3900_16 = format_ZICH_M730242010_3900_16.readFeatures(json_ZICH_M730242010_3900_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M730242010_3900_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M730242010_3900_16.addFeatures(features_ZICH_M730242010_3900_16);
var lyr_ZICH_M730242010_3900_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M730242010_3900_16, 
                style: style_ZICH_M730242010_3900_16,
                interactive: true,
    title: 'ZICH_M730242010_3900<br />\
    <img src="styles/legend/ZICH_M730242010_3900_16_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M730242010_3900_16_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M730242010_3900_16_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M730242010_3900_16_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M730242010_3900_16_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M730242010_2700_17 = new ol.format.GeoJSON();
var features_ZICH_M730242010_2700_17 = format_ZICH_M730242010_2700_17.readFeatures(json_ZICH_M730242010_2700_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M730242010_2700_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M730242010_2700_17.addFeatures(features_ZICH_M730242010_2700_17);
var lyr_ZICH_M730242010_2700_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M730242010_2700_17, 
                style: style_ZICH_M730242010_2700_17,
                interactive: true,
    title: 'ZICH_M730242010_2700<br />\
    <img src="styles/legend/ZICH_M730242010_2700_17_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M730242010_2700_17_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M730242010_2700_17_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M730242010_2700_17_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M730242010_2700_17_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M730242010_2400_18 = new ol.format.GeoJSON();
var features_ZICH_M730242010_2400_18 = format_ZICH_M730242010_2400_18.readFeatures(json_ZICH_M730242010_2400_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M730242010_2400_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M730242010_2400_18.addFeatures(features_ZICH_M730242010_2400_18);
var lyr_ZICH_M730242010_2400_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M730242010_2400_18, 
                style: style_ZICH_M730242010_2400_18,
                interactive: true,
    title: 'ZICH_M730242010_2400<br />\
    <img src="styles/legend/ZICH_M730242010_2400_18_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M730242010_2400_18_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M730242010_2400_18_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M730242010_2400_18_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M730242010_2400_18_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M730242010_1600_19 = new ol.format.GeoJSON();
var features_ZICH_M730242010_1600_19 = format_ZICH_M730242010_1600_19.readFeatures(json_ZICH_M730242010_1600_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M730242010_1600_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M730242010_1600_19.addFeatures(features_ZICH_M730242010_1600_19);
var lyr_ZICH_M730242010_1600_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M730242010_1600_19, 
                style: style_ZICH_M730242010_1600_19,
                interactive: true,
    title: 'ZICH_M730242010_1600<br />\
    <img src="styles/legend/ZICH_M730242010_1600_19_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M730242010_1600_19_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M730242010_1600_19_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M730242010_1600_19_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M730242010_1600_19_4.png" /> sup. à 2 m<br />'
        });
var format_points_atlas_Clisson_20 = new ol.format.GeoJSON();
var features_points_atlas_Clisson_20 = format_points_atlas_Clisson_20.readFeatures(json_points_atlas_Clisson_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_atlas_Clisson_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_atlas_Clisson_20.addFeatures(features_points_atlas_Clisson_20);
var lyr_points_atlas_Clisson_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_points_atlas_Clisson_20, 
                style: style_points_atlas_Clisson_20,
                interactive: true,
                title: '<img src="styles/legend/points_atlas_Clisson_20.png" /> points_atlas_Clisson'
            });
var format_ZICH_M711241010_5000_21 = new ol.format.GeoJSON();
var features_ZICH_M711241010_5000_21 = format_ZICH_M711241010_5000_21.readFeatures(json_ZICH_M711241010_5000_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M711241010_5000_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M711241010_5000_21.addFeatures(features_ZICH_M711241010_5000_21);
var lyr_ZICH_M711241010_5000_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M711241010_5000_21, 
                style: style_ZICH_M711241010_5000_21,
                interactive: true,
    title: 'ZICH_M711241010_5000<br />\
    <img src="styles/legend/ZICH_M711241010_5000_21_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_5000_21_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M711241010_5000_21_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_5000_21_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M711241010_5000_21_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M711241010_4700_22 = new ol.format.GeoJSON();
var features_ZICH_M711241010_4700_22 = format_ZICH_M711241010_4700_22.readFeatures(json_ZICH_M711241010_4700_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M711241010_4700_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M711241010_4700_22.addFeatures(features_ZICH_M711241010_4700_22);
var lyr_ZICH_M711241010_4700_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M711241010_4700_22, 
                style: style_ZICH_M711241010_4700_22,
                interactive: true,
    title: 'ZICH_M711241010_4700<br />\
    <img src="styles/legend/ZICH_M711241010_4700_22_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_4700_22_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M711241010_4700_22_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_4700_22_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M711241010_4700_22_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M711241010_4200_23 = new ol.format.GeoJSON();
var features_ZICH_M711241010_4200_23 = format_ZICH_M711241010_4200_23.readFeatures(json_ZICH_M711241010_4200_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M711241010_4200_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M711241010_4200_23.addFeatures(features_ZICH_M711241010_4200_23);
var lyr_ZICH_M711241010_4200_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M711241010_4200_23, 
                style: style_ZICH_M711241010_4200_23,
                interactive: true,
    title: 'ZICH_M711241010_4200<br />\
    <img src="styles/legend/ZICH_M711241010_4200_23_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_4200_23_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M711241010_4200_23_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_4200_23_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M711241010_4200_23_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M711241010_3900_24 = new ol.format.GeoJSON();
var features_ZICH_M711241010_3900_24 = format_ZICH_M711241010_3900_24.readFeatures(json_ZICH_M711241010_3900_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M711241010_3900_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M711241010_3900_24.addFeatures(features_ZICH_M711241010_3900_24);
var lyr_ZICH_M711241010_3900_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M711241010_3900_24, 
                style: style_ZICH_M711241010_3900_24,
                interactive: true,
    title: 'ZICH_M711241010_3900<br />\
    <img src="styles/legend/ZICH_M711241010_3900_24_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_3900_24_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M711241010_3900_24_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_3900_24_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M711241010_3900_24_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M711241010_3100_25 = new ol.format.GeoJSON();
var features_ZICH_M711241010_3100_25 = format_ZICH_M711241010_3100_25.readFeatures(json_ZICH_M711241010_3100_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M711241010_3100_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M711241010_3100_25.addFeatures(features_ZICH_M711241010_3100_25);
var lyr_ZICH_M711241010_3100_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M711241010_3100_25, 
                style: style_ZICH_M711241010_3100_25,
                interactive: true,
    title: 'ZICH_M711241010_3100<br />\
    <img src="styles/legend/ZICH_M711241010_3100_25_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_3100_25_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M711241010_3100_25_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_3100_25_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M711241010_3100_25_4.png" /> sup. à 2 m<br />'
        });
var format_ZICH_M711241010_2900_26 = new ol.format.GeoJSON();
var features_ZICH_M711241010_2900_26 = format_ZICH_M711241010_2900_26.readFeatures(json_ZICH_M711241010_2900_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZICH_M711241010_2900_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZICH_M711241010_2900_26.addFeatures(features_ZICH_M711241010_2900_26);
var lyr_ZICH_M711241010_2900_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZICH_M711241010_2900_26, 
                style: style_ZICH_M711241010_2900_26,
                interactive: true,
    title: 'ZICH_M711241010_2900<br />\
    <img src="styles/legend/ZICH_M711241010_2900_26_0.png" /> 0 à 0,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_2900_26_1.png" /> 0,50 à 1 m<br />\
    <img src="styles/legend/ZICH_M711241010_2900_26_2.png" /> 1 à 1,50 m<br />\
    <img src="styles/legend/ZICH_M711241010_2900_26_3.png" /> 1,50 à 2 m<br />\
    <img src="styles/legend/ZICH_M711241010_2900_26_4.png" /> sup. à 2 m<br />'
        });
var format_points_atlas_Tiffauges_27 = new ol.format.GeoJSON();
var features_points_atlas_Tiffauges_27 = format_points_atlas_Tiffauges_27.readFeatures(json_points_atlas_Tiffauges_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_atlas_Tiffauges_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_atlas_Tiffauges_27.addFeatures(features_points_atlas_Tiffauges_27);
var lyr_points_atlas_Tiffauges_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_points_atlas_Tiffauges_27, 
                style: style_points_atlas_Tiffauges_27,
                interactive: true,
                title: '<img src="styles/legend/points_atlas_Tiffauges_27.png" /> points_atlas_Tiffauges'
            });
var format_stations_vig_28 = new ol.format.GeoJSON();
var features_stations_vig_28 = format_stations_vig_28.readFeatures(json_stations_vig_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stations_vig_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stations_vig_28.addFeatures(features_stations_vig_28);
var lyr_stations_vig_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stations_vig_28, 
                style: style_stations_vig_28,
                interactive: true,
                title: '<img src="styles/legend/stations_vig_28.png" /> stations_vig'
            });
var format_SvreNantaise_29 = new ol.format.GeoJSON();
var features_SvreNantaise_29 = format_SvreNantaise_29.readFeatures(json_SvreNantaise_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SvreNantaise_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SvreNantaise_29.addFeatures(features_SvreNantaise_29);
var lyr_SvreNantaise_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SvreNantaise_29, 
                style: style_SvreNantaise_29,
                interactive: true,
                title: '<img src="styles/legend/SvreNantaise_29.png" /> Sèvre Nantaise'
            });
var group_SvreNantaise = new ol.layer.Group({
                                layers: [lyr_ZICH_M750242010_3800_7,lyr_ZICH_M750242010_3500_8,lyr_ZICH_M750242010_3100_9,lyr_ZICH_M750242010_2800_10,lyr_ZICH_M750242010_2000_11,lyr_ZICH_M750242010_1400_12,lyr_points_atlas_Vertou_13,lyr_ZICH_M730242010_4700_14,lyr_ZICH_M730242010_4400_15,lyr_ZICH_M730242010_3900_16,lyr_ZICH_M730242010_2700_17,lyr_ZICH_M730242010_2400_18,lyr_ZICH_M730242010_1600_19,lyr_points_atlas_Clisson_20,lyr_ZICH_M711241010_5000_21,lyr_ZICH_M711241010_4700_22,lyr_ZICH_M711241010_4200_23,lyr_ZICH_M711241010_3900_24,lyr_ZICH_M711241010_3100_25,lyr_ZICH_M711241010_2900_26,lyr_points_atlas_Tiffauges_27,lyr_stations_vig_28,lyr_SvreNantaise_29,],
                                title: "Sèvre Nantaise"});
var group_TIFFAUGES = new ol.layer.Group({
                                layers: [lyr_ZICH_M711241010_5000_21,lyr_ZICH_M711241010_4700_22,lyr_ZICH_M711241010_4200_23,lyr_ZICH_M711241010_3900_24,lyr_ZICH_M711241010_3100_25,lyr_ZICH_M711241010_2900_26,lyr_points_atlas_Tiffauges_27,],
                                title: "TIFFAUGES"});

lyr_ZICH_M711241010_5000_0.setVisible(true);lyr_ZICH_M711241010_4700_1.setVisible(true);lyr_ZICH_M711241010_4200_2.setVisible(true);lyr_ZICH_M711241010_3900_3.setVisible(true);lyr_ZICH_M711241010_3100_4.setVisible(true);lyr_ZICH_M711241010_2900_5.setVisible(true);lyr_points_atlas_Tiffauges_6.setVisible(true);lyr_ZICH_M750242010_3800_7.setVisible(true);lyr_ZICH_M750242010_3500_8.setVisible(true);lyr_ZICH_M750242010_3100_9.setVisible(true);lyr_ZICH_M750242010_2800_10.setVisible(true);lyr_ZICH_M750242010_2000_11.setVisible(true);lyr_ZICH_M750242010_1400_12.setVisible(true);lyr_points_atlas_Vertou_13.setVisible(true);lyr_ZICH_M730242010_4700_14.setVisible(true);lyr_ZICH_M730242010_4400_15.setVisible(true);lyr_ZICH_M730242010_3900_16.setVisible(true);lyr_ZICH_M730242010_2700_17.setVisible(true);lyr_ZICH_M730242010_2400_18.setVisible(true);lyr_ZICH_M730242010_1600_19.setVisible(true);lyr_points_atlas_Clisson_20.setVisible(true);lyr_ZICH_M711241010_5000_21.setVisible(true);lyr_ZICH_M711241010_4700_22.setVisible(true);lyr_ZICH_M711241010_4200_23.setVisible(true);lyr_ZICH_M711241010_3900_24.setVisible(true);lyr_ZICH_M711241010_3100_25.setVisible(true);lyr_ZICH_M711241010_2900_26.setVisible(true);lyr_points_atlas_Tiffauges_27.setVisible(true);lyr_stations_vig_28.setVisible(true);lyr_SvreNantaise_29.setVisible(true);
var layersList = [group_TIFFAUGES,group_SvreNantaise];
lyr_ZICH_M711241010_5000_0.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M711241010_4700_1.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M711241010_4200_2.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M711241010_3900_3.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M711241010_3100_4.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M711241010_2900_5.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_points_atlas_Tiffauges_6.set('fieldAliases', {'gid': 'gid', 'cd_vig_tr': 'cd_vig_tr', 'lb_vig_tr': 'lb_vig_tr', 'id_vig_spc': 'id_vig_spc', 'distance': 'distance', 'angle': 'angle', });
lyr_ZICH_M750242010_3800_7.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M750242010_3500_8.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M750242010_3100_9.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M750242010_2800_10.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M750242010_2000_11.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M750242010_1400_12.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_points_atlas_Vertou_13.set('fieldAliases', {'gid': 'gid', 'cd_vig_tr': 'cd_vig_tr', 'lb_vig_tr': 'lb_vig_tr', 'id_vig_spc': 'id_vig_spc', 'distance': 'distance', 'angle': 'angle', });
lyr_ZICH_M730242010_4700_14.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M730242010_4400_15.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M730242010_3900_16.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M730242010_2700_17.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M730242010_2400_18.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M730242010_1600_19.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_points_atlas_Clisson_20.set('fieldAliases', {'gid': 'gid', 'cd_vig_tr': 'cd_vig_tr', 'lb_vig_tr': 'lb_vig_tr', 'id_vig_spc': 'id_vig_spc', 'distance': 'distance', 'angle': 'angle', });
lyr_ZICH_M711241010_5000_21.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M711241010_4700_22.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M711241010_4200_23.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M711241010_3900_24.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M711241010_3100_25.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_ZICH_M711241010_2900_26.set('fieldAliases', {'id_zichspc': 'id_zichspc', 'cd_typezon': 'cd_typezon', 'haut_min': 'haut_min', 'haut_max': 'haut_max', 'id_catalog': 'id_catalog', 'commentair': 'commentair', });
lyr_points_atlas_Tiffauges_27.set('fieldAliases', {'gid': 'gid', 'cd_vig_tr': 'cd_vig_tr', 'lb_vig_tr': 'lb_vig_tr', 'id_vig_spc': 'id_vig_spc', 'distance': 'distance', 'angle': 'angle', });
lyr_stations_vig_28.set('fieldAliases', {'CODE': 'CODE', 'Code_site': 'Code_site', 'Code_H3': 'Code_H3', 'STATION': 'STATION', 'LIEU_DIT': 'LIEU_DIT', 'RIVIERE': 'RIVIERE', 'Nom_BV': 'Nom_BV', 'DPT': 'DPT', 'Date_ouv': 'Date_ouv', 'COTE_0': 'COTE_0', 'Surface_BV': 'Surface_BV', 'Infra': 'Infra', 'Vigicrues': 'Vigicrues', 'JAUGEAGE': 'JAUGEAGE', 'Vigilance': 'Vigilance', 'Troncon_V': 'Troncon_V', 'Echeance_P': 'Echeance_P', 'VIGI_VJ': 'VIGI_VJ', 'VIGI_JJ': 'VIGI_JJ', 'VIGI_JO': 'VIGI_JO', 'VIGI_OO': 'VIGI_OO', 'VIGI_OR': 'VIGI_OR', 'VIGI_RR': 'VIGI_RR', 'Coliane': 'Coliane', 'Arr_etiage': 'Arr_etiage', 'Dep_etiage': 'Dep_etiage', 'Seuil_1': 'Seuil_1', 'Seuil_2': 'Seuil_2', 'Seuil_3': 'Seuil_3', 'Q2': 'Q2', 'Q5': 'Q5', 'Q10': 'Q10', 'Q20': 'Q20', 'Q50': 'Q50', 'Q100': 'Q100', 'Qmax': 'Qmax', 'Date_Qmax': 'Date_Qmax', 'Hmax': 'Hmax', 'Date_Hmax': 'Date_Hmax', 'T_R_pluie': 'T_R_pluie', 'Priorite_J': 'Priorite_J', 'jauge1_min': 'jauge1_min', 'jauge1_max': 'jauge1_max', 'jauge2_min': 'jauge2_min', 'jauge2_max': 'jauge2_max', 'H_Q10': 'H_Q10', 'Pole1': 'Pole1', 'Pole2': 'Pole2', 'Pole3': 'Pole3', 'Pole4': 'Pole4', 'Gest_Hydro': 'Gest_Hydro', 'Gest_Maint': 'Gest_Maint', 'Antenne': 'Antenne', 'Ref_previ': 'Ref_previ', 'ID_SHYREG': 'ID_SHYREG', 'Code_pre': 'Code_pre', 'Codep': 'Codep', 'Hydris': 'Hydris', 'Prepluie': 'Prepluie', 'Zap': 'Zap', 'Zone_sympo': 'Zone_sympo', 'Commentair': 'Commentair', });
lyr_SvreNantaise_29.set('fieldAliases', {'gid': 'gid', 'cd_vig_tr': 'cd_vig_tr', 'lb_vig_tr': 'lb_vig_tr', 'id_vig_spc': 'id_vig_spc', });
lyr_ZICH_M711241010_5000_0.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M711241010_4700_1.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M711241010_4200_2.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M711241010_3900_3.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M711241010_3100_4.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M711241010_2900_5.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_points_atlas_Tiffauges_6.set('fieldImages', {'gid': '', 'cd_vig_tr': '', 'lb_vig_tr': '', 'id_vig_spc': '', 'distance': '', 'angle': '', });
lyr_ZICH_M750242010_3800_7.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M750242010_3500_8.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M750242010_3100_9.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M750242010_2800_10.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M750242010_2000_11.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M750242010_1400_12.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_points_atlas_Vertou_13.set('fieldImages', {'gid': '', 'cd_vig_tr': '', 'lb_vig_tr': '', 'id_vig_spc': '', 'distance': '', 'angle': '', });
lyr_ZICH_M730242010_4700_14.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M730242010_4400_15.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M730242010_3900_16.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M730242010_2700_17.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M730242010_2400_18.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M730242010_1600_19.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_points_atlas_Clisson_20.set('fieldImages', {'gid': '', 'cd_vig_tr': '', 'lb_vig_tr': '', 'id_vig_spc': '', 'distance': '', 'angle': '', });
lyr_ZICH_M711241010_5000_21.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M711241010_4700_22.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M711241010_4200_23.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M711241010_3900_24.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M711241010_3100_25.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_ZICH_M711241010_2900_26.set('fieldImages', {'id_zichspc': 'TextEdit', 'cd_typezon': 'TextEdit', 'haut_min': 'TextEdit', 'haut_max': 'TextEdit', 'id_catalog': 'TextEdit', 'commentair': 'TextEdit', });
lyr_points_atlas_Tiffauges_27.set('fieldImages', {'gid': '', 'cd_vig_tr': '', 'lb_vig_tr': '', 'id_vig_spc': '', 'distance': '', 'angle': '', });
lyr_stations_vig_28.set('fieldImages', {'CODE': 'TextEdit', 'Code_site': 'TextEdit', 'Code_H3': 'TextEdit', 'STATION': 'TextEdit', 'LIEU_DIT': 'TextEdit', 'RIVIERE': 'TextEdit', 'Nom_BV': 'TextEdit', 'DPT': 'Range', 'Date_ouv': 'DateTime', 'COTE_0': 'TextEdit', 'Surface_BV': 'TextEdit', 'Infra': 'TextEdit', 'Vigicrues': 'TextEdit', 'JAUGEAGE': 'TextEdit', 'Vigilance': 'TextEdit', 'Troncon_V': 'TextEdit', 'Echeance_P': 'TextEdit', 'VIGI_VJ': 'TextEdit', 'VIGI_JJ': 'TextEdit', 'VIGI_JO': 'TextEdit', 'VIGI_OO': 'TextEdit', 'VIGI_OR': 'TextEdit', 'VIGI_RR': 'TextEdit', 'Coliane': 'TextEdit', 'Arr_etiage': 'TextEdit', 'Dep_etiage': 'TextEdit', 'Seuil_1': 'TextEdit', 'Seuil_2': 'TextEdit', 'Seuil_3': 'TextEdit', 'Q2': 'TextEdit', 'Q5': 'TextEdit', 'Q10': 'TextEdit', 'Q20': 'TextEdit', 'Q50': 'TextEdit', 'Q100': 'TextEdit', 'Qmax': 'TextEdit', 'Date_Qmax': 'DateTime', 'Hmax': 'TextEdit', 'Date_Hmax': 'DateTime', 'T_R_pluie': 'TextEdit', 'Priorite_J': 'Range', 'jauge1_min': 'TextEdit', 'jauge1_max': 'TextEdit', 'jauge2_min': 'TextEdit', 'jauge2_max': 'TextEdit', 'H_Q10': 'TextEdit', 'Pole1': 'TextEdit', 'Pole2': 'TextEdit', 'Pole3': 'TextEdit', 'Pole4': 'TextEdit', 'Gest_Hydro': 'TextEdit', 'Gest_Maint': 'TextEdit', 'Antenne': 'TextEdit', 'Ref_previ': 'TextEdit', 'ID_SHYREG': 'TextEdit', 'Code_pre': 'TextEdit', 'Codep': 'TextEdit', 'Hydris': 'TextEdit', 'Prepluie': 'TextEdit', 'Zap': 'TextEdit', 'Zone_sympo': 'TextEdit', 'Commentair': 'TextEdit', });
lyr_SvreNantaise_29.set('fieldImages', {'gid': 'TextEdit', 'cd_vig_tr': 'TextEdit', 'lb_vig_tr': 'TextEdit', 'id_vig_spc': 'TextEdit', });
lyr_ZICH_M711241010_5000_0.set('fieldLabels', {});
lyr_ZICH_M711241010_4700_1.set('fieldLabels', {});
lyr_ZICH_M711241010_4200_2.set('fieldLabels', {});
lyr_ZICH_M711241010_3900_3.set('fieldLabels', {});
lyr_ZICH_M711241010_3100_4.set('fieldLabels', {});
lyr_ZICH_M711241010_2900_5.set('fieldLabels', {});
lyr_points_atlas_Tiffauges_6.set('fieldLabels', {});
lyr_ZICH_M750242010_3800_7.set('fieldLabels', {});
lyr_ZICH_M750242010_3500_8.set('fieldLabels', {});
lyr_ZICH_M750242010_3100_9.set('fieldLabels', {});
lyr_ZICH_M750242010_2800_10.set('fieldLabels', {});
lyr_ZICH_M750242010_2000_11.set('fieldLabels', {});
lyr_ZICH_M750242010_1400_12.set('fieldLabels', {});
lyr_points_atlas_Vertou_13.set('fieldLabels', {});
lyr_ZICH_M730242010_4700_14.set('fieldLabels', {});
lyr_ZICH_M730242010_4400_15.set('fieldLabels', {});
lyr_ZICH_M730242010_3900_16.set('fieldLabels', {});
lyr_ZICH_M730242010_2700_17.set('fieldLabels', {});
lyr_ZICH_M730242010_2400_18.set('fieldLabels', {});
lyr_ZICH_M730242010_1600_19.set('fieldLabels', {});
lyr_points_atlas_Clisson_20.set('fieldLabels', {});
lyr_ZICH_M711241010_5000_21.set('fieldLabels', {});
lyr_ZICH_M711241010_4700_22.set('fieldLabels', {});
lyr_ZICH_M711241010_4200_23.set('fieldLabels', {});
lyr_ZICH_M711241010_3900_24.set('fieldLabels', {});
lyr_ZICH_M711241010_3100_25.set('fieldLabels', {});
lyr_ZICH_M711241010_2900_26.set('fieldLabels', {});
lyr_points_atlas_Tiffauges_27.set('fieldLabels', {});
lyr_stations_vig_28.set('fieldLabels', {});
lyr_SvreNantaise_29.set('fieldLabels', {});
lyr_SvreNantaise_29.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});