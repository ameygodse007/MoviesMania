import React,{useState} from 'react';
import SearchBar from "./SearchBar";
import "./App.css";
import CharacterCard from "./CharacterCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row} from 'react-bootstrap';




function App() {

  const[characterInfo,setcharacterInfo]=useState(null);
  const [error,seterror]= useState(null);
  const [isloading,setloading] = useState(false);
  
  
  const getcharacter=async (superHeroname)=>{
    setloading(true);
    const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=fb34530271b349314af0de263d16ab5a&query=${superHeroname}`);
    const data = await response.json();
    //const fildata = data.results.filter((item)=>superHeroname.toLowerCase() === item.title.toLowerCase());
    
    setcharacterInfo(data);
    setloading(false);
  };
  
  
  return (
    <Container  >
      
      <Row  className="justify-content-md-center">
      <h1 >MoviesMania</h1>
      </Row>
      <SearchBar  isloading={isloading} error={error} seterror={seterror} getcharacter={getcharacter}/>
      {characterInfo  ?<CharacterCard characterInfo={characterInfo} /> : null}
    </Container>
  );


}

export default App;

