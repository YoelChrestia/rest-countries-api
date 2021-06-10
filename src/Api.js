
export const allCountrieInformation = async () => {
    const url = "https://restcountries.eu/rest/v2/all";
    const peticion = await fetch(url);
    const countrieJson = await peticion.json();
    return countrieJson;
}

export const filterName = async (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    const peticion = await fetch(url);
    const countrieJson = await peticion.json();
    return countrieJson;
}

export const filterRegion = async (region) => {
    const url = `https://restcountries.eu/rest/v2/region/${region}`
    const peticion = await fetch(url);
    const countrieJson = await peticion.json();
    return countrieJson;
}

export const filterCode = async (code) => {
    const url = `https://restcountries.eu/rest/v2/alpha/${code}`
    const peticion = await fetch(url);
    const countrieJson = await peticion.json();
    return countrieJson;
}
