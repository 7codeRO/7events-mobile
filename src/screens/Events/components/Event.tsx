import {Body, Button, Card, CardItem, Col, Grid, Icon, Left, Right, Text, Thumbnail} from "native-base";
import {Image, StyleSheet, View} from "react-native";
import React from "react";

const Event = ({event, navigation}: any) => {
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={require('../../../../assets/user-icon.png')}/>
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
                navigation.navigate('SingleEvent', {id: event.id})
            }}>
                <View style={style.cardBody}>
                    <Image source={require('../../../../assets/cosmos.jpeg')} style={style.background}/>
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
                        <Icon name="thumbs-up" style={style.blueColor}/>
                        <Text style={style.blueColor}>12</Text>
                    </Col>
                    <Col style={style.column}>
                        <Icon name="chatbubbles"  style={style.blueColor}/>
                        <Text style={style.blueColor}>{event.comments.length}</Text>
                    </Col>
                    <Col style={style.column}>
                        <Icon name="md-checkmark" style={style.blueColor} />
                        <Text style={style.blueColor}>{event.nrGoing}</Text>
                    </Col>
                    <Col style={style.column}>
                        <Icon name="md-star" style={style.blueColor} />
                        <Text style={style.blueColor}>{event.nrInterested}</Text>
                    </Col>
                </Grid>
            </CardItem>
        </Card>
    )
};


const style = StyleSheet.create({
    background: {
        height: 200,
        width: null,
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
    blueColor: {color: '#2196F3'}
});

export default Event;
