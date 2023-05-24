var wms_layers = [];

var lyr_kemker3_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "kemker 3",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/kemker3_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12294755.948746, -859876.103687, 12296071.599352, -858163.371172]
                            })
                        });
var format_datakitabaruBANGET_1 = new ol.format.GeoJSON();
var features_datakitabaruBANGET_1 = format_datakitabaruBANGET_1.readFeatures(json_datakitabaruBANGET_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_datakitabaruBANGET_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_datakitabaruBANGET_1.addFeatures(features_datakitabaruBANGET_1);
var lyr_datakitabaruBANGET_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_datakitabaruBANGET_1, 
                style: style_datakitabaruBANGET_1,
                interactive: true,
                title: '<img src="styles/legend/datakitabaruBANGET_1.png" /> data kita baru BANGET'
            });
var format_masjidbus_2 = new ol.format.GeoJSON();
var features_masjidbus_2 = format_masjidbus_2.readFeatures(json_masjidbus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masjidbus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masjidbus_2.addFeatures(features_masjidbus_2);
var lyr_masjidbus_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_masjidbus_2, 
                style: style_masjidbus_2,
                interactive: true,
                title: '<img src="styles/legend/masjidbus_2.png" /> masjid bus'
            });
var format_masjidmotor_3 = new ol.format.GeoJSON();
var features_masjidmotor_3 = format_masjidmotor_3.readFeatures(json_masjidmotor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masjidmotor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masjidmotor_3.addFeatures(features_masjidmotor_3);
var lyr_masjidmotor_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_masjidmotor_3, 
                style: style_masjidmotor_3,
                interactive: true,
                title: '<img src="styles/legend/masjidmotor_3.png" /> masjid motor'
            });
var format_makambaru_4 = new ol.format.GeoJSON();
var features_makambaru_4 = format_makambaru_4.readFeatures(json_makambaru_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_makambaru_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_makambaru_4.addFeatures(features_makambaru_4);
var lyr_makambaru_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_makambaru_4, 
                style: style_makambaru_4,
                interactive: true,
                title: '<img src="styles/legend/makambaru_4.png" /> makam baru'
            });
var format_pasarbaru_5 = new ol.format.GeoJSON();
var features_pasarbaru_5 = format_pasarbaru_5.readFeatures(json_pasarbaru_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pasarbaru_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pasarbaru_5.addFeatures(features_pasarbaru_5);
var lyr_pasarbaru_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pasarbaru_5, 
                style: style_pasarbaru_5,
                interactive: true,
                title: '<img src="styles/legend/pasarbaru_5.png" /> pasar baru'
            });

lyr_kemker3_0.setVisible(true);lyr_datakitabaruBANGET_1.setVisible(true);lyr_masjidbus_2.setVisible(true);lyr_masjidmotor_3.setVisible(true);lyr_makambaru_4.setVisible(true);lyr_pasarbaru_5.setVisible(true);
var layersList = [lyr_kemker3_0,lyr_datakitabaruBANGET_1,lyr_masjidbus_2,lyr_masjidmotor_3,lyr_makambaru_4,lyr_pasarbaru_5];
lyr_datakitabaruBANGET_1.set('fieldAliases', {'Icon': 'Icon', 'X': 'X', 'Y': 'Y', });
lyr_masjidbus_2.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_masjidmotor_3.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_makambaru_4.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_pasarbaru_5.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_datakitabaruBANGET_1.set('fieldImages', {'Icon': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_masjidbus_2.set('fieldImages', {'fid': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_masjidmotor_3.set('fieldImages', {'fid': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_makambaru_4.set('fieldImages', {'fid': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_pasarbaru_5.set('fieldImages', {'fid': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_datakitabaruBANGET_1.set('fieldLabels', {'Icon': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_masjidbus_2.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_masjidmotor_3.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_makambaru_4.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_pasarbaru_5.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_pasarbaru_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});