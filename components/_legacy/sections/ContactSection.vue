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

      <Form @submit="onSubmit" class="form-grid" :validation-schema="contactSchema" v-slot="{ values, errors, meta }">
        <div class="form-control input full-width">
          <ErrorMessage name="name" />
          <Field :style="errors.name ? 'border-bottom: 1px solid red' : null" placeholder="Full Name" name="name" type="text" />
        </div>
        <div class="form-control">
          <ErrorMessage name="phone" />
          <Field :style="errors.phone ? 'border-bottom: 1px solid red' : null" placeholder="Phone" v-maska="'+1 (###) ###-####'" name="phone" type="tel" />
        </div>
        <div class="form-control">
          <ErrorMessage name="email" />
          <Field :style="errors.email ? 'border-bottom: 1px solid red' : null" placeholder="Email" name="email" type="email" />
        </div>
        <div class="form-control full-width">
          <ErrorMessage name="message" />
          <Field :style="errors.message ? 'border-bottom: 1px solid red' : null" as="textarea" placeholder="Message" name="message"></Field>
        </div>

        <div class="row action full-width">
          <button class="body-text full-width" type="submit">Send Email</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SubmissionHandler, FormActions, GenericObject } from 'vee-validate'

import { vMaska } from 'maska/vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { contactSchema } from '~/schemas/contactForm';
import axios from 'axios';

const loading = useState('loading');

const onSubmit: SubmissionHandler<GenericObject> = (values, actions: FormActions<GenericObject>) => {
  loading.value = true;
  
  axios
    .post('https://formspree.io/f/mayryokq', {...values})
    .then((result) => {
      console.log(result);
      if (result.status !== 200) {
        throw new Error('Back end problem');
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      actions.resetForm();
      loading.value = false;
    });
};
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
.form-control > span {
  color: #ff3e3ee6;
  font-size: 9px;
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

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.full-width {
  grid-column: span 2;
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

@media (min-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }

  .form-control.full-width {
    grid-column: span 2;
  }
}
</style>
