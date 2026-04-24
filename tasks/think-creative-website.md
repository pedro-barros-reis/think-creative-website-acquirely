# think-creative-website — Estado Atual

**Atualizado**: 2026-04-22

## Concluido recentemente
- IndustriesSection: item "& hundreds more!" não é clicavel nem troca a imagem (renderiza como `<span>`, sem imagem associada)
- Padding global: trocado `px-6 lg:px-12` para `px-6 lg:px-30` em 16 arquivos (Navbar, Footer, TestimonialCard, todas as sections em shared/home/careers/team)
- ProofCarouselSection: refatorado para marquee auto-scroll contínuo (sem interação), duplica array e usa `@keyframes` com `translateX`; respeita `prefers-reduced-motion`
- ProofCarousel: imagens agora renderizam em 348×451px fixos via `width/height` + `style` inline + `object-cover`; prop `cardAspect` removida dos wrappers (graphic-design + web-development)
- PressBanner: logos agora em box fixo 112×32px (`w-28 h-8`) com `object-contain`; mobile usa `justify-center` + gap, desktop usa `lg:flex-nowrap lg:justify-between lg:gap-x-0`
- Navbar mobile tap fix (múltiplas iterações): `type="button"`, `touch-manipulation`, `pointer-events-none` no ícone SVG (lucide), `flex-shrink-0`, `whitespace-nowrap select-none` no CTA Link, `p-3` (hit target ~48px), CTA reduzido (`px-3 py-2 text-[11px]`)
- Navbar lógica: `didMount` ref para pular o primeiro disparo do effect de pathname (evita reset do estado), menu sempre montado no DOM com toggle via CSS (`block`/`hidden`) em vez de conditional rendering, `100vh` em vez de `100dvh` (compat iOS antigo)

## Pendente
- Validar no celular real se o menu mobile abre depois das últimas mudanças (didMount ref + sempre-montado + 100vh)
- Se ainda não funcionar, próximo passo é esconder o CTA "Free Marketing Plan" do top bar mobile (já existe no menu drawer)

## Bugs conhecidos
- Nenhum confirmado — aguardando validação do fix do menu mobile

## Decisoes
- **Next.js customizado** (AGENTS.md): não é o Next padrão, tem breaking changes. Consultar `node_modules/next/dist/docs/` antes de escrever código relacionado ao Next
- **Tailwind v4**: `@import "tailwindcss"` em globals.css (não é config JS tradicional)
- **Padding horizontal das sections**: padrão agora é `px-6 lg:px-30`
- **Carousel = marquee auto-scroll**: sem interação de usuário, duplica array para loop sem costura, velocidade ~50px/s configurada em constante
- **Imagens padronizadas**: CarouselImages em 348×451px fixos, wrappers não precisam mais da prop `cardAspect`
- **PressBanner logos**: box de tamanho fixo + `object-contain` garante peso visual uniforme (evita logos largos como NEWSMAX parecerem maiores)
- **Mobile tap reliability**: `pointer-events-none` em SVGs dentro de `<button>` é requisito em iOS Safari (SVG absorve hit-test)

## Stack
- Next.js customizado (App Router, `"use client"`), React, TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"`)
- lucide-react para ícones
- next/image, next/font (Geist, Geist_Mono, IBM_Plex_Sans)
- Estrutura: `app/` (rotas), `components/layout/`, `components/sections/{home,shared,team,careers,web-development,graphic-design,ppc,seo,facebook-ads}/`, `components/ui/`
