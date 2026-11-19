// Script de desenvolvimento: faz login no Supabase Auth com o usuário de teste
// e mostra o token de acesso, para testar endpoints protegidos.
// Faz o mesmo que o app vai fazer na tela de login.

const {
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY,
    TEST_USER_EMAIL,
    TEST_USER_PASSWORD,
} = process.env;

// Login com e-mail e senha na API de autenticação do Supabase
const response = await fetch(
    `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
    {
        method: 'POST',
        headers: {
            apikey: SUPABASE_PUBLISHABLE_KEY, // chave pública, a mesma que vai no app
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: TEST_USER_EMAIL, password: TEST_USER_PASSWORD }),
    },
);

const data = await response.json();

if (!response.ok) {
    console.error('Erro no login:', data);
    process.exit(1);
}

console.log(data.access_token);