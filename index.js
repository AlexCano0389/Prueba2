//Marvel API Public key: b5dd158dd0e856443db7fb726fbc6bc9
//Marvel API hash: 80182fcb24c6426319114b9e34eafed6

let marvelAPI = `https://gateway.marvel.com/v1/public/comics`
let apitKEY = `b5dd158dd0e856443db7fb726fbc6bc9`
let hash = `80182fcb24c6426319114b9e34eafed6`
let finalUrl = `${marvelAPI}?ts=1&apikey=${apitKEY}&hash=${hash}`

axios.get(finalUrl).then(data => {
    let comics = data.data.data.results
    console.log(comics);
    let output = "<ul>"
    for (let i = 0; i < comics.length; i++) {
        if (comics[i].images.length > 0) {
            let image_path = make_image(comics[i].images[0].path, comics[i].images[0].extension)
            output += make_comic(image_path, comics[i].title, i, comics[i].dates[0].date)
        }
    }
    output += '</ul>'
    $('#results').append(output);
}).catch((error) => {
    console.log(error);
})

let make_comic = (imgPath, title, i, fecha) => `<li><img src="${imgPath}"><br>${title}<br>${fecha}<button onclick="like(${i})">Like</button><button onclick="dislike(${i})">DisLike</button></li>`
let make_image = (path, extension) => `${path}/standard_xlarge.${extension}`
let likes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
let like = i => {
    likes[i] += 1
    alert(`Likes ${ likes[i]}`)
}
let dislikes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
let dislike = i => {
    dislikes[i] += 1
    alert(`DisLikes  ${ dislikes[i]}`)
}