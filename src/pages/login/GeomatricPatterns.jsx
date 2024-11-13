const GeometricPatterns = () => {
  return (
    <div className="absolute inset-0">
      {/* Large circle */}
      <div className="absolute top-8 left-8 w-32 h-32 bg-white rounded-full shadow" />

      {/* Dot grid pattern */}
      <div className="absolute top-8 left-48 w-[100px] h-16 relative">
        <div className="w-[100px] h-4 pr-3 pb-2 left-0 top-[48px] absolute justify-start items-start gap-2 inline-flex">
          {[...Array(6)].map((_, i) => (
            <div key={`row4-${i}`} className="w-2 h-2 bg-white rounded-full" />
          ))}
        </div>
        <div className="w-[100px] h-4 pr-3 pb-2 left-0 top-[32px] absolute justify-start items-start gap-2 inline-flex">
          {[...Array(6)].map((_, i) => (
            <div key={`row3-${i}`} className="w-2 h-2 bg-white rounded-full" />
          ))}
        </div>
        <div className="w-[100px] h-4 pr-3 pb-2 left-0 top-[16px] absolute justify-start items-start gap-2 inline-flex">
          {[...Array(6)].map((_, i) => (
            <div key={`row2-${i}`} className="w-2 h-2 bg-white rounded-full" />
          ))}
        </div>
        <div className="w-[100px] h-4 pr-3 pb-2 left-0 top-0 absolute justify-start items-start gap-2 inline-flex">
          {[...Array(6)].map((_, i) => (
            <div key={`row1-${i}`} className="w-2 h-2 bg-white rounded-full" />
          ))}
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-48 left-12 w-5 h-5 bg-gradient-to-br from-[#049c64] to-white rounded-full shadow" />
      <div className="absolute top-56 left-24 w-11 h-[130px] bg-gradient-to-t from-white to-white rounded-bl-[30px] rounded-br-[30px]" />
      <div className="absolute top-64 left-40 w-[65px] h-[179px] bg-gradient-to-t from-white to-white rounded-bl-[30px] rounded-br-[30px]" />
      <div className="absolute top-72 right-12 w-[65px] h-32 rounded-bl-[30px] rounded-br-[30px] border-l-2 border-r-2 border-b-2 border-white" />
      <div className="absolute bottom-12 left-16 w-[30px] h-[30px] bg-white rounded-full shadow" />
      <div className="absolute bottom-24 right-24 w-[57px] h-[57px] origin-top-left rotate-[-76.51deg] bg-white rounded-full shadow" />
    </div>
  );
};

export default GeometricPatterns;
