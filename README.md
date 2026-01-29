# @devos/shared

Shared TypeScript types and contracts for the DevOS platform.

## Installation

For local development:

```bash
# In this directory
npm link

# In other projects
npm link @devos/shared
```

For production:

```bash
npm install @devos/shared
```

## Usage

```typescript
import { User, Workspace, Project, ApiResponse, JwtPayload } from '@devos/shared';

const user: User = {
  id: '123',
  email: 'user@example.com',
  created_at: '2026-01-29T12:00:00Z',
  updated_at: '2026-01-29T12:00:00Z',
  two_factor_enabled: false
};
```

## Build

```bash
npm run build
```

## License

MIT
