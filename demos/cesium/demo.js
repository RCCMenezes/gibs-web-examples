/**
* GIBS Web Examples
*
* Copyright 2013 - 2015 United States Government as represented by the
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

    credit = {
        osm: new Cesium.Credit(
            "© OpenStreetMap contributors",
            "images/osm.png",
            "https://www.openstreetmap.org/copyright"
        )
    };

    config = {
        resolutions: {
            "250m": {
                tileMatrixSetID: "EPSG4326_250m",
                maximumLevel: 8
            },
            "500m": {
                tileMatrixSetID: "EPSG4326_500m",
                maximumLevel: 7
            },
            "1km": {
                tileMatrixSetID: "EPSG4326_1km",
                maximumLevel: 6
            },
            "2km": {
                tileMatrixSetID: "EPSG4326_2km",
                maximumLevel: 5
            }
        },
        layers: {
            AIRS_Dust_Score: {
                id: "AIRS_Dust_Score",
                resolution: "2km",
                format: "image/png",
                startDate: new Date(Date.UTC(2014, 4, 8))
            },
            BlueMarble_ShadedRelief_Bathymetry: {
                id: "BlueMarble_ShadedRelief_Bathymetry",
                resolution: "500m",
                format: "image/jpeg"
            },
            Coastlines: {
                id: "Coastlines",
                resolution: "250m",
                format: "image/png",
                credit: credit.osm
            },
            MODIS_Aqua_CorrectedReflectance_TrueColor: {
                id: "MODIS_Aqua_CorrectedReflectance_TrueColor",
                resolution: "250m",
                format: "image/jpeg",
                startDate: new Date(Date.UTC(2014, 4, 8))
            },
            MODIS_Fires_Terra: {
                id: "MODIS_Fires_Terra",
                wms: true,
                startDate: new Date(Date.UTC(2014, 4, 8))
            },
            MODIS_Terra_Aerosol: {
                id: "MODIS_Terra_Aerosol",
                resolution: "2km",
                format: "image/png",
                startDate: new Date(Date.UTC(2014, 4, 8))
            },
            MODIS_Terra_CorrectedReflectance_TrueColor: {
                id: "MODIS_Terra_CorrectedReflectance_TrueColor",
                resolution: "250m",
                format: "image/jpeg",
                startDate: new Date(Date.UTC(2014, 4, 8))
            },
            MODIS_Terra_Land_Surface_Temp_Day: {
                id: "MODIS_Terra_Land_Surface_Temp_Day",
                resolution: "1km",
                format: "image/png",
                startDate: new Date(Date.UTC(2014, 4, 8))
            },
            MODIS_Terra_Land_Surface_Temp_Night: {
                id: "MODIS_Terra_Land_Surface_Temp_Night",
                resolution: "1km",
                format: "image/png",
                startDate: new Date(Date.UTC(2014, 4, 8))
            },
            MODIS_Terra_Sea_Ice: {
                id: "MODIS_Terra_Sea_Ice",
                resolution: "1km",
                format: "image/png",
                startDate: new Date(Date.UTC(2014, 4, 8))
            },
            MODIS_Terra_Snow_Cover: {
                id: "MODIS_Terra_Snow_Cover",
                resolution: "500m",
                format: "image/png",
                startDate: new Date(Date.UTC(2014, 4, 8))
            },
            MODIS_Terra_SurfaceReflectance_Bands721: {
                id: "MODIS_Terra_SurfaceReflectance_Bands721",
                resolution: "500m",
                format: "image/jpeg",
                startDate: new Date(Date.UTC(2014, 4, 8))
            },
            OSM_Land_Water_Map: {
                id: "OSM_Land_Water_Map",
                resolution: "250m",
                format: "image/png"
            },
            VIIRS_CityLights_2012: {
                id: "VIIRS_CityLights_2012",
                resolution: "500m",
                format: "image/jpeg"
            }
        },
        sets: [{
            name: "Visible Reflectance, Morning",
            layers: [
                "MODIS_Terra_CorrectedReflectance_TrueColor",
                "Coastlines"
            ],
            icon: "images/terra_corrected_reflectance.png"
        },{
            name: "Visible Reflectance, Afternoon",
            layers: [
                "MODIS_Aqua_CorrectedReflectance_TrueColor",
                "Coastlines"
            ],
            icon: "images/aqua_corrected_reflectance.png"
        },{
            name: "Aerosols",
            layers: [
                "MODIS_Terra_CorrectedReflectance_TrueColor",
                "MODIS_Terra_Aerosol",
                "Coastlines"
            ],
            icon: "images/aerosols.png"
        },{
            name: "Surface Temperature, Day",
            layers: [
                "MODIS_Terra_CorrectedReflectance_TrueColor",
                "MODIS_Terra_Land_Surface_Temp_Day",
                "Coastlines"
            ],
            icon: "images/land_surface_temperature_day.png"
        },{
            name: "Surface Temperature, Night",
            layers: [
                "OSM_Land_Water_Map",
                "MODIS_Terra_Land_Surface_Temp_Night"
            ],
            icon: "images/land_surface_temperature_night.png"
        },{
            name: "Fires",
            layers: [
                "MODIS_Terra_CorrectedReflectance_TrueColor",
                "MODIS_Fires_Terra",
                "Coastlines"
            ],
            icon: "images/fires.png"
        },{
            name: "Dust",
            layers: [
                "MODIS_Aqua_CorrectedReflectance_TrueColor",
                "AIRS_Dust_Score",
                "Coastlines"
            ],
            icon: "images/dust_score.png"
        },{
            name: "Sea Ice",
            layers: [
                "MODIS_Terra_SurfaceReflectance_Bands721",
                "MODIS_Terra_Sea_Ice",
                "Coastlines"
            ],
            icon: "images/sea_ice.png"
        },{
            name: "Snow Cover",
            layers: [
                "MODIS_Terra_SurfaceReflectance_Bands721",
                "MODIS_Terra_Snow_Cover",
                "Coastlines"
            ],
            icon: "images/snow_cover.png"
        },{
            name: "Earth at Night 2012",
            layers: [
                "VIIRS_CityLights_2012"
            ],
            icon: "images/earth_at_night.png"
        },{
            name: "Blue Marble Next Generation",
            layers: [
                "BlueMarble_ShadedRelief_Bathymetry"
            ],
            icon: "images/blue_marble.png"
        }]
    };

    gibs.Viewer(config);
};
