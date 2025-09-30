import FunctionCard from "@/components/FunctionCard";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Search, Building2, TrendingUp, Shield, DollarSign, Users, Cpu, Scale, FileSearch } from "lucide-react";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";



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