import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useWindowWidth } from './js/userwindow';
import DefaultPage from './js/default_page/default_page';
import FarmIntroductionPage from './js/farm_introduction_page/farm_introduction_page';
import ServiceIntroductionPage from './js/service_introduction_page/service_introduction_page';
import BlogPage from './js/blog_page/blog_page';
import RecruitPage from './js/recruit_page/recruit_page';
import IR from './js/IR/IR'
import Room821_logo from './assets/Room821_logo.png';

Amplify.configure(awsExports);

function App() {
  const width = useWindowWidth();
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // 이벤트 리스너를 추가합니다.
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const linkStyle = (path) => {
    if (path === '/IR') {
      return {
        fontSize: 16,
        fontFamily: 'Pretendard',
        fontWeight: '600',
        wordWrap: 'break-word',
        textDecoration: 'none', // 밑줄 제거
        color: currentPath === path ? '#5499FF' : '#252525',
      };
    } else {
      return {
        width: 120,
        height: 80,
        right: path === '/company' ? (464 / 1440) * width
          : path === '/service' ? (344 / 1440) * width
            : path === '/blog' ? (224 / 1440) * width
              : (104 / 1440) * width, // /recruit와 다른 경로에 대한 위치 설정
        top: 0,
        position: 'absolute',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
        color: currentPath === path ? '#5499FF' : '#252525', // 현재 경로가 일치할 때 색상 변경
        fontSize: 16,
        fontFamily: 'Pretendard',
        fontWeight: '600',
        wordWrap: 'break-word',
      };
    }
  };

  return (
    <Router>
      <div className="App" style={{ width: width, height: '105%' }}>
        <header>
          <nav style={{ width: '100%', height: 80, background: '#F5F5F5', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
            <Link to="/" style={{ width: 100, height: 80, left: (104 / 1440) * width, top: 0, position: 'absolute' }} onClick={() => setCurrentPath('/')}>
              <img src={Room821_logo} alt='Room821 로고' style={{ width: 100, height: 16.50, left: 0, top: 31.75, position: 'absolute' }} />
            </Link>
            <Link to="/company" style={linkStyle('/company')} onClick={() => setCurrentPath('/company')}>
              <div>회사소개</div>
            </Link>
            <Link to="/service" style={linkStyle('/service')} onClick={() => setCurrentPath('/service')}>
              <div>서비스</div>
            </Link>
            <Link to="/blog" style={linkStyle('/blog')} onClick={() => setCurrentPath('/blog')}>
              <div>블로그</div>
            </Link>
            <Link to="/recruit" style={linkStyle('/recruit')} onClick={() => setCurrentPath('/recruit')}>
              <div>채용</div>
            </Link>
          </nav>
        </header>

        {/* 페이지 라우트 설정 */}
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/company" element={<FarmIntroductionPage />} />
          <Route path="/service" element={<ServiceIntroductionPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/recruit" element={<RecruitPage />} />
          <Route path="/IR" element={<IR />} />
        </Routes>
        {/* 페이지 footer */}
        <div className="Fnb" style={{ width: '100%', height: '100%', position: 'relative', background: '#f5f5f5' }}>
          <div className="Frame25" style={{ left: 104, top: 64, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 96, display: 'inline-flex' }}>
            <div style={{ color: '#252525', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>개인정보처리방침</div>
            <Link to="/IR" onClick={() => setCurrentPath('/IR')} style={linkStyle('/IR')}>
              <div>IR</div>
            </Link>
            <div className="Pr" style={{ color: '#252525', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>PR</div>
          </div>
          <div className="261204" style={{ left: 104, top: 131, position: 'absolute', color: '#A5A5A5', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>주소 : 서울 서대문구 연세로2나길 61 204호 </div>
          <div className="2588702954" style={{ left: 104, top: 166, position: 'absolute' }}>
            <span style={{ color: '#A5A5A5', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>사업자 등록 번호: </span>
            <span style={{ color: '#A5A5A5', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>258-87-02954</span>
          </div>
          <div style={{ left: 351, top: 166, position: 'absolute', color: '#A5A5A5', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>대표 : 강정석</div>
          <div className="Room821" style={{ left: 104, top: 201, position: 'absolute', color: '#A5A5A5', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>© Room 821</div>
        </div>
      </div>
    </Router>
  );
}

export default App;