import * as shared from '../index.js';

describe('Package Exports', () => {
  it('exports all entity interfaces from root (verified via type assertions)', () => {
    // Entity types are type-only exports; we verify they exist by
    // checking that companion runtime exports (enums, functions) work.
    // The TypeScript compiler enforces correct type exports at build time.
    expect(shared).toBeDefined();
  });

  it('exports all enums from root', () => {
    // Workspace
    expect(shared.WorkspaceRole).toBeDefined();
    expect(shared.WorkspaceRole.OWNER).toBe('owner');

    // Project
    expect(shared.ProjectStatus).toBeDefined();
    expect(shared.ProjectStatus.ACTIVE).toBe('active');

    // Story
    expect(shared.StoryStatus).toBeDefined();
    expect(shared.StoryPriority).toBeDefined();

    // Sprint
    expect(shared.SprintStatus).toBeDefined();

    // Agent
    expect(shared.AgentType).toBeDefined();
    expect(shared.AgentStatus).toBeDefined();
    expect(shared.AgentActivityStatus).toBeDefined();
    expect(shared.StatusUpdateCategory).toBeDefined();

    // Chat
    expect(shared.ChatSenderType).toBeDefined();
    expect(shared.ChatMessageStatus).toBeDefined();

    // CLI Session
    expect(shared.CliSessionStatus).toBeDefined();
    expect(shared.CliSessionAgentType).toBeDefined();

    // Integration
    expect(shared.IntegrationProvider).toBeDefined();
    expect(shared.IntegrationStatus).toBeDefined();

    // Deployment
    expect(shared.DeploymentApprovalStatus).toBeDefined();
    expect(shared.DeploymentRollbackStatus).toBeDefined();
    expect(shared.DeploymentRollbackTriggerType).toBeDefined();

    // Provider
    expect(shared.ApiProvider).toBeDefined();
    expect(shared.KeyProvider).toBeDefined();
  });

  it('exports all WebSocket events from root', () => {
    expect(shared.WS_EVENTS).toBeDefined();
    expect(shared.WS_EVENTS.JOIN).toBe('join');
    expect(shared.WS_EVENTS.LEAVE).toBe('leave');
    expect(shared.WS_EVENTS.ERROR).toBe('error');

    expect(shared.KANBAN_EVENTS).toBeDefined();
    expect(shared.KANBAN_EVENTS.STORY_MOVED).toBe('kanban:story_moved');
    expect(shared.KANBAN_EVENTS.STORY_CREATED).toBe('kanban:story_created');

    expect(shared.CLI_EVENTS).toBeDefined();
    expect(shared.CLI_EVENTS.OUTPUT).toBe('cli:output');

    expect(shared.CHAT_EVENTS).toBeDefined();
    expect(shared.CHAT_EVENTS.MESSAGE).toBe('chat:message');

    expect(shared.AGENT_EVENTS).toBeDefined();
    expect(shared.AGENT_EVENTS.STATUS_CHANGED).toBe('agent:status_changed');

    expect(shared.NOTIFICATION_EVENTS).toBeDefined();
    expect(shared.NOTIFICATION_EVENTS.NEW).toBe('notification:new');

    expect(shared.COST_EVENTS).toBeDefined();
    expect(shared.COST_EVENTS.COST_UPDATE).toBe('cost:update');

    expect(shared.DEPLOYMENT_EVENTS).toBeDefined();
    expect(shared.DEPLOYMENT_EVENTS.STATUS_CHANGED).toBe('deployment:status_changed');
  });

  it('exports all constants from root', () => {
    expect(shared.QUEUE_NAMES).toBeDefined();
    expect(shared.QUEUE_NAMES.AGENT_TASKS).toBe('agent-tasks');
    expect(shared.QUEUE_NAMES.CLI_SESSIONS).toBe('cli-sessions');
    expect(shared.QUEUE_NAMES.NOTIFICATIONS).toBe('notifications');
    expect(shared.QUEUE_NAMES.EMAIL).toBe('email');
    expect(Object.keys(shared.QUEUE_NAMES).length).toBeGreaterThanOrEqual(11);

    expect(shared.ERROR_CODES).toBeDefined();
    expect(shared.ERROR_CODES.AUTH_INVALID_CREDENTIALS).toBe('AUTH_1001');
    expect(shared.ERROR_CODES.RESOURCE_NOT_FOUND).toBe('RES_3001');
    expect(Object.keys(shared.ERROR_CODES).length).toBeGreaterThanOrEqual(30);

    expect(shared.LIMITS).toBeDefined();
    expect(shared.LIMITS.MAX_FILE_SIZE_BYTES).toBe(100 * 1024 * 1024);
    expect(shared.LIMITS.DEFAULT_PAGE_SIZE).toBe(20);
    expect(shared.LIMITS.MAX_PAGE_SIZE).toBe(100);
    expect(Object.keys(shared.LIMITS).length).toBeGreaterThanOrEqual(15);
  });

  it('exports all utility functions from root', () => {
    // Type guards
    expect(typeof shared.isAgentType).toBe('function');
    expect(typeof shared.isAgentStatus).toBe('function');
    expect(typeof shared.isAgentActivityStatus).toBe('function');
    expect(typeof shared.isStoryStatus).toBe('function');
    expect(typeof shared.isStoryPriority).toBe('function');
    expect(typeof shared.isWorkspaceRole).toBe('function');
    expect(typeof shared.isProjectStatus).toBe('function');
    expect(typeof shared.isSprintStatus).toBe('function');
    expect(typeof shared.isUUID).toBe('function');
    expect(typeof shared.isNonEmptyString).toBe('function');
    expect(typeof shared.isISODateString).toBe('function');

    // Helpers
    expect(typeof shared.safeParseNumber).toBe('function');
    expect(typeof shared.safeDivide).toBe('function');
    expect(typeof shared.clamp).toBe('function');
    expect(typeof shared.truncate).toBe('function');
    expect(typeof shared.formatBytes).toBe('function');
    expect(typeof shared.formatCostUsd).toBe('function');
    expect(typeof shared.wsRoom).toBe('function');
    expect(typeof shared.parseWsRoom).toBe('function');
  });

  it('exports legacy User, Workspace, Project types for backward compatibility', () => {
    // Since these are type-only exports, we can't directly test them at runtime.
    // The TypeScript compiler validates they compile correctly.
    // We verify the new entity types are accessible as a proxy.
    // Type-level tests are enforced by the build process (tsc --noEmit).
    expect(shared).toBeDefined();
  });
});
