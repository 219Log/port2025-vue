import port0 from "../assets/img/study/port0.jpg";
import iot1 from "../assets/img/study/iot_1.png";
import aws from "../assets/img/study/aws.png";
import javaScript from "../assets/img/study/javaScript.png";
import springBoot from "../assets/img/study/springBoot.png";
import springFramework from "../assets/img/study/springFramework.png";
import vue from "../assets/img/study/vue.jpg";

export const headerNav = [
  { title: "Home", url: "#intro" },
  { title: "Cover Letter", url: "#skill" },
  { title: "Web Projects", url: "#site" },
  { title: "AI Projects", url: "#aiproject" },
  { title: "Contact", url: "#contact" },
];

export const introText = {
  title: "Full Stack Developer",
  desc: ["Vue Project", "Portfolio"],
};

export const skillCerts = [
  { name: "정보처리기사", date: "2024.06", icon: "🏛️" },
  { name: "SQLD", date: "2024.06", icon: "🗄️" },
  { name: "리눅스 마스터 2급", date: "2025.03", icon: "🐧" },
  { name: "컴퓨터활용능력 2급", date: "2019.03", icon: "💻" },
];

export const skillSummary = [
  "공공기관 대상 시스템 개발 및 유지보수 3년 이상",
  "전자문서/결재/출력 등 공공업무 자동화 구현 경험",
  "Oracle, Tibero 기반 DB 연동 및 성능 개선 다수 경험",
  "Linux 기반 온프레미스 서버 운용 실무 경험 보유",
  "SMS/Email 알림 연동 (Ncloud SMS API + JavaMail)",
];

export const skillTechStack = {
  "Server-Side": ["Java", "Spring Framework", "MyBatis", "JSP", "Python", "FastAPI"],
  "Client-Side": ["JavaScript", "jQuery", "Nexacro", "MiPlatform", "AJAX"],
  "Cloud / Infra": ["Linux", "AWS EC2", "Docker", "RunPod", "NVIDIA CUDA", "Vercel"],
  "Database": ["Oracle", "Tibero", "SQL", "Supabase"],
  "Server": ["Linux", "Ncloud", "AWS S3", "JEUS"],
  "Version Control": ["Git", "SVN", "Notion"],
};

export const skillExperience = [
  {
    title: "사업관리 차세대 개발",
    color: "#00d4ff",
    tasks: [
      "시스템 프로세스별 페이지 개발",
      "문서 출력 관리 시스템 개발",
      "개인정보 KMS암호화 적용",
    ],
    integrations: [
      "나모에디터 : 웹에디터(텍스트편집, 다운로드)",
      "OZ e-Form : 전자결재 승인",
      "인투뷰어 : 전자결재파일 및 목록 PDF 변환",
      "네이버 클라우드 SMS 서비스",
      "AWS S3 : 서버 내에 첨부파일 다운로드",
    ],
  },
  {
    title: "사업관리 성과정보 시스템 유지보수·고도화·차세대",
    color: "#ff6b6b",
    tasks: [
      "검색속도 향상, 통계페이지 설계 및 배포",
      "공문발송시스템 개발",
      "정부 정책에 따른 시스템 적용 개발",
      "사업비/연구사업 통계 데이터 분류·정제",
      "전문가 인력관리, 부서별·사업별 접근권한 관리",
    ],
  },
  {
    title: "에너지공기업 성과정보 시스템 유지보수·고도화",
    color: "#4ecdc4",
    tasks: [
      "보안 취약점 대응 (세션만료, 중복로그인, SQL Injection, XSS)",
      "파일 업/다운로드 경로 보안, 민감정보 암호화 저장",
      "장소 대여 시스템 기능개발",
      "연구과제 중복방지 시스템개발",
      "웹에디터 소프트웨어 리팩토링",
    ],
  },
];

export const siteText = [
  {
    num: "01",
    title: "External Project Management System",
    subtitle: "한국과학창의재단 (차세대)",
    desc: "공공 R&D 사업의 외부 과제 관리를 위한 차세대 시스템입니다. 사업 공고부터 접수, 평가, 선정, 협약, 수행, 정산까지 연구과제의 전 생애주기를 관리하며, 전자결재·문서출력·SMS 알림 등 공공업무 자동화 기능을 통합 구현했습니다.",
    techStack: ["Java", "Spring", "Oracle", "JSP", "MyBatis"],
    category: "Government / R&D",
    period: "6개월",
    code: "https://blossom-lavender-c87.notion.site/External-Project-Management-System-25a336a69612807cba4af74131428972?source=copy_link",
    view: null,
    color: "#00d4ff",
    gradient: "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)"
  },
  {
    num: "02",
    title: "Internal Project Management System",
    subtitle: "한국과학창의재단 (차세대)",
    desc: "기관 내부 사업 관리자를 위한 차세대 내부 시스템입니다. 사업별 통계 대시보드, 연구자료 데이터 정제, 부서별·사업별 접근권한 관리, 공문발송 시스템 등 내부 업무 효율화에 특화된 기능을 개발했습니다.",
    techStack: ["Java", "Spring", "Oracle", "JSP", "Nexacro"],
    category: "Government / Internal",
    period: "6개월",
    code: "https://blossom-lavender-c87.notion.site/Internal-Project-Management-System-25a336a69612804db30ed8d566361a9a?source=copy_link",
    view: null,
    color: "#ff6b6b",
    gradient: "linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(220, 38, 127, 0.15) 100%)"
  },
  {
    num: "03",
    title: "온라인 접수 시스템",
    subtitle: "한국과학창의재단 (차세대)",
    desc: "연구과제 온라인 접수 및 신청을 위한 웹 시스템입니다. 사업 공고에 따른 접수 양식 동적 생성, 첨부파일 업로드, 접수 현황 실시간 조회 등의 기능을 제공하며, 대용량 접수 트래픽에도 안정적으로 운영됩니다.",
    techStack: ["Java", "Spring", "Oracle", "JSP", "jQuery"],
    category: "Government / Portal",
    period: "6개월",
    code: "https://blossom-lavender-c87.notion.site/25a336a6961280c09ecace45657d5cb1?source=copy_link",
    view: null,
    color: "#4ecdc4",
    gradient: "linear-gradient(135deg, rgba(52, 211, 153, 0.1) 0%, rgba(16, 185, 129, 0.15) 100%)"
  },
  {
    num: "04",
    title: "연구과제 중복방지 시스템",
    subtitle: "한국에너지기술평가원 (유지보수)",
    desc: "에너지 분야 연구과제의 중복 투자를 방지하기 위한 시스템입니다. 유사 과제 검색 알고리즘, 키워드 기반 중복도 분석, 과제 이력 추적 기능을 통해 국가 R&D 예산의 효율적 집행을 지원합니다.",
    techStack: ["Java", "Spring", "Tibero", "JSP", "jQuery"],
    category: "Energy / R&D",
    period: "개발 및 유지보수 3년",
    code: "https://blossom-lavender-c87.notion.site/25a336a6961280c49edad74cab3dbebd?source=copy_link",
    view: null,
    color: "#ffd93d",
    gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.15) 100%)"
  },
  {
    num: "05",
    title: "Project Management System",
    subtitle: "한국에너지기술평가원 (고도화·유지보수)",
    desc: "에너지 기술 R&D 과제의 통합 관리 시스템입니다. 보안 취약점 전면 대응(세션만료, 중복로그인, SQL Injection, XSS), 장소 대여 시스템, 웹에디터 리팩토링 등 고도화 및 유지보수를 수행했습니다.",
    techStack: ["Java", "Spring Boot", "Tibero", "Vue.js", "MiPlatform"],
    category: "Energy / Management",
    period: "개발 및 유지보수 3년",
    code: "https://blossom-lavender-c87.notion.site/Project-Management-System-25a336a6961280e5b7aff6d9d0601ea3?source=copy_link",
    view: null,
    color: "#6bcf7f",
    gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(21, 128, 61, 0.15) 100%)"
  },
];

export const portText = [
    {
        num: "01",
        title: "IoT 기반 제어 시스템",
        desc: "Arduino Uno와 센서들을 활용한 IoT 프로젝트입니다. 온습도 센서(DHT22), LED, 버튼 등을 연결하여 실시간으로 환경 데이터를 수집하고 제어할 수 있는 시스템을 구현했습니다. 시리얼 통신을 통해 데이터를 모니터링하고, 조건에 따라 자동으로 장치를 제어하는 기능을 개발했습니다. 하드웨어와 소프트웨어의 융합을 통해 IoT의 기본 개념과 센서 제어 원리를 학습할 수 있었습니다.",
        img: iot1,
        code: "https://blossom-lavender-c87.notion.site/IoT-25a336a69612809c910adff72f5ed025",
        view: "https://blossom-lavender-c87.notion.site/IoT-25a336a69612809c910adff72f5ed025",
        name: "IoT 제어 프로젝트",
    },
    {
        num: "02",
        title: "AWS 네트워킹",
        desc: "AWS 클라우드 네트워킹 서비스를 체계적으로 학습한 실무 프로젝트입니다. EC2 웹서버 구축, VPC 퍼블릭/프라이빗 서브넷 설계, 보안그룹과 네트워크 ACL 접근제어, ALB/NLB 로드밸런싱, Route 53 DNS 라우팅 정책을 실습했습니다. CloudFormation을 통한 IaC 구현과 VPC Flow Logs 모니터링으로 AWS 네트워킹 전문성을 습득했습니다.",
        img: aws,
        code: "https://blossom-lavender-c87.notion.site/aws-25a336a696128098b3a0e73744e56730?source=copy_link",
        view: "https://blossom-lavender-c87.notion.site/aws-25a336a696128098b3a0e73744e56730?source=copy_link",
        name: "AWS 네트워킹",
    },
    {
        num: "03",
        title: "JavaScript jQuery Basic",
        desc: "JavaScript와 jQuery의 기본 요소들을 체계적으로 학습한 프로젝트입니다. 변수 선언, 함수 정의와 호출, DOM 조작을 통한 HTML 태그별 접근과 이벤트 처리를 실습했습니다. jQuery 선택자, 애니메이션 효과, AJAX 비동기 통신 등 웹페이지 상호작용 구현을 위한 JavaScript와 jQuery의 기초 문법을 단계별로 학습했습니다.",
        img: javaScript,
        code: "https://blossom-lavender-c87.notion.site/JavaScript-jQuery-Basic-25a336a696128000000000000000000",
        view: "https://blossom-lavender-c87.notion.site/JavaScript-jQuery-Basic-25a336a696128000000000000000000",
        name: "JavaScript jQuery Basic",
    },
    {
        num: "04",
        title: "Vue.js 학습 포트폴리오",
        desc: "Vue.js 프레임워크를 활용해 제작한 개인 포트폴리오 사이트입니다. 컴포넌트 기반 개발, 반응형 디자인, SPA 라우팅을 구현했습니다. SCSS를 활용한 스타일링, GSAP 애니메이션 효과, 그리고 모바일 최적화까지 현대적인 웹 개발 기술들을 종합적으로 학습하고 적용한 프로젝트입니다.",
        img: vue,
        code: "#",
        view: "#",
        name: "Vue.js 포트폴리오",
    },
    {
        num: "05",
        title: "Spring Boot 핵심원리",
        desc: "Spring Boot의 핵심 개념과 동작 원리를 심도 있게 학습한 프로젝트입니다. 자동 설정(Auto Configuration), 스타터(Starter), 임베디드 서버의 동작 방식을 이해하고, 의존성 주입과 IoC 컨테이너의 생명주기를 실습했습니다. 애노테이션 기반의 설정과 프로파일 관리, 액추에이터를 통한 모니터링까지 Spring Boot의 전반적인 생태계를 체계적으로 학습했습니다.",
        img: springBoot,
        code: "https://blossom-lavender-c87.notion.site/spring-boot-basic-25a336a6961280f59f63dd1fbca26a4f?source=copy_link",
        view: "https://blossom-lavender-c87.notion.site/spring-boot-basic-25a336a6961280f59f63dd1fbca26a4f?source=copy_link",
        name: "Spring Boot 핵심원리",
    },    
    {
        num: "06",
        title: "mvc 프레임워크는 내 손에",
        desc: "Spring Framework의 핵심 아키텍처와 구조를 심도 있게 탐구한 종합적인 학습 프로젝트입니다. Model-View-Controller 패턴의 완벽한 이해를 바탕으로 의존성 주입(DI), 제어의 역전(IoC), 관점지향 프로그래밍(AOP)의 개념을 실무 수준에서 활용할 수 있게 되었습니다. @Controller, @Service, @Repository 어노테이션 기반의 계층 구조 설계를 통해 엔터프라이즈급 웹 애플리케이션 개발 방식을 체계적으로 학습했습니다.",
        img: springFramework,
        code: "https://blossom-lavender-c87.notion.site/mvc-25a336a6961280acb661c00cc7a10183?source=copy_link",
        view: "https://blossom-lavender-c87.notion.site/mvc-25a336a6961280acb661c00cc7a10183?source=copy_link",
        name: "Spring MVC Framework",
    }
];

export const aiProjectText = [
  {
    num: "01",
    title: "Hyundai AI Worker",
    subtitle: "현대 프로젝트 AI 이미지 변환 서버리스 워커",
    desc: "현대 프로젝트용 AI 이미지 변환 서버리스 워커입니다. RunPod GPU 환경에서 ComfyUI 기반 7가지 워크플로우를 실행하여 랜드마크 애니메이션/실사, 포스터, 부적풍 애니메이션/실사, 타임머신(과거/미래) 등 다양한 스타일 변환을 처리합니다. Flux 1 Dev + PuLID 얼굴 보존, BiRefNet 배경 제거 등 최신 AI 모델을 조합하며, 비동기 WebSocket 통신과 자동 재연결, 지수 백오프 재시도 로직으로 안정적인 서비스를 제공합니다.",
    techStack: ["Python", "RunPod", "ComfyUI", "Flux Dev", "PuLID", "BiRefNet", "Docker", "WebSocket", "aiohttp", "ONNX"],
    category: "Serverless / GPU Worker",
    features: [
      "7가지 워크플로우 (랜드마크/포스터/부적/타임머신)",
      "Flux 1 Dev FP8 양자화 모델 최적화",
      "PuLID 얼굴 아이덴티티 보존",
      "WebSocket 자동 재연결 + 지수 백오프 재시도",
      "Docker 모델 프리로딩 원클릭 배포"
    ],
    architecture: "RunPod Handler → ComfyUI Engine + CUDA GPU → Cloud Storage",
    color: "#30cfd0",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
  },
  {
    num: "02",
    title: "Starfield Worker",
    subtitle: "RunPod 서버리스 AI 이미지 변환 워커",
    desc: "RunPod GPU 서버리스 환경에서 동작하는 AI 이미지 스타일 변환 워커입니다. ComfyUI와 Flux Kontext 모델 기반으로 2D(지브리), 3D, 픽셀아트, 실사, 포토카드 5가지 스타일 변환을 처리합니다. 비동기 WebSocket 통신으로 ComfyUI 워크플로우를 실행하고, Supabase 스토리지와 Presigned URL을 통한 안전한 이미지 업/다운로드를 지원합니다. Docker 기반 컨테이너화로 모델과 커스텀 노드를 포함한 원클릭 배포가 가능합니다.",
    techStack: ["Python", "RunPod", "ComfyUI", "Flux Kontext", "Docker", "aiohttp", "WebSocket", "Supabase", "ONNX", "PuLID"],
    category: "Serverless / GPU Worker",
    features: [
      "5가지 스타일 변환 (2D/3D/Pixel/Real/Photocard)",
      "RunPod Serverless GPU 인프라",
      "WebSocket 기반 ComfyUI 워크플로우 실행",
      "Presigned URL 클라우드 스토리지 연동",
      "BiRefNet 배경 제거 + PuLID 얼굴 보존"
    ],
    architecture: "RunPod Handler → ComfyUI + CUDA GPU → Supabase Storage",
    color: "#a18cd1",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
  },
  {
    num: "03",
    title: "Local AI Photo Booth",
    subtitle: "오프라인 AI 포토부스 키오스크",
    desc: "Flux Kontext와 ComfyUI를 활용한 로컬 환경 AI 포토부스 키오스크 시스템입니다. 2D, 3D, 픽셀, 실사, 포토카드 5가지 스타일 변환을 지원하며, NVIDIA CUDA GPU 가속으로 로컬에서 고속 처리합니다. Docker Compose 기반 원클릭 배포와 React 터치 최적화 UI를 통해 현장 설치형 키오스크로 운영됩니다.",
    techStack: ["FastAPI", "React", "TypeScript", "Vite", "TailwindCSS", "ComfyUI", "Flux Kontext", "Docker", "NVIDIA CUDA"],
    category: "Full Stack / AI Kiosk",
    features: [
      "5가지 스타일 변환 (2D/3D/Pixel/Real/Photocard)",
      "Flux Kontext + Ghibli LoRA 모델",
      "BiRefNet 배경 제거",
      "Docker Compose 원클릭 배포",
      "GPU Lock 기반 동시성 제어"
    ],
    architecture: "React Kiosk UI → FastAPI → ComfyUI + CUDA GPU",
    color: "#43e97b",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
  },
  {
    num: "04",
    title: "Loop",
    subtitle: "MP3→MP4 AI 뮤직비디오 생성 서비스",
    desc: "음악 파일(MP3)을 입력하면 AI가 자동으로 뮤직비디오(MP4)를 생성하는 서비스입니다. FastAPI 기반 Fire-and-Forget 비동기 API로 설계되어, ComfyUI와 PyTorch를 활용한 AI 이미지 생성 후 FFmpeg로 영상을 합성합니다. Supabase를 통한 작업 상태 추적과 JWT 인증, Cloudflare Tunnel을 통한 안전한 외부 접근을 제공합니다.",
    techStack: ["FastAPI", "Python", "PyTorch", "ComfyUI", "FFmpeg", "Supabase", "Docker", "NVIDIA GPU", "Cloudflare Tunnel", "JWT"],
    category: "Backend / AI Media",
    features: [
      "Fire-and-Forget 비동기 처리 패턴",
      "ComfyUI + PyTorch AI 이미지 생성",
      "FFmpeg 영상 합성 파이프라인",
      "JWT/bcrypt 인증 시스템",
      "Cloudflare Tunnel 보안 터널링"
    ],
    architecture: "Vercel Frontend → FastAPI → ComfyUI + GPU → Supabase",
    color: "#fa709a",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  },
  {
    num: "05",
    title: "AI Photo Studio",
    subtitle: "GPT-4 Vision 기반 AI 사진 변환 백엔드",
    desc: "OpenAI GPT-4 Vision(gpt-image-1)을 활용한 AI 사진 스타일 변환 백엔드 서비스입니다. 지브리풍, 크레파스화, 픽사풍, 유화풍 등 4가지 아트 스타일로 사진을 변환하며, 프레임 합성과 Supabase 스토리지를 통한 이미지 관리를 제공합니다. Vercel 서버리스로 배포되어 안정적인 API 서비스를 제공합니다.",
    techStack: ["FastAPI", "Python", "OpenAI GPT-4 Vision", "Supabase", "Pillow", "httpx", "Vercel"],
    category: "Backend API / AI",
    features: [
      "4가지 아트 스타일 변환 (지브리/크레파스/픽사/유화)",
      "프레임 합성 시스템",
      "Supabase PostgreSQL + Storage 연동",
      "비동기 HTTP 클라이언트 (httpx)",
      "Vercel 서버리스 배포"
    ],
    architecture: "FastAPI Server → OpenAI API → Supabase Storage",
    color: "#f093fb",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    num: "06",
    title: "DUYO",
    subtitle: "AI 이미지 생성 플랫폼 (웹툰/지브리/치비/일본애니)",
    desc: "ComfyUI와 FLUX.1-dev 모델을 활용한 AI 이미지 생성 플랫폼입니다. 웹툰풍, 지브리풍, 치비풍, 일본애니풍 4가지 아트 스타일을 지원하며, RunPod GPU 서버리스를 통해 고성능 이미지 생성을 제공합니다. Node.js/Express 서버와 Python ComfyUI 워커의 2-Tier 아키텍처로 안정적인 서비스를 구현했습니다.",
    techStack: ["Node.js", "TypeScript", "Express", "Python", "ComfyUI", "FLUX.1-dev", "RunPod", "Supabase", "OpenAI GPT-4"],
    category: "Full Stack / AI Platform",
    features: [
      "FLUX.1-dev + IPAdapter 이미지 생성",
      "4가지 아트 스타일 워크플로우",
      "RunPod GPU Serverless 인프라",
      "GPT-4 기반 프롬프트 최적화",
      "Supabase 실시간 상태 추적"
    ],
    architecture: "Express API → RunPod GPU → ComfyUI Worker → Supabase",
    color: "#4facfe",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
  {
    num: "07",
    title: "명함서비스 자동화",
    subtitle: "N8N + AI Agent 기반 Slack 명함 관리 시스템",
    desc: "N8N 워크플로우 자동화와 OpenAI Agent를 결합한 Slack 기반 명함 관리 시스템입니다. Slack 멘션으로 자연어 명령을 입력하면 AI Router Agent가 의도를 분석하여 명함 검색, 이메일 초안 작성, 연락처 조회 등을 자동 처리합니다. Google Sheets 4개 시트에서 담당자별 명함 데이터를 관리하며, 키워드·직책·연락처 기반 고급 검색과 Gmail 연동 메일 발송을 지원합니다. 46개 노드로 구성된 프로덕션 운영 워크플로우입니다.",
    techStack: ["N8N", "OpenAI GPT", "Slack API", "Google Sheets", "Gmail", "LangChain", "JavaScript"],
    category: "Automation / AI Agent",
    features: [
      "AI Router Agent 자연어 의도 분석 및 라우팅",
      "Google Sheets 4시트 명함 데이터 통합 검색",
      "키워드·직책·연락처 기반 고급 검색 엔진",
      "Gmail 연동 이메일 초안 자동 생성",
      "Slack Block Kit 포맷 응답 + 대화 메모리"
    ],
    architecture: "Slack Trigger → AI Router Agent → Google Sheets / Gmail → Slack Response",
    color: "#ff6348",
    gradient: "linear-gradient(135deg, #ff6348 0%, #fe4880 100%)"
  },
  {
    num: "08",
    title: "AI 비서봇",
    subtitle: "Slack + OpenClaw + OpenAI 기반 멀티 기능 AI 비서",
    desc: "Slack 채팅 인터페이스에서 동작하는 AI 비서봇입니다. OpenClaw를 통해 OpenAI 언어모델을 연동하여 자연어 대화를 처리하고, Nanobana API로 이미지 자동 생성, 날씨 API 연동 실시간 기상 정보 제공, LLM 기반 질의응답 등 다양한 기능을 통합했습니다. Slack에서 채팅 한 줄로 이미지 생성, 날씨 조회, 일반 대화까지 처리하는 올인원 AI 비서 시스템입니다.",
    techStack: ["Slack API", "OpenClaw", "OpenAI GPT", "Nanobana API", "Weather API", "N8N", "LangChain"],
    category: "Automation / AI Chatbot",
    features: [
      "OpenClaw + OpenAI LLM 자연어 대화 처리",
      "Nanobana API 이미지 자동 생성 및 Slack 전송",
      "실시간 날씨 API 연동 기상 정보 제공",
      "멀티 기능 라우팅 (대화/이미지/날씨/검색)",
      "Slack 채팅 기반 원스톱 AI 비서 인터페이스"
    ],
    architecture: "Slack Chat → OpenClaw → OpenAI / Nanobana / Weather API → Slack Response",
    color: "#7c5ce9",
    gradient: "linear-gradient(135deg, #7c5ce9 0%, #a29bfe 100%)"
  }
];

export const contactText = [
  { link: "https://github.com/219Log", title: "GitHub : https://github.com/219Log " },
  { link: "/file/경력_기술_및_이력서_이한규.pdf", title: "경력 기술서 : 다운로드", download: true }
];

export const footerText = [
  { title: "youtube", desc: "유튜브에 오시면 더 많은 강의를 볼 수 있습니다.", link: "https://www.youtube.com/@Webstoryboy" },
  { title: "github", desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.", link: "https://github.com/webstoryboy" },
  { title: "blog", desc: "블러그에 오시면 더 많은 정보를 볼 수 있습니다.", link: "https://webstoryboy.co.kr" },
  { title: "gsap", desc: "GSAP에 오시면 더 많은 강의를 볼 수 있습니다.", link: "https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq" },
  { title: "react", desc: "리액트로 만든 사이트를 같이 만들어 봅니다.", link: "https://github.com/webstoryboy/port2023-react" },
  { title: "vue", desc: "뷰로 만든 사이트를 같이 만들어 봅니다.", link: "https://github.com/webstoryboy/port2023-vue" },
  { title: "next", desc: "넥스트로 만든 사이트를 같이 만들어 봅니다.", link: "https://github.com/webstoryboy/port2023-next" },
];

// (선택) default export
export default { headerNav, introText, skillCerts, skillSummary, skillTechStack, skillExperience, siteText, portText, aiProjectText, contactText, footerText };