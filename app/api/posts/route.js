//POST /api/posts

export async function POST(request) {
    const { title, content } = await request.json();
    const post = { title, content };
    return Response.json(post);
}

