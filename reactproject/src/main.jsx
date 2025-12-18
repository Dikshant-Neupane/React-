import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyfirstComponent></MyfirstComponent>
  </StrictMode>,
)

function MyfirstComponent(){
  return(
    <div>
      <h1>My first function component</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem autem itaque pariatur dolorem atque ut hic quidem accusamus aperiam. Illum, dolorum asperiores. Accusantium quam corrupti, numquam ex aut sit.</p>  
      
    </div>
  )

}
