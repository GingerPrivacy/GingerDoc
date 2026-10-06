declare module 'virtual:starlight/user-config' {
  const config: Parameters<typeof import('@astrojs/starlight').default>[0]
  export default config
}
