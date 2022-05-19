//Imports General
import { useState, useEffect } from 'react';

//Components
import Musicians from './components/Musicians';

//Styles
import './styles/app.scss';

//Slider
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

//Images
import Beethoven from './img/Beethoven.jpg';
import Wolfgang from './img/Wolfgang.jpg';
import Bach from './img/Bach.jpg';
import Chopin from './img/Chopin.jpg';
import Tchaïkovski from './img/Tchaïkovski.gif';
import JohannesBrahms from './img/JohannesBrahms.jpg';
import Joseph_Haydn from './img/Joseph_Haydn.jpg';
import Vivaldi from './img/Vivaldi.jpg';
import Wagner from './img/Wagner.jpg';
import Franz from './img/Franz.jpg';
import Schumann from './img/Schumann.jpg';
import Handel from './img/Handel.jpg';
import Liszt from './img/Liszt.jpg';

import Logo from './img/logo.svg';

//Musicians Data
const allMusicians = [
  {
    'id': 1,
    'name': 'Ludwig van Beethoven',
    'birth': 1770,
    'death': 1827,
    'description': 'Surmontant à force de volonté les épreuves d’une vie marquée par la surdité qui le frappe à vingt-sept ans, célébrant dans sa musique le triomphe de l’héroïsme et de la joie quand le destin lui prescrivait l’isolement et la misère, il sera récompensé post mortem par cette affirmation de Romain Rolland : « Il est bien davantage que le premier des musiciens. Il est la force la plus héroïque de l’art moderne ».',
    'link': 'https://fr.wikipedia.org/wiki/Ludwig_van_Beethoven',
    'image': Beethoven
  },
  {
    'id': 2,
    'name': 'Wolfgang Amadeus Mozart',
    'birth': 1756,
    'death': 1791,
    'description': 'Mort à trente-cinq ans, il laisse une œuvre impressionnante (893 œuvres sont répertoriées dans le catalogue Köchel), qui embrasse tous les genres musicaux de son époque. Selon le témoignage de ses contemporains, il était, au piano comme au violon, un virtuose.',
    'link': 'https://fr.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart',
    'image': Wolfgang
  },
  {
    'id': 3,
    'name': 'Jean-Sébastien Bach',
    'birth': 1685,
    'death': 1750,
    'description': 'Ses contemporains l’ont souvent considéré comme un musicien austère, trop savant et moins tourné vers l’avenir que certains de ses collègues. Il a formé de nombreux élèves et transmis son savoir à plusieurs fils musiciens pour lesquels il a composé quantité de pièces à vocation didactique, ne laissant cependant aucun écrit ou traité.',
    'link': 'https://fr.wikipedia.org/wiki/Jean-S%C3%A9bastien_Bach',
    'image': Bach
  }
  ,
  {
    'id': 4,
    'name': 'Frédéric Chopin',
    'birth': 1810,
    'death': 1849,
    'description': 'Reconnu comme l’un des plus grands compositeurs de musique de la période romantique, Frédéric Chopin est aussi l’un des plus célèbres pianistes du xixe siècle. Sa musique est encore aujourd’hui l’une des plus jouées et demeure un passage indispensable à la compréhension du répertoire pianistique universel.',
    'link': 'https://fr.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin',
    'image': Chopin
  }
  ,
  {
    'id': 5,
    'name': 'Piotr Ilitch Tchaïkovski',
    'birth': 1840,
    'death': 1893,
    'description': 'Son œuvre, d’inspiration plus occidentale que celle de ses compatriotes contemporains, intègre des éléments occidentaux ou exotiques, mais ceux-ci sont additionnés à des mélodies folkloriques nationales. Tchaïkovski compose dans tous les genres, mais c’est dans la musique d’orchestre comme les symphonies, les suites, et les concertos qu’il déploie toute sa science et donne la mesure de son sens mélodique inspiré',
    'link': 'https://fr.wikipedia.org/wiki/Piotr_Ilitch_Tcha%C3%AFkovski',
    'image': Tchaïkovski
  }
  ,
  {
    'id': 6,
    'name': 'Johannes Brahms',
    'birth': 1833,
    'death': 1897,
    'description': 'Brahms était à la fois un traditionaliste et un novateur. Sa musique utilise largement les structures et techniques de composition des maîtres baroques et classiques. Il était un maître du contrepoint, une méthode de composition rigoureuse pour laquelle Bach est célèbre, ainsi que du développement thématique, un procédé de composition introduit par Haydn, Mozart et Beethoven.',
    'link': 'https://fr.wikipedia.org/wiki/Johannes_Brahms',
    'image': JohannesBrahms
  }
  ,
  {
    'id': 7,
    'name': 'Joseph Haydn',
    'birth': 1732,
    'death': 1809,
    'description': 'La carrière musicale de Joseph Haydn couvre toute la période classique, allant de la fin de la musique baroque aux débuts du romantisme. Il est à la fois le pont et le moteur qui a permis à cette évolution de s’accomplir.',
    'link': 'https://fr.wikipedia.org/wiki/Joseph_Haydn',
    'image': Joseph_Haydn
  }
  ,
  {
    'id': 8,
    'name': 'Antonio Vivaldi',
    'birth': 1678,
    'death': 1741,
    'description': 'Vivaldi a été l’un des virtuoses du violon les plus célèbres et les plus admirés de son temps (« incomparable virtuose du violon » selon un témoignage contemporain) ; il est également reconnu comme l’un des plus importants compositeurs de la période baroque, en tant qu’initiateur principal du concerto de soliste, genre dérivé du concerto grosso. Son influence, en Italie comme dans toute l’Europe, a été considérable, et peut se mesurer au fait que Bach a adapté et transcrit plus d’œuvres de Vivaldi que de n’importe quel autre musicien.',
    'link': 'https://fr.wikipedia.org/wiki/Antonio_Vivaldi',
    'image': Vivaldi
  }
  ,
  {
    'id': 9,
    'name': 'Richard Wagner',
    'birth': 1813,
    'death': 1883,
    'description': 'Sa vie bohème et fantasque lui fait endosser de multiples habits : révolutionnaire sans le sou, fugitif traqué par la police, homme à femmes, confident intime du roi Louis II de Bavière, critique et analyste musical, intellectuel travaillé par l’antisémitisme de son époque qui sera utilisé, après sa mort et dans un contexte entièrement différent, par les nazis ; son comportement et ses œuvres laissent peu de gens indifférents.',
    'link': 'https://fr.wikipedia.org/wiki/Richard_Wagner',
    'image': Wagner
  }
  ,
  {
    'id': 10,
    'name': 'Franz Schubert',
    'birth': 1797,
    'death': 1828,
    'description': 'Compositeur emblématique de la musique romantique allemande, il est reconnu comme le maître incontesté du lied. Il s’est particulièrement consacré à la musique de chambre, et a aussi écrit de nombreuses œuvres pour piano, une dizaine de symphonies, ainsi que de la musique chorale et sacrée.',
    'link': 'https://fr.wikipedia.org/wiki/Franz_Schubert',
    'image': Franz
  }
  ,
  {
    'id': 11,
    'name': 'Robert Schumann',
    'birth': 1810,
    'death': 1856,
    'description': 'Sa musique s’inscrit dans le mouvement romantique qui domine au début du xixe siècle une Europe en pleine mutation. Compositeur littéraire par excellence, Schumann et sa musique illustrent une composante du romantique passionné. Il est le mari de Clara Schumann, pianiste et également compositrice.',
    'link': 'https://fr.wikipedia.org/wiki/Robert_Schumann',
    'image': Schumann
  }
  ,
  {
    'id': 12,
    'name': 'Georg Friedrich Haendel',
    'birth': 1685,
    'death': 1759,
    'description': 'Virtuose hors pair à l’orgue et au clavecin, Haendel dut à quelques-unes de ses œuvres très connues — notamment son oratorio Le Messie, ses concertos pour orgue et concerti grossi, ses suites pour clavecin (avec sa célèbre sarabande de Haendel), ses musiques de plein air (Water Music et Music for the Royal Fireworks) — de conserver une notoriété active pendant tout le xixe siècle, période d’oubli pour la plupart de ses contemporains.',
    'link': 'https://fr.wikipedia.org/wiki/Georg_Friedrich_Haendel',
    'image': Handel
  }
  ,
  {
    'id': 13,
    'name': 'Franz Liszt',
    'birth': 1811,
    'death': 1886,
    'description': 'Liszt est le père de la technique pianistique moderne et du récital. Avec lui naissent l’impressionnisme au piano, le piano orchestral — Mazeppa, la quatrième Étude d’exécution transcendante — et le piano littéraire — les Années de pèlerinage.',
    'link': 'https://fr.wikipedia.org/wiki/Franz_Liszt',
    'image': Liszt
  }
];

const marks = [
  {
    value: 1678,
    label: '1678'
  },
  {
    value: 1700,
    label: '1700'
  },
  {
    value: 1750,
    label: '1750'
  },
  {
    value: 1800,
    label: '1800'
  },
  {
    value: 1850,
    label: '1850'
  },
  {
    value: 1897,
    label: '1897'
  }
];

const PrettoSlider = styled(Slider)({
  color: '#5b166d',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#5b166d',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});


function App() {

  const [selectedMusicians, setSelectedMusicians] = useState([]);

  const handleSliderChange = (event, value) => {
    // console.log(value);
    setSelectedMusicians(allMusicians.filter(element => {
      return value >= element.birth && value <= element.death
    }))
  }
  //permet d'afficher les images dès la fin du chargement de la page.
  useEffect(() => {
    handleSliderChange('', 1770)
  }, [])

  return (
    <div className="App">
      <header>
        <img src={Logo} alt="logo" />
      </header>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={1770} marks={marks} min={1678} max={1897} onChange={handleSliderChange} onChangeCommitted={handleSliderChange}
      />
      <Musicians selectedMusicians={selectedMusicians} />
    </div>
  );
}

export default App;
