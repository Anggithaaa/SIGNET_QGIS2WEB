ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([110.295627, -7.928270, 110.371265, -7.857387]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Bangunan_KecBantul_1 = new ol.format.GeoJSON();
var features_Bangunan_KecBantul_1 = format_Bangunan_KecBantul_1.readFeatures(json_Bangunan_KecBantul_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bangunan_KecBantul_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_KecBantul_1.addFeatures(features_Bangunan_KecBantul_1);
var lyr_Bangunan_KecBantul_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_KecBantul_1, 
                style: style_Bangunan_KecBantul_1,
                popuplayertitle: 'Bangunan_KecBantul',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_KecBantul_1.png" /> Bangunan_KecBantul'
            });
var format_Batas_KecBantul_2 = new ol.format.GeoJSON();
var features_Batas_KecBantul_2 = format_Batas_KecBantul_2.readFeatures(json_Batas_KecBantul_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Batas_KecBantul_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_KecBantul_2.addFeatures(features_Batas_KecBantul_2);
var lyr_Batas_KecBantul_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_KecBantul_2, 
                style: style_Batas_KecBantul_2,
                popuplayertitle: 'Batas_KecBantul',
                interactive: true,
                title: '<img src="styles/legend/Batas_KecBantul_2.png" /> Batas_KecBantul'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Bangunan_KecBantul_1.setVisible(true);lyr_Batas_KecBantul_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Bangunan_KecBantul_1,lyr_Batas_KecBantul_2];
lyr_Bangunan_KecBantul_1.set('fieldAliases', {'building': 'building', });
lyr_Batas_KecBantul_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Kepadatan': 'Kepadatan', 'Curah_Huja': 'Curah_Huja', });
lyr_Bangunan_KecBantul_1.set('fieldImages', {'building': '', });
lyr_Batas_KecBantul_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Kepadatan': 'TextEdit', 'Curah_Huja': 'TextEdit', });
lyr_Bangunan_KecBantul_1.set('fieldLabels', {'building': 'no label', });
lyr_Batas_KecBantul_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Kepadatan': 'no label', 'Curah_Huja': 'no label', });
lyr_Batas_KecBantul_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});