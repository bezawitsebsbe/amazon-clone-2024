
const functions = require('firebase-functions');

const express = require('express');
const cors =require('cors');
const stripe = require('stripe')('sk_test_51PwkTsGWtx9jvGH9Iem0Mam06rawv52yQ54FssU8nZPocLmm8iKjdkU20fFEgpQzfF6s3ADVoCCAmTt5CMkAfdbO00utNvtMNv');

const app =express();

app.use(cors({origin:true}));
app.use(express.json());

app.get('/',(request,response) => response.status(200).send('hello world!'));
app.get('/evangadi',(request,response) => response.status(200).send('evangadi'));


app.post('/payments/create', async (request, response) => {
    const total = request.query.total; // Get total from query
    console.log('Payment request received for this amount >>>', total);

    // Validate the total amount
    if (!total || isNaN(total)) {
        return response.status(400).send({ error: 'Invalid total amount' });
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create({ // Correct method
            amount: total,
            currency: 'usd',
        });

        // Respond with the client secret
        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error('Error creating payment intent:', error); // Log error details
        response.status(500).send({
            error: 'Payment failed: ' + error.message, // Send back error message
        });
    }
});

exports.api =functions.https.onRequest(app);





