import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const nam_hien_tai = new Date().getFullYear();
  const so_nam_da_qua = nam_hien_tai - 1890;

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video với Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="video/HoChiMinh.mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ xem video.
        </video>
        {/* Lớp phủ tối sâu để chữ nổi bật trên màn hình điện thoại */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-black/70" />
      </div>

      {/* Nội dung chính - px-4 giúp không bị tràn viền trên điện thoại nhỏ */}
      <div className="relative z-20 text-center px-4 md:px-6 max-w-5xl select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6 md:mb-8"
        >
          {/* Tối ưu badge trên điện thoại nhỏ gọn hơn (text-2xs đến text-base) */}
          <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-vn-gold/60 text-vn-gold text-[10px] sm:text-xs md:text-base font-vietnam font-bold uppercase tracking-widest bg-vn-red/30 backdrop-blur-md shadow-[0_0_15px_rgba(255,215,0,0.2)]">
            Kỷ niệm {so_nam_da_qua} năm (1890 - {nam_hien_tai})
          </span>
        </motion.div>

        {/* TIÊU ĐỀ: Đã bóc tách kích thước cho điện thoại (text-xl/text-lg) và PC (text-6xl/text-5xl) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl sm:text-3xl md:text-6xl lg:text-7xl font-vietnam font-black text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] uppercase tracking-tight"
        >
          KỶ NIỆM {so_nam_da_qua} NĂM <br />
          
          {/* DÒNG CHỮ VÀNG: Dùng font-sans chuẩn không lỗi chữ HỒ, size chữ thu nhỏ vừa vặn trên màn hình dọc di động */}
          <span className="text-base sm:text-2xl md:text-4xl lg:text-5xl font-sans font-extrabold text-vn-gold text-gold-gradient animate-gold-shimmer block mt-2 md:mt-4 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)] tracking-wide uppercase leading-snug">
            Chủ tịch Hồ Chí Minh <br className="block md:hidden" />
            <span className="text-sm sm:text-2xl md:text-4xl lg:text-5xl">(19/5/1890 – 19/5/2026)</span>
          </span>
        </motion.h2>

        {/* Đoạn thơ trích dẫn: text-sm trên điện thoại để tránh bị vỡ dòng quá ngắn */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 md:mt-10 text-white/90 font-lora text-sm sm:text-lg md:text-2xl italic max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] px-2"
        >
          "Người là niềm tin tất thắng sáng ngời, <br className="hidden md:block" />
          là vì sao lung linh giữa bầu trời Việt Nam."
        </motion.p>

        {/* Nút tìm hiểu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-10 md:mt-14"
        >
          <a
            href="#timeline"
            className="px-6 py-2.5 md:px-10 md:py-4 bg-vn-red hover:bg-red-600 text-white rounded-full font-vietnam font-extrabold text-xs md:text-base tracking-wider uppercase transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(218,37,29,0.6)] flex items-center gap-2 md:gap-3 mx-auto w-fit"
          >
            Tìm hiểu về Bác
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Hiệu ứng mờ dần ở đáy trang */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  );
};

export default Hero;
