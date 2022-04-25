import { Httpx } from 'https://jslib.k6.io/httpx/0.0.1/index.js';

const session = new Httpx();

session.setBaseUrl('http://localhost:5620');

export default function () {
  session.get('/translations/en.json');
  session.get('/api/core/capabilities?useDefaultCapabilities=true');
  session.get('/internal/security/login_state');
}

