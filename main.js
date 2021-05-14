
function initMap(position) {
  // console.log(position)
  const $lat  = position.coords.latitude;//緯度
  const $long = position.coords.longitude;//経度
  // console.log(longitude)
  const $coordinate = document.getElementById('result');
  $coordinate.innerHTML = '<p>緯度 ' + $lat + '° <br>経度 ' + $long + '°</p>';
  // 位置情報
  let latlng = new google.maps.LatLng($lat, $long);
  // Google Mapsに書き出し
  const map = new google.maps.Map( document.getElementById( 'map' ) , {
    zoom: 15 ,// ズーム値
    center: latlng ,// 中心座標
  } ) ;
  // マーカーの新規出力
  new google.maps.Marker( {
    map: map ,
    position: latlng ,
  } ) ;
};
    
navigator.geolocation.getCurrentPosition(initMap);

function getlocation() {
  // 現在地urlを取得
  if(navigator.geolocation){
    const geo_location = navigator.geolocation;
  
    geo_location.getCurrentPosition(function (position){
        const coords = position.coords;
        const location ="<li><a href = 'http://maps.google.com/maps?q=" + coords.latitude + "," + coords.longitude + "'>"+"現在地：" + coords.latitude + "," + coords.longitude + "</a></li>"; 
        document.getElementById("url").innerHTML = location; 
    });
  }
}
// ボタンアクション
const $button = document.getElementById('js-button');
$button.onclick = getlocation;

