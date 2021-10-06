const distPath = './dist/index.js'

try {
    require(distPath)
} catch (error) {
    console.error(errorMessage)
    throw error
}
