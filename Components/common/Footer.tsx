import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-50 mb-4">회사 정보</h3>
            <p className="mb-2">대표: 김민혁</p>
            <p className="mb-2">이메일: contact@thinkingcatworks.com</p>
            <p className="mb-2">사업자등록번호: 123-45-67890</p>
            <p>주소: 서울특별시 강남구</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-50 mb-4">프로젝트</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects/godsaeng"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  소셜 네트워크 플랫폼
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/pium"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  식물 쇼핑몰 및 커뮤니티
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/zootop"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  동물원 관리 시스템
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-50 mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  소개
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  문의
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} THINKINGCAT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
