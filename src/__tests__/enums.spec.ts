import {
  WorkspaceRole,
  ProjectStatus,
  StoryStatus,
  StoryPriority,
  SprintStatus,
  AgentType,
  AgentStatus,
  AgentActivityStatus,
  StatusUpdateCategory,
  ChatSenderType,
  ChatMessageStatus,
  CliSessionStatus,
  CliSessionAgentType,
  IntegrationProvider,
  IntegrationStatus,
  DeploymentApprovalStatus,
  DeploymentRollbackStatus,
  DeploymentRollbackTriggerType,
  ApiProvider,
  KeyProvider,
} from '../enums/index.js';

describe('Shared Enums', () => {
  describe('enum values match database values', () => {
    it('WorkspaceRole values are lowercase strings', () => {
      expect(WorkspaceRole.OWNER).toBe('owner');
      expect(WorkspaceRole.ADMIN).toBe('admin');
      expect(WorkspaceRole.DEVELOPER).toBe('developer');
      expect(WorkspaceRole.VIEWER).toBe('viewer');
      expect(Object.values(WorkspaceRole)).toHaveLength(4);
    });

    it('ProjectStatus values are lowercase strings', () => {
      expect(ProjectStatus.ACTIVE).toBe('active');
      expect(ProjectStatus.ARCHIVED).toBe('archived');
      expect(ProjectStatus.DELETED).toBe('deleted');
      expect(Object.values(ProjectStatus)).toHaveLength(3);
    });

    it('StoryStatus values match database enum', () => {
      expect(StoryStatus.BACKLOG).toBe('backlog');
      expect(StoryStatus.IN_PROGRESS).toBe('in_progress');
      expect(StoryStatus.REVIEW).toBe('review');
      expect(StoryStatus.DONE).toBe('done');
      expect(Object.values(StoryStatus)).toHaveLength(4);
    });

    it('StoryPriority values match database enum', () => {
      expect(StoryPriority.HIGH).toBe('high');
      expect(StoryPriority.MEDIUM).toBe('medium');
      expect(StoryPriority.LOW).toBe('low');
      expect(Object.values(StoryPriority)).toHaveLength(3);
    });

    it('SprintStatus values match database enum', () => {
      expect(SprintStatus.PLANNED).toBe('planned');
      expect(SprintStatus.ACTIVE).toBe('active');
      expect(SprintStatus.COMPLETED).toBe('completed');
      expect(Object.values(SprintStatus)).toHaveLength(3);
    });

    it('AgentType values match database enum', () => {
      expect(AgentType.DEV).toBe('dev');
      expect(AgentType.PLANNER).toBe('planner');
      expect(AgentType.QA).toBe('qa');
      expect(AgentType.DEVOPS).toBe('devops');
      expect(AgentType.ORCHESTRATOR).toBe('orchestrator');
      expect(Object.values(AgentType)).toHaveLength(5);
    });

    it('AgentStatus values match database enum', () => {
      expect(AgentStatus.CREATED).toBe('created');
      expect(AgentStatus.INITIALIZING).toBe('initializing');
      expect(AgentStatus.RUNNING).toBe('running');
      expect(AgentStatus.PAUSED).toBe('paused');
      expect(AgentStatus.COMPLETED).toBe('completed');
      expect(AgentStatus.FAILED).toBe('failed');
      expect(AgentStatus.TERMINATED).toBe('terminated');
      expect(Object.values(AgentStatus)).toHaveLength(7);
    });

    it('AgentActivityStatus has all lifecycle + activity statuses', () => {
      // Lifecycle statuses
      expect(AgentActivityStatus.CREATED).toBe('created');
      expect(AgentActivityStatus.INITIALIZING).toBe('initializing');
      expect(AgentActivityStatus.RUNNING).toBe('running');
      expect(AgentActivityStatus.PAUSED).toBe('paused');
      expect(AgentActivityStatus.COMPLETED).toBe('completed');
      expect(AgentActivityStatus.FAILED).toBe('failed');
      expect(AgentActivityStatus.TERMINATED).toBe('terminated');
      // Activity statuses
      expect(AgentActivityStatus.IDLE).toBe('idle');
      expect(AgentActivityStatus.THINKING).toBe('thinking');
      expect(AgentActivityStatus.CODING).toBe('coding');
      expect(AgentActivityStatus.TESTING).toBe('testing');
      expect(AgentActivityStatus.REVIEWING).toBe('reviewing');
      expect(AgentActivityStatus.DEBUGGING).toBe('debugging');
      expect(AgentActivityStatus.COMMITTING).toBe('committing');
      expect(AgentActivityStatus.DEPLOYING).toBe('deploying');
      expect(AgentActivityStatus.WAITING_INPUT).toBe('waiting_input');
      expect(AgentActivityStatus.RECOVERING).toBe('recovering');
      expect(AgentActivityStatus.ERROR).toBe('error');
      expect(Object.values(AgentActivityStatus)).toHaveLength(18);
    });

    it('StatusUpdateCategory values match database enum', () => {
      expect(StatusUpdateCategory.TASK_LIFECYCLE).toBe('task_lifecycle');
      expect(StatusUpdateCategory.PROGRESS).toBe('progress');
      expect(StatusUpdateCategory.ERROR).toBe('error');
      expect(StatusUpdateCategory.WAITING).toBe('waiting');
      expect(Object.values(StatusUpdateCategory)).toHaveLength(4);
    });

    it('ChatSenderType values match database enum', () => {
      expect(ChatSenderType.USER).toBe('user');
      expect(ChatSenderType.AGENT).toBe('agent');
      expect(Object.values(ChatSenderType)).toHaveLength(2);
    });

    it('ChatMessageStatus values match database enum', () => {
      expect(ChatMessageStatus.SENT).toBe('sent');
      expect(ChatMessageStatus.DELIVERED).toBe('delivered');
      expect(ChatMessageStatus.READ).toBe('read');
      expect(Object.values(ChatMessageStatus)).toHaveLength(3);
    });

    it('CliSessionStatus values match database enum', () => {
      expect(CliSessionStatus.COMPLETED).toBe('completed');
      expect(CliSessionStatus.FAILED).toBe('failed');
      expect(CliSessionStatus.TERMINATED).toBe('terminated');
      expect(Object.values(CliSessionStatus)).toHaveLength(3);
    });

    it('CliSessionAgentType values match database enum', () => {
      expect(CliSessionAgentType.DEV).toBe('dev');
      expect(CliSessionAgentType.QA).toBe('qa');
      expect(CliSessionAgentType.DEVOPS).toBe('devops');
      expect(CliSessionAgentType.PLANNER).toBe('planner');
      expect(CliSessionAgentType.SECURITY).toBe('security');
      expect(CliSessionAgentType.FRONTEND).toBe('frontend');
      expect(CliSessionAgentType.BACKEND).toBe('backend');
      expect(CliSessionAgentType.DATABASE).toBe('database');
      expect(CliSessionAgentType.PERFORMANCE).toBe('performance');
      expect(Object.values(CliSessionAgentType)).toHaveLength(9);
    });

    it('IntegrationProvider values match database enum', () => {
      expect(IntegrationProvider.GITHUB).toBe('github');
      expect(IntegrationProvider.RAILWAY).toBe('railway');
      expect(IntegrationProvider.VERCEL).toBe('vercel');
      expect(IntegrationProvider.SUPABASE).toBe('supabase');
      expect(Object.values(IntegrationProvider)).toHaveLength(4);
    });

    it('IntegrationStatus values match database enum', () => {
      expect(IntegrationStatus.ACTIVE).toBe('active');
      expect(IntegrationStatus.DISCONNECTED).toBe('disconnected');
      expect(IntegrationStatus.EXPIRED).toBe('expired');
      expect(IntegrationStatus.ERROR).toBe('error');
      expect(Object.values(IntegrationStatus)).toHaveLength(4);
    });

    it('DeploymentApprovalStatus values match database enum', () => {
      expect(DeploymentApprovalStatus.PENDING).toBe('pending');
      expect(DeploymentApprovalStatus.APPROVED).toBe('approved');
      expect(DeploymentApprovalStatus.REJECTED).toBe('rejected');
      expect(DeploymentApprovalStatus.EXPIRED).toBe('expired');
      expect(Object.values(DeploymentApprovalStatus)).toHaveLength(4);
    });

    it('DeploymentRollbackStatus values match database enum', () => {
      expect(DeploymentRollbackStatus.IN_PROGRESS).toBe('in_progress');
      expect(DeploymentRollbackStatus.SUCCESS).toBe('success');
      expect(DeploymentRollbackStatus.FAILED).toBe('failed');
      expect(Object.values(DeploymentRollbackStatus)).toHaveLength(3);
    });

    it('DeploymentRollbackTriggerType values match database enum', () => {
      expect(DeploymentRollbackTriggerType.MANUAL).toBe('manual');
      expect(DeploymentRollbackTriggerType.AUTOMATIC).toBe('automatic');
      expect(Object.values(DeploymentRollbackTriggerType)).toHaveLength(2);
    });

    it('ApiProvider values match database enum', () => {
      expect(ApiProvider.ANTHROPIC).toBe('anthropic');
      expect(ApiProvider.OPENAI).toBe('openai');
      expect(ApiProvider.GOOGLE).toBe('google');
      expect(ApiProvider.DEEPSEEK).toBe('deepseek');
      expect(Object.values(ApiProvider)).toHaveLength(4);
    });

    it('KeyProvider values match database enum', () => {
      expect(KeyProvider.ANTHROPIC).toBe('anthropic');
      expect(KeyProvider.OPENAI).toBe('openai');
      expect(KeyProvider.GOOGLE).toBe('google');
      expect(KeyProvider.DEEPSEEK).toBe('deepseek');
      expect(Object.values(KeyProvider)).toHaveLength(4);
    });
  });

  describe('all enum values are strings', () => {
    const allEnums = [
      { name: 'WorkspaceRole', enumObj: WorkspaceRole },
      { name: 'ProjectStatus', enumObj: ProjectStatus },
      { name: 'StoryStatus', enumObj: StoryStatus },
      { name: 'StoryPriority', enumObj: StoryPriority },
      { name: 'SprintStatus', enumObj: SprintStatus },
      { name: 'AgentType', enumObj: AgentType },
      { name: 'AgentStatus', enumObj: AgentStatus },
      { name: 'AgentActivityStatus', enumObj: AgentActivityStatus },
      { name: 'StatusUpdateCategory', enumObj: StatusUpdateCategory },
      { name: 'ChatSenderType', enumObj: ChatSenderType },
      { name: 'ChatMessageStatus', enumObj: ChatMessageStatus },
      { name: 'CliSessionStatus', enumObj: CliSessionStatus },
      { name: 'CliSessionAgentType', enumObj: CliSessionAgentType },
      { name: 'IntegrationProvider', enumObj: IntegrationProvider },
      { name: 'IntegrationStatus', enumObj: IntegrationStatus },
      { name: 'DeploymentApprovalStatus', enumObj: DeploymentApprovalStatus },
      { name: 'DeploymentRollbackStatus', enumObj: DeploymentRollbackStatus },
      { name: 'DeploymentRollbackTriggerType', enumObj: DeploymentRollbackTriggerType },
      { name: 'ApiProvider', enumObj: ApiProvider },
      { name: 'KeyProvider', enumObj: KeyProvider },
    ];

    it.each(allEnums)('$name has all string values', ({ enumObj }) => {
      for (const value of Object.values(enumObj)) {
        expect(typeof value).toBe('string');
      }
    });
  });
});
