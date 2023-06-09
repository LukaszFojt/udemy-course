import './App.css';
import { Navbar, Hero, About, Projects, Contact, Search, TicTacToe } from './components';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Hero />
            <TicTacToe />
            <About />
            <Projects />
            <Contact />
            <Search />
        </div>
    );
}

export default App;