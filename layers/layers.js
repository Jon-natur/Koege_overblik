ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([685972.533812, 6149523.595914, 693855.817959, 6156548.446216]);
var wms_layers = [];


        var lyr_GoogleMapsSatelit_0 = new ol.layer.Tile({
            'title': 'Google Maps Satelit',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_2025projektomrde_1 = new ol.format.GeoJSON();
var features_2025projektomrde_1 = format_2025projektomrde_1.readFeatures(json_2025projektomrde_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_2025projektomrde_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2025projektomrde_1.addFeatures(features_2025projektomrde_1);
var lyr_2025projektomrde_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2025projektomrde_1, 
                style: style_2025projektomrde_1,
                popuplayertitle: '2025 - projektområde',
                interactive: true,
                title: '<img src="styles/legend/2025projektomrde_1.png" /> 2025 - projektområde'
            });
var format_Udpeget_opgraderet_2 = new ol.format.GeoJSON();
var features_Udpeget_opgraderet_2 = format_Udpeget_opgraderet_2.readFeatures(json_Udpeget_opgraderet_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Udpeget_opgraderet_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Udpeget_opgraderet_2.addFeatures(features_Udpeget_opgraderet_2);
var lyr_Udpeget_opgraderet_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Udpeget_opgraderet_2, 
                style: style_Udpeget_opgraderet_2,
                popuplayertitle: 'Udpeget_opgraderet',
                interactive: true,
    title: 'Udpeget_opgraderet<br />\
    <img src="styles/legend/Udpeget_opgraderet_2_0.png" /> Sø<br />\
    <img src="styles/legend/Udpeget_opgraderet_2_1.png" /> Mose<br />\
    <img src="styles/legend/Udpeget_opgraderet_2_2.png" /> Eng<br />\
    <img src="styles/legend/Udpeget_opgraderet_2_3.png" /> Overdrev<br />\
    <img src="styles/legend/Udpeget_opgraderet_2_4.png" /> Hede<br />\
    <img src="styles/legend/Udpeget_opgraderet_2_5.png" /> Potentiel ny eng<br />\
    <img src="styles/legend/Udpeget_opgraderet_2_6.png" /> Potentiel ny mose<br />\
    <img src="styles/legend/Udpeget_opgraderet_2_7.png" /> Potentiel ny sø<br />\
    <img src="styles/legend/Udpeget_opgraderet_2_8.png" /> Potentiel ny overdrev<br />' });
var lyr_DARvejnavnedemindsteveje18000_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://api.dataforsyningen.dk/kommunikation?token%3D504552691b3523f89b7d23aad771d3de",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Vejnavne_mindre",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'DAR vejnavne - de mindste veje, 1 - 8.000',
                            popuplayertitle: 'DAR vejnavne - de mindste veje, 1 - 8.000',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DARvejnavnedemindsteveje18000_3, 0]);
var lyr_DARvejnavneoverordnetvejnet150000_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://api.dataforsyningen.dk/kommunikation?token%3D504552691b3523f89b7d23aad771d3de",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Vejnavne_stoerre",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'DAR vejnavne - overordnet vejnet, 1 - 50.000',
                            popuplayertitle: 'DAR vejnavne - overordnet vejnet, 1 - 50.000',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DARvejnavneoverordnetvejnet150000_4, 0]);
var group_2025 = new ol.layer.Group({
                                layers: [lyr_Udpeget_opgraderet_2,],
                                fold: 'open',
                                title: '2025'});

lyr_GoogleMapsSatelit_0.setVisible(true);lyr_2025projektomrde_1.setVisible(true);lyr_Udpeget_opgraderet_2.setVisible(true);lyr_DARvejnavnedemindsteveje18000_3.setVisible(true);lyr_DARvejnavneoverordnetvejnet150000_4.setVisible(true);
var layersList = [lyr_GoogleMapsSatelit_0,lyr_2025projektomrde_1,group_2025,lyr_DARvejnavnedemindsteveje18000_3,lyr_DARvejnavneoverordnetvejnet150000_4];
lyr_2025projektomrde_1.set('fieldAliases', {'id': 'id', });
lyr_Udpeget_opgraderet_2.set('fieldAliases', {'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Polygon areal', 'Shape_leng': 'Shape_leng', 'Natyp_kode': 'Naturtype kode', 'Natyp_navn': 'Naturtype', 'Besig_dato': 'Besigtigelsesdato', 'layer': 'layer', 'path': 'path', 'Note': 'Note', 'M.O': 'Mulige overtrædelser', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Afstand': 'Afstand', 'Polygon_Na': 'Felt ID', });
lyr_2025projektomrde_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Udpeget_opgraderet_2.set('fieldImages', {'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Natyp_kode': 'TextEdit', 'Natyp_navn': 'TextEdit', 'Besig_dato': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Note': 'TextEdit', 'M.O': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Afstand': 'TextEdit', 'Polygon_Na': 'TextEdit', });
lyr_2025projektomrde_1.set('fieldLabels', {'id': 'no label', });
lyr_Udpeget_opgraderet_2.set('fieldLabels', {'Temakode': 'hidden field', 'Temanavn': 'inline label - always visible', 'Objekt_id': 'inline label - always visible', 'Version_id': 'hidden field', 'Systid_fra': 'hidden field', 'Systid_til': 'hidden field', 'Oprettet': 'inline label - always visible', 'Oprindkode': 'hidden field', 'Oprindelse': 'hidden field', 'Statuskode': 'hidden field', 'Status': 'inline label - always visible', 'Off_kode': 'hidden field', 'Offentlig': 'inline label - always visible', 'CVR_kode': 'hidden field', 'CVR_navn': 'inline label - always visible', 'Bruger_id': 'hidden field', 'Link': 'inline label - always visible', 'Shape_area': 'inline label - always visible', 'Shape_leng': 'hidden field', 'Natyp_kode': 'inline label - always visible', 'Natyp_navn': 'inline label - always visible', 'Besig_dato': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', 'FeltID': 'hidden field', 'Note': 'inline label - always visible', 'M.O': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Afstand': 'hidden field', 'Polygon_Na': 'inline label - always visible', });
lyr_Udpeget_opgraderet_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});