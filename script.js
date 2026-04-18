document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeAttribute('target');
        link.removeAttribute('rel');
    });
    const projectData = {
        "tapeai": {
            title: "TapeAI",
            tags: ["Solo", "AI Tooling"],
            image: null,
            imageWrapClass: "h-40",
            imageClass: "object-cover",
            description: `
                <p><strong>로컬 모델 기반 터미널 AI 에이전트</strong></p>
                <p>코드 유출 없이 로컬 모델을 활용해 작업하고, 세션 학습과 백엔드 failover까지 고려한 CLI 에이전트입니다.</p>
                <p><strong>기술 스택:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Runtime:</strong> Python 3</li>
                    <li><strong>Model Backend:</strong> Ollama, OpenAI-compatible local servers</li>
                    <li><strong>Mode:</strong> REPL, Headless, Coordinator</li>
                </ul>
                <p><strong>주요 기능:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>자동 세션 요약 및 장기 메모리 반영</li>
                    <li>다중 백엔드 전환 및 자동 failover</li>
                    <li>권한 모드와 작업 컨텍스트 수집 자동화</li>
                </ul>
            `,
            github: "https://github.com/HwangJeongSeong/TapeAI",
            docs: null,
            demo: null
        },
        "beanspot": {
            title: "BeanSpot",
            tags: ["Team", "Review Platform"],
            image: "https://github.com/user-attachments/assets/d6d52441-a29b-4aaa-9c51-f68c3b26e7d5",
            imageWrapClass: "h-40",
            imageClass: "object-cover",
            description: `
                <p><strong>상황·취향 맞춤 카페 탐색 및 리뷰 플랫폼</strong></p>
                <p>카페 검색과 상세 정보, 위치 인증 리뷰, 북마크와 좋아요 흐름을 엮은 SSR 기반 서비스입니다.</p>
                <p><strong>기술 스택:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Backend:</strong> Spring Boot 3.3, Spring Security, JPA, WebFlux</li>
                    <li><strong>Frontend:</strong> Thymeleaf, HTML/CSS, JavaScript</li>
                    <li><strong>DB/API:</strong> MariaDB, Google Place API, Kakao Map API</li>
                </ul>
                <p><strong>담당한 영역:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>리뷰 CRUD 및 이미지 업로드</li>
                    <li>위치 인증 기반 리뷰 작성 흐름</li>
                    <li>리뷰 좋아요, 정렬, 필터 보정</li>
                </ul>
            `,
            github: "https://github.com/HwangJeongSeong/Cafe-Persona-Project",
            docs: null,
            demo: "https://www.youtube.com/watch?v=nvzq5ZW2wJI"
        },
        "brin-mall": {
            title: "Brin Mall",
            tags: ["Solo", "E-commerce"],
            image: null,
            imageWrapClass: "h-40",
            imageClass: "object-cover",
            description: `
                <p><strong>레거시 PHP 스타일로 구현한 쇼핑몰 데모</strong></p>
                <p>PHP 5.6 문법과 MVC 구조를 유지하면서도, 상품 목록부터 장바구니·주문·관리자 기능까지 실행 가능한 형태로 구성한 프로젝트입니다.</p>
                <p><strong>기술 스택:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Backend:</strong> PHP 5.6, mysqli, MVC</li>
                    <li><strong>Frontend:</strong> HTML, CSS, jQuery</li>
                    <li><strong>Infra:</strong> Apache, MySQL 8.0, Docker Compose</li>
                </ul>
                <p><strong>주요 기능:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>상품 목록, 검색, 상세 페이지</li>
                    <li>세션 기반 장바구니와 주문 내역 조회</li>
                    <li>관리자 상품 등록, 수정, 삭제</li>
                    <li>CSRF 방어, 로그인 시도 제한, 세션 강화</li>
                </ul>
            `,
            github: "https://github.com/HwangJeongSeong/PHP_Brin_mall",
            docs: null,
            demo: null
        },
        "shiftjb": {
            title: "shiftJB",
            tags: ["Fullstack", "Monorepo"],
            image: null,
            imageWrapClass: "h-40",
            imageClass: "object-cover",
            description: `
                <p><strong>근무 기록과 승인 프로세스를 담은 모노레포 프로젝트</strong></p>
                <p>백엔드 API, 관리자 웹, 모바일 앱을 한 저장소에서 관리하며 출퇴근 기록과 관리자 승인 흐름을 다루는 서비스입니다.</p>
                <p><strong>구성:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>backend/</strong> Spring Boot, Gradle, Java 21</li>
                    <li><strong>admin-web/</strong> Next.js App Router, TypeScript</li>
                    <li><strong>mobile-app/</strong> Expo, TypeScript</li>
                </ul>
                <p><strong>주요 기능:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>회원가입 후 관리자 승인 기반 로그인 흐름</li>
                    <li>출근, 퇴근, 진행 중 근무 조회 API</li>
                    <li>관리자 근무 기록 수정과 승인 관리 화면</li>
                </ul>
            `,
            github: "https://github.com/HwangJeongSeong/shiftJB",
            docs: null,
            demo: null
        }
    };
    const modal = document.getElementById('projectModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalContent = document.getElementById('modalContent');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTags = document.getElementById('modalTags');
    const modalGithub = document.getElementById('modalGithub');
    const modalDocs = document.getElementById('modalDocs');
    const modalDemo = document.getElementById('modalDemo');
    const modalImage = document.getElementById('modalImage');
    const modalImageWrap = document.getElementById('modalImageWrap');

    function openModal(projectId) {
        const data = projectData[projectId];
        if (!data) return;
        modalTitle.textContent = data.title;
        modalDescription.innerHTML = data.description;
        modalTags.innerHTML = data.tags.map(tag =>
            `<span class="px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-400 text-xs font-semibold uppercase tracking-wide">${tag}</span>`
        ).join('');
        updateModalImage(data.image, data.title, data.imageWrapClass, data.imageClass);
        updateLinkButton(modalGithub, data.github);
        updateLinkButton(modalDocs, data.docs);
        updateLinkButton(modalDemo, data.demo);
        modal.classList.remove('hidden');
        setTimeout(() => {
            modalBackdrop.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 10);

        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalBackdrop.classList.add('opacity-0');
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300); // Match transition duration
    }

    function updateLinkButton(element, url) {
        if (url) {
            element.href = url;
            element.classList.remove('hidden');
            element.classList.add('flex');
            element.style.display = 'flex';
        } else {
            element.classList.add('hidden');
            element.classList.remove('flex');
            element.style.display = 'none';
        }
    }

    function updateModalImage(url, title, wrapClass, imageClass) {
        if (!modalImage) return;
        if (url) {
            modalImage.src = url;
            modalImage.alt = `${title} preview`;
            modalImage.className = `w-full h-full ${imageClass || 'object-cover'}`
            modalImage.classList.remove('hidden');
            if (modalImageWrap) {
                const baseWrap = 'bg-gradient-to-r from-zinc-800 to-zinc-900 overflow-hidden';
                modalImageWrap.className = `${wrapClass || 'h-40'} ${baseWrap}`.trim();
            }
        } else {
            modalImage.src = '';
            modalImage.alt = '';
            modalImage.classList.add('hidden');
        }
    }
    document.querySelectorAll('article[data-project]').forEach(card => {
        card.addEventListener('click', () => {
            openModal(card.dataset.project);
        });
    });

    closeModalBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
    const navBtn = document.getElementById('navBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuLinks = mobileMenu.querySelectorAll('a');

    function openMenu() {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeMenu() {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
    }

    if (navBtn) navBtn.addEventListener('click', openMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
