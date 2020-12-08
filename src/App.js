import './App.css';
import Dinosaur from './Dinosaurs';
import Dinosaurs from './Dinosaurs'

function App(props) {
  
  return (
    <div className="App">
      {/* <Dinosaurs title={dinosaur.title} author={dinosaur.author} body={dinosaur.body} comments={dinosaur.comments}/> */}
      <h1> {props.post.title}</h1>
      <p>by {props.post.author}</p>
      <p>{props.post.body}</p>
      <h2>Comments:</h2>
      <p>{props.post.comments[0]}</p>
    </div>
  );
}

export default App;
