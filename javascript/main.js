class CapsuleTelemetry{
    constructor(telemetry_source){
        this.layer = null;
    }
    //get telemetry
    async getTelemetry(source){
        //let  xmlHttp = new XMLHttpRequest();
        //xmlHttp.open("GET", source, false);
        //xmlHttp.send(null);
        //return JSON.parse(xmlHttp.responseText);
        let json = JSON.parse('[{"id": "8882", "data_brasil": "2021-09-28 15:53:10", "temp280": "33.97", "pressao280": "91268.4", "umidade": "30", "tempdht11": "33.2", "tmedia": "33.585", "longitude": -51.469353, "latitude": -25.385475}, {"id": "8883", "data_brasil": "2021-09-28 15:58:15", "temp280": "34.45", "pressao280": "91267.8", "umidade": "28", "tempdht11": "34.1", "tmedia": "34.275", "longitude": -51.369353, "latitude": -25.285474999999998}, {"id": "8884", "data_brasil": "2021-09-28 16:03:20", "temp280": "35.61", "pressao280": "91255.9", "umidade": "25", "tempdht11": "35.1", "tmedia": "35.355", "longitude": -51.269352999999995, "latitude": -25.185474999999997}, {"id": "8885", "data_brasil": "2021-09-28 16:08:25", "temp280": "33.02", "pressao280": "91256.2", "umidade": "24", "tempdht11": "35.9", "tmedia": "34.46", "longitude": -51.169352999999994, "latitude": -25.085474999999995}, {"id": "8886", "data_brasil": "2021-09-28 16:13:30", "temp280": "32.75", "pressao280": "91258.8", "umidade": "30", "tempdht11": "32.9", "tmedia": "32.825", "longitude": -51.06935299999999, "latitude": -24.985474999999994}, {"id": "8887", "data_brasil": "2021-09-28 16:18:36", "temp280": "32.69", "pressao280": "91254.6", "umidade": "30", "tempdht11": "33.2", "tmedia": "32.945", "longitude": -50.96935299999999, "latitude": -24.885474999999992}, {"id": "8888", "data_brasil": "2021-09-28 16:23:41", "temp280": "31.71", "pressao280": "91244.4", "umidade": "31", "tempdht11": "33.1", "tmedia": "32.405", "longitude": -50.86935299999999, "latitude": -24.78547499999999}, {"id": "8889", "data_brasil": "2021-09-28 16:28:46", "temp280": "31.39", "pressao280": "91250.5", "umidade": "33", "tempdht11": "31.1", "tmedia": "31.245", "longitude": -50.76935299999999, "latitude": -24.68547499999999}, {"id": "8890", "data_brasil": "2021-09-28 16:33:51", "temp280": "32.01", "pressao280": "91237.4", "umidade": "33", "tempdht11": "31.4", "tmedia": "31.705", "longitude": -50.66935299999999, "latitude": -24.585474999999988}, {"id": "8891", "data_brasil": "2021-09-28 16:38:56", "temp280": "30.76", "pressao280": "91249.1", "umidade": "33", "tempdht11": "31.4", "tmedia": "31.08", "longitude": -50.569352999999985, "latitude": -24.485474999999987}, {"id": "8892", "data_brasil": "2021-09-28 16:44:01", "temp280": "30.5", "pressao280": "91237.4", "umidade": "34", "tempdht11": "30.5", "tmedia": "30.5", "longitude": -50.469352999999984, "latitude": -24.385474999999985}, {"id": "8893", "data_brasil": "2021-09-28 16:49:07", "temp280": "30.49", "pressao280": "91234.5", "umidade": "35", "tempdht11": "30.4", "tmedia": "30.445", "longitude": -50.36935299999998, "latitude": -24.285474999999984}, {"id": "8894", "data_brasil": "2021-09-28 16:54:12", "temp280": "30.15", "pressao280": "91226.3", "umidade": "36", "tempdht11": "30.3", "tmedia": "30.225", "longitude": -50.26935299999998, "latitude": -24.185474999999983}, {"id": "8895", "data_brasil": "2021-09-28 16:59:17", "temp280": "30.69", "pressao280": "91219", "umidade": "36", "tempdht11": "30", "tmedia": "30.345", "longitude": -50.16935299999998, "latitude": -24.08547499999998}, {"id": "8896", "data_brasil": "2021-09-28 17:04:22", "temp280": "30.48", "pressao280": "91210.9", "umidade": "36", "tempdht11": "30.4", "tmedia": "30.44", "longitude": -50.06935299999998, "latitude": -23.98547499999998}, {"id": "8897", "data_brasil": "2021-09-28 17:09:27", "temp280": "30.74", "pressao280": "91207.6", "umidade": "36", "tempdht11": "30.3", "tmedia": "30.52", "longitude": -49.96935299999998, "latitude": -23.88547499999998}, {"id": "8898", "data_brasil": "2021-09-28 17:14:32", "temp280": "30.29", "pressao280": "91213.4", "umidade": "36", "tempdht11": "30.4", "tmedia": "30.345", "longitude": -49.869352999999975, "latitude": -23.785474999999977}, {"id": "8899", "data_brasil": "2021-09-28 17:19:38", "temp280": "29.99", "pressao280": "91213.6", "umidade": "36", "tempdht11": "30.1", "tmedia": "30.045", "longitude": -49.769352999999974, "latitude": -23.685474999999975}, {"id": "8900", "data_brasil": "2021-09-28 17:24:43", "temp280": "30", "pressao280": "91204.2", "umidade": "37", "tempdht11": "29.7", "tmedia": "29.85", "longitude": -49.66935299999997, "latitude": -23.585474999999974}, {"id": "8901", "data_brasil": "2021-09-28 17:29:48", "temp280": "29.92", "pressao280": "91200.8", "umidade": "38", "tempdht11": "29.5", "tmedia": "29.71", "longitude": -49.56935299999997, "latitude": -23.485474999999973}, {"id": "8902", "data_brasil": "2021-09-28 17:34:53", "temp280": "29.57", "pressao280": "91209.3", "umidade": "39", "tempdht11": "29.5", "tmedia": "29.535", "longitude": -49.46935299999997, "latitude": -23.38547499999997}, {"id": "8903", "data_brasil": "2021-09-28 17:39:58", "temp280": "29.35", "pressao280": "91198.9", "umidade": "42", "tempdht11": "29.2", "tmedia": "29.275", "longitude": -49.36935299999997, "latitude": -23.28547499999997}, {"id": "8904", "data_brasil": "2021-09-28 17:45:03", "temp280": "28.94", "pressao280": "91213.7", "umidade": "45", "tempdht11": "29", "tmedia": "28.97", "longitude": -49.26935299999997, "latitude": -23.18547499999997}, {"id": "8905", "data_brasil": "2021-09-28 17:50:08", "temp280": "28.63", "pressao280": "91216", "umidade": "47", "tempdht11": "28.7", "tmedia": "28.665", "longitude": -49.169352999999965, "latitude": -23.085474999999967}, {"id": "8906", "data_brasil": "2021-09-28 17:55:13", "temp280": "28.34", "pressao280": "91228.8", "umidade": "49", "tempdht11": "28.4", "tmedia": "28.37", "longitude": -49.069352999999964, "latitude": -22.985474999999965}, {"id": "8907", "data_brasil": "2021-09-28 18:00:19", "temp280": "28.34", "pressao280": "91229", "umidade": "51", "tempdht11": "28.1", "tmedia": "28.22", "longitude": -48.96935299999996, "latitude": -22.885474999999964}, {"id": "8908", "data_brasil": "2021-09-28 18:05:24", "temp280": "28.33", "pressao280": "91247.3", "umidade": "51", "tempdht11": "28", "tmedia": "28.165", "longitude": -48.86935299999996, "latitude": -22.785474999999963}, {"id": "8909", "data_brasil": "2021-09-28 18:10:30", "temp280": "28.12", "pressao280": "91253.9", "umidade": "53", "tempdht11": "28", "tmedia": "28.06", "longitude": -48.76935299999996, "latitude": -22.68547499999996}, {"id": "8910", "data_brasil": "2021-09-28 18:15:35", "temp280": "27.79", "pressao280": "91263.8", "umidade": "53", "tempdht11": "27.9", "tmedia": "27.845", "longitude": -48.66935299999996, "latitude": -22.58547499999996}, {"id": "8911", "data_brasil": "2021-09-28 18:20:41", "temp280": "27.82", "pressao280": "91281.1", "umidade": "55", "tempdht11": "27.5", "tmedia": "27.66", "longitude": -48.56935299999996, "latitude": -22.48547499999996}, {"id": "8912", "data_brasil": "2021-09-28 18:25:46", "temp280": "27.69", "pressao280": "91281", "umidade": "55", "tempdht11": "27.5", "tmedia": "27.595", "longitude": -48.469352999999956, "latitude": -22.385474999999957}, {"id": "8913", "data_brasil": "2021-09-28 18:30:51", "temp280": "27.66", "pressao280": "91288.1", "umidade": "56", "tempdht11": "27.3", "tmedia": "27.48", "longitude": -48.369352999999954, "latitude": -22.285474999999956}, {"id": "8914", "data_brasil": "2021-09-28 18:35:56", "temp280": "27.6", "pressao280": "91286", "umidade": "56", "tempdht11": "27.4", "tmedia": "27.5", "longitude": -48.26935299999995, "latitude": -22.185474999999954}, {"id": "8915", "data_brasil": "2021-09-28 18:41:01", "temp280": "27.21", "pressao280": "91282.1", "umidade": "57", "tempdht11": "27.2", "tmedia": "27.205", "longitude": -48.16935299999995, "latitude": -22.085474999999953}, {"id": "8916", "data_brasil": "2021-09-28 18:46:07", "temp280": "27.37", "pressao280": "91284.9", "umidade": "58", "tempdht11": "27", "tmedia": "27.185", "longitude": -48.06935299999995, "latitude": -21.98547499999995}, {"id": "8917", "data_brasil": "2021-09-28 18:51:12", "temp280": "27.24", "pressao280": "91288.1", "umidade": "58", "tempdht11": "27.1", "tmedia": "27.17", "longitude": -47.96935299999995, "latitude": -21.88547499999995}, {"id": "8918", "data_brasil": "2021-09-28 18:56:17", "temp280": "27.23", "pressao280": "91288.2", "umidade": "58", "tempdht11": "27.1", "tmedia": "27.165", "longitude": -47.86935299999995, "latitude": -21.78547499999995}, {"id": "8919", "data_brasil": "2021-09-28 19:01:22", "temp280": "26.82", "pressao280": "91276.7", "umidade": "59", "tempdht11": "26.9", "tmedia": "26.86", "longitude": -47.769352999999946, "latitude": -21.685474999999947}, {"id": "8920", "data_brasil": "2021-09-28 19:06:27", "temp280": "26.88", "pressao280": "91284.3", "umidade": "59", "tempdht11": "26.6", "tmedia": "26.74", "longitude": -47.669352999999944, "latitude": -21.585474999999946}, {"id": "8921", "data_brasil": "2021-09-28 19:11:33", "temp280": "27.3", "pressao280": "91282.7", "umidade": "60", "tempdht11": "26.6", "tmedia": "26.95", "longitude": -47.56935299999994, "latitude": -21.485474999999944}, {"id": "8922", "data_brasil": "2021-09-28 19:16:38", "temp280": "26.81", "pressao280": "91274.4", "umidade": "59", "tempdht11": "26.9", "tmedia": "26.855", "longitude": -47.46935299999994, "latitude": -21.385474999999943}, {"id": "8923", "data_brasil": "2021-09-28 19:21:43", "temp280": "26.6", "pressao280": "91271.6", "umidade": "60", "tempdht11": "26.6", "tmedia": "26.6", "longitude": -47.36935299999994, "latitude": -21.28547499999994}, {"id": "8924", "data_brasil": "2021-09-28 19:26:48", "temp280": "26.71", "pressao280": "91287.9", "umidade": "61", "tempdht11": "26.3", "tmedia": "26.505", "longitude": -47.26935299999994, "latitude": -21.18547499999994}, {"id": "8925", "data_brasil": "2021-09-28 19:31:54", "temp280": "26.64", "pressao280": "91293.3", "umidade": "60", "tempdht11": "26.4", "tmedia": "26.52", "longitude": -47.16935299999994, "latitude": -21.08547499999994}, {"id": "8926", "data_brasil": "2021-09-28 19:36:59", "temp280": "23.2", "pressao280": "91254.2", "umidade": "61", "tempdht11": "26.4", "tmedia": "24.8", "longitude": -47.069352999999936, "latitude": -20.985474999999937}, {"id": "8927", "data_brasil": "2021-09-28 19:49:54", "temp280": "188.72", "pressao280": "160024", "umidade": "75", "tempdht11": "22.5", "tmedia": "105.61", "longitude": -46.969352999999934, "latitude": -20.885474999999936}, {"id": "8928", "data_brasil": "2021-10-01 07:50:35", "temp280": "22.26", "pressao280": "91341.4", "umidade": "94", "tempdht11": "21.4", "tmedia": "21.83", "longitude": -46.86935299999993, "latitude": -20.785474999999934}, {"id": "8929", "data_brasil": "2021-10-01 07:55:41", "temp280": "22.31", "pressao280": "91376.8", "umidade": "94", "tempdht11": "21.2", "tmedia": "21.755", "longitude": -46.76935299999993, "latitude": -20.685474999999933}, {"id": "8930", "data_brasil": "2021-10-01 08:00:46", "temp280": "22.25", "pressao280": "91509.9", "umidade": "94", "tempdht11": "21", "tmedia": "21.625", "longitude": -46.66935299999993, "latitude": -20.58547499999993}, {"id": "8931", "data_brasil": "2021-10-01 08:05:51", "temp280": "22.18", "pressao280": "91457.9", "umidade": "93", "tempdht11": "20.9", "tmedia": "21.54", "longitude": -46.56935299999993, "latitude": -20.48547499999993}]');
        return json;
    }

    //update  telemetry
    async updateTelemetry(source){
        this.getTelemetry(source).then(
            data => {

                //update telemetry div
                let div = document.getElementById('telemetryDiv');
                let dateInput = document.getElementById("telemetryDate").valueAsDate;
                let date = new Date();
                if(dateInput == null){
                    date = new Date(date.getFullYear(), date.getMonth(), date.getDay());
                }else{
                    date = new Date(dateInput.getFullYear(), dateInput.getMonth(), dateInput.getDay());
                }
                let telemetry = data.filter(
                    function(i){
                        return new Date(i.data_brasil) >= date;
                    }
                );
                if(Object.keys(telemetry).length == 0) return;
                div.innerHTML = "";
                for (var i = 0; i < Object.keys(telemetry).length; i++){
                    let text = document.createTextNode(`Data: ${telemetry[i]["data_brasil"]}`+
                    `\r\nLatitude: ${telemetry[i]["latitude"]}`+
                    `\r\nLongitude: ${telemetry[i]["longitude"]}`+
                    `\r\nTemperatura 280: ${telemetry[i]["temp280"]}`+
                    `\r\nPressão 280: ${telemetry[i]["pressao280"]}`+
                    `\r\nUmidade: ${telemetry[i]["umidade"]}`+
                    `\r\nTemperatura dht11: ${telemetry[i]["tempdht11"]}`+
                    `\r\nTemperatura média: ${telemetry[i]["tmedia"]}\n\n`);
                    div.appendChild(text);
                }
                
                //update map
                if(this.layer != null){
                    let modify = this.layer.getSource().getFeatures();
                    if(Object.keys(telemetry).length > modify){
                        modify[modify.length-1].setStyle(getStyle('blue'));
                        
                        let features = []
                        for(var i = 2; i <= diff ; i++){
                            features.push(
                                new ol.Feature({
                                    geometry: new ol.geom.Point(ol.proj.fromLonLat([telemetry[Object.keys(telemetry).length -i]["longitude"], telemetry[Object.keys(telemetry).length - i]["latitude"]]))
                                })
                            );
                        }
                        map.addLayer(
                            new ol.layer.Vector({
                                source: new ol.source.Vector({
                                    features: features
                                }),
                                style: getStyle('blue')
                            })
                        );
                        map.addLayer(
                            new ol.layer.Vector({
                                source: new ol.source.Vector({
                                    features: [new ol.Feature({
                                        geometry: new ol.geom.Point(ol.proj.fromLonLat([telemetry[Object.keys(telemetry).length-1]["longitude"], telemetry[Object.keys(telemetry).length - 1]["latitude"]]))
                                    })]
                                }),
                                style: getIcon()
                            })
                        );
                    }
                }else{
                    let features = []
                    for(var i = 0; i < Object.keys(telemetry).length-1; i++){
                        features.push(
                            new ol.Feature({
                                geometry: new ol.geom.Point(ol.proj.fromLonLat([telemetry[i]["longitude"], telemetry[i]["latitude"]]))
                            }) 
                        );
                    }
                    map.addLayer(new ol.layer.Vector({
                        source: new ol.source.Vector({
                            features: features
                        }),
                        style: getStyle('blue')
                    }));
                    map.addLayer(new ol.layer.Vector({
                        source: new ol.source.Vector({
                            features: [new ol.Feature({
                                geometry: new ol.geom.Point(ol.proj.fromLonLat([telemetry[Object.keys(telemetry).length-1]["longitude"], telemetry[Object.keys(telemetry).length-1]["latitude"]]))
                            })]
                        }),
                        style: getIcon()
                    }));
                }
            }
        )
    }
}

class CapsuleSpotGPS{
    constructor(feed_id){
        this.feed_id = feed_id;
    }
    //get telemetry
    async getLocation(){
        let  xmlHttp = new XMLHttpRequest();
        let url = `https://api.findmespot.com/spot-main-web/consumer/rest-api/2.0/public/feed/${this.feed_id}/latest.json`; 
        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText);
    }

    async getLocationHistory50(){
        let  xmlHttp = new XMLHttpRequest();
        let url = `https://api.findmespot.com/spot-main-web/consumer/rest-api/2.0/public/feed/${this.feed_id}/message.json`; 
        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText);
    }

    //update  telemetry
    /*async updateMap(){
        this.getLocation.then(
            data => {
                
            }
        )
    }*/
}

function getIcon(){
    return new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 94],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            scale: 0.4,
            src:'assets/up_logo.png'
        })
    });
}

function getStyle(color){
    return new ol.style.Style({
        image: new ol.style.Circle({
            radius:3,
            fill: new ol.style.Fill({color: color}),
            stroke: false
        })
    })
}

//openlayers map
let map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM({
            imageSmoothing: false,
            transition: 0,
            wrapX: false,
            //maxZoom: 3
        })
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-51.44094249617333,-24.656091369442564]),
      zoom: 7,
      maxZoom: 20,
    })
  });

//sidebar
var sidebar = new ol.control.Sidebar({ element: 'sidebar', position: 'left' });
map.addControl(sidebar);


// -------- Main ----------
let ballonTelemetry = new CapsuleTelemetry();
let ballonSpot = new CapsuleSpotGPS();
let telemetryInterval;
let spotInterval;

/*
on telemetry button click start the telemetry fetch, at
each 2 min

TODO - Prevent multi clicks
*/
document.getElementById("startTelemetry").addEventListener(
    "click", function(){
        if(document.getElementById("telemetryUrl").value.length == 0) return;
        clearInterval(telemetryInterval);
        ballonTelemetry.updateTelemetry("https://tanamao.info/sensores/jsonGrafico.php");
        telemetryInterval = setInterval(function() {
            ballonTelemetry.updateTelemetry("https://tanamao.info/sensores/jsonGrafico.php");
        }, 1000)
    }
);

/*
on telemetry button click start the telemetry fetch, at
each 2 min

TODO - Prevent multi clicks
*/
document.getElementById("startSpot").addEventListener(
    "click", function(){
        clearInterval(spotInterval);
        ballonTelemetry.updateTelemetry();
        telemetryInterval = setInterval(function() {
            ballonTelemetry.updateTelemetry();
        }, 180000)
    }
);
