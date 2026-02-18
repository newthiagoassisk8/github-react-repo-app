export const loginRequest = async (username: string, password: string) => {
    const response = await fetch('http://192.168.0.27:7000/auth/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }
    const data = await response.json();

    return data;
};
