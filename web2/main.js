
var vietnamWarHTML = "<img id='img1' src='img1.jpg' alt='Image d'hélico'> \
<p id='article'>Le Viêt Nam avait été colonisé par la France et faisait partie de la colonie<br>\
    de l'Indochine française. Cette colonie représentait le tiers de la <br>\
    péninsule indochinoise en superficie et intégrait le Viêt Nam, le Laos et le <br>\
    Cambodge. Dès le début du xxe siècle des mouvements anticolonialistes sont <br>\
    créés en Indochine française, mais le mouvement indépendantiste ne commence <br>\
    vraiment qu'après la création du Parti communiste vietnamien en 1930. <br>\
    ce parti sera à l'origine de la création du Viêt Minh (la ligue pour <br>\
    l'indépendance du Viêt Nam) en 1941.<br>\
    Après la Seconde Guerre mondiale, où l'Indochine avait été occupée par <br>\
    le Japon, le Viêt Minh fonda la République démocratique du Viêt Nam en 1945.<br>\
    La France, qui avait d'abord accepté la création de ce nouvel État, changea d'avis, <br>\
    et ce fut le début de la guerre d'Indochine. Elle se termina par la <br>\
    défaite de la France en 1954 et la création de deux <br>\
    nouveaux États : le Viêt Nam du Nord (ou Nord-Viêt Nam) et le Viêt Nam du Sud (ou Sud-Viêt Nam).<br>\
    Dès 1955, ce partage du pays fut remis en cause, pour plusieurs raisons. <br>\
    Les deux principales étaient d'une part le refus de la division  du pays par les <br>\
    nationalistes vietnamiens et l'établissement d'un régime autoritaire au Viêt Nam du Sud <br>\
    dirigé par Le président du Sud-Viêt Nam, Ngo Dinh Diêm, d'autre part <br>\
    de la venue d'une dictature communiste dans le Vietnam du Nord dirigé par le chef politique <br>\
    et militaire Hô-Chi-Minh. Ngo Dinh Diêm ayant refusé d'organiser <br>\
    des élections libres, comme il avait été décidé lors de la création de l'État. Ses opposants <br>\
    majoritairement communistes fondèrent alors un mouvement de résistance, <br>\
    le FNL (Front de Libération du Viêt Nam) en 1955. Dès 1956 et surtout entre 1957 et 1959, <br>\
    le FNL commença à se livrer à une guérilla au Sud-Viêt Nam. Le FNL créa une <br>\
    Armée de libération nationale qui, au début de 1960, se composait d'environ 5.000 hommes.</p>\
    <br><br>\
    <form method='POST' action='https://fr.wikipedia.org/wiki/Portail:Guerre_du_Vi%C3%AAt_Nam' target='#''>\
        <input type='submit' value='Source'>\
    </form>"

var coldWarHTML = "<img id='img1' src='img2.jpg' alt='Image d'hélico'> \
<p id='article'> \
    La guerre froide (en anglais Cold War ; en russe Холодная война, Kholodnaïa voïna) <br> \
    est le nom donné à la période de fortes tensions géopolitiques durant la seconde <br> \
    moitié du xxe siècle, entre d'une part les États-Unis et leurs alliés constitutifs du <br> \
    bloc de l'Ouest et d'autre part l'Union des républiques socialistes soviétiques (URSS) <br> \
    et ses États satellites formant le bloc de l'Est. La guerre froide s'installe progressivement <br> \
    à partir de la fin de la Seconde Guerre mondiale dans les années 1945 à 1947 et dure jusqu'à <br> \
    la chute des régimes communistes en Europe en 1989, rapidement suivie de la dislocation de l'URSS <br> \
    en décembre 1991.<br> \
</p> \
    <br><br> \
    <form method='POST' action='https://fr.wikipedia.org/wiki/Guerre_froide' target='#'> \
        <input type='submit' value='Source'> \
    </form>"; 




var mainDiv = document.getElementById("main");
var htmlButton = document.getElementById("changeButton");
acticleChoosenNumber = 1;

showArticleChoosen(mainDiv, acticleChoosenNumber);

htmlButton.addEventListener("click", changeAll, false);


function changeAll()
{
    changeArticle();
    console.log(acticleChoosenNumber);
    getOtherArticleName(htmlButton, acticleChoosenNumber);
    showArticleChoosen(mainDiv, acticleChoosenNumber);
}

function showArticleChoosen(div, articleNumber)
{
    var choosenVarHTML = vietnamWarHTML;
    if (articleNumber == 2)
    {
        choosenVarHTML = coldWarHTML;
    }
    div.innerHTML = choosenVarHTML;
}

function changeArticle()
{
    if (acticleChoosenNumber == 1){
        acticleChoosenNumber = 2;
    }
    else {
        acticleChoosenNumber = 1
    }
}

function getOtherArticleName(HTMLbutton, articleNumber)
{
    console.log(articleNumber);
    if (articleNumber == 1){
        htmlButton.innerHTML = "Voir Guerre Froide";
        return;
    }
    htmlButton.innerHTML = "Voir Guerre du Vietnam";
    return;
}