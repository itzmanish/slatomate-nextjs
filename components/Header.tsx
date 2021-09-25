import Link from 'next/link'
export const Header = () => {
    return (
        <div className="w-full px-4 md:mx-auto max-w-screen-xl py-6">
            <div className="flex w-full items-center justify-between">
                <div className="text-3xl font-bold text-gray-100">
                    <Link href="/">
                        Slatomate
                    </Link>
                </div>
                <div className="text-gray-100">
                    <Link href="/login" >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}