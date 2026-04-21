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
var format_KapanewonBantul_1 = new ol.format.GeoJSON();
var features_KapanewonBantul_1 = format_KapanewonBantul_1.readFeatures(json_KapanewonBantul_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KapanewonBantul_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KapanewonBantul_1.addFeatures(features_KapanewonBantul_1);
var lyr_KapanewonBantul_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KapanewonBantul_1, 
                style: style_KapanewonBantul_1,
                popuplayertitle: 'Kapanewon Bantul',
                interactive: true,
                title: '<img src="styles/legend/KapanewonBantul_1.png" /> Kapanewon Bantul'
            });
var format_Building_KecBantul_2 = new ol.format.GeoJSON();
var features_Building_KecBantul_2 = format_Building_KecBantul_2.readFeatures(json_Building_KecBantul_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Building_KecBantul_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_KecBantul_2.addFeatures(features_Building_KecBantul_2);
var lyr_Building_KecBantul_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_KecBantul_2, 
                style: style_Building_KecBantul_2,
                popuplayertitle: 'Building_KecBantul',
                interactive: true,
                title: '<img src="styles/legend/Building_KecBantul_2.png" /> Building_KecBantul'
            });
var format_Bangunan_KecBantul_3 = new ol.format.GeoJSON();
var features_Bangunan_KecBantul_3 = format_Bangunan_KecBantul_3.readFeatures(json_Bangunan_KecBantul_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bangunan_KecBantul_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_KecBantul_3.addFeatures(features_Bangunan_KecBantul_3);
var lyr_Bangunan_KecBantul_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_KecBantul_3, 
                style: style_Bangunan_KecBantul_3,
                popuplayertitle: 'Bangunan_KecBantul',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_KecBantul_3.png" /> Bangunan_KecBantul'
            });
var format_Bangunan_KecBantul_4 = new ol.format.GeoJSON();
var features_Bangunan_KecBantul_4 = format_Bangunan_KecBantul_4.readFeatures(json_Bangunan_KecBantul_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bangunan_KecBantul_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_KecBantul_4.addFeatures(features_Bangunan_KecBantul_4);
var lyr_Bangunan_KecBantul_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_KecBantul_4, 
                style: style_Bangunan_KecBantul_4,
                popuplayertitle: 'Bangunan_KecBantul',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_KecBantul_4.png" /> Bangunan_KecBantul'
            });
var format_Batas_KecBantul_5 = new ol.format.GeoJSON();
var features_Batas_KecBantul_5 = format_Batas_KecBantul_5.readFeatures(json_Batas_KecBantul_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Batas_KecBantul_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_KecBantul_5.addFeatures(features_Batas_KecBantul_5);
var lyr_Batas_KecBantul_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_KecBantul_5, 
                style: style_Batas_KecBantul_5,
                popuplayertitle: 'Batas_KecBantul',
                interactive: true,
                title: '<img src="styles/legend/Batas_KecBantul_5.png" /> Batas_KecBantul'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_KapanewonBantul_1.setVisible(true);lyr_Building_KecBantul_2.setVisible(true);lyr_Bangunan_KecBantul_3.setVisible(true);lyr_Bangunan_KecBantul_4.setVisible(true);lyr_Batas_KecBantul_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_KapanewonBantul_1,lyr_Building_KecBantul_2,lyr_Bangunan_KecBantul_3,lyr_Bangunan_KecBantul_4,lyr_Batas_KecBantul_5];
lyr_KapanewonBantul_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Kepadatan': 'Kepadatan', 'Curah_Huja': 'Curah_Huja', });
lyr_Building_KecBantul_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'unisex': 'unisex', 'name_id': 'name_id', 'internet_a': 'internet_a', 'level': 'level', 'baby_feedi': 'baby_feedi', 'layer': 'layer', 'roof_shape': 'roof_shape', 'roof_mater': 'roof_mater', 'roof_colou': 'roof_colou', 'email': 'email', 'studio': 'studio', 'sport': 'sport', 'indoor': 'indoor', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'address': 'address', 'short_name': 'short_name', 'phone': 'phone', 'height': 'height', 'addr_subdi': 'addr_subdi', 'addr_neigh': 'addr_neigh', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'man_made': 'man_made', 'stroller': 'stroller', 'payment_de': 'payment_de', 'payment_co': 'payment_co', 'payment_ca': 'payment_ca', 'currency_I': 'currency_I', 'check_date': 'check_date', 'wikidata': 'wikidata', 'wheelchair': 'wheelchair', 'tourism': 'tourism', 'tactile_pa': 'tactile_pa', 'museum': 'museum', 'website': 'website', 'toilets_un': 'toilets_un', 'toilets_ac': 'toilets_ac', 'toilets': 'toilets', 'branch': 'branch', 'official_n': 'official_n', 'official_1': 'official_1', 'official_2': 'official_2', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'atm': 'atm', 'leisure': 'leisure', 'marketplac': 'marketplac', 'marketpl_1': 'marketpl_1', 'shop': 'shop', 'addr_distr': 'addr_distr', 'addr_provi': 'addr_provi', 'addr_postc': 'addr_postc', 'addr_place': 'addr_place', 'addr_count': 'addr_count', 'emergency': 'emergency', 'historic': 'historic', 'denominati': 'denominati', 'operator_t': 'operator_t', 'capacity_p': 'capacity_p', 'building_m': 'building_m', 'building_f': 'building_f', 'building_c': 'building_c', 'addr_full': 'addr_full', 'access_roo': 'access_roo', 'religion': 'religion', 'building_w': 'building_w', 'building_u': 'building_u', 'building_s': 'building_s', 'building_r': 'building_r', 'amenity': 'amenity', 'operator': 'operator', 'opening_ho': 'opening_ho', 'office': 'office', 'name': 'name', 'government': 'government', 'building_l': 'building_l', 'air_condit': 'air_condit', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'type': 'type', });
lyr_Bangunan_KecBantul_3.set('fieldAliases', {'building': 'building', });
lyr_Bangunan_KecBantul_4.set('fieldAliases', {'building': 'building', });
lyr_Batas_KecBantul_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Kepadatan': 'Kepadatan', 'Curah_Huja': 'Curah_Huja', });
lyr_KapanewonBantul_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Kepadatan': 'TextEdit', 'Curah_Huja': 'TextEdit', });
lyr_Building_KecBantul_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'unisex': '', 'name_id': '', 'internet_a': '', 'level': '', 'baby_feedi': '', 'layer': '', 'roof_shape': '', 'roof_mater': '', 'roof_colou': '', 'email': '', 'studio': '', 'sport': '', 'indoor': '', 'healthcare': '', 'healthca_1': '', 'address': '', 'short_name': '', 'phone': '', 'height': '', 'addr_subdi': '', 'addr_neigh': '', 'addr_house': '', 'addr_hou_1': '', 'man_made': '', 'stroller': '', 'payment_de': '', 'payment_co': '', 'payment_ca': '', 'currency_I': '', 'check_date': '', 'wikidata': '', 'wheelchair': '', 'tourism': '', 'tactile_pa': '', 'museum': '', 'website': '', 'toilets_un': '', 'toilets_ac': '', 'toilets': '', 'branch': '', 'official_n': '', 'official_1': '', 'official_2': '', 'brand_wiki': '', 'brand_wi_1': '', 'brand': '', 'atm': '', 'leisure': '', 'marketplac': '', 'marketpl_1': '', 'shop': '', 'addr_distr': '', 'addr_provi': '', 'addr_postc': '', 'addr_place': '', 'addr_count': '', 'emergency': '', 'historic': '', 'denominati': '', 'operator_t': '', 'capacity_p': '', 'building_m': '', 'building_f': '', 'building_c': '', 'addr_full': '', 'access_roo': '', 'religion': '', 'building_w': '', 'building_u': '', 'building_s': '', 'building_r': '', 'amenity': '', 'operator': '', 'opening_ho': '', 'office': '', 'name': '', 'government': '', 'building_l': '', 'air_condit': '', 'addr_stree': '', 'addr_city': '', 'type': '', });
lyr_Bangunan_KecBantul_3.set('fieldImages', {'building': '', });
lyr_Bangunan_KecBantul_4.set('fieldImages', {'building': '', });
lyr_Batas_KecBantul_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Kepadatan': 'TextEdit', 'Curah_Huja': 'TextEdit', });
lyr_KapanewonBantul_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Kepadatan': 'no label', 'Curah_Huja': 'no label', });
lyr_Building_KecBantul_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'unisex': 'no label', 'name_id': 'no label', 'internet_a': 'no label', 'level': 'no label', 'baby_feedi': 'no label', 'layer': 'no label', 'roof_shape': 'no label', 'roof_mater': 'no label', 'roof_colou': 'no label', 'email': 'no label', 'studio': 'no label', 'sport': 'no label', 'indoor': 'no label', 'healthcare': 'no label', 'healthca_1': 'no label', 'address': 'no label', 'short_name': 'no label', 'phone': 'no label', 'height': 'no label', 'addr_subdi': 'no label', 'addr_neigh': 'no label', 'addr_house': 'no label', 'addr_hou_1': 'no label', 'man_made': 'no label', 'stroller': 'no label', 'payment_de': 'no label', 'payment_co': 'no label', 'payment_ca': 'no label', 'currency_I': 'no label', 'check_date': 'no label', 'wikidata': 'no label', 'wheelchair': 'no label', 'tourism': 'no label', 'tactile_pa': 'no label', 'museum': 'no label', 'website': 'no label', 'toilets_un': 'no label', 'toilets_ac': 'no label', 'toilets': 'no label', 'branch': 'no label', 'official_n': 'no label', 'official_1': 'no label', 'official_2': 'no label', 'brand_wiki': 'no label', 'brand_wi_1': 'no label', 'brand': 'no label', 'atm': 'no label', 'leisure': 'no label', 'marketplac': 'no label', 'marketpl_1': 'no label', 'shop': 'no label', 'addr_distr': 'no label', 'addr_provi': 'no label', 'addr_postc': 'no label', 'addr_place': 'no label', 'addr_count': 'no label', 'emergency': 'no label', 'historic': 'no label', 'denominati': 'no label', 'operator_t': 'no label', 'capacity_p': 'no label', 'building_m': 'no label', 'building_f': 'no label', 'building_c': 'no label', 'addr_full': 'no label', 'access_roo': 'no label', 'religion': 'no label', 'building_w': 'no label', 'building_u': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'amenity': 'no label', 'operator': 'no label', 'opening_ho': 'no label', 'office': 'no label', 'name': 'no label', 'government': 'no label', 'building_l': 'no label', 'air_condit': 'no label', 'addr_stree': 'no label', 'addr_city': 'no label', 'type': 'no label', });
lyr_Bangunan_KecBantul_3.set('fieldLabels', {'building': 'no label', });
lyr_Bangunan_KecBantul_4.set('fieldLabels', {'building': 'no label', });
lyr_Batas_KecBantul_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Kepadatan': 'no label', 'Curah_Huja': 'no label', });
lyr_Batas_KecBantul_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});