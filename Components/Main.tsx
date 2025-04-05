const Main = () => {
  return (
    <div className="relative h-[60vh] ">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute  opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div>
          <h1 className="text-3xl  font-bold text-white mb-6">띵킹캣</h1>
          <p className="text-lg text-gray-200 mb-8">
            혁신적인 앱 개발과 프로그램 개발을 전문으로 하는 기업입니다.
          </p>
          <div
            // transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
            >
              문의하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
