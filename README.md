# Checkpoint 2 - 4h

---
### FR version
## Étape 2 - React

<img src="https://giphygifs.s3.amazonaws.com/media/14hVsVZomE4hj2/giphy.gif" height="150">

Dans cette étape, tu vas créer un nouveau projet React dans lequel il y aura 2 composants qui afficheront des données provenant d'une API.

Pense bien à `commit` régulièrement avec un message explicite. Par exemple : `"Create GameList and Game components"`.

L'API est accessible sur cette url [https://apis.wilders.dev/wild-games](https://apis.wilders.dev/wild-games).
Tu peux utiliser au choix `axios` ou `fetch` pour récupérer les données.

Si le lien vers l'API devient inaccessible, voici deux miroirs :

- [https://checkpoint2.wild-projects.duckdns.org/](https://checkpoint2.wild-projects.duckdns.org/)
- [https://wild-games.basile.vernouillet.dev/](https://wild-games.basile.vernouillet.dev/)

### On démarre !

- Crée un nouveau projet React nommé **list-games** grâce à `create-react-app`.
- Crée un composant `<Header />` qui affiche un titre `Welcome to website` et fait en sorte d'afficher le composant.
- Envoie le nom de ton site par les props vers `<Header />` et affiche le nom dans le titre, à la place de `website`.

### Lister les jeux

- Crée deux composants `<GameList />` et `<Game />`.
- `<GameList />` se trouve en dessous de `<Header />` : il récupère les jeux (avec la route `/games` de l'API) et les affiche dans autant de composants `<Game />`.
- `<Game />` récupère quelques informations de chaque jeu avec des `props` (`name`, `background_image`, `rating`…) et les affiche au format de ton choix.
- `<Game />` contient un `<button>` qui permet d'ajouter un jeu en favori. Un jeu ainsi ajouté aura un coeur ❤️ affiché après son nom. Si un jeu est déjà ajouté en favori, le clic sur le même bouton retirera son statut de favori.

### Filter les jeux par note

- Ajoute un bouton `Best Games` pour filter les jeux par `rating`.
- Quand on clique sur le bouton seuls les jeux dont le `rating` est supérieur ou égal à 4.5 sont affichés.
- Le texte du bouton est remplacé par `All Games` et quand on clique dessus, tous les jeux sont affichés à nouveau.

### Page des détails d'un jeu

Utilise la bibliothèque `react-router` :

- Crée un composant `<GameDetails />`, détaillant toutes les informations d'un jeu à partir de son identifiant (avec la route `/games/:id` de l'API).
- Ajoute un lien de navigation dans chaque jeu de la liste, afin de rediriger vers une page affichant les informations détaillées du jeu (pense à envoyer l'identifiant du jeu dans le lien).
- Dans la page des détails du jeu, affiche également un lien de navigation permettant de revenir sur la page d'accueil.

### Bonus - Retrait d'un jeu

- `<Game />` contient un `<button>` qui permet de retirer un jeu de la liste _(pas besoin de le supprimer dans L'API)_.

## Étape 3 - Félicitations !

Tu peux aller te désaltérer à la brasserie, tu l'as amplement mérité !

**N.B. : Tu ne dois pas commencer par cette étape… ;)**

![Good Luck](https://media.giphy.com/media/AC1PtbdsJZyOQ/giphy.gif)
