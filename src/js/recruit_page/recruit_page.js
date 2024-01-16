import React, { useState } from 'react';
import { useWindowWidth } from '../userwindow';

function RecruitPage() {
    const all_width = useWindowWidth();
    const width = all_width > 1440 ? 1440 : all_width;

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            recruitPress();
        }
    };

    const recruitPress = async () => {
        alert('동의 후 지원하기');
    };

    return (
        <div style={{ width: all_width, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f5f5f5', position: 'relative' }}>
            <div style={{ width: width, height: '100%' }}>
                <div className="Frame56" style={{ width: width, height: 180, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <div className="Room821" style={{ left: (179 / 720) * width, top: 65, position: 'absolute', color: '#252525', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>Room 821과 함께 비전을 실현시켜요! </div>
                </div>
                <div className="Frame57" style={{ width: width, height: 1200, position: 'relative' }}>
                    <div style={{ left: 209, top: 42, position: 'absolute', color: '#252525', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>이름</div>
                    <div className="Frame26" style={{ width: (1022 / 1440) * width, height: 64, paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10, left: 209, top: 90, position: 'absolute', borderRadius: 8, border: '1px #C5C5C5 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <input type="text" placeholder="이름을 입력해주세요." value={name} onChange={(e) => setName(e.target.value)} onKeyPress={handleKeyPress} style={{ color: '#C5C5C5', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word', flex: 1, border: 'none', outline: 'none', background: 'transparent' }} />
                    </div>
                    <div style={{ left: 209, top: 202, position: 'absolute', color: '#252525', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>전화번호</div>
                    <div className="Frame27" style={{ width: (1022 / 1440) * width, height: 64, paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10, left: 209, top: 250, position: 'absolute', borderRadius: 8, border: '1px #C5C5C5 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <input type="text" placeholder="전화번호를 입력해주세요." value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} onKeyPress={handleKeyPress} style={{ color: '#C5C5C5', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word', flex: 1, border: 'none', outline: 'none', background: 'transparent' }} />
                    </div>
                    <div style={{ left: 209, top: 362, position: 'absolute', color: '#252525', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>이메일</div>
                    <div className="Frame28" style={{ width: (1022 / 1440) * width, height: 64, paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10, left: 209, top: 410, position: 'absolute', borderRadius: 8, border: '1px #C5C5C5 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <input type="text" placeholder="이메일 주소를 입력해주세요." value={email} onChange={(e) => setEmail(e.target.value)} onKeyPress={handleKeyPress} style={{ color: '#C5C5C5', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word', flex: 1, border: 'none', outline: 'none', background: 'transparent' }} />
                    </div>
                    <div style={{ left: 209, top: 522, position: 'absolute', color: '#252525', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>개인정보수집 및 이용 동의</div>
                    <div className="Frame29" style={{ width: (1022 / 1440) * width, height: 393, paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10, left: 209, top: 570, position: 'absolute', borderRadius: 8, overflow: 'hidden', border: '1px #C5C5C5 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex', overflowY: 'auto' }}>
                        <div style={{ position: 'absolute', top: 0, width: (974/1440)*width, height: 'auto',flex: '1 1 0', color: '#C5C5C5', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>
                            제 1 조 수집하는 개인정보 항목 및 수집방법<br />
                            회사는 회원 가입, 서비스제공, 기타상담 등을 위해 개인정보를 수집하고 있으며, 또한 설문조사나 이벤트 시에 집단적인 통계분석을 위해서나 경품발송을 위한 목적으로도 개인정보 기재를 요청할 수 있습니다. 그러나, 회사는 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록 등)는 가급적 수집하지 않으며 부득이하게 수집해야 할 경우 이용자들의 사전동의를 반드시 구합니다. 이때에도 기입하신 정보는 해당서비스 제공이나 회원님께 사전에 밝힌 목적 이외의 다른 어떠한 목적으로도 사용되지 않음을 알려드립니다.<br />
                            <br/>
                            제 2 조 개인정보의 수집 및 이용목적<br />
                            회사는 아래와 같은 목적으로 개인정보를 수집합니다.<br />
                            서비스 제공에 관한 계약이행 및 서비스제공에 따른 요금정산: 컨텐츠 제공, 청구서 발송, 본인인증, 물품배송, 구매 및 요금결제, 금융서비스<br />
                            회원관리: 회원제 서비스 이용에 따른 본인 확인, 개인식별, 불량회원의 부정 이용 방지와 비인가 사용방지, 가입 의사 및 연령 확인, 만 14세 미만 아동의 개인정보 수집 시 법정 대리인 동의여부 확인, 불만처리 등 민원처리, 고지사항 전달.<br />
                            서비스: 안내등 마케팅 및 광고	신규 서비스 개발 및 특화, 인구통계학적 특성에 따른 서비스 제공 및 광고게재, 접속 빈도 파악, 회원의 서비스 이용에 대한 통계, 이벤트 등 광고성 정보 전달<br />
                            <br/>
                            제 3 조 개인정보 수집에 대한 동의<br />
                            회사는 회원님의 개인정보 수집에 대하여 동의를 받고 있으며, 회사 내의 회원가입 절차 중 이용약관 및 개인정보처리방침에 개인정보 수집 동의절차를 마련해 두고 있습니다. 회원님께서['약관 및 정책'에 동의합니다.]란에 체크하시면 개인정보 수집에 대해 동의한 것으로 봅니다.<br />
                            <br/>
                            제 4 조 개인정보의 이용 현황<br />
                            회사는 이용자들의 개인정보를 ‘2. 개인정보의 수집 및 이용목적’에서 고지한 범위내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.<br />
                            이용자들이 사전에 공개에 동의한 경우<br />
                            법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
                        </div>
                    </div>
                    <div className="Frame30" onClick={recruitPress} style={{ cursor: 'pointer', width: (1022 / 1440) * width, height: 64, paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10, left: 209, top: 1027, position: 'absolute', background: '#5499FF', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div style={{ color: '#F5F5F5', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>동의 후 지원하기</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecruitPage;