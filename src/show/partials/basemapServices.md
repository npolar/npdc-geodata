The Norwegian Polar Institute offers a selection of cached and dynamic basemap services which can be consumed to create interactive web mapping applications or as layers in desktop GIS, under these **[terms of use](http://geodata.npolar.no/bruksvilkar)**. The cached services are [tiled map services](http://webhelp.esri.com/arcgisserver/9.2/dotnet/manager/publishing/static_map_svcs.htm), which are maps that have been predrawn by the server at defined scales (zoom levels) and stored as graphic files to serve maps fast. The dynamic services are [WMS services](http://webhelp.esri.com/arcgisserver/9.3/Java/index.htm#wms_service.htm), which return map images as requested by the user, consisting of the active map layers, map extent and zoom level at the client side.

The cached services can be used in clients with support for ArcGIS Server tiles such as OpenLayers, Google Maps or Esri's JavaScript API in the same way as Google Maps or Esri Maps is built up. Read the **[developer's guide](documentation)** on how to create web applications with those basemaps.

The dynamic services, as well as the cached services, can be added as layers in most mainstream GIS software, such as described here for [ArcGIS](http://help.arcgis.com/en/arcgisdesktop/10.0/help/index.html#//00sp0000000s000000.htm) and [QGIS](http://docs.qgis.org/2.6/en/docs/user_manual/working_with_ogc/ogc_client_support.html#wms-wmts-client).


#### Cached basemap services

| Service Name and Preview | Layers  | Projection    | Service URL | Capabilities |
| ------------ | ------- | ------------- | ----------- | ------------ |
| [NP_Basiskart_Svalbard_WMTS_25833](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_Svalbard_WMTS_25833/MapServer?f=jsapi) | Svalbard topography | ETRS 89 UTM 33 (EPSG:25833) | [ArcGIS Rest](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_Svalbard_WMTS_25833/MapServer) | [WMTS](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_Svalbard_WMTS_25833/MapServer/WMTS/1.0.0/WMTSCapabilities.xml); [WMS](http://geodata.npolar.no/arcgis/services/Basisdata/NP_Basiskart_Svalbard_WMTS_25833/MapServer/WMSServer?request=GetCapabilities&service=WMS) |
| [NP_Ortofoto_Svalbard_WMTS_25833](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Ortofoto_Svalbard_WMTS_25833/MapServer?f=jsapi) |  Svalbard orthophoto | ETRS 89 UTM 33 (EPSG:25833) | [ArcGIS Rest](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Ortofoto_Svalbard_WMTS_25833/MapServer)  | [WMTS](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Ortofoto_Svalbard_WMTS_25833/MapServer/WMTS/1.0.0/WMTSCapabilities.xml) |
| [NP_Satellitt_Svalbard_WMTS_25833](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Satellitt_Svalbard_WMTS_25833/MapServer?f=jsapi) |  Svalbard satellite imagery  | ETRS 89 UTM 33 (EPSG:25833) | [ArcGIS Rest](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Satellitt_Svalbard_WMTS_25833/MapServer) | [WMTS](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Satellitt_Svalbard_WMTS_25833/MapServer/WMTS/1.0.0/WMTSCapabilities.xml) |
| [NP_Basiskart_JanMayen_WMTS_25829](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_JanMayen_WMTS_25829/MapServer?f=jsapi) | Jan Mayen topography | ETRS 89 UTM 29 (EPSG:25829) | [ArcGIS Rest](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_JanMayen_WMTS_25829/MapServer) | [WMTS](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_JanMayen_WMTS_25829/MapServer/WMTS/1.0.0/WMTSCapabilities.xml); [WMS](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_JanMayen_WMTS_25829/MapServer/WMSServer?request=GetCapabilities&service=WMS) |
| [NP_Basiskart_JanMayen_WMTS_25833](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_JanMayen_WMTS_25833/MapServer?f=jsapi)| Jan Mayen topography | ETRS 89 UTM 33 (EPSG:25833) | [ArcGIS Rest](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_JanMayen_WMTS_25833/MapServer) | [WMTS](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_JanMayen_WMTS_25833/MapServer/WMTS/1.0.0/WMTSCapabilities.xml); [WMS](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_JanMayen_WMTS_25833/MapServer/WMSServer?request=GetCapabilities&service=WMS) |

##### **Cache zoom levels and scales**

To easily combine cache from different services in the same map window, there is an advantage to have a common definition of the geographic area that defines the service. Because the cached services have fixed zoom levels, the service can not deliver tiles that lies between two defined zoom levels.

The table below shows the zoom levels, scales and resolutions for the cached services at the Norwegian Polar Institute. These are the same as in the [Norwegian Mapping Authority caches](http://www.statkart.no/Kart/Gratis-kartdata/Cache-tjenester/) for mainland Norway.

|Zoom Level|Scale|Resolution|
|----------|-----|----------|
|0|1:81 920 000|21674.7100160867|
|1|1:40 960 000|10837.3550080434|
|2|1:20 480 000|5418.67750402168|
|3|1:10 240 000|2709.33875201084|
|4|1:5 120 000|1354.66937600542|
|5|1:2 560 000|677.334688002709|
|6|1:1 280 000|338.667344001355|
|7|1:640 000|169.333672000677|
|8|1:320 000|84.6668360003387|
|9|1:160 000|42.3334180001693|
|10|1:80 000|21.1667090000847|
|11|1:40 000|10.5833545000423|
|12|1:20 000|5.29167725002117|
|13|1:10 000|2.64583862501058|
|14 (orthophoto)|1:5 000|1.3229193125052918|
|15 (orthophoto)|1:2 500|0.6614596562526459|
|16 (orthophoto)|1:1 250|0.33072982812632296|
|17 (orthophoto)|1:625|0.16536491406316148|


##### **Image formats**

Services are available in two image formats:

-   Image / jpeg (does not support transparency)
-   Image / png (supports transparency)

Tile size for jpeg is about 1/3 of the png so it must be considered what
is important, speed or support for transparency. The image tiles have a
resolution of 96 dpi with a size of (256x256 pixels).


#### Dynamic basemap services

| Service Name and Preview | Layers  | Service URL | Capabilities |
| ------------ | ------- | ----------- | ------------ |
| [NP_Basiskart_Svalbard_WMS](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_Svalbard_WMS/MapServer?f=jsapi) | Svalbard topography | [ArcGIS Rest](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_Svalbard_WMS/MapServer) | [WMS](http://geodata.npolar.no/arcgis/services/Basisdata/NP_Basiskart_Svalbard_WMS/MapServer/WMSServer?request=GetCapabilities&service=WMS) |
| [NP_Basiskart_JanMayen_WMS](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_JanMayen_WMS/MapServer?f=jsapi) | Jan Mayen topography | [ArcGIS Rest](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_JanMayen_WMTS/MapServer) | [WMS](http://geodata.npolar.no/arcgis/rest/services/Basisdata/NP_Basiskart_JanMayen_WMTS_25829/MapServer/WMSServer?request=GetCapabilities&service=WMS) |

