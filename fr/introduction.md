Ce guide a pour objectif de vous accompagner dans la gestion de vos mots de passe de façon sécurisée, et que vous n'ayez plus qu'un seul mot de passe à retenir dans votre utilisation d'Internet. Ce mot de passe vous servira à accéder à tous les autres, et chaque service en ligne que vous utiliserez aura un mot de passe différent, fort, que vous n'aurez pas à retenir car il sera stocké dans un fichier sécurisé.

## Diagnostic

Voici la situation dans laquelle se trouvent de nombreuses personnes et pourquoi c'est problématique :

- elles oublient souvent leurs mots de passe et doivent les recréer fréquemment
- leurs mots de passe se ressemblent tous un peu, sont parfois simples ou prévisibles, ce qui augmente grandement les risques de piratage
- elles sauvegardent leur mot de passe dans un fichier texte non-sécurisé, rendant possible sa consultation possible par toute personne ayant accès, même un instant, à leur ordinateur
- pour chaque nouveau service la création d'un nouveau mot de passe est un casse-tête, ce qui décourage beaucoup de personnes d'utiliser de nouveaux services en ligne

Si vous vous retrouvez dans une ou plusieurs de ces situations, ce guide devrait vous être très utile.

Je suis Colin Maudry, un informaticien soucieux de mettre fin au casse-tête que vivent ses proches.

## Aperçu de la méthode décrite dans ce guide

La méthode décrite dans ce guide est

- gratuite
- repose sur un outil [libre](https://fr.wikipedia.org/wiki/Logiciel_libre)
- vous permettra de gérer vos mots de passe facilement et en toute sécurité
- peut être utilisée indifféremment par les utilisateurs de Linux, de Windows et des appareils Apple.

Il y a de nombreuses bonnes façons de gérer ses mots de passe. Ce guide a été conçu pour les personnes qui n'ont pas de bonne méthode et souhaitent en utiliser une qui soit simple et bien documentée.

Je suis Colin Maudry, un informaticien soucieux de mettre fin au casse-tête que vivent ses proches.
À titre personnel j'utilise [Bitwarden](https://bitwarden.com) après avoir utilisé [KeeWeb](https://keeweb.info) pendant des années. Aujourd'hui, je recommande Bitwarden car

- c'est la méthode que j'utilise au quotidien
- dont je vais suis les évolutions et pour laquelle je tiens ce guide à jour.

J'ai gardé le guide de KeeWeb [ici](/fr/keeweb/keeweb). Il peut intéresser les personnes qui ne sont pas intéressées par la synchronisation de leurs mots de passe entre leurs appareils (ordinateur, téléphone, tablette, etc.).

Voici un résumé de la méthode documentée dans ce guide :

1. Définir un mot de passe différent et complexe pour chaque service (compte email, magasin en ligne, banque, etc.)
2. Stocker vos mots de passe dans une base de données chiffrée ([voir Wikipedia](https://fr.wikipedia.org/wiki/Chiffrement)), protégée par un mot de passe fort. Ainsi, vous n'avez plus qu'un seul mot de passe à retenir !
2. En éditant cette base de données avec [Bitwarden](https://bitwarden.com) (gratuit et [libre](https://fr.wikipedia.org/wiki/Logiciel_libre)), qui vous permet de facilement gérer vos mots de passe et en créer de nouveaux
3. En synchronisant vos mots de passe entre vos appareils
4. En utilisant facilement vos mots de passe sur le Web grâce à l'extension pour navigateur
4. En accédant à vos mots de passe même depuis un appareil qui n'est pas à vous (par exemple, l'ordinateur d'un ou d'une amie)

Ce guide a été rédigé pour que vous lisiez les chapitres dans l'ordre dans lequel ils vous sont présentés dans le menu de gauche. La prochaine étape est donc de définir [votre mot de passe maître](fr/master-password.md).

---

*Dernière mise à jour de cette section : {docsify-updated}*
