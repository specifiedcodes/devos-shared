import {
  isAgentType,
  isAgentStatus,
  isAgentActivityStatus,
  isStoryStatus,
  isStoryPriority,
  isWorkspaceRole,
  isProjectStatus,
  isSprintStatus,
  isUUID,
  isNonEmptyString,
  isISODateString,
} from '../utils/type-guards.js';

describe('Type Guards', () => {
  describe('isAgentType', () => {
    it('returns true for valid agent types', () => {
      expect(isAgentType('dev')).toBe(true);
      expect(isAgentType('planner')).toBe(true);
      expect(isAgentType('qa')).toBe(true);
      expect(isAgentType('devops')).toBe(true);
      expect(isAgentType('orchestrator')).toBe(true);
    });

    it('returns false for invalid strings', () => {
      expect(isAgentType('invalid')).toBe(false);
      expect(isAgentType('DEV')).toBe(false);
      expect(isAgentType('')).toBe(false);
    });

    it('returns false for non-string values', () => {
      expect(isAgentType(123)).toBe(false);
      expect(isAgentType(null)).toBe(false);
      expect(isAgentType(undefined)).toBe(false);
      expect(isAgentType({})).toBe(false);
    });
  });

  describe('isAgentStatus', () => {
    it('returns true for valid agent statuses', () => {
      expect(isAgentStatus('created')).toBe(true);
      expect(isAgentStatus('running')).toBe(true);
      expect(isAgentStatus('completed')).toBe(true);
      expect(isAgentStatus('failed')).toBe(true);
    });

    it('returns false for invalid strings', () => {
      expect(isAgentStatus('active')).toBe(false);
      expect(isAgentStatus('RUNNING')).toBe(false);
    });

    it('returns false for non-string values', () => {
      expect(isAgentStatus(42)).toBe(false);
      expect(isAgentStatus(null)).toBe(false);
    });
  });

  describe('isAgentActivityStatus', () => {
    it('returns true for lifecycle statuses', () => {
      expect(isAgentActivityStatus('created')).toBe(true);
      expect(isAgentActivityStatus('running')).toBe(true);
    });

    it('returns true for activity statuses', () => {
      expect(isAgentActivityStatus('thinking')).toBe(true);
      expect(isAgentActivityStatus('coding')).toBe(true);
      expect(isAgentActivityStatus('testing')).toBe(true);
      expect(isAgentActivityStatus('deploying')).toBe(true);
    });

    it('returns false for invalid values', () => {
      expect(isAgentActivityStatus('invalid')).toBe(false);
      expect(isAgentActivityStatus(null)).toBe(false);
    });
  });

  describe('isStoryStatus', () => {
    it('returns true for valid story statuses', () => {
      expect(isStoryStatus('backlog')).toBe(true);
      expect(isStoryStatus('in_progress')).toBe(true);
      expect(isStoryStatus('review')).toBe(true);
      expect(isStoryStatus('done')).toBe(true);
    });

    it('returns false for invalid strings', () => {
      expect(isStoryStatus('completed')).toBe(false);
      expect(isStoryStatus('BACKLOG')).toBe(false);
    });

    it('returns false for non-string values', () => {
      expect(isStoryStatus(null)).toBe(false);
      expect(isStoryStatus(undefined)).toBe(false);
    });
  });

  describe('isStoryPriority', () => {
    it('returns true for valid story priorities', () => {
      expect(isStoryPriority('high')).toBe(true);
      expect(isStoryPriority('medium')).toBe(true);
      expect(isStoryPriority('low')).toBe(true);
    });

    it('returns false for invalid strings', () => {
      expect(isStoryPriority('critical')).toBe(false);
      expect(isStoryPriority('HIGH')).toBe(false);
    });

    it('returns false for non-string values', () => {
      expect(isStoryPriority(1)).toBe(false);
    });
  });

  describe('isWorkspaceRole', () => {
    it('returns true for valid workspace roles', () => {
      expect(isWorkspaceRole('owner')).toBe(true);
      expect(isWorkspaceRole('admin')).toBe(true);
      expect(isWorkspaceRole('developer')).toBe(true);
      expect(isWorkspaceRole('viewer')).toBe(true);
    });

    it('returns false for invalid strings', () => {
      expect(isWorkspaceRole('member')).toBe(false);
      expect(isWorkspaceRole('ADMIN')).toBe(false);
    });

    it('returns false for non-string values', () => {
      expect(isWorkspaceRole(null)).toBe(false);
    });
  });

  describe('isProjectStatus', () => {
    it('returns true for valid project statuses', () => {
      expect(isProjectStatus('active')).toBe(true);
      expect(isProjectStatus('archived')).toBe(true);
      expect(isProjectStatus('deleted')).toBe(true);
    });

    it('returns false for invalid strings', () => {
      expect(isProjectStatus('inactive')).toBe(false);
      expect(isProjectStatus('ACTIVE')).toBe(false);
    });

    it('returns false for non-string values', () => {
      expect(isProjectStatus(undefined)).toBe(false);
    });
  });

  describe('isSprintStatus', () => {
    it('returns true for valid sprint statuses', () => {
      expect(isSprintStatus('planned')).toBe(true);
      expect(isSprintStatus('active')).toBe(true);
      expect(isSprintStatus('completed')).toBe(true);
    });

    it('returns false for invalid strings', () => {
      expect(isSprintStatus('done')).toBe(false);
      expect(isSprintStatus('ACTIVE')).toBe(false);
    });

    it('returns false for non-string values', () => {
      expect(isSprintStatus(0)).toBe(false);
    });
  });

  describe('isUUID', () => {
    it('returns true for valid UUID v4', () => {
      expect(isUUID('550e8400-e29b-41d4-a716-446655440000')).toBe(true);
      expect(isUUID('6ba7b810-9dad-41d0-80b4-00c04fd430c8')).toBe(true);
      expect(isUUID('f47ac10b-58cc-4372-a567-0e02b2c3d479')).toBe(true);
    });

    it('returns false for invalid UUIDs', () => {
      expect(isUUID('not-a-uuid')).toBe(false);
      expect(isUUID('550e8400-e29b-11d4-a716-446655440000')).toBe(false); // v1 UUID
      expect(isUUID('550e8400-e29b-41d4-c716-446655440000')).toBe(false); // invalid variant
      expect(isUUID('')).toBe(false);
    });

    it('returns false for non-string values', () => {
      expect(isUUID(123)).toBe(false);
      expect(isUUID(null)).toBe(false);
      expect(isUUID(undefined)).toBe(false);
      expect(isUUID({})).toBe(false);
    });
  });

  describe('isNonEmptyString', () => {
    it('returns true for non-empty strings', () => {
      expect(isNonEmptyString('hello')).toBe(true);
      expect(isNonEmptyString('a')).toBe(true);
      expect(isNonEmptyString('  content  ')).toBe(true);
    });

    it('returns false for empty or whitespace strings', () => {
      expect(isNonEmptyString('')).toBe(false);
      expect(isNonEmptyString('   ')).toBe(false);
      expect(isNonEmptyString('\t')).toBe(false);
      expect(isNonEmptyString('\n')).toBe(false);
    });

    it('returns false for non-string values', () => {
      expect(isNonEmptyString(123)).toBe(false);
      expect(isNonEmptyString(null)).toBe(false);
      expect(isNonEmptyString(undefined)).toBe(false);
      expect(isNonEmptyString({})).toBe(false);
    });
  });

  describe('isISODateString', () => {
    it('returns true for valid ISO date strings', () => {
      expect(isISODateString('2024-01-15T10:30:00.000Z')).toBe(true);
      expect(isISODateString('2024-01-15T10:30:00Z')).toBe(true);
      expect(isISODateString('2024-01-15T10:30:00+05:30')).toBe(true);
    });

    it('returns false for non-ISO date strings', () => {
      expect(isISODateString('2024-01-15')).toBe(false); // no T
      expect(isISODateString('not-a-date')).toBe(false);
      expect(isISODateString('')).toBe(false);
    });

    it('returns false for non-string values', () => {
      expect(isISODateString(123)).toBe(false);
      expect(isISODateString(null)).toBe(false);
      expect(isISODateString(new Date())).toBe(false);
    });
  });
});
