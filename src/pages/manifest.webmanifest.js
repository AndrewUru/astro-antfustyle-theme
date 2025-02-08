export async function GET() {
  const base = import.meta.env.BASE_URL

  const manifest = {
    name: 'Difusores de Aromas',
    short_name: 'DifusorAromas',
    description:
      'Explora el poder de los aromas con nuestros difusores. Relájate, revitalízate y transforma tus espacios con fragancias únicas.',
    icons: [
      { src: `${base}icon-192.png`, type: 'image/png', sizes: '192x192' },
      { src: `${base}icon-512.png`, type: 'image/png', sizes: '512x512' },
      {
        src: `${base}icon-mask.png`,
        type: 'image/png',
        sizes: '512x512',
        purpose: 'maskable',
      },
    ],
    scope: base,
    start_url: base,
    display: 'standalone',
    theme_color: '#A8DADC', // Un tono suave y relajante, como el agua o el aire fresco
    background_color: '#F1FAEE', // Fondo claro que recuerda a la pureza y frescura
  }

  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/manifest+json; charset=utf-8',
    },
  })
}
