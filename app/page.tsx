"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  Bean,
  Coffee,
  CupSoda,
  MapPin,
  Menu,
  Navigation,
  Phone,
  QrCode,
  ShoppingBag,
  Sparkles,
  Star,
  Timer,
  Utensils,
  WalletCards
} from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";
import { ShopMap } from "@/components/ShopMap";
import { getGoogleMapsDirectionsUrl, SHOP_ADDRESS_LINE } from "@/lib/shop";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const menu = [
  { icon: Coffee, title: "Signature Espresso", desc: "Lattes, mochas, americanos, cold brew, and seasonal house specials." },
  { icon: CupSoda, title: "Infused Energy", desc: "Bright Red Bull infusions with fruit-forward flavor combinations." },
  { icon: Utensils, title: "Breakfast Favorites", desc: "Breakfast burritos, sandwiches, grab-and-go bites, and morning fuel." },
  { icon: Bean, title: "Local Rituals", desc: "Daily coffee runs, friendly service, and rewards for the regulars." }
];

const rewards = ["Join in seconds", "Collect digital punches", "Unlock free drinks", "Get seasonal perks"];

const specials = [
  { name: "Miner's Mocha", detail: "Dark chocolate, espresso, velvet milk", price: "$5.75" },
  { name: "Golden Rush Latte", detail: "Caramel, vanilla, cinnamon finish", price: "$5.95" },
  { name: "Mountain Berry Buzz", detail: "Infused energy, berry, citrus sparkle", price: "$6.25" },
  { name: "MeMa Burrito", detail: "Warm breakfast favorite for the road", price: "$7.50" }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const cupRotate = useTransform(scrollYProgress, [0, 0.35], [0, -8]);
  const glowScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.18]);

  const particles = useMemo(() => Array.from({ length: 18 }, (_, i) => i), []);

  return (
    <main className="min-h-screen bg-espresso text-crema">
      <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4 md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-espresso/70 px-4 py-3 shadow-premium backdrop-blur-2xl md:px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-crema text-espresso shadow-glow">
              <Coffee size={20} />
            </span>
            <span>
              <span className="block text-sm font-black tracking-[0.24em] text-white">MINER PERK</span>
              <span className="hidden text-xs text-crema/60 sm:block">Yreka, California</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-crema/75 md:flex">
            <a className="transition hover:text-white" href="#menu">Menu</a>
            <a className="transition hover:text-white" href="#rewards">Rewards</a>
            <a className="transition hover:text-white" href="#visit">Visit</a>
          </div>
          <a href="#order" className="hidden rounded-full bg-crema px-5 py-3 text-sm font-bold text-espresso transition hover:scale-105 md:inline-flex">
            Order Ahead
          </a>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 md:hidden" aria-label="Open menu">
            <Menu size={20} />
          </button>
        </nav>
      </header>

      <section id="home" className="hero-gradient relative isolate overflow-hidden px-4 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">
        {particles.map((p) => (
          <motion.span
            key={p}
            className="absolute h-1 w-1 rounded-full bg-ember/70"
            style={{ left: `${8 + p * 5}%`, top: `${18 + (p % 7) * 9}%` }}
            animate={{ y: [0, -18, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 3 + (p % 4), repeat: Infinity, delay: p * 0.13 }}
          />
        ))}
        <motion.div style={{ y: heroY }} className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-ember/25 bg-white/7 px-4 py-2 text-sm text-crema/80 backdrop-blur-xl">
              <Sparkles size={16} className="text-ember" /> Yreka's daily coffee ritual, upgraded.
            </motion.div>
            <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
              Small town coffee. <span className="premium-text">Big perk energy.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-crema/72 md:text-xl">
              A premium mobile-first experience for Miner Perk — built for fast ordering, loyal regulars, local discovery, and rewards that bring customers back.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#order" className="group inline-flex items-center justify-center gap-2 rounded-full bg-crema px-7 py-4 font-black text-espresso shadow-glow transition hover:scale-[1.02]">
                Order Ahead <ArrowRight className="transition group-hover:translate-x-1" size={18} />
              </a>
              <a href="#rewards" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-7 py-4 font-bold text-white backdrop-blur-xl transition hover:bg-white/14">
                Join Rewards <Award size={18} />
              </a>
            </motion.div>
          </motion.div>

          <div className="relative min-h-[540px]">
            <motion.div style={{ scale: glowScale }} className="absolute inset-8 rounded-full bg-ember/20 blur-3xl" />
            <motion.div style={{ rotate: cupRotate }} className="glass absolute inset-x-0 top-4 mx-auto max-w-[520px] overflow-hidden rounded-[3rem] p-4 shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop"
                alt="Premium coffee drink"
                width={1200}
                height={1200}
                priority
                className="h-[520px] rounded-[2.5rem] object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-white/15 bg-espresso/70 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">Featured</p>
                    <h2 className="mt-1 text-2xl font-black text-white">Golden Rush Latte</h2>
                  </div>
                  <div className="rounded-full bg-crema px-4 py-2 text-sm font-black text-espresso">Rewards eligible</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="relative px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {[
            [Timer, "Fast drive-thru", "Built around mobile customers on the move."],
            [Star, "Local favorite", "Review-powered trust and social proof."],
            [WalletCards, "Punch rewards", "Turn the card program into a digital growth loop."],
            [MapPin, "Yreka discovery", "SEO-ready for nearby coffee searches."]
          ].map(([Icon, title, desc]) => {
            const I = Icon as typeof Coffee;
            return (
              <motion.div key={title as string} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass rounded-[2rem] p-6">
                <I className="mb-5 text-ember" size={26} />
                <h3 className="text-xl font-black text-white">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-crema/65">{desc as string}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="menu" className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.28em] text-ember">Menu experience</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">Designed to make ordering feel effortless.</h2>
            </div>
            <p className="max-w-xl text-crema/68">Clear categories, cinematic product cards, sticky mobile actions, and seasonal promotions that feel premium without slowing customers down.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {menu.map((item) => (
              <motion.article key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -8 }} className="rounded-[2.4rem] border border-white/10 bg-white/[0.06] p-6 shadow-premium">
                <item.icon className="text-ember" size={32} />
                <h3 className="mt-8 text-2xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-crema/65">{item.desc}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {specials.map((item) => (
              <div key={item.name} className="rounded-[1.6rem] border border-white/10 bg-roast/70 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-black text-white">{item.name}</h4>
                  <span className="text-sm font-bold text-ember">{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-crema/60">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rewards" className="overflow-hidden px-4 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="font-bold uppercase tracking-[0.28em] text-ember">Rewards system</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">The punch card, reimagined for regulars.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-crema/70">Start with the familiar card punch experience, then scale into customer profiles, digital punches, birthdays, SMS promos, seasonal rewards, and admin-controlled loyalty campaigns.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {rewards.map((reward) => (
                <div key={reward} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/7 p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-ember/20 text-ember"><Star size={16} /></span>
                  <span className="font-bold text-white">{reward}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass relative rounded-[3rem] p-6 shadow-premium">
            <div className="rounded-[2.4rem] bg-gradient-to-br from-crema to-ember p-6 text-espresso">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em]">Miner Perk</p>
                  <h3 className="mt-2 text-3xl font-black">Rewards Card</h3>
                </div>
                <QrCode size={42} />
              </div>
              <div className="mt-12 grid grid-cols-5 gap-3">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div key={i} initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.06 }} viewport={{ once: true }} className={`grid aspect-square place-items-center rounded-full border-2 ${i < 7 ? "border-espresso bg-espresso text-crema" : "border-espresso/40 text-espresso/55"}`}>
                    <Coffee size={18} />
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 flex items-center justify-between rounded-2xl bg-espresso/12 p-4">
                <span className="font-black">7 / 10 punches</span>
                <span className="text-sm font-bold">3 away from a free drink</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="order" className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-crema text-espresso shadow-premium lg:grid lg:grid-cols-[.9fr_1.1fr]">
          <div className="p-8 md:p-12">
            <p className="font-black uppercase tracking-[0.28em] text-copper">Order ahead</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">Apple-simple. DoorDash-fast.</h2>
            <p className="mt-5 text-lg leading-8 text-espresso/70">Give mobile customers the fastest path to action: order, call, directions, and rewards within thumb reach.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-espresso px-7 py-4 font-black text-crema" href="#">Start Order <ShoppingBag size={18} /></a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-espresso/20 px-7 py-4 font-black" href="tel:+15300000000">Call Now <Phone size={18} /></a>
            </div>
          </div>
          <div className="relative min-h-[420px]">
            <Image src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1400&auto=format&fit=crop" alt="Coffee shop counter" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section id="visit" className="px-4 pb-32 pt-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="glass rounded-[2.5rem] p-8 lg:col-span-2">
            <p className="font-bold uppercase tracking-[0.28em] text-ember">Visit Miner Perk</p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-6xl">Built for local discovery.</h2>
            <p className="mt-5 max-w-2xl text-crema/68">The production version should connect verified hours, Google Business Profile details, real menu data, live ordering, and review content after client approval.</p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mt-8 space-y-6"
            >
              <ShopMap />
              <p className="flex flex-wrap items-center gap-2 text-sm text-crema/65">
                <MapPin size={16} className="shrink-0 text-ember" aria-hidden />
                <span className="font-semibold text-white/90">{SHOP_ADDRESS_LINE}</span>
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-crema px-7 py-4 text-sm font-black text-espresso shadow-glow transition hover:scale-[1.02] sm:flex-none"
                  href={getGoogleMapsDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation size={18} aria-hidden />
                  Get directions
                </a>
                <a
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/14 sm:flex-none"
                  href="tel:+15300000000"
                >
                  <Phone size={18} aria-hidden />
                  Call
                </a>
                <a
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/14 sm:flex-none"
                  href="#rewards"
                >
                  <Award size={18} aria-hidden />
                  Rewards
                </a>
              </div>
            </motion.div>
          </div>
          <div className="rounded-[2.5rem] bg-pine p-8 shadow-premium">
            <h3 className="text-2xl font-black text-white">Production checklist</h3>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-crema/72">
              <li>• Replace placeholder phone with verified number.</li>
              <li>• Add approved brand photos and menu prices.</li>
              <li>• Connect ordering provider or custom checkout.</li>
              <li>• Add Supabase for rewards accounts.</li>
              <li>• Add Google Analytics + Search Console.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 left-4 right-4 z-40 grid grid-cols-4 gap-2 rounded-[1.6rem] border border-white/10 bg-espresso/85 p-2 shadow-premium backdrop-blur-2xl md:hidden">
        <a href="#menu" className="grid place-items-center rounded-2xl px-2 py-3 text-xs font-bold text-crema/80"><Coffee size={18} />Menu</a>
        <a href="#order" className="grid place-items-center rounded-2xl bg-crema px-2 py-3 text-xs font-black text-espresso"><ShoppingBag size={18} />Order</a>
        <a href="#rewards" className="grid place-items-center rounded-2xl px-2 py-3 text-xs font-bold text-crema/80"><Award size={18} />Perks</a>
        <a href="#visit" className="grid place-items-center rounded-2xl px-2 py-3 text-xs font-bold text-crema/80"><MapPin size={18} />Visit</a>
      </div>
    </main>
  );
}
