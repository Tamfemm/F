# Tfem Hotties

Production-ready Node/Express application for paid model profiles across U.S. cities.

## Core behavior

- Email/password accounts with hashed passwords and secure server sessions.
- One model profile per account.
- Up to 10 Cloudinary photos and one video (client validates a 3-second maximum).
- $30/month recurring Stripe subscription.
- Stripe webhooks activate, suspend, or hide profiles automatically.
- Public city listings show only active paid profiles.
- Expired/canceled profiles remain saved and can be reactivated without rebuilding.

## Launch setup

1. Create a MongoDB Atlas database and Cloudinary account.
2. In Stripe, create a recurring product priced at **$30 USD per month** and copy its Price ID.
3. Deploy using `render.yaml`.
4. Add every value from `.env.example` in Render's Environment settings.
5. In Stripe, register `https://YOUR-DOMAIN/stripe/webhook` for Checkout, invoice, and subscription events. Put its signing secret in `STRIPE_WEBHOOK_SECRET`.
6. Point the chosen domain to Render and update `BASE_URL`.

Never commit the real `.env` file or paste secret keys into source code.
