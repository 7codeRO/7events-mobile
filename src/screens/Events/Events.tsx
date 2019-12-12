import React from "react";
import { Container, Content } from 'native-base';
import Event from './components/Event';
import events from './components/events.json';

const Events = (props: any) => {
    return (
        <Container>
            <Content>
                {events.map((event, index) =>
                    <Event
                        event={event}
                        navigation={props.navigation}
                        key={index}
                    />
                )}
            </Content>
        </Container>
    )
};


export default Events;
