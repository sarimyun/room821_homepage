import React from 'react';
import { useWindowWidth } from '../userwindow';
import blog_image1 from '../../assets/blog_image1.png';
//import blog_image2 from '../../assets/blog_image2.png';

function BlogPage() {
    const all_width = useWindowWidth();
    const width = all_width > 1440 ? 1440 : all_width;

    return (
        <div style={{ width: all_width, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f5f5f5', position: 'relative' }}>
            <div style={{ width: width, height: '100%' }}>
                <div className="Frame48" style={{ width: width, height: 907, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                    <div className="Room821" style={{ left: 1 / 2 * width - 314, top: 64, position: 'absolute', color: '#252525', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>Room 821이 겪어온 모든 이야기</div>
                    <div style={{ left: (1 / 2) * width - 216, top: 137, position: 'absolute', color: '#7A7A7A', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>서비스 개발 동기부터 과정까지, 모든 이야기를 공유해요</div>
                    <img className="JasonGoodmanBzqu01vG54Unsplash1" src={blog_image1} alt='blog_image1' style={{ left: (13 / 120) * width, top: 210, position: 'absolute', width: (1128 / 1440) * width, maxWidth: 1128, height: 'auto', borderRadius: 48 }} />
                </div>
                <div className="Frame49" style={{ width: width, height: 'auto', position: 'relative', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ color: '#C5C5C5', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word', marginTop: '50px', marginBottom: '50px' }}>
                        현재 글이 없어요..
                    </div>
                </div>
                {/* 
                <div className="Frame49" style={{ width: width, height: 1720, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                    <div className="Frame50" style={{ width: (610 / 1440) * width, height: 550, left: (110 / 1440) * width, top: 33, position: 'absolute' }}>
                        <div className="1" style={{ left: 68, top: 47, position: 'absolute', color: '#252525', fontSize: 36, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 제목 1</div>
                        <div className="1" style={{ left: 68, top: 102, position: 'absolute', color: '#252525', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 서브 제목 1</div>
                        <img className="AustinDistelWd1lrb9oeeoUnsplash2" src={blog_image2} alt='blog_image2' style={{ width: 496, height: 300, left: 68, top: 158, position: 'absolute', borderRadius: 24 }} />
                        <div className="Frame20" style={{ height: 48, paddingLeft: 24, paddingRight: 24, left: 68, top: 482, position: 'absolute', background: '#E5E5E5', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            <div className="1" style={{ color: '#252525', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>해시태그 1</div>
                        </div>
                    </div>
                    <div className="Frame51" style={{ width: (610 / 1440) * width, height: 550, right: (110 / 1440) * width, top: 33, position: 'absolute' }}>
                        <div className="1" style={{ left: 68, top: 47, position: 'absolute', color: '#252525', fontSize: 36, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 제목 1</div>
                        <div className="1" style={{ left: 68, top: 102, position: 'absolute', color: '#252525', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 서브 제목 1</div>
                        <img className="AustinDistelWd1lrb9oeeoUnsplash2" src={blog_image2} alt='blog_image2' style={{ width: 496, height: 300, left: 68, top: 158, position: 'absolute', borderRadius: 24 }} />
                        <div className="Frame20" style={{ height: 48, paddingLeft: 24, paddingRight: 24, left: 68, top: 482, position: 'absolute', background: '#E5E5E5', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            <div className="1" style={{ color: '#252525', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>해시태그 1</div>
                        </div>
                    </div>
                    <div className="Frame52" style={{ width: (610 / 1440) * width, height: 550, left: (110 / 1440) * width, top: 583, position: 'absolute' }}>
                        <div className="1" style={{ left: 68, top: 47, position: 'absolute', color: '#252525', fontSize: 36, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 제목 1</div>
                        <div className="1" style={{ left: 68, top: 102, position: 'absolute', color: '#252525', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 서브 제목 1</div>
                        <img className="AustinDistelWd1lrb9oeeoUnsplash2" src={blog_image2} alt='blog_image2' style={{ width: 496, height: 300, left: 68, top: 158, position: 'absolute', borderRadius: 24 }} />
                        <div className="Frame20" style={{ height: 48, paddingLeft: 24, paddingRight: 24, left: 68, top: 482, position: 'absolute', background: '#E5E5E5', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            <div className="1" style={{ color: '#252525', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>해시태그 1</div>
                        </div>
                    </div>
                    <div className="Frame53" style={{ width: (610 / 1440) * width, height: 550, right: (110 / 1440) * width, top: 583, position: 'absolute' }}>
                        <div className="1" style={{ left: 68, top: 47, position: 'absolute', color: '#252525', fontSize: 36, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 제목 1</div>
                        <div className="1" style={{ left: 68, top: 102, position: 'absolute', color: '#252525', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 서브 제목 1</div>
                        <img className="AustinDistelWd1lrb9oeeoUnsplash2" src={blog_image2} alt='blog_image2' style={{ width: 496, height: 300, left: 68, top: 158, position: 'absolute', borderRadius: 24 }} />
                        <div className="Frame20" style={{ height: 48, paddingLeft: 24, paddingRight: 24, left: 68, top: 482, position: 'absolute', background: '#E5E5E5', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            <div className="1" style={{ color: '#252525', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>해시태그 1</div>
                        </div>
                    </div>
                    <div className="Frame54" style={{ width: (610 / 1440) * width, height: 550, left: (110 / 1440) * width, top: 1133, position: 'absolute' }}>
                        <div className="1" style={{ left: 68, top: 47, position: 'absolute', color: '#252525', fontSize: 36, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 제목 1</div>
                        <div className="1" style={{ left: 68, top: 102, position: 'absolute', color: '#252525', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 서브 제목 1</div>
                        <img className="AustinDistelWd1lrb9oeeoUnsplash2" src={blog_image2} alt='blog_image2' style={{ width: 496, height: 300, left: 68, top: 158, position: 'absolute', borderRadius: 24 }} />
                        <div className="Frame20" style={{ height: 48, paddingLeft: 24, paddingRight: 24, left: 68, top: 482, position: 'absolute', background: '#E5E5E5', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            <div className="1" style={{ color: '#252525', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>해시태그 1</div>
                        </div>
                    </div>
                    <div className="Frame55" style={{ width: (610 / 1440) * width, height: 550, right: (110 / 1440) * width, top: 1133, position: 'absolute' }}>
                        <div className="1" style={{ left: 68, top: 47, position: 'absolute', color: '#252525', fontSize: 36, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 제목 1</div>
                        <div className="1" style={{ left: 68, top: 102, position: 'absolute', color: '#252525', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>블로그 서브 제목 1</div>
                        <img className="AustinDistelWd1lrb9oeeoUnsplash2" src={blog_image2} alt='blog_image2' style={{ width: 496, height: 300, left: 68, top: 158, position: 'absolute', borderRadius: 24 }} />
                        <div className="Frame20" style={{ height: 48, paddingLeft: 24, paddingRight: 24, left: 68, top: 482, position: 'absolute', background: '#E5E5E5', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            <div className="1" style={{ color: '#252525', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>해시태그 1</div>
                        </div>
                    </div>
                </div>
                */}
            </div>
        </div>
    );
}

export default BlogPage;