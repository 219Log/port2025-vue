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
  { title: "Site coding", url: "#site" },
  { title: "study", url: "#port" },
  { title: "Contact", url: "#contact" },
];

export const introText = {
  title: "Full Stack Developer",
  desc: ["Vue Project", "Portfolio"],
};

export const skillText = [
  {
    title: "역량.",
    desc: `
    자격증 
    • 정보처리기사 - 2024.06.18
    • SQLD - 2024.06.21
    • 리눅스 마스터 2급 - 2025.03.28
    • 운전면허 1종 보통 - 2016.03.16
    • 컴퓨터활용능력 2급 - 2019.03.16

    요약
    • 공공기관 대상 시스템 개발 및 유지보수 3년이상
    • 보안 취약점 대응 (세션, 로그인 등) 실무 경험
    • 전자문서/결재/출력 등 공공업무 자동화 구현 경험
    • Oracle, Tibero 기반 DB 연동 및 성능 개선 다수 경험
    • Linux 기반 온프레미스 서버 운용 실무 경험 보유
    • SMS/Email 알림 연동 (Ncloud SMS API + JavaMail)
    `
  },
  {
    title: "Skill.",
    desc: `
    현업스킬
    • Server-Side : Java, Spring Framework (MVC, REST, Scheduler), MyBatis, iBatis, JSP
    • Client-Side : JavaScript, HTML, CSS, jQuery, Nexacro, MiPlatform, AJAX
    • Database : Oracle, Tibero, SQL
    • Server : Linux, Ncloud, AWS S3 (파일 저장), JEUS
    • Version Control : Git, SVN, Redmine, Notion
    
    학습 스킬 
    •Server-Side : java, spring boot, JPA, ORM, Node.js, mosquitto, Arduino(C++)
    •Database : MySQL, H2, MongoDB
    •Server : Linux, AWS_EC2
    ` },
  {
    title: "개발 및 업무 영역",
    desc: `

    <h4>사업관리 차세대 개발</h4>
    &nbsp;• 시스템 프로세스별 페이지 개발
    &nbsp;• 문서 출력 관리 시스템 개발
    &nbsp;• 개인정보 KMS암호화 적용
    &nbsp;• 상용 소프트웨어 연동
        &nbsp;&nbsp;&nbsp; ◦ 나모에디터 : 웹에디터(텍스트편집, 다운로드)
        &nbsp;&nbsp;&nbsp; ◦ OZ e-Form : 전자결재 승인
        &nbsp;&nbsp;&nbsp; ◦ 인투뷰어 : 전자결재파일 및 목록 PDF 변환
        &nbsp;&nbsp;&nbsp; ◦ 네이버 클라우드 SMS 서비스
        &nbsp;&nbsp;&nbsp; ◦ AWS S3 : 서버 내에 첨부파일 다운로드

    <h4>사업관리 성과정보 시스템 유지보수, 고도화 및 차세대</h4>
    &nbsp;• 클라이언트 요구사항 처리
        &nbsp;&nbsp;&nbsp; ◦ 검색속도 향상, 통계페이지 설계 및 배포, 공문발송시스템 개발
        &nbsp;&nbsp;&nbsp; ◦ 기존 시스템 정부 정책에 따른 시스템 적용 개발
    &nbsp;• 기존 연구자료데이터를 쿼리를 통해 통계 및 연구자료 데이터 제공
        &nbsp;&nbsp;&nbsp; ◦ 사업비 통계 데이터, 연구사업 통계, 분류, 정제 요청데이터
        &nbsp;&nbsp;&nbsp; ◦ 전문가 인력관리 데이터, 부서별, 사업별 접근권한 관리

    <h4>에너지공기업 성과정보 시스템 유지보수, 고도화</h4>
    &nbsp;• 취약점 분석 내역 처리
        &nbsp;&nbsp;&nbsp; ◦ 불충분한 세션만료, 중복로그인, 재전송공격, SQL Injection, XSS
        &nbsp;&nbsp;&nbsp; ◦ 파일다운로드경로 보안, 파일업로드 취약점 대응, 민감정보 암호화 저장
    &nbsp;• 장소 대여 시스템 기능개발
    &nbsp;• 공기업 연구과제 중복방지 시스템개발
    &nbsp;• 웹에디터 사용소프트웨어로 리팩토링`
  },
];

export const siteText = [
  {
    text: ["Public", "R&D Information", "Portal System"],
    title: "한국과학창의재단 - <br>(차세대)External Project Management System",
    code: "https://blossom-lavender-c87.notion.site/External-Project-Management-System-25a336a69612807cba4af74131428972?source=copy_link",
    view: "https://pmsnew.kosac.re.kr/index.do",
    info: [
      "Government Project",
      "Development Period : 6 months",
      "Tech Stack : Java, Spring, Oracle, JSP",
    ],
  },
  {
    text: ["make", "site compliant with", "webstandard"],
    title: "한국과학창의재단 - <br>(차세대)Internal Project Management System",
    code: "https://blossom-lavender-c87.notion.site/Internal-Project-Management-System-25a336a69612804db30ed8d566361a9a?source=copy_link",
    view: "https://port2023-vite.netlify.app",
    info: [
      "site coding",
      "production period : two days",
      "use stack : HTML5/CSS3, CSS Variable, Vite",
    ],
  },
  {
    text: ["make", "site compliant with", "vue.js"],
    title: "한국과학창의재단<br>(차세대)온라인 접수 시스템",
    code: "https://blossom-lavender-c87.notion.site/25a336a6961280c09ecace45657d5cb1?source=copy_link",
    view: "https://apply.kosac.re.kr/index.do",
    info: [
      "site coding",
      "production period : two days",
      "use stack : HTML5/CSS3, Scss Variable, vue",
    ],
  },
  {
    text: ["make", "site compliant with", "next.js"],
    title: "한국에너지기술평가원<br>(유지보수)연구과제 중복방지 시스템",
    code: "https://blossom-lavender-c87.notion.site/25a336a6961280c49edad74cab3dbebd?source=copy_link",
    view: "https://rispec.kr/",
    info: [
      "site coding",
      "production period : two days",
      "use stack : HTML5/CSS3, Scss Variable, next.js",
    ],
  },
  {
    text: ["Green Energy", "New Innovative", "Expert"],
    title: "한국에너지기술평가원<br>(고도화,유지보수)Project Management System",
    code: "https://blossom-lavender-c87.notion.site/Project-Management-System-25a336a6961280e5b7aff6d9d0601ea3?source=copy_link",
    view: "https://genie.ketep.re.kr/",
    info: [
      "Energy System",
      "Development Period : 8 months",
      "Tech Stack : Java, Spring Boot, MySQL, Vue.js",
    ],
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
export default { headerNav, introText, skillText, siteText, portText, contactText, footerText };