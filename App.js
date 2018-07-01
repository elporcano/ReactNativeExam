import React from 'react';
import { 
    StyleSheet, 
    Text, 
    TextInput,
    ScrollView,
    View, 
    Image,
    TouchableOpacity,
    Alert
  } from 'react-native';

import Container from 'ReactNativeExam/components/Container';
import Label from 'ReactNativeExam/components/Label';


export default class App extends React.Component {

    constructor(props){
    super(props);
    this.state = {
                  email :'',
                  emailValidate: false ,
                  emailWarning:'',
                  passwordValidate: false,
                  passwordWarning: ''
                 }
  };

    validateEmail = (text) => {
      console.log(text);
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(text) === false)
      {
      console.log("Invalid Email");
      this.setState({emailWarning:"not correct format for email address"});
      this.setState({email:text})
      return false;
        }
      else {
        this.setState({email:text})
        console.log("Valid Email");
        this.setState({emailWarning:" "});
        this.setState({emailValidate:true})
      }
    }

    validatePassword = (text) => {
      console.log(text);
      let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/ ;
      if(reg.test(text) === false)
      {
      console.log("Invalid Password");
      this.setState({passwordWarning:"please use at least 6-12 characters"});
      return false;
        }
      else {
        console.log("Valid Password");
        this.setState({passwordWarning:" "});
        this.setState({passwordValidate:true})
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
                  onChangeText={(text) => this.validateEmail(text)}
              />
              <Text style={{color:'red'}}>
                {this.state.emailWarning}
              </Text>
          </Container>

          

          <Container>
              <Label text="Password" />
              <TextInput
                  secureTextEntry={true}
                  style={styles.textInput}
                  placeholder="Input Password"
                  onChangeText={(text) => this.validatePassword(text)}
              />
              <Text style={{color:'red'}}>
                {this.state.passwordWarning}
              </Text>
          </Container>

          <Container>
            <TouchableOpacity onPress={() =>
                  {
                    if (this.state.emailValidate==true&&this.state.passwordValidate==true) 
                    {
                      Alert.alert('Sign In','Success')
                    }    
                  }
                }>

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
    backgroundColor: '#f2e6ff',
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
    padding: 20,
    alignItems:'stretch'
  },


  logo:
  {
    flex:1,
  },
    
  signIn:
  {
    backgroundColor:'#6600ff',
    alignItems:'center',
    justifyContent:'center',
    padding: 10,
  }
   

});
