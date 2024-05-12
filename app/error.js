'use client';

export default function Error({ error, reset }) {
    return (
        <div className="flex justify-center items-center h-screen flex-col space-y-3">
            <h2 className="text-3xl text-red-300">Something went wrong!</h2>
            <p className="text-xl font-semibold">Error: {error.message}</p>
            <button
                onClick={() => reset()}
                className="bg-teal-500 px-3 py-2 rounded-md shadow-lg active:bg-[#EB4A36] active:text-white"
            >
                Try again
            </button>
        </div>
    );
}
