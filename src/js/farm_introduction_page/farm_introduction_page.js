import React from 'react';
import { useWindowWidth } from '../userwindow';
import farm_image1 from '../../assets/farm_image1.png';

function FarmIntroductionPage() {
    const width = useWindowWidth();
    return (
        <div style={{ width: '100%', height: '100%', background: '#f5f5f5' }}>
            {/* 모두의 상상 현실로 */}
            <div className="Frame42" style={{ width: width, height: 'auto', position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <img className="CleverVisualsImwipznx3siUnsplash1"
                    src={farm_image1}
                    alt='farm_image1'
                    style={{ width: width, height: 'auto' }}
                />
                <div style={{ left: (104 / 1440) * width, top: (170 / 1440) * width, position: 'absolute', color: '#F5F5F5', fontSize: 40, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>모두의 상상을 현실로,</div>
                <div className="Room821" style={{ right: (104 / 1440) * width, top: (170 / 1440) * width, position: 'absolute', color: '#F5F5F5', fontSize: 40, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>Room 821</div>
            </div>
            {/* 구호 */}
            <div className="Frame43" style={{ width: '100%', height: 420, justifyContent: 'center', alignItems: 'center', display: 'inline-flex', position: 'relative' }}>
                <div className="821" style={{ textAlign: 'center', color: '#252525', fontSize: 36, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>연세대학교 기숙사 821호에서 시작한 저희는<br />다양한 문제를 창의적으로 해결하기 위해 노력하고 있어요</div>
            </div>
            {/* 지금동안 한거 */}
            <div className="Frame44" style={{ width: '100%', height: 1014, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ left: 368, top: 126, position: 'absolute', color: '#252525', fontSize: 40, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>서비스가 출시되기 전에 많은 것을 이뤄냈어요</div>
                <div className="Group1" style={{ width: 504, height: 628, left: 474, top: 286, position: 'absolute' }}>
                    <div className="Vector1" style={{ width: 0, height: 628, left: 18, top: 0, position: 'absolute', border: '4px #E5E5E5 solid' }} />
                    <div className="Frame11" style={{ width: 287, height: 72, left: 64, top: 110, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                        <div className="I" style={{ color: '#8A8A8A', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>연세-넥슨 √i 창의플랫폼 우수상</div>
                        <div className="S" style={{ color: '#8A8A8A', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>연세대학교 창업경진대회 S등급 수상</div>
                    </div>
                    <div className="Frame12" style={{ width: 450, height: 264, left: 64, top: 316, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                        <div className="S" style={{ color: '#8A8A8A', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>연세대학교 창업경진대회 S등급 수상</div>
                        <div style={{ color: '#8A8A8A', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>캠퍼스타운(연세대학교) 선정기업</div>
                        <div style={{ color: '#8A8A8A', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>예비창업패키지(연세대학교) 선정기업</div>
                        <div style={{ color: '#8A8A8A', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>창업지원대학(한양대학교) 선정기업</div>
                        <div className="Ip" style={{ color: '#8A8A8A', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>IP 디딤돌 프로그램 선정</div>
                        <div style={{ color: '#8A8A8A', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>연세대학교 의과대학 디지털 헬스케어 부트캠프 최우수상</div>
                    </div>
                    <div className="Frame32" style={{ width: 131, height: 38, left: 0, top: 24, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
                        <div className="Ellipse1" style={{ width: 36, height: 36, background: '#5499FF', borderRadius: 9999, border: '6px #F5F5F5 solid' }} />
                        <div style={{ color: '#252525', fontSize: 32, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>2022</div>
                    </div>
                    <div className="Frame31" style={{ width: 132, height: 38, left: 0, top: 230, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
                        <div className="Ellipse2" style={{ width: 36, height: 36, background: '#5499FF', borderRadius: 9999, border: '6px #F5F5F5 solid' }} />
                        <div style={{ color: '#252525', fontSize: 32, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>2023</div>
                    </div>
                </div>
            </div>
            {/* 포부 */}
            <div className="Frame45" style={{ width: width, height: 500, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', background: '#252525' }}>
                <div style={{ left: 376, top: 190, position: 'absolute', textAlign: 'center', color: '#F5F5F5', fontSize: 40, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>간호사, 대학생 등 다양한 사용자들의 문제를 <br />저희만의 창의적인 방식으로 해결합니다 </div>
            </div>
        </div>
    );
}

export default FarmIntroductionPage;