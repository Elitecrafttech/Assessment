import Skeleton from "@/app/components/Skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  );
}