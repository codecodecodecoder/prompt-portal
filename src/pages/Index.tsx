import FunctionCard from "@/components/FunctionCard";
import { Bot, Search } from "lucide-react";

const Index = () => {
  const gosiPayPrompts = [
    {
      title: "GOSI Pay Registration",
      description: "Get guidance on registering for GOSI Pay, including step-by-step instructions, required documents, and eligibility criteria for establishing your account.",
      prompt: "Guide me through the GOSI Pay registration process including required documents and eligibility criteria",
      tags: ["Registration", "Getting Started"],
      gradient: "gradient-1" as const,
    },
    {
      title: "Monthly Contributions",
      description: "Learn how to calculate and submit your monthly GOSI contributions, understand payment schedules, and ensure timely compliance with all requirements.",
      prompt: "Explain how to calculate and submit monthly GOSI contributions and payment schedules",
      tags: ["Payments", "Compliance"],
      gradient: "gradient-2" as const,
    },
    {
      title: "Employer Dashboard",
      description: "Navigate the employer dashboard to manage employees, view payment history, generate reports, and access all administrative functions efficiently.",
      prompt: "Show me how to use the GOSI Pay employer dashboard to manage employees and view reports",
      tags: ["Dashboard", "Management"],
      gradient: "gradient-3" as const,
    },
    {
      title: "Employee Management",
      description: "Add, update, or remove employee records in GOSI Pay system, manage their contribution details, and maintain accurate workforce information.",
      prompt: "How do I add, update, or remove employees in the GOSI Pay system?",
      tags: ["Employees", "HR"],
      gradient: "gradient-1" as const,
    },
    {
      title: "Payment Methods",
      description: "Explore available payment options including online transfers, direct debit, and bank payments. Set up automatic payments for convenience.",
      prompt: "What are the available payment methods for GOSI contributions and how to set up automatic payments?",
      tags: ["Payments", "Banking"],
      gradient: "gradient-2" as const,
    },
    {
      title: "Compliance Reports",
      description: "Generate and download compliance reports, certificates of coverage, and contribution statements required for audits and official purposes.",
      prompt: "Help me generate compliance reports and certificates of coverage from GOSI Pay",
      tags: ["Reports", "Compliance"],
      gradient: "gradient-3" as const,
    },
    {
      title: "Coverage Verification",
      description: "Verify employee coverage status, check contribution history, and obtain official documentation proving GOSI social insurance enrollment.",
      prompt: "How can I verify an employee's GOSI coverage status and contribution history?",
      tags: ["Verification", "Coverage"],
      gradient: "gradient-1" as const,
    },
    {
      title: "Penalties & Fines",
      description: "Understand penalty structures for late payments, learn how to avoid fines, and discover options for penalty waivers or payment plans.",
      prompt: "Explain GOSI penalties for late contributions and how to avoid or appeal fines",
      tags: ["Penalties", "Compliance"],
      gradient: "gradient-2" as const,
    },
    {
      title: "Wage Updates",
      description: "Update employee wage information when salaries change, ensure accurate contribution calculations, and maintain current compensation records.",
      prompt: "Guide me on updating employee wages in GOSI Pay to ensure accurate contributions",
      tags: ["Wages", "Updates"],
      gradient: "gradient-3" as const,
    },
    {
      title: "Account Reconciliation",
      description: "Reconcile your GOSI account statements, identify discrepancies, resolve payment issues, and ensure all records are accurate and up-to-date.",
      prompt: "How do I reconcile GOSI account statements and resolve payment discrepancies?",
      tags: ["Reconciliation", "Accounting"],
      gradient: "gradient-1" as const,
    },
    {
      title: "Benefits Claims",
      description: "Help employees file claims for GOSI benefits including retirement, disability, medical, and unemployment insurance through the proper channels.",
      prompt: "What is the process for employees to file GOSI benefit claims for retirement or disability?",
      tags: ["Benefits", "Claims"],
      gradient: "gradient-2" as const,
    },
    {
      title: "Technical Support",
      description: "Get assistance with technical issues, login problems, system errors, or any difficulties navigating the GOSI Pay platform.",
      prompt: "I need technical support with GOSI Pay platform - help with login issues or system errors",
      tags: ["Support", "Technical"],
      gradient: "gradient-3" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-[image:var(--gradient-hero)] flex items-center justify-center">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">GOSI AI Assistant</h1>
              <p className="text-xs text-muted-foreground">Powered by LLM Platform</p>
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
      <section className="bg-[image:var(--gradient-hero)] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              GOSI Functions & Prompts
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Explore all GOSI Pay functions with AI-powered assistance. Click any card to get instant help with your specific need.
            </p>
          </div>
        </div>
      </section>

      {/* Functions Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gosiPayPrompts.map((prompt, index) => (
            <FunctionCard
              key={index}
              title={prompt.title}
              description={prompt.description}
              prompt={prompt.prompt}
              gradient={prompt.gradient}
              tags={prompt.tags}
            />
          ))}
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