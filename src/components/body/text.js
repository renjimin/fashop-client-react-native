import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';

export default class Index extends Component {
    render() {
        const { content } = this.props
        return <Text style={styles.content}>{content}</Text>;
    }
}

const styles = StyleSheet.create({
    content: {
        fontSize: 14,
        color: '#333',
        margin: 15,
    }
});