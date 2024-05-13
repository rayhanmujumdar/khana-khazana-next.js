'use client';
import { useFormStatus } from 'react-dom';
export default function Submit({ children }) {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4 disabled:bg-red-400"
        >
            {pending ? 'Submitting....' : children}
        </button>
    );
}
