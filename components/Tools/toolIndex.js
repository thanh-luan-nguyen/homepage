const frontend = [
  'html&css',
  'javascript',
  'sass',
  'bootstrap',
  'pug',
  'react',
  'redux',
  'next',
]
const backend = [
  'nodejs',
  'express',
  'mongodb',
  'mongoose',
  'passportjs',
  'firebase',
  'cloudinary',
]
const other = ['git', 'npm', 'webpack', 'heroku', 'github', 'jest', 'jasmine']

export const frontendImages = []
export const backendImages = []
export const otherImages = []

gatherImages(frontend, frontendImages, 'frontend')
gatherImages(backend, backendImages, 'backend')
gatherImages(other, otherImages, 'other')

function gatherImages(toolNames, images, type) {
  toolNames.forEach((tool, index) => {
    images.push({
      id: index + 1,
      source: `/skills/${type}/${tool}.png`,
      name: tool,
    })
  })
}
