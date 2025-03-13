import { NextRequest, NextResponse } from "next/server";

const _sources = {
    sources: [
        {
            name: "Project Colorway",
            description: "The official colorway source for Project Colorway apps to get you started",
            id: "project-colorway",
            authorGh: "ProjectColorway",
            url: "https://raw.githubusercontent.com/ProjectColorway/ProjectColorway/master/index.json"
        },
        {
            name: "DaBluLite's Personal Colorways",
            description: "A list of my personal colorways, that's all",
            id: "dablulites-personal-colorways",
            authorGh: "DaBluLite",
            url: "https://raw.githubusercontent.com/DaBluLite/dablulite.github.io/master/colorways/index.json"
        },
        {
            name: "Computer-Made Colorways",
            description: "Custom Colorways made for the Discord Plugin \"DiscordColorways\"",
            id: "computer-made-colorways",
            authorGh: "kingofcube",
            url: "https://raw.githubusercontent.com/kingofcube/computermade-colorways/main/colorways.json"
        }
    ]
}

export async function GET({ nextUrl: { searchParams } }: NextRequest) {
    if(searchParams.get("id") && _sources.sources.find(s => s.id === searchParams.get("id"))) {
        const res = await fetch(_sources.sources.find(s => s.id === searchParams.get("id"))?.url as string);
        const data = await res.json();
        return new NextResponse(JSON.stringify(data["colorways"]), {
            headers: {
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
              }
        });
    } else if(searchParams.get("q")) {
        return new NextResponse(JSON.stringify({ sources: _sources.sources.filter(source => source.name.toLowerCase().includes(searchParams.get("q")?.toLowerCase() as string) || source.description.toLowerCase().includes(searchParams.get("q") as string)) }), {
            headers: {
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
              }
        });
    } else {
        return new NextResponse(JSON.stringify(_sources), {
            headers: {
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
              }
        });
    }
}