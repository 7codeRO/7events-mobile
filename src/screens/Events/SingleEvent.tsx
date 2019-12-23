import React, {useEffect, useState} from "react";
import {Container, Content} from "native-base";
import Event from './components/Event';
import Firebase from "../../Firebase";
import LoadingComponent from "../../components/LoadingComponent";

const SingleEvent = (props: any) => {
    const [event, setEvent] = useState(null);
    const [loading, isLoading] = useState(true);
    const {id} = props.navigation.state.params;
    useEffect(() => {
        Firebase.database().ref(`/events/${id}`).on('value', (snapshot) => {
            setEvent(snapshot.val());
            isLoading(false);
        });
    }, []);

    if (loading) {
        return <LoadingComponent />;
    }

    return (
        <Container>
            <Content>
                <Event event={event} id={id} showComments/>
            </Content>
        </Container>
    );
}

export  default SingleEvent;
