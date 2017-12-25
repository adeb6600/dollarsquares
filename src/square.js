import React, {Component}  from 'react'
import {
    Platform,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import {
    compose , 
    withHandlers,
    withState
} from 'recompose'


const Square = (props)=>{
   return <TouchableOpacity onPress={props.clickSquare} style={{
    backgroundColor: props.colors[props.squareIndex],
    height:props.width,
    width:props.width,
    margin:1
}}></TouchableOpacity>}


    

export default compose(
     withState('squareIndex','setSquareIndex',(props)=>{
        // determine the right color for the square
           let indexDiff = props.colorIndex+props.rowIndex
        if((indexDiff)> props.colors.length-1){
             let calcIndex =(props.colors.length-1) - indexDiff

              return Math.abs(++calcIndex)
     
        }else{
              return indexDiff
        }
        }),
    withHandlers({
        clickSquare: (props)=>(event)=>{
            if(props.squareIndex <(props.colors.length-1)){
              
             let newColorIndex = ++props.squareIndex
             
            props.setSquareIndex(squareIndex=>newColorIndex)
            }
           
        }
    })
)(Square);