export type NavItem = {
  label: string;
  href?: string;
  comingSoon?: boolean;
  children?: NavItem[];
};

export type NavDropdownGroup = {
  title: string;
  items: NavItem[];
  infoTitle?: string;
  infoDesc?: string;
};

export type Lead = {
  name: string;
  email: string;
  company: string;
  role?: string;
  teamSize?: '1-10' | '11-50' | '51-200' | '201-1000' | '1000+';
  painPoint?: string;
  monthlyOutreachVolume?: '<100' | '100-500' | '500-2000' | '2000+';
  budgetSignal?: 'exploring' | 'budgeted' | 'urgent';
  score: number;
  leadId: string;
  createdAt: string;
};

export type MessageRole = 'user' | 'assistant';
