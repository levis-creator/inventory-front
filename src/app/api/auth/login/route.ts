import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { email, password } = await request.json();
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
    {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => {
      console.log(res);
      return new Response(res.body, { status: res.status });
    })
    .catch((error) =>
      NextResponse.json({
        error,
      })
    );
  return data;
};
