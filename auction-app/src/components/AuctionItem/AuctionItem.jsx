import React from 'react';
import {Card} from 'semantic-ui-react';

const AuctionItem = ({item}) => {
    return(
        <>
        <Card>
            <Card.Content>
                <Card.Header>{item.Titel}</Card.Header>
                <Card.Meta>{item.SlutDatum}</Card.Meta>
            </Card.Content>
        
        <h3>{item.Titel}</h3>
        <p>{item.Beskrivning}</p>
        <p>{item.SlutDatum}</p>
        <p>{item.Utropspris}</p>
        <p>{item.SkapadAv}</p>
        
        </Card>
        
        </>
    );
}

export default AuctionItem;