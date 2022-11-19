import Link from "next/link";

export default function User({session,handleSignout}){
    return (
        <div className="mx-4 md:w-6/12 bg-white h-screen">
            <div className="flex justify-center">
                <div className="space-y-2">
                    <p className="text-2xl font-bold text-center">Homepage</p>
                    <p className=" text-center">You are authorized user.</p>
                    <p className=" text-center">{session?.user?.name}</p>
                    <p className=" text-center">{session?.user?.email}</p>
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <button onClick={()=>handleSignout()} className="px-6 py-1 bg-red-500 text-white rounded">Sign out</button>
            </div>
            
        </div>
    )
}
