<div align="center">

# 🌍 Anywhere

### *Duniya ghoomo, apni jagah se.*

**Ek interactive 3D globe app jo AI ki madad se kisi bhi jagah ki kahani sunata hai.**

[![Made with React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-0.184-000000?logo=three.js&logoColor=white)](https://threejs.org)
[![Gemini API](https://img.shields.io/badge/Powered%20by-Gemini%20API-4285F4?logo=google&logoColor=white)](https://ai.google.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

## ✨ Ye Hai Kya

**Anywhere** ek 3D interactive globe hai jisme tum kahin bhi click karo — pin drop hoga, aur AI (Gemini) turant us jagah ki details, tasveer, aur kahani generate kar dega. Bina flight book kiye, duniya explore karo — seedha apne screen se. 🚀

Socho ek digital Google Earth + AI tour guide ka combo — bas yahi **Anywhere** hai.

---

## 🔥 Features

- 🌐 **3D Rotating Globe** — `three.js` + `@react-three/fiber` se banaya gaya buttery-smooth globe
- 🤖 **AI-Powered Location Info** — Gemini API se real-time, dynamic content generation
- 🖼️ **Gallery View** — locations ki tasveerein ek khoobsurat gallery mein
- ⚡ **Fast & Modern Stack** — Vite + React 19 + TypeScript
- 🎨 **Smooth Animations** — `motion` library se silky transitions
- 💻 **Full-Stack Ready** — Express backend server ke saath deploy-ready

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, TypeScript, TailwindCSS |
| 3D Rendering | Three.js, React Three Fiber, Drei |
| AI Engine | Google Gemini API (`@google/genai`) |
| Backend | Express.js |
| Build Tool | Vite |
| Animation | Motion |

---

## 🚀 Quick Start

### Prerequisites
- Node.js installed hona chahiye

### Setup

```bash
# 1. Repo clone karo
git clone https://github.com/mawiya-47/Anywhere.git
cd Anywhere

# 2. Dependencies install karo
npm install

# 3. .env.local file banao aur apni Gemini API key daalo
echo "GEMINI_API_KEY=your_api_key_here" > .env.local

# 4. App run karo
npm run dev
```

Ab browser mein khol lo aur duniya ghoomna shuru karo! 🌎

---

## 📂 Project Structure

```
Anywhere/
├── App.tsx                    # Main app component
├── Globe.tsx                  # 3D globe render logic
├── GalleryGlobe.tsx           # Gallery + globe combined view
├── Card.tsx                   # Location info card
├── IntroScreen.tsx            # Welcome/intro screen
├── LocationDetailsScreen.tsx  # Detailed location view
├── LoadingOverlay.tsx         # Loading states
├── data.ts / generateLocations.ts  # Location data handling
├── server.ts                  # Express backend
└── math.ts                    # Globe geometry calculations
```

---

## 🤝 Contributing

Pull requests welcome hain! Koi bug mile ya feature idea ho, issue khol do ya PR bhej do.

## 📄 License

MIT License — jitna chahe use karo, sirf credit de dena. 😉

---

<div align="center">

**Made with 💙 for explorers who can't afford flight tickets**

</div>
