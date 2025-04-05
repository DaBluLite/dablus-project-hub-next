import { auth } from "@/auth"
import { NextRequest, NextResponse } from "next/server"

export function POST(req: NextRequest, ctx: never) {
    return auth(async function POST(req) {
        return await req.json().then((json: {
            redirect_url?: string
        } | null) => {
            if(json && json.redirect_url) {
                if (req.auth && req.auth.user) {
                    fetch(json.redirect_url, {
                        body: JSON.stringify({ username: req.auth.user.name, image: req.auth.user.image, status: 200 }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                        method: "POST"
                    })
                    return NextResponse.json(req.auth)
                } else {
                    fetch(json.redirect_url, {
                        body: JSON.stringify({ username: "", image: "", status: 401 }),
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
        }).catch(() => {
            return NextResponse.json({ message: "Invalid request body" }, { status: 401 });
        })
    })(req, ctx)
}