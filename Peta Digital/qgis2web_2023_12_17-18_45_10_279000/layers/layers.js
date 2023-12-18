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
var format_Gempabumi_0 = new ol.format.GeoJSON();
var features_Gempabumi_0 = format_Gempabumi_0.readFeatures(json_Gempabumi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gempabumi_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gempabumi_0.addFeatures(features_Gempabumi_0);var lyr_Gempabumi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gempabumi_0, 
                style: style_Gempabumi_0,
    title: 'Gempa bumi<br />\
    <img src="styles/legend/Gempabumi_0_0.png" />  0 - 8 <br />\
    <img src="styles/legend/Gempabumi_0_1.png" />  8 - 16 <br />\
    <img src="styles/legend/Gempabumi_0_2.png" />  16 - 23 <br />\
    <img src="styles/legend/Gempabumi_0_3.png" />  23 - 31 <br />'
        });

lyr_Gempabumi_0.setVisible(true);
var layersList = [baseLayer,lyr_Gempabumi_0];
lyr_Gempabumi_0.set('fieldAliases', {'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Banjir': 'Banjir', 'Gempa Bumi': 'Gempa Bumi', 'TnhLongsor': 'TnhLongsor', });
lyr_Gempabumi_0.set('fieldImages', {'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Banjir': 'TextEdit', 'Gempa Bumi': 'TextEdit', 'TnhLongsor': 'TextEdit', });
lyr_Gempabumi_0.set('fieldLabels', {'METADATA': 'inline label', 'SRS_ID': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'Banjir': 'inline label', 'Gempa Bumi': 'inline label', 'TnhLongsor': 'inline label', });
lyr_Gempabumi_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});