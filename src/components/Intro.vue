<template>
  <div class="intro">
    <span class="intro-date">3 de abril · 2026</span>
    <span class="intro-heart">♡</span>
    <h1 class="intro-title">Buenos días,<br><em>amor mío.</em></h1>
    <p class="intro-sub">Hoy el día es tuyo.<br>Hay algo esperándote.</p>
    <button class="btn-primary" @click="siguiente">Abrir</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function siguiente() {
  router.push('/sobres')
}
</script>

<style scoped>
.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 48px 28px;
  text-align: center;
}

.intro-date {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--stone);
  margin-bottom: 24px;
  animation: rise 1s 0.2s both;
}

.intro-heart {
  font-size: 20px;
  color: #c0846a;
  margin-bottom: 24px;
  animation: rise 1s 0.4s both;
}

.intro-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(44px, 11vw, 80px);
  font-weight: 400;
  line-height: 1.05;
  margin-bottom: 20px;
  animation: rise 1s 0.6s both;
}

.intro-title em {
  font-style: italic;
  color: var(--stone);
}

.intro-sub {
  font-size: 15px;
  font-weight: 300;
  color: var(--stone);
  line-height: 1.7;
  margin-bottom: 48px;
  animation: rise 1s 0.8s both;
}

.btn-primary {
  padding: 16px 44px;
  background: var(--ink);
  color: white;
  border: none;
  border-radius: 2px;
  font-family: 'Jost', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;
  animation: rise 1s 1s both;
}

.btn-primary:hover {
  transform: translateY(-2px);
  opacity: 0.85;
}

@keyframes rise {
  from { opacity: 0; transform: translateY(22px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>