import { useParams , useNavigate} from "react-router-dom"
import {useState , useEffect} from "react"
import { getCountries } from "../api/countries";

const Countries = () => {
    const [ selectedOption, setSelectedOption ] = useState("");
    const [ countries , setCountries ] = useState([]);
    const navigator = useNavigate()
    function naviagteToDramas(){
        navigator("/dramas")
    }
    async function getCountryData(){
      let countryData = await getCountries();
      setCountries(countryData);
    }
    useEffect(()=>{
       getCountryData();
    },[])
    // useEffect(() => {
    //   console.log('countries is', countries);
    // }, [countries]);
  return (
    <div className="container bg-image">
      <div className="dropdown" style={{"paddingTop":"40px","textAlign":"center"}}>
        <button className="btn btn-secondary dropdown-toggle w-75" type="button" id="dropdownMenuButton"  aria-haspopup="true" data-bs-toggle="dropdown"  aria-expanded="false">
        {selectedOption ? selectedOption : 'Country'}
        </button>
        <div className="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
        { countries.map((country)=>{
          return(
          <a className="dropdown-item" key={country.id} style={{"textAlign":"center"}} href="#" onClick={() => {setSelectedOption('India');naviagteToDramas()}}>{country.name}</a>
          )
        })}
             </div>
      </div>
    </div>
 
  )
}

export default Countries