// B1: import những thư viện cần thiết
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';


// Mảng dữ liệu
var DATA = [
  {tenkhoahoc:"Lập Trình Android", giangvien:"Mr.Lam"},
  {tenkhoahoc:"Lập Trình IOS", giangvien:"Mr.Long"},
  {tenkhoahoc:"Lập Trình PHP", giangvien:"Mr.Tien"},
  {tenkhoahoc:"Lập Trình Unity", giangvien:"Mr.Cuong"},
  {tenkhoahoc:"Lập Trình React Native", giangvien:"Mr.Khoa"}
];


// B2: Viết code cho các class (hay còn gọi là component)
// render: là yêu cầu nó phát sinh (vẽ) ra những gì người ta nhìn thấy
class Bai22ListViewPhan2 extends Component {

  constructor(props) {

    super(props);
  
    // Khai báo dữ liệu đổ vào ListView
    var ds = new ListView.DataSource({rowHasChanged:(r1, r2)=>r1!=r2});

    // Khởi tạo this.state.dataSource - dữ liệu đổ vào ListView
    this.state = {

      dataSource : ds.cloneWithRows(DATA)
    };
  }

  
  // Khai báo hàm tạo 1 hàng - property là object được truyền vào
  taoHang(property){

    return(

      <View style={{padding:10}}>
        <Text style={{color:"blue"}}>{property.tenkhoahoc}</Text>
        <Text>{property.giangvien}</Text>
      </View>
      )
  }


  render() {
    return (
      <View style={{padding:50}}>


        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.taoHang}
        />
      </View>
    );
  }
}


// B3: Đăng ký register Component Chính
AppRegistry.registerComponent('Bai22ListViewPhan2', () => Bai22ListViewPhan2);
