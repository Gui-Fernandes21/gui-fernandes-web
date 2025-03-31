<template>
  <div class="section-wrapper" id="contact">
    <SectionToast>
      <nuxt-icon class="icon" name="contact"></nuxt-icon>
      <span class="body-text bold">Contact</span>
    </SectionToast>

    <div class="content-wrapper">
      <header>
        <h2 class="heading-2 bold">Let's Work <span class="primary-text">Together</span></h2>
        <!-- <h4 class="heading-4">GuiFernandesPro@gmail.com</h4> -->
      </header>

      <form @submit.prevent class="form-grid">
        <div class="form-control input full-width">
          <input placeholder="Full Name" name="name" v-model="name" type="text" />
        </div>
        <div class="form-control">
          <input placeholder="Phone" v-maska="'+1 (###) ###-####'" name="phone" v-model="phone" type="tel" />
        </div>
        <div class="form-control">
          <input placeholder="Email" name="email" v-model="email" type="email" />
        </div>
        <div class="form-control full-width">
          <textarea placeholder="Message" name="message" v-model="message"></textarea>
        </div>
      </form>
      <div class="row action">
        <button class="body-text" @click="sendMail" type="submit">Send Message</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { vMaska } from 'maska/vue';

const loading = useState('loading');

const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');
const subject = ref('');

function sendMail() {
  loading.value = true;
  axios
    .post('https://formspree.io/f/mayryokq', {
      message: message.value,
      name: name.value,
      phone: phone.value,
      email: email.value,
      subject: subject.value
    })
    .then((result) => {
      console.log(result);
      if (result.status == 200) {
        clearFields();
        loading.value = false;
      } else {
        throw new Error('Back end problem');
      }
    })
    .catch((err) => {
      loading.value = false;
      console.log(err);
    });
}
function clearFields() {
  name.value = '';
  email.value = '';
  phone.value = '';
  message.value = '';
}
</script>

<style scoped>
header {
  text-align: center;
}
header > h4 {
  font-size: 12px;
}
.icon :deep(svg) {
  font-size: 1rem;
}
.content-wrapper {
  justify-content: center;
  flex-direction: column;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  align-items: center;
  margin-top: 1rem;
}
.row {
  display: flex;
  gap: 10px;

  width: 100%;
}
.form-control {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.form-control > textarea {
  min-height: 150px;
}
.form-control > input,
.form-control > textarea {
  background: transparent;
  border: none;
  border-bottom: 1.5px solid var(--primary-dark);
  border-radius: 2px;
  color: var(--gray-100);
  font-family: 'Source Sans 3', sans-serif;
  padding: 10px 12px;

  outline: none;
}

.form-control {
  textarea:hover,
  input:hover,
  textarea:focus,
  input:focus {
    background: rgba(91, 91, 91, 0.39);
    border-bottom: 1.5px solid var(--primary-light);
  }
}
.form-control > label {
  color: var(--gray-100);
  margin-bottom: 4px;
}
.textArea {
  width: 100%;
}
.input {
  width: 100%;
}
.row.action {
  display: flex;
  margin-top: 1rem;
}
.action > button {
  border-radius: 10px;
  background: var(--primary);
  border: 1px solid var(--primary);
  padding: 1rem 2rem;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--dark);

  width: 100%;

  font-weight: bold;
  font-family: 'Source Sans 3', sans-serif;

  &:hover {
    background: var(--dark);
    color: var(--primary);
  }
}

@media only screen and (max-width: 680px) {
  .form-grid {
    display: flex !important;
    flex-direction: column;
    gap: 1rem;
  }
  .form-control {
    width: 100%;
  }
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.form-control.full-width {
  grid-column: span 2;
}

@media (min-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }

  .form-control.full-width {
    grid-column: span 2;
  }
}
</style>
