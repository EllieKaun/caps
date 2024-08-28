
import Header from "@/components/features/header/Header";



export default async function Kinopisk() {

    const kinoData = await fetch('https://azamatnew.pythonanywhere.com/api/index/')
    const kino = await kinoData.json()


    const banners = kino.banners
    const movies = kino.movies
    const serials = kino.serials

  return (
    <div>
      <Header />
        <div style={{
            width: '500px', 
            height: '500px', 
            backgroundImage: `url(https://azamatnew.pythonanywhere.com/${banners[0]?.banner_image})`,
            backgroundSize: 'cover',
        }}></div>

    <div>
        {movies.map((movie) => (
            <div key={movie.id}>
                <img src={`https://azamatnew.pythonanywhere.com/${movie.poster}`}/>
                <p>{movie.title}</p>
            </div>
        ))}
        //slug
    </div>

     <div>
        {serials.map((movie) => (
            <div key={movie.id}>
                <img src={`https://azamatnew.pythonanywhere.com/${movie.poster}`}/>
                <p>{movie.title}</p>
            </div>
        ))}
        //slug
    </div>
    </div>
  );
}