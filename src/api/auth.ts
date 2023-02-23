import { getCsrfToken } from 'next-auth/react';

export async function getToken() {
    const csrfToken = await getCsrfToken();
    console.log(csrfToken);
}
