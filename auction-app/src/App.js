import './App.css';
import AuctionsContainer from './containers/AuctionsContainer';
import SelectedAuctionContainer from './containers/SelectedAuctionContainer'

function App() {
  return (
    <>
      <AuctionsContainer />
      <SelectedAuctionContainer></SelectedAuctionContainer>
    </>
  );
}

export default App;
