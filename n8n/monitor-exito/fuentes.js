// Un item por perfil. «actor» es el actor de Apify que lo lee e «input» su entrada.
// Para vigilar otra marca basta con cambiar los handles aquí.
const n = $('Config').first().json.max_por_perfil;
return [
  { platform: 'facebook',  profile: 'exito',          actor: 'apify~facebook-posts-scraper',
    input: { startUrls: [{ url: 'https://www.facebook.com/exito' }], resultsLimit: n } },
  { platform: 'instagram', profile: 'exito',          actor: 'apify~instagram-post-scraper',
    input: { username: ['exito'], resultsLimit: n } },
  { platform: 'threads',   profile: 'exito',          actor: 'apify~threads-profile-api-scraper',
    input: { usernames: ['exito'], resultsLimit: n } },
  { platform: 'tiktok',    profile: 'almacenesexito', actor: 'clockworks~tiktok-scraper',
    input: { profiles: ['almacenesexito'], resultsPerPage: n + 3, profileSorting: 'latest' } }, // +3: los fijados salen primero
  { platform: 'x',         profile: 'almacenesexito', actor: 'apidojo~twitter-scraper-lite',
    input: { twitterHandles: ['almacenesexito'], maxItems: Math.max(n, 5), sort: 'Latest' } },
  { platform: 'linkedin',  profile: 'grupoexito',     actor: 'apimaestro~linkedin-company-posts',
    input: { company_name: 'grupoexito', limit: n, sort: 'recent' } },
].map((json) => ({ json }));
