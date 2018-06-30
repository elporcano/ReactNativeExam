import React from 'react';
import { 
    StyleSheet, 
    Text, 
    TextInput,
    ScrollView,
    View, 
    Image,
    TouchableOpacity
  } from 'react-native';

import Container from 'ReactNativeExam/components/Container';
import Label from 'ReactNativeExam/components/Label';


export default class App extends React.Component {

    constructor(props){
    super(props);
    this.state = {
                email :'',
                validated: false ,
                 }
  };

  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
    {
    console.log("Email is Not Correct");
    this.setState({email:text})
    return false;
      }
    else {
      this.setState({email:text})
      console.log("Email is Correct");
    }
  }


  render() {
    return (
     
      <ScrollView style={styles.container}>


        <View style={[styles.box]}>
          
          <Container>
            <Image 
              style={[styles.logo]}
              source={require('ReactNativeExam/img/logo.png')}
              resizeMode="contain" 
            />

          </Container>

          <Container>
              <Label text="Email" />
              <TextInput
                  style={styles.textInput}
                  placeholder="Input email address"
                  onChangeText={(text) => this.validate(text)}
              />
          </Container>
          <Container>
              <Label text="Password" />
              <TextInput
                  secureTextEntry={true}
                  style={styles.textInput}
                  placeholder="Input Password"
              />
          </Container>
        
          <Container>
            <TouchableOpacity >
              <View style={styles.signIn}>
                <Text style={{color:'white',fontSize: 20,
                              fontWeight: 'bold',
                               fontFamily: 'Verdana'}}>
                  Sign In
                </Text>
              </View>
            </TouchableOpacity>
          </Container>

        </View>
      </ScrollView>

    );
  }
}



const styles = StyleSheet.create({
  
  container: 
  {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
  },

  textInput:
  {
    height:50,
    fontSize:15,
    backgroundColor:'#FFF'
  },

  box:
  {
    flex: 1,
    backgroundColor:'#f2e6ff',
    padding: 20,
    alignItems:'stretch'
  },


  logo:
  {
    flex:1,
    height: 250,
    width: undefined
  },
    
  signIn:
  {
    backgroundColor:'#6600ff',
    alignItems:'center',
    justifyContent:'center',
    padding: 10,
  }
   

});
