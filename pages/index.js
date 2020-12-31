//import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import axios from 'axios';
import React, { useEffect, useState} from 'react';
import Planets from './Planets'

export default function Home() {
  const [apiResponseName, setApiResponseName] = useState([]);
  const [apiResponsePop, setApiResponsePop] = useState([]);

  useEffect(async() => {
    const result = await axios('https://swapi.dev/api/planets/');
   /* const knownPlanetsOnly = result.data.results.population == "unknown"
    const knownPlanets = result.data.results.filter(knownPlanetsOnly);
    const knownPlanetsFormatted = result.data.results.map(result.data.results.name)
    setApiResponse(result.data.results)*/
    let planets = result.data.results;
    let knownPlanetsNames = [];
    let knownPlanetsPopulation = [];
    for (let i = 0; i < 10; i++){
      if (result.data.results[i].population != "unknown"){
        //console.log(result.data.results[i].population)
        knownPlanetsNames.push(result.data.results[i].name);
        knownPlanetsPopulation.push(result.data.results[i].population);
      }
    } 
    setApiResponseName(knownPlanetsNames);
    setApiResponsePop(knownPlanetsPopulation);
  },[]);
  return (
    <div>
      {<Planets name={apiResponseName} pop={apiResponsePop}/>}
    </div>
  )
}
