# Configuration Netlify pour domaines multiples (.fr + .com)

## 📋 Étapes pour configurer qr2code.com en plus de qr2code.fr

### 1. Acheter le domaine qr2code.com
- Vérifier la disponibilité sur un registrar (Namecheap, GoDaddy, etc.)
- Coût estimé : 10-15€/an

### 2. Configuration sur Netlify

Une fois le domaine acheté :

1. **Aller dans Netlify Dashboard** → Votre site → Domain settings
2. **Ajouter le domaine** `qr2code.com`
3. **Configurer les DNS** selon les instructions Netlify
4. **Activer HTTPS** pour les deux domaines

### 3. Configuration de redirection (optionnelle mais recommandée)

Dans `netlify.toml`, ajouter :

```toml
# Redirection intelligente selon le domaine
[[redirects]]
  from = "https://qr2code.com/*"
  to = "https://qr2code.fr/:splat"
  status = 200
  force = false
  # Le site servira le même contenu, mais avec langue EN par défaut

# Ou mieux : détection automatique de langue
# Netlify détectera automatiquement la langue du navigateur
```

### 4. Mise à jour des variables d'environnement

Dans Netlify Dashboard → Site settings → Environment variables :

```
VITE_SITE_URL=https://qr2code.com  (pour le domaine principal)
```

Ou créer deux builds différents (un pour .fr, un pour .com) avec des variables différentes.

### 5. Mise à jour du sitemap

Le sitemap doit inclure les deux domaines avec les bons hreflang.

### 6. Google Search Console

- Ajouter les deux propriétés (qr2code.fr et qr2code.com)
- Soumettre le sitemap pour chaque domaine
- Vérifier l'indexation

## 🎯 Stratégie recommandée

### Option A : Domaine principal .com (RECOMMANDÉ pour l'international)
- `qr2code.com` → Domaine principal (EN par défaut)
- `qr2code.fr` → Redirection vers .com OU domaine secondaire (FR par défaut)
- **Avantage** : Meilleur référencement international

### Option B : Deux domaines indépendants
- `qr2code.com` → Version anglaise
- `qr2code.fr` → Version française
- Même code, mais détection de langue selon le domaine
- **Avantage** : Optimisation maximale pour chaque marché

## ⚡ Quick Start (si vous avez déjà qr2code.com)

1. Ajouter le domaine dans Netlify
2. Mettre à jour `VITE_SITE_URL` dans Netlify
3. Le code est déjà prêt avec les hreflang configurés !

