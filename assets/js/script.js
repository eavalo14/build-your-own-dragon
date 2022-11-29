var layer = $('#layers')
var layerLocation = $('#layerLocation')
var layers = document.querySelectorAll('#Background, #Body, #Chest, #Eyes, #Head,#Horns,#Smoke,#Teeth,#Tongue');
var resEle = document.querySelector(".result");
var context = resEle.getContext("2d");

// also the layering order
var stateVariables = 
{
    "Background": "none",
    "Body": "none",
    "Chest": "none",
    "Tongue": "none",
    "Teeth": "none",
    "Horns": "none",
    "Head": "none",
    "Eyes": "none",
    "Smoke": "none",    
}



varLayersDict = {
    "Background": ["none",
        "Basil.png","Berry.png","Black.png","Blood.png","Blue.png","Brick.png",
        "British_Racing.png","Bubblegum.png","Cadmium_Green.png","Candy.png","Carrot.png",
        "Cerulean.png","Cherry.png","Cobalt.png","Electric_Purple.png","Fern.png","Fire.png",
        "Forrest.png","Ginger.png","Grape.png","Hazelnut.png","Honey.png","Indigo.png",
        "Lawn_Green.png","Lemon.png","Lime.png","Mahogany.png","Merigold.png",
        "Monarch_Orange.png","Mustard.png","Ocean.png","Orange.png","Pear.png","Pink.png",
        "Purple.png","Red.png","Rose.png","Royal_Blue.png","Ruby.png","Sage.png",
        "Sapphire.png","Sepia.png","Sheen_Green.png","Spruce.png","Taffy.png","Teal.png",
        "White.png","Yellow.png"
    ],

    "Body": ["none",
        "3d_art_body.png","Aztec God Body Venice .png","Aztec God Body black mocha .png",
        "Aztec God Body black mystic .png","Aztec God Body black orange .png",
        "Aztec God Body black pink.png","Aztec God Body black purple .png",
        "Aztec God Body black red.png","Aztec God Body black teal.png",
        "Aztec God Body black yellow .png","Aztec God Body blaze .png",
        "Aztec God Body instant .png","Aztec God Body instant red.png",
        "Aztec God Body mocha orange .png","Aztec God Body mocha steel .png",
        "Aztec God Body mocha yellow .png","Aztec God Body mystic blaze .png",
        "Aztec God Body noir green .png","Aztec God Body noir mocha .png",
        "Aztec God Body noir orange .png","Aztec God Body noir red.png",
        "Aztec God Body noir steel .png","Aztec God Body noir yellow .png",
        "Aztec God Body pink blue .png","Aztec God Body pink instant .png",
        "Aztec God Body pink teal .png","Aztec God Body steel .png",
        "Aztec God Body teal .png","Aztec God Body white breeze.png",
        "Aztec God Body white instant .png","Aztec God Body white noir .png",
        "Aztec God Body white red.png","Aztec God Body yellow blue .png",
        "Aztec God Body yellow brown .png","Aztec God Body yellow green .png",
        "Aztec god body.png","Aztec god green blue.png","Aztec god purple orange .png",
        "Aztec_God_Body_black_green.png","Aztec_god_blue_red.png","Beetle body.png",
        "Blue Stripe.png","Bone body.png","Bones body blaze.png","Bones body mocha.png",
        "Bones body mystic .png","Bones body neon.png","Bones breeze.png",
        "Caterpillar body black purple .png","Caterpillar body green red.png",
        "Caterpillar body purple .png","Caterpillar body purple pink.png",
        "Caterpillar body red white .png","Caterpillar body.png",
        "Dark Purple Crystal.png","Decayed body blue green .png",
        "Decayed body purple .png","Decayed body purple blue.png","Decayed body red.png",
        "Decayed body.png","Earth blue body.png","Earth body blaze.png",
        "Earth body blue.png","Earth body green purple .png","Earth body red .png",
        "Earth body red.png","Earth body.png","Fish body .png","Fish body black blaze.png",
        "Fish body blaze .png","Fish body blaze blue.png","Fish body blue red.png",
        "Fish body gold purple .png","Fish body mystic blue.png",
        "Fish body skin gold.png","Flame black red .png","Flame body .png",
        "Flame body blue purple .png","Flame body blue.png","Flame body dark.png",
        "Flame body purple .png","Flame body red yellow .png","Fur body blaze.png",
        "Fur body breeze.png","Fur body mocha .png","Fur body mystic .png",
        "Fur body noir.png","Fur body pink.png","Fur body.png","Gold body blaze.png",
        "Gold body blue.png","Gold body breeze.png","Gold body dark.png",
        "Gold body green.png","Gold body mystic.png","Gold body pink.png",
        "Gold body red black.png","Gold body.png","Green Crystal.png","Lava body 2.png",
        "Lava body dark.png","Lava body.png",
        "Lightning body blue n purple lightning .png","Lightning body dark.png",
        "Lightning body green orange .png","Lightning body green purple  2.png",
        "Lightning body green purple .png","Lightning body green purple lightning.png",
        "Lightning body green.png","Lightning body mocha .png",
        "Lightning body pink blue.png","Lightning body predator heat.png",
        "Lightning body red.png","Lightning body yellow .png","Lightning body.png",
        "Orange Lava.png","Purple Crystal.png","Red Crystal.png","Red Stripe.png",
        "Scale body blaze breeze.png","Scale body blaze green.png",
        "Scale body blaze yellow .png","Scale body blaze.png",
        "Scale body green yellow .png","Scale body instant blaze .png",
        "Scale body instant green .png","Scale body instant noir .png",
        "Scale body instant orange .png","Scale body instant yellow .png",
        "Scale body mocha yellow .png","Scale body mystic blaze.png",
        "Scale body mystic breeze .png","Scale body mystic noir .png",
        "Scale body mystic white.png","Scale body mystic yellow .png",
        "Scale body noir green .png","Scale body noir orange .png",
        "Scale body noir white .png","Scale body noir yellow .png",
        "Scale body noir yellow 1.png","Scale body purple .png",
        "Scale body red yellow .png","Scale body white blaze .png",
        "Scale body white mystic .png","Scale body white noir .png",
        "Scale body white orange .png","Scale body yellow mystic .png",
        "Scale body yellow noir .png","Scale body.png","Thorn body black red.png",
        "Thorn body blue.png","Thorn body green black .png","Thorn body green blue .png",
        "Thorn body green pink.png","Thorn body green yellow .png",
        "Thorn body pink blue.png","Thorn body pink.png","Thorn body purple blue .png",
        "Thorn body red blue .png","Trap body .png","Trap body blaze .png",
        "Trap body breeze .png","Trap body green .png","Trap body instant .png",
        "Trap body mocha brown .png","Trap body mocha.png","Trap body mystic .png",
        "Trap body noir .png","Trap body red blue .png","Trap body white .png",
        "Trap body white mocha .png"
    ],

    "Chest": ["none",
        "3d_art_chest.png", "Aztec God Chest Venice .png", "Aztec God Chest brown .png",
        "Aztec God Chest instant .png", "Aztec God Chest mocha .png",
        "Aztec God Chest mystic .png", "Aztec God Chest neon .png",
        "Aztec God Chest noir .png", "Aztec God Chest orange .png",
        "Aztec God Chest pink.png", "Aztec God Chest teal.png",
        "Aztec God Chest white .png", "Aztec God Chest yellow .png", "Aztec god chest.png",
        "Aztec_God_Chest_blaze.png", "Aztec_God_Chest_breeze.png", "Blue Caterpillar.png",
        "Blue Classic.png", "Blue Glow.png", "Blue Lava.png", "Blue River.png",
        "Blue Stripe.png", "Dark Blue Reflective.png", "Dark lava.png",
        "Dirty Green Caterpillar.png", "Dirty Green Reflective.png",
        "Dirty Green River.png", "Energy Chest blaze .png", "Energy Chest blue green .png",
        "Energy Chest blue yellow .png", "Energy Chest breeze.png",
        "Energy Chest brown pink.png", "Energy Chest dark green.png",
        "Energy Chest green .png", "Energy Chest green pink.png",
        "Energy Chest instant .png", "Energy Chest mocha pink.png",
        "Energy Chest mystic blaze .png", "Energy Chest mystic blaze.png",
        "Energy Chest mystic pink.png", "Energy Chest mystic white .png",
        "Energy Chest no energy .png", "Energy Chest noir green .png",
        "Energy Chest noir pink .png", "Energy Chest noir.png", "Energy Chest og noir .png",
        "Energy Chest og white .png", "Energy Chest oh blaze .png",
        "Energy Chest orange .png", "Energy Chest red blaze .png",
        "Energy Chest red pink.png", "Energy Chest red white .png",
        "Energy Chest red yellow .png", "Energy Chest silver pink.png",
        "Energy Chest teal pink.png", "Energy Chest yellow .png",
        "Energy chest black n pink .png", "Fire body .png", "Fire body breeze yellow .png",
        "Fire body mystic yellow .png", "Fire chest Venice yellow .png",
        "Fire chest blaze blaze .png", "Fire chest blaze green.png",
        "Fire chest blaze noir.png", "Fire chest blaze yellow .png",
        "Fire chest green teal.png", "Fire chest green yellow .png",
        "Fire chest instant yellow .png", "Fire chest mocha pink.png",
        "Fire chest mocha yellow .png", "Fire chest mystic 2.png",
        "Fire chest mystic blaze .png", "Fire chest mystic breeze .png",
        "Fire chest mystic mocha .png", "Fire chest mystic noir.png",
        "Fire chest neon yellow .png", "Fire chest noir green .png",
        "Fire chest noir mocha .png", "Fire chest noir noir .png",
        "Fire chest noir yellow .png", "Gold Chest Venice .png", "Gold Chest blaze .png",
        "Gold Chest breeze .png", "Gold Chest green .png", "Gold Chest instant .png",
        "Gold Chest mocha .png", "Gold Chest mystic .png", "Gold Chest neon .png",
        "Gold Chest noir.png", "Gold Chest orange .png", "Gold Chest pink.png",
        "Gold Chest teal .png", "Gold chest.png", "Green Caterpillar.png",
        "Green Classic.png", "Green Glow.png", "Green Lava.png", "Green Reflective.png",
        "Green River.png", "Green Stripe.png", "Ice chest Venice .png",
        "Ice chest breeze.png", "Ice chest brown .png", "Ice chest green .png",
        "Ice chest instant .png", "Ice chest mocha .png", "Ice chest mystic .png",
        "Ice chest neon .png", "Ice chest noir instant .png", "Ice chest noir.png",
        "Ice chest orange .png", "Ice chest orange blue .png", "Ice chest orange noir.png",
        "Ice chest pink orange .png", "Ice chest purple mystic .png",
        "Ice chest red blue .png", "Ice chest red silver .png", "Ice chest red.png",
        "Ice chest silver orange .png", "Ice chest silver purple .png",
        "Ice chest silver.png", "Ice chest teal .png", "Ice chest teal orange .png",
        "Ice chest yellow .png", "Ice chest yellow blue .png", "Ice chest.png",
        "Iced chest blaze .png", "Lava.png", "Light Blue stripe.png", "Obsidian Chest.png",
        "Olive Caterpillar.png", "Orange Reflective.png", "Orange Stripe.png",
        "Orange lava.png", "Pink Caterpillar.png", "Pink Classic.png", "Pink Glow.png",
        "Purple Caterpillar.png", "Purple Classic.png", "Purple Glow.png", "Purple Lava.png",
        "Purple Reflective.png", "Purple River.png", "Purple Stripe.png",
        "Red Caterpillar.png", "Red Classic.png", "Red Glow.png", "Red Reflective.png",
        "Red River.png", "Red Stripe.png", "Robot Chest Venice .png",
        "Robot Chest blaze teal.png", "Robot Chest blaze yellow .png",
        "Robot Chest breeze yellow .png", "Robot Chest green yellow .png",
        "Robot Chest instant orange .png", "Robot Chest instant yellow .png",
        "Robot Chest mocha .png", "Robot Chest mystic .png", "Robot Chest mystic blaze.png",
        "Robot Chest mystic breeze .png", "Robot Chest mystic noir .png",
        "Robot Chest noir .png", "Robot Chest noir breeze .png",
        "Robot Chest noir mystic .png", "Robot Chest noir white .png",
        "Robot Chest orange yellow .png", "Robot Chest pink yellow .png",
        "Robot Chest red yellow .png", "Robot Chest steel orange .png",
        "Robot Chest steel pink.png", "Robot Chest steel teal .png",
        "Robot Chest yellow blue .png", "Robot Chest yellow pink.png",
        "Robot chest steel green .png", "Robot chest.png", "Ruby Stripe.png",
        "Snake Chest Venice .png", "Snake Chest Venice green.png",
        "Snake Chest black white .png", "Snake Chest blaze blaze .png",
        "Snake Chest blaze breeze .png", "Snake Chest blaze instant .png",
        "Snake Chest blaze mystic .png", "Snake Chest blaze white .png",
        "Snake Chest green green .png", "Snake Chest instant .png",
        "Snake Chest instant white .png", "Snake Chest mocha green.png",
        "Snake Chest mocha noir .png", "Snake Chest mystic green.png",
        "Snake Chest neon green.png", "Snake Chest neon white .png",
        "Snake Chest noir white .png", "Snake Chest orange green .png",
        "Snake Chest orange teal .png", "Snake Chest pink green .png",
        "Snake Chest red green .png", "Snake Chest red noir .png",
        "Snake Chest red orange .png", "Snake Chest red white .png",
        "Snake Chest red yellow .png", "Snake chest.png", "Standard Chest Venice .png",
        "Standard Chest blaze .png", "Standard Chest breeze .png",
        "Standard Chest bright orange .png", "Standard Chest brown .png",
        "Standard Chest green .png", "Standard Chest instant .png",
        "Standard Chest mocha .png", "Standard Chest neon .png", "Standard Chest noir .png",
        "Standard Chest orange .png", "Standard Chest pink .png", "Standard Chest red.png",
        "Standard Chest silver .png", "Standard Chest teal .png",
        "Standard Chest yellow .png", "Standard chest mystic .png", "Standard chest.png",
        "Teal Classic.png", "Teal Stripe.png", "Trap Body Venice .png", "Trap Body blaze.png",
        "Trap Body breeze .png", "Trap Body brown .png", "Trap Body green.png",
        "Trap Body instant .png", "Trap Body mocha .png", "Trap Body mystic .png",
        "Trap Body neon.png", "Trap Body noir.png", "Trap Body orange .png",
        "Trap Body pink .png", "Trap Body red.png", "Trap Body steel .png",
        "Trap Body teal .png", "Trap Body yellow .png", "Trap Body yellow green .png", 
        "Trap chest .png"
    ],

    "Eyes": ["none",
        "3d_art_eye.png","Alien eye green red.png","Alien eye pink and black .png",
        "Alien eye purple .png","Alien eye red and green.png","Alien eye red.png",
        "Alien eye yellow .png","Alien eye.png","Alien_eye_black.png",
        "Alien_eye_blaze.png","Aztec god eye blaze .png","Aztec god eye blood .png",
        "Aztec god eye breeze.png","Aztec god eye green pink.png",
        "Aztec god eye instant .png","Aztec god eye mocha.png",
        "Aztec god eye mystic .png","Aztec god eye neon.png",
        "Aztec god eye orange yellow .png","Aztec god eye pink.png","Aztec god eye.png",
        "Cross eye blaze .png","Cross eye blaze white .png","Cross eye blue green.png",
        "Cross eye blue.png","Cross eye breeze.png","Cross eye green.png",
        "Cross eye mocha.png","Cross eye noir black.png","Cross eye purple blue .png",
        "Cross eye white blue .png","Cross eye yellow blaze.png","Cyborg eye blue.png",
        "Cyborg eye green.png","Cyborg eye orange .png","Cyborg eye orange green .png",
        "Cyborg eye pink and green .png","Cyborg eye red and blue .png",
        "Cyborg eye red.png","Cyborg eye steel.png","Cyborg eye teal.png",
        "Fire Eye Venice .png","Fire Eye black blue teal .png",
        "Fire Eye black pink blue .png","Fire Eye black red .png",
        "Fire Eye black yellow .png","Fire Eye blaze .png","Fire Eye blue .png",
        "Fire Eye blue yellow .png","Fire Eye breeze yellow .png","Fire Eye breeze.png",
        "Fire Eye green .png","Fire Eye mystic .png","Fire Eye mystic yellow .png",
        "Fire Eye noir breeze .png","Fire Eye red blue .png","Fire Eye.png",
        "Flame eyes.png","Glasses all pink.png","Glasses blaze.png",
        "Glasses mocha red .png","Glasses noir red.png","Glasses orange .png",
        "Glasses pink.png","Glasses red.png","Glasses.png","Gold eye.png",
        "Lizard eye blaze.png","Lizard eye blue.png","Lizard eye dark red.png",
        "Lizard eye dark.png","Lizard eye frost.png","Lizard eye green .png",
        "Lizard eye green yellow.png","Lizard eye purple .png","Lizard eye red green.png",
        "Lizard eye red.png","Lizard eye yellow .png","Lizard eye.png",
        "Pharaoh eye Venice.png","Pharaoh eye blaze .png","Pharaoh eye blaze 2.png",
        "Pharaoh eye dark teal red.png","Pharaoh eye red black .png",
        "Pharaoh eye teal red.png","Pharaoh eye yellow blue .png","Pharaoh eye.png",
        "Robot eye green.png","Robot eye pink blue.png","Robot eye purple .png",
        "Robot eye purple purple .png","Robot eye red white .png","Robot eye white .png",
        "Robot eyes mocha .png","Robot eyes.png","Steel eye Venice.png",
        "Steel eye blaze .png","Steel eye blue.png","Steel eye dark.png",
        "Steel eye duo color.png","Steel eye instant.png","Steel eye mocha .png",
        "Steel eye mocha.png","Steel eye neon .png","Steel eye noir.png",
        "Steel eye orange .png","Steel eye purple yellow .png","Steel eye red .png",
        "Steel eye red.png","Steel eye steel.png","Steel eye white.png",
        "Steel eye yellow.png","Steel eye.png","White flame.png"
        ],

    "Head":["none",
        "3d_art_head.png","Aztec god head blue yellow .png",
        "Aztec god head grey mocha .png","Aztec god head mocha .png",
        "Aztec god head mocha yellow .png","Aztec god head pink green .png", 
        "Aztec god head purple gold.png","Aztec god head red white.png",
        "Aztec god head teal orange .png","Aztec god head white red.png",
        "Aztec god head yellow purple .png","Aztec god head.png",
        "Aztec_god_head_blaze.png","Aztec_god_head_blaze_gold.png",
        "Blood Mask blaze green.png","Blood Mask blaze.png","Blood Mask blue red.png",
        "Blood Mask dark red green .png","Blood Mask glitch.png",
        "Blood Mask mocha no blood.png","Blood Mask mocha.png",
        "Blood Mask noir green.png","Blood Mask purple .png","Blood Mask white green.png",
        "Blood Mask yellow blue.png","Blood mask teal pink .png","Blood mask.png",
        "Bone Head Venice .png","Bone Head blaze .png","Bone Head breeze.png",
        "Bone Head brown .png","Bone Head green .png","Bone Head instant .png",
        "Bone Head mocha .png","Bone Head mystic .png","Bone Head noir .png",
        "Bone Head red .png","Bone Head white.png","Bone head.png",
        "Chinese head all noir .png","Chinese head blaze .png",
        "Chinese head green halftone .png","Chinese head green mystic .png",
        "Chinese head green purple .png","Chinese head instant yellow .png",
        "Chinese head mystic blue.png","Chinese head mystic orange .png",
        "Chinese head noir red.png","Chinese head orange mocha.png",
        "Chinese head red green.png","Chinese head white blaze.png",
        "Chinese head white noir.png","Chinese head.png","Fish head blaze.png",
        "Fish head gold.png","Fish head green pink.png","Fish head green purple .png",
        "Fish head mocha.png","Fish head orange .png","Fish head red blue.png",
        "Fish head red white.png","Fish head white blue.png","Glow spots red.png",
        "Gold head Venice.png","Gold head blaze.png","Gold head blood.png",
        "Gold head breeze.png","Gold head bright orange .png","Gold head green .png",
        "Gold head instant.png","Gold head mocha .png","Gold head mystic .png",
        "Gold head neon.png","Gold head noir.png","Gold head orange .png",
        "Gold head silver.png","Gold head yellow .png","Gold head.png",
        "Lightning body breeze .png","Lightning body instant .png",
        "Lightning head blaze.png","Lightning head brown .png",
        "Lightning head instant blaze .png","Lightning head mocha .png",
        "Lightning head mocha orange .png","Lightning head mocha orange neon .png",
        "Lightning head mystic breeze.png","Lightning head noir.png",
        "Lightning head pink white.png","Lightning head red yellow .png",
        "Lightning head white red.png","Lightning head yellow red.png",
        "Lightning head.png","Pharaoh Head mocha red.png","Pharaoh head .png",
        "Pharaoh head blaze.png","Pharaoh head blue blaze.png",
        "Pharaoh head blue orange .png","Pharaoh head gold noir.png",
        "Pharaoh head instant .png","Pharaoh head mocha silver .png",
        "Pharaoh head mocha.png","Pharaoh head mystic orange .png",
        "Pharaoh head noir.png","Pharaoh head silver blue.png",
        "Pharaoh head silver mocha .png","Pharaoh head yellow red.png",
        "Predator Head yellow .png","Predator head .png","Predator head blaze .png",
        "Predator head instant.png","Predator head mocha white.png",
        "Predator head red.png","Robot Head blaze .png","Robot Head green yellow .png",
        "Robot Head instant .png","Robot Head instant orange .png",
        "Robot Head mocha white .png","Robot Head mystic .png",
        "Robot Head orange white .png","Robot Head purple .png",
        "Robot Head purple green .png","Robot Head purple orange .png",
        "Robot Head red blue .png","Robot Head silver blaze .png",
        "Robot Head yellow red .png","Robot head black and red.png","Robot head.png",
        "Robot_Head pink green.png","Snowflake .png","Snowflake head Venice .png",
        "Snowflake head blaze .png","Snowflake head bright orange .png",
        "Snowflake head brown .png","Snowflake head green.png",
        "Snowflake head instant .png","Snowflake head mocha .png",
        "Snowflake head mystic .png","Snowflake head neon .png",
        "Snowflake head orange .png","Snowflake head red.png",
        "Snowflake head yellow .png","Snowflake red.png","Zombie head blaze green .png",
        "Zombie head decayed .png","Zombie head instant .png",
        "Zombie head mocha purple .png","Zombie head orange blue .png",
        "Zombie head purple green.png","Zombie head red teal.png"
    ],

    "Horns":["none",
        "3d_art_horns.png","Bat wing horns Venice .png","Bat wing horns blaze noir .png",
        "Bat wing horns instant .png","Bat wing horns mocha .png",
        "Bat wing horns mystic breeze .png","Bat wing horns noir instant .png",
        "Bat wing horns noir skeleton .png","Bat wing horns pink.png",
        "Bat wing horns white .png","Bat wing horns white green .png",
        "Bat wing horns white mocha .png","Bat wing horns white orange .png",
        "Bat wing horns white red .png","Bat wing horns.png","Bat_wing_horns_blaze.png",
        "Bat_wing_horns_blaze_blue.png","Dark gold.png","Earth Horns brown pink.png",
        "Earth Horns clean .png","Earth Horns purple .png",
        "Earth Horns purple green .png","Earth Horns red instant .png",
        "Earth horns instant orange .png","Earth_Horns.png","Feather horn mystic .png",
        "Feather horns Venice .png","Feather horns blaze .png","Feather horns breeze.png",
        "Feather horns instant .png","Feather horns mocha .png","Feather horns neon .png",
        "Feather horns noir .png","Feather horns orange brown .png",
        "Feather horns red.png","Feather horns.png","Fire 1.png","Fire Horns Venice .png",
        "Fire Horns blaze .png","Fire Horns green.png","Fire Horns mocha .png",
        "Fire Horns noir .png","Fire horns lava.png","Fire horns.png","Frost horns.png",
        "Gold horns Venice .png","Gold horns blaze.png","Gold horns breeze.png",
        "Gold horns green.png","Gold horns instant .png","Gold horns mocha .png",
        "Gold horns mystic .png","Gold horns neon .png","Gold horns noir .png",
        "Gold horns orange .png","Gold horns red.png","Gold horns silver .png",
        "Gold horns teal .png","Gold horns.png","Gold lightning.png","Ice 1.png",
        "Ice Horn blaze .png","Ice Horn blaze clean .png","Ice Horn brown .png",
        "Ice Horn green .png","Ice Horn instant .png","Ice Horn instant clean .png",
        "Ice Horn mocha .png","Ice Horn mocha clean .png","Ice Horn mystic .png",
        "Ice Horn mystic clean .png","Ice Horn noir .png","Ice Horn orange .png",
        "Ice Horn red.png","Ice Horn steel .png","Ice gold.png","Ice green.png",
        "Ice horns.png","Ice pink.png","Ice purple.png","Ice red.png","Ice white Horn.png",
        "Lightning horns blaze.png","Lightning horns brown blue .png",
        "Lightning horns dark blue white .png","Lightning horns evil.png",
        "Lightning horns mocha green .png","Lightning horns mocha red.png",
        "Lightning horns mystic blaze .png","Lightning horns noir .png",
        "Lightning horns orange red blue .png","Lightning horns orange white.png",
        "Lightning horns white yellow .png","Lightning horns.png","Ram horns Venice .png",
        "Ram horns blaze .png","Ram horns breeze .png","Ram horns instant .png",
        "Ram horns mocha .png","Ram horns mystic .png","Ram horns noir .png",
        "Ram horns.png","Single Lava blaze .png","Single Lava blue orange .png",
        "Single Lava dark purple .png","Single Lava gold .png","Single Lava green .png",
        "Single Lava green orange blue .png","Single Lava instant .png",
        "Single Lava orange .png","Single Lava orange yellow .png",
        "Single Lava purple .png","Single Lava purple orange .png",
        "Single Lava teal orange .png","Single Lava white blue .png",
        "Single_Lava_Wlayer png.png"
    ]


    "Smoke":["none",
        "Untitled_Artwork 3.png","Untitled_Artwork 4.png","Untitled_Artwork 5.png",
        "Untitled_Artwork 6.png","Untitled_Artwork 7.png","Untitled_Artwork.png",
        "Untitled_Artwork_1.png","Untitled_Artwork_2.png"
    ],

    "Teeth":["none",
        "Black_Slime.png","Chainsaw Teeth blaze white .png","Chainsaw Teeth blue .png",
        "Chainsaw Teeth gold blue .png","Chainsaw Teeth instant .png",
        "Chainsaw Teeth mocha .png","Chainsaw Teeth red white .png",
        "Chainsaw Teeth white .png","Chainsaw Teeth white blaze.png","Chainsaw teeth.png",
        "Chainsaw_Teeth_blaze.png","Gold Teeth Venice .png","Gold Teeth blaze .png",
        "Gold Teeth breeze.png","Gold Teeth brown .png","Gold Teeth green .png",
        "Gold Teeth instant .png","Gold Teeth mocha .png","Gold Teeth mystic .png",
        "Gold Teeth neon .png","Gold Teeth noir .png","Gold Teeth orange .png",
        "Gold Teeth red.png","Gold Teeth steel .png","Gold teeth.png","Green_Slime.png",
        "Lizard Teeth blaze blaze .png","Lizard Teeth blaze noir .png",
        "Lizard Teeth breeze.png","Lizard Teeth green gold.png",
        "Lizard Teeth green red.png","Lizard Teeth green yellow .png",
        "Lizard Teeth instant .png","Lizard Teeth instant blaze .png",
        "Lizard Teeth mocha .png","Lizard Teeth mocha breeze.png",
        "Lizard Teeth mocha orange .png","Lizard Teeth mocha yellow .png",
        "Lizard Teeth mystic pink .png","Lizard Teeth noir .png",
        "Lizard Teeth orange blaze .png","Lizard Teeth orange white .png",
        "Lizard Teeth red mocha .png","Lizard Teeth red yellow .png",
        "Lizard Teeth red.png","Lizard Teeth white .png","Lizard Teeth white blaze .png",
        "Lizard Teeth white gold.png","Lizard teeth .png","Purple_Crystal.png",
        "Red_Crystal_.png","Red_Slime.png","Robot Teeth blaze breeze.png",
        "Robot Teeth instant .png","Robot Teeth instant red.png",
        "Robot Teeth mocha breeze.png","Robot teeth png.png","Shark Teeth purple .png",
        "Sharp Teeth blaze .png","Sharp Teeth brown .png","Sharp Teeth green red.png",
        "Sharp Teeth instant .png","Sharp Teeth instant blaze .png",
        "Sharp Teeth mocha .png","Sharp Teeth mocha orange .png",
        "Sharp Teeth mystic mocha .png","Sharp Teeth neon .png","Sharp Teeth orange .png",
        "Sharp Teeth orange neon .png","Sharp Teeth red blaze .png","Sharp teeth.png"
    ],

    "Tongue":["none",
        "3d_art_tongue.png","Acid tongue blood.png","Acid tongue blue blood.png",
        "Acid tongue blue yellow .png","Acid tongue breeze.png",
        "Acid tongue gold blood.png","Acid tongue mocha .png","Acid tongue mystic .png",
        "Acid tongue noir neon.png","Acid tongue noir.png","Acid tongue orange green.png",
        "Acid tongue pink .png","Acid tongue purple teal.png",
        "Acid tongue teal mocha.png","Acid_tongue_blaze_green.png","Blue_Crystal.png",
        "Circuit tongue blue .png","Circuit tongue green .png",
        "Circuit tongue green yellow .png","Circuit tongue orange.png",
        "Circuit tongue pink black .png","Circuit tongue pink.png",
        "Circuit tongue red blue .png","Circuit tongue red.png",
        "Circuit tongue white .png","Circuit tongue yellow .png","Circuit tongue.png",
        "Fire tongue blaze.png","Fire tongue blue green .png","Fire tongue blueish.png",
        "Fire tongue breeze.png","Fire tongue gold.png","Fire tongue green.png",
        "Fire tongue mocha .png","Fire tongue neon.png","Fire tongue noir.png",
        "Fire tongue pink.png","Fire tongue teal.png","Fire.png","Gold tongue .png",
        "Gold tongue Venice.png","Gold tongue blaze .png","Gold tongue breeze.png",
        "Gold tongue green.png","Gold tongue mocha.png","Gold tongue mystic .png",
        "Gold tongue neon.png","Gold tongue noir.png","Gold tongue orange .png",
        "Gold tongue orange yellow .png","Gold tongue pink.png","Gold tongue teal.png",
        "Green_Crystal.png","Green_Lava.png","Lightning body gold.png",
        "Lightning tongue Venice.png","Lightning tongue blaze .png",
        "Lightning tongue blood.png","Lightning tongue breeze.png",
        "Lightning tongue instant.png","Lightning tongue mystic .png",
        "Lightning tongue neon.png","Lightning tongue noir.png",
        "Lightning tongue orange .png","Lightning tongue pink pink.png",
        "Lightning tongue pink.png","Lightning tongue.png","Orange_Lava.png",
        "Pink_Crystal.png","Purple_Crystal.png","Red_Lava.png","Robot Tongue blaze.png",
        "Robot Tongue blood.png","Robot Tongue blue .png","Robot Tongue blue red.png",
        "Robot Tongue gradient .png","Robot Tongue green .png",
        "Robot Tongue green white.png","Robot Tongue green yellow .png",
        "Robot Tongue mocha.png","Robot Tongue purple and yellow .png",
        "Robot Tongue red yellow .png","Robot Tongue red.png","Robot tongue png.png",
        "Scale tongue .png","Scale tongue blue.png","Scale tongue breeze.png",
        "Scale tongue dark blue .png","Scale tongue dark teal.png",
        "Scale tongue green .png","Scale tongue grey.png","Scale tongue mocha .png",
        "Scale tongue mystic .png","Scale tongue noir.png","Scale tongue pink.png",
        "Scale tongue red yellow .png","Scale tongue teal red .png",
        "Scale tongue yellow .png","Tongue acid.png"
    ],
}



layers.forEach(currLayer => {
    currLayer.addEventListener('click',function handleClick(event) {
        // console.log(this.id)
        layerLocation.empty()

        varLayersDict[this.id].forEach(currLayer => {
            // add layers dynamically
            var newButton = $('<button>')
            newButton.attr("id", this.id + '-' + currLayer)
            newButton.attr("type","button")
            newButton.attr('class','btn btn-secondary my-1')
            newButton.text(currLayer)
            // button was clicked
            newButton.on('click', function(e){
                // set state variable accordingly
                var id = this.id
                var parent = id.split("-")[0]
                // assign the layer to the statevariable
                stateVariables[parent] = this.id.split('-')[1]

                // console.log(stateVariables)
                var imgArray = []
                for (key in stateVariables)
                {
                    if (stateVariables[key] !== "none")
                    {
                        var imgEle = new Image();
                        imgEle.src = "./assets/images/dragon/" + key + "/" + stateVariables[key]
                        imgArray.push(imgEle)

                    }
                }

                var numLoaded = 0;
                for (var i = 0; i < imgArray.length; i++)
                {
                    // increase counter to ensure images are loaded, we need all images in arr to load
                    imgArray[i].onload = () => 
                    {
                        numLoaded++;
                        if (numLoaded === imgArray.length)
                        {
                            resEle.width = imgArray[0].width;
                            resEle.height = imgArray[0].height;
                            for (i = 0; i < imgArray.length; i++)
                            {
                                context.drawImage(imgArray[i],0,0)
                            }
                        }
                    }
                }
            })
            layerLocation.append(newButton)
        })
      });
});