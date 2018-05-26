/**
 * Sample React Native App
 * https://github.com/facebook/react-native wtf?
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
    Image,
    Text
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

var  kukuData = require('./kuku.json');
 export  default  class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          {/*{返回6个包}*/}
          {this.renderAllBadge()}
      </View>
    );
  }
  //返回所有包
     renderAllBadge(){

      var allBadge= [];
      //定义数组装所有的子组件

         for (var i=0;i<kukuData.data.length;i++){
             var bb = kukuData.data[i];
             allBadge.push(
                <View key={i} style={styles.container}>
                    <Image source={{uri: bb.icon}} style={styles.imgSt}>

                    </Image>
                    <Text>
                        {bb.title}

                    </Text>


                </View>



             );

         }
         return allBadge;
     }
}

const styles = StyleSheet.create({
  container: {
     backgroundColor:'purple',
      marginTop:30,
      //改变主轴的方向
      flexDirection:'row',
      //设置侧轴的对齐方式
      flexWrap:'wrap'

  },
    imgSt:{
      width:100,
        height:100
    }
});


