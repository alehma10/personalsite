let projNumber =0

// content for the pages
const project = [
 {title:"keeping cool in the capital region <b>2020   </b>", client: "CLIENT <li>SAC METRO AQMD</li>", details: "PROJECT <li>WEB DESIGN</li><li>DATA VISUALIZATION</li><li>CARTOGRAPHY</li>", img: "keepingcool.jpg", url:"https://urbanheat-smaqmd.hub.arcgis.com/"},
 {title:"community map <b>2021</b>", client:"CLIENT <li>BALTIMORE GREEN MAP</li>", details:"PROJECT <li>WEB TOOL DESIGN</li><li>COMMUNITY ENGAGEMENT</li><li>CARTOGRAPHY</li>", img: "bgm-.jpg", url: "https://new.opengreenmap.org/browse/maps/605a1530b89dd90100d1188c/map-view?viewbox=-76.93107344005364%2C39.17688334882956%2C-76.28027392449165%2C39.414974745982306"},
 {title:"digital brand development <b>2021  </b>", client:"CLIENT <li>ROY K PATEL</li>", details: "PROJECT <li>PERSONAL BRAND IDENTITY</li><li>WEB DESIGN</li>", img: "roy.jpg", url:"https://zanir-site.superhi.com/"},
 {title:"digital brand identity <b>2021   </b>", client:"CLIENT <li>VICTOR E</li>", details:"PROJECT <li>WEB DESIGN</li><li>DIGITAL BRAND DEVELOPMENT</li>", img: "noun_computer_80531.png", url:"https://victorpersonal.superhi.com/"},
{title:"pollen Hi <b>2021</b>", client:"Client <li>JMF</li>", details:"Project <li>GRAPHIC DESIGN</li><li>PHOTOGRAPHY</li>", img: "pollenhi.jpg", url:"https://victorpersonal.superhi.com/"},
  {title:'<a href= "mailto:xanlehman@gmail.com">BOOKING</a>', client:'<a href= "alexandralehman_compcard1.pdf">view comp card</a>', details:'', img: "websitemodelingcard.png", url:"https://https://www.instagram.com/bi9c9t/"},
]

const proj1Tag = document.querySelector("h1.proj1")
const proj2Tag = document.querySelector("h1.proj2")
const proj3Tag = document.querySelector("h1.proj3")
const proj4Tag = document.querySelector("h1.proj4")
const proj5Tag = document.querySelector("h1.proj5")
const modelingTag = document.querySelector("h1.modeling")


const imgTag = document.querySelector("section.container div.left img.main-img")
const titleTag = document.querySelector("section.container div.left h3.title")
const clientTag = document.querySelector("section.container div.left p.client")
const detailsTag = document.querySelector("section.container div.left p.details")
const urlTag = document.querySelector("section.container div.left a")


//change content to proper project number
const updateSection = function (){
  imgTag.src = project[projNumber].img
  imgTag.style.padding = "13vh 0 15px 0"
  clientTag.style.padding = "10px 0 0 0"
  detailsTag.style.padding = "10px 0 0 0"
  titleTag.innerHTML = project[projNumber].title
  clientTag.innerHTML = project[projNumber].client
  detailsTag.innerHTML = project[projNumber].details
 	urlTag.href = project[projNumber].url
}


proj1Tag.addEventListener("click", function(){
projNumber=1
updateSection() 
})
proj2Tag.addEventListener("click", function(){
projNumber=2
updateSection() 
})
proj3Tag.addEventListener("click", function(){
projNumber=3
updateSection() 
})
proj4Tag.addEventListener("click", function(){
projNumber=4
updateSection() 
})
proj5Tag.addEventListener("click", function(){
projNumber=0
updateSection() 
})
modelingTag.addEventListener("click", function(){
projNumber=5
updateSection() 
})

