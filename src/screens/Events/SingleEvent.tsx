import React from "react";
import {Container, Content} from "native-base";
import events from './components/events.json';
import Event from './components/Event';

const SingleEvent = (props: any) => {
    // const id = props.navigation.state.params;
    console.log('props.navigation', props.navigation);
    return (
        <Container>
            <Content>
                <Event event={events[0]}/>
            </Content>
        </Container>
    );
}

export  default SingleEvent;
