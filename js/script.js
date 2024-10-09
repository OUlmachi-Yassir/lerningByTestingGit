// const diagram = document.getElementById('diagram');

// class Container {
//     constructor(nomClasse, attributs, operations) {
//         this.nomClasse = nomClasse;
//         this.attributs = attributs;
//         this.operations = operations;
//     }
// }

// const MonDiagramme = {
//     classe: {
//       id: 1,
//       nom: 'Etudiant',
//       associeA: null, 
//       attributs: ['nom', 'age', 'email'],
//       operations: ['inscrire()', 'etudier()']
//     },
//     classe: {
//         id: 2,
//         nom: 'Professeur',
//         associeA: 1, 
//         attributs: ['nom', 'age', 'email'],
//         operations: ['inscrire()', 'etudier()']
//       }
// };

// const etudiantDiagram = new Container(
//     MonDiagramme.classe.nom, 
//     MonDiagramme.classe.attributs, 
//     MonDiagramme.classe.operations
// );

// function createClassDiagram(container) {
//     diagram.innerHTML = ""; 

//     const classDiagram = document.createElement('div');
//     classDiagram.className = "class-diagram";
//     classDiagram.style.border = "1px solid black";
//     classDiagram.style.padding = "10px";
//     classDiagram.style.margin = "10px";
    
//     const classTitre = document.createElement('h3');
//     classTitre.innerText = `${container.nomClasse}`;
    
//     const attribuContainer = document.createElement('ul');
//     container.attributs.forEach(attribu => {
//         const attribuElement = document.createElement('li');
//         attribuElement.innerText = attribu;
//         attribuContainer.appendChild(attribuElement);
//     });

//     const methodsContainer = document.createElement('ul');
//     container.operations.forEach(method => {
//         const methodElement = document.createElement('li');
//         methodElement.innerText = method;
//         methodsContainer.appendChild(methodElement);
//     });

//     classDiagram.appendChild(classTitre);
//     classDiagram.appendChild(attribuContainer);
//     classDiagram.appendChild(methodsContainer);
    
//     diagram.appendChild(classDiagram);
// }

// document.getElementById('new').addEventListener('click', () => createClassDiagram(etudiantDiagram));



class Color {
    constructor(name) {
      this.name = name;
    }
    toString() {
      return `de la couleur ${this.name}`;
    }
  }
  
  class Place {
    constructor(seance, colorName, isAvailable = true) {
      this.id = new Date().getTime();
      this.seance = seance;
      this.color = new Color(colorName);
      this.isAvailable = isAvailable; 

    }
  
    toString() {
      return `La place ${this.id} de la séance ${this.seance} et ${this.color}`;
    }
  }
  
  class Seance {
    constructor(film, horaire, salle) {
      this.film = film;
      this.horaire = horaire;
      this.salle = salle;
    }
  
    toString() {
      return `Séance : ${this.film} présentée à ${this.horaire} dans la salle ${this.salle}`;
    }
  }
  
  class Film {
    constructor(name) {
      this.name = name;
    }
  
    toString() {
      return `Film ${this.name}`;
    }
  }
  
  class Salle {
    constructor(name, position, places) {
      this.name = name;
      this.position = position;
      this.places = new Place [places];
    }
  
    toString() {
      return `La salle ${this.name} se trouve à ${this.position}`;
    }
  }
  
  
  