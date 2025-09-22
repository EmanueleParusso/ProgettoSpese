# 💰 Gestione Spese

Una semplice **Progressive Web App (PWA)** per gestire le spese personali.  
Realizzata in **HTML, CSS, JavaScript** e **Bootstrap**.  
Ottimizzata per l'installazione su smartphone tramite **Aggiungi a schermata Home**.

---

## 🚀 Funzionalità
- Interfaccia leggera e responsive grazie a **Bootstrap**.
- Installabile come app su **iOS** e **Android**.
- Funziona anche **offline** grazie a Service Worker.
- Hosting gratuito su **GitHub Pages**.

---

## 🔗 Demo online
👉 [Apri l'app su GitHub Pages](https://emanueleparusso.github.io/ProgettoSpese/)

---

## 📦 Struttura del progetto
```
ProgettoSpese/
│
├── index.html        # Pagina principale
├── manifest.json     # Configurazione PWA
├── sw.js             # Service Worker (cache offline)
├── icon.png          # Icona della app
└── bootstrap/        # Libreria Bootstrap (CSS e JS)
```

---

## ⚙️ Tecnologie usate
- HTML5
- CSS3 + [Bootstrap](https://getbootstrap.com/)
- JavaScript (ES6+)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)

---

## 📱 Installazione come App
1. Apri l’app dal browser mobile:
   - [https://emanueleparusso.github.io/ProgettoSpese/](https://emanueleparusso.github.io/ProgettoSpese/)
2. Su iOS Safari → **Condividi → Aggiungi a schermata Home**.
3. Su Android Chrome → **Aggiungi a schermata Home**.
4. L’app sarà disponibile come icona sul dispositivo, in modalità **standalone**.

---

## 🛠️ Sviluppo locale
Per testare la PWA in locale:

1. Clona il repository:
   ```bash
   git clone https://github.com/emanueleparusso/ProgettoSpese.git
   cd ProgettoSpese
   ```

2. Avvia un server locale 

3. Apri [http://localhost:8080](http://localhost:8080) nel browser.

4. In **DevTools → Application → Service Workers**, puoi simulare il funzionamento offline.

---

## 📂 Deploy su GitHub Pages
1. Fai push dei file nel branch `main`.
2. Vai in **Settings → Pages**.
3. Seleziona branch `main` e cartella `/root`.
4. L’app sarà disponibile all’URL:  
   ```
   https://<username>.github.io/ProgettoSpese/
   ```

---

## 📌 Note
- Assicurati che in `manifest.json` e `sw.js` i percorsi puntino a `/ProgettoSpese/` (non a `/`).
- Su iPhone Safari, i service worker funzionano **solo in HTTPS** → GitHub Pages garantisce già HTTPS.
- Dopo aggiornamenti a `sw.js`, potrebbe essere necessario **svuotare la cache** e ricaricare.

---
