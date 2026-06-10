# SkillBridge BD - Demo Seed Scripts

This directory contains scripts for populating the database with realistic demo data.

## Prerequisites

1. A running Supabase project with migrations applied
2. Environment variables set in `.env.local` (or exported in your shell):
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key (found in Project Settings > API)

## Running the Seed Script

```bash
# From the project root directory:
npx tsx scripts/seed-demo.ts
```

The script will:
1. Create 8 job seeker accounts via Supabase Auth admin API
2. Create 5 employer accounts with associated companies
3. Create 15 job listings across different categories
4. Create 21 applications with varied statuses
5. Create 3 conversations with message history (for accepted applications)

## Demo Accounts

All accounts use the same password: **`Demo1234!`**

### Job Seekers

| Name | Email | Skills | Experience |
|------|-------|--------|------------|
| Rafiq Ahmed | rafiq.ahmed@demo.skillbridge.bd | React, Node.js, TypeScript, PostgreSQL | 4 years |
| Fatema Akter | fatema.akter@demo.skillbridge.bd | Python, ML, TensorFlow, SQL | 3 years |
| Kamal Hossain | kamal.hossain@demo.skillbridge.bd | Flutter, Dart, Firebase, Android | 1 year |
| Nusrat Jahan | nusrat.jahan@demo.skillbridge.bd | Figma, Adobe XD, User Research | 6 years |
| Tariq Rahman | tariq.rahman@demo.skillbridge.bd | AWS, Kubernetes, Docker, Terraform | 5 years |
| Tahmina Sultana | tahmina.sultana@demo.skillbridge.bd | SEO, Analytics, Content Strategy | 3 years |
| Nazmul Islam | nazmul.islam@demo.skillbridge.bd | Network Security, Pen Testing, SIEM | 4 years |
| Sharmin Nahar | sharmin.nahar@demo.skillbridge.bd | Excel, Financial Analysis, QuickBooks | 0 years (fresh grad) |

### Employers

| Name | Email | Company |
|------|-------|---------|
| Mizanur Haque | hr@tigerit.demo.skillbridge.bd | TigerIT Bangladesh |
| Dilruba Yasmin | hiring@pathao.demo.skillbridge.bd | Pathao |
| Rabeya Khatun | careers@shopup.demo.skillbridge.bd | ShopUp |
| Jahangir Kabir | jobs@chaldal.demo.skillbridge.bd | Chaldal |
| Shahin Mridha | recruit@datasoft.demo.skillbridge.bd | DataSoft Systems |

## What to Demonstrate

After seeding, here are some scenarios to showcase:

### As a Job Seeker (e.g., Rafiq Ahmed)
- View the dashboard with AI match recommendations
- Browse available jobs with match scores
- See application history with different statuses
- Open messaging with TigerIT (accepted application)

### As an Employer (e.g., Dilruba Yasmin / Pathao)
- View the employer dashboard with job listings
- Review applicants with AI-computed match scores
- See shortlisted, pending, and rejected candidates
- Manage company profile

### Key Features to Highlight
- AI matching scores showing compatibility percentages
- Application workflow (pending -> shortlisted -> accepted/rejected)
- Messaging unlocked only after acceptance
- Role-based dashboards (different views for seekers vs employers)

## Troubleshooting

**"Missing required environment variables"**
- Make sure `.env.local` has both `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`
- Or export them in your terminal before running the script

**"Failed to create auth user"**
- Verify the `SUPABASE_SERVICE_ROLE_KEY` is correct (not the anon key)
- Check that your Supabase project is running and accessible

**"User already exists"**
- The script handles this gracefully by reusing existing users
- To start fresh, delete users from the Supabase Auth dashboard first

**"Failed to insert profile"**
- Make sure all migrations have been applied (`supabase/migrations/`)
- Check that RLS policies are in place
