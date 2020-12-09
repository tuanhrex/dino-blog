import './App.css';
import Dinosaurs from './Dinosaurs'

function App(props) {
  
  return (
    <div className="App">
      
      <Dinosaurs 
        title={props.post.title}
        author= {props.post.author}
        body={props.post.body}
        comments={props.post.comments}
      />

    </div>
  );
}

export default App;
