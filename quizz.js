const form_content = [
    ['Qu\'est-ce qu\'un biais cognitif en cybersécurité ?', 'Une faille dans un logiciel', 'Une technique de piratage informatique', 'Une erreur systématique de pensée qui affecte les décisions et les jugements liés à la sécurité en ligne', 'Un type de virus informatique'],
    ['Qu\'est-ce que le biais d\'optimisme en cybersécurité ?', 'La croyance que les menaces en ligne sont trop optimistes pour être vraies', 'La croyance que l\'on est moins susceptible d\'être victime d\'une attaque en ligne', 'L\'optimisme que tous les logiciels sont sécurisés', ' La croyance que l\'optimisation des logiciels améliore la sécurité'],
    ['Qu\'est-ce qu\'un pare-feu en termes de cybersécurité ?', 'Un logiciel qui bloque les logiciels malveillants', 'Un réseau sécurisé pour les entreprises', 'Un programme qui surveille et contrôle le trafic réseau entrant et sortant en fonction de critères de sécurité prédéterminés', 'Un logiciel qui protège contre les incendies dans les data centers'],
    ['Que faire si vous recevez un e-mail d\'un expéditeur inconnu avec une pièce jointe ?', 'Ouvrir immédiatement la pièce jointe', 'Supprimer l\'e-mail sans ouvrir la pièce jointe', 'Répondre à l\'e-mail pour demander plus d\'informations', 'Transmettre l\'e-mail à tous vos contacts'],
    ['Quel est le premier pas à faire pour se protéger contre un ransomware ?', 'Installer un logiciel antivirus de qualité', 'Changer le système d\'exploitation', 'Acheter un nouvel ordinateur', 'Rien, les ransomwares sont impossibles à éviter'],
    ['Que devez-vous faire régulièrement pour prévenir une attaque de ransomware ?', 'Mettre à jour régulièrement votre système d\'exploitation et vos logiciels', 'Changer votre mot de passe tous les jours', 'Déconnecter votre ordinateur d\'Internet', 'Installer de nouveaux logiciels'],
    ['Comment se protéger contre le vol d\'identité en ligne ?', 'En utilisant le même mot de passe pour tous vos comptes', 'En partageant régulièrement des informations personnelles sur les réseaux sociaux', 'En utilisant des mots de passe forts et uniques pour chaque compte, et en limitant les informations personnelles que vous partagez en ligne', 'En utilisant un mot de passe facile à retenir, comme votre date de naissance'],
    ['Quelles sont les cibles courantes des ransomwares ?', 'Les seules grandes entreprises avec des ressources financières importantes', 'Les seuls particuliers avec peu de connaissances en informatique', 'Toutes les entités, y compris les particuliers, les petites et grandes entreprises', 'Seulement les institutions gouvernementales car elles ont des données sensibles'],
    ['Que signifie HTTPS dans l\'URL d\'un site web ?', 'Hyper Text Transfer Protocol Secure', 'High Tech Transfer Protocol System', 'Hyper Text Transfer Protocol Speed', 'High Tech Transfer Protocol Secure'],
    ['Qu\'est-ce qu\'un VPN et pourquoi est-il utile pour la cybersécurité ?', 'Un VPN est un Virus Protection Notification, utile pour avertir les utilisateurs d\'une infection potentielle', 'Un VPN est un Virtual Private Network, utile pour chiffrer les données et masquer l\'adresse IP de l\'utilisateur','Un VPN est un Variable Port Number, utile pour confondre les attaquants qui tentent d\'accéder à un réseau', 'Un VPN est un Virtual Processing Node, utile pour traiter les données dans un environnement virtuel pour les protéger']
];

const submit_btn_var = document.getElementById('submit_btn');
submit_btn_var.textContent = "ENVOYER";

const reponse = ['c', 'b', 'c', 'b', 'a', 'a','c', 'c', 'a', 'b'];
let compt = 0;
let score = 0;
let s     = '';

const quizForm = document.getElementById('quiz_form');

const question_var = document.getElementById('question');
const reponse1_var = document.getElementById('reponse1');
const reponse2_var = document.getElementById('reponse2');
const reponse3_var = document.getElementById('reponse3');
const reponse4_var = document.getElementById('reponse4');


function afficherQuestion() {
    question_var.textContent = form_content[compt][0];
    reponse1_var.textContent = form_content[compt][1];
    reponse2_var.textContent = form_content[compt][2];
    reponse3_var.textContent = form_content[compt][3];
    reponse4_var.textContent = form_content[compt][4];
}

function verifierReponse() {
    // choppé les reponses du formulaire
    const qAnswer = quizForm.elements.q.value;

    if (qAnswer === reponse[compt]) {
        score++;
        console.log("correct");
    }
    
    else {
        console.log("incorrect");
    }

    quizForm.reset();
}


afficherQuestion();

quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    verifierReponse();
    compt++;

    

    // Vérifiez si toutes les questions ont été posées
    if (compt === form_content.length) {
        if (score > 1){
            s = 's' ;
        }
        const bravo_var = document.getElementById('bravo');
        bravo_var.textContent = "Vous avez " + score + " bonne"+s+" réponse"+s+" sur " + form_content.length;
        
        const submit_btn_var = document.getElementById('submit_btn');
        submit_btn_var.textContent = "RÉESSAYER";

        const reponseVar = document.querySelector('.reponse');
        reponseVar.setAttribute('style', 'display: none;');

        const questionVar = document.getElementById('question');
        questionVar.setAttribute('style', 'display: none;');
        

        if (score < form_content.length) {
            bravo_var.classList.add('red');
        }

        else {
            bravo_var.classList.add('green');
        }

        submit_btn_var.addEventListener('click', function() {
            location.reload();
          });
    }

    else {
        afficherQuestion();
    }
}
);