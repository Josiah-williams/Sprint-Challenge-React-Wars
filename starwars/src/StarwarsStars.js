import React, {useState, useEffect} from "react"; 
import axios from "axios";
import StarCard from './components/StarCard';
import { 
} from 'reactstrap';

export default function StarsData() {
    const [heros, setHeros] = useState([]);

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(response =>{
             console.log(response.data.results);
             setHeros(response.data.results);
        })
        .catch(error => {
            console.log("the data was not returned", error);
        })
    }, [])


    if (!heros) return <h3>Loading...</h3>;

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {
                  console.log(heros)
        }
        {
          heros.map((item) => {
            console.log(item)
            return (
              <StarCard person={item}/>
            );
          })
        }
      </div>
    );
  }
