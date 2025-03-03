import Link from "next/link";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <>
        <div className="py-2 rounded-sm bg-primary-700 w-full lg:w-fit">
            <div className="relative h-full flex-1 flex-row items-center justify-center text-sm select-none flex">
                <div className="group relative flex h-full flex-row items-center justify-center text-sm focus:outline-0">
                    <Link className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400 undefined" href="/colorways">Home</Link>
                    <div className="pointer-events-none -mx-px h-4 w-px transition-all duration-200 select-none bg-primary-600" />
                </div>
                <div className="group relative flex h-full flex-row items-center justify-center text-sm focus:outline-0">
                    <Link className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400 undefined" href="/colorways/discord">Discord Colorways</Link>
                    <div className="pointer-events-none -mx-px h-4 w-px transition-all duration-200 select-none bg-primary-600" />
                </div>
                <div className="group relative flex h-full flex-row items-center justify-center text-sm focus:outline-0">
                    <Link className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400 undefined" href="/colorways/manager">Colorish</Link>
                    <div className="pointer-events-none -mx-px h-4 w-px transition-all duration-200 select-none bg-primary-600" />
                </div>
                <div className="group relative flex h-full flex-row items-center justify-center text-sm focus:outline-0">
                    <Link className="relative z-10 grid h-full place-content-center px-6 transition duration-100 focus:outline-none focus-visible:ring focus-visible:ring-cream-400 undefined" href="/colorways/submit">Submit Colorways & Sources</Link>
                </div>
            </div>
        </div>
        {children}
    </>
}