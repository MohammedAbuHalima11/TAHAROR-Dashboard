// //===============================================================================================//
//Login Page

//Toggle password visibility

if (document.getElementById('login-page')) {
    const passwordInput = document.getElementById('password');
    const showHideIcon = document.querySelector('.show-hide-icon');

    showHideIcon.onclick = () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showHideIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.41998 11.9999 8.41998C13.9799 8.41998 15.5799 10.02 15.5799 12Z" stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.39997C18.8198 5.79997 15.5298 3.71997 11.9998 3.71997C8.46984 3.71997 5.17984 5.79997 2.88984 9.39997C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z" stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
        }

        else {
            passwordInput.type = 'password';
            showHideIcon.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M14.5299 9.46998L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.41998 11.9999 8.41998C12.9899 8.41998 13.8799 8.81998 14.5299 9.46998Z"
                                stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M17.8201 5.76998C16.0701 4.44998 14.0701 3.72998 12.0001 3.72998C8.47009 3.72998 5.18009 5.80998 2.89009 9.40998C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77"
                                stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M8.41992 19.53C9.55992 20.01 10.7699 20.27 11.9999 20.27C15.5299 20.27 18.8199 18.19 21.1099 14.59C22.0099 13.18 22.0099 10.81 21.1099 9.39999C20.7799 8.87999 20.4199 8.38999 20.0499 7.92999"
                                stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#86909C"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.47 14.53L2 22" stroke="#86909C" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M22 2L14.53 9.47" stroke="#86909C" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>`;
        }
    }



    // Handle form submission

    const loginForm = document.querySelector('form');
    const forgotPasswordLink = document.getElementById('forgot-password-link');

    loginForm.addEventListener('submit', function (e) {


        e.preventDefault(); // منع عمل الصفحة ريفريش و اختفاء البيانات

        const emailValue = document.getElementById('email').value.trim();
        const passwordValue = document.getElementById('password').value.trim();

        if (emailValue === 'mohammed.abu.halima11@gmail.com' && passwordValue === '0123456789') {
            alert('تم تسجيل الدخول بنجاح!');
            window.location.href = 'index.html';
        }
        else {
            alert('البريد الإلكتروني أو كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.');
            forgotPasswordLink.classList.add('animate-pulse', 'text-red-600');
            forgotPasswordLink.classList.remove('text-[#4E5969]');


            setTimeout(() => {
                forgotPasswordLink.classList.remove('animate-pulse', 'text-red-600');
                forgotPasswordLink.classList.add('text-[#4E5969]');
            }, 3000);
        }
    })
}



// //===============================================================================================//
// reset password page
if (document.getElementById('reset-password-page')) {
    const showHideIcon = document.querySelectorAll('.show-hide-icon');

    showHideIcon.forEach(icon => {
        icon.onclick = () => {
            const passwordInput = icon.parentElement.querySelector('input');


            if (passwordInput.type === 'password') {

                passwordInput.type = 'text';
                icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.41998 11.9999 8.41998C13.9799 8.41998 15.5799 10.02 15.5799 12Z" stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.39997C18.8198 5.79997 15.5298 3.71997 11.9998 3.71997C8.46984 3.71997 5.17984 5.79997 2.88984 9.39997C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z" stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
            }

            else {
                passwordInput.type = 'password';
                icon.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M14.5299 9.46998L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.41998 11.9999 8.41998C12.9899 8.41998 13.8799 8.81998 14.5299 9.46998Z"
                                stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M17.8201 5.76998C16.0701 4.44998 14.0701 3.72998 12.0001 3.72998C8.47009 3.72998 5.18009 5.80998 2.89009 9.40998C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77"
                                stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M8.41992 19.53C9.55992 20.01 10.7699 20.27 11.9999 20.27C15.5299 20.27 18.8199 18.19 21.1099 14.59C22.0099 13.18 22.0099 10.81 21.1099 9.39999C20.7799 8.87999 20.4199 8.38999 20.0499 7.92999"
                                stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#86909C"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.47 14.53L2 22" stroke="#86909C" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M22 2L14.53 9.47" stroke="#86909C" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>`;
            }
        }
    })



}





// //===============================================================================================//
// Sidebare

if (document.querySelector("aside")) {

    const currentPage = window.location.pathname.split("/").pop();

    // ==========================
    // الروابط العادية
    // ==========================

    const sidebarLinks = document.querySelectorAll("aside a");

    sidebarLinks.forEach(link => {

        const linkPage = link.getAttribute("href");

        const textSpan = link.querySelector("span");
        const nonSelectedIcon = link.querySelector(".non-selected");
        const selectedIcon = link.querySelector(".selected");

        if (linkPage === currentPage) {

            link.classList.add("bg-[#81C6C3]");
            link.classList.remove("hover:bg-[#05444a]");

            if (textSpan) {
                textSpan.classList.remove("text-[#FFFFFF]", "opacity-95");
                textSpan.classList.add("text-[#075E66]", "font-medium");
            }

            nonSelectedIcon?.classList.add("hidden");
            selectedIcon?.classList.remove("hidden");

        } else {

            link.classList.remove("bg-[#81C6C3]");

            if (textSpan) {
                textSpan.classList.remove("text-[#075E66]", "font-medium");
                textSpan.classList.add("text-[#FFFFFF]", "opacity-95");
            }

            nonSelectedIcon?.classList.remove("hidden");
            selectedIcon?.classList.add("hidden");

        }

    });

    //تفعيل لينكات السايد بار للصفحات الفرعية

    if (currentPage === "customer-details.html") {

        const customersLink = document.querySelector(
            'a[href="customer-management.html"]'
        );

        if (customersLink) {

            customersLink.classList.add("bg-[#81C6C3]");
            customersLink.classList.remove("hover:bg-[#05444a]");

            const textSpan = customersLink.querySelector("span");

            if (textSpan) {
                textSpan.classList.remove("text-[#FFFFFF]", "opacity-95");
                textSpan.classList.add("text-[#075E66]", "font-medium");
            }

            customersLink.querySelector(".non-selected")
                ?.classList.add("hidden");

            customersLink.querySelector(".selected")
                ?.classList.remove("hidden");
        }

    }

    if (currentPage === "session-details.html") {

        const link = document.querySelector(
            'a[href="sessions.html"]'
        );

        if (link) {

            link.classList.add("bg-[#81C6C3]");
            link.classList.remove("hover:bg-[#05444a]");

            const textSpan = link.querySelector("span");

            if (textSpan) {
                textSpan.classList.remove("text-[#FFFFFF]", "opacity-95");
                textSpan.classList.add("text-[#075E66]", "font-medium");
            }

            link.querySelector(".non-selected")
                ?.classList.add("hidden");

            link.querySelector(".selected")
                ?.classList.remove("hidden");
        }
    }

    if (currentPage === "edit-customer-details.html") {

        const link = document.querySelector(
            'a[href="customer-management.html"]'
        );

        if (link) {

            link.classList.add("bg-[#81C6C3]");
            link.classList.remove("hover:bg-[#05444a]");

            const textSpan = link.querySelector("span");

            if (textSpan) {
                textSpan.classList.remove("text-[#FFFFFF]", "opacity-95");
                textSpan.classList.add("text-[#075E66]", "font-medium");
            }

            link.querySelector(".non-selected")
                ?.classList.add("hidden");

            link.querySelector(".selected")
                ?.classList.remove("hidden");
        }
    }

    if (currentPage === "specialist-details.html") {

        const link = document.querySelector(
            'a[href="specialist-management.html"]'
        );

        if (link) {

            link.classList.add("bg-[#81C6C3]");
            link.classList.remove("hover:bg-[#05444a]");

            const textSpan = link.querySelector("span");

            if (textSpan) {
                textSpan.classList.remove("text-[#FFFFFF]", "opacity-95");
                textSpan.classList.add("text-[#075E66]", "font-medium");
            }

            link.querySelector(".non-selected")
                ?.classList.add("hidden");

            link.querySelector(".selected")
                ?.classList.remove("hidden");
        }
    }

    if (currentPage === "details-conversation.html") {

        const link = document.querySelector(
            'a[href="conversation-management.html"]'
        );

        if (link) {

            link.classList.add("bg-[#81C6C3]");
            link.classList.remove("hover:bg-[#05444a]");

            const textSpan = link.querySelector("span");

            if (textSpan) {
                textSpan.classList.remove("text-[#FFFFFF]", "opacity-95");
                textSpan.classList.add("text-[#075E66]", "font-medium");
            }

            link.querySelector(".non-selected")
                ?.classList.add("hidden");

            link.querySelector(".selected")
                ?.classList.remove("hidden");
        }
    }




    // ==========================
    // القوائم المنسدلة
    // ==========================

    const dropdowns = [
        {
            id: "support-programs",
            pages: [
                "treatment-programs.html",
                "courses.html",
                "meetings.html",
                "add-programs.html",
                "program-details.html",
                "add-course.html",
                "course-details.html",
                "edit-course.html",
                "add-meeting.html"
            ]
        },
        {
            id: "notofications",
            pages: [
                "system-notifications.html",
                "send-notifications.html"
            ]
        },
        {
            id: "pages-link",
            pages: [
                "frequently-asked-questions.html",
                "terms-conditions.html"
            ]
        }

    ];



    function openMenu(menu) {

        const button = menu.querySelector("button");
        const list = menu.querySelector(".menu-list");

        list.classList.remove("hidden");
        menu.classList.remove("hover:bg-[#05444a]");
        menu.classList.add("bg-[#81C6C3]");

        // تدوير السهم فقط
        button.querySelector(".arrow-non-selected")
            ?.classList.add("-scale-y-100");
    }


    function closeMenu(menu) {

        const button = menu.querySelector("button");
        const list = menu.querySelector(".menu-list");

        list.classList.add("hidden");
        menu.classList.add("hover:bg-[#05444a]");
        menu.classList.remove("bg-[#81C6C3]");

        button.querySelector(".arrow-non-selected")
            ?.classList.remove("-scale-y-100");
    }


    function activateMenu(menu) {

        const button = menu.querySelector("button");

        menu.classList.remove("hover:bg-[#05444a]");
        menu.classList.add("bg-[#81C6C3]");

        const span = button.querySelector("span");
        span.classList.remove("text-white");
        span.classList.add("text-[#075E66]", "font-medium");

        button.querySelector(".non-selected")?.classList.add("hidden");
        button.querySelector(".selected")?.classList.remove("hidden");

        button.querySelector(".arrow-non-selected")?.classList.add("hidden");
        button.querySelector(".arrow-selected")?.classList.remove("hidden");
    }

    dropdowns.forEach(item => {

        const menu = document.getElementById(item.id);

        if (!menu) return;

        const button = menu.querySelector("button");
        const list = menu.querySelector(".menu-list");
        const links = list.querySelectorAll("a");

        if (item.pages.includes(currentPage)) {

            openMenu(menu);
            activateMenu(menu);

            links.forEach(link => {
                const href = link.getAttribute("href");

                if (
                    href === currentPage ||
                    (currentPage === "add-programs.html" && href === "treatment-programs.html") ||
                    (currentPage === "program-details.html" && href === "treatment-programs.html") ||
                    (currentPage === "add-course.html" && href === "courses.html") ||
                    (currentPage === "course-details.html" && href === "courses.html") ||
                    (currentPage === "edit-course.html" && href === "courses.html") ||
                    (currentPage === "add-meeting.html" && href === "meetings.html")
                ) {

                    link.classList.remove("text-white");
                    link.classList.add("text-[#075E66]", "font-medium");

                }

            });

        }



        // الضغط على القائمة
        button.addEventListener("click", () => {

            // إذا الصفحة الحالية داخلها لا تغلقها
            if (item.pages.includes(currentPage))
                return;

            // أغلق باقي القوائم
            dropdowns.forEach(other => {

                if (other.id === item.id)
                    return;

                // لا تغلق القائمة التي تحتوي الصفحة الحالية
                if (other.pages.includes(currentPage))
                    return;

                const otherMenu = document.getElementById(other.id);

                if (otherMenu) {
                    closeMenu(otherMenu);
                }

            });

            // افتح أو أغلق الحالية
            if (list.classList.contains("hidden")) {
                openMenu(menu);
            } else {
                closeMenu(menu);
            }
        });
    });



}











//======================================================================================//
//header

if (document.querySelector('header')) {
    const profile_menu_logout_btn = document.getElementById('profile-menu-logout-btn');
    const profile_menu_logout = document.getElementById('profile-menu-logout');

    const menuBtn = document.querySelector('.menu-btn');
    const sidebare = document.querySelector('aside');



    profile_menu_logout_btn.onclick = (e) => {
        e.stopPropagation();
        profile_menu_logout.classList.toggle('hidden');
        profile_menu_logout_btn.classList.toggle('-scale-y-100');
    }

    profile_menu_logout.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    // اغلاق القائمة عند الضغط على اي مكان في الصفحة
    document.addEventListener("click", () => {
        document.querySelector('#profile-menu-logout').classList.add('hidden');
        profile_menu_logout_btn.classList.remove('-scale-y-100');
        sidebare.classList.add('translate-x-full');
        document.querySelector('.background-with-sidbare').classList.add('hidden');
        document.body.style.overflow = 'auto';


    });


    //ا فتح السايدبار  عند الضغط على زر المنيوو و اغلاقه عند الضغط خارجه

    menuBtn.onclick = (e) => {
        e.stopPropagation();
        sidebare.classList.toggle('translate-x-full');
        document.querySelector('.background-with-sidbare').classList.toggle('hidden');
        document.body.style.overflow = 'hidden';

        if (!profile_menu_logout.classList.contains('hidden')) {
            profile_menu_logout.classList.add('hidden');
            profile_menu_logout_btn.classList.remove('-scale-y-100');
        }
    }

    sidebare.onclick = (e) => {
        e.stopPropagation();
    }

    //اظهار واجهة البحث للموبايل

    const searchWithMobile = document.querySelector('.search-with-mobile');
    const closeSearchWithMobileBtn = document.querySelector('.close-search-with-mobile-btn');
    const searchWithMobileBtn = document.querySelector('.search-with-mobile-btn');

    searchWithMobileBtn.onclick = () => {
        searchWithMobile.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }
    closeSearchWithMobileBtn.onclick = () => {
        searchWithMobile.classList.add('hidden');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }


}

//======================================================================================//
//home page

if (document.getElementById('home-page')) {
    //عداد البطاقات بواسطة ال ai
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;

                const target = +counter.dataset.target;
                let current = 0;
                const increment = target / 100;

                function update() {
                    current += increment;

                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(update);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                }

                update();
                observer.unobserve(counter);
            }
        });
    });

    document.querySelectorAll(".counter").forEach(counter => {
        observer.observe(counter);
    });


    const cards = document.querySelectorAll(".stat-card");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 120);
    });

    const cardsN = document.querySelectorAll(".stat-card-n");

    cardsN.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 120);
    });


}





//======================================================================================//
// Customer-management page

const customerManaementPage = document.getElementById('customer-management-page');

if (customerManaementPage) {
    const actionButtons = document.querySelectorAll('.table-action-btn');

    actionButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();

            const currentMenu = this.nextElementSibling;

            document.querySelectorAll('.table-action-menu').forEach(menu => {
                if (menu !== currentMenu) {
                    menu.classList.add('hidden');
                }
            });

            currentMenu.classList.toggle('hidden');
        });
    });

    // اغلاق القائمة عند الضغط على اي مكان في الصفحة
    document.addEventListener('click', function () {
        document.querySelectorAll('.table-action-menu').forEach(menu => {
            menu.classList.add("hidden");
        });
    });

    // واجهة فرز الأعضاء
    const filteringBtn = document.getElementById('filtering-btn')
    const customerSortingContainer = document.getElementById('customer-sorting-container');
    const closeCustomerSortingBtn = document.getElementById('close-customer-sorting-btn');

    filteringBtn.addEventListener('click', function () {
        customerSortingContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    });

    closeCustomerSortingBtn.addEventListener('click', function () {
        customerSortingContainer.classList.add('hidden');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    });


    //واجهة اضافة عميل
    const addClientBtn = document.getElementById('add-client-btn')
    const addClientContainer = document.getElementById('add-client-container');
    const closeAddClientBtn = document.getElementById('close-add-client-btn');
    const cancleAddClientBtn = document.getElementById('cancle-add-client-btn');


    addClientBtn.addEventListener('click', function () {
        addClientContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    });

    closeAddClientBtn.addEventListener('click', function () {
        addClientContainer.classList.add('hidden');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    });

    cancleAddClientBtn.onclick = () => {
        addClientContainer.classList.add('hidden');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }




    //اظهار واجهة البحث عن عميل للموبايل

    const searchCustomerWithMobile = document.querySelector('.search-customer-with-mobile');
    const closeCustomerSearchWithMobileBtn = document.querySelector('.close-customer-search-with-mobile-btn');
    const searchCustomerWithMobileBtn = document.querySelector('.search-customer-with-mobile-btn');

    searchCustomerWithMobileBtn.onclick = () => {
        searchCustomerWithMobile.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }
    closeCustomerSearchWithMobileBtn.onclick = () => {
        searchCustomerWithMobile.classList.add('hidden');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }





}


//======================================================================================//
// Customer-details page



const customerDetailspage = document.getElementById('customer-details-page')

if (customerDetailspage) {
    const customerOptionsBtn = document.getElementById('customer-options-btn');
    const customerOptionsMenu = document.getElementById('customer-options-menu');

    customerOptionsBtn.onclick = (e) => {
        /*
        لما نضغط على الزر بالاول بتظهر القائمة و بنفس الوقت بتختفي لانه الزر من ال
        document
        لدلك استخدمنا e.stopPropagation()
        لمنع صعود الحدث للاعلى و عدم تأثر غير الزر بحدث النقرة على الزر
        */
        e.stopPropagation();
        customerOptionsMenu.classList.toggle('hidden');
    }
    document.onclick = () => {
        if (!customerOptionsMenu.classList.contains('hidden')) customerOptionsMenu.classList.add('hidden');
    }


    // الضغط على زر الاشعارات
    document.querySelector('.notifications-btn').onclick = () => {
        document.querySelector('.send-notifications-container').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }

    document.querySelector('.close-send-notifications-btn').onclick = () => {
        document.querySelector('.send-notifications-container').classList.add('hidden');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }

    document.querySelector('.cancle-send-notifications-btn').onclick = (e) => {
        e.preventDefault();
        document.querySelector('.send-notifications-container').classList.add('hidden');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }


}





//======================================================================================//
// Specialist-management page

const specialistManaementPage = document.getElementById('specialist-management-page');

if (specialistManaementPage) {

    //اظهار واجهة البحث عن اخصائي للموبايل

    const searchSpecialistWithMobile = document.querySelector('.search-specialist-with-mobile');
    const closeSpecialistSearchWithMobileBtn = document.querySelector('.close-specialist-search-with-mobile-btn');
    const searchSpecialistWithMobileBtn = document.querySelector('.search-specialist-with-mobile-btn');

    searchSpecialistWithMobileBtn.onclick = () => {
        searchSpecialistWithMobile.classList.remove('hidden');
    }
    closeSpecialistSearchWithMobileBtn.onclick = () => {
        searchSpecialistWithMobile.classList.add('hidden');
    }

    const actionButtons = document.querySelectorAll('.table-action-btn');

    actionButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();

            const currentMenu = this.nextElementSibling;

            document.querySelectorAll('.table-action-menu').forEach(menu => {
                if (menu !== currentMenu) {
                    menu.classList.add('hidden');
                }
            });

            currentMenu.classList.toggle('hidden');
        });
    });

    // اغلاق القائمة عند الضغط على اي مكان في الصفحة
    document.addEventListener('click', function () {
        document.querySelectorAll('.table-action-menu').forEach(menu => {
            menu.classList.add("hidden");
        });
    });

    // واجهة فرز الاخصائيين
    const filteringBtn = document.getElementById('filtering-btn')
    const specialistSortingContainer = document.getElementById('specialist-sorting-container');
    const closeSpecialistSortingBtn = document.getElementById('close-specialist-sorting-btn');

    filteringBtn.addEventListener('click', function () {
        specialistSortingContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeSpecialistSortingBtn.addEventListener('click', function () {
        specialistSortingContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });


    //واجهة اضافة الاخصائيين
    const addSpecialistBtn = document.getElementById('add-specialist-btn')
    const addSpecialistContainer = document.getElementById('add-specialist-container');
    const closeAddSpecialistBtn = document.getElementById('close-add-specialist-btn');



    addSpecialistBtn.addEventListener('click', function () {
        addSpecialistContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        // progressRate.classList.add('w-1/4');
        progressRate.style.width = '25%';
    });





    // واجهة اضافة الاخصائيين - الخطوات

    const personalData = document.getElementById('personal-data');
    const addressInformation = document.getElementById('address-information');
    const educationalDetails = document.getElementById('educational-details');
    const professionalDetails = document.getElementById('professional-details');

    const nextPersonalDataBtn = document.getElementById('next-personal-data-btn');
    const nextAddressInformationBtn = document.getElementById('next-address-information-btn');
    const nextEducationalDetailsBtn = document.getElementById('next-educational-details-btn');

    const cancleAddSpecialistBtn = document.querySelectorAll('.cancle-add-specialist-btn');

    const titlePart = document.getElementById('title-part');  // العنصر الذي يعرض عنوان الجزء الحالي من النموذج 
    const iconPart = document.querySelector('#icon-part');  // العنصر الذي يعرض الايقونة الخاصة بالجزء الحالي من النموذج

    const progressRate = document.querySelector('.progress-rate');

    nextPersonalDataBtn.onclick = (e) => {
        e.preventDefault();
        personalData.classList.add('hidden');
        addressInformation.classList.remove('hidden');
        titlePart.textContent = 'معلومات العنوان';
        iconPart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M9.00016 10.0726C10.2925 10.0726 11.3402 9.02492 11.3402 7.73258C11.3402 6.44023 10.2925 5.39258 9.00016 5.39258C7.70781 5.39258 6.66016 6.44023 6.66016 7.73258C6.66016 9.02492 7.70781 10.0726 9.00016 10.0726Z" stroke="#4E5969" stroke-width="1.5"/>
<path d="M2.71478 6.3675C4.19228 -0.127498 13.8148 -0.119998 15.2848 6.375C16.1473 10.185 13.7773 13.41 11.6998 15.405C10.1923 16.86 7.80728 16.86 6.29228 15.405C4.22228 13.41 1.85228 10.1775 2.71478 6.3675Z" stroke="#4E5969" stroke-width="1.5"/>
</svg>`;

        progressRate.style.width = '50%';
    }

    nextAddressInformationBtn.onclick = (e) => {
        e.preventDefault();
        addressInformation.classList.add('hidden');
        educationalDetails.classList.remove('hidden');
        titlePart.textContent = 'التفاصيل التعليمية';
        iconPart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M3.19531 8.26508V11.9926C3.19531 13.3576 3.19531 13.3576 4.48531 14.2276L8.03281 16.2751C8.56531 16.5826 9.43531 16.5826 9.96781 16.2751L13.5153 14.2276C14.8053 13.3576 14.8053 13.3576 14.8053 11.9926V8.26508C14.8053 6.90008 14.8053 6.90008 13.5153 6.03008L9.96781 3.98258C9.43531 3.67508 8.56531 3.67508 8.03281 3.98258L4.48531 6.03008C3.19531 6.90008 3.19531 6.90008 3.19531 8.26508Z" stroke="#4E5969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.125 5.7225V3.75C13.125 2.25 12.375 1.5 10.875 1.5H7.125C5.625 1.5 4.875 2.25 4.875 3.75V5.67" stroke="#4E5969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.47282 8.24271L9.90032 8.91022C9.96782 9.01522 10.1178 9.12021 10.2303 9.15021L10.9953 9.34522C11.4678 9.46522 11.5953 9.87021 11.2878 10.2452L10.7853 10.8527C10.7103 10.9502 10.6503 11.1227 10.6578 11.2427L10.7028 12.0302C10.7328 12.5177 10.3878 12.7652 9.93782 12.5852L9.20282 12.2927C9.09032 12.2477 8.90282 12.2477 8.79032 12.2927L8.05532 12.5852C7.60532 12.7652 7.26032 12.5102 7.29032 12.0302L7.33532 11.2427C7.34282 11.1227 7.28282 10.9427 7.20782 10.8527L6.70532 10.2452C6.39782 9.87021 6.52532 9.46522 6.99782 9.34522L7.76282 9.15021C7.88282 9.12021 8.03282 9.00772 8.09282 8.91022L8.52032 8.24271C8.79032 7.83771 9.21032 7.83771 9.47282 8.24271Z" stroke="#4E5969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
        progressRate.style.width = '75%';
    }

    nextEducationalDetailsBtn.onclick = (e) => {
        e.preventDefault();
        educationalDetails.classList.add('hidden');
        professionalDetails.classList.remove('hidden');
        titlePart.textContent = 'التفاصيل المهنية';
        iconPart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M9 13.6499C10.6569 13.6499 12 12.3068 12 10.6499C12 8.99305 10.6569 7.6499 9 7.6499C7.34315 7.6499 6 8.99305 6 10.6499C6 12.3068 7.34315 13.6499 9 13.6499Z" stroke="#4E5969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.1875 9.7124V10.4099C9.1875 10.6724 9.0525 10.9199 8.82 11.0549L8.25 11.3999" stroke="#4E5969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.99963 16.5H11.9996C15.0146 16.5 15.5546 15.2925 15.7121 13.8225L16.2746 7.8225C16.4771 5.9925 15.9521 4.5 12.7496 4.5H5.24963C2.04713 4.5 1.52213 5.9925 1.72463 7.8225L2.28713 13.8225C2.44463 15.2925 2.98463 16.5 5.99963 16.5Z" stroke="#4E5969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 4.5V3.9C6 2.5725 6 1.5 8.4 1.5H9.6C12 1.5 12 2.5725 12 3.9V4.5" stroke="#4E5969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.2378 8.25C14.9403 9.195 13.5003 9.855 12.0078 10.23" stroke="#4E5969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.96484 8.45264C3.21734 9.30764 4.58234 9.91514 5.99984 10.2601" stroke="#4E5969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;


        progressRate.style.width = '100%';
    }

    cancleAddSpecialistBtn.forEach(btn => {
        btn.onclick = (e) => {
            addSpecialistContainer.classList.add('hidden');
            personalData.classList.remove('hidden');
            addressInformation.classList.add('hidden');
            educationalDetails.classList.add('hidden');
            professionalDetails.classList.add('hidden');
            titlePart.textContent = 'البيانات الشخصية';
            iconPart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                                d="M9.11992 8.1525C9.04492 8.145 8.95492 8.145 8.87242 8.1525C7.08742 8.0925 5.66992 6.63 5.66992 4.83C5.66992 2.9925 7.15492 1.5 8.99992 1.5C10.8374 1.5 12.3299 2.9925 12.3299 4.83C12.3224 6.63 10.9049 8.0925 9.11992 8.1525Z"
                                stroke="#4E5969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M5.37004 10.92C3.55504 12.135 3.55504 14.115 5.37004 15.3225C7.43254 16.7025 10.815 16.7025 12.8775 15.3225C14.6925 14.1075 14.6925 12.1275 12.8775 10.92C10.8225 9.5475 7.44004 9.5475 5.37004 10.92Z"
                                stroke="#4E5969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>`;


            progressRate.style.width = '25%';
        }
    })

    closeAddSpecialistBtn.onclick = () => {
        addSpecialistContainer.classList.add('hidden');
        personalData.classList.remove('hidden');
        addressInformation.classList.add('hidden');
        educationalDetails.classList.add('hidden');
        professionalDetails.classList.add('hidden');
        titlePart.textContent = 'البيانات الشخصية';
        iconPart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                                d="M9.11992 8.1525C9.04492 8.145 8.95492 8.145 8.87242 8.1525C7.08742 8.0925 5.66992 6.63 5.66992 4.83C5.66992 2.9925 7.15492 1.5 8.99992 1.5C10.8374 1.5 12.3299 2.9925 12.3299 4.83C12.3224 6.63 10.9049 8.0925 9.11992 8.1525Z"
                                stroke="#4E5969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M5.37004 10.92C3.55504 12.135 3.55504 14.115 5.37004 15.3225C7.43254 16.7025 10.815 16.7025 12.8775 15.3225C14.6925 14.1075 14.6925 12.1275 12.8775 10.92C10.8225 9.5475 7.44004 9.5475 5.37004 10.92Z"
                                stroke="#4E5969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>`;

        progressRate.style.width = '25%';
    }







}



//======================================================================================//
// sessions-management page

const sessionsManagementPage = document.getElementById('sessions-management-page');

if (sessionsManagementPage) {
    const actionButtons = document.querySelectorAll('.table-action-btn');

    actionButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();

            const currentMenu = this.nextElementSibling;

            document.querySelectorAll('.table-action-menu').forEach(menu => {
                if (menu !== currentMenu) {
                    menu.classList.add('hidden');
                }
            });

            currentMenu.classList.toggle('hidden');
        });
    });

    // اغلاق القائمة عند الضغط على اي مكان في الصفحة
    document.addEventListener('click', function () {
        document.querySelectorAll('.table-action-menu').forEach(menu => {
            menu.classList.add("hidden");
        });
    });

    // واجهة فرز الجلسات
    const filteringBtn = document.getElementById('filtering-btn')
    const sessionsSortingContainer = document.getElementById('sessions-sorting-container');
    const closeSessionsSortingBtn = document.getElementById('close-sessions-sorting-btn');

    filteringBtn.addEventListener('click', function () {
        sessionsSortingContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeSessionsSortingBtn.addEventListener('click', function () {
        sessionsSortingContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });


    //واجهة اضافة جلسة
    const addSessionBtn = document.getElementById('add-session-btn')
    const addSessionsContainer = document.getElementById('add-sessions-container');
    const closeAddSessionBtn = document.getElementById('close-add-session-btn');
    const cancleAddSessionBtn = document.getElementById('cancle-add-session-btn');


    addSessionBtn.addEventListener('click', function () {
        addSessionsContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeAddSessionBtn.addEventListener('click', function () {
        addSessionsContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    cancleAddSessionBtn.onclick = () => {
        addSessionsContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }


    //اظهار واجهة البحث عن عميل، أخصائي للموبايل

    const searchSessionWithMobileBtn = document.querySelector('.search-sessions-with-mobile-btn');
    const searchSessionWithMobile = document.querySelector('.search-sessions-with-mobile');
    const closeSessionSearchWithMobileBtn = document.querySelector('.close-sessions-search-with-mobile-btn');


    searchSessionWithMobileBtn.onclick = () => {
        searchSessionWithMobile.classList.remove('hidden');
    }
    closeSessionSearchWithMobileBtn.onclick = () => {
        searchSessionWithMobile.classList.add('hidden');
    }

}


//======================================================================================//
// treatment-programs page

const treatmentProgramsPage = document.getElementById('treatment-programs-page');

if (treatmentProgramsPage) {
    const actionButtons = document.querySelectorAll('.table-action-btn');

    actionButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation()

            const currentMenu = this.nextElementSibling;

            document.querySelectorAll('.table-action-menu').forEach(menu => {
                if (menu !== currentMenu) {
                    menu.classList.add('hidden');
                }
            });

            currentMenu.classList.toggle('hidden');
        });
    });

    // اغلاق القائمة عند الضغط على اي مكان في الصفحة
    document.addEventListener('click', function () {
        document.querySelectorAll('.table-action-menu').forEach(menu => {
            menu.classList.add("hidden");
        });
    });

    // واجهة فرز الجلسات
    const filteringBtn = document.getElementById('filtering-btn')
    const treatmentProgramsSortingContainer = document.getElementById('treatment-programs-sorting-container');
    const closeTreatmentProgramsSortingBtn = document.getElementById('close-treatment-programs-sorting-btn');

    filteringBtn.addEventListener('click', function () {
        treatmentProgramsSortingContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeTreatmentProgramsSortingBtn.addEventListener('click', function () {
        treatmentProgramsSortingContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });


    //اظهار واجهة البحث عن برنامج للموبايل

    const searchProgramWithMobileBtn = document.querySelector('.search-program-with-mobile-btn');
    const searchProgramWithMobile = document.querySelector('.search-program-with-mobile');
    const closeProgramSearchWithMobileBtn = document.querySelector('.close-program-search-with-mobile-btn');


    searchProgramWithMobileBtn.onclick = () => {
        searchProgramWithMobile.classList.remove('hidden');
    }
    closeProgramSearchWithMobileBtn.onclick = () => {
        searchProgramWithMobile.classList.add('hidden');
    }

}



//======================================================================================//
// courses page

if (document.getElementById('courses-page')) {
    const filteringBtn = document.getElementById('filtering-btn')
    const coursesSortingContainer = document.querySelector('.courses-sorting-container');
    const closeCoursesProgramsSortingBtn = document.querySelector('.close-courses-sorting-btn');

    filteringBtn.addEventListener('click', function () {
        coursesSortingContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeCoursesProgramsSortingBtn.addEventListener('click', function () {
        coursesSortingContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });



    //اظهار واجهة البحث عن دورة للموبايل

    const searchProgramWithMobileBtn = document.querySelector('.search-course-with-mobile-btn');
    const searchProgramWithMobile = document.querySelector('.search-course-with-mobile');
    const closeProgramSearchWithMobileBtn = document.querySelector('.close-course-search-with-mobile-btn');


    searchProgramWithMobileBtn.onclick = () => {
        searchProgramWithMobile.classList.remove('hidden');
    }
    closeProgramSearchWithMobileBtn.onclick = () => {
        searchProgramWithMobile.classList.add('hidden');
    }

    const actionButtons = document.querySelectorAll('.table-action-btn');

    actionButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation()

            const currentMenu = this.nextElementSibling;

            document.querySelectorAll('.table-action-menu').forEach(menu => {
                if (menu !== currentMenu) {
                    menu.classList.add('hidden');
                }
            });

            currentMenu.classList.toggle('hidden');
        });
    });

    // اغلاق القائمة عند الضغط على اي مكان في الصفحة
    document.addEventListener('click', function () {
        document.querySelectorAll('.table-action-menu').forEach(menu => {
            menu.classList.add("hidden");
        });
    });


}

//======================================================================================//
// meetings page

const meetingsPage = document.getElementById('meetings-page');

if (meetingsPage) {
    const actionButtons = document.querySelectorAll('.table-action-btn');

    actionButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();

            const currentMenu = this.nextElementSibling;

            document.querySelectorAll('.table-action-menu').forEach(menu => {
                if (menu !== currentMenu) {
                    menu.classList.add('hidden');
                }
            });

            currentMenu.classList.toggle('hidden');
        });
    });

    // اغلاق القائمة عند الضغط على اي مكان في الصفحة
    document.addEventListener('click', function () {
        document.querySelectorAll('.table-action-menu').forEach(menu => {
            menu.classList.add("hidden");
        });
    });

    // واجهة فرز اللقاءات
    const filteringBtn = document.getElementById('filtering-btn')
    const meetingsSortingContainer = document.querySelector('.meetings-sorting-container');
    const closeMeetingsSortingBtn = document.querySelector('.close-meetings-sorting-btn');

    filteringBtn.addEventListener('click', function () {
        meetingsSortingContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeMeetingsSortingBtn.addEventListener('click', function () {
        meetingsSortingContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });




}
//======================================================================================//
// conversation management page

const conversationManagementPage = document.getElementById('conversation-management-page');

if (conversationManagementPage) {


    // واجهة فرز المحادثات
    const filteringBtn = document.getElementById('filtering-btn')
    const conversationManagementSortingContainer = document.querySelector('.conversation-management-sorting-container');
    const closeConversationManagementSortingBtn = document.querySelector('.conversation-management-sorting-btn');

    filteringBtn.addEventListener('click', function () {
        conversationManagementSortingContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeConversationManagementSortingBtn.addEventListener('click', function () {
        conversationManagementSortingContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });


    const actionButtons = document.querySelectorAll('.table-action-btn');

    actionButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();

            const currentMenu = this.nextElementSibling;

            document.querySelectorAll('.table-action-menu').forEach(menu => {
                if (menu !== currentMenu) {
                    menu.classList.add('hidden');
                }
            });

            currentMenu.classList.toggle('hidden');
        });
    });

    // اغلاق القائمة عند الضغط على اي مكان في الصفحة
    document.addEventListener('click', function () {
        document.querySelectorAll('.table-action-menu').forEach(menu => {
            menu.classList.add("hidden");
        });
    });


}



//======================================================================================//
// conversation details page

const detailsConversationPage = document.getElementById('details-conversation-page')
if (detailsConversationPage) {


    // واجهة حدف المحادثة
    const deleteConversationBtn = document.querySelector('.delete-conversation-btn');
    const deleteConversationContainer = document.querySelector('.delete-conversation-container');
    const closeDeleteConversationBtn = document.querySelector('.close-delete-conversation-btn');
    const cancelDeleteConversationBtn = document.querySelector('.cancel-btn');


    deleteConversationBtn.onclick = () => {
        deleteConversationContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeDeleteConversationBtn.onclick = () => {
        deleteConversationContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    cancelDeleteConversationBtn.onclick = () => {
        deleteConversationContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }


    // واجهة إرسال التنبيه
    const sendNotificationBtn = document.querySelector('.send-notification-btn');
    const sendNotificationContainer = document.querySelector('.send-notification-container');
    const closeSendNotificationBtn = document.querySelector('.close-send-notification-btn');
    const cancelSendNotificationBtn = document.querySelector('.cancel-send-notification-btn');

    sendNotificationBtn.onclick = () => {
        sendNotificationContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeSendNotificationBtn.onclick = () => {
        sendNotificationContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    cancelSendNotificationBtn.onclick = () => {
        sendNotificationContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}





//======================================================================================//
// send notifications page

const sendNotificationsPage = document.getElementById('send-notifications-page');

if (sendNotificationsPage) {


    // واجهة فرز الاشعارات
    const filteringBtn = document.getElementById('filtering-btn')
    const notificationsSortingContainer = document.querySelector('.notifications-sorting-container');
    const closeNotificationsSortingBtn = document.querySelector('.close-notifications-sorting-btn');


    filteringBtn.addEventListener('click', function () {
        notificationsSortingContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeNotificationsSortingBtn.addEventListener('click', function () {
        notificationsSortingContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });



    // اظهار واجهة ارسال الاشعارات
    const sendNotificationsBtn = document.querySelector('.send-notifications-btn')
    const sendNotificationsContainer = document.querySelector('.send-notifications-container');
    const closeSendNotificationsBtn = document.querySelector('.close-send-notifications-btn');
    const cancleSendNotificationsBtn = document.querySelector('.cancle-send-notifications-btn');

    sendNotificationsBtn.addEventListener('click', function () {
        sendNotificationsContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeSendNotificationsBtn.addEventListener('click', function () {
        sendNotificationsContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    cancleSendNotificationsBtn.addEventListener('click', function () {
        notificationsSortingContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });


    //اظهار واجهة البحث عن اشعارات للموبايل

    const searchWithMobileBtn = document.querySelector('.search-notifications-with-mobile-btn');
    const searchWithMobile = document.querySelector('.search-notifications-with-mobile');
    const closeSearchWithMobileBtn = document.querySelector('.close-search-notifications-with-mobile-btn');


    searchWithMobileBtn.onclick = () => {
        searchWithMobile.classList.remove('hidden');
    }
    closeSearchWithMobileBtn.onclick = () => {
        searchWithMobile.classList.add('hidden');
    }
}



//======================================================================================//
// frequently asked questions page

const frequentlyAskedQuestionsPage = document.getElementById('frequently-asked-questions-page');

if (frequentlyAskedQuestionsPage) {


    // واجهة فرز الاسئلة الشائعة
    const filteringBtn = document.getElementById('filtering-btn')
    const frequentlyAskedQuestionsSortingContainer = document.querySelector('.frequently-asked-questions-sorting-container');
    const closeFrequentlyAskedQuestionsSortingBtn = document.querySelector('.close-frequently-asked-questions-sorting-btn');

    filteringBtn.addEventListener('click', function () {
        frequentlyAskedQuestionsSortingContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeFrequentlyAskedQuestionsSortingBtn.addEventListener('click', function () {
        frequentlyAskedQuestionsSortingContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });




    // اظهار واجهة اضافة سؤال
    const addQuestionsBtn = document.querySelector('.add-questions-btn')
    const addQuestionsContainer = document.querySelector('.add-questions-container');
    const closeAddQuestionBtn = document.querySelector('.close-add-questions-btn');
    const cancleAddQuestionBtn = document.querySelector('.cancle-add-question-btn');

    addQuestionsBtn.addEventListener('click', function () {
        addQuestionsContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeAddQuestionBtn.addEventListener('click', function () {
        addQuestionsContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    cancleAddQuestionBtn.addEventListener('click', function () {
        addQuestionsContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });


    //اظهار واجهة البحث عن الاسئلة للموبايل

    const searchWithMobileBtn = document.querySelector('.search-questions-with-mobile-btn');
    const searchWithMobile = document.querySelector('.search-questions-with-mobile');
    const closeSearchWithMobileBtn = document.querySelector('.close-search-questions-with-mobile-btn');


    searchWithMobileBtn.onclick = () => {
        searchWithMobile.classList.remove('hidden');
    }
    closeSearchWithMobileBtn.onclick = () => {
        searchWithMobile.classList.add('hidden');
    }
}









//======================================================================================//
// system notifications page

if (document.getElementById('system-notifications-page')) {

    // واجهة فرز الاشعارات
    const filteringBtn = document.getElementById('filtering-btn')
    const systemNotificationsSortingContainer = document.querySelector('.system-notifications-sorting-container ');
    const closeSystemNotificationsSortingBtn = document.querySelector('.close-system-notifications-sorting-btn');

    filteringBtn.onclick = () => {
        systemNotificationsSortingContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    closeSystemNotificationsSortingBtn.onclick = () => {
        systemNotificationsSortingContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };


    //اظهار واجهة البحث عن اشعارات للموبايل

    const searchSystemNotificationsWithMobileBtn = document.querySelector('.search-system-notifications-with-mobile-btn');
    const searchSystemNotificationsWithMobile = document.querySelector('.search-system-notifications-with-mobile');
    const closeSystemNotificationsSearchWithMobileBtn = document.querySelector('.close-system-notifications-search-with-mobile-btn');


    searchSystemNotificationsWithMobileBtn.onclick = () => {
        searchSystemNotificationsWithMobile.classList.remove('hidden');
    }
    closeSystemNotificationsSearchWithMobileBtn.onclick = () => {
        searchSystemNotificationsWithMobile.classList.add('hidden');
    }

}





//======================================================================================//
// tom select liprary for select fields

if (document.querySelector('.select-field')) {

    document.querySelectorAll(".select-field").forEach(select => {
        new TomSelect(select, {
            create: false,
            controlInput: null,
            allowEmptyOption: true
        });
    });


    document.querySelectorAll('.select-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            const select = btn.parentElement.querySelector(".select-field");
            select.tomselect.open();
        }
    })
}

if (document.querySelector(".date-picker")) {
    document.querySelectorAll(".date-picker").forEach(input => {
        const picker = flatpickr(input, {
            dateFormat: "Y-m-d",
            allowInput: false,
            disableMobile: true
        });

        const btn = input.parentElement.querySelector(".date-btn");

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            picker.open();

        });

    });
}


//======================================================================================//
// password inputs

if (document.querySelector('.password-input')) {
    const passwordInputs = document.querySelectorAll('.password-input');
    const showHideBtns = document.querySelectorAll('.show-hide-btn');

    passwordInputs.forEach((input, index) => {

        const btn = showHideBtns[index];

        btn.onclick = () => {
            if (input.type === 'password') {
                input.type = 'text';
                btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
<path d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.41998 11.9999 8.41998C13.9799 8.41998 15.5799 10.02 15.5799 12Z" stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.39997C18.8198 5.79997 15.5298 3.71997 11.9998 3.71997C8.46984 3.71997 5.17984 5.79997 2.88984 9.39997C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z" stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
            }

            else {
                input.type = 'password';
                btn.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M14.5299 9.46998L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.41998 11.9999 8.41998C12.9899 8.41998 13.8799 8.81998 14.5299 9.46998Z"
                                stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M17.8201 5.76998C16.0701 4.44998 14.0701 3.72998 12.0001 3.72998C8.47009 3.72998 5.18009 5.80998 2.89009 9.40998C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77"
                                stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M8.41992 19.53C9.55992 20.01 10.7699 20.27 11.9999 20.27C15.5299 20.27 18.8199 18.19 21.1099 14.59C22.0099 13.18 22.0099 10.81 21.1099 9.39999C20.7799 8.87999 20.4199 8.38999 20.0499 7.92999"
                                stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#86909C"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.47 14.53L2 22" stroke="#86909C" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M22 2L14.53 9.47" stroke="#86909C" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>`;
            }
        }

    });
}