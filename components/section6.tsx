
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// 박스 아이콘 경로
import box1Icon from '@/img/AI-scence-break.png';
import box2Icon from '@/img/AI-location-icon.png';
import box3Icon from '@/img/castin-short-icon.png';

export default function Section2() {
  const [currentBox, setCurrentBox] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const totalBoxes = 3;
  const intervalDuration = 3000;

  const handleBoxClick = (boxNumber: number) => {
    setCurrentBox(boxNumber);
    setProgress(0); // 클릭 시 진행 상태 초기화
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBox((prevBox) => (prevBox % totalBoxes) + 1); // 다음 박스로 이동
      setProgress(0); // 진행 상태 초기화
    }, intervalDuration);

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 타이머 정리
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) =>
        Math.min(prevProgress + 100 / (intervalDuration / 16.7), 100)
      ); // 60fps로 애니메이션 업데이트
    }, 16.7);

    return () => clearInterval(progressInterval); // 컴포넌트가 언마운트될 때 타이머 정리
  }, [currentBox]);

  // 아이콘 색상 채우기 애니메이션 (위에서 아래로)
  const getBoxIconStyle = (boxNumber: number) => {
    if (currentBox === boxNumber) {
      return {
        WebkitMaskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1) ${progress}%, rgba(0, 0, 0, 0) ${progress}%)`,
        maskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1) ${progress}%, rgba(0, 0, 0, 0) ${progress}%)`,
        filter: 'grayscale(0)', // 선택된 박스는 원래 색상
        transition: 'mask-image 0.3s linear',
      };
    }
    return { filter: 'grayscale(100%)' }; // 회색 처리
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="mb-6 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black-100">
          최신 기술을 활용한 <br />
          새로운 제작 과정을 경험하세요.
        </h1>
      </div>

      <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-20">
        {/* 작은 박스들 */}
        <div className="flex sm:flex-col justify-between items-center sm:h-[400px] md:h-[500px] lg:h-[600px] gap-4 sm:gap-6">
          {[1, 2, 3].map((boxNumber) => (
            <div
              key={boxNumber}
              className={`relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-[160px] lg:w-[160px] bg-white rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer`}
              onClick={() => handleBoxClick(boxNumber)}
            >
              {/* 아이콘 애니메이션 (위에서 아래로 색 채워짐) */}
              <div
                className="absolute inset-0 rounded-lg"
                style={getBoxIconStyle(boxNumber)}
              >
                <Image
                  unoptimized
                  src={
                    boxNumber === 1
                      ? box1Icon
                      : boxNumber === 2
                      ? box2Icon
                      : box3Icon
                  }
                  alt={`박스 ${boxNumber} 아이콘`}
                  width={180}
                  height={180}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* 큰 박스 */}
        <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] border border-[#e7e9d9] bg-[#f4f5f0] rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out overflow-hidden">
          <Image
            unoptimized
            src={
              currentBox === 1
                ? box1Icon
                : currentBox === 2
                ? box2Icon
                : box3Icon
            }
            alt="큰 박스 아이콘"
            width={600}
            height={600}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}




// // 그냥 유지하면서 시간 흐르는
// 'use client';
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// // 박스 아이콘 경로
// import box1Icon from '@/img/AI-scence-break.png';
// import box2Icon from '@/img/AI-location-icon.png';
// import box3Icon from '@/img/castin-short-icon.png';

// export default function Section2() {
//   const [currentBox, setCurrentBox] = useState<number>(1);
//   const [progress, setProgress] = useState<number>(0);
//   const totalBoxes = 3;
//   const intervalDuration = 3000;

//   const handleBoxClick = (boxNumber: number) => {
//     setCurrentBox(boxNumber);
//     setProgress(0); // 클릭 시 진행 상태 초기화
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBox((prevBox) => (prevBox % totalBoxes) + 1); // 다음 박스로 이동
//       setProgress(0); // 진행 상태 초기화
//     }, intervalDuration);

//     return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 타이머 정리
//   }, []);

//   useEffect(() => {
//     const progressInterval = setInterval(() => {
//       setProgress((prevProgress) =>
//         Math.min(prevProgress + 100 / (intervalDuration / 16.7), 100)
//       ); // 60fps로 애니메이션 업데이트
//     }, 16.7);

//     return () => clearInterval(progressInterval); // 컴포넌트가 언마운트될 때 타이머 정리
//   }, [currentBox]);

//   // 아이콘에 색상을 위에서 아래로 채워지는 스타일
//   const getBoxIconStyle = (boxNumber: number) => {
//     if (currentBox === boxNumber) {
//       return {
//         background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) ${progress}%, rgba(0, 0, 0, 1) ${progress}%)`,
//         filter: 'grayscale(0)', // 선택된 아이콘은 색상 표시
//         transition: 'background 0.3s linear, filter 0.3s linear',
//       };
//     }
//     return { filter: 'grayscale(100%)' }; // 선택되지 않은 아이콘은 회색으로 유지
//   };

//   return (
//     <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white p-4">
//       <div className="mb-6 text-center">
//         <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black-100">
//           최신 기술을 활용한 <br />
//           새로운 제작 과정을 경험하세요.
//         </h1>
//       </div>

//       <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-20">
//         {/* 작은 박스들 */}
//         <div className="flex sm:flex-col justify-between items-center sm:h-[400px] md:h-[500px] lg:h-[600px] gap-4 sm:gap-6">
//           {[1, 2, 3].map((boxNumber) => (
//             <div
//               key={boxNumber}
//               className={`relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-[160px] lg:w-[160px] bg-white rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer`}
//               onClick={() => handleBoxClick(boxNumber)}
//             >
//               {/* 아이콘 애니메이션 (위에서 아래로 색 채워짐) */}
//               <div
//                 className="absolute inset-0 rounded-lg"
//                 style={getBoxIconStyle(boxNumber)}
//               >
//                 <Image
//                   unoptimized
//                   src={
//                     boxNumber === 1
//                       ? box1Icon
//                       : boxNumber === 2
//                       ? box2Icon
//                       : box3Icon
//                   }
//                   alt={`박스 ${boxNumber} 아이콘`}
//                   width={180}
//                   height={180}
//                   className="w-full h-full rounded-lg object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* 큰 박스 */}
//         <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] border border-[#e7e9d9] bg-[#f4f5f0] rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out overflow-hidden">
//           <Image
//             unoptimized
//             src={
//               currentBox === 1
//                 ? box1Icon
//                 : currentBox === 2
//                 ? box2Icon
//                 : box3Icon
//             }
//             alt="큰 박스 아이콘"
//             width={600}
//             height={600}
//             className="max-w-full max-h-full object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
