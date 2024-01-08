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
                    <div className="Frame29" style={{ width: (1022 / 1440) * width, height: 393, paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10, left: 209, top: 570, position: 'absolute', borderRadius: 8, overflow: 'hidden', border: '1px #C5C5C5 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div style={{ flex: '1 1 0', color: '#C5C5C5', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
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