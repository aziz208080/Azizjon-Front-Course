< !DOCTYPE html >
    <html>
        <head>
            <title>VK Swiper</title>
            <style>
                .container {
                    max - width: 400px;
                margin: 0 auto;
                position: relative;
                height: 80vh;
        }

                .profile-card {
                    border: 1px solid #ccc;
                padding: 20px;
                border-radius: 10px;
                position: absolute;
                width: 100%;
                height: 70vh;
                transition: transform 0.3s;
                background: white;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

                .photos {
                    display: flex;
                gap: 5px;
                height: 200px;
                margin-bottom: 15px;
        }

                .photos img {
                    width: 32%;
                height: 100%;
                object-fit: cover;
                border-radius: 5px;
        }

                .actions {
                    display: flex;
                justify-content: center;
                gap: 20px;
                margin-top: 20px;
        }

                button {
                    padding: 15px 25px;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                font-size: 20px;
        }

                .dislike {background: #ff4444; color: white; }
                .like {background: #00C851; color: white; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="profile-card" id="currentProfile"></div>
            </div>

            <script>
        // Настройки VK API
                const VK_APP_ID = 'ВАШ_APP_ID'; // Замените на ваш ID
                const VK_API_VERSION = '5.154';

                let profiles = [];
                let currentIndex = 0;
                let likedProfiles = JSON.parse(localStorage.getItem('likedProfiles')) || [];

                // Инициализация VK API
                VK.init({
                    apiId: VK_APP_ID
        });

                // Авторизация и загрузка данных
                function auth() {
                    VK.Auth.login(response => {
                        if (response.session) {
                            loadProfiles();
                        }
                    }, 8192); // permissions: friends, photos, groups, audio
        }

                // Загрузка профилей
                async function loadProfiles() {
            try {
                const friends = await VK.Api.call('friends.get', {
                    fields: 'photo_200,domain',
                count: 100,
                v: VK_API_VERSION
                });

                profiles = friends.response.items.filter(profile =>
                !likedProfiles.includes(profile.id)
                );

                // Загружаем дополнительные данные для каждого профиля
                for (const profile of profiles) {
                    const [music, groups] = await Promise.all([
                VK.Api.call('audio.get', {owner_id: profile.id, v: VK_API_VERSION }),
                VK.Api.call('groups.get', {user_id: profile.id, extended: 1, v: VK_API_VERSION })
                ]);
                profile.music = music.response;
                profile.groups = groups.response;
                }

                showNextProfile();
            } catch (e) {
                    console.error(e);
            }
        }

                // Отображение профиля
                function showProfile(profile) {
            const card = document.getElementById('currentProfile');
                card.innerHTML = `
                <div class="photos">
                    <img src="${profile.photo_200}" alt="Фото">
                </div>
                <h3>${profile.first_name} ${profile.last_name}</h3>
                <p>@${profile.domain}</p>
                <div class="music">
                    <b>Музыка:</b> ${profile.music ? profile.music.items.slice(0, 3).map(track => track.title).join(', ') : 'Недоступно'}
                </div>
                <div class="subscriptions">
                    <b>Подписки:</b> ${profile.groups ? profile.groups.items.slice(0, 15).map(group => group.name).join(', ') : 'Недоступно'}
                </div>
                <div class="actions">
                    <button class="dislike" onclick="handleDislike()">👎</button>
                    <button class="like" onclick="handleLike()">👍</button>
                </div>
                `;
        }

                // Обработчики действий
                function handleLike() {
                    likedProfiles.push(profiles[currentIndex].id);
                localStorage.setItem('likedProfiles', JSON.stringify(likedProfiles));
                nextProfile();
        }

                function handleDislike() {
                    nextProfile();
        }

                function nextProfile() {
                    currentIndex++;
            if (currentIndex >= profiles.length) {
                    alert('Профили закончились!');
                return;
            }
                showNextProfile();
        }

                function showNextProfile() {
                    document.querySelector('.profile-card').style.transform = 'translateX(-500px)';
            setTimeout(() => {
                    showProfile(profiles[currentIndex]);
                document.querySelector('.profile-card').style.transform = 'translateX(0)';
            }, 300);
        }

                // Старт приложения
                auth();
            </script>
            <script src="https://vk.com/js/api/openapi.js?169"></script>
        </body>
    </html>