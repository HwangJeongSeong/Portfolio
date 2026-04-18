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
        "trip-in-jeju": {
            title: "Trip In Jeju",
            tags: ["Team", "Fullstack"],
            image: "https://github.com/user-attachments/assets/1c871a74-31f9-498a-9bdf-0fda3adf97d4",
            imageWrapClass: "h-48",
            imageClass: "object-cover",
            description: `
                <p><strong>제주 여행 추천 및 일정 관리 플랫폼</strong></p>
                <p>추천 장소, 사용자 리뷰, 일정 기록, 캘린더 확인 흐름을 한곳에 모은 여행 서비스입니다.</p>
                <p><strong>기술 스택:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Backend:</strong> Java 17, Spring Boot, Spring Security, JPA</li>
                    <li><strong>Frontend:</strong> Thymeleaf, JavaScript, Tailwind CSS</li>
                    <li><strong>Infra:</strong> MariaDB, Jenkins, Ncloud</li>
                </ul>
                <p><strong>주요 기능:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>여행 장소 탐색, 리뷰, 지도 기반 확인</li>
                    <li>캘린더 일정 및 축제 정보 확인</li>
                    <li>GPS 기반 방문 인증과 리뷰 작성 흐름</li>
                </ul>
            `,
            github: "https://github.com/HwangJeongSeong/Trip_in_JEJU",
            docs: "https://youtu.be/1DJNi3fg2WE",
            demo: "https://kkyul.site"
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
        "fictionplace": {
            title: "FictionPlace",
            tags: ["Team", "Platform"],
            image: "https://github.com/user-attachments/assets/e580e5db-a87a-4fc3-8eaa-1afa41aef838",
            imageWrapClass: "h-48",
            imageClass: "object-cover",
            description: `
                <p><strong>웹툰 작가와 기업을 연결하는 매칭 플랫폼</strong></p>
                <p>작품 등록, 회차 관리, 커뮤니티, 메시지, 채용 공고 흐름을 묶은 웹툰 중심 플랫폼입니다.</p>
                <p><strong>기술 스택:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Backend:</strong> Java 23, Spring Boot 3.3.5, JPA, Spring Security</li>
                    <li><strong>Frontend:</strong> Thymeleaf, jQuery, JavaScript</li>
                    <li><strong>DB:</strong> MariaDB</li>
                </ul>
                <p><strong>주요 기능:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>웹툰 작품 및 회차 등록/관리</li>
                    <li>게시판, 댓글, 관심 작품, 추천 기능</li>
                    <li>기업 채용 공고와 사용자 메시지 기능</li>
                </ul>
            `,
            github: "https://github.com/HwangJeongSeong/FictionPlace",
            docs: null,
            demo: "https://www.youtube.com/watch?v=P1Mu25DWq70&t=3s"
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
