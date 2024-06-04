import { NextResponse } from "next/server";
type Params = {
  id: number;
};

export const GET = async (request: Request, context: { params: Params }) => {
  const id = context.params.id;
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((data) => {
      return data.json();
    });
    return Response.json(data);
  } catch (error) {
    NextResponse.json({
      error,
    });
  }
};
