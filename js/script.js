//Resultats debut match
// Récupération des éléments HTML qui seront utilisés dans le script
const drawButton = document.getElementById("drawButton");
const result1Display = document.getElementById("resultatArbitre");
const result2Display = document.getElementById("resultatStade");
const result3Display = document.getElementById("resultMeteo");
const result3Select = document.getElementById("result3Select");
// Définition des tableaux qui seront utilisés pour le tirage au sort
// Arbitre
const result1Array = 
                    ["<strong>Triplés Trundlefoot : </strong><br>Si agression sans double = 1D6, Sur 1 : joueur viré ; sur 6 : victime.<br>Retour des KO = chaque coach lance 1D6. Sur 1, un des joueurs au hasard parmi les  disponibles n’entre pas sur le terrain jusqu’à la prochaine Phase de jeu. <br>Contestation et Pot-de-vin = Impossible <br>Sur A mort l’arbitre ! = remplacé par un standard et chaque équipe reçoit +1 pot-de-vin.",
                    "<strong>Triplés Trundlefoot : </strong><br>Si agression sans double = 1D6, Sur 1 : joueur viré ; sur 6 : victime.<br>Retour des KO = chaque coach lance 1D6. Sur 1, un des joueurs au hasard parmi les  disponibles n’entre pas sur le terrain jusqu’à la prochaine Phase de jeu. <br>Contestation et Pot-de-vin = Impossible <br>Sur A mort l’arbitre ! = remplacé par un standard et chaque équipe reçoit +1 pot-de-vin.",
                    "<strong>Ranulf « Red » Hokuli : </strong><br> Si agression sans double = 1D6, Sur 1-2, au choix du coach : joueur viré ou subit un Jet de Blessure avec +2.<br>Contestation = Impossible<br>Pot-de-vin = possible avant choix viré/blessé<br>Sur A mort l’arbitre ! = remplacé par un standard.",
                    "<strong>Ranulf « Red » Hokuli : </strong><br> Si agression sans double = 1D6, Sur 1-2, au choix du coach : joueur viré ou subit un Jet de Blessure avec +2.<br>Contestation = Impossible<br>Pot-de-vin = possible avant choix viré/blessé<br>Sur A mort l’arbitre ! = remplacé par un standard.",
                    "<strong>Standard : </strong><br>Joueurs expulsés sur un double sur AR ou Blessure<br>Contestation et Pot-de-vin = Possible <br>Sur A mort l’arbitre ! = chaque équipe reçoit +1 pot-de-vin.",
                    "<strong>Standard : </strong><br>Joueurs expulsés sur un double sur AR ou Blessure<br>Contestation et Pot-de-vin = Possible <br>Sur A mort l’arbitre ! = chaque équipe reçoit +1 pot-de-vin.",
                    "<strong>Standard : </strong><br>Joueurs expulsés sur un double sur AR ou Blessure<br>Contestation et Pot-de-vin = Possible <br>Sur A mort l’arbitre ! = chaque équipe reçoit +1 pot-de-vin.",
                    "<strong>Thoron Korensson : </strong><br>Si agression sans double = 1D6, Sur 1-2, joueur viré.<br>Contestation et Pot-de-vin = Possible ; Si 1 au jet : coéquipier au hasard sur le terrain viré également.<br>L’expulsion subit peut être aussi Contestée ou Pot-de-vin avec même effet…<br>Sur A mort l’arbitre ! = relancer les dés ; si second A mort l’arbitre ! remplacé par un standard.",
                    "<strong>Thoron Korensson : </strong><br>Si agression sans double = 1D6, Sur 1-2, joueur viré.<br>Contestation et Pot-de-vin = Possible ; Si 1 au jet : coéquipier au hasard sur le terrain viré également.<br>L’expulsion subit peut être aussi Contestée ou Pot-de-vin avec même effet…<br>Sur A mort l’arbitre ! = relancer les dés ; si second A mort l’arbitre ! remplacé par un standard.",
                    "<strong>Jorm l’Ogre : </strong><br>Si agression sans double = 1D6, Sur 1 (ou 2 si équipe mène au score) : coéquipier sur le terrain au hasard subit un Jet d’AR +1. Turnover si le joueur est Mis à Terre.<br>Contestation et Pot-de-vin = Impossible <br>Sur A mort l’arbitre ! = Reste ;  + si les 2 coach on 0 en Fame : 1D6, le meilleur gagne +1FAME, Si 1 coach possède du FAME, -1FAME & 1D6, Sur 1 : adversaire gagne +1FAME.",
                    "<strong>Jorm l’Ogre : </strong><br>Si agression sans double = 1D6, Sur 1 (ou 2 si équipe mène au score) : coéquipier sur le terrain au hasard subit un Jet d’AR +1. Turnover si le joueur est Mis à Terre.<br>Contestation et Pot-de-vin = Impossible <br>Sur A mort l’arbitre ! = Reste ;  + si les 2 coach on 0 en Fame : 1D6, le meilleur gagne +1FAME, Si 1 coach possède du FAME, -1FAME & 1D6, Sur 1 : adversaire gagne +1FAME."];
// Stade 9 RAS + 24 REGLES 
const result2Array = ["<strong>Stade Standard</strong><br>R.A.S.",
                    "<strong>De l'Eau aux Chevilles : </strong><br> Si joueur Plaqué lors MLP ou Esquive, -1 au Jet d’AR. Si Sonné, et 1 sur 1D6 lors du relevé reste Sonné.",
                    "<strong>Terrain en Pente : </strong><br>Si 1-3 sur 1D6, terrain descend vers En-but équipe en réception, sinon En-but équipe à l’engagement. Lors des rebonds gabarit de déviation remplacé par celui de renvoi avec 3-4 orientée en direction de l’En-but dans le sens de la pente. +1 case de MLP dans le sens de la pente. À la mi-temps, les équipes changent de côté.",
                    "<strong>Glace : </strong><br>+1 case de rebond dans même direction. Si Plaqué, glisse d'une case selon gabarit de Déviation. Si case occupée, reste sur place. Si en touche, Jet de Blessure. Si sur case avec ballon, rebond.",
                    "<strong>Stade Standard</strong><br>R.A.S.",
                    "<strong>Astrogranit : </strong><br>+1 aux Jets d’AR, et si échec aux MLP mais 4+ sur 1D6 reste debout et fin de tour pour ce joueur mais pas de Turnover.",
                    "<strong>Sol Accidenté : </strong><br>-1 M (pas en deçà de 3) pour le match et +1 case de MLP.",
                    "<strong>Pierre Lisse : </strong><br>+1 case de rebond et +1 aux Jets de Blessure.",
                    "<strong>Stade Standard</strong><br>R.A.S.",
                    "<strong>Officiels Apathiques : </strong><br>+1 Pot-de-vin au début de chaque mi-temps.",
                    "<strong>Gradins Épouvantables : </strong><br>À la fin de chaque Phase de Jeu, si 1 sur 1D6 pour chaque coach, alors -1 au FAME (gain mini = 0).",
                    "<strong>Trappes Béantes : </strong><br>Si joueur dans case avec Trappe est considéré comme poussé dans public. Si ballon entre dans case contenant une Trappe, est renvoyé dans direction aléatoire sur 1D6 cases.",
                    "<strong>Stade Standard</strong><br>R.A.S.",
                    "<strong>Marquage Ambigu : </strong><br>L'équipe qui engage se place et décide si la ligne médiane est normale ou décalée d’1 case dans l’une des moitiés de terrain pour cet engagement. Pas de limite dans couloirs latéraux.",
                    "<strong>Désireux de se Faire Connaître :</strong><br> +1D6 X 10.000 po.",
                    "<strong>Cachot Vétuste : </strong><br>Au début de chaque Phase de Jeu, au moment du test KO, 1D6 pour chaque joueur exclu. Sur 5-6 passe en Réserve.",
                    "<strong>Stade Standard</strong><br>R.A.S.",
                    "<strong>Étals de Marchandise : </strong><br>+1D3 aux gains de fin de match.",
                    "<strong>Réputation de Grand Spectacle : </strong><br>Chaque coach lance 1D6. L’addition X 10.000 po est ajouté à leur cagnotte d’avant match.",
                    "<strong>Studio de Diffusion : </strong><br>- 50.000 po sur leur coût des champions (min 10.000). +3 au jet de pop en fin de match.",
                    "<strong>Stade Standard</strong><br>R.A.S.",
                    "<strong>Apothicaires Sur Place : </strong><br>+1 Apothicaire ou +1 Relance pour les équipes interdites d’Apothicaire.",
                    "<strong>Terrain Clôturé : </strong><br>Pas de poussé dans public. Plaqué dans case et Jet d’AR. Le ballon ne peut sortir du terrain, renvoi sur 1D3 cases.",
                    "<strong>Sièges Grand Luxe : </strong><br>Au début de chaque Phase de Jeu après la 1ère, 1D3 + FAME pour chaque coach, si > nombre Relances alors +1 Relance.",
                    "<strong>Stade Standard</strong><br>R.A.S.",
                    "<strong>Cinglés Ivres de Bière : </strong><br>Avant Coup d’Envoi, si 1 (ou 2 après mi-temps) sur 1D6 pas de jet sur le tableau Coups d’Envoi. 1D6 : sur 1, A Mort l'Arbitre ; sur 2-3, Émeute ; sur un 4-5, Rocher ; sur 6, Invasion du Terrain.",
                    "<strong>Populace Tapageuse : </strong><br>+1 FAME (max +2) et +1 au Jet de Blessure si poussé dans le public.",
                    "<strong>Pinailleurs Pédants : </strong><br>Si pas d’expulsion après agro et 1-3 sur 1D6, l’arbitre expulse.",
                    "<strong>Stade Standard</strong><br>R.A.S.",
                    "<strong>Bande de Pacifistes : </strong><br>Si joueur Sonné, KO ou Éliminé et 4+ sur 1D6, pas de blessure. Si 4+ sur 1D6 quand repoussé dans le public va en Réserve.",
                    "<strong>Fans Tièdes : </strong><br>Début toute Phase de Jeu, si 1-2 sur 1D6 -1 FAME (gain mini = 0). Si ballon dans public 1D6 -1 x nombre de perte de FAME, sur résultat <4, ballon renvoyé après fin du tour suivant.",
                    "<strong>Silence Solennel : </strong><br>FAME = 0, Cheerleaders = 0. Les joueurs poussés dans public reviennent dans une case adjacente aux lignes de touches le plus près possible de la case quittée. Si Plaqué quand il est poussé, alors il est Mis à Terre et Jet d'AR.",
                    "<strong>Stade Standard</strong><br>R.A.S.",];

// tableau d'objets pour les optionsMétéo et leur valeur associée
                            //Météo Standard
const result3Option1Array = ["<strong>Canicule :</strong><br>Prochain Coup d'envoi si 1 sur 1D6/joueur, réserve jusqu'au Coup d'envoi suivant.",
                            "<strong>Ensoleillé :</strong><br>-1 aux Passes",
                            "<strong>Clément :</strong><br>R.A.S.","<strong>Clément :</strong><br>R.A.S.", "<strong>Clément :</strong><br>R.A.S.","<strong>Clément :</strong><br>R.A.S.","<strong>Clément :</strong><br>R.A.S.","<strong>Clément :</strong><br>R.A.S.","<strong>Clément :</strong><br>R.A.S.",
                            "<strong>Averse :</strong><br>-1 intercepter, ramasser, réceptionner.",
                            "<strong>Blizzard :</strong><br>Échec aux MLP sur 1-2. Pas de Passe Longue ni de bombe."];
                            //Météo Printemps
const result3Option2Array = ["<strong>Rosée du Matin : </strong><br>Le terrain est recouvert de rosée, ce qui rend plus glissant. Tout joueur tentant de Mettre le Paquet ! glissera et se retrouvera Plaqué sur un jet de 1-2. De plus, tous les jets de Ramasser le ballon subissent un modificateur de -1.",
                            "<strong>Eclosion de Fleurs : </strong><br>Les fleurs sont en train d’éclore et le taux de pollen dans l’air est élevé, forçant l’arbitre sujet au rhume des foins à se mettre à l’abri. Les joueurs ne peuvent pas être Expulsés pour Agression, qu’ils fassent un double sur le jet d’Armure ou de Blessure.",
                            "<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.",
                            "<strong>Brouillard épais : </strong><br>Un voile de brouillard s’est installé sur le terrain, réduisant la visibilité. Les joueurs ne peuvent pas se déplacer de plus de 6 cases, mais ils peuvent tout de même Mettre le Paquet, après. Seules les Passe Rapides et Courtes peuvent être tentées.",
                            "<strong>Vents Violents : </strong><br>Le vent siffle dans le stade et les joueurs peuvent à peine s’entendent. Lancez un D6 chaque fois qu’un joueur veut utiliser une Relance d’équipe. Sur un 2+, il peut utiliser la Relance normalement. Sur un 1, le résultat d’origine est conservé mais la Relance d’équipe n’est pas perdue et cela ne compte pas comme l’utilisation de la Relance d’équipe pour ce tour.",];
                            //Météo été
const result3Option3Array = ["<strong>Canicule : </strong><br>Il fait si chaud que certains joueurs sont victimes d’insolation. Jetez un D6 pour chaque joueur sur le terrain à la fin d’une Phase. Sur 1, le joueur s’évanouit et peut ne pas entrer en jeu avant le prochain Coup d’Envoi.",
                            "<strong>Astrogranite en fusion : </strong><br>il n’y a pas que les joueurs qui soient affectés par la chaleur - même le terrain est en train de fondre ! Les joueurs ne peuvent « Foncer » que d’une seule case.",
                            "<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.",
                            "<strong>Soleil Aveuglant : </strong><br>Il n’y a aucun nuage et le soleil éblouissant empêche de voir bien loin. Seuls les passes Rapides ou Courtes peuvent être tentées et le soleil aveuglant impose un malus de -1 à tous les jets de Passe.",
                            "<strong>Mousson : </strong><br>Un violent orage a éclaté et des trombes d’eau ainsi que des bourrasques de vents frappent le terrain, rendant le ballon imprévisible et glissant. Un modificateur -1 s’impose à tous les jets pour Interférer avec une Passe, Intercepter, Attraper ou Ramasser le ballon. De plus, quand le ballon est dévié, il se dévie à chaque fois d’une case supplémentaire.",];
                            //Météo Automne
const result3Option4Array = ["<strong>Tapis de feuilles mortes : </strong><br>Il semble que le service d’entretien n’ait pas fait son travail correctement ! À chaque fois qu’un joueur est Plaqué, soustrayez 1 au résultat du jet d’armure.",
                            "<strong>Bise d’automne : </strong><br>L’hiver approche vite et les joueurs rechignent à quitter la chaleur des vestiaires. Soustrayez 1 au résultat obtenu à tous les jets de dés effectués pour savoir si l’un de vos joueurs se remet d’un KO.",
                            "<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.","<strong>Tempéré : </strong><br>R.A.S.",
                            "<strong>Pluie Battante : </strong><br>Il pleut, ce qui rend le ballon glissant et difficile à tenir. Un modificateur -1 s’impose à tous les jets pour Interférer avec une Passe, Intercepter, Attraper ou Ramasser le ballon.",
                            "<strong>Vents Forts : </strong><br>Le vent s’emballe ! Faites un jet de déviation pour savoir dans quelle direction il souffle. Pour les Coups d’Envoi et des Passes ratées, le ballon dévie d’un D3 cases dans cette direction avant de faire les jets de déviation normaux.",];
                            //Météo Hiver
const result3Option5Array = ["<strong>Vents Mugissants : </strong><br>Toutes les Passes subissent un modificateur supplémentaire de -1. Chaque coach lance un D6 (relancez les égalités) – le vent souffle en direction de l’En-but du coach perdant. À chaque fois que le ballon se disperse sur un Coup d’Envoi ou une Passe ratée, il sera soufflé dans ce sens. Avant de faire le jet de déviation, prenez le Renvoi et pointez le résultat 3-4 dans la direction du vent, puis jetez un D6 et déplacez le ballon d’une case dans la direction correspondante. Faites cela une deuxième fois, puis faites dévier le ballon normalement.",
                            "<strong>Sol Congelé : </strong><br>Une gelée soudaine rend le sol dur comme du granit (et pas la version « astro » familière aux joueurs). Chaque fois qu’un joueur est Plaqué, ajouter 1 au résultat du jet d’Armure.",
                            "<strong>Temps Frais : </strong><br>R.A.S.","<strong>Temps Frais : </strong><br>R.A.S.","<strong>Temps Frais : </strong><br>R.A.S.","<strong>Temps Frais : </strong><br>R.A.S.","<strong>Temps Frais : </strong><br>R.A.S.","<strong>Temps Frais : </strong><br>R.A.S.","<strong>Temps Frais : </strong><br>R.A.S.",
                            "<strong>Neige Abondante : </strong><br>La visibilité est mauvaise, le sol est glissant et il est impossible de bien voir là où on met les pieds, ce qui rend les blocages compliqués. Quand un joueur effectue une Action de Blitz, sa Force est réduite de 1 pour la durée de l’Action.",
                            "<strong>Blizzard : </strong><br>Entre la neige, le vent et le sol verglacé, c’est un miracle que le match continu ! Tous les joueurs tentant de se déplacer d’une case supplémentaire (« Foncer ») glissent et sont Plaqués sur un jet de 1-2, et seules des Passes Rapides ou Courtes peuvent être tentées.",];

// Ajout d'un écouteur d'événement sur le bouton "Tirage au sort"
drawButton.addEventListener("click", function() {
    // Tirage au sort du résultat 1 & 2
    let result1 = result1Array[Math.floor(Math.random() * result1Array.length)];
    let result2 = result2Array[Math.floor(Math.random() * result2Array.length)];
    // Affichage des resultats 
    result1Display.innerHTML = `Résultat 1 : ${result1}`;
    result2Display.innerHTML = `Résultat 2 : ${result2}`;

    // Récupération de l'option sélectionnée par l'utilisateur
    let selectedOption = result3Select.options[result3Select.selectedIndex].value;
    let result3Array;

    // Sélection du tableau de résultats en fonction de l'option sélectionnée
    switch (selectedOption) {
    case "option1":
        result3Array = result3Option1Array;
        break;
    case "option2":
        result3Array = result3Option2Array;
        break;
    case "option3":
        result3Array = result3Option3Array;
        break;
    case "option4":
        result3Array = result3Option4Array;
        break;
    case "option5":
        result3Array = result3Option5Array;
        break;
    default:
        result3Array = [];
        break;
    }
    // Tirage au sort du résultat 3
    const randomIndex3 = Math.floor(Math.random() * result3Array.length);
    const result3 = result3Array[randomIndex3];

    // Affichage des résultats
    document.getElementById("resultatArbitre").innerHTML = result1;
    document.getElementById("resultatStade").innerHTML = result2;
    document.getElementById("resultMeteo").innerHTML = result3;
});
