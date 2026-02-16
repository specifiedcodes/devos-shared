/** Cost dashboard summary */
export interface CostDashboardSummary {
  totalCostUsd: number;
  periodStart: string;
  periodEnd: string;
  byProvider: ProviderCostBreakdown[];
  byProject: ProjectCostBreakdown[];
  dailyTrend: DailyCostPoint[];
}

export interface ProviderCostBreakdown {
  provider: string;
  costUsd: number;
  inputTokens: number;
  outputTokens: number;
  requestCount: number;
}

export interface ProjectCostBreakdown {
  projectId: string;
  projectName: string;
  costUsd: number;
}

export interface DailyCostPoint {
  date: string;
  costUsd: number;
}

/** Spending limit configuration */
export interface SetSpendingLimitRequest {
  monthlyLimitUsd: number;
  warningThresholdPercent?: number;
  autoDowngradeEnabled?: boolean;
}
