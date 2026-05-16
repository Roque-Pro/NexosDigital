import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set');
}

const supabase = createClient(SUPABASE_URL ?? '', SUPABASE_SERVICE_ROLE_KEY ?? '');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { 
      status: 200, 
      headers: corsHeaders 
    });
  }

  try {
    if (!GEMINI_API_KEY) throw new Error('GEMINI_API_KEY is not set');

    const prompt = `
      Atue como um Engenheiro de SEO, Jornalista Digital e Copywriter Sênior especializado em:
- tráfego orgânico
- SEO semântico
- SEO parasita
- Google Discover
- blogs de tecnologia
- comportamento digital
- transformação tecnológica
- conteúdo evergreen
- UX para leitura online
- monetização editorial

OBJETIVO:
Gerar um artigo investigativo, profissional e altamente estratégico em HTML5/CSS3 para blog de tecnologia, negócios digitais e transformação digital.

O conteúdo deve ser pensado para:
- tráfego orgânico evergreen
- ranqueamento no Google
- Google Discover
- Pinterest
- autoridade digital
- retenção de leitura
- monetização futura com:
  - anúncios
  - afiliados
  - publieditoriais
  - consultorias
  - captação de clientes
  - produtos próprios
  - serviços digitais

IMPORTANTE:
- O artigo NÃO deve parecer propaganda direta.
- O conteúdo deve parecer uma matéria editorial moderna.
- O texto deve gerar percepção de autoridade.
- O artigo deve parecer escrito por um portal profissional de tecnologia e negócios.
- O conteúdo deve soar analítico, investigativo e atual.
- NÃO usar tom exageradamente comercial.
- NÃO transformar o artigo em página de vendas.
- NÃO usar CTA agressivo.
- NÃO repetir estruturas prontas.
- NÃO repetir padrões de títulos.
- NÃO repetir nichos excessivamente.
- NÃO usar sempre os mesmos exemplos.
- NÃO deixar o conteúdo genérico.
- Evitar repetição excessiva das palavras:
  - empresas
  - especialistas
  - negócios

SUBSTITUIÇÕES NATURAIS:
Substituir naturalmente por:
- segmentos
- operações regionais
- redes locais
- clínicas
- escritórios
- oficinas
- distribuidoras
- imobiliárias
- gestores
- consultores
- analistas
- arquitetos de software
- estrategistas digitais
- profissionais do setor
- diretores operacionais
- administradores

NICHO DO SITE:
O site offers contextos relacionados a:
- desenvolvimento web profissional
- criação de sistemas personalizados
- SEO
- tráfego pago
- automação operacional
- dashboards
- BI
- plataformas SaaS
- CRM
- ERP
- integração de sistemas
- gestão digital
- aplicativos empresariais
- consultoria em tecnologia
- otimização de processos
- presença digital
- performance web
- funis digitais
- automação comercial
- análise de dados
- transformação digital

REGRAS DE VARIAÇÃO DE NICHOS:
- NÃO focar repetidamente no mesmo ramo.
- Evitar repetir setores automotivos em artigos consecutivos.
- Escolher aleatoriamente 1 nicho principal por artigo.
- O artigo deve aprofundar SOMENTE o nicho escolhido.
- NÃO misturar segmentos sem relação operacional.
- Se houver combinação de nichos, eles devem possuir conexão lógica, tecnológica ou comercial real.
- O conteúdo inteiro deve girar em torno do nicho principal escolhido.
- Variar naturalmente os nichos entre artigos.
- Não repetir sempre os mesmos exemplos de mercado.
- Não repetir sempre oficinas mecânicas.
- Quando escolher um nicho, aprofundar dores, comportamento, tendências e tecnologias específicas daquele setor.

LISTA DE NICHOS PARA ESCOLHA ALEATÓRIA:
- oficinas mecânicas
- auto centers
- clínicas de saude humana e animal (escolha nicho aleatoriamente)
- escritórios contábeis
- escritórios jurídicos
- imobiliárias
- restaurantes
- hamburguerias
- academias
- pet shops
- construtoras
- escolas particulares
- distribuidoras regionais
- lojas de informática
- assistências técnicas
- hotéis
- pousadas
- franquias locais
- lojas de móveis planejados
- e-commerces regionais
- consultorias financeiras
- transportadoras
- gráficas
- empresas de energia solar
- lojas de autopeças
- empresas de refrigeração
- centros médicos
- clínicas de fisioterapia

EXEMPLOS DE COMBINAÇÕES ACEITAS:
- clínicas (aleatoriamente escolhidas) + CRM + automação de agendamento
- imobiliárias + SEO local + captação digital
- restaurantes + delivery + automação operacional
- academias + aplicativos + recorrência
- pet shops + WhatsApp + agendamento online
- escritórios contábeis + dashboards financeiros
- oficinas mecânicas + gestão operacional
- clínicas (aleatoriamente escolhidas) + tráfego pago
- construtoras + dashboards + BI
- distribuidoras + ERP + integração operacional

EXEMPLOS DE COMBINAÇÕES NÃO ACEITAS:
- oficina mecânica + clínica veterinária
- restaurante + indústria metalúrgica
- pet shop + transportadora
- escritório jurídico + oficina diesel
- academia + fábrica química
Traga sempre um nicho só

ESTRATÉGIA:
O artigo deve atrair:
- gestores
- donos de negócios locais
- administradores
- profissionais interessados em crescimento digital
- pessoas interessadas em SEO
- leitores interessados em tecnologia empresarial
- pessoas buscando modernização operacional
- interessados em automação
- leitores buscando crescimento regional
- empresários buscando presença digital

SEO:
- Pesquise 5 palavras-chave principais relacionadas ao tema.
- Inserir naturalmente SEO semântico.
- Misturar:
  - buscas informacionais
  - buscas emocionais
  - buscas de curiosidade
  - buscas comportamentais
  - tendências de mercado
- Identificar 5 dores/problemas com alto volume de busca.
- Criar subtítulos ricos em SEO.
- Inserir termos relacionados naturalmente.
- Evitar keyword stuffing.
- Trabalhar intenção de busca de forma fluida.

RESUMO DIRETO:
IMPORTANTE:
- A seção "Resumo Direto" deve ficar SOMENTE no final do artigo.
- O resumo deve conter APENAS um pequeno texto editorial resumindo a publicação.
- NÃO colocar palavras-chave misturadas dentro do texto do resumo.
- NÃO escrever:
  "Palavras-chave principais:"
  dentdo do resumo.
- O resumo deve parecer um mini resumo jornalístico/editorial.

ESTRUTURA OBRIGATÓRIA:
1. Primeiro:
- título "Resumo Direto"
- pequeno resumo sozinho

2. Somente ABAIXO do resumo:
- criar uma área separada visualmente contendo:
  - SEO Keywords:
  - palavra 1
  - palavra 2
  - palavra 3
  - palavra 4
  - palavra 5

- As keywords devem ficar separadas do texto.
- As keywords NÃO podem ficar dentro do parágrafo do resumo.
- As keywords devem aparecer visualmente separadas.

TÍTULO (H1):
- Font-size obrigatoriamente 22px
- Gerar SEMPRE um título diferente.
- Nunca repetir padrões.
- Estilo editorial/jornalístico.
- Não usar tom publicitário.
- Criar curiosidade.
- Parecer matéria investigativa.
- Focar em:
  - sinais silenciosos
  - erros modernos
  - comportamento digital
  - transformação operacional
  - mudanças de mercado
  - tendências tecnológicas
  - descobertas digitais
  - o que poucos perceberam
  - mudanças no comportamento dos consumidores

ESTRUTURA DO CONTEÚDO:
- Introdução forte.
- Linguagem humanizada.
- Estilo editorial.
- Criar leitura fluida.
- Dividir corretamente em:
  - H2
  - H3
- Inserir blocks ricos em SEO.
- Explicar:
  - problemas
  - causas
  - impactos
  - tendências
  - comportamento do mercado
  - mudanças digitais
  - possíveis soluções
- Inserir storytelling leve.
- Inserir prevenção de mercado.
- Criar sensação de descoberta.
- Mostrar mudanças silenciosas do setor.
- Trabalhar profundidade sem ficar técnico demais.
- Parágrafos obrigatoriamente com:
  text-align: justify;

BACKLINKS:
- Inserir 5 backlinks reais e funcionais.
- Links obrigatoriamente brasileiros.
- Links obrigatoriamente em português.
- Inserir naturalmente dentro do contexto.
- NÃO inserir links quebrados.
- Priorizar:
  - Sebrae
  - Exame
  - G1 Tecnologia
  - Rock Content
  - Think With Google Brasil
  - Tecnoblog
  - Pequenas Empresas Grandes Negócios
  - E-commerce Brasil
  - Resultados Digitais
  - Meio & Mensagem

INSERÇÕES ESTRATÉGICAS:
Durante o artigo inserir naturalmente contextos relacionados ao nicho escolhido:
- SEO local
- dashboards
- automação
- CRM
- ERP
- BI
- aplicativos
- SaaS
- integração de sistemas
- performance web
- otimização operacional
- gestão digital
- automação comercial
- plataformas digitais
- funis digitais
- experiência do consumidor
- análise de dados
- presença digital
- transformação operacional
SEM parecer oferta direta.

REGRA RESTRITA DE RECONHECIMENTO DE IMAGENS:
Você NÃO deve tentar escrever tags HTML <img> estruturadas com links externos ou locais. Em vez disso, coloque estritamente as strings de marcação abaixo isoladas entre parágrafos (nunca dentro de tags de texto p, h2 ou h3):

- No topo do artigo coloque estritamente o texto: IMAGE_PLACEHOLDER_1
- No meio do artigo coloque estritamente o texto: IMAGE_PLACEHOLDER_2
- No final do artigo coloque estritamente o texto: IMAGE_PLACEHOLDER_3

CSS DO LAYOUT:
- Visual clean, moderno, estilo portal premium, responsivo.
- border-radius: 12px
- IMPORTANTE: As imagens do artigo devem seguir o fluxo normal do texto. NUNCA utilize "position: absolute", "position: fixed" ou propriedades de "float" que possam causar sobreposição de elementos textuais com as mídias. Todo conteúdo deve respeitar as quebras de linha naturais (block layout).

TAMANHO:
- Mínimo 900 palavras.

FAQ:
Criar FAQ com 5 perguntas e respostas relacionadas ao tema e nicho escolhido, sem drop de apertar.

ENTREGA:
- Gerar código HTML COMPLETO.
- Pronto para postagem.
- Com CSS incorporado.
- Não explicar o código.
- Não resumir.
- Entregar apenas o HTML final.
      
Você DEVE responder UNICAMENTE com um objeto JSON válido. Não inclua nenhuma introdução ou texto explicativo fora do JSON.
O JSON deve conter exatamente estas 3 chaves string:
{
  "title": "Título chamativo focado em SEO",
  "excerpt": "Resumo curto e magnético para o card",
  "html_content": "Conteúdo completo formatado em HTML puro contendo explicitamente as strings IMAGE_PLACEHOLDER_1, IMAGE_PLACEHOLDER_2 e IMAGE_PLACEHOLDER_3 isoladas em parágrafos próprios para evitar quebra de layout."
}
    `;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}&alt=json`;

    const geminiRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    if (!geminiRes.ok) {
      const text = await geminiRes.text();
      console.error('Gemini API error', geminiRes.status, text);
      throw new Error(`Gemini API returned ${geminiRes.status}: ${text}`);
    }

    const geminiData = await geminiRes.json().catch((err) => {
      console.error('Failed to parse Gemini JSON', err);
      throw new Error('Invalid JSON from Gemini API');
    });

    let contentText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!contentText) {
      console.error('Unexpected Gemini response shape', JSON.stringify(geminiData));
      throw new Error('Gemini response missing content');
    }

    contentText = contentText.trim();
    if (contentText.includes("```")) {
      const match = contentText.match(/```json\s*([\s\S]*?)\s*```/i) || contentText.match(/```\s*([\s\S]*?)\s*```/i);
      if (match && match[1]) {
        contentText = match[1].trim();
      }
    }

    let parsed;
    try {
      parsed = JSON.parse(contentText);
    } catch (err) {
      console.error('Failed to parse contentText as JSON. Raw text:', contentText);
      throw new Error('Gemini returned invalid JSON content structure');
    }

    const { title, excerpt, html_content } = parsed;

    if (!title || typeof title !== 'string') throw new Error('Generated content missing title');
    if (!html_content || typeof html_content !== 'string') throw new Error('Generated content missing html_content');

    let finalHtml = html_content;
    const imageIds = [
      "photo-1517245386807-bb43f82c33c4", 
      "photo-1563986768609-322da13575f3"
    ];

    // ATUALIZAÇÃO: Injeta o link estático renderizável do Google Drive na primeira posição
    for (let i = 1; i <= 3; i++) {
      let currentSrc = "";
      if (i === 1) {
        currentSrc = "[https://lh3.googleusercontent.com/d/1mppVczp7n3FijFebMml5Inl3PnFdHHkC](https://lh3.googleusercontent.com/d/1mppVczp7n3FijFebMml5Inl3PnFdHHkC)";
      } else {
        currentSrc = `https://images.unsplash.com/${imageIds[i - 2]}?q=80&w=1200&auto=format&fit=crop`;
      }

      const validImageUrl = `
        <div style="display: block; clear: both; width: 100%; margin: 30px 0; position: relative; float: none;">
          <img src="${currentSrc}" alt="Visual Editorial Premium" style="width: 100%; max-width: 100%; height: auto; display: block; border-radius: 12px;" />
        </div>
      `;
      
      if (finalHtml.includes(`IMAGE_PLACEHOLDER_${i}`)) {
        finalHtml = finalHtml.replaceAll(`IMAGE_PLACEHOLDER_${i}`, validImageUrl);
      }
    }

    // REGEX DE LIMPEZA CONTRA SOBREPOSIÇÃO ATUALIZADO
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    let imgCounter = 0;
    
    finalHtml = finalHtml.replace(imgRegex, (match, src) => {
      if (src.includes("1mppVczp7n3FijFebMml5Inl3PnFdHHkC") || src.includes("photo-1517245386") || src.includes("photo-1563986768")) {
        return match;
      }
      if (imgCounter < 3) {
        let currentSrc = "";
        if (imgCounter === 0) {
          currentSrc = "[https://lh3.googleusercontent.com/d/1mppVczp7n3FijFebMml5Inl3PnFdHHkC](https://lh3.googleusercontent.com/d/1mppVczp7n3FijFebMml5Inl3PnFdHHkC)";
        } else {
          currentSrc = `https://images.unsplash.com/${imageIds[imgCounter - 1]}?q=80&w=1200&auto=format&fit=crop`;
        }
        imgCounter++;
        return `
          <div style="display: block; clear: both; width: 100%; margin: 30px 0; position: relative; float: none;">
            <img src="${currentSrc}" alt="Visual Editorial Premium" style="width: 100%; max-width: 100%; height: auto; display: block; border-radius: 12px;" />
          </div>
        `;
      }
      return "";
    });

    const slug = title.toLowerCase().trim()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    let insertSlug = slug;
    let insertResult;
    
    for (let attempt = 0; attempt < 2; attempt++) {
      const { data, error } = await supabase.from('blog_posts').insert({
        title,
        slug: insertSlug,
        excerpt: excerpt || '',
        html_content: finalHtml,
        published: true
      }).select();

      if (error) {
        console.error('Supabase insert attempt', attempt, 'error', error);
        if (error?.code === '23505' && attempt === 0) {
          insertSlug = `${slug}-${Math.random().toString(36).slice(2, 7)}`;
          continue;
        }
        throw error;
      }

      insertResult = data;
      break;
    }

    return new Response(JSON.stringify({ success: true, post: insertResult?.[0] }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Function error', error);
    const message = error?.message ?? String(error);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});