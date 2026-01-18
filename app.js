/*
  MVP – Moje seznamy
  Koncept: uložený seznam produktů, který lze jedním krokem přidat do košíku
*/

const express = require('express')
const app = express()
app.use(express.json())

// ===== DATA (MVP – nahrazuje DB) =====
const lists = []        // { id, userId, name }
const listItems = []   // { listId, productId, quantity }
const carts = {}       // userId -> [{ productId, quantity }]

const USER_ID = 1

// Vytvoří seznam
app.post('/lists', (req, res) => {
  lists.push({
    id: Date.now(),
    userId: USER_ID,
    name: req.body.name
  })
  res.sendStatus(201)
})

// Přidá produkt do seznamu
app.post('/lists/:listId/items', (req, res) => {
  listItems.push({
    listId: Number(req.params.listId),
    productId: req.body.productId,
    quantity: req.body.quantity
  })
  res.sendStatus(201)
})

// Přidá celý seznam do košíku
app.post('/lists/:listId/add-to-cart', (req, res) => {
  const listId = Number(req.params.listId)
  carts[USER_ID] ??= []

  listItems
    .filter(i => i.listId === listId)
    .forEach(i =>
      carts[USER_ID].push({
        productId: i.productId,
        quantity: i.quantity
      })
    )

  res.sendStatus(200)
})

app.listen(3000)
