
'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import getStripe from '@/app/utils/stripe';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const handleCheckout = async () => {
//     const stripe = await getStripe();
//     const response = await fetch('/api/create-checkout-session', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ items: cart }),
//     });

//     if (response.status === 500) {
//       console.error('Error creating checkout session');
//       return;
//     }

//     const data = await response.json();
//     stripe.redirectToCheckout({ sessionId: data.sessionId });
//   };
const handleCheckout = async () => {
    try {
      const stripe = await getStripe();
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      const result = await stripe.redirectToCheckout({ sessionId: data.sessionId });
  
      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Error in handleCheckout:', error);
    }
  };
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Your Cart</CardTitle>
      </CardHeader>
      <CardContent>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>${item.price.toFixed(2)} x {item.quantity}</p>
            </div>
            <div className="flex items-center">
              <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</Button>
              <span className="mx-2">{item.quantity}</span>
              <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
              <Button variant="destructive" size="sm" className="ml-2" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex flex-col items-stretch">
        <div className="flex justify-between mb-4">
          <strong>Total:</strong>
          <span>${total.toFixed(2)}</span>
        </div>
        <Button onClick={handleCheckout} className="w-full">Proceed to Checkout</Button>
      </CardFooter>
    </Card>
  );
};

export default Cart;