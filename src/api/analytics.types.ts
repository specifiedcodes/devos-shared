/** Analytics response wrapper */
export interface AnalyticsResponse<T> {
  data: T;
  generatedAt: string;
  projectId: string;
}

/** Velocity data for sprint velocity chart */
export interface VelocityData {
  dataPoints: VelocityDataPoint[];
  averageVelocity: number;
  totalSprints: number;
}

export interface VelocityDataPoint {
  sprintId: string;
  sprintName: string;
  sprintNumber: number;
  completedPoints: number;
  plannedPoints: number;
  isCurrentSprint: boolean;
}

/** Burndown data for sprint burndown chart */
export interface BurndownData {
  dataPoints: BurndownDataPoint[];
  sprintId: string;
  sprintName: string;
  totalPoints: number;
  remainingPoints: number;
  completedPoints: number;
  remainingDays: number;
  totalDays: number;
  status: 'ahead' | 'on-track' | 'behind';
}

export interface BurndownDataPoint {
  date: string;
  idealRemaining: number;
  actualRemaining: number;
}

/** Throughput data for stories completed per week */
export interface ThroughputData {
  dataPoints: ThroughputDataPoint[];
  averageThroughput: number;
  trend: 'increasing' | 'decreasing' | 'stable';
  trendPercentage: number;
}

export interface ThroughputDataPoint {
  week: string;
  completedStories: number;
  completedPoints: number;
}

/** Cycle time data */
export interface CycleTimeData {
  overallAverageDays: number;
  overallAverageHours: number;
  byPriority: Record<string, { averageDays: number; count: number }>;
  distribution: CycleTimeDistribution[];
  totalStories: number;
}

export interface CycleTimeDistribution {
  range: string;
  count: number;
  percentage: number;
}

/** Lead time data */
export interface LeadTimeData {
  overallAverageDays: number;
  overallAverageHours: number;
  cycleTimeComparison: {
    leadTimeDays: number;
    cycleTimeDays: number;
    waitTimeDays: number;
  };
  trend: LeadTimeTrendPoint[];
}

export interface LeadTimeTrendPoint {
  sprintName: string;
  averageLeadTimeDays: number;
}

/** Agent utilization data */
export interface AgentUtilizationData {
  entries: AgentUtilizationEntry[];
  totalActiveHours: number;
  averageUtilization: number;
}

export interface AgentUtilizationEntry {
  agentType: string;
  activeHours: number;
  totalHours: number;
  utilizationPercent: number;
  tasksCompleted: number;
}

/** Cumulative flow diagram data */
export interface CumulativeFlowData {
  dataPoints: CumulativeFlowDataPoint[];
  dateRange: { start: string; end: string };
}

export interface CumulativeFlowDataPoint {
  date: string;
  backlog: number;
  inProgress: number;
  review: number;
  done: number;
}

/** Agent activity heatmap data */
export interface HeatmapData {
  cells: HeatmapCell[];
  maxHours: number;
  agentSummary: AgentHeatmapSummary[];
}

export interface HeatmapCell {
  dayOfWeek: number;
  agentType: string;
  hours: number;
}

export interface AgentHeatmapSummary {
  agentType: string;
  totalHours: number;
  peakDay: number;
}
