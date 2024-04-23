# Projet MongoDB

## Description
Ce projet consiste en une API de défis d'éco-conception aléatoires avec une administration simple, développée en utilisant Node.js avec Express.js comme framework et MongoDB comme base de données.

## Fonctionnalités
- Récupération d'un défi aléatoire
- Récupération de plusieurs défis aléatoires
- Ajout, modification et suppression de défis (pour les utilisateurs authentifiés)
- Authentification avec JWT

## Prérequis
- Node.js
- MongoDB

## Installation
1. Clonez ce repository.
2. Installez les dépendances avec la commande : `npm install`.
3. Créez un fichier `.env` à la racine du projet et configurez les variables d'environnement comme indiqué dans le fichier `.env.example`.

## Lancement
- Démarrez le serveur avec la commande : `npm start`.

## Création du compte / Connexion au compte

Pour toutes les requêtes, il vous faudra utiliser un token, sauf pour demander un seul défi aléatoire. Pour le générer, utilisez les commandes suivantes. (Les commandes sont faites avec CURL)

*Pour s'enregister ('register')*

- `curl -X POST -H "Content-Type: application/json" -d "{\"username\": \"votre_utilisateur\", \"password\": \"votre_mot_de_passe\"}" http://IP:PORT/auth/register`

*Pour se connecter ('login')*

- `curl -X POST -H "Content-Type: application/json" -d "{\"username\": \"votre_utilisateur\", \"password\": \"votre_mot_de_passe\"}" http://IP:PORT/auth/login`


## Utilisation



- Pour récupérer un défi aléatoire : `GET /challenges/random`.
- Pour récupérer plusieurs défis aléatoires : `GET /challenges/random/:count`.
- Pour ajouter un défi : `POST /challenges` (authentification requise).
- Pour modifier un défi : `PUT /challenges/:id` (authentification requise).
- Pour supprimer un défi : `DELETE /challenges/:id` (authentification requise).

#### Exemples de commandes avec CURL

*Récupérer un défi aléatoire*

- `curl -H "Authorization: Bearer <votre_token_jwt>" http://IP:PORT/challenges/random`

*Récupérer plusieurs défis aléatoires*

- `curl -H "Authorization: Bearer <votre_token_jwt>" http://IP:PORT/challenges/random/5`

*Ajouter un défi*

- `curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <votre_token_jwt>" -d "{\"title\": \"Nouveau défi\", \"description\": \"Description du nouveau défi\"}" http://IP:PORT/challenges`

*Modifier un défi*

- `curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer <votre_token_jwt>" -d "{\"title\": \"Nouveau titre du défi\", \"description\": \"Nouvelle description du défi\"}" http://IP:PORT/challenges/IDduChallenge`

*Supprimer un défi*

- `curl -X DELETE -H "Authorization: Bearer <votre_token_jwt>" http://IP:PORT/challenges/IDduChallenge`

## Auteur
Kylian VINEL & Dorian ROCHETTE

## Licence
Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).
