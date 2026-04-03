<template>
  <div class="carta-wrap" :class="tipo">
    <div class="carta-paper" :class="tipo">

      <div class="carta-deco-num">{{ ruta.num }}</div>
      <div class="carta-tag">{{ ruta.tag }}</div>

      <span class="carta-saludo">Para ti, hoy,</span>
      <h2 class="carta-titulo">{{ ruta.titulo }}</h2>

      <div class="carta-texto">
        <p v-for="(p, i) in ruta.texto" :key="i">{{ p }}</p>
      </div>

      <div class="carta-divider"></div>

      <div class="carta-rest">
        <span class="rest-emoji">{{ ruta.emoji }}</span>
        <div class="rest-info">
          <span class="rest-eyebrow">Empezamos aquí</span>
          <div class="rest-nombre">{{ ruta.restNombre }}</div>
          <div class="rest-sub">{{ ruta.restSub }}</div>
        </div>
      </div>

      <div class="carta-plan">
        <span class="plan-title">El plan del día</span>
        <div class="plan-item" v-for="(item, i) in ruta.plan" :key="i">
          <span class="plan-hora">{{ item.hora }}</span>
          <div class="plan-linea">
            <span class="plan-nombre">{{ item.nombre }}</span>
            <span class="plan-desc">{{ item.desc }}</span>
          </div>
        </div>
      </div>

      <div class="carta-divider"></div>

      <p class="carta-cierre">
        Hoy no hay apuro.<br>
        Solo nosotros y lo que venga.
      </p>
      <p class="carta-firma">— [tu nombre] ♡</p>

    </div>
    <button class="btn-volver" @click="$emit('volver')">← Volver</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { rutas } from '../services/invitacion.js'

const props = defineProps(['tipo'])
defineEmits(['volver'])

const ruta = computed(() => rutas[props.tipo])
</script>

<style scoped>
.carta-wrap {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 48px 20px 80px;
}

.carta-wrap.fria { background: var(--fria-pale); }
.carta-wrap.cal { background: var(--cal-pale); }

.carta-paper {
  background: white;
  max-width: 460px;
  width: 100%;
  padding: 52px 44px 48px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0,0,0,0.04), 0 20px 50px rgba(0,0,0,0.08);
  animation: unfold 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.carta-deco-num {
  position: absolute;
  top: 44px;
  right: 44px;
  font-family: 'Playfair Display', serif;
  font-size: 72px;
  font-weight: 400;
  font-style: italic;
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

.fria .carta-deco-num { color: rgba(13,43,69,0.05); }
.cal .carta-deco-num { color: rgba(107,32,16,0.05); }

.carta-tag {
  display: inline-flex;
  font-size: 9px;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 5px 12px;
  margin-bottom: 32px;
  border-radius: 2px;
}

.fria .carta-tag { background: var(--fria); color: var(--fria-accent); }
.cal .carta-tag { background: var(--cal); color: var(--cal-accent); }

.carta-saludo {
  font-family: 'Playfair Display', serif;
  font-size: 14px;
  font-style: italic;
  color: var(--stone);
  margin-bottom: 8px;
  display: block;
}

.carta-titulo {
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 6vw, 40px);
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 28px;
}

.fria .carta-titulo { color: var(--fria); }
.cal .carta-titulo { color: var(--cal); }

.carta-texto {
  font-size: 15px;
  font-weight: 300;
  line-height: 1.85;
  color: #555;
  margin-bottom: 32px;
}

.carta-texto p + p { margin-top: 16px; }

.carta-divider {
  height: 1px;
  margin: 28px 0;
}

.fria .carta-divider { background: linear-gradient(to right, var(--fria-accent), transparent); }
.cal .carta-divider { background: linear-gradient(to right, var(--cal-accent), transparent); }

.carta-rest {
  padding: 20px 22px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}

.fria .carta-rest { background: var(--fria); }
.cal .carta-rest { background: var(--cal); }

.rest-emoji { font-size: 24px; }

.rest-eyebrow {
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  margin-bottom: 4px;
  display: block;
}

.rest-nombre {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  color: white;
  margin-bottom: 3px;
}

.rest-sub {
  font-size: 11px;
  color: rgba(255,255,255,0.5);
  font-weight: 300;
}

.plan-title {
  font-size: 9px;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--stone);
  margin-bottom: 16px;
  display: block;
}

.plan-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 12px;
}

.plan-hora {
  font-size: 10px;
  letter-spacing: 1px;
  font-weight: 500;
  min-width: 44px;
  padding-top: 3px;
}

.fria .plan-hora { color: var(--fria-2); }
.cal .plan-hora { color: var(--cal-2); }

.plan-nombre {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink);
  display: block;
}

.plan-desc {
  font-size: 12px;
  font-weight: 300;
  color: var(--stone);
  line-height: 1.4;
  display: block;
}

.carta-cierre {
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  font-style: italic;
  color: var(--stone);
  line-height: 1.75;
  text-align: right;
  margin-bottom: 6px;
}

.carta-firma {
  font-size: 11px;
  letter-spacing: 2px;
  color: #c8c0b4;
  text-align: right;
}

.btn-volver {
  margin-top: 28px;
  padding: 12px 28px;
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-family: 'Jost', sans-serif;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--stone);
  cursor: pointer;
  transition: all 0.2s;
}

.btn-volver:hover {
  border-color: var(--stone);
  color: var(--ink);
}

@keyframes unfold {
  from { opacity: 0; transform: translateY(36px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
</style>