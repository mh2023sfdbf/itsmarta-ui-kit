export default function PulsingLogo() {
  return (
    <section className="bg-orange-50 min-h-screen flex flex-col">
      {/* Pulsing Logo Section */}
      <div className="flex-grow flex items-center justify-center">
        <div className="relative flex items-center justify-center h-screen">
          {/* Pulsing Logo */}
          <img 
            src="https://static.shuffle.dev/uploads/files/d7/d7df99fc217df779b1e41eff073e1d86cb036295/clamalo.svg" 
            alt="MoodBoardly Logo" 
            className="animate-pulse w-44"
          />
        </div>
      </div>
    </section>
  );
}

