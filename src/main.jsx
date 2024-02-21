import React from 'react'
import ReactDOM from 'react-dom/client'

import Introduction from './components/introduction_react/Introduction.jsx'

import './index.css'
import { Compteur } from './components/useState/Compteur.jsx'
import { Person } from './components/useState/Person.jsx'
import { InputText } from './components/formulaire/InputText.jsx'
import { AcceptTerms } from './components/formulaire/AcceptTerms.jsx'
import AppTp1 from './components/tp1/AppTp1.jsx'
import UseEffect from './components/useEffect/UseEffect.jsx'
import Decompte from './components/useEffect/Decompte.jsx'
import UseMemo from './components/useMemo/UseMemo.jsx'
import HookPersonalise from './components/hook_personnalise/HookPersonalise.jsx'
import UseCallback from './components/useCallback/UseCallback.jsx'
import UseReducer from './components/useReducer/UseReducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <div className="container">
      <h2>1) Introduction à React :</h2>
      <p>Créations de nos premiers componnent et gestion des propriétés du JSX.</p>
    </div>
    <Introduction />

    <div className="container">
      <h2>2) Le hook useState :</h2>
      <p>
        useState permet de déclarer des états locaux dans des composants fonctionnels et de les
        mettre à jour tout en déclenchant le rendu du composant lorsqu'ils changent.
      </p>
    </div>
    <Compteur />
    <Person />

    <div className="container">
      <h2>3) Les formulaires :</h2>
      <p>Les formulaires peuvent être contrôlés ou non par React</p>
    </div>
    <InputText />

    <div className="container">
      <h2>4) Les flux de données dans React :</h2>
      <p>Transmettre les informations des propriétés des éléments parents aux enfants</p>
    </div>
    <AcceptTerms />

    <div className="container">
      <h2>5) Travaux pratique 1 : Liste de produits</h2>
      <p>Exercice sur l'affichage d'une liste de produits avec un filtre et une recherche.</p>
    </div>
    <div className="container boxShadow mt-3 mb-3 p-3">
      <AppTp1 />
    </div>

    <div className="container">
      <h2>6) Le hook useEffect :</h2>
      <p>
        useEffect permet d'effectuer des actions spécifiques à certains moments, comme lorsque 
        le composant est affiché à l'écran ou lorsque des données changent, simplifiant ainsi le 
        travail avec les effets secondaires dans les composants fonctionnels.
      </p>
      <div className="container boxShadow mt-3 mb-3 p-3">
        <UseEffect />
        <Decompte />
      </div>
    </div>

    <div className="container">
      <h2>7) Le hook useMemo et useId :</h2>
      <p>
      useMemo permet de mémoriser la valeur calculée d'une expression entre les rendus de composants, 
      améliorant ainsi les performances en évitant les recalculs inutiles.
      </p>
      <p>
      useId permet de générer de manière unique un identifiant stable pour une utilisation dans 
      les éléments DOM.
      </p>
      <div className="container boxShadow mt-3 mb-3 p-3">
        <UseMemo />
      </div>
    </div>

    <div className="container">
      <h2>8) Le hook useRef :</h2>
    </div>

    <div className="container">
      <h2>9) Les hooks personnalisés :</h2>
      <div className="container boxShadow mt-3 mb-3 p-3">
        <HookPersonalise />
      </div>
    </div>

    <div className="container">
      <h2>10) Mémorisation et useCallback :</h2>
      <div className="container boxShadow mt-3 mb-3 p-3">
        <UseCallback />
      </div>
    </div>

    <div className="container">
      <h2>11) Le hook useReducer :</h2>
      <p>
      useReducer simplifie la gestion des états complexes en React en permettant une mise à jour 
      structurée de l'état à l'aide d'une fonction de réduction. C'est une alternative plus 
      organisée et prévisible à useState pour les états plus compliqués.
      </p>
      <div className="container boxShadow mt-3 mb-3 p-3">
        <UseReducer />
      </div>
    </div>

    <div className="container mt-3 mb-3">
      <h2>12) Librairie framer-motion :</h2>
      <p>
      Framer-motion permet de faire de petites animations directement dans le code jsx de react.
      </p>
      <a target='blank' href="https://www.framer.com/?utm_source=motion-readme">framer-motion</a>
    </div>

  </React.StrictMode>,

)
