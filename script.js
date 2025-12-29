tailwind.config = {
    theme: {
        extend: {
            colors: {
                bg: '#18181b', // Zinc-900
                card: '#27272a', // Zinc-800
                accent: '#e4e4e7', // Zinc-200 (Soft White)
                muted: '#a1a1aa', // Zinc-400
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
        },
    },
}


document.addEventListener('DOMContentLoaded', () => {
    const projectData = {
        "guardian": {
            title: "Guardian",
            tags: ["Team", "Fullstack"],
            image: "https://github.com/user-attachments/assets/830183fd-94ee-4940-86ea-49e45cfbe260",
            imageWrapClass: "h-56",
            imageClass: "object-contain p-4",
            description: `
                <p><strong>복약/알림 중심 건강 케어 플랫폼</strong></p>
                <p>환자·보호자가 복약 플랜과 복용 로그를 공유하고, 채팅/웹푸시로 긴급 알림을 전달하는 통합 케어 서비스입니다.</p>
                <p><strong>기술 스택:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Frontend:</strong> Next.js, React, TypeScript, PWA(Web Push)</li>
                    <li><strong>Backend:</strong> Java 17, Spring Boot 3, Spring Security, JPA(Hibernate)</li>
                    <li><strong>DB:</strong> MariaDB</li>
                    <li><strong>Infra:</strong> AWS EC2, Nginx</li>
                    <li><strong>Auth/CI:</strong> JWT, GitHub Actions</li>
                </ul>
                <p><strong>주요 기능:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>복약 플랜/복용 로그 관리</li>
                    <li>역할 기반 대시보드 및 매칭</li>
                    <li>실시간 채팅/웹푸시 알림</li>
                </ul>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>역할:</strong> 풀스택 개발, API/인프라 설계</li>
                    <li><strong>핵심:</strong> 웹푸시 알림, 역할 기반 접근 제어, 자동 배포</li>
                </ul>
            `,
            github: "https://github.com/kaeng2258/Teamprj-Guardian-",
            docs: "https://drive.google.com/file/d/1QBZsVaw14uEVFgWorOhIWGG_fsbqAnys/view?usp=sharing",
            demo: null
        },
        "cafe-persona": {
            title: "Cafe-Persona",
            tags: ["Team", "Fullstack"],
            image: "https://github.com/user-attachments/assets/d6d52441-a29b-4aaa-9c51-f68c3b26e7d5",
            imageWrapClass: "h-40",
            imageClass: "object-cover",
            description: `
                <p><strong>카페 리뷰/커뮤니티 플랫폼</strong></p>
                <p>리뷰·평점·이미지 공유를 중심으로 카페 정보를 축적하고, 좋아요/북마크로 취향 기반 탐색을 돕는 서비스입니다.</p>
                <p><strong>기술 스택:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Frontend:</strong> Thymeleaf(SSR), HTML/CSS</li>
                    <li><strong>Backend:</strong> Spring Boot 3.3, Spring Security, Spring WebFlux, JPA</li>
                    <li><strong>DB:</strong> MariaDB (Test: H2)</li>
                    <li><strong>Etc:</strong> Thumbnailator, JavaMailSender</li>
                </ul>
                <p><strong>주요 기능:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>카페 리뷰/평점/이미지 업로드</li>
                    <li>좋아요/북마크/조회수</li>
                    <li>검색 및 상세 페이지</li>
                </ul>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>역할:</strong> 풀스택 (리뷰/평점, 이미지 업로드)</li>
                    <li><strong>핵심:</strong> SSR, 다중 이미지 업로드/최적화, 좋아요/북마크, 조회수 카운팅</li>
                </ul>
            `,
            github: "https://github.com/hyojung-kim/Cafe-Persona-Project",
            docs: "https://docs.google.com/presentation/d/1sJTV7zFzQGbIv1_CUogj7raVBYOW9fHXaIe2Fq6yK68/edit?slide=id.g3660ee20793_1_7#slide=id.g3660ee20793_1_7",
            demo: null
        },
        "quiz-builder": {
            title: "CLI Quiz Builder",
            tags: ["Mini", "Tooling"],
            image: null,
            imageWrapClass: "h-40",
            imageClass: "object-cover",
            description: `
                <p><strong>CLI 기반 문제은행 프로그램</strong></p>
                <p>터미널에서 출제, 풀이, 채점, 진도 관리까지 흐름을 하나로 묶은 로컬 학습 도구입니다.</p>
                <p><strong>기술 스택:</strong> Python, OOP, CLI</p>
                <p><strong>주요 기능:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>문제 출제/풀이/채점</li>
                    <li>진도 저장 및 통계</li>
                    <li>문제 유형 확장</li>
                </ul>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>특징:</strong> OOP 구조 설계로 확장성 확보</li>
                    <li><strong>핵심:</strong> 진도 저장, 문제 유형 다양화, 관리자 CRUD</li>
                </ul>
            `,
            github: "https://github.com/HwangJeongSeong",
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
