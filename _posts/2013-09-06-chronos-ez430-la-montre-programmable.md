---
layout: post
title:  "Chronos EZ430 : LA montre programmable"
date:   2013-09-06 18:37:25
categories: dev montre TI tutoriel chronos ez430
---

Bonjour à tous, voici le premier vrai article de ce blog. Aujourd'hui je vais vous présenter la Chronos EZ430. Il s'agit d'une plate-forme de développement du 
MSP430 de TI, qui a eu l'excellente idée de la livrer sous forme de montre.
Le seul problème c'est qu'elle est difficilement trouvable en magasin. Personnelement je l'ai acheté 
[ici](http://www.planete-domotique.com/montre-sans-fils-ez430-chronos-texas-instrument.html).

Aperçu
======
![Package](http://processors.wiki.ti.com/images/8/89/EZ430-Chronos.png)

La montre est livré avec :

* La montre, évidemment.
* Un dongle USB pour la communication radio.
* Un dongle pour brancher la montre directement sur l'ordi.
* Un tournevis pour la démonter.

Avec cette montre on peut : contrôler un power point à distance à l'aide de la montre, contrôler sa souris à distance (oui ça sert à rien et on à l'air con, mais 
bon...), contrôler son lecteur de musique...
Et contrairement aux smartwatch sorties récemment, la batterie dure plus d'une journée, soit aussi longtemps que celle d'une montre standard.

Je vous laisse découvrir le fonctionnemet par défaut de la montre, ainsi que les possibilités offertes par celle-ci : [wiki 
TI](http://processors.wiki.ti.com/index.php/EZ430-Chronos).

Développer de nouvelles fonctionnalités
======================================
Pour commencer il faut choisir nos outils. J'ai opté pour la solution de facilité : l'IDE développé par TI,  [Code Composer Studio 
v5](http://processors.wiki.ti.com/index.php/Category:Code_Composer_Studio_v5). Il est très facile de développer avec cet IDE qui est plutôt bien fait (il est d'ailleurs basé sur eclipse). Malheureusement, il y aurait apparemment une limitation de la taille des fichiers binaires produits (100 Ko). Pour passer outre cette limitation, il faut se tourner vers des alternatives comme [mspgcc](http://sourceforge.net/projects/mspgcc/). Néanmoins on peut quand même s'amuser un peu avec CCS, surtout si on supprime certaines fonctionnalités inutiles de la montre.

Téléchargez donc le logiciel à partir du site de TI. Lorsque des informations vous seront demandées, donnez simplement ce que vous voulez, elle n'ont pas l'air d'être vérifiés. 
Ensuite, lancez l'installation, et prenez un café... oui, ça prend du temps.

Une fois dans le logiciel, importez le firmware original. Celui-ci doit se trouver quelque part dans le dossier d'installation du Chronos Control Center (chez moi : `C:\Program Files (x86)\Texas Instruments\eZ430-Chronos\Software Projects\Chronos Watch\eZ430-Chronos v1.1 - white PCB\CCS\Sports Watch`).

Une fois le projet importé, vous pouvez maintenant commencez à coder. Là-dessus je ne peux pas vous donner beaucoup d'aide, il s'agit de language C relativement standard. Regardez juste l'architecture des modules de base pour comprendre l'organisation d'un module (fichier source, header, ajouter l'entrée dans menu.c...).

Une fois que vous avez codé votre nouveau module :

* Compilez le projet. Ensuite installez [SmartRF Flash Programmer](http://www.ti.com/tool/flash-programmer). 
* Branchez directement votre montre au dongle USB (Il faut démonter la montre).
* Ouvrez le dossier contenant le fichier compilé, il doit s'agir d'un .txt. Et modifier son extension par .hex.
* Ouvrez Flash Programmer. Sélectionnez votre montre, votre .hex et cliquez sur "Perform Actions". 
* Votre montre est reprogrammée.

Mon Firmware
============
Si vous ne voulez pas vous embêtez à développer vous-même, vous pouvez récupérer le code de projets trouvés dans le Wiki. Ou mon 
[firmware](https://github.com/cyprieng/EZ430-Chronos-Firmware) qui est basé sur le firware d'origine avec l'ajout d'un pédomètre et la possibilité de générer des 
codes pour la double authentification Google. J'ai également supprimé des fonctions inutiles (pour moi) comme la vitesse, le rythme cardiaque, les calories...