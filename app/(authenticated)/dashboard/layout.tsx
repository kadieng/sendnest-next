import '@/app/globals.css'
import '@/styles/style.scss'
import type {Metadata} from 'next'
import SNDashNavigations from "@/components/ui/SNDashNavigations";


export const metadata: Metadata = {
    title: 'SendNest Dashboard',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (

        <>
            <div>

                <SNDashNavigations/>
                <div className="lg:pl-72">
                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8">
                            {children}</div>
                    </main>
                </div>
            </div>
        </>
    )
}
