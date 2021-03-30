import AuctionList from '../components/AuctionList/AuctionList';
import NewAuction from '../components/NewAuction/NewAuction';

const AuctionContainer = () => {
    const url = "http://nackowskis.azurewebsites.net/api/auktion/2320"

    fetch(url).then(response => response.json()).then(json => {

        
    });

    const create = (title, description, endDate, startingPrice, createdBy) => {
        const url = "http://nackowskis.azurewebsites.net/api/auktion/2320";

        let NewAuction = {
            AuktionID: null,
            Titel: title,
            Beskrivning: description,
            StartDatum: new Date(),
            SlutDatum: endDate,
            Gruppkod: 2320,
            Utropspris: startingPrice,
            SkapadAv: createdBy           
        }

        fetch(url,{
            method: 'POST',
            body: JSON.stringify(NewAuction),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(function (data) {
            console.log('Auction skapad');
        });
    }

    return(<>
        <NewAuction create={create} />
        <AuctionList />
    </>);
}

export default AuctionContainer;