import "./style.css";

export default function menu(content) {
  var list = [
    ["Facebook fried", 6],
    ["Garnick mushed malonies", 6],
    ["Ricksmans bread stix", 2],
    ["Doodled onions", 5],
    ["Mixed chilled-and-headed ploppers", 5],
    ["Nut-n-toffee crunch-crunch", "FREE"],
    ["Bean pleasers", 3],
    ["Catskins", 6],
    ["Floury crisper crumbs", 3.333],
    ["Boinkies", 7],
    ["Panty slaw", 4],
  ];
  content.innerHTML = "";
  var div = document.createElement("div");
  var div2 = document.createElement("div");
  div2.classList.add("menu-section");
  var h3 = document.createElement("h3");
  h3.textContent = "ASSISTANTS";
  div.appendChild(h3);
  var list = [
    ["Facebook frieds", 6],
    ["Garnick mushed malonies", 6],
    [["Ricksman bread stix", "with mustard dust (11 or 18 inch)"], 2],
    ["Doodled onions", 5],
    ["Mixed chilled-and-heated ploppers", 5],
    ["Nut-n-toffee crunch-crunch", "FREE"],
    ["Bean pleasers", 3],
    ["Catskins", 6],
    ["Floury crisper crumbs", 3.333],
    ["Boinkies", 7],
    ["Panty slaw", 4],
  ];

  for (let index = 0; index < list.length; index++) {
    var l = document.createElement("div");
    var l2 = document.createElement("div");
    l.textContent = list[index][0];
    l2.textContent = list[index][1];
    div2.appendChild(l);
    div2.appendChild(l2);
  }
  div.appendChild(div2);

  var div2 = document.createElement("div");
  div2.classList.add("menu-section");
  var h3 = document.createElement("h3");
  h3.textContent = "FLAVORED WETS";
  div.appendChild(h3);
  var list = [
    [
      "Foiz Tieas (Mountain, Hot Poppy, Hempdust, Burnt Wood Burning Food, Good-Smelling, Russian Lunch)",
      3,
    ],
    [
      "Ten Percent Soda (Foiz Flavored, Grass Dirt, Bubble-Free, Sparkling Willoq, Shuger Knob)",
      3,
    ],
    ["Yankee Poison", 4],
    ["Coffee (Barter-trade Donka Bean)", 2.5],
    [
      "Fresh Ripped Juicies (Gorgonzo, Mackret, Poo-poo-berry, Pretzel-Fruit)",
      6,
    ],
    ["Brundale Lager", 4],
    ["Dalmation Milkfat Arbor Day Ale", 6],
    ["Big Bitch Schefflefitzen", 6],
    ["Chocolate Crap Porterboy", 9],
    ["Danish Skuzz", 6],
    ["Skuzz Lite", 5],
    ["Small Puff Seasonal Grale", 7],
    ["Jackpot Jokestore Beer", 5],
    ["Company Retreat Beer (2oz)", 1],
    ["Plain Alcohol (25oz)", 8],
    ["GoldSky Liqueurette", 14],
  ];

  for (let index = 0; index < list.length; index++) {
    var l = document.createElement("div");
    var l2 = document.createElement("div");
    l.textContent = list[index][0];
    l2.textContent = list[index][1];
    div2.appendChild(l);
    div2.appendChild(l2);
  }
  div.appendChild(div2);
  var div2 = document.createElement("div");
  div2.classList.add("menu-section");
  var h3 = document.createElement("h3");
  h3.textContent = "FOOD GREATS";
  div.appendChild(h3);
  var h4 = document.createElement("h4");
  h4.textContent =
    "Each Great served with single 11-inch Ricksmams break stick and 1 U-Chooz side: loose lettus, black broth, or big hot hamburger.";
  div.appendChild(h3);
  div.appendChild(h4);

  var list = [
    [
      "Italian beef (Turk-style with a mild wipped prune dick topping and a kiss of larimen oils)",
      14,
    ],
    [
      "Clumps of turkey (In a bed of heavey tomato scum. Served with softened rice poles.)",
      16,
    ],
    ["Dead dog (Co-plated with yam clipping and a leafy sage dumping)", 23],
    [
      "Shitty chicken (Spanked with cinnamon-garlic dirt nad cimpled with a freshwater whale-tit sauce)",
      13,
    ],
    ["Bill Clinton Sandwhich", 9],
    [
      "Pocaloquitos-style meat saucers (Forced into a cheddar coffin, Served over a pile of bones. (Not good))",
      14,
    ],
    ["Wild Dog Fred's Hungry Boy Skillet", 15],
    [
      "Two-bean dickbread wrap (Crammed with  panty slaw, pretzel snapz, Ryans Rice, Las Vegas cheese, and a Grench of drenching)",
      12,
    ],
    ["Secret Item with Surprise Bag", "???"],
  ];

  for (let index = 0; index < list.length; index++) {
    var l = document.createElement("div");
    var l2 = document.createElement("div");
    l.textContent = list[index][0];
    l2.textContent = list[index][1];
    div2.appendChild(l);
    div2.appendChild(l2);
  }
  div.appendChild(div2);

  var div2 = document.createElement("div");
  div2.classList.add("menu-section");
  var h3 = document.createElement("h3");
  h3.textContent = "STRINGERS";
  div.appendChild(h3);
  var h4 = document.createElement("h4");
  h4.textContent = "All stringer pounded and finfer-blended on premises.";
  div.appendChild(h3);
  div.appendChild(h4);
  list = [
    ["Thick cust chunks (Fucked with a n oily-grette Russian mousse)", 15],
    [
      "Roundeye flank stringers (With a Yankee-poiseoned marinara and fuzzy rice curds)",
      18,
    ],
    [
      "Tuxedo stringers (Dressed up in a leafey sage corsage, leather shoes, socks (Gold Toe), Hair gel, and comb)",
      22,
    ],
    ["Worm stringers (Served with mud and dirt from outside)", 16],
    [
      "Big Chief stringers (Sleeping in a teepee of peace pipe shreddings, ant-touched dirt, and buff-stuff (buffalo stuff))",
      17,
    ],
  ];

  for (let index = 0; index < list.length; index++) {
    var l = document.createElement("div");
    var l2 = document.createElement("div");
    l.textContent = list[index][0];
    l2.textContent = list[index][1];
    div2.appendChild(l);
    div2.appendChild(l2);
  }
  div.appendChild(div2);

  var div2 = document.createElement("div");
  div2.classList.add("menu-section");
  var h3 = document.createElement("h3");
  h3.textContent = "SWEET CONCLUDERS";
  div.appendChild(h3);

  var list = [
    [
      "A whole mango (With glace d'gru and a shot of cream of oat juice)",
      "6ish",
    ],
    ["Donut box", "MP"],
    ["Sweet pork smear and tin whistle cakes", 9],
    ["Raspberry quintet (With gay sauce)", 7],
    ["Pink chunk cobbler (Spattered with WineYogurt©)", 6],
    [
      "Stanza cotta (Accidentally dropped in a honeydew stuttering, with a poo=poo-berry possibility)",
      5,
    ],
    [
      "A bowl of Norman Paste (Topped with Irish Freckles (raisin-hazel or spicy))",
      "whatever you got",
    ],
  ];

  for (let index = 0; index < list.length; index++) {
    var l = document.createElement("div");
    var l2 = document.createElement("div");
    l.textContent = list[index][0];
    l2.textContent = list[index][1];
    div2.appendChild(l);
    div2.appendChild(l2);
  }
  div.appendChild(div2);
  var div2 = document.createElement("div");
  div2.classList.add("menu-section");
  var h3 = document.createElement("h3");
  h3.textContent = "TINY TURDS";
  div.appendChild(h3);
  var h4 = document.createElement("h4");
  h4.textContent =
    "All Tiny Turd meals served with Kids Koffee (Donka Bean) and triple-scoop of panty slaw";
  div.appendChild(h4);
  var list = [
    ["Small crabbed chicken dunkers", 5],
    ["Mini-hrak cuddles with malonies", "MP"],
    ["Lil' wienerletts",'32/wien'],
    ['Tiny clumps of turkey',6],
    ['Half Bill Clinton sandwich with malonies',4],
    ['Boinkies-in-a-hat (145)',7],
    ['Magic Meatcup with a bad boy stringer',7]
  ];
  for (let index = 0; index < list.length; index++) {
    var l = document.createElement("div");
    var l2 = document.createElement("div");
    l.textContent = list[index][0];
    l2.textContent = list[index][1];
    div2.appendChild(l);
    div2.appendChild(l2);
  }
  div.appendChild(div2);

  content.appendChild(div);
}
