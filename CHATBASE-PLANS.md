# CHATBASE-PLANS — Grille de décision par client

> Référence interne. À consulter à chaque nouveau client qui prend l'option **Pack + Assistant IA (1 090 €)** ou plus.
>
> **Mise à jour : 2026-05-28** (les tarifs et limites Chatbase évoluent — vérifier sur chatbase.co/pricing avant chaque devis).

---

## Les 5 paliers Chatbase

### Free — Gratuit

| Limite | Valeur |
|---|---|
| **Messages/mois** | **50** |
| Membres | 1 |
| Données par agent | 400 Ko (~50 paires Q/R) |
| Modèles IA | Limité (GPT-4o mini uniquement) |
| Spécificité | Agents supprimés après 14 jours d'inactivité |

**Usage typique** : démo personnelle, tests internes, pas de vrai trafic.
**Verdict** : suffit pour la démo Boucherie Al-Baraka.

---

### Hobby (Loisirs) — ~19 $/mois

| Limite | Valeur |
|---|---|
| **Messages/mois** | **500** |
| Membres | 2 |
| Données par agent | 10 Mo (~1 000 paires Q/R) |
| Modèles IA | Avancés (GPT-4o, Claude inclus) |
| Actions IA | 5 par agent |
| Spécificités | Intégrations, analyses de base, pièces jointes |

**Usage typique** : petit commerce avec trafic modeste (boulangerie, petite boucherie, salon de quartier).
**Calcul de capacité** : ~16 messages/jour × 30 jours = 500 msg/mois.

---

### Standard — ~99 $/mois (à vérifier)

| Limite | Valeur |
|---|---|
| **Messages/mois** | **4 000** |
| Membres | 3 |
| Données par agent | 20 Mo |
| Actions IA | 8 par agent |
| Spécificités | API, voix, téléphonie, campagnes sortantes, intégrations avancées (Stripe, Zendesk), personnalisation |

**Usage typique** : commerce à trafic moyen-élevé (restaurant populaire, salon réputé, multi-sites).
**Calcul de capacité** : ~130 msg/jour, soit ~40-50 visiteurs/jour posant 3 questions chacun.

---

### Pro — ~300 $/mois (à vérifier)

| Limite | Valeur |
|---|---|
| **Messages/mois** | **15 000** |
| Membres | 5 |
| Données par agent | 40 Mo |
| Actions IA | 12 par agent |
| Spécificités | Analyses avancées, suggestions de sources, tickets comme source |

**Usage typique** : franchise, chaîne, e-commerce avec gros trafic, multi-établissements.
**Calcul de capacité** : ~500 msg/jour, ~150-200 visiteurs/jour.

---

### Enterprise — Sur devis

| Spécificités |
|---|
| Limites supérieures |
| Rôles et permissions personnalisés |
| SSO (Single Sign-On) |
| Marque blanche (white-label) |
| Journaux d'audit |
| Support prioritaire |
| Customer Success Manager (CSM) dédié |
| SLA contractuel |
| Éligible HIPAA |

**Usage typique** : grandes entreprises régulées (e-santé, finance), marketplaces nationales, besoins compliance forts.
**Pas pertinent** pour la clientèle visée (petits commerces locaux) avant plusieurs années.

---

## Grille de décision — Quel plan recommander à un client ?

### Questions à poser au client avant le devis

1. **Volume de visites estimé/mois sur le site** ?
   - <500 visites → Hobby suffit largement
   - 500-3 000 → Hobby ou Standard selon le ratio
   - 3 000-15 000 → Standard
   - >15 000 → Pro
2. **Combien de personnes doivent gérer le chatbot côté client** ?
   - 1-2 → Hobby
   - 3 → Standard
   - 4-5 → Pro
3. **A-t-il besoin d'intégrations spécifiques** (Stripe, CRM, agenda) ?
   - Non → Hobby
   - Oui → Standard ou Pro
4. **A-t-il un besoin de personnalisation visuelle forte** (couleurs, logo, "powered by") ?
   - Non → Hobby
   - Oui (cacher "powered by Chatbase") → Standard minimum
5. **Trafic saisonnier** (Aïd, fêtes) avec pics x3-5 ?
   - Prévoir un plan au-dessus du besoin moyen pour absorber les pics.

### Décision rapide selon le secteur

| Secteur cible | Plan recommandé pour démarrer |
|---|---|
| Boulangerie/petite boucherie de quartier | **Hobby** |
| Salon de coiffure / barbershop | **Hobby** |
| Boucherie halal avec service Aïd | **Hobby** (Standard si > 30 visiteurs/jour) |
| Restaurant indépendant | **Hobby** au lancement, **Standard** quand visible |
| Restaurant populaire / Instagrammable | **Standard** d'emblée |
| Artisan (plombier, électricien) | **Hobby** (peu de visites mais valeur par lead) |
| Coach sportif / cabinet pro | **Hobby** |
| Mini-franchise ou chaîne locale (2-5 points) | **Standard** |
| E-commerce local | **Standard** voire **Pro** |
| Marketplace | **Pro** ou **Enterprise** |

---

## Pour ton offre commerciale — Modèle économique recommandé

### Modèle B (à privilégier) : tu héberges le chatbot pour le client

**Au setup (one-shot, dans le Pack + Assistant IA à 1 090 €)** :
- Tu créés le chatbot sur ton compte Chatbase Pro
- Tu factures 1 090 € incluant la mise en place complète
- Tu n'avances rien que le coût du plan (mutualisable)

**Au mois (récurrent, dans le Forfait Maintenance ajusté)** :
- Au lieu de 70 €/mois maintenance simple, propose **90-100 €/mois "Maintenance + Hébergement Chatbot"**
- Tu paies Chatbase environ ~19 $ (Hobby) à ~99 $ (Standard) par MOIS pour chaque chatbot client
- **Marge nette par client** :
  - Avec Hobby : ~70 € de marge mensuelle nette
  - Avec Standard : ~5-10 € de marge mensuelle (faible, à éviter sauf si gros client qui exige Standard)

### Mutualisation possible (avancé)

Sur Chatbase **Standard** (3 membres, 4 000 messages), tu peux héberger **3 clients Hobby-équivalents** sur un seul abonnement :
- Coût : ~99 $/mois (un seul abonnement Standard)
- Revenus : 3 × 95 €/mois maintenance = 285 €/mois
- **Marge nette** : ~190 €/mois pour 3 clients gérés

Cette mutualisation devient rentable dès 3 clients en Pack + Assistant IA. À partir de 4-5 clients, le modèle est très solide.

### Modèle A (alternatif) : le client paie son propre Chatbase

À proposer si :
- Le client préfère gérer lui-même ses outils SaaS
- Le client a déjà une compétence numérique
- Tu ne veux pas porter de risque opérationnel

**Avantage** : zéro risque pour toi.
**Inconvénient** : tu loupes 50-100 €/mois de récurrent par client.

---

## Bascule entre plans

Chatbase permet généralement de **passer d'un plan à un autre en un clic** depuis Settings → Billing.

- **Upgrade** : prend effet immédiatement, prorata facturé pour le mois en cours.
- **Downgrade** : prend effet à la fin du cycle de facturation.
- **Cancel** : prend effet à la fin du cycle, données conservées 30 à 90 jours puis supprimées.

**Recommandation** : démarre toujours un client en Hobby. Si après 1-2 mois tu vois qu'il dépasse 80 % du quota, passe-le en Standard. Le coût de revenu est faible et le risque "chatbot HS car limite atteinte" est éliminé.

---

## Cas particulier — Démo Boucherie Al-Baraka (actuel)

**Plan utilisé** : Free (50 messages/mois)
**Risque** : aucun, c'est une démo.
**Action requise** : se connecter au moins une fois tous les 14 jours pour éviter la suppression automatique de l'agent.

**Si le bot disparaît** : il faut le recréer en re-uploadant le bloc de 24 paires Q/R (le bloc est conservé dans `ETAPES.md` ou dans nos conversations).

---

## Procédure pour chaque nouveau client (à appliquer)

**1.** Demander les 5 questions de la grille de décision (trafic, membres, intégrations, branding, saisonnalité).
**2.** Recommander un plan + écrire dans le devis le coût mensuel répercuté.
**3.** Vérifier sur chatbase.co/pricing que les prix et limites correspondent à ce document (Chatbase change de temps en temps).
**4.** Si écart > 20 % sur les prix, mettre à jour ce fichier `CHATBASE-PLANS.md` avant d'envoyer le devis.
**5.** Décider Modèle A ou B avec le client de façon transparente.

---

## Notes de mise à jour

- **2026-05-28** — Fichier créé avec 5 paliers détaillés (Free, Hobby, Standard, Pro, Enterprise).
- À mettre à jour à chaque évolution constatée des plans Chatbase.
