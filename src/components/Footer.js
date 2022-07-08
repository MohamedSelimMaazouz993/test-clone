import React from 'react'
import {Navbar} from 'react-bootstrap'

function Footer() {
  return (
    
    <div class="container">
     <footer class="py-5">
     <div class="row">
      <div class="col-6 col-md-2 mb-3">
        
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" >Udemy Business</a></li>
          <li class="nav-item mb-2"><a href="#" >Enseigner sur Udemy</a></li>
          <li class="nav-item mb-2"><a href="#" >Téléchargez l'application</a></li>
          <li class="nav-item mb-2"><a href="#" > À propos d'Udemy</a></li>
          <li class="nav-item mb-2"><a href="#" >Contactez-nous</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" >Carrières</a></li>
          <li class="nav-item mb-2"><a href="#" >Blog</a></li>
          <li class="nav-item mb-2"><a href="#" >Aide et support</a></li>
          <li class="nav-item mb-2"><a href="#" >FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" >Investisseurs</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" >Conditions</a></li>
          <li class="nav-item mb-2"><a href="#" >Politique de confidentialité</a></li>
          <li class="nav-item mb-2"><a href="#" >Paramètres des cookies</a></li>
          <li class="nav-item mb-2"><a href="#" >Plan du site</a></li>
          <li class="nav-item mb-2"><a href="#" >Déclaration d'accessibilité</a></li>
        </ul>
      </div>

      
    </div>
    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
    
      <p>&copy; 2022 Udemy, Inc.</p>
    
    </div>
   </footer>
   </div>
      
  )
}
export default Footer ;