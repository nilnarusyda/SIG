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
var format_GempaBumi_0 = new ol.format.GeoJSON();
var features_GempaBumi_0 = format_GempaBumi_0.readFeatures(json_GempaBumi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GempaBumi_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GempaBumi_0.addFeatures(features_GempaBumi_0);var lyr_GempaBumi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GempaBumi_0, 
                style: style_GempaBumi_0,
    title: 'Gempa Bumi<br />\
    <img src="styles/legend/GempaBumi_0_0.png" />  0 - 8 <br />\
    <img src="styles/legend/GempaBumi_0_1.png" />  8 - 16 <br />\
    <img src="styles/legend/GempaBumi_0_2.png" />  16 - 23 <br />\
    <img src="styles/legend/GempaBumi_0_3.png" />  23 - 31 <br />'
        });var format_TnhLongsor_1 = new ol.format.GeoJSON();
var features_TnhLongsor_1 = format_TnhLongsor_1.readFeatures(json_TnhLongsor_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TnhLongsor_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TnhLongsor_1.addFeatures(features_TnhLongsor_1);var lyr_TnhLongsor_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TnhLongsor_1, 
                style: style_TnhLongsor_1,
    title: 'TnhLongsor<br />\
    <img src="styles/legend/TnhLongsor_1_0.png" />  0 - 23 <br />\
    <img src="styles/legend/TnhLongsor_1_1.png" />  23 - 46 <br />\
    <img src="styles/legend/TnhLongsor_1_2.png" />  46 - 69 <br />\
    <img src="styles/legend/TnhLongsor_1_3.png" />  69 - 92 <br />'
        });var format_Banjir_2 = new ol.format.GeoJSON();
var features_Banjir_2 = format_Banjir_2.readFeatures(json_Banjir_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banjir_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Banjir_2.addFeatures(features_Banjir_2);var lyr_Banjir_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Banjir_2, 
                style: style_Banjir_2,
    title: 'Banjir<br />\
    <img src="styles/legend/Banjir_2_0.png" />  0 - 27 <br />\
    <img src="styles/legend/Banjir_2_1.png" />  27 - 54 <br />\
    <img src="styles/legend/Banjir_2_2.png" />  54 - 80 <br />\
    <img src="styles/legend/Banjir_2_3.png" />  80 - 107 <br />'
        });var format_JawaTengah_3 = new ol.format.GeoJSON();
var features_JawaTengah_3 = format_JawaTengah_3.readFeatures(json_JawaTengah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JawaTengah_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JawaTengah_3.addFeatures(features_JawaTengah_3);var lyr_JawaTengah_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JawaTengah_3, 
                style: style_JawaTengah_3,
    title: 'Jawa Tengah<br />\
    <img src="styles/legend/JawaTengah_3_0.png" /> Banjarnegara<br />\
    <img src="styles/legend/JawaTengah_3_1.png" /> Banyumas<br />\
    <img src="styles/legend/JawaTengah_3_2.png" /> Batang<br />\
    <img src="styles/legend/JawaTengah_3_3.png" /> Blora<br />\
    <img src="styles/legend/JawaTengah_3_4.png" /> Boyolali<br />\
    <img src="styles/legend/JawaTengah_3_5.png" /> Brebes<br />\
    <img src="styles/legend/JawaTengah_3_6.png" /> Cilacap<br />\
    <img src="styles/legend/JawaTengah_3_7.png" /> Demak<br />\
    <img src="styles/legend/JawaTengah_3_8.png" /> Grobogan<br />\
    <img src="styles/legend/JawaTengah_3_9.png" /> Jepara<br />\
    <img src="styles/legend/JawaTengah_3_10.png" /> Karanganyar<br />\
    <img src="styles/legend/JawaTengah_3_11.png" /> Kebumen<br />\
    <img src="styles/legend/JawaTengah_3_12.png" /> Kendal<br />\
    <img src="styles/legend/JawaTengah_3_13.png" /> Klaten<br />\
    <img src="styles/legend/JawaTengah_3_14.png" /> Kota Magelang<br />\
    <img src="styles/legend/JawaTengah_3_15.png" /> Kota Pekalongan<br />\
    <img src="styles/legend/JawaTengah_3_16.png" /> Kota Salatiga<br />\
    <img src="styles/legend/JawaTengah_3_17.png" /> Kota Semarang<br />\
    <img src="styles/legend/JawaTengah_3_18.png" /> Kota Surakarta<br />\
    <img src="styles/legend/JawaTengah_3_19.png" /> Kota Tegal<br />\
    <img src="styles/legend/JawaTengah_3_20.png" /> Kudus<br />\
    <img src="styles/legend/JawaTengah_3_21.png" /> Magelang<br />\
    <img src="styles/legend/JawaTengah_3_22.png" /> Pati<br />\
    <img src="styles/legend/JawaTengah_3_23.png" /> Pekalongan<br />\
    <img src="styles/legend/JawaTengah_3_24.png" /> Pemalang<br />\
    <img src="styles/legend/JawaTengah_3_25.png" /> Purbalingga<br />\
    <img src="styles/legend/JawaTengah_3_26.png" /> Purworejo<br />\
    <img src="styles/legend/JawaTengah_3_27.png" /> Rembang<br />\
    <img src="styles/legend/JawaTengah_3_28.png" /> Semarang<br />\
    <img src="styles/legend/JawaTengah_3_29.png" /> Sragen<br />\
    <img src="styles/legend/JawaTengah_3_30.png" /> Sukoharjo<br />\
    <img src="styles/legend/JawaTengah_3_31.png" /> Tegal<br />\
    <img src="styles/legend/JawaTengah_3_32.png" /> Temanggung<br />\
    <img src="styles/legend/JawaTengah_3_33.png" /> Wonogiri<br />\
    <img src="styles/legend/JawaTengah_3_34.png" /> Wonosobo<br />'
        });

lyr_GempaBumi_0.setVisible(true);lyr_TnhLongsor_1.setVisible(true);lyr_Banjir_2.setVisible(true);lyr_JawaTengah_3.setVisible(true);
var layersList = [baseLayer,lyr_GempaBumi_0,lyr_TnhLongsor_1,lyr_Banjir_2,lyr_JawaTengah_3];
lyr_GempaBumi_0.set('fieldAliases', {'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Banjir': 'Banjir', 'Gempa Bumi': 'Gempa Bumi', 'TnhLongsor': 'TnhLongsor', });
lyr_TnhLongsor_1.set('fieldAliases', {'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Banjir': 'Banjir', 'Gempa Bumi': 'Gempa Bumi', 'TnhLongsor': 'TnhLongsor', });
lyr_Banjir_2.set('fieldAliases', {'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Banjir': 'Banjir', 'Gempa Bumi': 'Gempa Bumi', 'TnhLongsor': 'TnhLongsor', });
lyr_JawaTengah_3.set('fieldAliases', {'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Banjir': 'Banjir', 'Gempa Bumi': 'Gempa Bumi', 'TnhLongsor': 'TnhLongsor', });
lyr_GempaBumi_0.set('fieldImages', {'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Banjir': 'TextEdit', 'Gempa Bumi': 'TextEdit', 'TnhLongsor': 'TextEdit', });
lyr_TnhLongsor_1.set('fieldImages', {'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Banjir': 'TextEdit', 'Gempa Bumi': 'TextEdit', 'TnhLongsor': 'TextEdit', });
lyr_Banjir_2.set('fieldImages', {'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Banjir': 'TextEdit', 'Gempa Bumi': 'TextEdit', 'TnhLongsor': 'TextEdit', });
lyr_JawaTengah_3.set('fieldImages', {'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Banjir': 'TextEdit', 'Gempa Bumi': 'TextEdit', 'TnhLongsor': 'TextEdit', });
lyr_GempaBumi_0.set('fieldLabels', {'METADATA': 'inline label', 'SRS_ID': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'Banjir': 'inline label', 'Gempa Bumi': 'inline label', 'TnhLongsor': 'inline label', });
lyr_TnhLongsor_1.set('fieldLabels', {'METADATA': 'inline label', 'SRS_ID': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'Banjir': 'inline label', 'Gempa Bumi': 'inline label', 'TnhLongsor': 'inline label', });
lyr_Banjir_2.set('fieldLabels', {'METADATA': 'inline label', 'SRS_ID': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'Banjir': 'inline label', 'Gempa Bumi': 'inline label', 'TnhLongsor': 'inline label', });
lyr_JawaTengah_3.set('fieldLabels', {'METADATA': 'inline label', 'SRS_ID': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'Banjir': 'inline label', 'Gempa Bumi': 'inline label', 'TnhLongsor': 'inline label', });
lyr_JawaTengah_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});