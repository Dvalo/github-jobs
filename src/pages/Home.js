import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import Jobs from '../components/Jobs';


function Home() {
  return (
    <div className="home">
      <Header />
      <SearchFilter />
      <Jobs />
    </div>
  );
}

export default Home;

