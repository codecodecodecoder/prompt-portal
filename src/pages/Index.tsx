import FunctionCard from "@/components/FunctionCard";
import { Search, Building2, TrendingUp, Shield, DollarSign, Users, Cpu, Scale, FileSearch } from "lucide-react";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";

const gosiLogo = "data:image/png;base64,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";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const departments = [
    {
      name: "Strategy & Transformation",
      icon: TrendingUp,
      prompts: [
        { category: "Strategic Planning", title: "SWOT Summary", prompt: "Strategy – Strategic Planning – SWOT Summary → Summarize this document into 5 key strategic objectives." },
        { category: "Strategic Planning", title: "SWOT Analysis", prompt: "Strategy – Strategic Planning – SWOT Analysis → Create a SWOT analysis from the provided text." },
        { category: "Strategic Planning", title: "Strategic Initiatives", prompt: "Strategy – Strategic Planning – Strategic Initiatives → Suggest 3 strategic initiatives to achieve [goal]." },
        { category: "Performance & Risk", title: "KPI Highlights", prompt: "Strategy – Performance & Risk – KPI Highlights → Generate a KPI dashboard summary for this data." },
        { category: "Performance & Risk", title: "Risk Register", prompt: "Strategy – Performance & Risk – Risk Register → List potential risks and mitigation measures from this report." },
        { category: "Performance & Risk", title: "Performance Review", prompt: "Strategy – Performance & Risk – Performance Review → Write a 1-page performance evaluation for [project]." },
        { category: "PMO", title: "RACI Builder", prompt: "Strategy – PMO – RACI Builder → Prepare a RACI matrix for this project description." },
        { category: "PMO", title: "Timeline Summary", prompt: "Strategy – PMO – Timeline Summary → Convert this timeline into a Gantt-style summary." },
        { category: "PMO", title: "Lessons Learned", prompt: "Strategy – PMO – Lessons Learned → Highlight lessons learned and best practices from this report." },
      ]
    },
    {
      name: "Financial Affairs",
      icon: DollarSign,
      prompts: [
        { category: "Budget & Planning", title: "Variance Analysis", prompt: "Finance – Budget & Planning – Variance Analysis → Prepare a variance analysis (CY vs LY) from this table." },
        { category: "Budget & Planning", title: "Cost Savings", prompt: "Finance – Budget & Planning – Cost Savings → Suggest cost-optimization measures for this budget." },
        { category: "Budget & Planning", title: "Forecast Report", prompt: "Finance – Budget & Planning – Forecast Report → Forecast next quarter's financials based on this data." },
        { category: "Accounts", title: "Ledger Summary", prompt: "Finance – Accounts – Ledger Summary → Summarize this ledger into receivables vs payables." },
        { category: "Accounts", title: "Trial Balance", prompt: "Finance – Accounts – Trial Balance → Convert these transactions into a clean trial balance format." },
        { category: "Accounts", title: "Variance Explainer", prompt: "Finance – Accounts – Variance Explainer → Explain variances in accounts in simple language for non-finance audience." },
        { category: "Control", title: "Anomaly Check", prompt: "Finance – Control – Anomaly Check → Identify anomalies or red flags in this financial report." },
        { category: "Control", title: "Compliance List", prompt: "Finance – Control – Compliance List → Generate a compliance checklist from this policy." },
        { category: "Control", title: "Control Gaps", prompt: "Finance – Control – Control Gaps → Summarize control weaknesses and recommendations." },
        { category: "Procurement", title: "RFP Draft", prompt: "Finance – Procurement – RFP Draft → Draft an RFP based on these requirements." },
        { category: "Procurement", title: "Supplier Criteria", prompt: "Finance – Procurement – Supplier Criteria → Summarize supplier evaluation criteria." },
        { category: "Procurement", title: "Contract Risks", prompt: "Finance – Procurement – Contract Risks → Extract key terms and risks from this contract." },
      ]
    },
    {
      name: "Insurance Affairs",
      icon: Shield,
      prompts: [
        { category: "Contributions", title: "Contribution Trends", prompt: "Insurance – Contributions – Contribution Trends → Summarize the contribution trends from this data." },
        { category: "Contributions", title: "Employer Note", prompt: "Insurance – Contributions – Employer Note → Prepare a 3-point note for employers on contribution compliance." },
        { category: "Contributions", title: "Data Anomalies", prompt: "Insurance – Contributions – Data Anomalies → List anomalies in contribution records." },
        { category: "Pensions", title: "Eligibility Guide", prompt: "Insurance – Pensions – Eligibility Guide → Explain eligibility conditions for pension in simple terms." },
        { category: "Pensions", title: "Case Risking", prompt: "Insurance – Pensions – Case Risking → Summarize pension cases by risk level." },
        { category: "Pensions", title: "Retiree FAQ", prompt: "Insurance – Pensions – Retiree FAQ → Draft an FAQ for retirees from this policy." },
        { category: "Establishments", title: "Registration Rules", prompt: "Insurance – Establishments – Registration Rules → Summarize registration requirements for new establishments." },
        { category: "Establishments", title: "Service Guide", prompt: "Insurance – Establishments – Service Guide → Generate a customer-friendly guide from this process." },
        { category: "Establishments", title: "Checklist Builder", prompt: "Insurance – Establishments – Checklist Builder → Prepare a step-by-step checklist for subscriber services." },
      ]
    },
    {
      name: "Investments",
      icon: TrendingUp,
      prompts: [
        { category: "General", title: "Portfolio Summary", prompt: "Investments – General – Portfolio Summary → Summarize portfolio performance into key highlights." },
        { category: "General", title: "Committee Memo", prompt: "Investments – General – Committee Memo → Draft an investment committee memo from this data." },
        { category: "General", title: "Chart Explainer", prompt: "Investments – General – Chart Explainer → Explain this financial chart for a non-expert audience." },
        { category: "Real Estate", title: "ROI Summary", prompt: "Investments – Real Estate – ROI Summary → Summarize real estate ROI from this dataset." },
        { category: "Real Estate", title: "Risk-Reward Note", prompt: "Investments – Real Estate – Risk-Reward Note → Prepare a risk vs reward analysis of these properties." },
        { category: "Real Estate", title: "Market Trends", prompt: "Investments – Real Estate – Market Trends → Draft a briefing note on real estate market trends." },
        { category: "Equities", title: "Equities Snapshot", prompt: "Investments – Equities – Equities Snapshot → Summarize stock performance into 3 key insights." },
        { category: "Equities", title: "Local vs Global", prompt: "Investments – Equities – Local vs Global → Prepare a report comparing local vs international equities." },
        { category: "Equities", title: "Equity Outlook", prompt: "Investments – Equities – Equity Outlook → Write a one-paragraph investment outlook." },
        { category: "Fixed Income", title: "Bond Yields", prompt: "Investments – Fixed Income – Bond Yields → Summarize bond yields and risks from this report." },
        { category: "Fixed Income", title: "Diversification Note", prompt: "Investments – Fixed Income – Diversification Note → Prepare a fixed-income portfolio diversification note." },
        { category: "Fixed Income", title: "Rate Impact", prompt: "Investments – Fixed Income – Rate Impact → Explain the impact of interest rate changes in plain English." },
      ]
    },
    {
      name: "Shared Services",
      icon: Users,
      prompts: [
        { category: "HR", title: "Survey Summary", prompt: "Shared Services – HR – Survey Summary → Summarize employee satisfaction survey results." },
        { category: "HR", title: "JD Draft", prompt: "Shared Services – HR – JD Draft → Draft a job description for [role]." },
        { category: "HR", title: "Onboarding Guide", prompt: "Shared Services – HR – Onboarding Guide → Write a short onboarding guide for new hires." },
        { category: "Training", title: "TNA Report", prompt: "Shared Services – Training – TNA Report → Generate a training needs analysis from this data." },
        { category: "Training", title: "Learning Outcomes", prompt: "Shared Services – Training – Learning Outcomes → Summarize learning outcomes from the course." },
        { category: "Training", title: "Module Ideas", prompt: "Shared Services – Training – Module Ideas → Suggest 3 new training modules for [skill]." },
        { category: "Support", title: "Service Requests", prompt: "Shared Services – Support – Service Requests → Summarize service requests by category and urgency." },
        { category: "Support", title: "Response Template", prompt: "Shared Services – Support – Response Template → Generate a standard response template for common queries." },
        { category: "Support", title: "Service Plan", prompt: "Shared Services – Support – Service Plan → Draft a service improvement plan." },
        { category: "General", title: "Maintenance Report", prompt: "Shared Services – General – Maintenance Report → Summarize maintenance requests into a weekly report." },
        { category: "General", title: "Facility Checklist", prompt: "Shared Services – General – Facility Checklist → Prepare a facility management checklist." },
        { category: "General", title: "Facility Policy Note", prompt: "Shared Services – General – Facility Policy Note → Draft a short communication on new facility policies." },
      ]
    },
    {
      name: "Information Technology",
      icon: Cpu,
      prompts: [
        { category: "Infrastructure", title: "Uptime Report", prompt: "IT – Infrastructure – Uptime Report → Summarize system uptime and outages from this log." },
        { category: "Infrastructure", title: "Capacity Plan", prompt: "IT – Infrastructure – Capacity Plan → Prepare a capacity planning report." },
        { category: "Infrastructure", title: "Infra Dashboard", prompt: "IT – Infrastructure – Infra Dashboard → Draft a high-level infra health dashboard." },
        { category: "Applications", title: "Code Docs", prompt: "IT – Applications – Code Docs → Generate documentation from this code snippet." },
        { category: "Applications", title: "SQL Optimizer", prompt: "IT – Applications – SQL Optimizer → Suggest improvements to this SQL query." },
        { category: "Applications", title: "Feedback to Features", prompt: "IT – Applications – Feedback to Features → Summarize user feedback into feature requests." },
        { category: "Cybersecurity", title: "Incident Report", prompt: "IT – Cybersecurity – Incident Report → Summarize security incidents into a risk report." },
        { category: "Cybersecurity", title: "Awareness Email", prompt: "IT – Cybersecurity – Awareness Email → Generate a phishing awareness email for employees." },
        { category: "Cybersecurity", title: "Data Protection List", prompt: "IT – Cybersecurity – Data Protection List → Create a checklist for data protection compliance." },
        { category: "Digital", title: "Roadmap Summary", prompt: "IT – Digital – Roadmap Summary → Summarize digital initiatives into a roadmap." },
        { category: "Digital", title: "Tech Business Case", prompt: "IT – Digital – Tech Business Case → Draft a business case for adopting [new tech]." },
        { category: "Digital", title: "Digital KPIs", prompt: "IT – Digital – Digital KPIs → Prepare an executive summary of digital KPIs." },
      ]
    },
    {
      name: "Legal Affairs",
      icon: Scale,
      prompts: [
        { category: "General", title: "Law Summary", prompt: "Legal – General – Law Summary → Summarize this regulation into 5 bullet points." },
        { category: "General", title: "Compliance Risks", prompt: "Legal – General – Compliance Risks → Highlight compliance risks in this document." },
        { category: "General", title: "Plain-Law Note", prompt: "Legal – General – Plain-Law Note → Draft a simple explanation of this law for employees." },
        { category: "Contracts", title: "Obligations Extract", prompt: "Legal – Contracts – Obligations Extract → Extract obligations and deadlines from this contract." },
        { category: "Contracts", title: "Key Risks", prompt: "Legal – Contracts – Key Risks → Summarize key risks and clauses." },
        { category: "Contracts", title: "Negotiation Note", prompt: "Legal – Contracts – Negotiation Note → Draft a negotiation summary note." },
        { category: "Regulations", title: "Update Summary", prompt: "Legal – Regulations – Update Summary → Summarize regulatory updates into 3 key impacts." },
        { category: "Regulations", title: "Compliance Brief", prompt: "Legal – Regulations – Compliance Brief → Draft a compliance briefing note." },
        { category: "Regulations", title: "Rule Comparison", prompt: "Legal – Regulations – Rule Comparison → Prepare a side-by-side comparison of old vs new rules." },
      ]
    },
    {
      name: "Internal Audit",
      icon: FileSearch,
      prompts: [
        { category: "Internal Audit", title: "Audit Findings", prompt: "Audit – Internal Audit – Audit Findings → Summarize audit findings into key risks and recommendations." },
        { category: "Internal Audit", title: "Exec Summary", prompt: "Audit – Internal Audit – Exec Summary → Prepare an executive summary for the Audit Committee." },
        { category: "Internal Audit", title: "Follow-up Checklist", prompt: "Audit – Internal Audit – Follow-up Checklist → Generate a follow-up checklist for corrective actions." },
      ]
    },
  ];

  const filteredDepartments = useMemo(() => {
    if (!searchQuery.trim()) return departments;
    
    const query = searchQuery.toLowerCase();
    return departments
      .map(dept => ({
        ...dept,
        prompts: dept.prompts.filter(prompt =>
          prompt.title.toLowerCase().includes(query) ||
          prompt.category.toLowerCase().includes(query) ||
          prompt.prompt.toLowerCase().includes(query) ||
          dept.name.toLowerCase().includes(query)
        )
      }))
      .filter(dept => dept.prompts.length > 0);
  }, [searchQuery, departments]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white dark:bg-white px-3 py-2 rounded-lg">
              <img src={gosiLogo} alt="GOSI Logo" className="h-10 w-auto" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">GOSI AI Assistant</h1>
              <p className="text-xs text-muted-foreground">Department-Wise Prompt Libraries</p>
            </div>
          </div>
          <a 
            href="https://llm-platform.gosi.ins/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Search className="h-4 w-4" />
            <span className="text-sm font-medium">Open Platform</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[image:var(--gradient-hero)] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              📚 Department-Wise Prompt Libraries
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Explore AI-powered prompts organized by GOSI departments. Click any card to execute the prompt instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {filteredDepartments.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No prompts found matching "{searchQuery}"</p>
            </div>
          ) : (
            filteredDepartments.map((dept, deptIndex) => {
            const Icon = dept.icon;
            const gradients = ["gradient-1", "gradient-2", "gradient-3"] as const;
            
            return (
              <div key={deptIndex} className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b-2 border-primary/20">
                  <div className="h-12 w-12 rounded-xl bg-[image:var(--gradient-hero)] flex items-center justify-center">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">{dept.name}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {dept.prompts.map((prompt, promptIndex) => (
                    <FunctionCard
                      key={promptIndex}
                      title={prompt.title}
                      description={prompt.prompt}
                      prompt={prompt.prompt}
                      gradient={gradients[promptIndex % 3]}
                      tags={[prompt.category]}
                    />
                  ))}
                </div>
              </div>
            );
          }))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-8 bg-card">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 GOSI. All rights reserved. Powered by GOSI LLM Platform.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;