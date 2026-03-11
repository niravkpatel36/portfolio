// src/lib/abTest.js
export function getVariant(testName, variants = ['A','B']) {
  try {
    const key = `ab:${testName}`
    let v = localStorage.getItem(key)
    if (v && variants.includes(v)) return v
    const pick = variants[Math.floor(Math.random()*variants.length)]
    localStorage.setItem(key, pick)
    return pick
  } catch (e) {
    return variants[0]
  }
}

export function resetVariant(testName) {
  try { localStorage.removeItem(`ab:${testName}`) } catch (e) {}
}
