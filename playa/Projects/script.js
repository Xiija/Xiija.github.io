const cities = [
  { name: 'San Francisco', tz: 'America/Los_Angeles' },
  { name: 'London', tz: 'Europe/London' },
  { name: 'Sydney', tz: 'Australia/Sydney' },
  { name: 'Tokyo', tz: 'Asia/Tokyo' }
  ];
function createClocks() {
  const dash = document.getElementById('dash');
  dash.innerHTML = cities.map(city => `
  <div class="clock-card" id="${city.name}">
  <div class="face">
  <div class="hand hour"></div>
  <div class="hand min"></div>
  </div>
  <div class="city">${city.name}</div>
  <div class="time">00:00</div>
  <div class="status">CHECKING...</div>
  </div>
  `).join('');
}
function update() {
  cities.forEach(city => {
    const now    = new Date();
    const light  = now.toLocaleTimeString('en-US', { timeZone: city.tz, hour12: false });
    const [h2, m2] = light.split(':').map(Number);
    const str    = now.toLocaleTimeString('en-US', { timeZone: city.tz, hour12: true });
    const [h, m] = str.split(':').map(Number);
    
    const ampm   = str.split(' ');
    const ap     = ampm[1];
    const card   = document.getElementById(city.name);
    
    card.querySelector('.time').textContent =
      `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')} ${ap}`;
    card.querySelector('.hour').style.transform = `rotate(${(h * 30) + (m / 2)}deg)`;
    card.querySelector('.min').style.transform  = `rotate(${m * 6}deg)`;
    
    const isDay = h2 >= 6 && h2 < 18;
    card.querySelector('.status').textContent = isDay ? 'DAYTIME' : 'NIGHTTIME';
    card.style.opacity = isDay ? '1' : '0.8';
    card.style.color   = isDay ? 'cyan' : 'goldenrod';
  });
}
createClocks();
setInterval(update, 1000);
update();

//  const isDay = h >= 6 && h < 18;
