import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput } from 'react-native';

export default class SearchInput extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: "",
    };
  }

  handleTextChange = text => {
    //this method gets called when the app detects a change in the input state
    //also the {} means that I'm passing in an object
    this.setState({ text });
    //use a fact arrow function so that I can refer to the state object using this
    //also this is changing the object property called text
  };

  handleSumbitEditing = () =>{
    //the object known as props has a property on it that is a function called onSubmitEditing
    //which is being deconstructed to the onSubmit variable
    const { onSubmit } = this.props;
    const { text } = this.state;

    if(!text) return;
    //we're calling that function here and sending in text
    onSubmit(text);
    //set the text property back to an empty string
    this.setState({ text: "" });
  };

  render() {
    const { placeholder } = this.props;
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect = {false}
          value = {text} //this value is being sent to the handleTextChange
          placeholder = {placeholder}
          placeholderTextColor = "white"
          style = {styles.textInput}
          clearButtonMode = "always"
          onChangeText = {this.handleTextChange}
          onSubmitEditing = {this.handleSumbitEditing}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#666",
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput:{
    flex: 1,
    color: "white",
  },
});
