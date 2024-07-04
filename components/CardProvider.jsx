"use client";
import { CartProvider as CProvider } from "use-shopping-cart";
const CardProvider = ({ children }) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="https://ecommerce-dusky-alpha.vercel.app/success"
      cancelUrl="https://ecommerce-dusky-alpha.vercel.app/error"
      language="en-US"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  );
};

export default CardProvider;
