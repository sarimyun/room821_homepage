import React from 'react';
import { useWindowWidth } from '../userwindow';
import service_imac_image from '../../assets/service_imac_image.png';
import service_mockup_image from '../../assets/service_mockup_image.png';
import service_video from '../../assets/service_video.mp4';

function ServiceIntroductionPage() {
    const width = useWindowWidth();
    return (
        <div style={{ width: width, height: '100%', background: '#f5f5f5', position: 'relative' }}>
            <div className="Frame46" style={{ width: '100%', height: (1000 / 1440) * width, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div className="AiNursync" style={{ left: 429, top: 64, position: 'absolute', textAlign: 'center' }}>
                    <span style={{ color: '#252525', fontSize: 40, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>간호사의 직접간호시간 최대화를 위한<br />AI기반 간호협업 솔루션, </span>
                    <span style={{ color: '#5499FF', fontSize: 40, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>NurSync</span>
                </div>
                <div className="Rectangle12" style={{ 
                    left: (163 / 1440) * width, 
                    top: 272, 
                    position: 'absolute', 
                    width: (1115 / 1440) * width, 
                    height: (635 / 1440) * width, 
                    background: '#252525', 
                    borderRadius: 48,
                    overflow: 'hidden', // 추가: 내부 컨텐츠를 벗어나지 않도록 overflow를 hidden으로 설정
                }}>
                    <video 
                        controls 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover', // 추가: 동영상이 비율을 유지하면서 영역을 채우도록 설정
                        }}
                    >
                        <source src={service_video} type="video/mp4" />
                        지원되지 않는 브라우저입니다.
                    </video>
                </div>
            </div>
            <div className="Frame47" style={{ width: width, height: 1140, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div className="Ai" style={{ left: (273 / 1440) * width, top: 107, position: 'absolute', textAlign: 'center', color: '#252525', fontSize: 36, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>AI를 통해 편리하고 효율적인 방식으로 간접간호업무를 보조하여<br />병동간호사의 업무환경을 완화시키려 합니다.</div>
                <div className="Group9" style={{ left: (84 / 1440) * width, top: 303, position: 'absolute', width: (1298 / 1440) * width, height: (670 / 1440) * width }}>
                    <div className="Frame34" style={{ width: 300, height: 64, padding: 10, left: (828 / 1440) * width, top: 606, position: 'absolute', background: '#E5E5E5', borderRadius: 24, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div style={{ color: '#252525', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>차팅업무용 앱 </div>
                    </div>
                    <img className="Mockup1" src={service_mockup_image} alt='farm_imac_image' style={{ width: 641, height: 453, left: 657, top: 39, position: 'absolute' }} />
                    <div className="Frame33" style={{ width: 300, height: 64, padding: 10, left: 144, top: 606, position: 'absolute', background: '#E5E5E5', borderRadius: 24, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div className="Hr" style={{ color: '#252525', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>HR 관리용 대시보드</div>
                    </div>
                    <img className="Imac1" src={service_imac_image} alt='farm_imac_image' style={{ width: 778, height: 538, left: 0, top: 0, position: 'absolute' }} />
                </div>
            </div>
        </div>
    );
}

export default ServiceIntroductionPage;