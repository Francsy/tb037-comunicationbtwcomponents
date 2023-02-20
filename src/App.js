import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { emailContext } from './context/emailContext'
import { useState } from 'react'

function App() {
  
  const [email, setEmail] = useState('')
  const setNewEmail = (email) => setEmail(email);

  const emailData = {
    email,
    setNewEmail
  }

  return (
    <div className="App">
      <emailContext.Provider value={emailData} >
        <Header />
        <Main />
      </emailContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
