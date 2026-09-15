# Services

Services are integration boundaries, not UI helpers. Firebase client setup,
notification scheduling, and future AI adapters belong here. A service should
expose a small typed interface and keep provider-specific details out of
screens and feature components.