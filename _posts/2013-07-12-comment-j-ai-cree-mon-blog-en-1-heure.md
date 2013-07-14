---
layout: post
title:  "Comment j'ai créé mon blog en 1 heure"
date:   2013-07-12 11:12:16
categories: jekyll blog
---

Aprés des années d'hésitation pour lancer mon blog, je me lance enfin. 

Le premier problème qui s'est posé lors de la réalisation est celui de l'hébergement et du nom de domaine.
Trois choix s'offrait à moi :

* Hébergeur gratuit : manque de fiabilité, nom de domaine à ralonge...
* Hébergeur payant : tout est bon sauf que... c'est payant.
* [Github Pages](http://pages.github.com/) : très fiable, nom de domaine correcte, mais manque de possibilités.

J'ai opté pour la troisième solution, malgré le manque de possibilités. Il est en effet impossible d'utiliser des languages de programmation côté serveur (PHP, python, C...) sur Github Pages.

Néammoins, Github Pages permet l'utilisation de [Jekyll](http://jekyllrb.com/), un générateur de blog statique développé en ruby.   

Les avantages de Jekyll sont nombreux :

* Très léger.
* Pas de sécurité à gérer dans la réalisation du blog.
* Génération de sites statiques => grande rapidité.
* Très simple d'utilisation.
* Vous pouvez utiliser n'importe quel éditeur de texte pour rédiger vos articles.

En revanche Jekyll a des inconvénients :

* Le fait que le site soit statique entraîne l'absence de nombreuses fonctionnalités : commentaires, formulaire de contact... Heureusement il existe des solutions pour résoudre ce problème (ex : Disqus pour les commentaires, par exemple).
* À chaque modification de site, Jekyll va le reconstruire entièrement. Ca ne pose pas trop de problème pour un petit site, mais j'imagine que si vous avez plusieurs milliers d'articles ça doit prendre un paquet de temps.

Maintenant que le choix de l'hébergeur et du gestionnaire de blog est fait, il faut mettre tout ça en place.

Installation de jekyll
======================

La première étape est d'installer ruby sur votre ordinateur :

* [Ruby Installer](http://rubyinstaller.org/) pour Windows
* Votre gestionnaire de paquet sous GNU/Linux

Une fois Ruby installé lancez `gem install jekyll`, puis rendez-vous dans le dossier où vous voulez installer votre blog.
Lancez maintenant `jekyll new my-awesome-site` puis `cd my-awesome-site`, et enfin `jekyll serve`.

Rendez-vous sur [localhost:4000](http://localhost:4000), et vous devriez voir le blog Jekyll par défaut.

Personnalisation de jekyll
--------------------------

Maintenant vous n'avez plus qu'à éditer les fichiers HTML et CSS. À chaque modification vous devez lancez `jekyll build` et relancer le serveur.

Ou, plus simple. Lancer `jekyll build --watch` et `jekyll serve --watch`, chaque modification devrait alors être répercutée immediatement.

Pour ce qui est de la modification visuelle, je ne me suis pas trop foulé pour l'instant. J'ai repris le style par défaut de Jekyll en modifiant 2-3 éléments.

###Ajout des commentaires

Si vous souhaitez ajouter des commentaires, je vous conseille d'utilisez [Disqus](http://disqus.com/).
Pour cela rendez-vous sur le site, créez un comte, ajoutez un nouveau site, récupérez le code et copiez le dans le code de votre layout des posts.

###Ajout d'un flux RSS

Pour réaliser le flux RSS, je me suis basé sur le travail de [erjjones](https://github.com/erjjones/erjjones.github.com). Copiez simplement le fichier atom.xml, et modifiez le fichier selon vos envies (nom du site, adresse...).

Ajout d'articles
================

Pour ajouter un post, je vous renvoie vers la doc de [Jekyll](http://jekyllrb.com/docs/posts/).

Et pour ceux qui sont un peu flemmard comme moi, voici un script permettant d'automatiser la création de fichiers d'article (à placer dans le dossier "\_posts").

{% highlight bash %}
#!/bin/bash

read -p 'Post name: ' post_name
read -p 'Post categories: ' post_cat

post_name_formated=`echo "$post_name" | tr '[A-Z]' '[a-z]'`
post_name_formated=`echo "$post_name_formated" | tr '[ ]' '[\-]'`
filename="`date "+%Y-%m-%d"`-$post_name_formated.md"

echo -e "---\nlayout: post\ntitle:  \"$post_name\"\ndate:   `date "+%Y-%m-%d %H:%M:%S"`\ncategories: $post_cat\n---\n" > "$filename"
vim "$filename"
{% endhighlight %}

Publication du blog
===================

Une fois votre blog prêt à être publié, créez simplement un repositorie Github en suivant les instructions de [Github Pages](http://pages.github.com/).

Et si vous voulez voir le code de mon blog, rendez-vous sur mon [Github](https://github.com/cyprieng/cyprieng.github.com).
