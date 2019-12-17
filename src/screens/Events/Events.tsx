import React from "react";
import Event from './components/Event';
import events from './components/events.json';
import {View} from "react-native";
import Firebase from "../../Firebase";

const Events = (props: any) => {
    // const database = Firebase.database();
    // Firebase.database().ref('/').once('value').then(function(snapshot) {
    //     console.log(snapshot.val())
    // });
    //
    // Firebase.database().ref('/events').push({
    //     title: 'Event with Comment',
    //     description: 'Description event',
    //     location: 'Cluj-Napoca',
    //     nrGoing: 0,
    //     nrInterested: 0,
    //     private: false,
    //     comments: [{
    //         name: 'Victor Malai',
    //         text: 'EASDSAD'
    //     }],
    // });
    return (
        <View>
                {events.map((event, index) =>
                    <Event
                        event={event}
                        navigation={props.navigation}
                        key={index}
                    />
                )}
        </View>
    )
};


export default Events;
