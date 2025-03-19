import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 bg-[#2c2635] bg-opacity-95 text-white text-center">
            <div className="mx-auto sm:ml-10">
                <div className="pt-10 pb-10 sm:flex sm:justify-start">
                    <div className="text-base font-bold">띵킹캣</div>
                    <p className="sm:ml-2 text-sm text-gray-300">thinkingcat</p>
                </div>

                <div className="flex sm:flex-col justify-around">

                <div className="flex justify-start">
                <div className="pb-10 flex-col  text-sm text-gray-300 gap-4">
                    <div className="flex sm:flex-col">
                    <div className="flex">
                        <p className="font-bold mr-1">대표</p>
                        <p className="mr-2">왕세윤</p>
                    </div>
                    <div className="flex">
                        <p className="font-bold mr-1">이메일</p>
                        <p className="mr-2">thinkingcatworks@gmail.com</p>
                    </div>
                    </div>
                    <div className="flex sm:flex-col">
                    <div className="flex">
                        <p className="font-bold mr-1">사업자번호</p>
                        <p className="mr-2">826-14-02542</p>
                    </div>
                    <div className="flex">
                        <p className="font-bold mr-1">통신판매업번호</p>
                        <p className="mr-2">2025-서울강남-01112</p>
                    </div>
                    </div>
                    <div className="flex">
                        <div className="flex">
                            <p className="font-bold mr-1">주소</p>
                            <div className="flex sm:flex-col">
                            <p className="mr-1">서울특별시 강남구 개포로15길 3-4,</p>
                            <p className="flex justify-start">지101호 A240호(개포동) </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="flex sm:pb-10">
                    <div className="flex justify-start text-sm ">
                        <div className="gap-1">
                            <div className="flex gap-2">
                            <div className=""><Link href="/#projects" className="text-gray-300 font-bold hover:text-white transition">Projects</Link></div>
                                <div className=""><Link href="/projects/godsaeng" className="text-gray-300 hover:text-white transition">투두게더</Link></div>
                                <div className=""><Link href="/projects/pium" className="text-gray-300 hover:text-white transition">피움뜰</Link></div>
                                <div className=""><Link href="/projects/zootop" className="text-gray-300 hover:text-white transition">동물원관리시스템</Link></div>

                            </div>
                        <div className="sm:flex sm:justify-start"><Link href="/#about" className="text-gray-300 font-bold hover:text-white transition">About</Link></div>
                        <div className="sm:flex sm:justify-start"><Link href="/#contact" className="text-gray-300 font-bold hover:text-white transition">Contact</Link></div>
                    </div>
                    {/* <ul className="flex gap-4">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-xl hover:text-blue-500 transition"><FaFacebook /></a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-xl hover:text-blue-400 transition"><FaTwitter /></a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-xl hover:text-pink-500 transition"><FaInstagram /></a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-xl hover:text-blue-700 transition"><FaLinkedin /></a></li>
                    </ul> */}
                </div>
                </div>
                </div>
            </div>
                <div className="border-t border-gray-700 opacity-50 w-full" />
                <div className="p-4 text-xs text-gray-300">
                    <p>© {new Date().getFullYear()} thinkingcat. All rights reserved.</p>
                    {/*<ul className="mt-1 flex justify-center gap-4">*/}
                    {/*    <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>*/}
                    {/*    <li><Link href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>*/}
                    {/*</ul>*/}
                </div>
        </footer>
    );
};

export default Footer;