import port0 from "../assets/img/port0.jpg";

export const headerNav = [
  { title: "home", url: "#intro" },
  { title: "skills", url: "#skill" },
  { title: "projects", url: "#site" },
  { title: "portfolio", url: "#port" },
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
    title: "비트를 이용한 사이트 제작",
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
    title: "공공기관 R&D 정보포털 시스템",
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
    title: "뷰를 이용한 사이트 제작",
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
    title: "넥스트를 이용한 사이트 제작",
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
    title: "GENIE - 신재생에너지 전문 시스템",
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
        title: "어워드에도 올라간 포트폴리오",
        desc: "라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오입니다. 가로 모드와 세로 모드는 매우 인상적이며 특히 리액트와 비트를 이용하여 제작한 것은 더욱 놀랍습니다. 이 사이트는 awwwards.com에도 인정받아 올라간 포트폴리오입니다. 확실히 그의 뛰어난 디자인 스킬과 기술력이 빛을 발휘한 결과물인 것 같습니다.",
        img: port0,
        code: "https://github.com/kimsangjunv1/-React-Portfolio",
        view: "https://portfoliosj-react.netlify.app",
        name: "김상* 포트폴리오",
    },
    {
        num: "02",
        title: "빛나는 밤에 포트폴리오",
        desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
        img: port0,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://portfolio-313.web.app/",
        name: "천설* 포트폴리오",
    },
    {
        num: "03",
        title: "열정이 넘치는 포트폴리오",
        desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
        img: port0,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://portfolio-313.web.app/",
        name: "천설* 포트폴리오",
    },
    {
        num: "04",
        title: "모던한 포트폴리오",
        desc: "블랙 컨셉과 애니메이션이 돋보이는 포트폴리오 사이트입니다. GSAP를 통한 애니메이션과 NEXT.js를 통해 제작된 포트폴리오입니다. pin 애니메이션을 통한 포폴 작업물의 표현 능력이 돋보이는 사이트입니다.",
        img: port0,
        code: "https://github.com/dlgnsrb227/portfolio-next",
        view: "https://hoongportfolio-next.netlify.app/",
        name: "이훈* 포트폴리오",
    },
    {
        num: "05",
        title: "가로모드의 정석 포트폴리오",
        desc: "이 포트폴리오는 가로모드를 통해 눈에 띄는 애니메이션 효과를 가진 멋진 작품들이 펼쳐집니다. 세션 간의 부드러운 전환과 흥미로운 움직임이 사용자들에게 색다른 경험을 선사합니다. 사이트에는 탁월한 디자인과 창의적인 애니메이션들이 어우러져, 사용자들에게 인상적인 시각적인 효과를 줍니다. 애니메이션은 적절히 사용되어 사이트를 더욱 생동감 있게 만들어주는 포트폴리오입니다.",
        img: port0,
        code: "/",
        view: "https://junseungpark.github.io/portfolio/index3.html",
        name: "박준* 포트폴리오",
    },
    {
        num: "06",
        title: "화려함의 정석 포트폴리오",
        desc: "화려하고 세련된 디자인과 다채로운 색상이 사용된 포트폴리오는 사용자를 홀릴 듯한 시각적인 매력을 지니고 있습니다. 포트폴리오 내의 각 작품들은 디테일한 디자인과 탁월한 시각적 표현력을 갖추고 있어, 주인공의 뛰어난 예술적 감각을 느낄 수 있습니다. 화려한 애니메이션 효과와 부드러운 전환은 사이트를 더욱 생동감 있게 만들어주며, 사용자들에게 색다른 경험을 선사합니다.",
        img: port0,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/DavidYang/index.html",
        name: "포트폴리오",
    },
    {
        num: "07",
        title: "패럴랙스 정석 포트폴리오",
        desc: "마치 예술작품을 감상하는 듯한 환상적인 경험을 선사하는 포트폴리오입니다. 패럴랙스 스크롤링을 활용하여 구성된 사이트는 사용자들에게 독특하고 멋진 시각적 효과를 제공합니다. 배경과 움직이는 요소들이 조화롭게 어우러져, 사이트 전반에 걸쳐 깊이와 입체감을 느낄 수 있습니다. 스크롤에 따라 움직이는 요소들은 마치 세계를 탐험하는 듯한 느낌을 주며, 사용자들을 끌어들이는 매력적인 요소로 작용합니다.",
        img: port0,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/TaeyongLee/index.html",
        name: "포트폴리오",
    },
    {
        num: "08",
        title: "트랜지션 포트폴리오",
        desc: "화면 전환과 요소들의 흐름이 순조롭고 매끄러운 작품들로 가득한 포트폴리오 사이트입니다. 페이지 간의 트랜지션은 마치 이야기를 풀어내는 듯한 흥미진진한 경험을 선사합니다. 트랜지션 효과의 적절한 활용은 작품들을 보다 동적이고 생동감 있게 만들어줍니다. 각 페이지의 이동이 자연스럽고 사용자들이 원활하게 사이트를 탐색할 수 있도록 배려된 구성은 개발자의 디자인 능력을 잘 보여주는 특징입니다.",
        img: port0,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/HyunroKim/index.html",
        name: "포트폴리오",
    },
    {
        num: "09",
        title: "스크롤의 정석 포트폴리오",
        desc: "스크롤링을 활용하여 훌륭한 사용자 경험을 선사하는 포트폴리오 사이트입니다. 스크롤을 내리면서 작품들이 순차적으로 나타나고 효과적으로 전환되는 것은 마치 예술적인 이야기를 읽어나가는 듯한 느낌을 주며 사용자를 매료시킵니다. 스크롤의 움직임을 통해 작품들이 서서히 드러나고, 각 페이지 간의 전환은 자연스럽고 부드럽습니다. 이러한 트랜지션과 애니메이션들이 작품들의 내용과 테마를 더욱 강조해줍니다.",
        img: port0,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/ChoJaeHyung/index.html",
        name: "포트폴리오",
    },
    {
        num: "10",
        title: "모던함의 정석 포트폴리오",
        desc: "현대적이고 세련된 디자인으로 가득한 포트폴리오 사이트입니다. 모던한 느낌과 세심한 디테일이 조화를 이루며, 사용자에게 신선하고 품격 있는 경험을 제공합니다. 사이트의 디자인은 깔끔하고 단정하면서도 특유의 감성과 풍부한 표현력이 느껴집니다. 간결한 레이아웃과 모던한 색상 선택은 주인공의 디자인 감각을 잘 보여주는 특징입니다.",
        img: port0,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/JooHyeji/index.html",
        name: "포트폴리오",
    }
];

export const contactText = [
  { link: "https://github.com/username", title: "GitHub : /username" },
  { link: "mailto:developer@email.com", title: "Email : developer@email.com" },
  { link: "https://linkedin.com/in/username", title: "LinkedIn : /in/username" },
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