import {Component} from 'react'

export default class MapView extends Component {

  componentDidMount() {
    this.initMap()
  }

  initMap = () => {
    // 需要使用服务API
    const imageUrl = "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer?"
      +
      "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=World_Imagery&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles"
      +
      "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=申请的服务许可（Key）";

    //创建自定义图层对象
    const lay = new window.T.TileLayer(imageUrl, {minZoom: 1, maxZoom: 18});
    const config = {layers: [lay]};
    //初始化地图对象
    const map = new window.T.Map("map", config);
    //设置显示地图的中心点和级别
    map.centerAndZoom(new window.T.LngLat(116.3974642754, 39.9087692474), 18);
    //允许鼠标滚轮缩放地图
    map.enableScrollWheelZoom();
    //创建标注对象
    const marker = new window.T.Marker(
      new window.T.LngLat(116.3974642754, 39.9087692474));
    //向地图上添加标注
    map.addOverLay(marker);

  }

  render() {
    return <div style={{width: '100%', height: '100%'}} id="map"/>
  }
}
