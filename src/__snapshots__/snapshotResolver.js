module.exports = {
  testPathForConsistencyCheck: 'some/example.js.test',

  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace(/\.test\.([tj]sx?)/, `.$1${snapshotExtension}`),

  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath.replace(snapshotExtension, '.test'),
}