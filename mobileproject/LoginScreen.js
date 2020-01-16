import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";


export default class LoginScreen extends React.Component{
    state = {
        token: null,
        error: false
    };

    // loginHandler(e) {
    //     e.preventDefault();
    //     this.setState({error: false})
    //     fetch('http://localhost:8080/login', {
    //         method: 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify(e.target.uname.value, e.target.psw.value)
            
    //     })
    //     .then(res => {
    //     if (res.status !== 201) {
    //         this.setState({error: true})
    //     } 
    //     else {
    //         this.setState({token: res.body})
    //     }
    //     })
    // }

    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Bookly</Text>
                <Text style={styles.credentialsText}>Username:</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.credentialsText}>Password:</Text>
                <TextInput style={styles.input}/>
                <Button style={styles.logButton} title="Sign in" onPress={() => navigate("Main")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 50
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  credentialsText: {
    fontSize: 25,
    margin: 5,
    marginTop: -5,
  },
  input: {
    width: 200,
    height: 40,
    fontSize: 20,
    borderWidth: 0.5,
    borderColor: '#B3B3B3',
    borderRadius: 10,
    margin: 10,
    marginBottom: 30,
  },
  logButton: {
    width: 200,
    padding: 10,
    margin: 200
  }
});