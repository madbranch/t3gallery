import Link from "next/link";


const mockUrls = [
  "https://utfs.io/f/KfNkkNQEe10n4cV624Ep8yzjmkTE6HPMvLNSqxuw7Q0GAaVC",
  "https://utfs.io/f/KfNkkNQEe10nuiruApmJoiFkIvBLJAcdMQWYy3OslewV9aq7",
  "https://utfs.io/f/KfNkkNQEe10nY7DDfAP1fENWxYs9h0VrFQIjaTtiBOGUnDcZ",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} />
        </div>
        ))}
      </div>
    </main>
  );
}
