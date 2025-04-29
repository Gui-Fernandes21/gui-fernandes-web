import * as v from 'valibot';
import { toTypedSchema } from '@vee-validate/valibot';

export const contactSchema = toTypedSchema(
  v.object({
    name: v.pipe(v.string("A name is required"), v.minLength(3, 'Name is required!')),

    email: v.pipe(v.string("A valid email is required"), v.email('Must be a valid email address')),

    phone: v.pipe(v.string("A valid phone is required"), v.minLength(17, 'A valid phone is required!')),

    message: v.pipe(v.string('A message is required!'), v.minLength(2, 'A message is required!'), v.trim())
  })
);
