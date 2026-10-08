import Link from "next/link";

const NotFound = () => {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-bold">
                    News Not Found
                </h2>

                <p className="mt-2 text-gray-500">
                    দুঃখিত, এই সংবাদটি খুঁজে পাওয়া যায়নি।
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-block rounded-md bg-red-600 px-5 py-2.5 text-white hover:bg-red-700"
                >
                    Go to Home
                </Link>
            </div>
        </main>
    );
};

export default NotFound;