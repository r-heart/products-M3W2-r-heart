# Products

As always...as always, don't forget to do `npm i`.

This repository uses `json-server` (already included in the **package dependencies**) to load products from a `db.json`. This is an ignored file, so you will need to create it yourself. Create a `db.json` **at the root of the product.** Paste the following:

```json
{
  "products": [
    {
      "category": "Sporting Goods",
      "price": "$49.99",
      "stocked": true,
      "name": "Football"
    },
    {
      "category": "Sporting Goods",
      "price": "$9.99",
      "stocked": true,
      "name": "Baseball"
    },
    {
      "category": "Sporting Goods",
      "price": "$29.99",
      "stocked": false,
      "name": "Basketball"
    },
    {
      "category": "Electronics",
      "price": "$99.99",
      "stocked": true,
      "name": "iPod Touch"
    },
    {
      "category": "Electronics",
      "price": "$399.99",
      "stocked": false,
      "name": "iPhone 5"
    },
    {
      "category": "Electronics",
      "price": "$199.99",
      "stocked": true,
      "name": "Nexus 7"
    }
  ]
}
```

You'll need to run `npm run serve` to start the `json-server` mock back-end. Be sure to do this in a separate terminal instance (from the correct directory) as you will need other terminal instances to run `npm start` (Vite server) and npm t (Vitest and React Testing Library).
