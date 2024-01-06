import React from 'react';
import { useWindowWidth } from '../userwindow';
import { useNavigate } from 'react-router-dom';
import default_farm_introduction from '../../assets/default_farm_inroduction.png';
import default_image1 from '../../assets/default_image1.png';
import default_image2 from '../../assets/default_image2.png';
import default_image3 from '../../assets/default_image3.png';
import default_mockup from '../../assets/default_mockup.png';
import default_blog from '../../assets/default_blog.png';

function DefaultPage() {
    const width = useWindowWidth();
    const navigate = useNavigate();

    const goToCompany = () => {
        navigate('/company'); // '/company' 경로로 이동
    };

    const goToService = () => {
        navigate('/service'); // '/company' 경로로 이동
    };

    const goToBlog = () => {
        navigate('/blog'); // '/company' 경로로 이동
    };

    const goToRecruit = () => {
        navigate('/recruit'); // '/company' 경로로 이동
    };

    return (
        <div style={{ width: '100%', height: 'auto', position: 'relative', background: '#f5f5f5' }}>
            {/* 회사소개 보러가기 */}
            <div style={{ width: '100%', height: 765, position: 'relative' }}>
                <div style={{ left: (117 / 1440) * width, top: 206, position: 'absolute', color: '#252525', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>모두가 상상하는 것을<br />현실로 만들어요</div>
                <div className="Room821" style={{ width: 471, left: (117 / 1440) * width, top: 374, position: 'absolute' }}>
                    <span style={{ color: '#252525', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>살아가며 느낄 수 있는 </span>
                    <span style={{ color: '#5499FF', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>모든 불편함</span>
                    <span style={{ color: '#252525', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>을 <br />Room 821만의 </span>
                    <span style={{ color: '#5499FF', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>창의적인 솔루션</span>
                    <span style={{ color: '#252525', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>을 통해 해결해요.</span>
                </div>
                <img className="default_farm_introduction" src={default_farm_introduction} alt='default_farm_introduction' style={{ width: 712, height: 'auto', right: (91 / 1440) * width, top: 150, position: 'absolute', borderRadius: 24 }} />
                <div className="Frame13"
                    onClick={goToCompany}
                    style={{ paddingLeft: 36, paddingRight: 36, paddingTop: 12, paddingBottom: 12, left: (117 / 1440) * width, top: 510, position: 'absolute', background: '#252525', borderRadius: 16, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}
                >
                    <div style={{ color: 'white', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>회사소개 보러가기</div>
                </div>
            </div>
            {/* 효율적인 방식 */}
            <div className="Frame38" style={{ width: '100%', height: 710, position: 'relative' }}>
                <div className="Room821" style={{ left: 611, top: 56, position: 'absolute', color: '#252525', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>Room 821이 주목하는</div>
                <div style={{ left: 474, top: 97, position: 'absolute' }}>
                    <span style={{ color: '#252525', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>가장 </span>
                    <span style={{ color: '#5499FF', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>편하고 효율적인</span>
                    <span style={{ color: '#252525', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}> 방식</span>
                </div>
                <div className="MaskGroup" style={{ width: 400, height: 200, left: 104, top: 218, position: 'absolute' }}>
                    <img className="Rectangle4" src={default_image1} alt='default_image1' style={{ width: 400, height: 200, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 24 }} />
                </div>
                <div className="MaskGroup" style={{ width: 400, height: 200, left: 936, top: 218, position: 'absolute' }}>
                    <img className="Rectangle5" src={default_image2} alt='default_image2' style={{ width: 400, height: 200, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 24 }} />
                </div>
                <div className="MaskGroup" style={{ width: 400, height: 200, left: 520, top: 218, position: 'absolute' }}>
                    <img className="Rectangle6" src={default_image3} alt='default_image3' style={{ width: 400, height: 200, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 24 }} />
                </div>
                <div style={{ left: 279, top: 482, position: 'absolute', color: '#252525', fontSize: 36, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>일상, 업무, 여가 등 생활 속 모든 상황에서 겪는 문제에 주목하고<br />사용자가 가장 편하고 효율적으로 생활할 수 있도록 노력해요.</div>
            </div>
            {/* 서비스 보러가기 */}
            <div className="Frame39" style={{ width: '100%', height: 800, position: 'relative' }}>
                <div className="Room821" style={{ left: 104, top: 158, position: 'absolute', color: '#252525', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>Room 821의 첫 프로젝트</div>
                <div className="AiNursync" style={{ left: 104, top: 195, position: 'absolute' }}>
                    <span style={{ color: '#252525', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>간호사의 직접간호시간 최대화를 위한<br />AI기반 간호협업 솔루션, </span>
                    <span style={{ color: '#5499FF', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>NurSync</span>
                </div>
                <div style={{ left: 104, top: 363, position: 'absolute', color: '#252525', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>병동간호사의 간접간호업무를 재분장하여 <br />간호사의 더 나은 삶을 위해 노력해요.</div>
                <div className="Frame14"
                    onClick={goToService}
                    style={{ paddingLeft: 36, paddingRight: 36, paddingTop: 12, paddingBottom: 12, left: 104, top: 499, position: 'absolute', background: '#252525', borderRadius: 16, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}
                >
                    <div style={{ color: 'white', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>서비스 보러가기</div>
                </div>
                <img className="Mockup1" src={default_mockup} alt='default_mockup' style={{ width: 591, height: 417, left: 776, top: 187, position: 'absolute' }} />
            </div>
            {/* 블로그 보러가기 */}
            <div className="Frame40" style={{ width: '100%', height: 862, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 64, display: 'inline-flex', position: 'relative' }}>
                <div className="Room821">
                    <span style={{ color: '#252525', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>Room 821의 </span>
                    <span style={{ color: '#5499FF', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>개발 과정은?</span>
                </div>
                <div className="Frame35" style={{ width: '100%', height: 300, alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex' }}>
                    <div className="Group3" style={{ width: 250, height: 300, position: 'absolute', left: (32/1440)*width }}>
                        <img className="DefaultBlog" src={default_blog} alt='defualt_blog' style={{ width: 250, height: 300, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)', borderRadius: 24 }} />
                        <div className="1" style={{ left: 30, top: 233, position: 'absolute', color: '#F5F5F5', fontSize: 36, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 제목 1</div>
                    </div>
                    <div className="Group4" style={{ width: 250, height: 300, position: 'absolute', left: (313/1440)*width }}>
                        <img className="DefaultBlog" src={default_blog} alt='defualt_blog' style={{ width: 250, height: 300, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)', borderRadius: 24 }} />
                        <div className="1" style={{ left: 30, top: 233, position: 'absolute', color: '#F5F5F5', fontSize: 36, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 제목 1</div>
                    </div>
                    <div className="Group5" style={{ width: 250, height: 300, position: 'absolute', left: (1/2)*width-125 }}>
                        <img className="DefaultBlog" src={default_blog} alt='defualt_blog' style={{ width: 250, height: 300, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)', borderRadius: 24 }} />
                        <div className="1" style={{ left: 30, top: 233, position: 'absolute', color: '#F5F5F5', fontSize: 36, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 제목 1</div>
                    </div>
                    <div className="Group6" style={{ width: 250, height: 300, position: 'absolute', right: (313/1440)*width }}>
                        <img className="DefaultBlog" src={default_blog} alt='defualt_blog' style={{ width: 250, height: 300, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)', borderRadius: 24 }} />
                        <div className="1" style={{ left: 30, top: 233, position: 'absolute', color: '#F5F5F5', fontSize: 36, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 제목 1</div>
                    </div>
                    <div className="Group7" style={{ width: 250, height: 300, position: 'absolute', right: (32/1440)*width }}>
                        <img className="DefaultBlog" src={default_blog} alt='defualt_blog' style={{ width: 250, height: 300, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)', borderRadius: 24 }} />
                        <div className="1" style={{ left: 30, top: 233, position: 'absolute', color: '#F5F5F5', fontSize: 36, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 제목 1</div>
                    </div>
                </div>
                <div className="Frame15"
                    onClick={goToBlog}
                    style={{ position: 'absolute', left: (1/2)*width-150.5, top: 595, transform: 'translateY(-50%)', zIndex: 10, width: 223, height: 60, alignSelf: 'stretch', paddingLeft: 36, paddingRight: 36, paddingTop: 12, paddingBottom: 12, background: '#252525', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}
                >
                    <div style={{ color: 'white', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 보러가기</div>
                </div>
            </div>
            <div className="Frame41" style={{ width: '100%', height: 380, position: 'relative', background: 'linear-gradient(180deg, #5499FF 0%, rgba(84, 153, 255, 0) 100%)' }}>
                <div className="Room821" style={{ left: 432, top: 100, position: 'absolute' }}>
                    <span style={{ color: '#F5F5F5', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>Room 821과 여정을 </span>
                    <span style={{ color: '#F5F5F5', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>함께해요</span></div>
                <div className="Frame36"
                    onClick={goToRecruit}
                    style={{ paddingLeft: 36, paddingRight: 36, paddingTop: 12, paddingBottom: 12, left: 608, top: 220, position: 'absolute', background: '#252525', borderRadius: 16, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}
                >
                    <div style={{ color: 'white', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>채용 관련 문의하기</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultPage;