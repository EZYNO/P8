 # Analyseur de reseau social
## Analyseur des Utilisateur

- creer des referenses : 
                    plusage = null
                    moinsage = null
                    plusDAmis = null
- definins un accumulateur : somme = 0
- parcourir le tableau utilisateur 
- pour chaque utilisateur :
 1- ajouter age a somme : somme += utilisateur.age
 2-si plusage === null ou utilisateur.age > plusage.age :
 plusage = {
    nom: utilisateur.nom,
    age: utilisateur.age
 } si non 
         si moinsage === null ou utilisateur.age > moinsage.age :
 moinsage = {
    nom: utilisateur.nom,
    age: utilisateur.age
 }
3- Calculer le nombre d'amis nbrAmis ; 
   si plusDAmis === null ; nbrAmis > plusDAmis.amis :
       plusDAmis = {
        nom : utilisateur nom ,
        amis : nbrAmis
       }
 - calculer nombre total utilisateur : totalUtilisateur
 - calculer la moyenne : somme / totalUtilisateur 
 - retourner {
     plusage,
     moinsage,
     plusDAmis,
     totalUtilisateur,
     moyenne
 }

 ## Analyse des publications
   - creer des references:
                  nombreTotaleDeLickes = 0
                  nombreDePublication = 0
                  publicationAvecLePLusDeLickes = null
                  utilisateurAvecLePlusDeLickes = null
   - parcourir le tableau utilisateurs 
   - Pour chaque utiilisateur:
     
     2- defini un accumulateur somme et  parcourie le tableau publications 
     3- pour chaque publication :
      a- ajouter le nomblre de lickes a somme;
      b-si publicationAvecLePLusDeLickes === null ou publication.lickes > publicationAvecLePLusDeLickes.lickes :
       publicationAvecLePLusDeLickes = {
        id : publication.id ,
        lickes: publication.lickes
       }
       c- nombreDePublication ++
    4- si utilisateurAvecLePlusDeLickes === null ou somme > utilisateurAvecLePlusDeLickes :
utilisateurAvecLePlusDeLickes = {
    name : utilisateur.nom,
    lickes: somme
}
     5- nombreTotaleDeLickes += somme 
   - calculer moyenneLickes = nombreTotaleDeLickes /nombreDePublication
   - retourner {
     nombreDePublication ,
     moyenneLickes,
     publicationAvecLePLusDeLicke,
     utilisateurAvecLePlusDeLickes,
   }
  ## Analyse des commentaires 
  - creer les references : 
        nombreTotaleCommentaire = 0;
        utilisateurEcrire = null,
        utilisateurRecu = null ,
        memoireRecu = {};
        memoireEcrir = {};
  - Parcourir le tableau utilisateurs 
  - Pour chaque utilisateur :
  1- Verifier si utilisateur.nom n'exsiste dans memoireRecu  :
  memoireRecu[utilisateur.nom] = {
    nom : utilisateur.nom,
    commentaireRecu : 0
  }
  2- Parcourir le tableau publications
  3- Pour chaque publication :
   A- Parcourir le tableau Commentaire 
   B- pour chaque commentaire :
    a-nombreTotaleCommentaire ++ 
    b-memoireRecu[utilisateur.nom].commentaireRecu++
    c- si auteur n'existe par dans memoireEcrire :
    memoireEcrire[commentaire.auteur] = {
      id : commentaire.auteur ,
      nombreEcrir: 0 
    } 
     - puis : memoireEcrire[commentaire.auteur].nombreEcrir ++
- Parcourir memoireEcrir : pour chaque auteur
 si  utilisateurEcrire === null ou memoireEcrire[commentaire.auteur].nombreEcrir > utilisateurEcrire.compteur :
    utilisateurEcrire = {
      Auteur : memoireEcrire[commentaire.auteur].id,
      compteur : memoireEcrire[commentaire.auteur].nombreEcrir 
    }
- Parcourir memoireRecu : pour chaque utilisateur
- si utilisateurRecu === null ou memoireRecu[utilisateur.nom].commentaireRecu > utilisateurRecu.compteur :
    utilisateurRecu = {
       Auteur : memoireRecu[utilisateur.no
       m].nom ,
      compteur : memoireRecu[utilisateur.nom].commentaireRecu 
    }
- retourner {
       nombreTotaleCommentaire,
        utilisateurEcrire,
        utilisateurRecu,
}

## Analyse des Relations 
- Creer une memoireAmitié ={}
- un compteur nombreTotalDAmis = 0
- creer une reference plusPopulaire = null
- creer un tableau vide: utilisateurSAnsAmis = [],
- parcourir le tableau utilisateur
- Pour chaque utilisateur :
 1- si utilisateur.amis.length === 0 alors:
 utilisateurSAnsAmis.push("utilisateur.nom");
  si non :
  A- on verifi plusPopulaire === null ou utilisateur.amis.length > plusPopulaire.nombreDAmis :
     plusPopulaire = {
      nom : utilisateur.nom,
      nombreDAmis: utilisateur.amis.length
     }
 2-ON parcour le tableau amis
 3-Pour chaque amiId :
   a- on trouve les donnée de l'utilisateur qui a l'id amiId
   b-on verifi dans les donnés de l'utilisateur si dans son tableau amis il y a l'id de l'utilisateur actuel parcouru 
    -si oui : on creer une paire de cle qui comporte utilisateur.id et amiId , de facon a ce que le plus petit vienne avant le plus grand 
    - puis on verifi si cette paire de clé n'existe pas dans memoireAmitié :
    memoireAmitié[paireDeClé] = true .
    - nombreTotalDAmis ++
- return {
  nombreTotalDAmis,
  plusPopulaire,
  utilisateurSAnsAmis 
}
 