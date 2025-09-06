import profile_img from "@/assets/images/profile/profile.png"
export default function Profile() {
    return (
        <div className="bg-[#FFFDFD] flex flex-col 
                        w-[900px] 
                        py-12 px-24 rounded-2xl shadow-lg">
            <div className="flex flex-row">
                <div className="mr-8 flex flex-col">
                    <img src={profile_img} alt="Profile" 
                    className="w-32 h-32 rounded-full mx-auto object-cover" />
                    <button className="
                    flex justify-center bg-[#EFEFEF] text-base my-4 py-2 px-4 rounded-xl font-semibold">
                    프로필 사진 변경
                </button>
                </div>
                <div className="my-2">
                    <div className="flex flex-row items-center mt-4 space-y-2">
                        <p className="text-2xl font-bold text-black mr-4">
                            김혜림
                        </p>
                        <button className="bg-[#EFEFEF] text-base py-2 px-4 rounded-xl font-semibold">
                            닉네임 변경
                        </button>
                    </div>
                    <p className="text-lg text-gray-600">
                        alswowotjdfla@naver.com
                    </p>
                </div>
                
            </div>


            <div className="mx-12 my-4"> 
                <div className="m-4 flex flex-col w-full max-w-full ">
                    <div className="py-2 text-xl">기본 보안 설정</div>
                    <hr className="border-black" />
                    <div className="p-2">비밀번호 변경</div>
                    <hr className="border-gray-300" />
                    <div className="p-2">패스키 관리</div>
                    <hr className="border-gray-300" />
                    <div className="p-2">2단계 인증</div>
                </div>
                <div className="m-4 flex flex-col w-full max-w-full ">
                    <div className="py-2 text-xl">새기기 로그인 알람</div>
                    <hr className="border-black" />
                    <div className="p-2">로그인 알람</div>
                    <hr className="border-gray-300" />
                    <div className="p-2">로그인 알람 제외 목록</div>
                </div>
                <div className="m-4 flex flex-col w-full max-w-full ">
                    <div className="py-2 text-xl">로그인 차단 설정</div>
                    <hr className="border-black" />
                    <div className="p-2">타지역 로그인 차단 설정</div>
                    <hr className="border-gray-300" />
                    <div className="p-2">해외 로그인 차단 설정</div>
                </div>
            </div>

        </div>
    );
}