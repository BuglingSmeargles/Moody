import React from 'react'
import {
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Vibration,
  Alert
} from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import { MonoText } from '../components/StyledText'

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <TitleBar writing="My Journal"></TitleBar>
        <Entries />
        <ActionButton buttonColor="rgba(231,76,60,1)" onPress={
          () => Alert.alert("Hey ") 
        } >
            <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton>
      </View>
    )
  }
}

class TitleBar extends React.Component {
  render() {
    return (
      <View style={styles.titleBar}>
        <Text style={{textAlign: "center", color: 'white', fontSize: 20}}>{this.props.writing}</Text>
      </View>
    )
  }
}


class Entries extends React.Component {
  render() {
    return (
      <ScrollView style={{ flexDirection: 'column' }}>
        <Card writing="Day 1"></Card>
        <Card writing="Day 2"></Card>
        <Card writing="Day 3"></Card>
        <Card writing="Day 4"></Card>
        <Card writing="Day 5"></Card>
        <Card writing="Day 6"></Card>
        <Card writing="Day 7"></Card>
        <Card writing="Day 8"></Card>
        <Card writing="Day 9"></Card>
        <Card writing="Day 10"></Card><Card writing="Day 1"></Card>
        <Card writing="Day 2"></Card>
        <Card writing="Day 3"></Card>
        <Card writing="Day 4"></Card>
        <Card writing="Day 5"></Card>
        <Card writing="Day 6"></Card>
        <Card writing="Day 7"></Card>
        <Card writing="Day 8"></Card>
        <Card writing="Day 9"></Card>
        <Card writing="Day 10"></Card><Card writing="Day 1"></Card>
        <Card writing="Day 2"></Card>
        <Card writing="Day 3"></Card>
        <Card writing="Day 4"></Card>
        <Card writing="Day 5"></Card>
        <Card writing="Day 6"></Card>
        <Card writing="Day 7"></Card>
        <Card writing="Day 8"></Card>
        <Card writing="Day 9"></Card>
        <Card writing="Day 10"></Card><Card writing="Day 1"></Card>
        <Card writing="Day 2"></Card>
        <Card writing="Day 3"></Card>
        <Card writing="Day 4"></Card>
        <Card writing="Day 5"></Card>
        <Card writing="Day 6"></Card>
        <Card writing="Day 7"></Card>
        <Card writing="Day 8"></Card>
        <Card writing="Day 9"></Card>
        <Card writing="Day 10"></Card><Card writing="Day 1"></Card>
        <Card writing="Day 2"></Card>
        <Card writing="Day 3"></Card>
        <Card writing="Day 4"></Card>
        <Card writing="Day 5"></Card>
        <Card writing="Day 6"></Card>
        <Card writing="Day 7"></Card>
        <Card writing="Day 8"></Card>
        <Card writing="Day 9"></Card>
        <Card writing="Day 10"></Card><Card writing="Day 1"></Card>
        <Card writing="Day 2"></Card>
        <Card writing="Day 3"></Card>
        <Card writing="Day 4"></Card>
        <Card writing="Day 5"></Card>
        <Card writing="Day 6"></Card>
        <Card writing="Day 7"></Card>
        <Card writing="Day 8"></Card>
        <Card writing="Day 9"></Card>
        <Card writing="Day 10"></Card><Card writing="Day 1"></Card>
        <Card writing="Day 2"></Card>
        <Card writing="Day 3"></Card>
        <Card writing="Day 4"></Card>
        <Card writing="Day 5"></Card>
        <Card writing="Day 6"></Card>
        <Card writing="Day 7"></Card>
        <Card writing="Day 8"></Card>
        <Card writing="Day 9"></Card>
        <Card writing="Day 10"></Card><Card writing="Day 1"></Card>
        <Card writing="Day 2"></Card>
        <Card writing="Day 3"></Card>
        <Card writing="Day 4"></Card>
        <Card writing="Day 5"></Card>
        <Card writing="Day 6"></Card>
        <Card writing="Day 7"></Card>
        <Card writing="Day 8"></Card>
        <Card writing="Day 9"></Card>
        <Card writing="Day 10"></Card><Card writing="Day 1"></Card>
        <Card writing="Day 2"></Card>
        <Card writing="Day 3"></Card>
        <Card writing="Day 4"></Card>
        <Card writing="Day 5"></Card>
        <Card writing="Day 6"></Card>
        <Card writing="Day 7"></Card>
        <Card writing="Day 8"></Card>
        <Card writing="Day 9"></Card>
        <Card writing="Day 10"></Card>
      </ScrollView>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
        <View style={ styles.card}>
            <Text style={{ fontSize: 20, textAlign: "center", color: "#333" }}>{this.props.writing}</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    flexDirection: 'column'
  },
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#333',
    width: 300,
    marginLeft: 40
  },
  actionButtonIcon: {
    fontSize: 40,
    height: 40,
    color: 'white'
  },
  titleBar: {
    marginTop: 0,
    height: 70,
    backgroundColor: '#3498db',
    paddingTop: 30
  }
})
