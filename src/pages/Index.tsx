import FunctionCard from "@/components/FunctionCard";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Search, Building2, TrendingUp, Shield, DollarSign, Users, Cpu, Scale, FileSearch } from "lucide-react";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

const gosiLogo = "data:image/png;base64,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";

const Index = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  
  const departments = [
    {
      name: t('departments.strategy'),
      icon: TrendingUp,
      prompts: [
        { category: t('categories.strategicPlanning'), title: t('titles.swotSummary'), prompt: t('descriptions.swotSummary') },
        { category: t('categories.strategicPlanning'), title: t('titles.swotAnalysis'), prompt: t('descriptions.swotAnalysis') },
        { category: t('categories.strategicPlanning'), title: t('titles.strategicInitiatives'), prompt: t('descriptions.strategicInitiatives') },
        { category: t('categories.performanceRisk'), title: t('titles.kpiHighlights'), prompt: t('descriptions.kpiHighlights') },
        { category: t('categories.performanceRisk'), title: t('titles.riskRegister'), prompt: t('descriptions.riskRegister') },
        { category: t('categories.performanceRisk'), title: t('titles.performanceReview'), prompt: t('descriptions.performanceReview') },
        { category: t('categories.pmo'), title: t('titles.raciBuilder'), prompt: t('descriptions.raciBuilder') },
        { category: t('categories.pmo'), title: t('titles.timelineSummary'), prompt: t('descriptions.timelineSummary') },
        { category: t('categories.pmo'), title: t('titles.lessonsLearned'), prompt: t('descriptions.lessonsLearned') },
      ]
    },
    {
      name: t('departments.financial'),
      icon: DollarSign,
      prompts: [
        { category: t('categories.budgetPlanning'), title: t('titles.varianceAnalysis'), prompt: t('descriptions.varianceAnalysis') },
        { category: t('categories.budgetPlanning'), title: t('titles.costSavings'), prompt: t('descriptions.costSavings') },
        { category: t('categories.budgetPlanning'), title: t('titles.forecastReport'), prompt: t('descriptions.forecastReport') },
        { category: t('categories.accounts'), title: t('titles.ledgerSummary'), prompt: t('descriptions.ledgerSummary') },
        { category: t('categories.accounts'), title: t('titles.trialBalance'), prompt: t('descriptions.trialBalance') },
        { category: t('categories.accounts'), title: t('titles.varianceExplainer'), prompt: t('descriptions.varianceExplainer') },
        { category: t('categories.control'), title: t('titles.anomalyCheck'), prompt: t('descriptions.anomalyCheck') },
        { category: t('categories.control'), title: t('titles.complianceList'), prompt: t('descriptions.complianceList') },
        { category: t('categories.control'), title: t('titles.controlGaps'), prompt: t('descriptions.controlGaps') },
        { category: t('categories.procurement'), title: t('titles.rfpDraft'), prompt: t('descriptions.rfpDraft') },
        { category: t('categories.procurement'), title: t('titles.supplierCriteria'), prompt: t('descriptions.supplierCriteria') },
        { category: t('categories.procurement'), title: t('titles.contractRisks'), prompt: t('descriptions.contractRisks') },
      ]
    },
    {
      name: t('departments.insurance'),
      icon: Shield,
      prompts: [
        { category: t('categories.contributions'), title: t('titles.contributionTrends'), prompt: t('descriptions.contributionTrends') },
        { category: t('categories.contributions'), title: t('titles.employerNote'), prompt: t('descriptions.employerNote') },
        { category: t('categories.contributions'), title: t('titles.dataAnomalies'), prompt: t('descriptions.dataAnomalies') },
        { category: t('categories.pensions'), title: t('titles.eligibilityGuide'), prompt: t('descriptions.eligibilityGuide') },
        { category: t('categories.pensions'), title: t('titles.caseRisking'), prompt: t('descriptions.caseRisking') },
        { category: t('categories.pensions'), title: t('titles.retireeFaq'), prompt: t('descriptions.retireeFaq') },
        { category: t('categories.establishments'), title: t('titles.registrationRules'), prompt: t('descriptions.registrationRules') },
        { category: t('categories.establishments'), title: t('titles.serviceGuide'), prompt: t('descriptions.serviceGuide') },
        { category: t('categories.establishments'), title: t('titles.checklistBuilder'), prompt: t('descriptions.checklistBuilder') },
      ]
    },
    {
      name: t('departments.investments'),
      icon: TrendingUp,
      prompts: [
        { category: t('categories.general'), title: t('titles.portfolioSummary'), prompt: t('descriptions.portfolioSummary') },
        { category: t('categories.general'), title: t('titles.committeeMemo'), prompt: t('descriptions.committeeMemo') },
        { category: t('categories.general'), title: t('titles.chartExplainer'), prompt: t('descriptions.chartExplainer') },
        { category: t('categories.realEstate'), title: t('titles.roiSummary'), prompt: t('descriptions.roiSummary') },
        { category: t('categories.realEstate'), title: t('titles.riskRewardNote'), prompt: t('descriptions.riskRewardNote') },
        { category: t('categories.realEstate'), title: t('titles.marketTrends'), prompt: t('descriptions.marketTrends') },
        { category: t('categories.equities'), title: t('titles.equitiesSnapshot'), prompt: t('descriptions.equitiesSnapshot') },
        { category: t('categories.equities'), title: t('titles.localVsGlobal'), prompt: t('descriptions.localVsGlobal') },
        { category: t('categories.equities'), title: t('titles.equityOutlook'), prompt: t('descriptions.equityOutlook') },
        { category: t('categories.fixedIncome'), title: t('titles.bondYields'), prompt: t('descriptions.bondYields') },
        { category: t('categories.fixedIncome'), title: t('titles.diversificationNote'), prompt: t('descriptions.diversificationNote') },
        { category: t('categories.fixedIncome'), title: t('titles.rateImpact'), prompt: t('descriptions.rateImpact') },
      ]
    },
    {
      name: t('departments.shared'),
      icon: Users,
      prompts: [
        { category: t('categories.hr'), title: t('titles.surveySummary'), prompt: t('descriptions.surveySummary') },
        { category: t('categories.hr'), title: t('titles.jdDraft'), prompt: t('descriptions.jdDraft') },
        { category: t('categories.hr'), title: t('titles.onboardingGuide'), prompt: t('descriptions.onboardingGuide') },
        { category: t('categories.training'), title: t('titles.tnaReport'), prompt: t('descriptions.tnaReport') },
        { category: t('categories.training'), title: t('titles.learningOutcomes'), prompt: t('descriptions.learningOutcomes') },
        { category: t('categories.training'), title: t('titles.moduleIdeas'), prompt: t('descriptions.moduleIdeas') },
        { category: t('categories.support'), title: t('titles.serviceRequests'), prompt: t('descriptions.serviceRequests') },
        { category: t('categories.support'), title: t('titles.responseTemplate'), prompt: t('descriptions.responseTemplate') },
        { category: t('categories.support'), title: t('titles.servicePlan'), prompt: t('descriptions.servicePlan') },
        { category: t('categories.general'), title: t('titles.maintenanceReport'), prompt: t('descriptions.maintenanceReport') },
        { category: t('categories.general'), title: t('titles.facilityChecklist'), prompt: t('descriptions.facilityChecklist') },
        { category: t('categories.general'), title: t('titles.facilityPolicyNote'), prompt: t('descriptions.facilityPolicyNote') },
      ]
    },
    {
      name: t('departments.it'),
      icon: Cpu,
      prompts: [
        { category: t('categories.infrastructure'), title: t('titles.uptimeReport'), prompt: t('descriptions.uptimeReport') },
        { category: t('categories.infrastructure'), title: t('titles.capacityPlan'), prompt: t('descriptions.capacityPlan') },
        { category: t('categories.infrastructure'), title: t('titles.infraDashboard'), prompt: t('descriptions.infraDashboard') },
        { category: t('categories.applications'), title: t('titles.codeDocs'), prompt: t('descriptions.codeDocs') },
        { category: t('categories.applications'), title: t('titles.sqlOptimizer'), prompt: t('descriptions.sqlOptimizer') },
        { category: t('categories.applications'), title: t('titles.feedbackToFeatures'), prompt: t('descriptions.feedbackToFeatures') },
        { category: t('categories.cybersecurity'), title: t('titles.incidentReport'), prompt: t('descriptions.incidentReport') },
        { category: t('categories.cybersecurity'), title: t('titles.awarenessEmail'), prompt: t('descriptions.awarenessEmail') },
        { category: t('categories.cybersecurity'), title: t('titles.dataProtectionList'), prompt: t('descriptions.dataProtectionList') },
        { category: t('categories.digital'), title: t('titles.roadmapSummary'), prompt: t('descriptions.roadmapSummary') },
        { category: t('categories.digital'), title: t('titles.techBusinessCase'), prompt: t('descriptions.techBusinessCase') },
        { category: t('categories.digital'), title: t('titles.digitalKpis'), prompt: t('descriptions.digitalKpis') },
      ]
    },
    {
      name: t('departments.legal'),
      icon: Scale,
      prompts: [
        { category: t('categories.general'), title: t('titles.lawSummary'), prompt: t('descriptions.lawSummary') },
        { category: t('categories.general'), title: t('titles.complianceRisks'), prompt: t('descriptions.complianceRisks') },
        { category: t('categories.general'), title: t('titles.plainLawNote'), prompt: t('descriptions.plainLawNote') },
        { category: t('categories.contracts'), title: t('titles.obligationsExtract'), prompt: t('descriptions.obligationsExtract') },
        { category: t('categories.contracts'), title: t('titles.keyRisks'), prompt: t('descriptions.keyRisks') },
        { category: t('categories.contracts'), title: t('titles.negotiationNote'), prompt: t('descriptions.negotiationNote') },
        { category: t('categories.regulations'), title: t('titles.updateSummary'), prompt: t('descriptions.updateSummary') },
        { category: t('categories.regulations'), title: t('titles.complianceBrief'), prompt: t('descriptions.complianceBrief') },
        { category: t('categories.regulations'), title: t('titles.ruleComparison'), prompt: t('descriptions.ruleComparison') },
      ]
    },
    {
      name: t('departments.audit'),
      icon: FileSearch,
      prompts: [
        { category: t('categories.internalAudit'), title: t('titles.auditFindings'), prompt: t('descriptions.auditFindings') },
        { category: t('categories.internalAudit'), title: t('titles.execSummary'), prompt: t('descriptions.execSummary') },
        { category: t('categories.internalAudit'), title: t('titles.followUpChecklist'), prompt: t('descriptions.followUpChecklist') },
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
  }, [searchQuery, departments, t]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white dark:bg-white px-3 py-2 rounded-lg">
              <img src={gosiLogo} alt="GOSI Logo" className="h-10 w-auto" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">{t('header.title')}</h1>
              <p className="text-xs text-muted-foreground">{t('header.subtitle')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative max-w-md w-full">
              <Search className="absolute ltr:left-3 rtl:right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t('header.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ltr:pl-10 rtl:pr-10"
              />
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[image:var(--gradient-hero)] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t('hero.title')}
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {filteredDepartments.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">{t('prompts.noResults')} "{searchQuery}"</p>
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
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;