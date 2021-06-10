import Header from './components/Header';
import Search from './components/Search';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Filter from './components/Filter';
import Countrie from './components/Countrie';
import Details from './components/Details';
import useThemeMode from './useThemeMode';
import { allCountrieInformation, filterRegion, filterName, filterCode } from './Api';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const themes = {
  default: {
    background: "white",
    color: "black",
    filter: "invert(0%) sepia(98%) saturate(0%) hue-rotate(28deg) brightness(95%) contrast(105%)"
  },
  dark: {
    background: "rgb(43, 55, 67)",
    color: "white",
    dark: "rgb(32,45,54)",
    filter: "invert(99%) sepia(0%) saturate(0%) hue-rotate(352deg) brightness(102%) contrast(105%)"
}};

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    margin: 0;
  }

  .display__none{
    display: none;
  }

  body{
    background-color: ${({theme}) => theme.dark };
    font-family: 'Nunito Sans', sans-serif;
  }
`

const App = () => {
  const[allInfo, setAllInfo] = useState([]);
  const[inputValue, setInputValue] = useState([""]);
  const[codeValue, setCodeValue] = useState("");

  const [theme, toggleTheme] = useThemeMode();

  useEffect(() => {
    displayInfo();
  }, []);

  const actualInput = (e) => {
    setInputValue(e.target.value);
  }

  const clickCode = async (e) => {
    const codeFiltered = await filterCode(e);
    setCodeValue(codeFiltered);
  }  

  const displayInfo = async () => {
    const data = await allCountrieInformation();
    setAllInfo(data);
  }

  const handleInput = async (e) => {
      e.preventDefault();
      if(inputValue === "") {
        displayInfo();
      } else {
        const data = await filterName(inputValue);
        setAllInfo(data);
      }
  }

  const handleSelect = async (e) => {
    if(e.target.value === "All Regions") {
      displayInfo();
    } else {
      const data = await filterRegion(e.target.value);
      setAllInfo(data);
    }
  }

  const prueba = [];
  for(let i=0;i<allInfo.length;i++){
    prueba.push(
      <Countrie key={ i }
       name={allInfo[i].name} 
      flag={allInfo[i].flag}
      population={allInfo[i].population}
      region={allInfo[i].region}
      capital={allInfo[i].capital}
      shortName={allInfo[i].alpha3Code}
      clickCode={ clickCode }
      />
    )
  }

  return (
    <ThemeProvider theme={themes[theme]}>
    <GlobalStyle/>
      <Header toggleTheme={toggleTheme}></Header>
      <Router>    
        <Switch>
          <Route exact path="/">
          <Search handleInput={ handleInput } actualInput={ actualInput }></Search>
          <Filter handleSelect={ handleSelect }></Filter>
          {
            prueba
          }
          </Route>
          <Route path="/Countrie/:keyword">
            <Details flag={codeValue.flag} 
            name={codeValue.name} 
            nativeName={codeValue.nativeName} 
            population={codeValue.population} 
            region={codeValue.region} 
            subRegion={codeValue.subregion} 
            capital={codeValue.capital} 
            topLevelDomain={codeValue.topLevelDomain} 
            ></Details>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;