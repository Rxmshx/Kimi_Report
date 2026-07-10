import { SiteNav } from '@/components/site/site-nav'
import { Hero } from '@/components/site/hero'
import { CompanyOverview } from '@/components/site/company-overview'
import { Problem } from '@/components/site/problem'
import { Solution } from '@/components/site/solution'
import { Capabilities } from '@/components/site/capabilities'
import { Pricing } from '@/components/site/pricing'
import { Benefits } from '@/components/site/benefits'
import { WorkflowDemo } from '@/components/site/workflow-demo'
import { DepartmentUseCases } from '@/components/site/department-use-cases'
import { RiskMatrix } from '@/components/site/risk-matrix'
import { PocPlan } from '@/components/site/poc-plan'
import { Recommendation } from '@/components/site/recommendation'
import { Alternatives } from '@/components/site/alternatives'
import { QuickReference } from '@/components/site/quick-reference'
import { Methodology } from '@/components/site/methodology'
import { CTA } from '@/components/site/cta'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <SiteNav />
      <Hero />
      <CompanyOverview />
      <Problem />
      <Solution />
      <Capabilities />
      <Pricing />
      <Benefits />
      <WorkflowDemo />
      <DepartmentUseCases />
      <RiskMatrix />
      <PocPlan />
      <Recommendation />
      <Alternatives />
      <QuickReference />
      <Methodology />
      <CTA />
      <SiteFooter />
    </main>
  )
}
