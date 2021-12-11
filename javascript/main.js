/***   
 * Telemetry class
 * 
 * 
 */
class CapsuleTelemetry{

    constructor(telemetry_source){
        this.layer = null; //map telemetry layer
    }

    setVisibility(bool){
        this.layer.setVisible(bool);
    }

    //get telemetry
    async getTelemetry(source){
        let  xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", source, false);
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText).slice(0,50);
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
                    let text = document.createTextNode(`\r\nData: ${telemetry[i]["data_brasil"]}`+
                    `\r\nLatitude: ${telemetry[i]["lat"]}`+
                    `\r\nLongitude: ${telemetry[i]["lng"]}`+
                    `\r\n<b>Temperatura:</b> ${telemetry[i]["tempbmp"]}`+
                    `\r\n<b>Pressão:</b> ${telemetry[i]["presbmp"]}`+
                    `\r\n<b>Temperatura acelerometro:</b> ${telemetry[i]["tempaceletrometro"]}\n\n`);
                    div.appendChild(text);
                }
                
                //update map

                if(this.layer != null){
                    //after the first draw
                    //enters here and draw
                    //only the newer points
                    let modify = this.layer.getSource().getFeatures();
                    let modifySource = this.layer.getSource();
                    if(Object.keys(telemetry).length > modify.length){
                        let id = Object.keys(modify).reduce(function(a,b){ return modify[a].getProperties().id > modify[b].getProperties().id ? a : b});
                        modify[id].setStyle(getStyle('darkblue'));
                        
                        let diff = Math.abs(Object.keys(telemetry).length-modify.length);
                        let features = [];

                        for(var i = 1; i <= diff ; i++){
                            let idx = telemetry.length-i;
                            let fet = new ol.Feature({
                                geometry: new ol.geom.Point(ol.proj.fromLonLat([telemetry[idx]["lng"], telemetry[idx]["lat"]]))
                            });
                            fet.setProperties({'id':telemetry[i]["id"]});
                            fet.setProperties({'Data':`\r\n<b>Data:</b> ${telemetry[idx]["data_brasil"]}`+
                            `\r\n<b>Latitude:</b> ${telemetry[idx]["lat"]}`+
                            `\r\n<b>Longitude:</b> ${telemetry[idx]["lng"]}`+
                            `\r\n<b>Temperatura:</b> ${telemetry[idx]["tempbmp"]}`+
                            `\r\n<b>Pressão:</b> ${telemetry[idx]["presbmp"]}`+
                            `\r\n<b>Temperatura acelerometro:</b> ${telemetry[idx]["tempaceletrometro"]}`});
                            if(i != 1){
                                fet.setStyle(getStyle("darkblue"));
                            }else{
                                fet.setStyle(getIcon());
                            }
                            features.push(fet);
                        }
                        modifySource.addFeatures(features);
                    }
                }else{
                    //first time enters here
                    //and create the layer with
                    //the points
                    let features = []
                    for(var i = 0; i < Object.keys(telemetry).length; i++){
                        let fet = new ol.Feature({
                            geometry: new ol.geom.Point(ol.proj.fromLonLat([telemetry[i]["lng"], telemetry[i]["lat"]]))
                        });
                        fet.setProperties({'id':telemetry[i]["id"]});
                        fet.setProperties({'Data':`\r\n<b>Data:</b> ${telemetry[i]["data_brasil"]}`+
                        `\r\n<b>Latitude:</b> ${telemetry[i]["lat"]}`+
                        `\r\n<b>Longitude:</b> ${telemetry[i]["lng"]}`+
                        `\r\n<b>Temperatura:</b> ${telemetry[i]["tempbmp"]}`+
                        `\r\n<b>Pressão:</b> ${telemetry[i]["presbmp"]}`+
                        `\r\n<b>Temperatura acelerometro:</b> ${telemetry[i]["tempaceletrometro"]}`});
                        if(i != Object.keys(telemetry).length-1){
                            fet.setStyle(getStyle("darkblue"));
                        }else{
                            fet.setStyle(getIcon());
                        }
                        features.push(fet);
                    }
                    this.layer = new ol.layer.Vector({
                        source: new ol.source.Vector({
                            features: features
                        }),
                    });
                    map.addLayer(this.layer);
                }
            }
        )
    }
}

/***   
 * Spot GPS tracker class
 * 
 * 
 */
class CapsuleSpotGPS{

    constructor(){
        this.layer = null; //map spot layer
        this.lastSpotMessageSize = null;
    }

    setVisibility(bool){
        this.layer.setVisible(bool);
    }

    //get telemetry
    async getLocation(source){
        let  xmlHttp = new XMLHttpRequest();
        let url = `https://api.findmespot.com/spot-main-web/consumer/rest-api/2.0/public/feed/${source}/message.json`;
        //let url = 'http://localhost:8080/dataSpot'; 
        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText);
    }

    //update  telemetry
    async updateMap(source){
        this.getLocation(source).then(
            data => {
                if(Object.values(data).includes("errors")){
                    return;
                }
                //filter only the TRACK messages
                let spotDataMessages = Object.values(data["response"]["feedMessageResponse"]["messages"]["message"]).filter(
                    function(i){
                        return (i["messageType"] == "OK" || 
                                i["messageType"] == "TRACK" ||
                                i["messageType"] == "EXTREME-TRACK" ||
                                i["messageType"] == "UNLIMITED-TRACK" ||
                                i["messageType"] == "NEWMOVEMENT" ||
                                i["messageType"] == "STOP" ||
                                i["messageType"] == "POI");
                    }
                );
                if(this.layer != null){
                    let modify = this.layer.getSource().getFeatures();
                    let modifySource = this.layer.getSource();

                    let id = Object.keys(modify).reduce(function(a,b){ return modify[a].getProperties().id > modify[b].getProperties().id ? a : b});
                    if(spotDataMessages[0]["id"] != modify[id].getProperties()["id"]){
                        modify[id].setStyle(getStyle('orange'));
    
                        let diff = Math.abs(spotDataMessages.length-this.lastSpotMessageSize);
                        let features = []
                        
                        for(var i = 0; i < diff; i++){
                            let fet = new ol.Feature({
                                geometry: new ol.geom.Point(ol.proj.fromLonLat([spotDataMessages[i]["longitude"], spotDataMessages[i]["latitude"]]))
                            });
                            fet.setProperties({'id':spotDataMessages[i]["id"]});
                            fet.setProperties({'Data':`\r\n<b>Data:</b> ${spotDataMessages[i]["dateTime"]}`+
                            `\r\n<b>Latitude:</b> ${spotDataMessages[i]["latitude"]}`+
                            `\r\n<b>Longitude:</b> ${spotDataMessages[i]["longitude"]}`});
                            if(i != 0){
                                fet.setStyle(getStyle("orange"));
                            }else{
                                fet.setStyle(getIcon());
                            }
                            features.push(fet);
                        }
                        modifySource.addFeatures(features);
                    }
                }else{
                    this.lastSpotMessageSize = spotDataMessages.length;
                    let features = []
                    for(var i = 0; i < spotDataMessages.length; i++){
                        let fet = new ol.Feature({
                            geometry: new ol.geom.Point(ol.proj.fromLonLat([spotDataMessages[i]["longitude"], spotDataMessages[i]["latitude"]]))
                        });
                        fet.setProperties({'id':spotDataMessages[i]["id"]});
                        fet.setProperties({'Data':`\r\n<b>Data:</b> ${spotDataMessages[i]["dateTime"]}`+
                        `\r\n<b>Latitude:</b> ${spotDataMessages[i]["latitude"]}`+
                        `\r\n<b>Longitude:</b> ${spotDataMessages[i]["longitude"]}`});
                        if(i != 0){
                            fet.setStyle(getStyle("orange"));
                        }else{
                            fet.setStyle(getIcon());
                        }
                        features.push(fet);
                    }
                    console.log(features);
                    this.layer = new ol.layer.Vector({
                        source: new ol.source.Vector({
                            features: features
                        }),
                    });
                    map.addLayer(this.layer);
                }
            }
        )
    }
}

/***   
 * Prediction class
 * 
 * 
 */
 class BallonPrediction{

    constructor(){
        this.layer = null;
    }

    setVisibility(bool){
        this.layer.setVisible(bool);
    }

    converLon360to180(lon){
        return ((lon+180.0)%360.0)-180.0
    }
    
    //get telemetry
    async getLocation(date, latitude, longitude, altidude, ascent, explosionAlt, descent){
        if(longitude < 0){
            longitude = ((longitude%360.0)+360.0)%360.0;
        }
        let  xmlHttp = new XMLHttpRequest();
        let url = `http://predict.cusf.co.uk/api/v1/?launch_latitude=${latitude}&launch_longitude=${longitude}&launch_datetime=${date.toISOString()}&ascent_rate=${ascent}&burst_altitude=${explosionAlt}&descent_rate=${descent}`;
        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText);
    }
    //update  telemetry
    async updateMap(date, latitude, longitude, altidude, ascent, explosionAlt, descent){
        this.getLocation(date, latitude, longitude, altidude, ascent, explosionAlt, descent).then(
            data => {
                if(Object.values(data).includes("error")){
                    return;
                }
                ascent = data["prediction"][0]["trajectory"];
                descent = data["prediction"][1]["trajectory"];
                
                let features = [];
                
                for(var i = 0; i < ascent.length; i++){
                    let fet = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([this.converLon360to180(ascent[i]["longitude"]), ascent[i]["latitude"]]))
                    });
                    fet.setProperties({'Data':`\r\n<b>Data:</b> ${ascent[i]["datetime"]}`+
                    `\r\n<b>Altitude:</b> ${ascent[i]["altitude"]}`+
                    `\r\n<b>Latitude:</b> ${ascent[i]["latitude"]}`+
                    `\r\n<b>Longitude:</b> ${ascent[i]["longitude"]}`});
                    fet.setStyle(getStyle("blue"));
                    features.push(fet);
                }

                for(var i = 0; i < descent.length; i++){
                    let fet = new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([this.converLon360to180(descent[i]["longitude"]), descent[i]["latitude"]]))
                    });
                    fet.setProperties({'Data':`\r\n<b>Data:</b> ${descent[i]["datetime"]}`+
                    `\r\n<b>Altitude:</b> ${descent[i]["altitude"]}`+
                    `\r\n<b>Latitude:</b> ${descent[i]["latitude"]}`+
                    `\r\n<b>Longitude:</b> ${descent[i]["longitude"]}`});
                    fet.setStyle(getStyle("red"));
                    features.push(fet);
                }
                console.log(features);
                this.layer = new ol.layer.Vector({
                    source: new ol.source.Vector({
                        features: features
                    }),
                });
                map.addLayer(this.layer);
            }
        )
    }
}

/***
 * Utils functions
 */
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

/***
 * Openlayer maps, popup layer and sidebar
 * 
 */
//openlayers map
let map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM({
            imageSmoothing: false,
            transition: 0,
            crossOrigin: 'anonymous'
            //wrapX: false,
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

//info popup
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');
 
var overlay = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
        duration: 250
    }
});

map.addOverlay(overlay);

closer.onclick = function() {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
};

map.on('singleclick', function (evt) {
    if (map.hasFeatureAtPixel(evt.pixel) === true) {
        fet = map.getFeaturesAtPixel(evt.pixel)[0];
        //fet.setStyle(getStyle('red'));

        const coordinate = evt.coordinate;
        
        content.innerHTML = `<p><b>Telemetria:</b>: ${
            map.getFeaturesAtPixel(evt.pixel)[0].get('Data')
        }`;
        overlay.setPosition(coordinate);
    }
});


/***  -------- Main ----------
 */
let ballonTelemetry = new CapsuleTelemetry();
let ballonSpot = new CapsuleSpotGPS();
let ballonPrediction = new BallonPrediction();
let telemetryInterval;
let spotInterval;

/***
*   on telemetry button click start the telemetry fetch, at
*   each 2.5 min
*   
*   TODO - Prevent multi clicks
*/
document.getElementById("startTelemetry").addEventListener(
    "click", function(){
        if(document.getElementById("telemetryUrl").value.length == 0) return;
        clearInterval(telemetryInterval);
        ballonTelemetry.updateTelemetry(document.getElementById("telemetryUrl").value);
        telemetryInterval = setInterval(function() {
            ballonTelemetry.updateTelemetry(document.getElementById("telemetryUrl").value);
        }, 150000)
    }
);

/*** 
*   on telemetry button click start the telemetry fetch, at
*   each 2.5 min
*   
*   TODO - Prevent multi clicks
*/
document.getElementById("startSpot").addEventListener(
    "click", function(){
        //if(document.getElementById("spotFeedId").value.length == 0) return;
        clearInterval(spotInterval);
        ballonSpot.updateMap(document.getElementById("spotFeedId").value);
        spotInterval = setInterval(function() {
            ballonSpot.updateMap(document.getElementById("spotFeedId").value);
        }, 150000)
    }
);

document.getElementById("makePred").addEventListener(
    "click", function(){
        //if(document.getElementById("spotFeedId").value.length == 0) return;
        ballonPrediction.updateMap(
            new Date(document.getElementById("predDate").valueAsDate),
            document.getElementById("predLat").value,
            document.getElementById("predLon").value,
            document.getElementById("predAlt").value,
            document.getElementById("predAs").value,
            document.getElementById("predEx").value,
            document.getElementById("predDes").value
        );
    }
);

/***
 * Toggle buttons
 */
document.getElementById("spotShow").addEventListener(
    "click", function(){
        ballonSpot.setVisibility(document.getElementById("spotShow").checked);
    }
);

document.getElementById("telemetryShow").addEventListener(
    "click", function(){
        ballonTelemetry.setVisibility(document.getElementById("telemetryShow").checked);
    }
);

document.getElementById("predShow").addEventListener(
    "click", function(){
        ballonPrediction.setVisibility(document.getElementById("predShow").checked);
    }
);
