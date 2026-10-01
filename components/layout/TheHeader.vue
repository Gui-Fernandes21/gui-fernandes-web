<template>
  <header class="header" :class="{ scrolled }">
    <div class="wrap bar">
      <a class="brand" href="#top"
        >{{ profile.firstName }} <i>{{ profile.lastName }}</i></a
      >

      <nav class="menu">
        <a v-for="link in navLinks" :key="link.id" :href="`#${link.id}`" :class="{ active: active === link.id }">{{ link.label }}</a>
      </nav>

      <div class="actions">
        <div class="availability">
          <i class="dot"></i>
          <span>{{ profile.availability }}</span>
        </div>
        <MobileMenu :links="navLinks" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { navLinks, profile } from '~/data/profile';

const { active, scrolled } = useActiveSection(navLinks.map((link) => link.id));
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  border-bottom: 1px solid transparent;
  background: rgba(245, 243, 238, 0.86);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: border-color 300ms;
}

.header.scrolled {
  border-color: var(--line);
}

.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  height: 68px;
}

.brand {
  font-family: var(--serif);
  font-size: 26px;
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.brand i {
  color: var(--accent);
}

.menu {
  display: flex;
  gap: 28px;
  font-size: 14px;
}

.menu a {
  position: relative;
  color: var(--ink-2);
}

/* Underline that draws in from the left */
.menu a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  height: 1px;
  background: var(--ink);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 400ms var(--ease-in-out);
}

.menu a:hover::after,
.menu a.active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.availability {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--ink-2);
  white-space: nowrap;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #1fc774;
  box-shadow: 0 0 0 3px rgba(31, 199, 116, 0.2);
  animation: ping 2.4s infinite;
}

@keyframes ping {
  50% {
    box-shadow: 0 0 0 6px rgba(31, 199, 116, 0);
  }
}

@media only screen and (max-width: 1000px) {
  .menu {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  .availability span {
    display: none;
  }
}
</style>
