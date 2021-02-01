const containerDiv = document.querySelector('.container')

async function getMovie () {
    const responce = await fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=best&page=5&r=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "73b7fa592dmsha7c2245c67999c8p1b86bdjsne44c12b70c15",
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
	}
})
    const moveData = (await responce.json()).Search


    const html = moveData.map(movie => {
        return `
        <div class='each-movie'>
            <a href='https://www.imdb.com/title/${movie.imdbID}/' target='_blank'>
                <img src=${movie.Poster} alt=${movie.Title} />
            </a>
            <a href='https://www.imdb.com/title/${movie.imdbID}/' target='_blank'>
                <h4 class='title'>Movie Title: ${movie.Title}</h4>
            </a>
            <div class='rating'>
                <i 
                    class="fa fa-star"
                    id="${movie.imdbID}0" 
                    onclick='clickRate(${movie.imdbID}0)' >
                </i>                
                <i 
                    class="fa fa-star"
                    id="${movie.imdbID}1" 
                    onclick='clickRate(${movie.imdbID}1)' >
                </i>
                <i 
                    class="fa fa-star"
                    id="${movie.imdbID}2" 
                    onclick='clickRate(${movie.imdbID}2)' >
                </i>
                <i 
                    class="fa fa-star"
                    id="${movie.imdbID}3" 
                    onclick='clickRate(${movie.imdbID}3)' >
                </i>
                <i 
                    class="fa fa-star"
                    id="${movie.imdbID}4" 
                    onclick='clickRate(${movie.imdbID}4)' >
                </i>
            </div>
            <div class='sub-info'>
                <p><em>Year:</em> <span>${movie.Year}</span></p>
                <a href='https://www.imdb.com/title/${movie.imdbID}/' target='_blank'>
                    <p><em>imdbID:</em> <span>${movie.imdbID}</span></p>
                </a>
            </div>
        </div>
        `;
    }).join('');
    
    containerDiv.innerHTML = html 
    
    const starsArr = Array.from(document.querySelectorAll('.fa-star'))
    
    
    window.clickRate = function clickRate(e) {
        let idx = starsArr.indexOf(e)
        
        for (let i = idx; i >= idx - (idx % 5); i--) {
            if (!starsArr[i].classList.contains('checked')) {
                starsArr[i].classList.add('checked')
            }
        }
        for (let i = idx + 1; i < idx + (5 - idx % 5);i++){
            if (starsArr[i].classList.contains('checked')) {
                starsArr[i].classList.remove('checked')
            }
        }
    }
    
}

getMovie()
