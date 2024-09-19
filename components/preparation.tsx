'use client'

import check_img from '@/img/check-img.svg'
import preparation_img1 from '@/img/preparation_img1.svg'
import preparation_img2 from '@/img/preparation_img2.svg'
import preparation_img3 from '@/img/preparation_img3.svg'
import preproduction_img from '@/img/preproduction_img.svg'
import preproduction_color_img from '@/img/preproduction_color_img.svg'
import intro_color_img from '@/img/intro_color_img.svg'
import intro_img from '@/img/intro_img.svg'
import it_color_img from '@/img/it_color_img.svg'
import it_img from '@/img/it_img.svg'
import Image from "next/image"
import { useState, useEffect } from "react";

export default function Preparation({ data }: { data: any }) {
    const [currentExp, setCurrentExp] = useState(1);
    const [progress, setProgress] = useState(0); // Progress 상태 추가
    const expCount = 3;
    const intervalDuration = 3000; // 각 exp가 활성화되는 시간 (3초)

    const getImageForCurrentExp = () => {
        switch (currentExp) {
            case 1:
                return preparation_img1;
            case 2:
                return preparation_img2;
            case 3:
                return preparation_img3;
            default:
                return preparation_img1;
        }
    };

    const resetCurrentExp = (ClickedExp: number) => {
        setProgress(0);
        setCurrentExp(ClickedExp);
    }


    useEffect(() => {
        // progress 바가 부드럽게 채워지도록 하는 효과
        const progressInterval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    return 100;
                }
                return prevProgress + (100 / (intervalDuration / 16.7)); // ~16.7ms 마다 업데이트 (60fps)
            });
        }, 16.7);

        return () => clearInterval(progressInterval);
    }, []);

    useEffect(() => {
        // 각 exp가 3초 후에 변경되도록 설정
        const interval = setInterval(() => {
            setCurrentExp((prevExp) => {
                setProgress(0); // 다음 exp가 시작될 때 progress를 초기화
                return (prevExp % expCount) + 1;
            });
        }, intervalDuration);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white text-center h-[120vh] w-full flex flex-col hidden sm:block md:block whitespace-nowrap">
            <div className="title h-[30vh] flex flex-col mt-10 mb-5">
                <div className="title-top flex-1 flex flex-col items-center justify-center mt-10">
                    <div className="w-[60px] h-[60px] flex items-center justify-center">
                        <Image unoptimized src={check_img} alt="check icon" width={50} height={50} className='rounded-sm' />
                    </div>
                    <div className="title-bottom text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5 mb-5 text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">{data.title}</h1>
                    </div>
                </div>
            </div>
            <div className="content bg-white h-[70vh] flex flex-col md:flex-row">
                <div className="left flex-1 flex items-center justify-center md:justify-end" style={{ flexBasis: '50%' }}>
                    <div className="image w-[400px] h-[400px] bg-white flex items-center justify-center md:mr-10">
                        <Image unoptimized src={getImageForCurrentExp()} alt={`Preparation Image ${currentExp}`} width={638} height={526} />
                    </div>
                </div>
                {/* 설명란 */}
                <div className="right flex-1 flex flex-col justify-center mb-10 mt-10" style={{ flexBasis: '50%' }}>
                    <div className="exp1 flex flex-row mb-20">
                        <div className="pBar w-1 overflow-hidden rounded-md mr-2" style={{
                            height: '100%',
                            background: `linear-gradient(to bottom, #2237C6 ${currentExp === 3 ? progress : 0}%, transparent ${currentExp === 3 ? progress : 0}%)`,
                            transition: 'background 0.1s linear',
                            borderRadius: '0 0 50px 50px'
                        }}></div>
                        <div className="flex-1 w-[450px] h-[80px] items-center justify-start rounded-sm" onClick={() => { resetCurrentExp(3) }} style={{ cursor: "pointer" }}>
                            {
                                currentExp === 3 ?
                                    (<Image unoptimized src={it_color_img} alt='exp1' width={450} height={80} />) :
                                    (<Image unoptimized src={it_img} alt='exp1' width={450} height={80} />)
                            }
                        </div>
                    </div>
                    <div className="exp1 flex flex-row mb-20">
                        <div className="pBar w-1 overflow-hidden rounded-xl mr-2" style={{
                            height: '100%',
                            background: `linear-gradient(to bottom, #2237C6 ${currentExp === 1 ? progress : 0}%, transparent ${currentExp === 1 ? progress : 0}%)`,
                            transition: 'background 0.1s linear',
                            borderRadius: '0 0 50px 50px'
                        }}></div>

                        <div className="flex-1 w-[450px] h-[80px] items-center justify-start rounded-sm" onClick={() => { resetCurrentExp(1) }} style={{ cursor: "pointer" }}>
                            {
                                currentExp === 1 ?
                                    (<Image unoptimized src={preproduction_color_img} alt='exp1' width={450} height={80} />) :
                                    (<Image unoptimized src={preproduction_img} alt='exp1' width={450} height={80} />)
                            }
                        </div>

                    </div>
                    <div className="exp1 flex flex-row mb-20">
                        <div className="pBar w-1 overflow-hidden rounded-md mr-2" style={{
                            height: '100%',
                            background: `linear-gradient(to bottom, #2237C6 ${currentExp === 2 ? progress : 0}%, transparent ${currentExp === 2 ? progress : 0}%)`,
                            transition: 'background 0.1s linear',
                            borderRadius: '0 0 50px 50px'
                        }}></div>
                        <div className="flex-1 w-[450px] h-[80px] items-center justify-start rounded-sm" onClick={() => { resetCurrentExp(2) }} style={{ cursor: "pointer" }}>
                            {
                                currentExp === 2 ?
                                    (<Image unoptimized src={intro_color_img} alt='exp1' width={450} height={80} />) :
                                    (<Image unoptimized src={intro_img} alt='exp1' width={450} height={80} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}