/**
 * SkillBridge BD - Demo Data Seed Script
 *
 * This script populates the Supabase database with realistic demo data
 * so judges can see the platform in action.
 *
 * Requirements:
 *   - NEXT_PUBLIC_SUPABASE_URL environment variable
 *   - SUPABASE_SERVICE_ROLE_KEY environment variable
 *
 * Usage:
 *   npx tsx scripts/seed-demo.ts
 *
 * All demo users have password: Demo1234!
 */

import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('Missing required environment variables:')
  if (!SUPABASE_URL) console.error('  - NEXT_PUBLIC_SUPABASE_URL')
  if (!SERVICE_ROLE_KEY) console.error('  - SUPABASE_SERVICE_ROLE_KEY')
  console.error('\nPlease set these in your .env.local file or environment.')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

const DEMO_PASSWORD = 'Demo1234!'

// ============================================================
// DEMO DATA DEFINITIONS
// ============================================================

const jobSeekers = [
  {
    email: 'rafiq.ahmed@demo.skillbridge.bd',
    full_name: 'Rafiq Ahmed',
    phone: '+8801711000001',
    location: 'Dhaka',
    bio: 'Experienced full-stack developer with expertise in React and Node.js. Built scalable applications for fintech startups.',
    degree: 'bachelors',
    degree_field: 'Computer Science',
    experience_years: 4,
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
    languages: ['Bengali', 'English'],
    preferred_job_categories: ['software-engineering', 'web-development'],
  },
  {
    email: 'fatema.akter@demo.skillbridge.bd',
    full_name: 'Fatema Akter',
    phone: '+8801711000002',
    location: 'Dhaka',
    bio: 'Data science enthusiast with strong Python and ML background. Published research on NLP for Bengali language.',
    degree: 'masters',
    degree_field: 'Data Science',
    experience_years: 3,
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'Pandas', 'R'],
    languages: ['Bengali', 'English', 'Hindi'],
    preferred_job_categories: ['data-science', 'software-engineering'],
  },
  {
    email: 'kamal.hossain@demo.skillbridge.bd',
    full_name: 'Kamal Hossain',
    phone: '+8801711000003',
    location: 'Sylhet',
    bio: 'Fresh graduate passionate about mobile app development. Built 3 apps during university with 10K+ downloads.',
    degree: 'bachelors',
    degree_field: 'Software Engineering',
    experience_years: 1,
    skills: ['Flutter', 'Dart', 'Firebase', 'Java', 'Android'],
    languages: ['Bengali', 'English'],
    preferred_job_categories: ['mobile-development', 'software-engineering'],
  },
  {
    email: 'nusrat.jahan@demo.skillbridge.bd',
    full_name: 'Nusrat Jahan',
    phone: '+8801711000004',
    location: 'Dhaka',
    bio: 'Senior UI/UX designer with 6+ years creating digital experiences for enterprise clients and startups.',
    degree: 'bachelors',
    degree_field: 'Graphic Design',
    experience_years: 6,
    skills: ['Figma', 'Adobe XD', 'Sketch', 'HTML', 'CSS', 'User Research'],
    languages: ['Bengali', 'English'],
    preferred_job_categories: ['ui-ux-design', 'graphic-design'],
  },
  {
    email: 'tariq.rahman@demo.skillbridge.bd',
    full_name: 'Tariq Rahman',
    phone: '+8801711000005',
    location: 'Rajshahi',
    bio: 'DevOps engineer specializing in AWS cloud infrastructure and CI/CD pipelines. AWS Solutions Architect certified.',
    degree: 'bachelors',
    degree_field: 'Computer Engineering',
    experience_years: 5,
    skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Linux', 'Jenkins', 'Python'],
    languages: ['Bengali', 'English'],
    preferred_job_categories: ['devops', 'software-engineering'],
  },
  {
    email: 'tahmina.sultana@demo.skillbridge.bd',
    full_name: 'Tahmina Sultana',
    phone: '+8801711000006',
    location: 'Khulna',
    bio: 'Digital marketing specialist with expertise in SEO and content strategy. Grew organic traffic 300% for e-commerce clients.',
    degree: 'bachelors',
    degree_field: 'Marketing',
    experience_years: 3,
    skills: ['SEO', 'Google Analytics', 'Social Media Marketing', 'Content Strategy', 'Copywriting'],
    languages: ['Bengali', 'English'],
    preferred_job_categories: ['digital-marketing', 'marketing'],
  },
  {
    email: 'nazmul.islam@demo.skillbridge.bd',
    full_name: 'Nazmul Islam',
    phone: '+8801711000007',
    location: 'Gazipur',
    bio: 'Cybersecurity analyst with experience in penetration testing and SOC operations. CEH certified.',
    degree: 'masters',
    degree_field: 'Cybersecurity',
    experience_years: 4,
    skills: ['Network Security', 'Penetration Testing', 'SIEM', 'Python', 'Linux', 'Wireshark'],
    languages: ['Bengali', 'English'],
    preferred_job_categories: ['cybersecurity', 'it-support'],
  },
  {
    email: 'sharmin.nahar@demo.skillbridge.bd',
    full_name: 'Sharmin Nahar',
    phone: '+8801711000008',
    location: 'Dhaka',
    bio: 'Recent commerce graduate looking for accounting and finance roles. Strong analytical and Excel skills.',
    degree: 'bachelors',
    degree_field: 'Commerce',
    experience_years: 0,
    skills: ['Excel', 'Financial Analysis', 'QuickBooks', 'Tally', 'Accounting'],
    languages: ['Bengali', 'English'],
    preferred_job_categories: ['accounting', 'finance'],
  },
]

const employers = [
  {
    email: 'hr@tigerit.demo.skillbridge.bd',
    full_name: 'Mizanur Haque',
    phone: '+8801811000001',
    location: 'Dhaka',
    bio: 'HR Director at TigerIT Bangladesh, building world-class tech teams.',
    company: {
      name: 'TigerIT Bangladesh',
      description: 'Leading technology company specializing in biometric solutions, national ID systems, and enterprise software for government and private sectors across Asia and Africa.',
      industry: 'Information Technology',
      location: 'Dhaka',
      website: 'https://tigerit.com',
    },
  },
  {
    email: 'hiring@pathao.demo.skillbridge.bd',
    full_name: 'Dilruba Yasmin',
    phone: '+8801811000002',
    location: 'Dhaka',
    bio: 'Talent Acquisition Lead at Pathao, scaling engineering and operations teams.',
    company: {
      name: 'Pathao',
      description: 'Bangladesh\'s largest ride-sharing and logistics technology platform connecting millions of users with rides, food delivery, and courier services daily.',
      industry: 'Logistics',
      location: 'Dhaka',
      website: 'https://pathao.com',
    },
  },
  {
    email: 'careers@shopup.demo.skillbridge.bd',
    full_name: 'Rabeya Khatun',
    phone: '+8801811000003',
    location: 'Dhaka',
    bio: 'People Operations Manager at ShopUp, empowering small businesses through technology.',
    company: {
      name: 'ShopUp',
      description: 'B2B commerce platform empowering small retailers and manufacturers in Bangladesh with supply chain, logistics, and digital financial services.',
      industry: 'E-commerce',
      location: 'Dhaka',
      website: 'https://shopup.com.bd',
    },
  },
  {
    email: 'jobs@chaldal.demo.skillbridge.bd',
    full_name: 'Jahangir Kabir',
    phone: '+8801811000004',
    location: 'Dhaka',
    bio: 'CTO at Chaldal, scaling online grocery delivery infrastructure.',
    company: {
      name: 'Chaldal',
      description: 'Online grocery delivery platform revolutionizing how Bangladeshis shop for daily essentials with technology-driven logistics and a network of dark stores.',
      industry: 'E-commerce',
      location: 'Dhaka',
      website: 'https://chaldal.com',
    },
  },
  {
    email: 'recruit@datasoft.demo.skillbridge.bd',
    full_name: 'Shahin Mridha',
    phone: '+8801811000005',
    location: 'Dhaka',
    bio: 'Founder and CEO of DataSoft Systems, delivering enterprise data solutions since 2005.',
    company: {
      name: 'DataSoft Systems',
      description: 'Premier software development firm delivering cutting-edge data solutions, business intelligence platforms, and custom ERP systems for enterprises across Bangladesh.',
      industry: 'Software Development',
      location: 'Dhaka',
      website: 'https://datasoft-bd.com',
    },
  },
]

const jobListings = [
  {
    companyIndex: 0, // TigerIT
    title: 'Senior Full-Stack Developer',
    description: 'Join our core platform team to build scalable web applications for national identity systems. You will architect solutions handling millions of users.',
    requirements: 'Strong experience with React, Node.js, and PostgreSQL. Must have experience with microservices architecture and high-traffic systems.',
    required_skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    preferred_skills: ['Docker', 'AWS', 'GraphQL'],
    degree_requirement: 'bachelors',
    experience_min: 4,
    experience_max: 8,
    job_category: 'software-engineering',
    location: 'Dhaka',
    salary_min: 80000,
    salary_max: 150000,
    employment_type: 'full-time' as const,
  },
  {
    companyIndex: 0, // TigerIT
    title: 'Junior Frontend Developer',
    description: 'Work on exciting UI projects with mentorship from senior engineers. Build responsive interfaces for biometric enrollment systems.',
    requirements: 'Basic knowledge of React and CSS. Eagerness to learn and grow in a fast-paced environment.',
    required_skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    preferred_skills: ['TypeScript', 'Tailwind CSS'],
    degree_requirement: 'bachelors',
    experience_min: 0,
    experience_max: 2,
    job_category: 'web-development',
    location: 'Dhaka',
    salary_min: 25000,
    salary_max: 40000,
    employment_type: 'full-time' as const,
  },
  {
    companyIndex: 1, // Pathao
    title: 'DevOps Engineer',
    description: 'Build and maintain CI/CD pipelines, manage cloud resources on AWS, and ensure 99.99% uptime for our ride-sharing platform.',
    requirements: 'Strong experience with AWS, Kubernetes, and infrastructure as code. On-call rotation required.',
    required_skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
    preferred_skills: ['Ansible', 'Prometheus', 'Grafana'],
    degree_requirement: 'bachelors',
    experience_min: 3,
    experience_max: 7,
    job_category: 'devops',
    location: 'Dhaka',
    salary_min: 70000,
    salary_max: 130000,
    employment_type: 'full-time' as const,
  },
  {
    companyIndex: 1, // Pathao
    title: 'Digital Marketing Manager',
    description: 'Lead our digital marketing initiatives including SEO, SEM, social media campaigns, and performance marketing to grow user acquisition.',
    requirements: 'Proven track record in digital marketing with measurable results. Experience in app marketing preferred.',
    required_skills: ['SEO', 'Google Ads', 'Social Media Marketing', 'Analytics'],
    preferred_skills: ['Content Strategy', 'Email Marketing', 'A/B Testing'],
    degree_requirement: 'bachelors',
    experience_min: 3,
    experience_max: 6,
    job_category: 'digital-marketing',
    location: 'Dhaka',
    salary_min: 50000,
    salary_max: 85000,
    employment_type: 'full-time' as const,
  },
  {
    companyIndex: 1, // Pathao
    title: 'React Native Developer',
    description: 'Develop and maintain our rider and driver mobile applications. Optimize for performance across low-end Android devices.',
    requirements: 'Experience building production React Native apps. Understanding of mobile performance optimization.',
    required_skills: ['React Native', 'JavaScript', 'TypeScript', 'Mobile Development'],
    preferred_skills: ['Redux', 'GraphQL', 'App Store Deployment'],
    degree_requirement: 'bachelors',
    experience_min: 2,
    experience_max: 5,
    job_category: 'mobile-development',
    location: 'Dhaka',
    salary_min: 50000,
    salary_max: 90000,
    employment_type: 'full-time' as const,
  },
  {
    companyIndex: 2, // ShopUp
    title: 'Data Analyst',
    description: 'Analyze business metrics, build dashboards, and provide insights to help small retailers grow their businesses on our platform.',
    requirements: 'Strong SQL and Python skills. Experience with data visualization tools like Tableau or Power BI.',
    required_skills: ['SQL', 'Python', 'Data Visualization', 'Excel'],
    preferred_skills: ['Tableau', 'Power BI', 'Statistics'],
    degree_requirement: 'bachelors',
    experience_min: 1,
    experience_max: 4,
    job_category: 'data-science',
    location: 'Dhaka',
    salary_min: 35000,
    salary_max: 60000,
    employment_type: 'full-time' as const,
  },
  {
    companyIndex: 2, // ShopUp
    title: 'UI/UX Designer',
    description: 'Design intuitive interfaces for our B2B commerce platform. Conduct user research with small business owners across Bangladesh.',
    requirements: 'Proficiency in Figma. Portfolio demonstrating strong mobile-first design skills. Bengali language skills required for user research.',
    required_skills: ['Figma', 'User Research', 'Prototyping', 'UI Design'],
    preferred_skills: ['Adobe XD', 'Illustration', 'Motion Design'],
    degree_requirement: 'bachelors',
    experience_min: 2,
    experience_max: 6,
    job_category: 'ui-ux-design',
    location: 'Dhaka',
    salary_min: 40000,
    salary_max: 70000,
    employment_type: 'full-time' as const,
  },
  {
    companyIndex: 2, // ShopUp
    title: 'Customer Support Executive',
    description: 'Provide exceptional support to our merchant partners via phone, chat, and email. Help resolve platform issues and onboard new sellers.',
    requirements: 'Excellent communication skills in Bengali and English. Customer service experience preferred.',
    required_skills: ['Communication', 'Problem Solving', 'Bengali', 'English'],
    preferred_skills: ['CRM Software', 'Zendesk', 'Data Entry'],
    degree_requirement: 'bachelors',
    experience_min: 0,
    experience_max: 2,
    job_category: 'customer-support',
    location: 'Dhaka',
    salary_min: 18000,
    salary_max: 28000,
    employment_type: 'full-time' as const,
  },
  {
    companyIndex: 3, // Chaldal
    title: 'Backend Engineer',
    description: 'Build robust backend services for our e-commerce platform handling thousands of daily grocery orders across Dhaka and Chittagong.',
    requirements: 'Strong experience with Java/Spring Boot or Node.js. Understanding of distributed systems and message queues.',
    required_skills: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL'],
    preferred_skills: ['Redis', 'Kafka', 'Elasticsearch'],
    degree_requirement: 'bachelors',
    experience_min: 2,
    experience_max: 5,
    job_category: 'software-engineering',
    location: 'Dhaka',
    salary_min: 50000,
    salary_max: 90000,
    employment_type: 'full-time' as const,
  },
  {
    companyIndex: 3, // Chaldal
    title: 'Cybersecurity Analyst',
    description: 'Protect our e-commerce systems and customer payment data. Perform vulnerability assessments and implement security protocols.',
    requirements: 'Experience in network security, threat analysis, and security compliance. PCI-DSS knowledge preferred.',
    required_skills: ['Network Security', 'SIEM', 'Vulnerability Assessment', 'Python'],
    preferred_skills: ['Penetration Testing', 'SOC Operations', 'ISO 27001'],
    degree_requirement: 'bachelors',
    experience_min: 2,
    experience_max: 5,
    job_category: 'cybersecurity',
    location: 'Dhaka',
    salary_min: 55000,
    salary_max: 95000,
    employment_type: 'full-time' as const,
  },
  {
    companyIndex: 3, // Chaldal
    title: 'Accounting Manager',
    description: 'Oversee day-to-day accounting operations, financial reporting, and compliance for our rapidly growing operations.',
    requirements: 'CA or equivalent qualification. Experience with e-commerce or retail accounting.',
    required_skills: ['Financial Analysis', 'Accounting', 'Excel', 'QuickBooks'],
    preferred_skills: ['Tally', 'SAP', 'Tax Filing', 'Audit'],
    degree_requirement: 'bachelors',
    experience_min: 3,
    experience_max: 7,
    job_category: 'accounting',
    location: 'Dhaka',
    salary_min: 45000,
    salary_max: 75000,
    employment_type: 'full-time' as const,
  },
  {
    companyIndex: 4, // DataSoft
    title: 'Machine Learning Engineer',
    description: 'Develop and deploy ML models for our business intelligence products. Work on NLP solutions for Bengali text processing.',
    requirements: 'Strong background in statistics, machine learning, and Python. Experience deploying models to production.',
    required_skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
    preferred_skills: ['Deep Learning', 'NLP', 'MLOps', 'Docker'],
    degree_requirement: 'masters',
    experience_min: 2,
    experience_max: 5,
    job_category: 'data-science',
    location: 'Dhaka',
    salary_min: 60000,
    salary_max: 110000,
    employment_type: 'full-time' as const,
  },
  {
    companyIndex: 4, // DataSoft
    title: 'Project Manager',
    description: 'Manage cross-functional projects from inception to delivery. Coordinate between engineering, product, and business teams for enterprise clients.',
    requirements: 'PMP or equivalent certification preferred. Strong experience with Agile methodologies.',
    required_skills: ['Agile', 'Scrum', 'JIRA', 'Stakeholder Management'],
    preferred_skills: ['PMP', 'Risk Management', 'Budget Management'],
    degree_requirement: 'bachelors',
    experience_min: 5,
    experience_max: 10,
    job_category: 'project-management',
    location: 'Dhaka',
    salary_min: 70000,
    salary_max: 120000,
    employment_type: 'full-time' as const,
  },
  {
    companyIndex: 4, // DataSoft
    title: 'Content Writer (Part-time)',
    description: 'Create technical documentation, blog posts, and marketing content about our data analytics products and services.',
    requirements: 'Excellent writing skills in English. Understanding of technology and data concepts.',
    required_skills: ['Content Writing', 'Technical Writing', 'SEO', 'Research'],
    preferred_skills: ['WordPress', 'Copywriting', 'Data Literacy'],
    degree_requirement: 'bachelors',
    experience_min: 1,
    experience_max: 3,
    job_category: 'content-writing',
    location: 'Dhaka',
    salary_min: 15000,
    salary_max: 25000,
    employment_type: 'part-time' as const,
  },
  {
    companyIndex: 0, // TigerIT
    title: 'QA Engineer Intern',
    description: 'Learn quality assurance practices while testing our biometric verification systems. Mentorship from senior QA team provided.',
    requirements: 'Basic understanding of software testing concepts. Attention to detail and systematic thinking.',
    required_skills: ['Manual Testing', 'Bug Reporting', 'Test Cases'],
    preferred_skills: ['Selenium', 'JIRA', 'API Testing'],
    degree_requirement: 'bachelors',
    experience_min: 0,
    experience_max: 1,
    job_category: 'software-engineering',
    location: 'Dhaka',
    salary_min: 15000,
    salary_max: 22000,
    employment_type: 'internship' as const,
  },
]

// Application assignments: [jobSeekerIndex, jobIndex, status]
const applicationDefs: [number, number, 'pending' | 'shortlisted' | 'accepted' | 'rejected'][] = [
  // Rafiq (full-stack) applies to relevant jobs
  [0, 0, 'accepted'],   // Senior Full-Stack @ TigerIT -> accepted
  [0, 8, 'shortlisted'], // Backend Engineer @ Chaldal -> shortlisted

  // Fatema (data science) applies
  [1, 11, 'accepted'],  // ML Engineer @ DataSoft -> accepted
  [1, 5, 'shortlisted'], // Data Analyst @ ShopUp -> shortlisted
  [1, 0, 'rejected'],   // Senior Full-Stack @ TigerIT -> rejected (wrong fit)

  // Kamal (mobile dev) applies
  [2, 4, 'pending'],    // React Native @ Pathao -> pending
  [2, 1, 'shortlisted'], // Junior Frontend @ TigerIT -> shortlisted
  [2, 14, 'pending'],   // QA Intern @ TigerIT -> pending

  // Nusrat (UI/UX) applies
  [3, 6, 'accepted'],   // UI/UX Designer @ ShopUp -> accepted
  [3, 1, 'pending'],    // Junior Frontend @ TigerIT -> pending

  // Tariq (DevOps) applies
  [4, 2, 'shortlisted'], // DevOps @ Pathao -> shortlisted
  [4, 0, 'pending'],    // Senior Full-Stack @ TigerIT -> pending
  [4, 8, 'pending'],    // Backend Engineer @ Chaldal -> pending

  // Tahmina (marketing) applies
  [5, 3, 'pending'],    // Digital Marketing @ Pathao -> pending
  [5, 13, 'pending'],   // Content Writer @ DataSoft -> pending

  // Nazmul (cybersecurity) applies
  [6, 9, 'shortlisted'], // Cybersecurity @ Chaldal -> shortlisted
  [6, 2, 'rejected'],   // DevOps @ Pathao -> rejected

  // Sharmin (accounting) applies
  [7, 10, 'pending'],   // Accounting Manager @ Chaldal -> pending
  [7, 7, 'pending'],    // Customer Support @ ShopUp -> pending
  [7, 14, 'pending'],   // QA Intern @ TigerIT -> pending
  [7, 13, 'rejected'],  // Content Writer @ DataSoft -> rejected
]

// Conversations for accepted applications (indices into applicationDefs that are 'accepted')
// applicationDefs[0]: Rafiq accepted at TigerIT Senior Full-Stack
// applicationDefs[2]: Fatema accepted at DataSoft ML Engineer
// applicationDefs[8]: Nusrat accepted at ShopUp UI/UX Designer

const conversationMessages = [
  {
    applicationIndex: 0, // Rafiq <-> TigerIT
    messages: [
      { fromEmployer: true, content: 'Congratulations Rafiq! We are pleased to offer you the Senior Full-Stack Developer position at TigerIT Bangladesh. When would you be available to discuss the offer details?' },
      { fromEmployer: false, content: 'Thank you so much! I am very excited about this opportunity. I am available anytime this week for a call. Would Thursday at 3 PM work?' },
      { fromEmployer: true, content: 'Thursday at 3 PM works perfectly. I will send you a calendar invite. We will discuss compensation, start date, and team assignment. Looking forward to having you on board!' },
      { fromEmployer: false, content: 'Sounds great! I will be ready. Thank you for the opportunity.' },
    ],
  },
  {
    applicationIndex: 2, // Fatema <-> DataSoft
    messages: [
      { fromEmployer: true, content: 'Hi Fatema, congratulations on being selected for the Machine Learning Engineer role at DataSoft Systems! Your NLP research background is exactly what we need.' },
      { fromEmployer: false, content: 'Thank you! I am thrilled to join DataSoft. I have been following your work on Bengali NLP and am eager to contribute.' },
      { fromEmployer: true, content: 'That is wonderful to hear. Our team lead wants to schedule a brief onboarding call next Monday. Can you share your availability?' },
      { fromEmployer: false, content: 'Monday works for me. I am free between 10 AM and 4 PM. Please let me know the time that suits the team best.' },
      { fromEmployer: true, content: 'Let us do 11 AM. I will share the meeting link over email. Welcome aboard, Fatema!' },
    ],
  },
  {
    applicationIndex: 8, // Nusrat <-> ShopUp
    messages: [
      { fromEmployer: true, content: 'Hi Nusrat! Great news - we would love to have you as our UI/UX Designer at ShopUp. Your portfolio was impressive and the team loved your design approach.' },
      { fromEmployer: false, content: 'Thank you so much! I am really passionate about designing for small businesses and I think ShopUp is doing amazing work in this space.' },
      { fromEmployer: true, content: 'We feel the same way! Before you start, we would like to discuss your preferred tools setup and introduce you to the product team. Are you available for a 30-min call this Friday?' },
    ],
  },
]

// ============================================================
// SEED FUNCTIONS
// ============================================================

async function createAuthUser(email: string, fullName: string): Promise<string> {
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password: DEMO_PASSWORD,
    email_confirm: true,
    user_metadata: { full_name: fullName },
  })

  if (error) {
    // If user already exists, try to get their ID
    if (error.message.includes('already') || error.message.includes('exists')) {
      const { data: listData } = await supabase.auth.admin.listUsers()
      const existing = listData?.users?.find((u) => u.email === email)
      if (existing) {
        console.log(`  User ${email} already exists, reusing.`)
        return existing.id
      }
    }
    throw new Error(`Failed to create auth user ${email}: ${error.message}`)
  }

  return data.user.id
}

async function seedJobSeekers(): Promise<string[]> {
  console.log('\n--- Creating Job Seeker Accounts ---')
  const ids: string[] = []

  for (const seeker of jobSeekers) {
    const userId = await createAuthUser(seeker.email, seeker.full_name)
    ids.push(userId)
    console.log(`  Created: ${seeker.full_name} (${seeker.email}) -> ${userId}`)

    // Upsert profile into users table
    const { error } = await supabase.from('users').upsert({
      id: userId,
      email: seeker.email,
      full_name: seeker.full_name,
      role: 'jobseeker',
      phone: seeker.phone,
      location: seeker.location,
      bio: seeker.bio,
      degree: seeker.degree,
      degree_field: seeker.degree_field,
      experience_years: seeker.experience_years,
      skills: seeker.skills,
      languages: seeker.languages,
      preferred_job_categories: seeker.preferred_job_categories,
    }, { onConflict: 'id' })

    if (error) {
      throw new Error(`Failed to insert profile for ${seeker.email}: ${error.message}`)
    }
  }

  return ids
}

async function seedEmployers(): Promise<{ userIds: string[]; companyIds: string[] }> {
  console.log('\n--- Creating Employer Accounts & Companies ---')
  const userIds: string[] = []
  const companyIds: string[] = []

  for (const employer of employers) {
    const userId = await createAuthUser(employer.email, employer.full_name)
    userIds.push(userId)
    console.log(`  Created employer: ${employer.full_name} (${employer.email}) -> ${userId}`)

    // Upsert profile into users table
    const { error: profileError } = await supabase.from('users').upsert({
      id: userId,
      email: employer.email,
      full_name: employer.full_name,
      role: 'employer',
      phone: employer.phone,
      location: employer.location,
      bio: employer.bio,
      skills: [],
      languages: ['Bengali', 'English'],
      preferred_job_categories: [],
    }, { onConflict: 'id' })

    if (profileError) {
      throw new Error(`Failed to insert employer profile: ${profileError.message}`)
    }

    // Create company
    const { data: companyData, error: companyError } = await supabase
      .from('companies')
      .upsert({
        owner_id: userId,
        name: employer.company.name,
        description: employer.company.description,
        industry: employer.company.industry,
        location: employer.company.location,
        website: employer.company.website,
        verified: true,
      }, { onConflict: 'owner_id' })
      .select('id')
      .single()

    if (companyError) {
      throw new Error(`Failed to create company ${employer.company.name}: ${companyError.message}`)
    }

    companyIds.push(companyData.id)
    console.log(`  Created company: ${employer.company.name} -> ${companyData.id}`)
  }

  return { userIds, companyIds }
}

async function seedJobs(companyIds: string[]): Promise<string[]> {
  console.log('\n--- Creating Job Listings ---')
  const jobIds: string[] = []

  for (const job of jobListings) {
    const { data, error } = await supabase
      .from('jobs')
      .insert({
        company_id: companyIds[job.companyIndex],
        title: job.title,
        description: job.description,
        requirements: job.requirements,
        required_skills: job.required_skills,
        preferred_skills: job.preferred_skills,
        degree_requirement: job.degree_requirement,
        experience_min: job.experience_min,
        experience_max: job.experience_max,
        job_category: job.job_category,
        location: job.location,
        salary_min: job.salary_min,
        salary_max: job.salary_max,
        employment_type: job.employment_type,
        is_active: true,
      })
      .select('id')
      .single()

    if (error) {
      throw new Error(`Failed to create job "${job.title}": ${error.message}`)
    }

    jobIds.push(data.id)
    console.log(`  Created job: ${job.title} -> ${data.id}`)
  }

  return jobIds
}

async function seedApplications(
  jobSeekerIds: string[],
  jobIds: string[]
): Promise<{ id: string; jobSeekerIndex: number; jobIndex: number; status: string }[]> {
  console.log('\n--- Creating Applications ---')
  const applications: { id: string; jobSeekerIndex: number; jobIndex: number; status: string }[] = []

  for (const [seekerIdx, jobIdx, status] of applicationDefs) {
    const matchScore = generateMatchScore(status)
    const scoreBreakdown = {
      degree_relevance: Math.round(Math.random() * 30 + 50) / 100,
      skill_overlap: Math.round(Math.random() * 30 + 40) / 100,
      category_alignment: Math.round(Math.random() * 20 + 60) / 100,
      experience_compatibility: Math.round(Math.random() * 20 + 50) / 100,
      language_match: Math.round(Math.random() * 10 + 80) / 100,
    }

    const { data, error } = await supabase
      .from('applications')
      .insert({
        job_id: jobIds[jobIdx],
        user_id: jobSeekerIds[seekerIdx],
        status,
        match_score: matchScore,
        score_breakdown: scoreBreakdown,
        cover_letter: generateCoverLetter(jobSeekers[seekerIdx].full_name, jobListings[jobIdx].title),
      })
      .select('id')
      .single()

    if (error) {
      // Skip duplicates (unique constraint on job_id, user_id)
      if (error.message.includes('duplicate') || error.message.includes('unique')) {
        console.log(`  Skipped duplicate: ${jobSeekers[seekerIdx].full_name} -> ${jobListings[jobIdx].title}`)
        continue
      }
      throw new Error(`Failed to create application: ${error.message}`)
    }

    applications.push({ id: data.id, jobSeekerIndex: seekerIdx, jobIndex: jobIdx, status })
    console.log(`  Applied: ${jobSeekers[seekerIdx].full_name} -> ${jobListings[jobIdx].title} [${status}]`)
  }

  return applications
}

async function seedConversations(
  applications: { id: string; jobSeekerIndex: number; jobIndex: number; status: string }[],
  jobSeekerIds: string[],
  employerIds: string[],
  companyIds: string[]
): Promise<void> {
  console.log('\n--- Creating Conversations & Messages ---')

  for (const convDef of conversationMessages) {
    const app = applications.find(
      (a) => a.jobSeekerIndex === applicationDefs[convDef.applicationIndex][0] &&
             a.jobIndex === applicationDefs[convDef.applicationIndex][1] &&
             a.status === 'accepted'
    )

    if (!app) {
      console.log(`  Skipping conversation for application index ${convDef.applicationIndex} (not found or not accepted)`)
      continue
    }

    const jobDef = jobListings[app.jobIndex]
    const companyId = companyIds[jobDef.companyIndex]
    const userId = jobSeekerIds[app.jobSeekerIndex]

    // Create conversation
    const { data: convData, error: convError } = await supabase
      .from('conversations')
      .insert({
        application_id: app.id,
        company_id: companyId,
        user_id: userId,
      })
      .select('id')
      .single()

    if (convError) {
      console.log(`  Warning: Could not create conversation: ${convError.message}`)
      continue
    }

    console.log(`  Conversation created: ${jobSeekers[app.jobSeekerIndex].full_name} <-> ${employers[jobDef.companyIndex].company.name}`)

    // Insert messages with slight time offsets
    const baseTime = new Date()
    baseTime.setDate(baseTime.getDate() - 3) // Start messages 3 days ago

    for (let i = 0; i < convDef.messages.length; i++) {
      const msg = convDef.messages[i]
      const senderId = msg.fromEmployer ? employerIds[jobDef.companyIndex] : userId
      const messageTime = new Date(baseTime.getTime() + i * 3600000) // 1 hour apart

      const { error: msgError } = await supabase.from('messages').insert({
        conversation_id: convData.id,
        sender_id: senderId,
        content: msg.content,
        read: i < convDef.messages.length - 1, // Last message unread
        created_at: messageTime.toISOString(),
      })

      if (msgError) {
        console.log(`    Warning: Could not insert message: ${msgError.message}`)
      }
    }

    console.log(`    Added ${convDef.messages.length} messages`)
  }
}

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function generateMatchScore(status: string): number {
  switch (status) {
    case 'accepted':
      return Math.floor(Math.random() * 15) + 80 // 80-94
    case 'shortlisted':
      return Math.floor(Math.random() * 15) + 65 // 65-79
    case 'pending':
      return Math.floor(Math.random() * 20) + 50 // 50-69
    case 'rejected':
      return Math.floor(Math.random() * 20) + 30 // 30-49
    default:
      return 50
  }
}

function generateCoverLetter(name: string, jobTitle: string): string {
  const intros = [
    `I am writing to express my strong interest in the ${jobTitle} position.`,
    `I am excited to apply for the ${jobTitle} role at your company.`,
    `I believe my background makes me an excellent fit for the ${jobTitle} position.`,
  ]
  const bodies = [
    'My technical skills and project experience align well with the requirements you have outlined.',
    'I have worked on similar challenges in my previous roles and am confident I can contribute meaningfully to your team.',
    'I am passionate about this field and have been actively building my skills through both professional work and personal projects.',
  ]
  const closings = [
    'I look forward to the opportunity to discuss how I can contribute to your team.',
    'I would welcome the chance to discuss this role further and share more about my experience.',
    'Thank you for considering my application. I am eager to bring my skills to your organization.',
  ]

  const intro = intros[Math.floor(Math.random() * intros.length)]
  const body = bodies[Math.floor(Math.random() * bodies.length)]
  const closing = closings[Math.floor(Math.random() * closings.length)]

  return `Dear Hiring Manager,\n\n${intro}\n\n${body}\n\n${closing}\n\nBest regards,\n${name}`
}

// ============================================================
// MAIN
// ============================================================

async function main() {
  console.log('==============================================')
  console.log(' SkillBridge BD - Demo Data Seed Script')
  console.log('==============================================')
  console.log(`Supabase URL: ${SUPABASE_URL}`)
  console.log(`Password for all demo accounts: ${DEMO_PASSWORD}`)

  try {
    // Step 1: Create job seekers
    const jobSeekerIds = await seedJobSeekers()
    console.log(`\n  Total job seekers created: ${jobSeekerIds.length}`)

    // Step 2: Create employers and companies
    const { userIds: employerIds, companyIds } = await seedEmployers()
    console.log(`\n  Total employers created: ${employerIds.length}`)
    console.log(`  Total companies created: ${companyIds.length}`)

    // Step 3: Create jobs
    const jobIds = await seedJobs(companyIds)
    console.log(`\n  Total jobs created: ${jobIds.length}`)

    // Step 4: Create applications
    const applications = await seedApplications(jobSeekerIds, jobIds)
    console.log(`\n  Total applications created: ${applications.length}`)

    // Step 5: Create conversations and messages
    await seedConversations(applications, jobSeekerIds, employerIds, companyIds)

    console.log('\n==============================================')
    console.log(' Seed completed successfully!')
    console.log('==============================================')
    console.log('\nDemo accounts:')
    console.log('\nJob Seekers:')
    jobSeekers.forEach((s) => {
      console.log(`  ${s.full_name.padEnd(20)} | ${s.email}`)
    })
    console.log('\nEmployers:')
    employers.forEach((e) => {
      console.log(`  ${e.full_name.padEnd(20)} | ${e.email} | ${e.company.name}`)
    })
    console.log(`\nPassword for all accounts: ${DEMO_PASSWORD}`)
  } catch (error) {
    console.error('\nSeed failed:', error)
    process.exit(1)
  }
}

main()
