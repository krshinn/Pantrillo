import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';



function Popular() {

  const [popular, setPopular] = useState([])  //create variable, function to modify, useState to define what kind of data you have

  useEffect(() => {
  getPopular()


  },[]);


  const getPopular = async () => { //wait for data before you render anything out

    const check = localStorage.getItem('popular') //check if there is something in local storage

    if(check){
      setPopular(JSON.parse(check)); //parsing it back to the array (string to an array)
    }else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`
      );
      const data = await api.json()

      localStorage.setItem('popular', JSON.stringify(data.recipes)) //localstorage can only save strings/stringify
      setPopular(data.recipes)
      console.log(data.recipes)
    }
  }
  return(
  <div>
      <Wrapper>
        <h3>Recipe of the day</h3>
        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: "5rem",
        }}>
          {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
            <Card>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient />
            </Card>
            </SplideSlide>
          );
        })}
         </Splide>
      </Wrapper>
      </div>
    )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  `;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;


  }
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`
export default Popular