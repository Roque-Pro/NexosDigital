# Teste A/B - CTA Final (Seção de Fechamento)

## Contexto
A página de diagnóstico gratuito foi otimizada para máxima conversão. A seção final (CTA) é o último ponto de contato antes do visitante sair da página.

Aqui estão **2 variações** para testar qual gera mais cliques e preenchimentos de formulário.

---

## **OPÇÃO 1 (Atual - Foco em Segurança/Clareza)**

```
Headline: "Você sabe exatamente quanto está perdendo por mês?"

Subheadline: "Se não sabe, é exatamente por isso que preenche o formulário. Precisa de uma resposta clara."

CTA Button: "Quero minha análise agora"
```

**Estratégia:**
- Questão reflexiva que coloca o visitante em dúvida
- Responde com lógica simples
- CTA direto ("minha análise") cria senso de propriedade
- Menos agressivo, mais conversacional

**Melhor para:** Visitantes que já identificaram o problema e querem solução

---

## **OPÇÃO 2 (Foco em Urgência/Ação)**

```
Headline: "Seus concorrentes já estão controlando melhor que você"

Subheadline: "Enquanto você fica pensando, eles estão faturando mais. Descobre como agora."

CTA Button: "Preenche agora e fica na frente"
```

**Estratégia:**
- Cria senso de competição e FOMO (medo de ficar para trás)
- Urgência implícita
- Comparação com concorrentes
- CTA mais ativo ("fica na frente")

**Melhor para:** Visitantes competitivos, donos que não querem ficar atrás

---

## **OPÇÃO 3 (Foco em Perda Contínua/Impacto)**

```
Headline: "Enquanto você lê isso, seus clientes estão indo embora"

Subheadline: "Desorganização custa dinheiro. Não é amanhã. É hoje. Descobre quanto está perdendo."

CTA Button: "Mostram minha perda agora"
```

**Estratégia:**
- Urgência temporal (NOW)
- Impacto emocional forte
- CTA mais direto e demandante
- Foco em "mostrar" (resultado)

**Melhor para:** Visitantes que ainda estão em dúvida, precisam de choque

---

## **Recomendação de Teste**

1. **Semana 1-2:** Rodar OPÇÃO 1 (atual)
2. **Semana 3-4:** Rodar OPÇÃO 2 
3. **Comparar métricas:**
   - Taxa de cliques no CTA
   - Taxa de preenchimento do formulário
   - Tempo gasto na página antes do clique

**Métricas a monitorar:**
- Click-through rate (CTR) do botão
- Form submission rate
- Scroll depth até a seção final
- Bounce rate

---

## **Notas de Implementação**

- Manter o resto da página igual
- Variar APENAS a seção final (headline + subheadline + button text)
- Usar UTM parameters para rastrear: `?test=cta_option_1` / `?test=cta_option_2`
- Mínimo de 200-300 impressões por variante para dados confiáveis

---

## **Versão Atual (Já Implementada)**

A OPÇÃO 1 já está em produção no arquivo `src/pages/PlanAuth.tsx`.

Para testar OPÇÃO 2 ou 3, altere apenas os textos da seção `{/* CTA FINAL */}`.
