import './App.scss';
import {Header} from './components/Header/Header.jsx';
import {Footer} from './components/Footer/Footer.jsx';
import {Notes}   from './components/Notes/Notes.jsx';
import {notes}  from './data/notes.jsx';


function App() {
  

  return (
    <>
     <Header/>

     {notes.map((note)=> {
      return(<Notes
        key={note.key}
        title={note.title}
        content={note.content}/>);
      
     })}

     
     <Footer/>
    </>
  )
}

export default App
