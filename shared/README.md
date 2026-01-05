# @shared import

`paths` lets you declare how TypeScript should resolve an import in your `require`/`imports`.

```typescript
import '@shared/*' // (*) is your library or module path
```

All module or library in this folder should be used by corss project (monorepo) only.
