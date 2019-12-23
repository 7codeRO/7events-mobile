import {Body, Button, Card, CardItem, Col, Grid, Icon, Left, Right, Text, Thumbnail} from "native-base";
import {Image, StyleSheet, View} from "react-native";
import React from "react";
import Firebase from "../../../Firebase";
import _ from "lodash";
import Comments from "./Comments";

const Event = ({event, id, navigation, showComments}: any) => {
    const authEmail = Firebase.auth().currentUser.email;

    const onPressAction = (key) => {
        let data = event[key] ? event[key] : [];

        if (_.includes(event[key], authEmail)) {
            data = _.remove(data, authEmail);
        }else {
            data = [...data, authEmail];
        }

        Firebase.database().ref(`/events/${id}`).update({
            [key]: data
        }, (error) => {});
    };

    const getActionStyle = (key) => (_.includes(event[key], authEmail)) ? style.selectedBlueColor : style.blueColor;

    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: `https://api.adorable.io/avatars/285/${event.user}.png`}}/>
                    <Body>
                        <Text>{event.title}</Text>
                        <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Text note>{event.date}</Text>
                            <Text note>
                                <Icon name='md-locate' style={{fontSize: 14}} />&nbsp;{event.location}
                            </Text>
                        </View>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody button onPress={() => {
                navigation ? navigation.navigate('SingleEvent', {id}) : null;
            }}>
                <View style={style.cardBody}>
                    <View style={{display: 'flex', height: 200, overflow: 'hidden'}}>
                        {event.isPrivate && <Text style={style.private}>Private</Text>}
                        <Image source={{uri: event.imageUrl}} style={style.background}/>
                    </View>
                    <View style={style.cardDescriptionWrapper}>
                        <View style={style.cardDescription}>
                            <Text>{event.description}</Text>
                        </View>
                    </View>
                </View>
            </CardItem>
            <CardItem style={style.footer}>
                <Grid>
                    <Col style={style.column}>
                        <Icon name="thumbs-up" style={getActionStyle('likes')} onPress={() => onPressAction('likes')}/>
                        <Text style={getActionStyle('likes')}>{event.likes ? event.likes.length : 0}</Text>
                    </Col>
                    <Col style={style.column}>
                        <Icon name="chatbubbles" style={style.blueColor}/>
                        <Text style={style.blueColor}>{event.comments ? event.comments.length : 0}</Text>
                    </Col>
                    <Col style={style.column}>
                        <Icon name="md-checkmark" style={getActionStyle('goings')} onPress={() => onPressAction('goings')}/>
                        <Text style={getActionStyle('goings')}>{event.goings ? event.goings.length : 0}</Text>
                    </Col>
                    <Col style={style.column}>
                        <Icon name="md-star" style={getActionStyle('interestings')} onPress={() => onPressAction('interestings')}/>
                        <Text style={getActionStyle('interestings')}>{event.interestings ? event.interestings.length : 0}</Text>
                    </Col>
                </Grid>
            </CardItem>
            {showComments && <Comments event={event} id={id} />}
        </Card>
    )
};


const style = StyleSheet.create({
    background: {
        height: 200,
        width: '100%',
        flex: 1
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    cardDescriptionWrapper: {
        padding: 15,
    },
    cardDescription: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    footer: {
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },
    column: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    blueColor: {color: '#1eb9f3'},
    selectedBlueColor: {color: '#114ff3'},
    private: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'absolute',
        right: -30,
        top: 25,
        fontSize: 12,
        backgroundColor: 'red',
        zIndex: 9999,
        color: '#fff',
        padding: 5,
        width: 150,
        transform: [{ rotate: '45deg'}]
    }
});

export default Event;
