export function DesignSystemHero() {
  return (
    <div className="relative w-full h-full">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/browser-console-side-by-side.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          {/* Overlay removed */}
        </div>
      </div>
    </div>
  );
} 