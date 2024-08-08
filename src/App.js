import logo from './logo.svg';
import './App.css';

function Header(){
  return <header>
    <h1><a href="/">WEB</a></h1> 
  </header>
}

function Nav(){
  return <nav>
    <ol>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
    </ol>
  </nav>
}

function Article(){
  <article>
    <h2>Main title</h2>
    This is test article..
    input this area..
  </article>
}

function App() {
  return (
    <div>
      <Header></Header>

      <Nav></Nav>

      <Article></Article>
    </div>
  );
}

export default App;
