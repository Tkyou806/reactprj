//node -v, npm start하면 실행돼. 이게 cmd보다 편하다.
import logo from './logo.svg';
//css는 .뒤의 것까지 나타내네.
import './App.css';
//이 CSS가 적용된 아이도 . 뒤가 나타나.
import Hello from'./component/Hello.js';
import Component1 from './Component1';
import Component2 from './Component2';
import Component001 from './Component001';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          20241028 react oss class
        </p>
        <Hello />
        <Component1 />
        <Component2 />
        <Component001 />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
