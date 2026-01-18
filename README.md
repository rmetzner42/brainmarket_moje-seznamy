# BrainMarket – Moje seznamy (MVP návrh)

Návrh jednoduché funkce „Moje seznamy“:
- zákazník si uloží seznam produktů
- pojmenuje si ho (např. Měsíční objednávka)
- jedním klikem vloží celý seznam do košíku

Cíl:
- zrychlit opakované objednávky
- zefektivnit proces nákupu více položek

## Technický koncept
- Node.js + Express (MVP)
- seznam = uložený mini-košík
- endpoint umožní hromadné přidání do košíku

## Spuštění (volitelné)
1. npm install
2. node app.js
3. API běží na http://localhost:3000

Klíčová funkce:
POST /lists/:id/add-to-cart
