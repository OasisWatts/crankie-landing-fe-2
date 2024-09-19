/** minwoo */
export default function Footer() {
    return (
      <footer className="bg-white text-black py-6">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="flex justify-between items-start">

            <div className="space-y-2">
              <p>상호명 (주)크랭이 대표이사 : 양성모 박재연 이현호</p>
              <p>개인정보책임자 : 차규리 육민정 구철회</p>
              <p>사업자등록번호 : 000-00-00000</p>
              <p>통신판매업신고번호 : 제 2024-서울동대문-00000</p>
            </div>

            <div className="space-y-2 text-right">
              <p>
                <a href="#" className="underline">
                  이용약관
                </a>{" "}
                |{" "}
                <a href="#" className="underline">
                  개인정보처리방침
                </a>
              </p>
              <p>고객지원 : 전화</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  