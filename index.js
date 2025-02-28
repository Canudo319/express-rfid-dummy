import express from 'express';

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.status(200).send({
        "DateTime": "2025-02-27T14:30:00Z",
        "Task": [
          "Picking",
          "Pack",
          "Store"
        ],
        "Orders": [
          {
            "OrderID": 12345,
            "CustomerID": 67890,
            "Products": [
              {
                "ProductID": 54321,
                "Color": "Blue",
                "Size": "M",
                "WMSAddress": [
                  {
                    "Aisle": "A12",
                    "Level": 2,
                    "Bin": "B15",
                    "Quantity": 10
                  }
                ]
              },
              {
                "ProductID": 98765,
                "Color": "Red",
                "Size": "L",
                "WMSAddress": [
                  {
                    "Aisle": "A14",
                    "Level": 1,
                    "Bin": "B22",
                    "Quantity": 5
                  }
                ]
              }
            ]
          },
          {
            "OrderID": 67890,
            "CustomerID": 54321,
            "Products": [
              {
                "ProductID": 11111,
                "Color": "Black",
                "Size": "S",
                "WMSAddress": [
                  {
                    "Aisle": "A10",
                    "Level": 3,
                    "Bin": "B05",
                    "Quantity": 20
                  }
                ]
              }
            ]
          }
        ]
      })
})

app.listen(
    PORT,
    () => console.log(`Serviço disponivel na http://localhost:${PORT}`)
)