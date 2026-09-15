---
name: Firebase package installation
description: Mobile package dependencies must be installed with a workspace-scoped pnpm command.
---

Use a package-scoped install for dependencies in this pnpm monorepo; an unscoped package installer can target the workspace root and refuse the change.

**Why:** The package-management callback does not accept a package working directory in this environment, so its default install target can be the workspace root.

**How to apply:** For a dependency owned by an artifact, use `pnpm --filter @workspace/<artifact> add <package>` and verify the artifact package manifest and lockfile afterward.