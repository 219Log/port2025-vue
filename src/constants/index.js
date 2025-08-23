import port0 from "../assets/img/study/port0.jpg";
import iot1 from "../assets/img/study/iot_1.png";
import aws from "../assets/img/study/aws.png";
import javaScript from "../assets/img/study/javaScript.png";
import springBoot from "../assets/img/study/springBoot.png";
import springFramework from "../assets/img/study/springFramework.png";
import vue from "../assets/img/study/vue.png";

export const headerNav = [
  { title: "home", url: "#intro" },
  { title: "skills", url: "#skill" },
  { title: "projects", url: "#site" },
  { title: "study", url: "#port" },
  { title: "contact", url: "#contact" },
];

export const introText = {
  title: "Full Stack Developer",
  desc: ["Frontend & Backend", "Modern Web Solutions", "Innovation Through Code"],
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
    •Client-Side : Vue.js
    •Database : MySQL, H2, MongoDB
    •Server : Linux, AWS_EC2
    ||
    ||

    필요 스킬
    • Server-Side : Spring Framework
    • Client-Side : Vue.js
    •  Version Control : GitHub, Notion
    •  Server : Linux, AWS_EC2, AWS_S3
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
    text: ["make", "site compliant with", "webstandard"],
    title: "한국과학창의재단 - <br>(차세대)Internal Project Management System",
    code: "https://github.com/webstoryboy/port2023-vite",
    view: "https://port2023-vite.netlify.app",
    info: [
      "site coding",
      "production period : two days",
      "use stack : HTML5/CSS3, CSS Variable, Vite",
    ],
  },
  {
    text: ["Public", "R&D Information", "Portal System"],
    title: "한국과학창의재단 - <br>(차세대)External Project Management System",
    code: "https://github.com/project/rd-portal",
    view: "https://rd-portal-demo.com",
    info: [
      "Government Project",
      "Development Period : 6 months",
      "Tech Stack : Java, Spring, Oracle, JSP",
    ],
  },
  {
    text: ["make", "site compliant with", "vue.js"],
    title: "한국과학창의재단<br>(차세대)온라인 접수 시스템",
    code: "https://github.com/webstoryboy/port2023-vue",
    view: "https://port2023-vue.netlify.app",
    info: [
      "site coding",
      "production period : two days",
      "use stack : HTML5/CSS3, Scss Variable, vue",
    ],
  },
  {
    text: ["make", "site compliant with", "next.js"],
    title: "한국에너지기술평가원<br>(유지보수)연구과제 중복방지 시스템",
    code: "https://github.com/webstoryboy/port2023-next",
    view: "https://port2023-next.netlify.app",
    info: [
      "site coding",
      "production period : two days",
      "use stack : HTML5/CSS3, Scss Variable, next.js",
    ],
  },
  {
    text: ["Green Energy", "New Innovative", "Expert"],
    title: "한국에너지기술평가원<br>(고도화,유지보수)Project Management System",
    code: "https://github.com/project/genie-system",
    view: "https://genie-energy.com",
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
        title: "어워드에도 올라간 학습 사이트",
        desc: "라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오입니다. 가로 모드와 세로 모드는 매우 인상적이며 특히 리액트와 비트를 이용하여 제작한 것은 더욱 놀랍습니다. 이 사이트는 awwwards.com에도 인정받아 올라간 포트폴리오입니다. 확실히 그의 뛰어난 디자인 스킬과 기술력이 빛을 발휘한 결과물인 것 같습니다.",
        img: iot1,
        code: "https://github.com/kimsangjunv1/-React-Portfolio",
        view: "https://portfoliosj-react.netlify.app",
        name: "김상* 포트폴리오",
    },
    {
        num: "02",
        title: "빛나는 밤에 학습 사이트",
        desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
        img: aws,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://portfolio-313.web.app/",
        name: "천설* 포트폴리오",
    },
    {
        num: "03",
        title: "열정이 넘치는 학습 사이트",
        desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
        img: javaScript,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://portfolio-313.web.app/",
        name: "천설* 포트폴리오",
    },
    {
        num: "04",
        title: "Vue.js 학습 사이트",
        desc: "Vue.js 프레임워크를 활용한 모던한 웹 개발 학습 사이트입니다. 컴포넌트 기반 개발과 반응형 데이터 바인딩을 통해 효율적인 사용자 인터페이스를 구현합니다. Vue의 간결한 문법과 직관적인 구조로 빠른 개발이 가능합니다.",
        img: vue,
        code: "https://github.com/dlgnsrb227/portfolio-next",
        view: "https://hoongportfolio-next.netlify.app/",
        name: "Vue.js 학습",
    },
    {
        num: "05",
        title: "Spring Boot 학습 사이트",
        desc: "Spring Boot 프레임워크를 활용한 백엔드 개발 학습 사이트입니다. 자동 설정과 내장 서버를 통해 빠른 개발 환경을 구축하고, RESTful API와 데이터베이스 연동을 효율적으로 구현합니다.",
        img: springBoot,
        code: "/",
        view: "https://junseungpark.github.io/portfolio/index3.html",
        name: "Spring Boot 학습",
    },    
    {
        num: "06",
        title: "Spring Framework 학습 사이트",
        desc: "Spring Framework를 활용한 엔터프라이즈급 웹 애플리케이션 개발 학습 사이트입니다. 의존성 주입, AOP, MVC 패턴을 통해 유지보수성과 확장성이 뛰어난 애플리케이션을 구축합니다.",
        img: springFramework,
        code: "/",
        view: "https://junseungpark.github.io/portfolio/index3.html",
        name: "Spring Framework 학습",
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