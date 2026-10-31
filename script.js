/*PseudoCode achitecture
  AnalyserResaeuSocial(){
          AnalyserUtilisateur(){
          - Calculer le nombre total d'utilisateur
          - Identifier Utilisateur le plus agé et le moins agé
          - Calculer la moyenne d'age
          }

          AnalyserPublications(){
          - Calculer le nombre total de publications
          - Identifier la publication ayant recu le plus de likes
          - Identifier l'utilisation ayant obtenu le plus de likes au total
          - Calculer la moyenne de likes par publication
          }

          AnalyserCommentaires(){
          - Calculer le nombre total de commentaire
          - Identifier l'utilisateur ayant recu le plus de commentaire
          - Identifier l'utilisateur ayant Ecrire le plus de commentaire
          }

          AnalyserRelations(){
          - Calculer le nombre total d'amitiés
          - Identifier l'utilisateur avec le plus d'amis
          - Identifier l'utilisateur n'ayant aucun ami
          }
  }

*/
const mesUtilisateurs = [
    {
        id: 1,
        nom: "Alice",
        age: 22,
        amis: [2, 3],
        publications: [
            {
                id: 101,
                contenu: "Bonjour !",
                likes: 15,
                commentaires: [
                    { auteur: 2, texte: "Super !" },
                    { auteur: 3, texte: "J'aime !" }
                ]
            },
            {
                id: 102,
                contenu: "Belle journée !",
                likes: 8,
                commentaires: []
            }
        ]
    },

    {
        id: 2,
        nom: "Bob",
        age: 25,
        amis: [1],
        publications: [
            {
                id: 103,
                contenu: "Mon nouveau projet !",
                likes: 20,
                commentaires: [
                    { auteur: 1, texte: "Bravo !" },
                    { auteur: 3, texte: "Excellent !" },
                    { auteur: 1, texte: "Continue !" }
                ]
            }
        ]
    },

    {
        id: 3,
        nom: "David",
        age: 30,
        amis: [1, 2],
        publications: [
            {
                id: 104,
                contenu: "Une belle journée.",
                likes: 12,
                commentaires: [
                    { auteur: 2, texte: "Cool !" }
                ]
            },
            {
                id: 105,
                contenu: "Quelqu'un pour un café ?",
                likes: 5,
                commentaires: []
            }
        ]
    },

    {
        id: 4,
        nom: "Emma",
        age: 19,
        amis: [],
        publications: [
            {
                id: 106,
                contenu: "Premier post !",
                likes: 25,
                commentaires: [
                    { auteur: 1, texte: "Bienvenue !" },
                    { auteur: 2, texte: "Salut !" }
                ]
            }
        ]
    }
];

const analyserUtilisateur= (utilisateurs)=>{
let lePlusAgé = null ;
let lemoinsAgé = null;
const somme = utilisateurs.reduce((acc , utilisateur)=>{
    
    if(lePlusAgé === null || utilisateur.age > lePlusAgé.age ){
        lePlusAgé = {
            nom: utilisateur.nom,
            age: utilisateur.age 
        }
    }
    if (lemoinsAgé === null || utilisateur.age < lemoinsAgé.age ) {
          lemoinsAgé = {
            nom: utilisateur.nom,
            age: utilisateur.age 
        }
    };
acc += utilisateur.age ;
    return acc
}, 0);
const nombreTotalUtilisateur = utilisateurs.length;
const ageMoyen = somme / nombreTotalUtilisateur ;

return{
 nombreTotalUtilisateur,
 ageMoyen,
 lePlusAgé,
 lemoinsAgé   
}
};

const analyserPublications = (utilisateurs)=>{
let nombreTotalDePublication = 0;
let publicationLePlusLiké = null;
let utilisateurLePlusLiké = null;
let nombreTotaleDeLikes = 0;

utilisateurs.forEach(utilisateur => {
    const somme = utilisateur.publications.reduce((acc , publication)=>{
       nombreTotalDePublication++;
       acc += publication.likes;
       if (publicationLePlusLiké === null ||publication.likes > publicationLePlusLiké.likes ) {
        publicationLePlusLiké = {
            id: publication.id,
            likes: publication.likes
        };
       };
       return acc
    }, 0);

    if (utilisateurLePlusLiké === null || somme > utilisateurLePlusLiké.likes) {
        utilisateurLePlusLiké = {
            nom: utilisateur.nom,
            likes: somme
        }
    }

    nombreTotaleDeLikes += somme ;
});

const moyenneDeLikes = nombreTotaleDeLikes / nombreTotalDePublication ;

return{
  nombreTotalDePublication,
  utilisateurLePlusLiké,
  publicationLePlusLiké ,
moyenneDeLikes,
}
};
const analyserCommentaire = (utilisateurs)=>{
    let nombreTotalCommentaire = 0;
    let memoireDesEcris = {};
    let memoireDesRecus = {};
    let utilisateurAyantEcrisLePlus = null;
    let utilisateurAyantRecuLePlus = null;

    utilisateurs.forEach(utilisateur => {

         if (!memoireDesRecus[utilisateur.nom]) {
               memoireDesRecus[utilisateur.nom] ={
                nom: utilisateur.nom,
                commentaireRecu: 0,
                }
            };

        utilisateur.publications.forEach(publication => {
           publication.commentaires.forEach(commentaire => {
            if (!memoireDesEcris[commentaire.auteur]) {
                memoireDesEcris[commentaire.auteur] = {
                    id: commentaire.auteur,
                    commentairesEcris: 0
                }
            };
             nombreTotalCommentaire++;
             memoireDesRecus[utilisateur.nom].commentaireRecu ++;
             memoireDesEcris[commentaire.auteur].commentairesEcris ++
           }); 

        });
         
    });

         Object.values(memoireDesEcris).forEach(auteur => {
            if (utilisateurAyantEcrisLePlus === null || auteur.commentairesEcris > utilisateurAyantEcrisLePlus.nombreEcris ) {
                utilisateurAyantEcrisLePlus = {
                    id: auteur.id,
                    nombreEcris:auteur.commentairesEcris
                }
            }
        });

        Object.values(memoireDesRecus).forEach(utilisateur => {
            if (utilisateurAyantRecuLePlus === null || utilisateur.commentaireRecu > utilisateurAyantRecuLePlus.nombreRecus ) {
                utilisateurAyantRecuLePlus = {
                    nom:utilisateur.nom,
                    nombreRecus:utilisateur.commentaireRecu
                }
            }
        });


    return{
        nombreTotalCommentaire,
        utilisateurAyantEcrisLePlus,
        utilisateurAyantRecuLePlus,
    }
};

const analyserRelations = (utilisateurs)=>{
    let nombreDAmitié = 0;
    let utilisateurSansAmis = [];
    let utilisateurAvecLePlusDamis = null;
    let memoireAmitié = {};

    utilisateurs.forEach(utilisateur => {
        if (utilisateur.amis.length === 0) {
           utilisateurSansAmis.push(utilisateur.nom) 
        }
        if (utilisateurAvecLePlusDamis === null || utilisateur.amis.length > utilisateurAvecLePlusDamis.nombreDAmis ) {
            utilisateurAvecLePlusDamis = {
                nom: utilisateur.nom,
                nombreDAmis: utilisateur.amis.length
            }
        }

        utilisateur.amis.forEach(amiId => {
            const ami = utilisateurs.find(utilisateur => utilisateur.id === amiId);
            if (ami.amis.includes(utilisateur.id)) {
                const petitId = Math.min(utilisateur.id , amiId);
                const grandId = Math.max(utilisateur.id, amiId);
                const laPaire = `${petitId} - ${grandId}`;
                if (!memoireAmitié[laPaire]) {
                    memoireAmitié[laPaire]= true;
                     nombreDAmitié++;
                }
            }
        });
        
    });

    return{
        nombreDAmitié,
        utilisateurAvecLePlusDamis,
        utilisateurSansAmis
    }
}

function analyseReseauSocial(nosUtilisateurs) {
   const analyseUtilisateur = analyserUtilisateur(nosUtilisateurs);
   const analysePublications = analyserPublications(nosUtilisateurs);
   const analyseCommentaire = analyserCommentaire(nosUtilisateurs);
   const analyseRelations = analyserRelations(nosUtilisateurs);

   return{
    nombreTotalUtilisateur:analyseUtilisateur.nombreTotalUtilisateur,
    lageMoyen:analyseUtilisateur.ageMoyen,
    lePlusAgé:analyseUtilisateur.lePlusAgé,
    lemoinsAgé:analyseUtilisateur.lemoinsAgé,
    nombreTotalDePublication:analysePublications.nombreTotalDePublication,
    publicationLePlusLiké:analysePublications.publicationLePlusLiké,
    utilisateurLePlusLiké:analysePublications.utilisateurLePlusLiké,
    moyenneDeLikes:analysePublications.moyenneDeLikes,
    nombreTotalCommentaire:analyseCommentaire.nombreTotalCommentaire,
    utilisateurAyantEcrisLePlus:analyseCommentaire.utilisateurAyantEcrisLePlus,
    utilisateurAyantRecuLePlus:analyseCommentaire.utilisateurAyantRecuLePlus,
    nombreDAmitié:analyseRelations.nombreDAmitié,
    utilisateurAvecLePlusDamis:analyseRelations.utilisateurAvecLePlusDamis,
    utilisateurSansAmis:analyseRelations.utilisateurSansAmis,
   }

}

console.log(analyseReseauSocial(mesUtilisateurs));