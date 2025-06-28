// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss')(),    // ← the PostCSS plugin shipped inside `tailwindcss`
    require('autoprefixer')(),   // ← autoprefixer
  ]
}
