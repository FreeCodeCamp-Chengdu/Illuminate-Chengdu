$(document).ready(function() {
    var globalMap 
    var clickPosition
    function mapInit () {
        globalMap = new qq.maps.Map(document.getElementById("container"), {
            center: new qq.maps.LatLng(30.67,104.06),      // 地图的中心地理坐标。
            zoom:12                                               
        });
        qq.maps.event.addListener(globalMap, 'click', function(event) {
            $('#exampleModal').modal();
            clickPosition = event.latLng
        });
        $("#btn-submit").click(function(){
           postWork();
        });
    }

    function markerInit() {
        $.get("/works", function(results){
            results.map(function(item){
                var maker = new qq.maps.Marker({
                    title : item.pageName,
                    position : new qq.maps.LatLng(item.lat, item.lng),
                    map : globalMap
                });
            });
        })
    }

    function postWork() {
        var formData = $("form").serializeArray();
        formData.push({
            "name" : "lat",
            "value" : clickPosition.getLat()
        })
        formData.push({
            "name" : "lng",
            "value" : clickPosition.getLng()
        })
        $.post("/works", {"data": formData}, function(){
            markWork();
        })
    }

    function markWork () {
        var marker=new qq.maps.Marker({
            position : clickPosition,
            map : globalMap
        });
        return marker;
    }
    mapInit();
    markerInit();
});