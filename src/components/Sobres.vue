<template>
  <div class="sobres">
    <div class="sobres-header">
      <span class="sobres-eyebrow">Tu elección</span>
      <h2 class="sobres-title">Dos sobres.<br>Tú decides.</h2>
      <p class="sobres-hint">Confía en lo que sientas.</p>
    </div>

    <div class="sobres-par">

      <div class="sobre-wrap" @click="$emit('elegir', 'fria')">
        <div class="sobre-outer">
          <span class="sobre-lazo">🎀</span>
          <svg viewBox="0 0 160 115" width="160" height="115" xmlns="http://www.w3.org/2000/svg">
            <rect width="160" height="115" rx="4" fill="#0d2b45"/>
            <polygon points="0,0 160,0 80,64" fill="#1a4a6e"/>
            <line x1="0" y1="115" x2="80" y2="64" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
            <line x1="160" y1="115" x2="80" y2="64" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
            <text x="80" y="95" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-family="Jost,sans-serif" font-size="8" letter-spacing="3">PARA TI</text>
          </svg>
        </div>
        <span class="sobre-label" style="color: var(--fria-2)">Lazo azul</span>
      </div>

      <span class="o-sep">o</span>

      <div class="sobre-wrap" @click="$emit('elegir', 'cal')">
        <div class="sobre-outer">
          <span class="sobre-lazo">🎀</span>
          <svg viewBox="0 0 160 115" width="160" height="115" xmlns="http://www.w3.org/2000/svg">
            <rect width="160" height="115" rx="4" fill="#6b2010"/>
            <polygon points="0,0 160,0 80,64" fill="#b8431a"/>
            <line x1="0" y1="115" x2="80" y2="64" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
            <line x1="160" y1="115" x2="80" y2="64" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
            <text x="80" y="95" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-family="Jost,sans-serif" font-size="8" letter-spacing="3">PARA TI</text>
          </svg>
        </div>
        <span class="sobre-label" style="color: var(--cal-2)">Lazo naranja</span>
      </div>

    </div>
  </div>
</template>

<script setup>
defineEmits(['elegir'])
</script>

<style scoped>
.sobres {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 48px 24px;
  gap: 48px;
  text-align: center;
}

.sobres-eyebrow {
  font-size: 10px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--stone);
  display: block;
  margin-bottom: 16px;
}

.sobres-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(26px, 6vw, 42px);
  font-weight: 400;
  font-style: italic;
  color: var(--ink);
  line-height: 1.2;
  margin-bottom: 10px;
}

.sobres-hint {
  font-size: 13px;
  font-weight: 300;
  color: var(--stone);
}

.sobres-par {
  display: flex;
  gap: 28px;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
}

.sobre-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  cursor: pointer;
}

.sobre-outer {
  position: relative;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  filter: drop-shadow(0 12px 28px rgba(0,0,0,0.18));
}

.sobre-wrap:hover .sobre-outer {
  transform: translateY(-10px) rotate(-2deg);
}

.sobre-wrap:last-child:hover .sobre-outer {
  transform: translateY(-10px) rotate(2deg);
}

.sobre-lazo {
  position: absolute;
  top: -22px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 26px;
  pointer-events: none;
}

.sobre-label {
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 500;
}

.o-sep {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-style: italic;
  color: #d5cfc5;
  padding-bottom: 12px;
}
</style>