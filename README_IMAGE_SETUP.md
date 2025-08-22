# 🖼️ 이미지 추가 가이드

## 업로드한 공공기관 R&D 정보포털 이미지 추가 방법

### 1. 이미지 파일 준비
- 업로드하신 첫 번째 이미지 (공공기관 R&D 정보포털 스크린샷)를 다운로드
- 파일명을 `rd-portal.jpg` 또는 `rd-portal.png`로 변경

### 2. 이미지 파일 저장 위치
```
port2025-vue/
├── src/
│   ├── assets/
│   │   ├── img/
│   │   │   ├── about.jpg
│   │   │   ├── port0.jpg
│   │   │   └── rd-portal.jpg  ← 여기에 저장
```

### 3. 코드 수정
`src/components/SiteSection.vue` 파일에서 다음 부분을 수정:

**변경 전:**
```scss
background-image: 
    linear-gradient(rgba(102, 126, 234, 0.85), rgba(118, 75, 162, 0.85)),
    url('/src/assets/img/port0.jpg'); /* 임시 배경 이미지 */
```

**변경 후:**
```scss
background-image: 
    linear-gradient(rgba(102, 126, 234, 0.85), rgba(118, 75, 162, 0.85)),
    url('/src/assets/img/rd-portal.jpg'); /* 실제 R&D 포털 이미지 */
```

### 4. 이미지 최적화 (선택사항)
- 웹 최적화를 위해 이미지 크기를 1920x1080 이하로 리사이즈
- JPEG 품질 80-90% 권장
- 파일 크기 500KB 이하 권장

### 5. 확인
- 개발 서버 재시작: `npm run dev`
- 브라우저에서 두 번째 카드의 배경에 이미지가 적용되었는지 확인

## 📝 현재 적용된 효과

✅ 그라디언트 오버레이로 텍스트 가독성 확보
✅ 글래스모피즘 효과로 현대적인 느낌
✅ 배경 고정 효과 (parallax)
✅ 공공기관 프로젝트에 맞는 색상 테마
✅ 반응형 디자인 적용 