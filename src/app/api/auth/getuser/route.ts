import { auth } from "@/auth"
import { NextResponse } from "next/server"

export const POST = auth(async function POST(req) {
    const json: {
        redirect_url?: string
    } | null = await req.json();
    if(json && json.redirect_url) {
        if (req.auth && req.auth.user) {
            fetch(json.redirect_url, {
                body: JSON.stringify({ username: req.auth.user.name, image: req.auth.user.image, status: 200 }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST"
            })
            return NextResponse.json({ username: req.auth.user.name, image: req.auth.user.image,  })
        } else {
            fetch(json.redirect_url, {
                body: JSON.stringify({ message: "Not authenticated", status: 401 }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            })
            return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
        }
    } else {
        return NextResponse.json({ message: "Invalid request body" }, { status: 401 });
    }
})