const result = await Bun.build({
  entrypoints: ['./src/index.ts', './src/script/dev.ts'],
  outdir: './dist',
})

if (!result.success) {
  console.error('Build failed')
  for (const message of result.logs) {
    // Bun will pretty print the message object
    console.error(message)
  }
}
