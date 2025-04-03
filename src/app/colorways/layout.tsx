import { Link } from "next-view-transitions";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <>
        <div className="py-2 rounded-xl bg-primary-900/70 backdrop-blur-md border border-primary-400/20 w-full lg:w-fit">
            <div className="relative h-full flex-1 flex-row items-center justify-center text-sm select-none flex">
                <div className="group relative flex h-full flex-row items-center justify-center text-sm focus:outline-0">
                    <Link className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400 undefined" href="/colorways">Home</Link>
                    <div className="pointer-events-none -mx-px h-4 w-px transition-all duration-200 select-none bg-primary-400/20" />
                </div>
                <div className="group relative flex h-full flex-row items-center justify-center text-sm focus:outline-0">
                    <Link className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400 undefined" href="/colorways/discord">Discord Colorways</Link>
                    <div className="pointer-events-none -mx-px h-4 w-px transition-all duration-200 select-none bg-primary-400/20" />
                </div>
                <div className="group relative flex h-full flex-row items-center justify-center text-sm focus:outline-0">
                    <Link className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400 undefined" href="/colorways/manager">Colorish</Link>
                    <div className="pointer-events-none -mx-px h-4 w-px transition-all duration-200 select-none bg-primary-400/20" />
                </div>
                <div className="group relative flex h-full flex-row items-center justify-center text-sm focus:outline-0">
                    <Link className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400 undefined" href="/colorways/submit">Submit Colorways & Sources</Link>
                    <div className="pointer-events-none -mx-px h-4 w-px transition-all duration-200 select-none bg-primary-400/20" />
                </div>
                <div className="group relative flex h-full flex-row items-center justify-center text-sm focus:outline-0">
                    <Link className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400 undefined" href="/colorways/generator">Colorway Generator</Link>
                </div>
            </div>
        </div>
        {children}
    </>
}