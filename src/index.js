import React, {Component}  from 'react'
import {
    Platform,
    Dimensions,
    View,
    Text,
    StyleSheet
} from 'react-native'

import Square from './square'

const colors = ['#000000', '#00ff00', '#ff00ff', '#dedede', '#333333', '#ff0000','#ffff00']
 
var {height, width} = Dimensions.get('window');
var squareWidth = Math.floor(width/colors.length)
const app = (props)=>{

const SquareRows = colors.map((item, index)=><SquareRow {...props} key={index} rowIndex={index}/>) 
    
  return <  View style={{
        flex:1,
       padding:0,
       justifyContent:'center',
       alignItems:'center'
    }}>
           {SquareRows}
           </View>;
}


const SquareRow= (props)=>{
    const SquareCol = colors.map((item,index)=>{
         return <Square {...props} color={item} 
         colorIndex={index}
          colors={colors}
          width={squareWidth}
          key={`${props.rowIndex}${index}`}/>
    })
    return <View style={styles.SquareRow}>
        {SquareCol}
    </View>
}



const styles = StyleSheet.create({
    container: {
        flex:1
    },
    SquareRow:{
        flexDirection:'row',
        alignItems:'center',
        
    },
    

})


export default app