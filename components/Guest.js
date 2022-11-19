import Link from "next/link";

export default function Guest(){
    return (
        <div className="mx-4 md:w-6/12 bg-white h-screen">
            <div className="flex justify-center">
                <div className="space-y-2">
                    <p className="text-2xl font-bold">Guest Homepage</p>
                    <p className="">You are not authorized user.</p>
                </div>
            </div>
            <div className="flex justify-center mt-2">
            <Link href="/user/signin"><a className="px-6 py-1 bg-green-500 text-white rounded">Sign in</a></Link>
            </div>
            
        </div>
    )
}