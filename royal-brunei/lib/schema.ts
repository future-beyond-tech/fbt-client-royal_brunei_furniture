import { z } from 'zod'

export const EnquirySchema = z.object({
  name: z
    .string()
    .min(2, 'Please enter your name')
    .max(80, 'Name is too long'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  category: z.string().min(1, 'Please select a category'),
  message: z.string().max(500, 'Keep it under 500 characters').optional(),
})

export type EnquiryFormData = z.infer<typeof EnquirySchema>
