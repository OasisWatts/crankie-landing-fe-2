/** J */
export default function Section4() {

    return (
        <div className="bg-[#042F35] w-full h-[60vh] flex flex-col md:flex-row justify-center items-center p-10">
            {/* 왼쪽 섹션 */}
            <div className="left flex-1 flex flex-col justify-center items-center text-center mb-8 md:mb-0 md:pr-4" style={{ flexBasis: "50%" }}>
                <div className="title mb-10">
                    {/* 비효율적인 작업: 상대적으로 작은 글씨 */}
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#C8F169]">
                        비효율적인 작업
                    </h1>
                    {/* STOP: 상대적으로 큰 글씨 */}
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-[#C8F169]">
                        STOP
                    </h1>
                </div>
            </div>
        </div>
    );
}
