export const config = { matcher: '/(.*)', };

export default function middleware(req) {
  const auth = req.headers.get('authorization');
  if (auth) {
    const [type, credentials] = auth.split(' ');
    if (type === 'Basic') {
      const password = atob(credentials).split(':')[1];
      if (password === 'nimeshpatel') return;
    }
  }
  return new Response('Unauthorized', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Commerce Amplified"' },
  });
}
