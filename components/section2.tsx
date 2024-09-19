
/** minwoo */
export default function Section2() {
    return (
      <div
        id="section2" // 네비게이션바 id 지정했습니다.
        className="w-full min-h-screen flex flex-col items-center justify-center bg-white"
      >
        <div className="mb-8 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold text-green-700">
            크랭이 사전 예약 중
          </h1>
        </div>
  
        <div className="w-[80%] max-w-4xl h-[300px] md:h-[500px] bg-[#e7e9d9] rounded-lg flex items-center justify-center">
          <img
            src="/gifs/first_gif.gif" //아직 gif 경로 지정 안함
            alt="크랭이 GIF"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
    );
  }
  


