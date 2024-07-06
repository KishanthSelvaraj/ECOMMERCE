"use client";
import { CartProvider as CProvider } from "use-shopping-cart";
const CardProvider = ({ children }) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="https://ecommerce-bdx.vercel.app/stripe/success"
      cancelUrl="https://ecommerce-bdx.vercel.app/stripe/error"
      language="en-US"
      currency="INR"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  );
};

export default CardProvider;
