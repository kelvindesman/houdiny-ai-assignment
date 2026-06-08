import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  role: z.string().optional(),
  teamSize: z.enum(['1-10', '11-50', '51-200', '201-1000', '1000+']).optional(),
  painPoint: z.string().optional(),
  monthlyOutreachVolume: z.enum(['<100', '100-500', '500-2000', '2000+']).optional(),
  budgetSignal: z.enum(['exploring', 'budgeted', 'urgent']).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
