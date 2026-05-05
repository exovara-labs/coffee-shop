import { getGoogleMapsEmbedUrl, SHOP_ADDRESS_LINE } from "@/lib/shop";

export function ShopMap() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="relative aspect-[4/3] w-full md:aspect-[16/10] md:max-h-[460px] lg:aspect-[2/1]">
        <iframe
          title={`Miner Perk location — ${SHOP_ADDRESS_LINE}`}
          src={getGoogleMapsEmbedUrl()}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}
