# Business-Solo

Dépôt de travail pour le lancement de mon activité de freelance (création de sites web + outils IA pour petits commerces).

Premier projet de démonstration : **Boucherie Al-Baraka** — site vitrine fictif pour une boucherie halal parisienne, destiné à servir de portfolio.

---

## Objectif du projet

Construire un portfolio crédible avant mes 18 ans, pour pouvoir démarrer la prospection et facturer dès la déclaration de ma micro-entreprise.

Stack visée : HTML / CSS / JS, hébergement Netlify, base de données Supabase pour le formulaire de contact, chatbot FAQ (Chatbase ou API Claude).

Contraintes :
- 100 % halal (activité, modèle économique, marketing)
- Zéro capital de départ
- Zéro recours au crédit à intérêt (riba)
- Service réel et identifiable, prix fixés à l'avance (pas de gharar)

---

## État d'avancement

### Setup
- [x] Repo GitHub créé
- [x] Mac configuré : Git, VS Code, Command Line Tools
- [x] Dossier de travail local : `~/Documents/Business-Solo/boucherie-al-baraka`
- [x] Comptes Supabase et Netlify prêts

### Contenu du site de démo (Jour 1 — terminé)
- [x] Page **Accueil** : titre, sous-titre, CTA, À propos, Pourquoi nous choisir, infos pratiques
- [x] Page **Notre viande** : intro, origine, abattage rituel, certification, traçabilité
- [x] Page **Nos produits** : 5 catégories (bœuf, agneau, veau, volaille, spécialités maison) avec prix indicatifs
- [x] Page **Contact** : intro, section Aïd al-Adha, coordonnées

### À faire
- [ ] Jour 2-3 : structure HTML/CSS des 4 pages, déploiement Netlify
- [ ] Jour 4 : connexion Supabase pour le formulaire de contact
- [ ] Jour 5 : intégration chatbot FAQ
- [ ] Jour 6 : polish (responsive mobile, SEO, performance)
- [ ] Jour 7 : README projet + captures + mise en valeur

---

## Identité du site fictif

- **Nom** : Boucherie Al-Baraka
- **Famille** : Def Djebbar
- **Création** : 2015
- **Adresse fictive** : 52 rue Marx Dormoy, 75018 Paris
- **Téléphone fictif** : 01 47 35 99 12
- **Angle fort** : sacrifices de l'Aïd al-Adha avec vidéo sur demande

---

## Contenus rédigés (Jour 1)

### Accueil

**Titre** : La Boucherie Al-Baraka — Boucherie halal artisanale à Paris
**Sous-titre** : Viandes sélectionnées avec exigence, abattage rituel, savoir-faire familial depuis 2015
**CTA principal** : Découvrir nos produits

**À propos** :
> Fondée en 2015 par la famille Def Djebbar, la Boucherie Al-Baraka est née d'une conviction : offrir aux musulmans de Paris une viande halal dans laquelle ils peuvent avoir une confiance totale. Nos viandes viennent exclusivement du terroir français, issues d'éleveurs sélectionnés et abattues selon le rite. Année après année, nous accompagnons aussi de nombreuses familles dans leur sacrifice de l'Aïd al-Adha — une responsabilité que nous prenons avec rigueur. Pousser notre porte, c'est retrouver un geste artisanal et le conseil d'un maître-boucher qui est heureux de vous accueillir tous les matins.

**Pourquoi nous choisir** :
- Halal certifié — Abattage rituel respecté, fournisseurs de confiance
- Fraîcheur quotidienne — Arrivages chaque matin, jamais de surgelé
- Conseil de boucher — Un expert vous guide selon vos besoins
- Service de quartier — Livraison locale et commandes sur mesure

**Horaires** :
- Lundi : fermé
- Mardi–Samedi : 8h–13h / 15h–19h30
- Dimanche : 8h–13h

### Notre viande

**Introduction** :
> Chez Al-Baraka, chaque pièce de viande raconte une histoire — celle d'un éleveur, d'un savoir-faire transmis depuis dix ans, et d'une exigence sans compromis. Voici ce qui se cache derrière ce que nous mettons en vitrine.

**L'origine** :
> Nous connaissons personnellement chacun de nos fournisseurs — certains nous livrent depuis dix ans. Toutes nos viandes viennent exclusivement du terroir français, sélectionnées chez des éleveurs reconnus pour leur exigence : bœuf charolais du Limousin, agneau du Quercy, veau de l'Aveyron, volailles fermières d'Auvergne. Aucun de nos fournisseurs n'est anonyme.

**L'abattage rituel** :
> L'ensemble de nos produits sont issus d'abattoirs certifiés halal. Le sacrificateur musulman prononce la formule rituelle, l'animal est conscient au moment du sacrifice et la saignée est complète. Voici les conditions non négociables de notre engagement.

**La certification** :
> Tous nos fournisseurs sont contrôlés par des organismes de certification halal indépendants. Les certificats correspondants sont consultables en boutique sur simple demande. La transparence est indispensable pour nous.

**La traçabilité** :
> Chaque pièce vendue est traçable jusqu'à son éleveur. Si vous souhaitez connaître précisément l'origine d'un produit, demandez-nous : la réponse ne prend que quelques secondes.

### Nos produits

**Introduction** :
> Sélection rigoureuse, fraîcheur quotidienne, préparation maison : voici ce que vous trouverez chaque jour dans notre vitrine.

**Catégories** :

| Catégorie | Origine | Produits phares (prix à partir de) |
|---|---|---|
| Bœuf | Charolais du Limousin, maturation soignée | Entrecôte 28 €/kg · Faux-filet 26 €/kg · Bavette 22 €/kg · Bourguignon 18 €/kg · Steak haché frais 16 €/kg |
| Agneau | Quercy, élevage extensif | Gigot entier 24 €/kg · Côtelettes 28 €/kg · Épaule 20 €/kg · Découpe tagine 19 €/kg |
| Veau | Aveyron, élevage sous la mère | Escalope 26 €/kg · Rôti 24 €/kg · Blanquette 20 €/kg · Côte 28 €/kg |
| Volaille | Fermière, plein air | Poulet entier 14 €/kg · Cuisses 12 €/kg · Filets 18 €/kg · Dinde 16 €/kg |
| Spécialités maison | Préparées chaque matin | Merguez 18 €/kg · Kefta 17 €/kg · Chich taouk mariné 19 €/kg · Brochettes 20 €/kg |

> Les prix peuvent varier selon les arrivages. N'hésitez pas à nous appeler au 01 47 35 99 12 pour confirmer la disponibilité.

### Contact

**Introduction** :
> Une question, une commande, un événement à organiser ? Écrivez-nous, appelez-nous, ou passez nous voir en boutique — nous prenons toujours le temps de vous répondre.

**Commandes pour l'Aïd al-Adha** :
> Pour vos commandes de l'Aïd al-Adha, nous prenons les réservations jusqu'à deux mois à l'avance. Contactez-nous au plus tôt pour réserver votre bête et définir avec nous les modalités du sacrifice. Sur demande, nous vous envoyons une vidéo du sacrifice effectué en votre nom — une garantie supplémentaire pour ceux qui ne peuvent pas être présents.

**Coordonnées** :
- 52 rue Marx Dormoy, 75018 Paris
- 01 47 35 99 12
- contact@boucherie-al-baraka.fr (fictif)
- Horaires : voir page Accueil

---

## Notes de méthode (à garder en tête pour la suite)

Principes de rédaction validés pendant le Jour 1 :
- Les arguments forts en premier (le lecteur scanne, ne lit pas)
- Le concret bat toujours le générique (races, terroirs, dates précises)
- Une punchline finale courte par section ("Aucun de nos fournisseurs n'est anonyme.")
- Trios rythmés ("éleveur, savoir-faire, exigence")
- Verbes forts plutôt qu'adjectifs mous
- Pas de points d'exclamation sur un site pro
- Orthographe cohérente sur tout le site (ex : *Aïd al-Adha*, jamais panaché)
- Vérifier le vocabulaire métier avant de rédiger (ex : fournisseur ≠ organisme de certification)
