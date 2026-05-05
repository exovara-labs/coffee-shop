# Miner Perk Premium Website Concept

A production-grade, mobile-first Next.js concept for Miner Perk in Yreka, California. The design direction is premium coffee brand meets Apple-like simplicity and DoorDash-style mobile action flow.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react icons

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for Production

```bash
npm run build
npm run start
```

## Client Completion Checklist

Before handing this to Miner Perk, replace placeholder/demo content with approved business assets:

- Replace placeholder phone number in `app/page.tsx`.
- Confirm exact address, hours, ordering link, and social links.
- Replace Unsplash images with approved Miner Perk photos or licensed brand photography.
- Add real menu categories, item descriptions, and prices.
- Add real Google review excerpts only after approval.
- Connect rewards system to Supabase if building the digital punch-card feature.
- Add analytics: Google Analytics, Search Console, Meta Pixel if running ads.
- Add legal pages if needed: Privacy Policy, Terms, Accessibility.

### Phase 2: Rewards Backend

Use Supabase tables:

- `customers`: id, name, email, phone, created_at
- `reward_cards`: id, customer_id, punches, free_drinks_redeemed, updated_at
- `reward_events`: id, customer_id, type, note, created_by, created_at
- `admins`: id, user_id, role

Suggested flow:

1. Customer joins with phone/email.
2. Customer receives a digital rewards card.
3. Staff/admin manually adds punches from dashboard.
4. At 10 punches, customer unlocks a free drink.
5. Admin redeems reward and resets punch count.

### Phase 3: Ordering

Start with an external ordering CTA. Later, add native ordering:

- Menu CMS in Supabase
- Cart
- Stripe Checkout
- Pickup time selector
- Order notification email/SMS
- Admin order dashboard

## Design Notes

The site intentionally uses a warm espresso/cream/copper palette, glassmorphism, cinematic product cards, and sticky mobile CTAs to match premium coffee branding while keeping the experience fast for phone users.
