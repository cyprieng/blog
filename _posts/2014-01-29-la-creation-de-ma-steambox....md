---
layout: post
title:  "La création de ma SteamBox..."
date:   2014-01-29 16:54:39
categories: matériel Steam config SAV SteamBox
---

Après cette très longue absence, voici un nouveau post, un peu périmé. 
La création de ma SteamBox date en effet de près de 6 mois. Soit avant 
l'annonce par Steam de Steam OS, donc je ne l'utiliserais pas ici, mais 
simplement l'interface BigPicture.


Le choix du matériel
====================

Ma "SteamBox" devait me permettre d'enfin jouer à mes jeux préférés (Borderlands2, Skyrim...) dans de bonnes conditions, et le tout à moins de 800€. Et de plus, souhaitant une utilisation proche d'une console, je souhaitais un boitier qui s'en rapproche. 

Voici le matériel effectivement commandé :

* [Silverstone 
SST-GD05B](http://www.amazon.fr/gp/product/B0080FA3YU/ref=oh_details_o02_s00_i00?ie=UTF8&psc=1)
* [Gigabyte 
B85M-D3H](http://www.amazon.fr/gp/product/B00D5FAQJM/ref=oh_details_o02_s01_i00?ie=UTF8&psc=1)
* [Intel Haswell Processeur Core 
i5-4430](http://www.amazon.fr/gp/product/B00CV3E3X4/ref=oh_details_o02_s03_i00?ie=UTF8&psc=1)
* [TP-LINK 
TL-WN951N](http://www.amazon.fr/gp/product/B001811NCO/ref=oh_details_o02_s03_i01?ie=UTF8&psc=1)
* [be quiet! Pure Power L8 Alimentation ATX 530W modulaire certification 
80 Plus 
Bronze](http://www.amazon.fr/gp/product/B005JS580A/ref=oh_details_o02_s03_i02?ie=UTF8&psc=1)
* [KINGSTON DDR3 PC3-12800 - XMP HyperX Black Series - 2 x 4 
Go](http://www.rueducommerce.fr/Composants/showdetl.cfm?product_id=4885372&option=1#!moid:MO-5490FM22456356)
* LG - Graveur DVD Interne 24X - GH24NS95
* VTX3D VX7870 2GBD5-2DHV3E Black Edition - Radeon HD7870 - 2048 Mo
* [SEAGATE Barracuda 7200.14 - 500 Go](http://www.rueducommerce.fr/Composants/showdetl.cfm?product_id=4852712&option=1#!moid:MO-87A38M22463086)


Le montage
==========

Le premier montage s'est fait sans encombre. Malheureusement, l'espace restreint dans le boitier et l'absence de câble management donne un résultat assez bordélique. Je vous éviterais donc une photo de l'intérieur.

Mais le principal problème de ce montage fut la carte graphique. Au démarrage tout marchait bien, sauf la carte graphique. Impossible d'obtenir une image. 
Néanmoins celle-ci marchait très bien sur le port PCIEx8, et sur le PCIEx16 d'un autre PC. De plus, vu la taille du boitier et de la carte graphique, il était impossible de la laisser dans le port PCIEx8. A ce moment je décide donc de contacter le SAV de VTX3d pour savoir si un souci existe avec leur carte graphique. Et bien j'attends toujours la réponse...

Ensuite j'ai contacté le SAV de Gigabyte, beaucoup plus prompt, qui a testé la même carte mère que la mienne avec une HD7870 maison, et tout fonctionnait. J'ai également posté sur le [forum Gigabyte](http://forum.gigabyte.fr/index.php?topic=17308.0). Et après une mise à jour du BIOS de la CG et de la CM, des modifications des options du BIOS, et divers autres tentatives, j'ai décidé d'abandonner.

J'ai donc contacté RueDuCommerce chez qui j'avais commandé la CG afin de savoir si un retour était possible. Le délai de rétractation étant dépassé, et la CG fonctionnant, rien ne les obligeait à accepter le retour. Néanmoins, après les avoir contacté via Twitter, j'obtiens un avis favorable au retour. Je n'ai donc "qu'à" m'acquitter des 13€ de livraison vers le dépôt RueDuCommerce.

J'ai ensuite recommandé une autre HD7870 d'un autre constructeur : une [HIS H787QNT2G2M IceQ X Turbo - Radeon HD7870 - 2048 Mo](http://www.rueducommerce.fr/Composants/showdetl.cfm?product_id=4868922&option=1). Et là tout fonctionne.

Bon point de cette histoire : chaque CG venait avec 4 jeux offerts. J'ai donc pu profiter de 8 jeux gratuits.


Photo
=====

Voici une photo de la bête (la qualité n'est pas terrible, n'étant pas très doué, et n'ayant que mon Note II pour prendre la photo) :

![SteamBox](/assets/img/posts/SteamBox.jpg)


Configuration
=============

Le but de la configuration était de pouvoir obtenir une machine utilisable uniquement avec une manette, ou avec un clavier/souris pour certains jeux.

Comme je l'ai dit je n'utiliserais pas SteamOS, vu que mon projet est plus ancien que son annonce. Mais je ne migrerais pas non plus vers SteamOS, tout simplement 
parce que tous mes jeux ne sont pas compatibles Linux, et également parce que je souhaite pouvoir jouer à des jeux non Steam.
Le système d'exploitation utilisé sera donc Windows 8.

Pour ce qui est de la configuration, rien de très incroyable. Premièrement, afin de pouvoir utiliser l'OS avec uniquement une manette, il est nécessaire 
d'[activer la connexion automatique](http://www.pcastuces.com/pratique/astuces/3615.htm). Deuxième étape : ajouter Steam aux programmes de démarrage. Et enfin, 
paramétrer Steam pour le lancer en mode BigPicture. Et voilà, vous avez une SteamBox like.
