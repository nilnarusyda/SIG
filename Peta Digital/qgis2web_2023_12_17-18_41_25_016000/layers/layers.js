var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Banjir_0 = new ol.format.GeoJSON();
var features_Banjir_0 = format_Banjir_0.readFeatures(json_Banjir_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banjir_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Banjir_0.addFeatures(features_Banjir_0);var lyr_Banjir_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Banjir_0, 
                style: style_Banjir_0,
    title: 'Banjir<br />\
    <img src="styles/legend/Banjir_0_0.png" />  0 - 27 <br />\
    <img src="styles/legend/Banjir_0_1.png" />  27 - 54 <br />\
    <img src="styles/legend/Banjir_0_2.png" />  54 - 80 <br />\
    <img src="styles/legend/Banjir_0_3.png" />  80 - 107 <br />'
        });

lyr_Banjir_0.setVisible(true);
var layersList = [baseLayer,lyr_Banjir_0];
lyr_Banjir_0.set('fieldAliases', {'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Banjir': 'Banjir', 'Gempa Bumi': 'Gempa Bumi', 'TnhLongsor': 'TnhLongsor', });
lyr_Banjir_0.set('fieldImages', {'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Banjir': 'TextEdit', 'Gempa Bumi': 'TextEdit', 'TnhLongsor': 'TextEdit', });
lyr_Banjir_0.set('fieldLabels', {'METADATA': 'inline label', 'SRS_ID': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'Banjir': 'inline label', 'Gempa Bumi': 'inline label', 'TnhLongsor': 'inline label', });
lyr_Banjir_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});