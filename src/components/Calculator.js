import style from "./style"
import React from "react"
import { View, Text } from "react-native"
import { useState } from "react"
import { TouchableOpacity } from "react-native"



export default function Calculator(){
  const buttons = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '3', '2', '1', '+', '0', '.', '+/-', '=']  
  const [secondOperand, setsecondOperand] = useState("")
  const [initialOperand, setinitialOperand] = useState("")

  function calculator(){
    const splitNumbers = initialOperand.split(' ')
    const fistNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    switch(operator){
      case '+':
        setinitialOperand((fistNumber + lastNumber).toString())
        return
      case '-': 
        setinitialOperand((fistNumber - lastNumber).toString())
        return
      case '*':
        setinitialOperand((fistNumber * lastNumber).toString())
        return
      case '/': 
        setinitialOperand((fistNumber / lastNumber).toString())
        return
    }
  }

  function handleInput(buttonPressed){
    console.log(buttonPressed)
    if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" ){
      setinitialOperand(initialOperand + " " + buttonPressed + " ")
      return
    }
    switch(buttonPressed){
      case 'DEL':
        setinitialOperand(initialOperand.substring(0, (initialOperand.length -1)))
        return
      case 'AC':
        setsecondOperand("")
        setinitialOperand("")
        return
      case '=':
        setsecondOperand(initialOperand + " = ")
        calculator()
        return
      case '+/-':
        return
    }

    setinitialOperand(initialOperand + buttonPressed)
  }

    return (
  
        <View style={style.container}>
          <View  style={style.result}>
          <Text style={style.textButton}> {initialOperand}</Text>
          <Text style={style.textButton}> {secondOperand}</Text>
          </View>
          
        <View style={style.buttons} >
          {buttons.map((b,index)=>
            <TouchableOpacity onPress={() => handleInput(b)} key={index} style={style.button} >
            <Text style={style.textButton} >{b}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    
    )
}