/**
 * GIBS Web Examples
 *
 * Copyright 2013 - 2014 United States Government as represented by the
 * Administrator of the National Aeronautics and Space Administration.
 * All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

window.onload = function() {

    proj4.defs["EPSG:3031"] =
        "+title=WGS 84 / Antarctic Polar Stereographic " +
        "+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 " +
        "+datum=WGS84 +units=m +no_defs";

    var map = new OpenLayers.Map({
        div: "map",
        projection: "EPSG:3031",
        numZoomLevels: 6
    });

    var layer = new OpenLayers.Layer.WMTS({
        name: "Terra / MODIS Corrected Reflectance (True Color)",
        url: [
            "https://map1a.vis.earthdata.nasa.gov/wmts-antarctic/wmts.cgi",
            "https://map1b.vis.earthdata.nasa.gov/wmts-antarctic/wmts.cgi",
            "https://map1c.vis.earthdata.nasa.gov/wmts-antarctic/wmts.cgi"
        ],
        layer: "MODIS_Aqua_CorrectedReflectance_TrueColor",
        style: "",
        matrixSet: "EPSG3031_250m",
        maxResolution: 8192.0,
        numZoomLevels: 6,
        maxExtent: [-4194304, -4194304, 4194304, 4194304],
        tileSize: new OpenLayers.Size(512, 512),
        format: "image/jpeg",
        projection: "EPSG:3031",
        attribution:
            "<a href='http://openlayers.org'>" +
            "OpenLayers</a>&nbsp;&nbsp;&nbsp;" +
            "<a href='https://earthdata.nasa.gov/gibs'>" +
            "NASA EOSDIS GIBS</a>&nbsp;&nbsp;&nbsp;" +
            "<a href='https://github.com/nasa-gibs/web-examples/blob/master/openlayers2/js/antarctic-epsg3031.js'>" +
            "View Source" +
            "</a>"
    });
    layer.mergeNewParams({time: "2013-12-01"});

    map.addLayer(layer);
    map.setCenter([0, 0], 0);
};