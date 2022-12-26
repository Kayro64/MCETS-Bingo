
const getRandomUrl = () => {
  const links = [
    "https://media.discordapp.net/attachments/534841376609665054/1054446214583697498/lecturePhotoID.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439244459937812/lecturePhotoID_1.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439244631908444/lecturePhotoID_2.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439244896157746/lecturePhotoID_3.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439245164580994/lecturePhotoID_4.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439245500137573/lecturePhotoID_5.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439245726621736/lecturePhotoID_6.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439246011830282/lecturePhotoID_7.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439246259298304/lecturePhotoID_8.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439246544519268/lecturePhotoID_9.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439244241846362/lecturePhotoID_10.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440362254553108/lecturePhotoID_11.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440362535559330/lecturePhotoID_12.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054440362795618315/lecturePhotoID_13.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440363093401670/lecturePhotoID_14.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440363332472952/lecturePhotoID_15.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440363563176087/lecturePhotoID_16.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440363819012096/lecturePhotoID_17.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440364062298154/lecturePhotoID_18.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440364272001044/lecturePhotoID_19.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440362040627230/lecturePhotoID_20.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441832177741824/lecturePhotoID_21.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441832412631141/lecturePhotoID_22.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441832647495770/lecturePhotoID_23.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441832966271108/lecturePhotoID_24.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441833222131722/lecturePhotoID_25.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441833536696331/lecturePhotoID_26.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441834044215406/lecturePhotoID_27.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441834358771762/lecturePhotoID_28.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441834589466645/lecturePhotoID_29.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441834794979398/lecturePhotoID_30.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442538012000256/lecturePhotoID_31.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442538200739840/lecturePhotoID_32.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442538427240549/lecturePhotoID_33.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442538917969920/lecturePhotoID_34.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442539152846988/lecturePhotoID_35.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442539425484860/lecturePhotoID_36.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442539643584532/lecturePhotoID_37.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442539861684224/lecturePhotoID_38.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442540113350828/lecturePhotoID_39.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442537756151909/lecturePhotoID_40.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054443096710070312/lecturePhotoID_41.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054443096995287071/lecturePhotoID_42.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054443097242742794/lecturePhotoID_43.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054443097481822298/lecturePhotoID_44.jpg",
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443098090000404/lecturePhotoID_45.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443098366820423/lecturePhotoID_46.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443098752700578/lecturePhotoID_47.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443099046293574/lecturePhotoID_48.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443099419590676/lecturePhotoID_49.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443096475185202/lecturePhotoID_50.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443785536421969/lecturePhotoID_51.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443785901314049/lecturePhotoID_52.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443786232676422/lecturePhotoID_53.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443786509496400/lecturePhotoID_54.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443786836656188/lecturePhotoID_55.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443783615426590/lecturePhotoID_56.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443783909019648/lecturePhotoID_57.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443784202633246/lecturePhotoID_58.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443784743694366/lecturePhotoID_59.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443785020510279/lecturePhotoID_60.jpg',
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444540389490698/lecturePhotoID_61.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444540582432808/lecturePhotoID_62.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444540817317928/lecturePhotoID_63.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444541001859162/lecturePhotoID_64.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444541219967137/lecturePhotoID_65.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444541643595837/lecturePhotoID_66.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444541819748372/lecturePhotoID_67.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444542016884757/lecturePhotoID_68.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444542218215475/lecturePhotoID_69.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444542402756759/lecturePhotoID_70.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445223817781309/lecturePhotoID_71.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445224014921810/lecturePhotoID_72.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445224258187315/lecturePhotoID_73.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445224535007272/lecturePhotoID_74.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445224727953498/lecturePhotoID_75.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445224933470268/lecturePhotoID_76.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445225168347268/lecturePhotoID_77.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445225420013579/lecturePhotoID_78.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445225671663707/lecturePhotoID_79.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445223620653106/lecturePhotoID_80.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445742493798482/lecturePhotoID_81.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445742753853481/lecturePhotoID_82.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445742988730459/lecturePhotoID_83.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445743248773160/lecturePhotoID_84.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445743529799700/lecturePhotoID_85.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445743810813962/lecturePhotoID_86.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445744297349210/lecturePhotoID_87.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445744528044042/lecturePhotoID_88.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445744720973934/lecturePhotoID_89.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445744972640296/lecturePhotoID_90.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054446214768234627/lecturePhotoID_91.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054446214956994580/lecturePhotoID_92.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054446215154122883/lecturePhotoID_93.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054446215368020058/lecturePhotoID_94.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054446215607107655/lecturePhotoID_95.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794010117541938/lecturePhotoID_96.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794010331467856/lecturePhotoID_97.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794010536968274/lecturePhotoID_98.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794010750881942/lecturePhotoID_99.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794010985779300/lecturePhotoID_100.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794011191279747/lecturePhotoID_101.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794011409387620/lecturePhotoID_102.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794011640090634/lecturePhotoID_103.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794011845591151/lecturePhotoID_104.jpg"
  ];

  return links[Math.floor(Math.random() * links.length)];
};

var rlink = getRandomUrl();

const getRandomGoals = () => {
  const links = [
    "Atteindre 25 reloads", //1
    "Atteindre 50 reloads", //2
    "Atteindre 100 reloads", //3
    "2x de suite la même personne", //4
    "Avoir 100% de love", //5
    "Avoir 70% de love", //6
    "2 élèves de la classe en love", //7
    "2 gars de la classe en love", //8
    "2 filles de la classe en love", //9
    "Tomber sur un couple IRL", //10
    "Tomber sur un joueur de cette partie (en normal)", //11
    "UN ROUX (ou une rousse) (n'importe quel mode)", //12
    "Noir sur blanc (n'importe quel mode)", //13
    "Couple de lunettes", //14
    "Couple noir", //15
    "Couple cheveux (très) blond", //16
    "Couple cheveux (très) noir", //17
    "Sourire avec les dents visibles (n'importe quel mode)", //18
    "Couple qui fait la gueule",//19
    "Couple de membres du GUPA", //20
    "Avoir croisé les deux jumelles (n'importe quel mode)", //21
    "Ex à Nathan (en normal)", //22
    "Couple schizo", //23
    "Tomber sur un ancien de la classe (en normal)", //24
    "Personne appréciée (😳) à dire en voc sinon pas valide", //25
    "Couple Nathan avec une de ses ex", //26
    "Cheveux qui touche le bord du cadre (en normal)", //27
    "<img src='" + getRandomUrl() + "' class=rurl width=50>",
    "<img src='" + getRandomUrl() + "' class=rurl width=50>",
    "<img src='" + getRandomUrl() + "' class=rurl width=50>",
  ];

  return links[Math.floor(Math.random() * links.length)];
};

document.querySelector("#slot1").innerHTML = getRandomGoals();
document.querySelector("#slot2").innerHTML = getRandomGoals();
document.querySelector("#slot3").innerHTML = getRandomGoals();
document.querySelector("#slot4").innerHTML = getRandomGoals();
document.querySelector("#slot5").innerHTML = getRandomGoals();
document.querySelector("#slot6").innerHTML = getRandomGoals();
document.querySelector("#slot7").innerHTML = getRandomGoals();
document.querySelector("#slot8").innerHTML = getRandomGoals();
document.querySelector("#slot9").innerHTML = getRandomGoals();
document.querySelector("#slot10").innerHTML = getRandomGoals();
document.querySelector("#slot11").innerHTML = getRandomGoals();
document.querySelector("#slot12").innerHTML = getRandomGoals();
document.querySelector("#slot13").innerHTML = getRandomGoals();
document.querySelector("#slot14").innerHTML = getRandomGoals();
document.querySelector("#slot15").innerHTML = getRandomGoals();
document.querySelector("#slot16").innerHTML = getRandomGoals();
document.querySelector("#slot17").innerHTML = getRandomGoals();
document.querySelector("#slot18").innerHTML = getRandomGoals();
document.querySelector("#slot19").innerHTML = getRandomGoals();
document.querySelector("#slot20").innerHTML = getRandomGoals();
document.querySelector("#slot21").innerHTML = getRandomGoals();
document.querySelector("#slot22").innerHTML = getRandomGoals();
document.querySelector("#slot23").innerHTML = getRandomGoals();
document.querySelector("#slot24").innerHTML = getRandomGoals();
document.querySelector("#slot25").innerHTML = getRandomGoals();

const div = document.querySelector('#bingo');
const html = div.innerHTML;
const maChaine1encode = "";

function copyToClipboard() {
  function remplacerMots(chaine) {
  // Enlever les espaces au début et à la fin de la chaîne
  chaine = chaine.trim();

  // Remplacer les espaces multiples par un seul espace
  chaine = chaine.replace(/\s+/g, " ");

  // Remplacer "class" par "$"
  chaine = chaine.replace(/class/g, "$");

  // Remplacer "popout" par "£"
  chaine = chaine.replace(/popout/g, "£");

  // Remplacer "case" par "ç"
  chaine = chaine.replace(/case/g, "ç");

  // Remplacer "slot" par "ù"
  chaine = chaine.replace(/slot/g, "ù");

  // Remplacer "</td>" par "µ"
  chaine = chaine.replace(/<\/td>/g, "µ");

  cdn = "https://cdn.discordapp.com/attachments/534841376609665054/"
  media = "https://media.discordapp.net/attachments/534841376609665054/"

  chaine = chaine.replace(new RegExp(cdn, "g"), "#");
  chaine = chaine.replace(new RegExp(media, "g"), "~");

  chaine = chaine.replace(/Atteindre 25 reloads/g, "!1X");
  chaine = chaine.replace(/Atteindre 50 reloads/g, "!2X");
  chaine = chaine.replace(/Atteindre 100 reloads/g, "!3");
  chaine = chaine.replace(/2x de suite la même personne/g, "!4");
  chaine = chaine.replace(/Avoir 100% de love/g, "!5");
  chaine = chaine.replace(/Avoir 70% de love/g, "!6");
  chaine = chaine.replace(/2 élèves de la classe en love/g, "!7");
  chaine = chaine.replace(/2 gars de la classe en love/g, "!8");
  chaine = chaine.replace(/2 filles de la classe en love/g, "!9");
  chaine = chaine.replace(/Tomber sur un couple IRL/g, "!10");
  chaine = chaine.replace(/Tomber sur un joueur de cette partie (en normal)/g, "!11");
  chaine = chaine.replace(/UN ROUX (ou une rousse) (n'importe quel mode)/g, "!12");
  chaine = chaine.replace(/Noir sur blanc (n'importe quel mode)/g, "!13");
  chaine = chaine.replace(/Couple de lunettes/g, "!14");
  chaine = chaine.replace(/Couple noir/g, "!15");
  chaine = chaine.replace(/Couple cheveux (très) blond/g, "!16");
  chaine = chaine.replace(/Couple cheveux (très) noir.jpg/g, "!17");
  chaine = chaine.replace(/Sourire avec les dents visibles (n'importe quel mode)/g, "!18");
  chaine = chaine.replace(/Couple qui fait la gueule/g, "!19");
  chaine = chaine.replace(/Couple de membres du GUPA/g, "!20");
  chaine = chaine.replace(/Avoir croisé les deux jumelles (n'importe quel mode)/g, "!21");
  chaine = chaine.replace(/Ex à Nathan (en normal)/g, "!22");
  chaine = chaine.replace(/Couple schizo/g, "!23");
  chaine = chaine.replace(/Tomber sur un ancien de la classe (en normal)/g, "!24");
  chaine = chaine.replace(/Personne appréciée (😳) à dire en voc sinon pas valide/g, "!25");
  chaine = chaine.replace(/Couple Nathan avec une de ses ex/g, "!26");
  chaine = chaine.replace(/Cheveux qui touche le bord du cadre (en normal)/g, "!27");

  chaine = "```" + chaine + "```";

  return chaine;
}
  const maChaine1 = html
  const maChaine1encode = (remplacerMots(maChaine1));
  machaine1global = maChaine1encode
  navigator.clipboard.writeText(maChaine1encode);
  console.log('Code HTML copié dans le presse-papier');

}

function applyCode() {
  const code = document.querySelector('#code').value;
  function remplacerMotsInverse(chaine) {
    // Remplacer "$" par "class"
    chaine = chaine.replace(/\$/g, "class");

    // Remplacer "£" par "popout"
    chaine = chaine.replace(/£/g, "popout");

    // Remplacer "ç" par "case"
    chaine = chaine.replace(/ç/g, "case");

    // Remplacer "ù" par "slot"
    chaine = chaine.replace(/ù/g, "slot");

    // Remplacer "µ" par "</td>"
    chaine = chaine.replace(/µ/g, "</td>");

    chaine = chaine.replace(/#/g, "https://cdn.discordapp.com/attachments/534841376609665054/");
    chaine = chaine.replace(/~/g, "https://media.discordapp.net/attachments/534841376609665054/");

    chaine = chaine.replace(/!1X/g, "Atteindre 25 reloads");
    chaine = chaine.replace(/!2X/g, "Atteindre 50 reloads");
    chaine = chaine.replace(/!3/g, "Atteindre 100 reloads");
    chaine = chaine.replace(/!4/g, "2x de suite la même personne");
    chaine = chaine.replace(/!5/g, "Avoir 100% de love");
    chaine = chaine.replace(/!6/g, "Avoir 70% de love");
    chaine = chaine.replace(/!7/g, "2 élèves de la classe en love");
    chaine = chaine.replace(/!8/g, "2 gars de la classe en love");
    chaine = chaine.replace(/!9/g, "2 filles de la classe en love");
    chaine = chaine.replace(/!10/g, "Tomber sur un couple IRL");
    chaine = chaine.replace(/!11/g, "Tomber sur un joueur de cette partie (en normal)");
    chaine = chaine.replace(/!12/g, "UN ROUX (ou une rousse) (n'importe quel mode)");
    chaine = chaine.replace(/!13/g, "Noir sur blanc (n'importe quel mode)");
    chaine = chaine.replace(/!14/g, "Couple de lunettes");
    chaine = chaine.replace(/!15/g, "Couple noir");
    chaine = chaine.replace(/!16/g, "Couple cheveux (très) blond");
    chaine = chaine.replace(/!17/g, "Couple cheveux (très) noir.jpg");
    chaine = chaine.replace(/!18/g, "Sourire avec les dents visibles (n'importe quel mode)");
    chaine = chaine.replace(/!19/g, "Couple qui fait la gueule");
    chaine = chaine.replace(/!20/g, "Couple de membres du GUPA");
    chaine = chaine.replace(/!21/g, "Avoir croisé les deux jumelles (n'importe quel mode)");
    chaine = chaine.replace(/!22/g, "Ex à Nathan (en normal)");
    chaine = chaine.replace(/!23/g, "Couple schizo");
    chaine = chaine.replace(/!24/g, "Tomber sur un ancien de la classe (en normal)");
    chaine = chaine.replace(/!25/g, "Personne appréciée (😳) à dire en voc sinon pas valide");
    chaine = chaine.replace(/!26/g, "Couple Nathan avec une de ses ex");
    chaine = chaine.replace(/!27/g, "Cheveux qui touche le bord du cadre (en normal)");

  chaine = chaine.replace(/```/g, "")

  return chaine;
}
  const div2 = document.querySelector('#bingo');
  console.log(remplacerMotsInverse(code));
  lezgo = (remplacerMotsInverse(code));
  div2.innerHTML = lezgo;
  const elements = document.getElementsByClassName("case");

  for (let element of elements) {
    element.addEventListener("click", function() {
      if (element.style.backgroundColor === "") {
        element.style.backgroundColor = "green";
      } else {
        element.style.backgroundColor = "";
      }
    });
  }
}


const elements2 = document.getElementsByClassName("case");

for (let element of elements2) {
  element.addEventListener("click", function() {
    if (element.style.backgroundColor === "") {
      element.style.backgroundColor = "green";
    } else {
      element.style.backgroundColor = "";
    }
  });
}
