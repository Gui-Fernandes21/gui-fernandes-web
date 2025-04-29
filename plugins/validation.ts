import { defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';


export default defineNuxtPlugin(() => {
  defineRule('required', required);
  defineRule('email', email);
  defineRule('min', min);
  
  // 2) Configure global behavior
  configure({
    generateMessage: localize('en', {
      messages: {
        required: 'This field is required',
        email: 'Please enter a valid email',
        min: 'At least {length} characters are required'
      }
    }),
    validateOnInput: false, // real-time feedback
    validateOnBlur: true // also check on blur
  });
});
