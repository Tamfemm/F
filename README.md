# Tfem Hotties

Production-ready Node/Express application for paid model profiles across U.S. cities.

## Core behavior

- Email/password accounts with hashed passwords and secure server sessions.
- One model profile per account.
- Up to 10 Cloudinary photos and one video (client validates a 3-second maximum).
- $30/month recurring Stripe subscription.
- Tamara's private, nontechnical admin at `/richgirlielifetammy` for creating, editing, hiding and publishing profiles.
- Story and AI cartoon-strip editor with separate Save Draft and Publish buttons, immediate visual image removal, Earlier/Later image ordering, up to 12 images, private Draft and Published libraries with dates, and a dated public story listing.
- Public About Me page preserving Tamara's picture, story, gallery, and contact-email sections, all editable from her private admin.
- Admin-editable Tamara greeting podium—with its own picture and message—on the homepage and every city listings page.
- Separate public `/gallery` page with a large carousel, previous/next controls, and clickable thumbnails using Tamara's admin-uploaded gallery pictures.
- Admin Stripe overview showing active subscriptions and recent payments from the connected Stripe account.
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

## Tamara's admin

Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `.env` locally and in Render's Environment settings. Tamara signs in at `/richgirlielifetammy`. She can create profiles; update bios; replace or select the main profile picture; add and remove gallery pictures; replace the short video; write, edit and publish stories; upload AI cartoon strips; keep work as a draft; and review Stripe activity. Use a strong password and never commit the real `.env` file.

The 30-card demo grid appears in every city so empty cities still demonstrate the complete layout. Real published profiles appear before the demo cards.
