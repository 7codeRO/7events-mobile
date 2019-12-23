import React, {useEffect, useState} from "react";
import Event from './components/Event';
import {View, Text, SafeAreaView, ScrollView} from "react-native";
import Firebase from "../../Firebase";
import LoadingComponent from "../../components/LoadingComponent";
import _ from "lodash";

const Events = (props: any) => {
    const [events, setEvents] = useState(null);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        Firebase.database().ref('/events').on('value', (snapshot) => {
            isLoading(false);
            setEvents(snapshot.val());
        });
    }, []);

    if (loading) return <LoadingComponent />;

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    {events ? Object.keys(events).map(key =>
                        <Event
                            key={key}
                            id={key}
                            event={events[key]}
                            navigation={props.navigation}
                        />
                    ) : <Text >No events</Text>}
            </View>
            </ScrollView>
        </SafeAreaView>
    )
};


export default Events;
