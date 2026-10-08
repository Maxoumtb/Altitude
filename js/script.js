/* SCRIPT.JS : le COMPORTEMENT du site.
   Ici, il sert uniquement à gérer l'envoi du formulaire de contact. */

// 1) On récupère le formulaire de la page grâce à son id="f"
const formulaire = document.getElementById('f');

// 2) On "écoute" l'envoi du formulaire (clic sur "Envoyer ma demande")
formulaire.addEventListener('submit', function (e) {
  // Empêche le rechargement automatique de la page
  e.preventDefault();

  // 3) On lit ce que le visiteur a saisi
  const d = new FormData(formulaire);
  const options = d.getAll('opt').join(', ') || 'Aucune';

  // 4) On rédige le corps de l'e-mail ( \n = retour à la ligne )
  const corps =
    'Nom : ' + d.get('nom') + '\n' +
    'E-mail : ' + d.get('mail') + '\n' +
    'Type : ' + d.get('type') + '\n' +
    'Date : ' + d.get('date') + '\n' +
    'Lieu : ' + d.get('lieu') + '\n' +
    'Invités : ' + d.get('nb') + '\n' +
    'Options : ' + options + '\n\n' +
    d.get('msg');

  // 5) On ouvre la messagerie du visiteur avec le message prérempli.
  //    >>> Remplacez l'adresse par la vôtre. <<<
  window.location.href =
    'mailto:contact@lucasmoreau-dj.fr' +
    '?subject=' + encodeURIComponent('Demande de devis événement') +
    '&body=' + encodeURIComponent(corps);

  // 6) Petit message de confirmation affiché sous le formulaire
  document.getElementById('ok').textContent =
    "Votre messagerie s'ouvre avec votre demande. Il ne reste qu'à l'envoyer.";
});

/* PLUS TARD : ce système ne marche que si le visiteur a une messagerie configurée.
   Pour recevoir les demandes directement, on remplacera les étapes 5 et 6 par un envoi
   vers un service comme Formspree ou Web3Forms. */
