import   './Home.css';
import { Hero,GamingLibrary, MostPopular} from "../../sections/index";

const Home = () => {
    return (
        <>
              <Hero />
        <MostPopular />
        <GamingLibrary/>
        </>
    );
}

export default Home;
