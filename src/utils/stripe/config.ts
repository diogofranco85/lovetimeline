import Stripe from 'stripe';

export const stripe = new Stripe(
  process.env.STRIPE_SK ?? '',
  {
    // @ts-expect-error - Stripe types are not up to date with the latest API version
    apiVersion: null,
    appInfo: {
      name: 'Love timeline',
      version: '1.0.0',
      url: 'https://www.lovetimeline.com'
    }
  }
);