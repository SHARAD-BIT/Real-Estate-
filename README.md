# 🏠 MagicBricks Real Estate Project Listing

A full-stack real estate listing web application built with **Next.js** that dynamically fetches and displays projects for different cities. It includes interactive maps (via Leaflet.js), dynamic routing, and geolocation using the **PositionStack API**.

## 🚀 Features

- 🔁 **Dynamic Routing** for cities → `/city/[cityName]`
- 🕵️ **Real-time Project Listing** (mock scraping)
- 🗺️ **Interactive Maps** with live geolocation
- 📍 **PositionStack API** to fetch coordinates
- 💅 **Tailwind CSS** for modern responsive UI
- 📦 **Next.js API Routes** for backend logic
- 🧠 **Context API** for global project state

LIVE DEMO - https://realstate-blue.vercel.app

File Structure :
<img width="317" alt="Screenshot 2025-07-08 at 10 14 16 PM" src="https://github.com/user-attachments/assets/8c54965b-1822-4a91-b3bd-9624971267f6" />



[1. Clone the Repository
git clone https://github.com/SHARAD-BIT/Real-Estate-.git
cd Real-Estate-

2. Install Dependencies
Make sure you have Node.js and npm installed. Then run:
npm install

3. Set Up Environment Variables
 Create a .env.local file in the root directory and add your PositionStack API key:
POSITIONSTACK_API_KEY=404ce92ad1629e8f210a857a8cb36dce
You can get your key from https://positionstack.com

4. Run the Development Server
   npm run dev

5. Open your browser and go to:
http://localhost:3000

💡 Navigate to a City Page
http://localhost:3000/city/Hyderabad]
