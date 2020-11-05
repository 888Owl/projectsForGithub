const movie_arr = ['Inglorious Bastards', 'The Godfather', 'Reservoir Dogs', 'La Vita E Bella', 'Gran Torino', 'Space Jam', 'True Romance', 'Amélie', 'American Beauty']

choose = function () {
    const root = document.getElementById("root");
    let num = Math.floor(Math.random() * movie_arr.length);
    root.innerHTML = movie_arr[num]
}