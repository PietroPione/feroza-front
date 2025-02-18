export async function GET(req) {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!accessToken) {
        return new Response(
            JSON.stringify({ error: "Access token is missing" }),
            { status: 400 }
        );
    }

    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            return new Response(
                JSON.stringify({ error: data.error.message }),
                { status: 500 }
            );
        }

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Errore nel recupero dei dati" }),
            { status: 500 }
        );
    }
}
