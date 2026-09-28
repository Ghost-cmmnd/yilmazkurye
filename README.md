# Yılmaz Kurye — Web Sitesi

Bu proje [Astro](https://astro.build) ile yazılmış, tamamen statik (sunucu gerektirmeyen) bir web sitesidir. Cloudflare Workers'ın ücretsiz katmanında yayınlanmak üzere hazırlanmıştır.

## Yerelde Çalıştırma

```sh
npm install
npm run dev
```

Tarayıcıda `http://localhost:4321` adresini açın.

## Blog Yazısı Ekleme / Düzenleme

Blog yazıları `src/content/blog/` klasöründe birer `.md` dosyasıdır. Yeni bir yazı eklemek için o klasöre yeni bir `.md` dosyası oluşturmanız yeterli — ayrı bir yönetim paneli yoktur.

Her dosyanın başında şu bilgiler (frontmatter) bulunur:

```md
---
title: "Yazı Başlığı"
description: "Arama motorlarında görünecek kısa açıklama"
date: 2026-03-01
category: "Kurye Hizmetleri"
keywords: ["anahtar kelime 1", "anahtar kelime 2"]
readTime: "5 dk okuma"
---

Yazının gövdesi buradan başlar, normal Markdown ile yazılır.
```

## İletişim Bilgilerini Değiştirme

Telefon, WhatsApp, e-posta ve adres bilgileri **tek bir dosyada** toplanmıştır: `src/data/site.ts`. Bu dosyayı güncellediğinizde site genelinde (header, footer, iletişim bölümü, CTA kutuları) her yerde otomatik güncellenir.

## Derleme (Build)

```sh
npm run build
```

Çıktı `dist/` klasörüne üretilir.

## Cloudflare Workers'a Yayınlama

Bu site, sunucu kodu gerektirmeyen "static assets" modunda bir Cloudflare Worker olarak yayınlanır (`wrangler.jsonc`).

```sh
npx wrangler login   # ilk seferde Cloudflare hesabınızla giriş yapın
npm run deploy       # derler ve Cloudflare Workers'a yükler
```

Domain'i (`yilmazkurye.com.tr`) bağlamak için Cloudflare Dashboard → Workers & Pages → ilgili proje → Settings → Domains & Routes bölümünden "Custom Domain" ekleyin. En kolay bakım için Cloudflare Dashboard'dan bu GitHub reposuna bağlanan bir "Workers Builds" entegrasyonu kurmanız önerilir — böylece her `git push` sonrası site otomatik güncellenir.
