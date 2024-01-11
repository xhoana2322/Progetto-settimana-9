import './App.css';
import MioNavbar from './components/MioNavbar';
import Intro from './components/Intro';
import TrendingNow from './components/TrendingNow';
import WatchItAgain from './components/WatchItAgain';
import NewReleases from './components/NewReleases';
import MioFooter from './components/MioFooter';


function App() {
  return (
    <>
      <MioNavbar />
      <Intro />
      <TrendingNow />
      <WatchItAgain />
      <NewReleases />
      <MioFooter />
    </>
  )
}

export default App;
