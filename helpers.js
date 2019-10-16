/**
 * @param {Sting} scriptId script tag id for insertion of dom script tag
 * @param {Function} callback (optional) if you need to use a callback to
 * run immediately after script is loaded like to set state for render
 */
export const addDynamicScript = (scriptId, url, callback = null) => {
  const head = document.getElementsByTagName('head')[0]
  const existingScript = document.getElementById(scriptId)

  if (!existingScript) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url // URL for the third-party library being loaded.
    script.id = scriptId // e.g. googleMaps, parlay
    head.appendChild(script)

    // Use if you need to run code after script is loaded
    script.onload = () => {
      if (callback) callback()
    }
  }

  if (existingScript && callback) callback()
}
