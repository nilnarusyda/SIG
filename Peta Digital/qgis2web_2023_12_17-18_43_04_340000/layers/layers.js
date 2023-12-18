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
var format_Tanahlongsor_0 = new ol.format.GeoJSON();
var features_Tanahlongsor_0 = format_Tanahlongsor_0.readFeatures(json_Tanahlongsor_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tanahlongsor_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tanahlongsor_0.addFeatures(features_Tanahlongsor_0);var lyr_Tanahlongsor_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tanahlongsor_0, 
                style: style_Tanahlongsor_0,
    title: 'Tanah longsor<br />\
    <img src="styles/legend/Tanahlongsor_0_0.png" />  0.0000 - 23.0000 <br />\
    <img src="styles/legend/Tanahlongsor_0_1.png" />  23.0000 - 46.0000 <br />\
    <img src="styles/legend/Tanahlongsor_0_2.png" />  46.0000 - 69.0000 <br />\
    <img src="styles/legend/Tanahlongsor_0_3.png" />  69.0000 - 92.0000 <br />'
        });

lyr_Tanahlongsor_0.setVisible(true);
var layersList = [baseLayer,lyr_Tanahlongsor_0];
lyr_Tanahlongsor_0.set('fieldAliases', {'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Banjir': 'Banjir', 'Gempa Bumi': 'Gempa Bumi', 'TnhLongsor': 'TnhLongsor', });
lyr_Tanahlongsor_0.set('fieldImages', {'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Banjir': 'TextEdit', 'Gempa Bumi': 'TextEdit', 'TnhLongsor': 'TextEdit', });
lyr_Tanahlongsor_0.set('fieldLabels', {'METADATA': 'inline label', 'SRS_ID': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'Banjir': 'inline label', 'Gempa Bumi': 'inline label', 'TnhLongsor': 'inline label', });
lyr_Tanahlongsor_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});