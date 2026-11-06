// Downloads a poster and the real details for every movie from TMDB.
//
// How to run it from the project folder (PowerShell):
//   $env:TMDB_API_KEY="your-key-here"
//   node scripts/download-posters.mjs
//
// The key only lives in your terminal session, so it is never saved in a project file.

import { mkdir, writeFile } from 'node:fs/promises'
import { movies } from '../src/data/movies.js'

// TMDB's own ID for each movie in src/data/movies.js
const TMDB_IDS = {
  'the-dark-knight': 155,
  'mad-max-fury-road': 76341,
  'john-wick': 245891,
  'top-gun-maverick': 361743,
  inception: 27205,
  interstellar: 157336,
  dune: 438631,
  'jurassic-park': 329,
  'raiders-of-the-lost-ark': 85,
  superbad: 8363,
  'the-grand-budapest-hotel': 120467,
  'get-out': 419430,
  'a-quiet-place': 447332,
  'the-conjuring': 138843,
  'the-shawshank-redemption': 278,
  whiplash: 244786,
  parasite: 496243,
  'spirited-away': 129,
  coco: 354912,
  'knives-out': 546554,
}

const postersFolder = new URL('../public/posters/', import.meta.url)
const metadataFile = new URL('movies-metadata.json', import.meta.url)

const apiKey = process.env.TMDB_API_KEY

if (!apiKey) {
  console.error('Missing TMDB_API_KEY. See the instructions at the top of this file.')
  process.exit(1)
}

async function downloadMovie(movie) {
  const url = `https://api.themoviedb.org/3/movie/${TMDB_IDS[movie.id]}?api_key=${apiKey}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`TMDB returned status ${response.status}`)
  }

  const details = await response.json()
  const year = Number(details.release_date.slice(0, 4))

  // Stops a wrong ID from saving the poster of a different movie
  if (details.title !== movie.title || year !== movie.year) {
    throw new Error(`ID points to "${details.title}" (${year})`)
  }

  const image = await fetch(`https://image.tmdb.org/t/p/w500${details.poster_path}`)

  if (!image.ok) {
    throw new Error(`Poster download returned status ${image.status}`)
  }

  const imageData = Buffer.from(await image.arrayBuffer())
  await writeFile(new URL(`${movie.id}.jpg`, postersFolder), imageData)

  return {
    id: movie.id,
    title: details.title,
    year,
    genres: details.genres.map((genre) => genre.name),
    durationMinutes: details.runtime,
    score: Number(details.vote_average.toFixed(1)),
    overview: details.overview,
  }
}

await mkdir(postersFolder, { recursive: true })

const metadata = []
const failed = []

// One movie failing should not stop the others from downloading
for (const movie of movies) {
  try {
    metadata.push(await downloadMovie(movie))
    console.log(`OK      ${movie.title}`)
  } catch (error) {
    failed.push(movie.title)
    console.error(`FAILED  ${movie.title}: ${error.message}`)
  }
}

await writeFile(metadataFile, JSON.stringify(metadata, null, 2))

console.log(`\nDownloaded ${metadata.length} of ${movies.length} movies.`)

if (failed.length > 0) {
  console.error(`Failed: ${failed.join(', ')}`)
  process.exitCode = 1
}
