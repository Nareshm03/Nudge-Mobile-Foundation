# NUDGE Roadmap

The roadmap is intentionally staged. Do not implement a later phase as part
of the foundation unless it is required to keep the current phase runnable.

## Phase 0 — Foundation (current)

- Expo + React Native + TypeScript mobile shell
- Folder architecture and service boundaries
- Light/dark semantic theme tokens
- Firebase client environment contract without credentials
- README and incremental development rules

## Phase 1 — Identity and local task model

- Choose and implement the approved authentication flow
- Define the user/admin authorization model
- Define task and one-time reminder domain contracts
- Add local persistence and the first real task slice

## Phase 2 — Reminder engine

- Recurring task rules
- Reminder scheduling policy
- Notification permission and delivery behavior
- Offline and retry handling

## Phase 3 — Memory assistance

- Voice capture
- Camera capture and OCR
- AI task understanding behind a typed service boundary
- User-controlled memory insights

## Phase 4 — Context-aware reminders

- Contacts and call-related capabilities where supported
- Location and calendar integrations
- Usage access and background execution where technically and legally permitted

## Phase 5 — Admin and analytics

- Admin application
- Assigned task management
- Activity and insight views
- Privacy-aware analytics and operational controls