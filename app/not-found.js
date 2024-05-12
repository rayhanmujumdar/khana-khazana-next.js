import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex justify-center items-center h-screen flex-col space-y-3">
            <h2 className="text-3xl text-red-300">Not Found</h2>
            <p className="text-xl font-semibold">
                Could not find requested resource
            </p>
            <Link
                href="/"
                className="bg-teal-500 px-3 py-2 rounded-md shadow-lg active:bg-[#EB4A36] active:text-white"
            >
                Return Home
            </Link>
        </div>
    );
}
