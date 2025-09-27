export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send('https://accountscenter.instagram.com/password_and_security/two_factor/?theme=dark');
}
