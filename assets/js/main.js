// learning javascript
// <script>
// (function ($) {
// 		$(document).ready(function(){
//     			$(window).scroll(function() {
// 					 var footer = $(".visionwp-footer-area-wrapper");
// 					 var footerOffest = footer.offset().top - $(window).scrollTop();
// 					 if ( footerOffest < 450) {
// 						$("body").addClass('hide-contact-btn');
// 					} else {
// 						$("body").removeClass('hide-contact-btn');
// 					}
// 				});
// 			});
// })(jQuery);
// </script>

// <style>
// 	@media (max-width: 680px) {
// 		.hide-contact-btn .visionwp-site-button  {
// 			opacity: 0;
// 			visibility: hidden;
// 			z-index: -1;
// 		}
// 	}
	
// </style>

document.getElementById( 'demo' ).innerHTML = Date();


// prompt 

// interest = prompt( 'please tell me your fav place' )

// console.log(interest)



// food = prompt('how much was the food prize')
// tipPercentage = prompt( 'tip %?' )/100

// tipAmount = food * tipPercentage

// console.log(tipAmount)

// function
// function sayMyName() {
// 	console.log( 'Bam' )
// }

// sayMyName()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits)

// fruits.push( 'Mango' )

// console.log(fruits)

// array slice

// console.log(fruits.slice(0, 2))

// const person = {
// 	name: 'bam',
// 	mobile: 'Iphone'

// }

// console.log(person.name)
// console.log(person.mobile)


// bracket notation

// console.log(person [ 'name'] )
// console.log(person [ 'mobile'])


// assign object

// person[ 'phone' ] = '12345'
// console.log(person.phone)

// console.log(person)



// const introducer = (name, mobile) => {
// 	const person = {
// 		name: name,
// 		mobile: mobile,
// 		assets: 1000,
// 		prize: 500,
// 		netWorth: function () {
// 			return this.assets - this.prize
// 		}
// 	}

// 	const intro = `Hi my name is ${person.name} and the mobile is ${person.mobile} with my net worth is ${person.netWorth()} USD`

// 	return intro
// }

// console.log(introducer( 'bam', 'iphone'))



const vegi = [ 'banana', 'mango', 'anar', 'apple', 'angur', 'orange', 'onin', 'none'] 

// for (let i=0; i<vegi.length; i++) {
// 	console.log(vegi[0])
// }

// for (const vegitable of vegi){
// 	console.log(vegitable)
// }

// const numbers = [1, 2, 3, 4, 5, 6]

// for (i=0; i< numbers.length; i++ ) {
// 	console.log(numbers[i])
// }

// const double = (numbers) => {
// 	let result = []
// 	for (const number of numbers) {
// 		result.push(number * 1)
// 	}
// 	return result;
// }

// console.log(double([1, 2, 3, 4, 5, 6]))


// const howManyLetter = () => {
// 	const phrase = 'hey, you can go nepal of ktm'

// 	for (letter in phrase) {
// 		console.log(letter)
// 	}
// }

// howManyLetter()


/*change theme */

// var themeToggler()

// themeToggler.addEventListner( 'click', () => {
// 	document.body.classlist.toggle('dark-theme-variables');

// 	themeToggler.querySelector( 'span:nth-child(1)' ).classlist.toggle('active');
// 	themeToggler.querySelector( 'span:nth-child(2)' ).classlist.toggle('active');

// 	console.log(themeToggler)
// })

// cont sumArray = (numbers) => {
// 	let result = 0;

// 	for (const number of numbers) {
// 		console.log(number)
// 		result +=number
// 	}
// 	return { result }
// }

const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

form.addEventListener( 'submit', (e) => {
	e.preventDefault();

	const todoText = input.value;

	if (todoText) {
		const todoE1 = document.createElement( 'li' );
		todoE1.innerText = todoText;

		todoE1.addEventListener( 'click', () => {
			todoE1.classList.toggle( 'completed' );
		});

		todos.appendChild(todoE1);
		input.value = '';
	}
});



// movie api projects

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const main = document.querySelector( 'main' );

async function getMovies() {
	const resp = await fetch(APIURL);
	const respData = await resp.json();

	console.log(respData);

	respData.results.forEach((movie) => {

		const { poster_path, title, vote_average } = movie;

		const movieEl = document.createElement( 'div' );
		movieEl.classList.add( 'movie' );

		movieEl.innerHTML = ` <img src="${IMGPATH + poster_path}" alt= "${title}" />
			<div class="movie-info">
				<h3>${title}</h3>
				<span>${vote_average}</span>
			</div> 
		`;

		main.appendChild(movieEl);
	});

	return respData;
}

getMovies();



// const APIURL = 'https://api.github.com/users/';

// const main = document.querySelector('main');

// getUser('Bampun');

// async function getUser(user) {
// 	const resp = await fetch(APIURL);
// 	const respData = await resp.json();

// 	createUserCard(respData);
// }

// function createUserCard(user) {
// 	// const card = document.createElement('div');
// 	// const card.classList.add( 'card' );

// 	const cardHTML = `
// 		<div class="card">
// 			<div>
// 				<img src="${user.avatar_url}" alt="${user.name}" />
// 			</div>

// 			<div> 
// 				<h2>${user.name}</h2>
// 				<span>${user.bio}</span>
// 			</div>

// 			<ul>
// 				<li>${user.followers}</li>
// 				<li>${user.following}</li>
// 				<li>${user.public_repos}</li>
// 			</ul>
// 		</div>

// 	`;
// 	main.innerHTML = cardHTML; 
// }

// getUser();