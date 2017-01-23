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
    AlertIOS
} from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import { MonoText } from '../components/StyledText'
import Color from 'color'

// Entries
entries = [{title: "Day 1", "writing": "Oh hello, would you like a cup of tea?"}, {title: "Day 2", "writing": "Oh hello, would you like a cup of tea?"}]

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
                    () => AlertIOS.prompt('Jot down your thoughts', null, text => AlertIOS.alert(text))
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
                <Text style={{ textAlign: "center", color: 'white', fontSize: 20 }}>{this.props.writing}</Text>
            </View>
        )
    }
}


class Entries extends React.Component {
    render() {
        return (
            <ScrollView style={{ flexDirection: 'column' }}>
                <Card 
                    title="Day 1" 
                    writing="Today I attended my first Hackathon at UCSC Hacks 2017. It was an overwhelming but amazing experience!"
                />
                <Card 
                    title="Day 2" 
                    writing="The second day of hacking! Already learned so much from the workshops! "
                />
                <Card 
                    title="Day 3" 
                    writing="Almost got a working model! Two allnighters in a row! My team and I are working hard on our project."
                />
                <Card 
                    title="Day 4" 
                    writing="lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor."
                />
                <Card 
                    title="Day 5" 
                    writing="lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor."
                />
                <Card 
                    title="Day 6" 
                    writing="lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor."
                />
                <Card 
                    title="Day 7" 
                    writing="lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor."
                />
                <Card 
                    title="Day 8" 
                    writing="lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor."
                />
                <Card 
                    title="Day 9" 
                    writing="lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor."
                />
                <Card 
                    title="Day 10" 
                    writing="lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor."
                />
                <Card 
                    title="Day 11" 
                    writing="lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor."
                />
                <Card 
                    title="Day 12" 
                    writing="lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor. lorem ipsum dolor."
                />
            </ScrollView>
        )
    }
}



class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            "expanded": false
        }

    }

    render() {
        var cardStyle = {
            marginTop: 20,
            padding: 20,
            backgroundColor: this.state.expanded ? '#eef' : '#fff',
            borderWidth: 1,
            borderColor: '#333',
            width: this.state.expanded ? 340 : 300,
            height: this.state.expanded ? 400 : 70,
            marginLeft: this.state.expanded ? 20 : 40
        }

        return (
            <TouchableOpacity onPress={() => this.setState({"expanded": !this.state.expanded})}>
                <ScrollView style={cardStyle}>
                    <Text style={{ fontSize: 20, textAlign: "center", color: "#333" }}>{this.props.title}</Text>
                    <Text style={{ fontSize: 17, marginTop: 20, textAlign: "left", color: "black" }}>{this.props.writing}</Text>
                </ScrollView>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        flexDirection: 'column'
    },
    actionButtonIcon: {
        fontSize: 40,
        height: 20,
        color: 'white'
    },
    titleBar: {
        marginTop: 0,
        height: 70,
        backgroundColor: '#3498db',
        paddingTop: 30
    }
})
