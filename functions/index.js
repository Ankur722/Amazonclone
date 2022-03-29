// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")(
//     "sk_test_51KeBiESGtfd28WY0rCXg2ylRY39Vd2Tv2yoSYatjsAonoXl8mES0aQ6ce6sR0J5H3Tku1Obs3JingYcFRzBCltsa00Tk6nN5zB"
// );

// // Setup API

// // App config
// const app = express();

// //Middlewares
// app.use(cors({origin: true}));
// app.use(express.json());

// //API routes
// app.get("/", (request,response) => response.status(200).send("Hello world"))

// app.post("/payments/create", async (request, response) => {
//     const total = request.query.total;

//     console.log("Payment Req Recieved", total);

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: total, //subunits of currency
//         currency: "usd",
//     });


//     response.status(201).send({
//         clientSecret: paymentIntent.client_secret,
//     });
// });

// //Listen command
// exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-6c73a/us-central1/api

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KeBiESGtfd28WY0rCXg2ylRY39Vd2Tv2yoSYatjsAonoXl8mES0aQ6ce6sR0J5H3Tku1Obs3JingYcFRzBCltsa00Tk6nN5zB"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api

