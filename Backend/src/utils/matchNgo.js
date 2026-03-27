export function matchBestNgo(food, ngos) {
  let bestNgo = null
  let bestScore = -Infinity

  ngos.forEach((ngo) => {
    let score = 0

    // 🧠 1. Distance score (simple for now)
    if (food.location === ngo.location) {
      score += 50
    }

    // 🧠 2. Capacity match
    if (ngo.capacity >= food.quantity) {
      score += 30
    }

    // 🧠 3. Urgency boost
    const hoursLeft =
      (new Date(food.expiryTime) - Date.now()) / (1000 * 60 * 60)

    if (hoursLeft < 2) score += 40
    else if (hoursLeft < 6) score += 20

    if (score > bestScore) {
      bestScore = score
      bestNgo = ngo
    }
  })

  return bestNgo
}