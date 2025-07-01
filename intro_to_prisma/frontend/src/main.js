const API_BASE = 'http://localhost:8080/api';

        function showTab(tabName, button) {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Remove active from all buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Show selected tab and button
            document.getElementById(tabName).classList.add('active');
            button.classList.add('active');
            
            // Load data
            if (tabName === 'heroes') loadHeroes();
            if (tabName === 'weapons') loadWeapons();
            if (tabName === 'weapon-stats') loadWeaponStats();
        }

        async function loadHeroes() {
            const loading = document.getElementById('heroes-loading');
            const error = document.getElementById('heroes-error');
            const grid = document.getElementById('heroes-grid');
            
            loading.style.display = 'block';
            error.style.display = 'none';
            grid.innerHTML = '';
            
            try {
                const response = await fetch(`${API_BASE}/heroes`);
                const heroes = await response.json();
                
                loading.style.display = 'none';
                
                heroes.forEach(hero => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <h3>🦸 ${hero.name || 'Unknown Hero'}</h3>
                        <p><strong>ID:</strong> ${hero.id}</p>
                        <p><strong>Level:</strong> ${hero.level || 1}</p>
                        <p><strong>Class:</strong> ${hero.class || 'Unknown'}</p>
                        <p><strong>Weapon:</strong> ${hero.weapon ? hero.weapon.name || 'Unnamed Weapon' : 'No weapon'}</p>
                    `;
                    grid.appendChild(card);
                });
            } catch (err) {
                loading.style.display = 'none';
                error.style.display = 'block';
                error.textContent = 'Failed to load heroes: ' + err.message;
            }
        }

        async function loadWeapons() {
            const loading = document.getElementById('weapons-loading');
            const error = document.getElementById('weapons-error');
            const grid = document.getElementById('weapons-grid');
            
            loading.style.display = 'block';
            error.style.display = 'none';
            grid.innerHTML = '';
            
            try {
                const response = await fetch(`${API_BASE}/weapons`);
                const weapons = await response.json();
                
                loading.style.display = 'none';
                
                weapons.forEach(weapon => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <h3>⚔️ ${weapon.name || 'Unknown Weapon'}</h3>
                        <p><strong>ID:</strong> ${weapon.id}</p>
                        <p><strong>Type:</strong> ${weapon.type || 'Unknown'}</p>
                        <p><strong>Rarity:</strong> ${weapon.rarity || 'Common'}</p>
                        <p><strong>Owner:</strong> ${weapon.hero ? weapon.hero.name : 'No owner'}</p>
                    `;
                    grid.appendChild(card);
                });
            } catch (err) {
                loading.style.display = 'none';
                error.style.display = 'block';
                error.textContent = 'Failed to load weapons: ' + err.message;
            }
        }

        async function loadWeaponStats() {
            const loading = document.getElementById('stats-loading');
            const error = document.getElementById('stats-error');
            const grid = document.getElementById('stats-grid');
            
            loading.style.display = 'block';
            error.style.display = 'none';
            grid.innerHTML = '';
            
            try {
                const response = await fetch(`${API_BASE}/weapon-stats`);
                const stats = await response.json();
                
                loading.style.display = 'none';
                
                stats.forEach(stat => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <h3>📊 Stats #${stat.id}</h3>
                        <p><strong>Attack:</strong> ${stat.attack || 0}</p>
                        <p><strong>Defense:</strong> ${stat.defense || 0}</p>
                        <p><strong>Speed:</strong> ${stat.speed || 0}</p>
                        <p><strong>Weapon:</strong> ${stat.weapon ? stat.weapon.name : 'No weapon'}</p>
                    `;
                    grid.appendChild(card);
                });
            } catch (err) {
                loading.style.display = 'none';
                error.style.display = 'block';
                error.textContent = 'Failed to load weapon stats: ' + err.message;
            }
        }

        // Load heroes when page loads
        document.addEventListener('DOMContentLoaded', loadHeroes);