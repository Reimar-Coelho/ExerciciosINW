import './App.css'


import Habilidades from 'components/main/habilidades/Habilidades'
import Contato from 'components/main/contato/Contato'
import Footer from 'components/footer/Footer'
import Header from 'components/header/Header'
import Infopessoal from 'components/main/infoPessoal/Infopessoal'



function App() {

  return (
    <>
    <Header/>
    <Infopessoal/>
    <Habilidades/>
    <Contato/>
    <Footer/>
    </>
  )
}

export default App
