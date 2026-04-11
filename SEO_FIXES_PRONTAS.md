# 🔧 CORREÇÕES SEO - CÓDIGO PRONTO PARA IMPLEMENTAR

## 📋 Arquivos a Modificar
1. `index.html` - Meta tags e schema.org
2. `src/pages/Landing.tsx` - useSEO hook (opcional, já usa)

---

## 1️⃣ CORRIGIR index.html

### PROBLEMA 1: og:image com URL relativa/inválida

**Localizar esta linha (linha 50):**
```html
<meta property="og:image" content="https://www.technexos.com.br/lamp">
```

**Substituir por (OPÇÃO A - Recomendado se existe imagem):**
```html
<meta property="og:image" content="https://www.technexos.com.br/og-image-technexos-1200x630.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="TechNexos Consultoria em Tecnologia - Transformação Digital">
```

**Ou OPÇÃO B (Usar imagem existente do Roque):**
```html
<meta property="og:image" content="https://www.technexos.com.br/src/img/roque-rafael-proenca-consultor.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="1200">
<meta property="og:image:alt" content="Roque Rafael Proença - Consultor Tecnológico">
```

**Localizar esta linha (linha 60):**
```html
<meta name="twitter:image" content="https://www.technexos.com.br/lamp">
```

**Substituir por:**
```html
<meta name="twitter:image" content="https://www.technexos.com.br/og-image-technexos-1200x630.png">
```

---

### PROBLEMA 2: Title com 97 caracteres (será cortado)

**Localizar (linha 19):**
```html
<title>TechNexos Consultoria em Tecnologia | Transformação Digital Ponta a Ponta | Desenvolvimento Personalizado</title>
```

**Substituir por (58 caracteres - perfeito):**
```html
<title>TechNexos - Consultoria em Tecnologia | Transformação Digital</title>
```

---

### PROBLEMA 3: JSON-LD LocalBusiness Incompleto

**Localizar o bloco JSON-LD entre linhas 67-109:**

**Substituir COMPLETAMENTE por:**

```html
<!-- JSON-LD STRUCTURED DATA - OTIMIZADO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TechNexos Consultoria em Tecnologia",
  "image": "https://www.technexos.com.br/src/img/roque-rafael-proenca-consultor.png",
  "description": "Consultoria em Tecnologia especializada em desenvolvimento personalizado, transformação digital, automação inteligente e implementação ágil ponta a ponta. MVP em 18-40 dias.",
  "url": "https://www.technexos.com.br",
  "telephone": "+55 32 99107-5164",
  "email": "contato@technexos.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Avenida Juiz de Fora, 1801, Torre 1, Sala 306",
    "addressLocality": "Juiz de Fora",
    "addressRegion": "MG",
    "postalCode": "36048-001",
    "addressCountry": "BR"
  },
  "priceRange": "$$$",
  "sameAs": [
    "https://www.linkedin.com/in/roque-rafael-proença-63a543112/",
    "https://www.youtube.com/@technexos",
    "https://github.com/roque-pro"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "ratingCount": "50"
  },
  "founder": {
    "@type": "Person",
    "name": "Roque Rafael Proença",
    "jobTitle": "Consultor Tecnológico Especialista",
    "image": "https://www.technexos.com.br/src/img/roque-rafael-proenca-consultor.png"
  },
  "knowsAbout": [
    "React",
    "Node.js",
    "AWS",
    "TypeScript",
    "Transformação Digital",
    "Automação",
    "ERP",
    "SaaS",
    "Desenvolvimento Web",
    "Consultoria Estratégica"
  ],
  "areaServed": [
    {
      "@type": "State",
      "name": "Minas Gerais"
    },
    {
      "@type": "State",
      "name": "Rio de Janeiro"
    },
    {
      "@type": "State",
      "name": "São Paulo"
    },
    {
      "@type": "Country",
      "name": "BR"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55 32 99107-5164",
    "contactType": "Customer Service",
    "areaServed": ["MG", "RJ", "SP", "BR"]
  },
  "foundingDate": "2009"
}
</script>
```

---

### PROBLEMA 4: Adicionar Breadcrumb Schema

**Adicionar APÓS o schema LocalBusiness (dentro da `<head>`):**

```html
<!-- BREADCRUMB SCHEMA -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.technexos.com.br"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Serviços",
      "item": "https://www.technexos.com.br/#solucoes"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Blog",
      "item": "https://www.technexos.com.br/blog"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Contato",
      "item": "https://www.technexos.com.br/#contato"
    }
  ]
}
</script>
```

---

### PROBLEMA 5: Organization Schema

**Localizar e substituir o Organization Schema (linhas 112-136):**

**Por:**

```html
<!-- ORGANIZATION SCHEMA -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TechNexos Consultoria em Tecnologia",
  "url": "https://www.technexos.com.br",
  "logo": "https://www.technexos.com.br/logo.svg",
  "image": "https://www.technexos.com.br/src/img/roque-rafael-proenca-consultor.png",
  "description": "Consultoria em Tecnologia especializada em Transformação Digital, Desenvolvimento Personalizado, Automação Inteligente e Implementação Ágil",
  "sameAs": [
    "https://www.linkedin.com/in/roque-rafael-proença-63a543112/",
    "https://www.youtube.com/@technexos",
    "https://github.com/roque-pro"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+55 32 99107-5164",
    "email": "contato@technexos.com.br",
    "areaServed": ["MG", "RJ", "SP", "BR"]
  },
  "founder": {
    "@type": "Person",
    "name": "Roque Rafael Proença",
    "jobTitle": "Consultor Tecnológico e Desenvolvedor",
    "image": "https://www.technexos.com.br/src/img/roque-rafael-proenca-consultor.png"
  }
}
</script>
```

---

## 2️⃣ CRIAR IMAGEM OG OTIMIZADA

### Passos:
1. Criar imagem 1200x630px (proporção 1.91:1)
2. Formato: PNG ou JPG
3. Peso: <500KB
4. Colocar em `/public/og-image-technexos-1200x630.png`

### Conteúdo Sugerido da Imagem:
```
┌─────────────────────────────────────────────────────────┐
│                                                           │
│    [LOGO TECHNEXOS]                                      │
│                                                           │
│    TechNexos                                              │
│    Consultoria em Tecnologia                              │
│                                                           │
│    Transformação Digital Ponta a Ponta                    │
│    MVP em 18-40 dias                                      │
│                                                           │
│    www.technexos.com.br                                   │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

**Cores:**
- Background: Gradiente de #8B5CF6 (Purple) para #6366F1 (Indigo)
- Texto: Branco
- Logo: Branco ou colorido

---

## 3️⃣ VERIFICAR OUTROS META TAGS

### Verificar e ajustar se necessário (já estão OK, mas revisar):

```html
<!-- ✅ JÁ CORRETO -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="TechNexos - Consultoria em Tecnologia que transforma...">
<meta name="author" content="Roque Rafael Proença" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta name="language" content="pt-BR">
<link rel="canonical" href="https://www.technexos.com.br">
```

---

## 4️⃣ VALIDAÇÕES PÓS-IMPLEMENTAÇÃO

### Passo 1: Testar JSON-LD
```
Ir em: https://schema.org/validator
Copiar e colar o HTML completo
Verificar se há erros
```

### Passo 2: Testar OG Tags (Facebook)
```
Ir em: https://developers.facebook.com/tools/debug/
Colar: https://www.technexos.com.br
Verificar se imagem e titulo aparecem corretos
```

### Passo 3: Testar em Google Rich Results
```
Ir em: https://search.google.com/test/rich-results
Colar: https://www.technexos.com.br
Verificar "Local Business" schema
```

### Passo 4: Mobile Friendly Test
```
Ir em: https://search.google.com/test/mobile-friendly
Colar: https://www.technexos.com.br
Verificar se está otimizado para mobile
```

### Passo 5: Lighthouse
```
DevTools Chrome (F12) → Lighthouse
Rodar análise
Verificar SEO score (deve ser >90)
```

---

## 📋 CHECKLIST DE IMPLEMENTAÇÃO

- [ ] Criar og-image (1200x630px)
- [ ] Corrigir `<title>` para <60 chars
- [ ] Atualizar og:image URL (fazer absoluta)
- [ ] Atualizar twitter:image URL
- [ ] Substituir LocalBusiness schema (completo)
- [ ] Adicionar Breadcrumb schema
- [ ] Atualizar Organization schema
- [ ] Testar em Schema.org Validator
- [ ] Testar em Facebook Debugger
- [ ] Testar em Google Rich Results
- [ ] Deploy para produção
- [ ] Monitorar em Search Console

---

## 🚀 ORDEM DE IMPLEMENTAÇÃO RECOMENDADA

1. **Primeiro (5 min):** Corrigir `<title>` e og:image URLs
2. **Segundo (10 min):** Substituir LocalBusiness schema
3. **Terceiro (5 min):** Adicionar Breadcrumb e revisar Organization
4. **Quarto (30 min):** Criar imagem OG otimizada
5. **Quinto (15 min):** Fazer validações em schema.org e Facebook Debugger
6. **Sexto:** Deploy e monitorar em Search Console

**Tempo total:** ~60 minutos (metade disso se OG image já existe)

---

## ⚠️ ERROS COMUNS A EVITAR

❌ **NÃO FAZER:**
- Usar URL relativa em og:image (ex: `/lamp`)
- Deixar title com mais de 60 caracteres
- Telefone sem espaço após +55
- CEP sem hífen
- AddressLocality como "Brasil" (deve ser cidade)
- Address sem streetAddress

✅ **FAZER:**
- URL absoluta com https:// em og:image
- Title <60 caracteres
- Telefone: +55 [DDD] [XXXXX-XXXX]
- CEP: 36048-001
- AddressLocality: "Juiz de Fora"
- Address completo com rua, número, complemento

---

## 📞 DÚVIDAS FREQUENTES

**P: Preciso criar a imagem OG?**  
R: Sim, é crítico. Pode ser feita em Figma, Canva ou Python.

**P: Quanto tempo leva para rankear?**  
R: Google leva 2-4 semanas para indexar. Impacto é gradual (1-3 meses).

**P: Qual imagem usar se não tenho OG image?**  
R: Use a imagem do Roque (roque-rafael-proenca-consultor.png). Idealmente crie uma 1200x630px.

**P: A mudança quebra algo?**  
R: Não, é apenas atualização de meta tags e schema. Zero risco.

---

## 📧 PRÓXIMOS PASSOS

1. ✅ Implementar correções acima
2. ✅ Testar em todas as ferramentas
3. ✅ Criar Google My Business (opcional mas recomendado)
4. ✅ Submeter sitemap ao Search Console
5. ✅ Monitorar posições no Google (1-4 semanas)

---

**Versão:** 1.0  
**Data:** Abril 2026  
**Status:** Pronto para Implementação Imediata  
**Risco:** BAIXO (mudanças apenas em meta tags)
