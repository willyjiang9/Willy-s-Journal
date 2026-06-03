# Willy's Site — Setup Guide

This is a private personal site. Only you can log in. Everyone else just sees a lock screen.

---

## Step 1 — Create a Firebase project

1. Go to **console.firebase.google.com**
2. Click **Add project** → name it `willy-site` (or anything)
3. Disable Google Analytics (you don't need it) → **Create project**

---

## Step 2 — Set up Firebase services

### Authentication
1. In Firebase console → **Build → Authentication → Get started**
2. Go to **Sign-in method** tab → enable **Email/Password**
3. Go to **Users** tab → **Add user**
   - Email: `willy@willysspace.com` (make up any email, you'll never see it)
   - Password: choose a strong password — this is what you type on the lock screen

### Firestore Database
1. **Build → Firestore Database → Create database**
2. Choose **Start in production mode** → pick a region (us-central1 is fine)
3. After it's created, go to **Rules** tab and paste this:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read, write: if request.auth != null;
    }
  }
}
```
Click **Publish**.

### Storage (for photo uploads)
1. **Build → Storage → Get started**
2. Start in production mode → same region → Done
3. Go to **Rules** tab and paste:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```
Click **Publish**.

---

## Step 3 — Get your Firebase config

1. In Firebase console → **Project Settings** (gear icon) → scroll down to **Your apps**
2. Click **Add app** → Web (`</>`) → name it `willy-site` → **Register app**
3. Copy the `firebaseConfig` object

Open `src/firebase.js` and replace the placeholder values with your real ones.

Also open `src/components/LockScreen.jsx` and update `OWNER_EMAIL` to match the email you used in Step 2.

---

## Step 4 — Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 — you'll see the lock screen. Enter your password to get in.

---

## Step 5 — Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to **vercel.com** → **New Project** → import your repo
3. Vercel auto-detects Vite. Click **Deploy**.
4. Your site is live at a `.vercel.app` URL (or add a custom domain in Vercel settings)

---

## Using the site

- **+ New** → write an Essay, upload a Photo, or drop a Thought
- Posts save to Firestore and appear instantly
- The **Delete** button removes a post permanently
- Filter by type using the tabs at the top
- Log out with the arrow icon in the header
- Anyone who visits your URL without logging in just sees the lock screen

---

## Custom domain (optional)

In Vercel → your project → **Settings → Domains** → add your domain (e.g. `willy.me`).
Update your domain's DNS to point to Vercel (they give you instructions).
