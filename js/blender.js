// Blender page — floating particle dots + filter
document.addEventListener('DOMContentLoaded', () => {

  // ── Floating particles ──
  const container = document.getElementById('blParticles');
  if (container) {
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div');
      p.className = 'bl-particle';
      const size = Math.random() * 3 + 1;
      p.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random()*100}%;
        bottom:${Math.random()*20}%;
        animation-duration:${6 + Math.random()*10}s;
        animation-delay:${Math.random()*8}s;
      `;
      container.appendChild(p);
    }
  }

  // ── Filter buttons ──
  const btns   = document.querySelectorAll('.filter-btn');
  const cards  = document.querySelectorAll('.render-card');
  const count  = document.getElementById('filterCount');

  function updateCount() {
    const vis = document.querySelectorAll('.render-card:not(.hidden)').length;
    if (count) count.textContent = vis + ' RENDERS';
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.cat === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
      updateCount();
    });
  });

  updateCount();
});
