var titles=[
    "Mathematics Aided Architectural Design Layout",
    "Development of Deep Learning Based Intrusion Detection System For Defending Android Based HTML Web Applications",
    "Conjunctive use of Rainwater and Ground water to provide safe drinking water with intervention of advanced technology",
    "An Economic Appraisal of Renewables Versus Non-Renewables: A Case of Rajasthan",
    "Development & Validation of a Prototype of a Web/Mobile App Based Positive Psychological Intervention for Adolescents"
]
var links = [
    "https://www.bits-pilani.ac.in/research_projects/mathematics-aided-architectural-design-layouts/",
    "https://www.bits-pilani.ac.in/research_projects/development-of-deep-learning-based-intrusion-detection-system-for-defending-android-based-html-web-applications-against-cross-site-scripting-xss-attack/",
    "https://www.bits-pilani.ac.in/research_projects/conjunctive-use-of-rainwater-and-ground-water-to-provide-safe-drinking-water-with-intervention-of-advanced-technology/",
    "https://www.bits-pilani.ac.in/research_projects/an-economic-appraisal-of-renewables-versus-non-renewables-a-case-of-rajasthan/",
    "https://www.bits-pilani.ac.in/research_projects/development-validation-of-a-prototype-of-a-web-mobile-app-based-positive-psychological-intervention-for-adolescents/"
];
var imgs =[
    "static/1.jpg",
    "static/2.jpg",
    "static/3.png",
    "static/4.jpg",
    "static/5.jpg"
]
var inputdata = "";
function research()
{
    for(let i = 0; i < 5; i++)
    {
        inputdata += "<div class='researchelement' id = 'researchelement"+i+"'><a href='"+links[i]+"' class='researchelementlink'><img class='researchimg' src='"+imgs[i]+"'><div  class='researchtitle'>"+titles[i]+"</div></a></div>";
        console.log(inputdata);
    };
    document.getElementById("researchlist").innerHTML=inputdata;

}