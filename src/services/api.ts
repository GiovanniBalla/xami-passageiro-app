import axios from 'axios';

/**
 * A URL base da sua API.
 * EX.: http://192.168.0.10:3333 (se estiver a testar no seu celular físico)
 * EX.: http://localhost:3333 (se estiver a testar num emulador iOS)
 * EX.: http://10.0.2.2:3333 (se estiver a testar num emulador Android)
 */
const API_BASE_URL = 'http://10.0.2.2:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;