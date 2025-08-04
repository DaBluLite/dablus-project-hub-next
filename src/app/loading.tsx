import Spinner from "@/components/Spinner";

export default function Loading() {
    return (
        <div className="flex justify-between items-center mt-auto mb-auto max-w-200 w-full mx-auto select-none">
            <div className="flex flex-col gap-4 w-full justify-center">
            <div className="flex items-center"><Spinner className="text-black"/></div>
            </div>
        </div>
    );
}
