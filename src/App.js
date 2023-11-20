import { useState, useRef } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import './css/App.css';
import './css/mainpage.css'
import logoimg from './assets/logo_text.png'
import vector from "./assets/Vector-VMs.png";
import img1 from "./assets/img1.png";
import phedy_logo from "./assets/PheDy.png"
import useWindowWidth from './js/userwindow';

Amplify.configure(awsExports);

function App() {

  let [inputData_email, setInputData_email] = useState(['me@company.com']);
  let [savedData_email, setSavedData_email] = useState(['.']);
  let [inputData_comment, setInputData_comment] = useState(['Your message...']);
  let [savedData_comment, setSavedData_comment] = useState(['.']);
  const width = useWindowWidth()//사용자 width
  const homeRef = useRef(null);//기본 home
  const aboutRef = useRef(null);//기본 about
  const servicesRef = useRef(null);//기본 services
  const contactRef = useRef(null);//기본 contact

  const handleInputChange_email = (e) => {
    setInputData_email(e.target.value); // 입력 필드의 값이 변경될 때마다 inputData를 업데이트
  };
  const handleInputChange_comment = (e) => {
    setInputData_comment(e.target.value); // 입력 필드의 값이 변경될 때마다 inputData를 업데이트
  };

  const handleSave = () => {
    setSavedData_email(inputData_email); // '보내기' 버튼을 클릭하면 inputData를 savedData에 저장
    setSavedData_comment(inputData_comment);
  };

  const onHomeClick = () => {
    homeRef.current.scrollIntoView({behavior: 'smooth'});
  }; //home이동
  const onaboutClick = () => {
    aboutRef.current.scrollIntoView({behavior: 'smooth'});
  }; //about이동
  const onservicesClick = () => {
    servicesRef.current.scrollIntoView({behavior: 'smooth'});
  }; //services이동
  const oncontactClick = () => {
    contactRef.current.scrollIntoView({behavior: 'smooth'});
  }; //contact이동

  return (
    <div className="App">
      <div className="Room821web" style={{ width: width }}>
        <div className="NavbarLogoLeft" style={{ position: 'fixed', paddingLeft: 0.016 * width, paddingRight: 0.016 * width, background: '#ffffff' }}>
          <div className="Navbarcontainer">
            <div className="NavbarContent" style={{ width: 0.968 * width, justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
              <div className="Vector" style={{ width: (141 / 1440) * width, height: 23.06 }}>
                <img onClick = {onHomeClick} src={logoimg} alt='로고' style={{ width: 'auto', height: '100%' }} />
              </div>
              <div className="NavbarMenu" style={{ gap: (32 / 1440) * width }}>
                <div className="NavbarLink" onClick = {onHomeClick}>
                  <p className="Home" style={{ color: 'black', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>Home</p>
                </div>
                <div className="NavbarLink" onClick = {onaboutClick}>
                  <p className="About" style={{ color: 'black', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>About</p>
                </div>
                <div className="NavbarLink" onClick = {onservicesClick}>
                  <p className="Services" style={{ color: 'black', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>Services</p>
                </div>
                <div className="NavbarButton" onClick = {oncontactClick} style={{ height: 'auto', paddingLeft: 20, paddingRight: 20, paddingTop: 8, paddingBottom: 8, background: '#2A4678', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                  <div className="Contact" style={{ color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>Contact</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="HeroStack" ref={homeRef} style={{ alignSelf: 'stretch', paddingLeft: 24, paddingRight: 24, paddingTop: 128, paddingBottom: 64, background: '#F2F4F9', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 80, display: 'flex' }}>
          <div className="SmallContainer" style={{ width: width, height: 295.83, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'flex' }}>
            <div className="TitleSection" style={{ alignSelf: 'stretch', height: 295.83, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex' }}>
              <div className="Content" style={{ alignSelf: 'stretch', height: 214.83, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex' }}>
                <div className="Vector" style={{ width: 280, height: 163.83 }}>
                  <img src={vector} alt='벡터' style={{ width: 'auto', height: '100%' }} />
                </div>
                <p className="Room821" style={{ height: 27, alignSelf: 'stretch', textAlign: 'center', color: '#212121', fontSize: 18, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>무한한 가능성, Room 821에서 만나보세요.</p>
              </div>
              <div className="Actions" style={{ paddingTop: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
                <div className="Button" onClick = {oncontactClick} style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#2A4678', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                  <div className="Contact" style={{ color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>Contact</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="TestimonialStack" ref={aboutRef} style={{ width: width, paddingLeft: 24, paddingRight: 24, paddingTop: 64, paddingBottom: 64, background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'flex' }}>
          <div className="Title" style={{ width: (1392 / 1440) * width, height: 38, textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>About</div>
          <div className="SmallContainer" style={{ width: (960 / 1440) * width, paddingLeft: 42, paddingRight: 42, paddingTop: 32, paddingBottom: 32, background: '#F5F7FA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
            <div className="ContentWrapper" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
              <div className="Content">
                <div className="Description">
                  <span> LLM 등의 최신 </span>
                  <span style={{ fontWeight: '700' }}>인공지능 기술</span>
                  <span>을 활용하여
                    <br />일상생활과 업무의
                  </span>
                  <span style={{ fontWeight: '700' }}>효율성을 향상</span>
                  <span>시키기 위해 노력합니다</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Frame4" style={{ width: width, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <div className="FeaturesList" style={{ width: width, paddingLeft: 24, paddingRight: 24, paddingTop: 32, paddingBottom: 32, background: 'white', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
            <div className="Columns" style={{ justifyContent: 'center', alignItems: 'flex-start', gap: 80, display: 'flex' }}>
              <div className="Column" style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                <div className="Content" style={{ height: 121, paddingTop: 24, paddingBottom: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex' }}>
                  <div className="Intro" style={{ height: 73, alignItems: 'flex-start', gap: 16 }}>
                    <div className="Title" style={{ alignSelf: 'stretch', color: 'black', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>Awards & Honors</div>
                    <div className="Description" style={{ fontSize: 14 }}>Room 821이 현재까지 이뤄낸 것</div>
                  </div>
                </div>
              </div>
              <div className="Column" style={{ flex: '1 1 0', height: 169, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex', whiteSpace: 'nowrap' }}>
                <div className="Feature" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex' }}>
                  <div className="Description" style={{ flex: '1 1 0', fontSize: 14 }}>연세대학교 창업경진대회 S 등급 수상 (2022)</div>
                </div>
                <div className="Feature" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex' }}>
                  <div className="Description" style={{ flex: '1 1 0', fontSize: 14 }}>연세-넥슨 √i 창의플랫폼 우수상 (2022)</div>
                </div>
                <div className="Feature" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex' }}>
                  <div className="Description" style={{ flex: '1 1 0', fontSize: 14, wordWrap: 'break-word' }}>연세대학교 캠퍼스타운 선정기업 (2023)</div>
                </div>
                <div className="Frame1" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                  <div className="Description" style={{ width: (266.67 / 1440) * width, alignSelf: 'stretch', color: 'black', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>예비창업패키지 선정기업 (2023)</div>
                </div>
                <div className="Frame2" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                  <div className="Description" style={{ width: (266.67 / 1440) * width, height: 21, fontSize: 14 }}>한양대학교 창업지원대학 선정기업 (2023)</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingBottom: 32 }}>
            <div className="SmallContainer" style={{ width: (960 / 1440) * width, paddingLeft: 42, paddingRight: 42, paddingTop: 12, paddingBottom: 12, background: '#F5F7FA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex' }}>
              <div className="ContentWrapper" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'flex' }}>
                <div className="Content" style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
                  <div className="Description" style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '700', letterSpacing: 0.80, wordWrap: 'break-word' }}>공시정보</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="TestimonialColumnDark" ref={servicesRef} style={{ background: '#F3F6FA', paddingLeft: 24, paddingRight: 24, paddingTop: 64, paddingBottom: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'flex' }}>
          <div className="Title" style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>Services</div>
          <div className="Room821" style={{ textAlign: 'center' }}>
            <span style={{ color: 'black', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>현재 Room 821이 주목하고 있는 대상은 </span>
            <span style={{ color: 'black', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>간호사의 업무 효율성</span>
            <span style={{ color: 'black', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>입니다</span>
          </div>
          <div className="Frame3" style={{ width: (1049 / 1440) * width, justifyContent: 'center', alignItems: 'center', gap: 100, display: 'inline-flex' }}>
            <div className="Columns" style={{ width: (449 / 1440) * width, justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}>
              <div className="Column" style={{ width: (449 / 1440) * width, flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                <div className="SmallColumns" style={{ alignSelf: 'stretch', padding: 24, background: '#F5F7FA', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                  <div className="Quote" style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 50, display: 'inline-flex' }}>
                    <div className="Author" style={{ alignSelf: 'stretch', height: 61, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex', textAlign: 'left' }}>
                      <div className="Nursync" style={{ alignSelf: 'stretch', color: '#2A4678', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>NurSync</div>
                      <div style={{ fontSize: 14 }}>간호업무의 새로운 패러다임</div>
                    </div>
                    <div className="Description" style={{ textAlign: 'left', fontSize: 24 }}>
                      <span style={{ fontWeight: '700', wordWrap: 'break-word' }}>의료 LLM</span>
                      <span>을 통해 <br /></span>
                      <span style={{ fontWeight: '700', wordWrap: 'break-word' }}>간호사의 업무 효율성</span>
                      <span>을 책임집니다.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src={img1} alt='메인 예시화면1' style={{ width: (500 / 1440) * width, height: 'auto' }} />
          </div>
        </div>

        <div className="TestimonialColumnDark" style={{ height: 346, paddingLeft: 24, paddingRight: 24, paddingTop: 64, paddingBottom: 64, background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'flex' }}>
          <div className="Description" style={{ fontSize: 14 }}>
            <span style={{}}>다음은</span>
            <span style={{ fontWeight: '700' }}>학생들의 공부 효율성</span>
            <span style={{}}>을 개선해보려고 합니다.</span>
          </div>
          <div className="Columns" style={{ width: 449, justifyContent: 'center', alignItems: 'flex-start', gap: 32, display: 'inline-flex' }}>
            <div className="Column" style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24, display: 'inline-flex' }}>
              <div className="SmallColumns" style={{ alignSelf: 'stretch', padding: 24, background: '#F5F7FA', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                <div className="Quote" style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
                  <div className="Author" style={{ alignSelf: 'stretch', height: 61, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                    <div className="Phedy" style={{ alignSelf: 'stretch', textAlign: 'center' }}>
                      <img src={phedy_logo} alt='phedy_logo' />
                    </div>
                    <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>학습의 새로운 패러다임</div>
                  </div>
                  <div className="Text" style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>coming soon...</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ContactForm" ref={contactRef} style={{ width: width, alignSelf: 'stretch', height: 522, paddingLeft: 24, paddingRight: 24, paddingTop: 64, paddingBottom: 64, background: '#F2F4F9', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 64, display: 'flex' }}>
          <div className="Container" style={{ height: 394, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'flex' }}>
            <div className="SectionTitle" style={{ height: 81, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
              <div className="H2GetInTouch" style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>Contact</div>
              <div className="Room821" style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>Room 821의 개선사항을 알려주세요</div>
            </div>
            <div className="FormWrapper" style={{ width: (500 / 1440) * width, height: 273, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
              <div className="Form" style={{ alignSelf: 'stretch', height: 273, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                <div className="InputWrapper" style={{ alignSelf: 'stretch', height: 71, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
                  <div className="FormBlockLabel" style={{ alignSelf: 'stretch', color: 'black', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word', textAlign: 'left' }}>Email</div>
                  <div className="FormTextInput" style={{ alignSelf: 'stretch', height: 42, padding: 12, background: 'white', border: '1px black solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                    <input type='text' value={inputData_email} onChange={handleInputChange_email} className="MeCompanyCom" style={{ border: '1px solid white', background: 'transparent', flex: '1 1 0', color: '#979797', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word', textAlign: 'left' }} />
                  </div>
                </div>
                <div className="TextareaWrapper" style={{ alignSelf: 'stretch', height: 129, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
                  <div className="FormBlockLabel" style={{ alignSelf: 'stretch', color: 'black', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word', textAlign: 'left' }}>Your message...</div>
                  <div className="FormTextarea" style={{ alignSelf: 'stretch', height: 100, padding: 12, background: 'white', border: '1px black solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                    <input type='text' value={inputData_comment} onChange={handleInputChange_comment} className="YourMessage" style={{ border: '1px solid white', background: 'transparent', color: '#979797', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word', textAlign: 'left' }} />
                  </div>
                </div>
                <div onClick={handleSave} className="FormButton" style={{ alignSelf: 'stretch', paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#2A4678', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                  <div style={{ color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>전송</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className='Document'>저장된 데이터: {savedData_email}/{savedData_comment}</p> {/* 저장된 데이터 표시 */}

        <div className="Footer" style={{ width: width, height: 284, paddingTop: 64, paddingBottom: 8, paddingLeft: 24, paddingRight: 24, background: '#F5F7FA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'flex' }}>
          <div className="Columns" style={{ width: (960 / 1440) * width, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
            <div className="Column" style={{ width: (320 / 1440) * width, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
              <div className="LogoWrapper" style={{ paddingTop: 16, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <img src={vector} alt='room821_logo' style={{ width: 110, height: 64 }}></img>
              </div>
            </div>
            <div className="SmallColumns" style={{ height: 119, paddingTop: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
              <div className="Column" style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                <div className="Content" style={{ alignSelf: 'stretch', height: 103, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                  <div className="Room821Inc" style={{ alignSelf: 'stretch', color: '#212121', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>Room 821 Inc.</div>
                  <div className="FooterLinks" style={{ alignSelf: 'stretch', height: 50, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
                    <div className="Link" style={{ alignSelf: 'stretch', color: '#212121', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>서울특별시 서대문구 연세로2나길 61 에스큐브 1호점 204호</div>
                    <div className="Link" style={{ alignSelf: 'stretch', color: '#212121', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>사업자 등록 번호: 258-87-02954</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Copyright" style={{ width: (940 / 1440) * width, paddingTop: 16, paddingBottom: 16, boxShadow: '0px -1px 0px #E4EBF3', justifyContent: 'center', alignItems: 'center', gap: 32, display: 'inline-flex' }}>
            <div className="Text" style={{ flex: '1 1 0', textAlign: 'center', color: '#333333', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>Copyright © ROOM 821 ALL RIGHTS RESERVED.</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
