import { Product } from "@/utils/types";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const body: Product = await request.json();
  const token = cookies().get("session")?.value;
  console.log("hello               dooohohihhhhhhhhhhhhhhhhhh");

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      return new Response("", { status: res.status });
    })
    .catch((error) =>
      NextResponse.json({
        error,
      })
    );

  return data;
};
export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  let data: any;
  const token = request.headers;
  console.log("hello               dooohohihhhhhhhhhhhhhhhhhh");
  console.log(token);
  try {
    if (category == null) {
      data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((data) => {
        return data.json();
      });
    } else {
      data = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?slug=${category}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((data) => {
        return data.json();
      });
    }

    return Response.json(data);
  } catch (error) {
    NextResponse.json({
      error,
    });
  }
};
