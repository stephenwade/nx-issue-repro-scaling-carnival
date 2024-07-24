# nx-issue-repro-scaling-carnival

This repo demonstrates an issue with the `generatePackageJson` option of the @nx/webpack:webpack executor.

To reproduce, run:

```sh
npm ci
npx nx build
```

Then, look at the dist/app/package.json file. It should contain `lodash` and `lodash-4`, but it only contains `lodash`.
