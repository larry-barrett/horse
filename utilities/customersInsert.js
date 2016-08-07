db = new Mongo().getDB('horse');

// years
var years = [
	1942,
	1944,
	1945,
	1948,
	1949,
	1949,
	1950,
	1950,
	1951,
	1951,
	1953,
	1953,
	1955,
	1955,
	1956,
	1957,
	1959,
	1959,
	1959,
	1960,
	1960,
	1960,
	1960,
	1961,
	1961,
	1963,
	1963,
	1963,
	1964,
	1964,
	1964,
	1965,
	1966,
	1967,
	1967,
	1969,
	1969,
	1969,
	1970,
	1970,
	1970,
	1970,
	1970,
	1970,
	1971,
	1971,
	1971,
	1971,
	1971,
	1971,
	1972,
	1972,
	1972,
	1973,
	1973,
	1973,
	1973,
	1973,
	1973,
	1974,
	1974,
	1974,
	1975,
	1975,
	1975,
	1977,
	1977,
	1977,
	1977,
	1977,
	1978,
	1978,
	1978,
	1978,
	1978,
	1979,
	1979,
	1979,
	1979,
	1979,
	1980,
	1980,
	1980,
	1980,
	1982,
	1982,
	1982,
	1982,
	1982,
	1982,
	1983,
	1984,
	1985,
	1985,
	1985,
	1986,
	1986,
	1986,
	1986,
	1986,
	1987,
	1987,
	1988,
	1988,
	1988,
	1989,
	1989,
	1990,
	1990,
	1990,
	1990,
	1991,
	1991,
	1991,
	1991,
	1991,
	1992,
	1992,
	1992,
	1992,
	1992,
	1993,
	1993,
	1993,
	1993,
	1993,
	1993,
	1994,
	1994,
	1994,
	1995,
	1995,
	1995
]

// boys
var boys = [
'Jacob',
'Michael',
'Joshua',
'Matthew',
'Ethan',
'Andrew',
'Daniel',
'Anthony',
'Christopher',
'Joseph',
'William',
'Alexander',
'Ryan',
'David',
'Nicholas',
'Tyler',
'James',
'John',
'Jonathan',
'Nathan',
'Samuel',
'Christian',
'Noah',
'Dylan',
'Benjamin',
'Logan',
'Brandon',
'Gabriel',
'Zachary',
'Jose',
'Elijah',
'Angel',
'Kevin',
'Jack',
'Caleb',
'Justin',
'Austin',
'Evan',
'Robert',
'Thomas',
'Luke',
'Mason',
'Aidan',
'Jackson',
'Isaiah',
'Jordan',
'Gavin',
'Connor',
'Aiden',
'Isaac',
'Jason',
'Cameron',
'Hunter',
'Jayden',
'Juan',
'Charles',
'Aaron',
'Lucas',
'Luis',
'Owen',
'Landon',
'Diego',
'Brian',
'Adam',
'Adrian',
'Kyle',
'Eric',
'Ian',
'Nathaniel',
'Carlos',
'Alex',
'Bryan',
'Jesus',
'Julian',
'Sean',
'Carter',
'Hayden',
'Jeremiah',
'Cole',
'Brayden',
'Wyatt',
'Chase',
'Steven',
'Timothy',
'Dominic',
'Sebastian',
'Xavier',
'Jaden',
'Jesse',
'Devin',
'Seth',
'Antonio',
'Richard',
'Miguel',
'Colin',
'Cody',
'Alejandro',
'Caden',
'Blake',
'Carson',
'Kaden',
'Jake',
'Henry',
'Liam',
'Victor',
'Riley',
'Ashton',
'Patrick',
'Bryce',
'Brady',
'Vincent',
'Trevor',
'Tristan',
'Mark',
'Jeremy',
'Oscar',
'Marcus',
'Jorge',
'Parker',
'Kaleb',
'Cooper',
'Kenneth',
'Garrett',
'Joel',
'Ivan',
'Josiah',
'Alan',
'Conner',
'Eduardo',
'Paul',
'Tanner',
'Braden',
'Alexis',
'Edward',
'Omar',
'Nicolas',
'Jared',
'Peyton',
'George',
'Maxwell',
'Cristian',
'Francisco',
'Collin',
'Nolan',
'Preston',
'Stephen',
'Ayden',
'Gage',
'Levi',
'Dakota',
'Micah',
'Eli',
'Manuel',
'Grant',
'Colton',
'Damian',
'Ricardo',
'Giovanni',
'Andres',
'Emmanuel',
'Peter',
'Malachi',
'Cesar',
'Javier',
'Max',
'Hector',
'Edgar',
'Shane',
'Fernando',
'Ty',
'Jeffrey',
'Bradley',
'Derek',
'Travis',
'Brendan',
'Shawn',
'Edwin',
'Spencer',
'Mario',
'Dalton',
'Erick',
'Johnathan',
'Erik',
'Jonah',
'Donovan',
'Leonardo',
'Wesley',
'Elias',
'Marco',
'Trenton',
'Devon',
'Brody',
'Abraham',
'Jaylen',
'Bryson',
'Josue',
'Sergio',
'Drew',
'Damien',
'Raymond',
'Andy',
'Dillon',
'Gregory',
'Roberto',
'Roman',
'Martin',
'Andre',
'Jace',
'Oliver',
'Miles',
'Harrison',
'Jalen',
'Corey',
'Dominick',
'Avery',
'Clayton',
'Pedro',
'Israel',
'Calvin',
'Colby',
'Dawson',
'Cayden',
'Jaiden',
'Taylor',
'Landen',
'Troy',
'Julio',
'Trey',
'Jaxon',
'Rafael',
'Dustin',
'Ruben',
'Camden',
'Frank',
'Scott',
'Mitchell',
'Zane',
'Payton',
'Kai',
'Keegan',
'Skyler',
'Brett',
'Johnny',
'Griffin',
'Marcos',
'Derrick',
'Drake',
'Raul',
'Kaiden',
'Gerardo'
]

// girls
var girls = [
'Emily',
'Emma',
'Madison',
'Abigail',
'Olivia',
'Isabella',
'Hannah',
'Samantha',
'Ava',
'Ashley',
'Sophia',
'Elizabeth',
'Alexis',
'Grace',
'Sarah',
'Alyssa',
'Mia',
'Natalie',
'Chloe',
'Brianna',
'Lauren',
'Ella',
'Anna',
'Taylor',
'Kayla',
'Hailey',
'Jessica',
'Victoria',
'Jasmine',
'Sydney',
'Julia',
'Destiny',
'Morgan',
'Kaitlyn',
'Savannah',
'Katherine',
'Alexandra',
'Rachel',
'Lily',
'Megan',
'Kaylee',
'Jennifer',
'Angelina',
'Makayla',
'Allison',
'Brooke',
'Maria',
'Trinity',
'Lillian',
'Mackenzie',
'Faith',
'Sofia',
'Riley',
'Haley',
'Gabrielle',
'Nicole',
'Kylie',
'Katelyn',
'Zoe',
'Paige',
'Gabriella',
'Jenna',
'Kimberly',
'Stephanie',
'Alexa',
'Avery',
'Andrea',
'Leah',
'Madeline',
'Nevaeh',
'Evelyn',
'Maya',
'Mary',
'Michelle',
'Jada',
'Sara',
'Audrey',
'Brooklyn',
'Vanessa',
'Amanda',
'Ariana',
'Rebecca',
'Caroline',
'Amelia',
'Mariah',
'Jordan',
'Jocelyn',
'Arianna',
'Isabel',
'Marissa',
'Autumn',
'Melanie',
'Aaliyah',
'Gracie',
'Claire',
'Isabelle',
'Molly',
'Mya',
'Diana',
'Katie',
'Leslie',
'Amber',
'Danielle',
'Melissa',
'Sierra',
'Madelyn',
'Addison',
'Bailey',
'Catherine',
'Gianna',
'Amy',
'Erin',
'Jade',
'Angela',
'Gabriela',
'Jacqueline',
'Shelby',
'Kennedy',
'Lydia',
'Alondra',
'Adriana',
'Daniela',
'Natalia',
'Breanna',
'Kathryn',
'Briana',
'Ashlyn',
'Rylee',
'Eva',
'Kendall',
'Peyton',
'Ruby',
'Alexandria',
'Sophie',
'Charlotte',
'Reagan',
'Valeria',
'Christina',
'Summer',
'Kate',
'Mikayla',
'Naomi',
'Layla',
'Miranda',
'Laura',
'Ana',
'Angel',
'Alicia',
'Daisy',
'Ciara',
'Margaret',
'Aubrey',
'Zoey',
'Skylar',
'Genesis',
'Payton',
'Courtney',
'Kylee',
'Kiara',
'Alexia',
'Jillian',
'Lindsey',
'Mckenzie',
'Karen',
'Giselle',
'Mariana',
'Valerie',
'Sabrina',
'Alana',
'Serenity',
'Kelsey',
'Cheyenne',
'Juliana',
'Lucy',
'Kelly',
'Sadie',
'Bianca',
'Kyra',
'Nadia',
'Lilly',
'Caitlyn',
'Jasmin',
'Ellie',
'Hope',
'Cassandra',
'Jazmin',
'Crystal',
'Jordyn',
'Cassidy',
'Delaney',
'Liliana',
'Angelica',
'Caitlin',
'Kyla',
'Jayla',
'Adrianna',
'Tiffany',
'Abby',
'Carly',
'Chelsea',
'Camila',
'Erica',
'Makenzie',
'Karla',
'Cadence',
'Paris',
'Veronica',
'Mckenna',
'Brenda',
'Bella',
'Maggie',
'Karina',
'Esmeralda',
'Erika',
'Makenna',
'Julianna',
'Elena',
'Mallory',
'Jamie',
'Alejandra',
'Cynthia',
'Ariel',
'Vivian',
'Jayden',
'Amaya',
'Dakota',
'Elise',
'Haylee',
'Josephine',
'Aniyah',
'Bethany',
'Keira',
'Aliyah',
'Laila',
'Camryn',
'Fatima',
'Reese',
'Annabelle',
'Monica',
'Lindsay',
'Kira',
'Selena',
'Macy',
'Hanna',
'Heaven',
'Clara',
'Katrina',
'Jazmine',
'Jadyn',
'Stella'
]

// last
var lasts = [
'SMITH',
'JOHNSON',
'WILLIAMS',
'BROWN',
'JONES',
'MILLER',
'DAVIS',
'GARCIA',
'RODRIGUEZ',
'WILSON',
'MARTINEZ',
'ANDERSON',
'TAYLOR',
'THOMAS',
'HERNANDEZ',
'MOORE',
'MARTIN',
'JACKSON',
'THOMPSON',
'WHITE',
'LOPEZ',
'LEE',
'GONZALEZ',
'HARRIS',
'CLARK',
'LEWIS',
'ROBINSON',
'WALKER',
'PEREZ',
'HALL',
'YOUNG',
'ALLEN',
'SANCHEZ',
'WRIGHT',
'KING',
'SCOTT',
'GREEN',
'BAKER',
'ADAMS',
'NELSON',
'HILL',
'RAMIREZ',
'CAMPBELL',
'MITCHELL',
'ROBERTS',
'CARTER',
'PHILLIPS',
'EVANS',
'TURNER',
'TORRES',
'PARKER',
'COLLINS',
'EDWARDS',
'STEWART',
'FLORES',
'MORRIS',
'NGUYEN',
'MURPHY',
'RIVERA',
'COOK',
'ROGERS',
'MORGAN',
'PETERSON',
'COOPER',
'REED',
'BAILEY',
'BELL',
'GOMEZ',
'KELLY',
'HOWARD',
'WARD',
'COX',
'DIAZ',
'RICHARDSON',
'WOOD',
'WATSON',
'BROOKS',
'BENNETT',
'GRAY',
'JAMES',
'REYES',
'CRUZ',
'HUGHES',
'PRICE',
'MYERS',
'LONG',
'FOSTER',
'SANDERS',
'ROSS',
'MORALES',
'POWELL',
'SULLIVAN',
'RUSSELL',
'ORTIZ',
'JENKINS',
'GUTIERREZ',
'PERRY',
'BUTLER',
'BARNES',
'FISHER',
'HENDERSON',
'COLEMAN',
'SIMMONS',
'PATTERSON',
'JORDAN',
'REYNOLDS',
'HAMILTON',
'GRAHAM',
'KIM',
'GONZALES',
'ALEXANDER',
'RAMOS',
'WALLACE',
'GRIFFIN',
'WEST',
'COLE',
'HAYES',
'CHAVEZ',
'GIBSON',
'BRYANT',
'ELLIS',
'STEVENS',
'MURRAY',
'FORD',
'MARSHALL',
'OWENS',
'MCDONALD',
'HARRISON',
'RUIZ',
'KENNEDY',
'WELLS',
'ALVAREZ',
'WOODS',
'MENDOZA',
'CASTILLO',
'OLSON',
'WEBB',
'WASHINGTON',
'TUCKER',
'FREEMAN',
'BURNS',
'HENRY',
'VASQUEZ',
'SNYDER',
'SIMPSON',
'CRAWFORD',
'JIMENEZ',
'PORTER',
'MASON',
'SHAW',
'GORDON',
'WAGNER',
'HUNTER',
'ROMERO',
'HICKS',
'DIXON',
'HUNT',
'PALMER',
'ROBERTSON',
'BLACK',
'HOLMES',
'STONE',
'MEYER',
'BOYD',
'MILLS',
'WARREN',
'FOX',
'ROSE',
'RICE',
'MORENO',
'SCHMIDT',
'PATEL',
'FERGUSON',
'NICHOLS',
'HERRERA',
'MEDINA',
'RYAN',
'FERNANDEZ',
'WEAVER',
'DANIELS',
'STEPHENS',
'GARDNER',
'PAYNE',
'KELLEY',
'DUNN',
'PIERCE',
'ARNOLD',
'TRAN',
'SPENCER',
'PETERS',
'HAWKINS',
'GRANT',
'HANSEN',
'CASTRO',
'HOFFMAN',
'HART',
'ELLIOTT',
'CUNNINGHAM',
'KNIGHT',
'BRADLEY',
'CARROLL',
'HUDSON',
'DUNCAN',
'ARMSTRONG',
'BERRY',
'ANDREWS',
'JOHNSTON',
'RAY',
'LANE',
'RILEY',
'CARPENTER',
'PERKINS',
'AGUILAR',
'SILVA',
'RICHARDS',
'WILLIS',
'MATTHEWS',
'CHAPMAN',
'LAWRENCE',
'GARZA',
'VARGAS',
'WATKINS',
'WHEELER',
'LARSON',
'CARLSON',
'HARPER',
'GEORGE',
'GREENE',
'BURKE',
'GUZMAN',
'MORRISON',
'MUNOZ',
'JACOBS',
'OBRIEN',
'LAWSON',
'FRANKLIN',
'LYNCH',
'BISHOP',
'CARR',
'SALAZAR',
'AUSTIN',
'MENDEZ',
'GILBERT',
'JENSEN',
'WILLIAMSON',
'MONTGOMERY',
'HARVEY',
'OLIVER',
'HOWELL',
'DEAN',
'HANSON',
'WEBER',
'GARRETT',
'SIMS',
'BURTON',
'FULLER',
'SOTO',
'MCCOY',
'WELCH',
'CHEN',
'SCHULTZ',
'WALTERS',
'REID',
'FIELDS',
'WALSH',
'LITTLE',
'FOWLER',
'BOWMAN',
'DAVIDSON',
'MAY',
'DAY',
'SCHNEIDER',
'NEWMAN',
'BREWER',
'LUCAS',
'HOLLAND',
'WONG',
'BANKS',
'SANTOS',
'CURTIS',
'PEARSON',
'DELGADO',
'VALDEZ',
'PENA',
'RIOS',
'DOUGLAS',
'SANDOVAL',
'BARRETT',
'HOPKINS',
'KELLER',
'GUERRERO',
'STANLEY',
'BATES',
'ALVARADO',
'BECK',
'ORTEGA',
'WADE',
'ESTRADA',
'CONTRERAS',
'BARNETT',
'CALDWELL',
'SANTIAGO',
'LAMBERT',
'POWERS',
'CHAMBERS',
'NUNEZ',
'CRAIG',
'LEONARD',
'LOWE',
'RHODES',
'BYRD',
'GREGORY',
'SHELTON',
'FRAZIER',
'BECKER',
'MALDONADO',
'FLEMING',
'VEGA',
'SUTTON',
'COHEN',
'JENNINGS',
'PARKS',
'MCDANIEL',
'WATTS',
'BARKER',
'NORRIS',
'VAUGHN',
'VAZQUEZ',
'HOLT',
'SCHWARTZ',
'STEELE',
'BENSON',
'NEAL',
'DOMINGUEZ',
'HORTON',
'TERRY',
'WOLFE',
'HALE',
'LYONS',
'GRAVES',
'HAYNES',
'MILES',
'PARK',
'WARNER',
'PADILLA',
'BUSH',
'THORNTON',
'MCCARTHY',
'MANN',
'ZIMMERMAN',
'ERICKSON',
'FLETCHER',
'MCKINNEY',
'PAGE',
'DAWSON',
'JOSEPH',
'MARQUEZ',
'REEVES',
'KLEIN',
'ESPINOZA',
'BALDWIN',
'MORAN',
'LOVE',
'ROBBINS',
'HIGGINS',
'BALL',
'CORTEZ',
'LE',
'GRIFFITH',
'BOWEN',
'SHARP',
'CUMMINGS',
'RAMSEY',
'HARDY',
'SWANSON',
'BARBER',
'ACOSTA',
'LUNA',
'CHANDLER',
'DANIEL',
'BLAIR',
'CROSS',
'SIMON',
'DENNIS',
'OCONNOR',
'QUINN',
'GROSS',
'NAVARRO',
'MOSS',
'FITZGERALD',
'DOYLE',
'MCLAUGHLIN',
'ROJAS',
'RODGERS',
'STEVENSON',
'SINGH',
'YANG',
'FIGUEROA',
'HARMON',
'NEWTON',
'PAUL',
'MANNING',
'GARNER',
'MCGEE',
'REESE',
'FRANCIS',
'BURGESS',
'ADKINS',
'GOODMAN',
'CURRY',
'BRADY',
'CHRISTENSEN',
'POTTER',
'WALTON',
'GOODWIN',
'MULLINS',
'MOLINA',
'WEBSTER',
'FISCHER',
'CAMPOS',
'AVILA',
'SHERMAN',
'TODD',
'CHANG',
'BLAKE',
'MALONE',
'WOLF',
'HODGES',
'JUAREZ',
'GILL',
'FARMER',
'HINES',
'GALLAGHER',
'DURAN',
'HUBBARD',
'CANNON',
'MIRANDA',
'WANG',
'SAUNDERS',
'TATE',
'MACK',
'HAMMOND',
'CARRILLO',
'TOWNSEND',
'WISE',
'INGRAM',
'BARTON',
'MEJIA',
'AYALA',
'SCHROEDER',
'HAMPTON',
'ROWE',
'PARSONS',
'FRANK',
'WATERS',
'STRICKLAND',
'OSBORNE',
'MAXWELL',
'CHAN',
'DELEON',
'NORMAN',
'HARRINGTON',
'CASEY',
'PATTON',
'LOGAN',
'BOWERS',
'MUELLER',
'GLOVER',
'FLOYD',
'HARTMAN',
'BUCHANAN',
'COBB',
'FRENCH',
'KRAMER',
'MCCORMICK',
'CLARKE',
'TYLER',
'GIBBS',
'MOODY',
'CONNER',
'SPARKS',
'MCGUIRE',
'LEON',
'BAUER',
'NORTON',
'POPE',
'FLYNN',
'HOGAN',
'ROBLES',
'SALINAS',
'YATES',
'LINDSEY',
'LLOYD',
'MARSH',
'MCBRIDE',
'OWEN',
'SOLIS',
'PHAM',
'LANG',
'PRATT',
'LARA',
'BROCK',
'BALLARD',
'TRUJILLO',
'SHAFFER',
'DRAKE',
'ROMAN',
'AGUIRRE',
'MORTON',
'STOKES',
'LAMB',
'PACHECO',
'PATRICK',
'COCHRAN',
'SHEPHERD',
'CAIN',
'BURNETT',
'HESS',
'LI',
'CERVANTES',
'OLSEN',
'BRIGGS',
'OCHOA',
'CABRERA',
'VELASQUEZ',
'MONTOYA',
'ROTH',
'MEYERS',
'CARDENAS',
'FUENTES',
'WEISS',
'WILKINS',
'HOOVER',
'NICHOLSON',
'UNDERWOOD',
'SHORT',
'CARSON',
'MORROW',
'COLON',
'HOLLOWAY',
'SUMMERS',
'BRYAN',
'PETERSEN',
'MCKENZIE',
'SERRANO',
'WILCOX',
'CAREY',
'CLAYTON',
'POOLE',
'CALDERON',
'GALLEGOS',
'GREER',
'RIVAS',
'GUERRA',
'DECKER',
'COLLIER',
'WALL',
'WHITAKER',
'BASS',
'FLOWERS',
'DAVENPORT',
'CONLEY',
'HOUSTON',
'HUFF',
'COPELAND',
'HOOD',
'MONROE',
'MASSEY',
'ROBERSON',
'COMBS',
'FRANCO',
'LARSEN',
'PITTMAN',
'RANDALL',
'SKINNER',
'WILKINSON',
'KIRBY',
'CAMERON',
'BRIDGES',
'ANTHONY',
'RICHARD',
'KIRK',
'BRUCE',
'SINGLETON',
'MATHIS',
'BRADFORD',
'BOONE',
'ABBOTT',
'CHARLES',
'ALLISON',
'SWEENEY',
'ATKINSON',
'HORN',
'JEFFERSON',
'ROSALES',
'YORK',
'CHRISTIAN',
'PHELPS',
'FARRELL',
'CASTANEDA',
'NASH',
'DICKERSON',
'BOND',
'WYATT',
'FOLEY',
'CHASE',
'GATES',
'VINCENT',
'MATHEWS',
'HODGE',
'GARRISON',
'TREVINO',
'VILLARREAL',
'HEATH',
'DALTON',
'VALENCIA',
'CALLAHAN',
'HENSLEY',
'ATKINS',
'HUFFMAN',
'ROY',
'BOYER',
'SHIELDS',
'LIN',
'HANCOCK',
'GRIMES',
'GLENN',
'CLINE',
'DELACRUZ',
'CAMACHO',
'DILLON',
'PARRISH',
'ONEILL',
'MELTON',
'BOOTH',
'KANE',
'BERG',
'HARRELL',
'PITTS',
'SAVAGE',
'WIGGINS',
'BRENNAN',
'SALAS',
'MARKS',
'RUSSO',
'SAWYER',
'BAXTER',
'GOLDEN',
'HUTCHINSON',
'LIU',
'WALTER',
'MCDOWELL',
'WILEY',
'RICH',
'HUMPHREY',
'JOHNS',
'KOCH',
'SUAREZ',
'HOBBS',
'BEARD',
'GILMORE',
'IBARRA',
'KEITH',
'MACIAS',
'KHAN',
'ANDRADE',
'WARE',
'STEPHENSON',
'HENSON',
'WILKERSON',
'DYER',
'MCCLURE',
'BLACKWELL',
'MERCADO',
'TANNER',
'EATON',
'CLAY',
'BARRON',
'BEASLEY',
'ONEAL',
'SMALL',
'PRESTON',
'WU',
'ZAMORA',
'MACDONALD',
'VANCE',
'SNOW',
'MCCLAIN',
'STAFFORD',
'OROZCO',
'BARRY',
'ENGLISH',
'SHANNON',
'KLINE',
'JACOBSON',
'WOODARD',
'HUANG',
'KEMP',
'MOSLEY',
'PRINCE',
'MERRITT',
'HURST',
'VILLANUEVA',
'ROACH',
'NOLAN',
'LAM',
'YODER',
'MCCULLOUGH',
'LESTER',
'SANTANA',
'VALENZUELA',
'WINTERS',
'BARRERA',
'ORR',
'LEACH',
'BERGER',
'MCKEE',
'STRONG',
'CONWAY',
'STEIN',
'WHITEHEAD',
'BULLOCK',
'ESCOBAR',
'KNOX',
'MEADOWS',
'SOLOMON',
'VELEZ',
'ODONNELL',
'KERR',
'STOUT',
'BLANKENSHIP',
'BROWNING',
'KENT',
'LOZANO',
'BARTLETT',
'PRUITT',
'BUCK',
'BARR',
'GAINES',
'DURHAM',
'GENTRY',
'MCINTYRE',
'SLOAN',
'ROCHA',
'MELENDEZ',
'HERMAN',
'SEXTON',
'MOON',
'HENDRICKS',
'RANGEL',
'STARK',
'LOWERY',
'HARDIN',
'HULL',
'SELLERS',
'ELLISON',
'CALHOUN',
'GILLESPIE',
'MORA',
'KNAPP',
'MCCALL',
'MORSE',
'DORSEY',
'WEEKS',
'NIELSEN',
'LIVINGSTON',
'LEBLANC',
'MCLEAN',
'BRADSHAW',
'GLASS',
'MIDDLETON',
'BUCKLEY',
'SCHAEFER',
'FROST',
'HOWE',
'HOUSE',
'MCINTOSH',
'HO',
'PENNINGTON',
'REILLY',
'HEBERT',
'MCFARLAND',
'HICKMAN',
'NOBLE',
'SPEARS',
'CONRAD',
'ARIAS',
'GALVAN',
'VELAZQUEZ',
'HUYNH',
'FREDERICK',
'RANDOLPH',
'CANTU',
'FITZPATRICK',
'MAHONEY',
'PECK',
'VILLA',
'MICHAEL',
'DONOVAN',
'MCCONNELL',
'WALLS',
'BOYLE',
'MAYER',
'ZUNIGA',
'GILES',
'PINEDA',
'PACE',
'HURLEY',
'MAYS',
'MCMILLAN',
'CROSBY',
'AYERS',
'CASE',
'BENTLEY',
'SHEPARD',
'EVERETT',
'PUGH',
'DAVID',
'MCMAHON',
'DUNLAP',
'BENDER',
'HAHN',
'HARDING',
'ACEVEDO',
'RAYMOND',
'BLACKBURN',
'DUFFY',
'LANDRY',
'DOUGHERTY',
'BAUTISTA',
'SHAH',
'POTTS',
'ARROYO',
'VALENTINE',
'MEZA',
'GOULD',
'VAUGHAN',
'FRY',
'RUSH',
'AVERY',
'HERRING',
'DODSON',
'CLEMENTS',
'SAMPSON',
'TAPIA',
'BEAN',
'LYNN',
'CRANE',
'FARLEY',
'CISNEROS',
'BENTON',
'ASHLEY',
'MCKAY',
'FINLEY',
'BEST',
'BLEVINS',
'FRIEDMAN',
'MOSES',
'SOSA',
'BLANCHARD',
'HUBER',
'FRYE',
'KRUEGER',
'BERNARD',
'ROSARIO',
'RUBIO',
'MULLEN',
'BENJAMIN',
'HALEY',
'CHUNG',
'MOYER',
'CHOI',
'HORNE',
'YU',
'WOODWARD',
'ALI',
'NIXON',
'HAYDEN',
'RIVERS',
'ESTES',
'MCCARTY',
'RICHMOND',
'STUART',
'MAYNARD',
'BRANDT',
'OCONNELL',
'HANNA',
'SANFORD',
'SHEPPARD',
'CHURCH',
'BURCH',
'LEVY',
'RASMUSSEN',
'COFFEY',
'PONCE',
'FAULKNER',
'DONALDSON',
'SCHMITT',
'NOVAK',
'COSTA',
'MONTES',
'BOOKER',
'CORDOVA',
'WALLER',
'ARELLANO',
'MADDOX',
'MATA',
'BONILLA',
'STANTON',
'COMPTON',
'KAUFMAN',
'DUDLEY',
'MCPHERSON',
'BELTRAN',
'DICKSON',
'MCCANN',
'VILLEGAS',
'PROCTOR',
'HESTER',
'CANTRELL',
'DAUGHERTY',
'CHERRY',
'BRAY',
'DAVILA',
'ROWLAND',
'MADDEN',
'LEVINE',
'SPENCE',
'GOOD',
'IRWIN',
'WERNER',
'KRAUSE',
'PETTY',
'WHITNEY',
'BAIRD',
'HOOPER',
'POLLARD',
'ZAVALA',
'JARVIS',
'HOLDEN',
'HENDRIX',
'HAAS',
'MCGRATH',
'BIRD',
'LUCERO',
'TERRELL',
'RIGGS',
'JOYCE',
'ROLLINS',
'MERCER',
'GALLOWAY',
'DUKE',
'ODOM',
'ANDERSEN',
'DOWNS',
'HATFIELD',
'BENITEZ',
'ARCHER',
'HUERTA',
'TRAVIS',
'MCNEIL',
'HINTON',
'ZHANG',
'HAYS',
'MAYO',
'FRITZ',
'BRANCH',
'MOONEY',
'EWING',
'RITTER',
'ESPARZA',
'FREY',
'BRAUN',
'GAY',
'RIDDLE',
'HANEY',
'KAISER',
'HOLDER',
'CHANEY',
'MCKNIGHT',
'GAMBLE',
'VANG',
'COOLEY',
'CARNEY',
'COWAN',
'FORBES',
'FERRELL',
'DAVIES',
'BARAJAS',
'SHEA',
'OSBORN',
'BRIGHT',
'CUEVAS',
'BOLTON',
'MURILLO',
'LUTZ',
'DUARTE',
'KIDD',
'KEY',
'COOKE'
];

// cities
var cities = [
'New York',
'Los Angeles',
'Chicago',
'Houston',
'Philadelphia',
'Phoenix',
'San Antonio',
'San Diego',
'Dallas',
'San Jose',
'Austin',
'Indianapolis',
'Jacksonville',
'San Francisco',
'Columbus',
'Charlotte',
'Fort Worth',
'Detroit',
'El Paso',
'Memphis',
'Seattle',
'Denver',
'Washington',
'Boston',
'Nashville-Davidson',
'Baltimore',
'Oklahoma City',
'Louisville/Jefferson County',
'Portland',
'Las Vegas',
'Milwaukee',
'Albuquerque',
'Tucson',
'Fresno',
'Sacramento',
'Long Beach',
'Kansas City',
'Mesa',
'Virginia Beach',
'Atlanta',
'Colorado Springs',
'Omaha',
'Raleigh',
'Miami',
'Oakland',
'Minneapolis',
'Tulsa',
'Cleveland',
'Wichita',
'Arlington',
'New Orleans',
'Bakersfield',
'Tampa',
'Honolulu',
'Aurora',
'Anaheim',
'Santa Ana',
'St. Louis',
'Riverside',
'Corpus Christi',
'Lexington-Fayette',
'Pittsburgh',
'Anchorage',
'Stockton',
'Cincinnati',
'St. Paul',
'Toledo',
'Greensboro',
'Newark',
'Plano',
'Henderson',
'Lincoln',
'Buffalo',
'Jersey City',
'Chula Vista',
'Fort Wayne',
'Orlando',
'St. Petersburg',
'Chandler',
'Laredo',
'Norfolk',
'Durham',
'Madison',
'Lubbock',
'Irvine',
'Winston-Salem',
'Glendale',
'Garland',
'Hialeah',
'Reno',
'Chesapeake',
'Gilbert',
'Baton Rouge',
'Irving',
'Scottsdale',
'North Las Vegas',
'Fremont',
'Boise City',
'Richmond',
'San Bernardino',
'Birmingham',
'Spokane',
'Rochester',
'Des Moines',
'Modesto',
'Fayetteville',
'Tacoma',
'Oxnard',
'Fontana',
'Columbus',
'Montgomery',
'Moreno Valley',
'Shreveport',
'Aurora',
'Yonkers',
'Akron',
'Huntington Beach',
'Little Rock',
'Augusta-Richmond County',
'Amarillo',
'Glendale',
'Mobile',
'Grand Rapids',
'Salt Lake City',
'Tallahassee',
'Huntsville',
'Grand Prairie',
'Knoxville',
'Worcester',
'Newport News',
'Brownsville',
'Overland Park',
'Santa Clarita',
'Providence',
'Garden Grove',
'Chattanooga',
'Oceanside',
'Jackson',
'Fort Lauderdale',
'Santa Rosa',
'Rancho Cucamonga',
'Port St. Lucie',
'Tempe',
'Ontario',
'Vancouver',
'Cape Coral',
'Sioux Falls',
'Springfield',
'Peoria',
'Pembroke Pines',
'Elk Grove',
'Salem',
'Lancaster',
'Corona',
'Eugene',
'Palmdale',
'Salinas',
'Springfield',
'Pasadena',
'Fort Collins',
'Hayward',
'Pomona',
'Cary',
'Rockford',
'Alexandria',
'Escondido',
'McKinney',
'Kansas City',
'Joliet',
'Sunnyvale',
'Torrance',
'Bridgeport',
'Lakewood',
'Hollywood',
'Paterson',
'Naperville',
'Syracuse',
'Mesquite',
'Dayton',
'Savannah',
'Clarksville',
'Orange',
'Pasadena',
'Fullerton',
'Killeen',
'Frisco',
'Hampton',
'McAllen',
'Warren',
'Bellevue',
'West Valley City',
'Columbia',
'Olathe',
'Sterling Heights',
'New Haven',
'Miramar',
'Waco',
'Thousand Oaks',
'Cedar Rapids',
'Charleston',
'Visalia',
'Topeka',
'Elizabeth',
'Gainesville',
'Thornton',
'Roseville',
'Carrollton',
'Coral Springs',
'Stamford',
'Simi Valley',
'Concord',
'Hartford',
'Kent',
'Lafayette',
'Midland',
'Surprise',
'Denton',
'Victorville',
'Evansville',
'Santa Clara',
'Abilene',
'Athens-Clarke County',
'Vallejo',
'Allentown',
'Norman',
'Beaumont',
'Independence',
'Murfreesboro',
'Ann Arbor',
'Springfield',
'Berkeley',
'Peoria',
'Provo',
'El Monte',
'Columbia',
'Lansing',
'Fargo',
'Downey',
'Costa Mesa',
'Wilmington',
'Arvada',
'Inglewood',
'Miami Gardens',
'Carlsbad',
'Westminster',
'Rochester',
'Odessa',
'Manchester',
'Elgin',
'West Jordan',
'Round Rock',
'Clearwater',
'Waterbury',
'Gresham',
'Fairfield',
'Billings',
'Lowell',
'San Buenaventura (Ventura)',
'Pueblo',
'High Point',
'West Covina',
'Richmond',
'Murrieta',
'Cambridge',
'Antioch',
'Temecula',
'Norwalk',
'Centennial',
'Everett',
'Palm Bay',
'Wichita Falls',
'Green Bay',
'Daly City',
'Burbank',
'Richardson',
'Pompano Beach',
'North Charleston',
'Broken Arrow',
'Boulder',
'West Palm Beach',
'Santa Maria',
'El Cajon',
'Davenport',
'Rialto',
'Las Cruces',
'San Mateo',
'Lewisville',
'South Bend',
'Lakeland',
'Erie',
'Tyler',
'Pearland',
'College Station',
'Kenosha',
'Sandy Springs',
'Clovis',
'Flint',
'Roanoke',
'Albany',
'Jurupa Valley',
'Compton',
'San Angelo',
'Hillsboro',
'Lawton',
'Renton',
'Vista',
'Davie',
'Greeley',
'Mission Viejo',
'Portsmouth',
'Dearborn',
'South Gate',
'Tuscaloosa',
'Livonia',
'New Bedford',
'Vacaville',
'Brockton',
'Roswell',
'Beaverton',
'Quincy',
'Sparks',
'Yakima',
'Lee\'s Summit',
'Federal Way',
'Carson',
'Santa Monica',
'Hesperia',
'Allen',
'Rio Rancho',
'Yuma',
'Westminster',
'Orem',
'Lynn',
'Redding',
'Spokane Valley',
'Miami Beach',
'League City',
'Lawrence',
'Santa Barbara',
'Plantation',
'Sandy',
'Sunrise',
'Macon',
'Longmont',
'Boca Raton',
'San Marcos',
'Greenville',
'Waukegan',
'Fall River',
'Chico',
'Newton',
'San Leandro',
'Reading',
'Norwalk',
'Fort Smith',
'Newport Beach',
'Asheville',
'Nashua',
'Edmond',
'Whittier',
'Nampa',
'Bloomington',
'Deltona',
'Hawthorne',
'Duluth',
'Carmel',
'Suffolk',
'Clifton',
'Citrus Heights',
'Livermore',
'Tracy',
'Alhambra',
'Kirkland',
'Trenton',
'Ogden',
'Hoover',
'Cicero',
'Fishers',
'Sugar Land',
'Danbury',
'Meridian',
'Indio',
'Concord',
'Menifee',
'Champaign',
'Buena Park',
'Troy',
'O\'Fallon',
'Johns Creek',
'Bellingham',
'Westland',
'Bloomington',
'Sioux City',
'Warwick',
'Hemet',
'Longview',
'Farmington Hills',
'Bend',
'Lakewood',
'Merced',
'Mission',
'Chino',
'Redwood City',
'Edinburg',
'Cranston',
'Parma',
'New Rochelle',
'Lake Forest',
'Napa',
'Hammond',
'Fayetteville',
'Bloomington',
'Avondale',
'Somerville',
'Palm Coast',
'Bryan',
'Gary',
'Largo',
'Brooklyn Park',
'Tustin',
'Racine',
'Deerfield Beach',
'Lynchburg',
'Mountain View',
'Medford',
'Lawrence',
'Bellflower',
'Melbourne',
'St. Joseph',
'Camden',
'St. George',
'Kennewick',
'Baldwin Park',
'Chino Hills',
'Alameda',
'Albany',
'Arlington Heights',
'Scranton',
'Evanston',
'Kalamazoo',
'Baytown',
'Upland',
'Springdale',
'Bethlehem',
'Schaumburg',
'Mount Pleasant',
'Auburn',
'Decatur',
'San Ramon',
'Pleasanton',
'Wyoming',
'Lake Charles',
'Plymouth',
'Bolingbrook',
'Pharr',
'Appleton',
'Gastonia',
'Folsom',
'Southfield',
'Rochester Hills',
'New Britain',
'Goodyear',
'Canton',
'Warner Robins',
'Union City',
'Perris',
'Manteca',
'Iowa City',
'Jonesboro',
'Wilmington',
'Lynwood',
'Loveland',
'Pawtucket',
'Boynton Beach',
'Waukesha',
'Gulfport',
'Apple Valley',
'Passaic',
'Rapid City',
'Layton',
'Lafayette',
'Turlock',
'Muncie',
'Temple',
'Missouri City',
'Redlands',
'Santa Fe',
'Lauderhill',
'Milpitas',
'Palatine',
'Missoula',
'Rock Hill',
'Jacksonville',
'Franklin',
'Flagstaff',
'Flower Mound',
'Weston',
'Waterloo',
'Union City',
'Mount Vernon',
'Fort Myers',
'Dothan',
'Rancho Cordova',
'Redondo Beach',
'Jackson',
'Pasco',
'St. Charles',
'Eau Claire',
'North Richland Hills',
'Bismarck',
'Yorba Linda',
'Kenner',
'Walnut Creek',
'Frederick',
'Oshkosh',
'Pittsburg',
'Palo Alto',
'Bossier City',
'Portland',
'St. Cloud',
'Davis',
'South San Francisco',
'Camarillo',
'North Little Rock',
'Schenectady',
'Gaithersburg',
'Harlingen',
'Woodbury',
'Eagan',
'Yuba City',
'Maple Grove',
'Youngstown',
'Skokie',
'Kissimmee',
'Johnson City',
'Victoria',
'San Clemente',
'Bayonne',
'Laguna Niguel',
'East Orange',
'Shawnee',
'Homestead',
'Rockville',
'Delray Beach',
'Janesville',
'Conway',
'Pico Rivera',
'Lorain',
'Montebello',
'Lodi',
'New Braunfels',
'Marysville',
'Tamarac',
'Madera',
'Conroe',
'Santa Cruz',
'Eden Prairie',
'Cheyenne',
'Daytona Beach',
'Alpharetta',
'Hamilton',
'Waltham',
'Coon Rapids',
'Haverhill',
'Council Bluffs',
'Taylor',
'Utica',
'Ames',
'La Habra',
'Encinitas',
'Bowling Green',
'Burnsville',
'Greenville',
'West Des Moines',
'Cedar Park',
'Tulare',
'Monterey Park',
'Vineland',
'Terre Haute',
'North Miami',
'Mansfield',
'West Allis',
'Bristol',
'Taylorsville',
'Malden',
'Meriden',
'Blaine',
'Wellington',
'Cupertino',
'Springfield',
'Rogers',
'St. Clair Shores',
'Gardena',
'Pontiac',
'National City',
'Grand Junction',
'Rocklin',
'Chapel Hill',
'Casper',
'Broomfield',
'Petaluma',
'South Jordan',
'Springfield',
'Great Falls',
'Lancaster',
'North Port',
'Lakewood',
'Marietta',
'San Rafael',
'Royal Oak',
'Des Plaines',
'Huntington Park',
'La Mesa',
'Orland Park',
'Auburn',
'Lakeville',
'Owensboro',
'Moore',
'Jupiter',
'Idaho Falls',
'Dubuque',
'Bartlett',
'Rowlett',
'Novi',
'White Plains',
'Arcadia',
'Redmond',
'Lake Elsinore',
'Ocala',
'Tinley Park',
'Port Orange',
'Medford',
'Oak Lawn',
'Rocky Mount',
'Kokomo',
'Coconut Creek',
'Bowie',
'Berwyn',
'Midwest City',
'Fountain Valley',
'Buckeye',
'Dearborn Heights',
'Woodland',
'Noblesville',
'Valdosta',
'Diamond Bar',
'Manhattan',
'Santee',
'Taunton',
'Sanford',
'Kettering',
'New Brunswick',
'Decatur',
'Chicopee',
'Anderson',
'Margate',
'Weymouth Town',
'Hempstead',
'Corvallis',
'Eastvale',
'Porterville',
'West Haven',
'Brentwood',
'Paramount',
'Grand Forks',
'Georgetown',
'St. Peters',
'Shoreline',
'Mount Prospect',
'Hanford',
'Normal',
'Rosemead',
'Lehi',
'Pocatello',
'Highland',
'Novato',
'Port Arthur',
'Carson City',
'San Marcos',
'Hendersonville',
'Elyria',
'Revere',
'Pflugerville',
'Greenwood',
'Bellevue',
'Wheaton',
'Smyrna',
'Sarasota',
'Blue Springs',
'Colton',
'Euless',
'Castle Rock',
'Cathedral City',
'Kingsport',
'Lake Havasu City',
'Pensacola',
'Hoboken',
'Yucaipa',
'Watsonville',
'Richland',
'Delano',
'Hoffman Estates',
'Florissant',
'Placentia',
'West New York',
'Dublin',
'Oak Park',
'Peabody',
'Perth Amboy',
'Battle Creek',
'Bradenton',
'Gilroy',
'Milford',
'Albany',
'Ankeny',
'La Crosse',
'Burlington',
'DeSoto',
'Harrisonburg',
'Minnetonka',
'Elkhart',
'Lakewood',
'Glendora',
'Southaven',
'Charleston',
'Joplin',
'Enid',
'Palm Beach Gardens',
'Brookhaven',
'Plainfield',
'Grand Island',
'Palm Desert',
'Huntersville',
'Tigard',
'Lenexa',
'Saginaw',
'Kentwood',
'Doral',
'Apple Valley',
'Grapevine',
'Aliso Viejo',
'Sammamish',
'Casa Grande',
'Pinellas Park',
'Troy',
'West Sacramento',
'Burien',
'Commerce City',
'Monroe',
'Cerritos',
'Downers Grove',
'Coral Gables',
'Wilson',
'Niagara Falls',
'Poway',
'Edina',
'Cuyahoga Falls',
'Rancho Santa Margarita',
'Harrisburg',
'Huntington',
'La Mirada',
'Cypress',
'Caldwell',
'Logan',
'Galveston',
'Sheboygan',
'Middletown',
'Murray',
'Roswell',
'Parker',
'Bedford',
'East Lansing',
'Methuen',
'Covina',
'Alexandria',
'Olympia',
'Euclid',
'Mishawaka',
'Salina',
'Azusa',
'Newark',
'Chesterfield',
'Leesburg',
'Dunwoody',
'Hattiesburg',
'Roseville',
'Bonita Springs',
'Portage',
'St. Louis Park',
'Collierville',
'Middletown',
'Stillwater',
'East Providence',
'Lawrence',
'Wauwatosa',
'Mentor',
'Ceres',
'Cedar Hill',
'Mansfield',
'Binghamton',
'Coeur d\'Alene',
'San Luis Obispo',
'Minot',
'Palm Springs',
'Pine Bluff',
'Texas City',
'Summerville',
'Twin Falls',
'Jeffersonville',
'San Jacinto',
'Madison',
'Altoona',
'Columbus',
'Beavercreek',
'Apopka',
'Elmhurst',
'Maricopa',
'Farmington',
'Glenview',
'Cleveland Heights',
'Draper',
'Lincoln',
'Sierra Vista',
'Lacey',
'Biloxi',
'Strongsville',
'Barnstable Town',
'Wylie',
'Sayreville',
'Kannapolis',
'Charlottesville',
'Littleton',
'Titusville',
'Hackensack',
'Newark',
'Pittsfield',
'York',
'Lombard',
'Attleboro',
'DeKalb',
'Blacksburg',
'Dublin',
'Haltom City',
'Lompoc',
'El Centro',
'Danville',
'Jefferson City',
'Cutler Bay',
'Oakland Park',
'North Miami Beach',
'Freeport',
'Moline',
'Coachella',
'Fort Pierce',
'Smyrna',
'Bountiful',
'Fond du Lac',
'Everett',
'Danville',
'Keller',
'Belleville',
'Bell Gardens',
'Cleveland',
'North Lauderdale',
'Fairfield',
'Salem',
'Rancho Palos Verdes',
'San Bruno',
'Concord',
'Burlington',
'Apex',
'Midland',
'Altamonte Springs',
'Hutchinson',
'Buffalo Grove',
'Urbandale',
'State College',
'Urbana',
'Plainfield',
'Manassas',
'Bartlett',
'Kearny',
'Oro Valley',
'Findlay',
'Rohnert Park',
'Westfield',
'Linden',
'Sumter',
'Wilkes-Barre',
'Woonsocket',
'Leominster',
'Shelton',
'Brea',
'Covington',
'Rockwall',
'Meridian',
'Riverton',
'St. Cloud',
'Quincy',
'Morgan Hill',
'Warren',
'Edmonds',
'Burleson',
'Beverly',
'Mankato',
'Hagerstown',
'Prescott',
'Campbell',
'Cedar Falls',
'Beaumont',
'La Puente',
'Crystal Lake',
'Fitchburg',
'Carol Stream',
'Hickory',
'Streamwood',
'Norwich',
'Coppell',
'San Gabriel',
'Holyoke',
'Bentonville',
'Florence',
'Peachtree Corners',
'Brentwood',
'Bozeman',
'New Berlin',
'Goose Creek',
'Huntsville',
'Prescott Valley',
'Maplewood',
'Romeoville',
'Duncanville',
'Atlantic City',
'Clovis',
'The Colony',
'Culver City',
'Marlborough',
'Hilton Head Island',
'Moorhead',
'Calexico',
'Bullhead City',
'Germantown',
'La Quinta',
'Lancaster',
'Wausau',
'Sherman',
'Ocoee',
'Shakopee',
'Woburn',
'Bremerton',
'Rock Island',
'Muskogee',
'Cape Girardeau',
'Annapolis',
'Greenacres',
'Ormond Beach',
'Hallandale Beach',
'Stanton',
'Puyallup',
'Pacifica',
'Hanover Park',
'Hurst',
'Lima',
'Marana',
'Carpentersville',
'Oakley',
'Huber Heights',
'Lancaster',
'Montclair',
'Wheeling',
'Brookfield',
'Park Ridge',
'Florence',
'Roy',
'Winter Garden',
'Chelsea',
'Valley Stream',
'Spartanburg',
'Lake Oswego',
'Friendswood',
'Westerville',
'Northglenn',
'Phenix City',
'Grove City',
'Texarkana',
'Addison',
'Dover',
'Lincoln Park',
'Calumet City',
'Muskegon',
'Aventura',
'Martinez',
'Greenfield',
'Apache Junction',
'Monrovia',
'Weslaco',
'Keizer',
'Spanish Fork',
'Beloit',
'Panama City'
];

getRandos();

function getRandos() {
	var randoCount = 0;
	while(randoCount < 3063) {
		var randNum = randomIntFromInterval(1,100) - 1;
		var lastRandNum = randomIntFromInterval(1,1000) - 1;
		var cityRandNum = randomIntFromInterval(1,1000) - 1;
		var yearRandNum = randomIntFromInterval(1,133) - 1;
		if(randNum > 96) {
			var fName = girls[randomIntFromInterval(1,250) - 1];
		} else {
			var fName = boys[randomIntFromInterval(1,250) - 1];
		}
		insertCustomer(fName, randNum, lastRandNum, cityRandNum, yearRandNum);
		randoCount ++;
	}
}

function randomIntFromInterval(min,max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}

function capitalizeFirstLetter(string) {
	var lcStr = string.toLowerCase();
	var ucfStr = lcStr.substring(0,1).toUpperCase();
	var remStr = lcStr.substring(1);
	var formatted = ucfStr + remStr;
	return formatted;
}

function insertCustomer(fName, randNum, lNum, cNum, yNum) {
print('insertCustomer() called with '+fName+', '+randNum+', '+lNum+', '+cNum+', '+yNum);
	var lName = capitalizeFirstLetter(lasts[lNum]);
	var city = cities[cNum];
	var year = years[yNum];

	var combined = randNum + lNum + cNum + yNum;
	var combStr = combined.toString();
	var charTwo = combStr.substring(1,2);
	var username = fName.substr(0,1).toLowerCase() + lName;

	if(charTwo === '3') {
		username = fName.substr(0,1).toLowerCase() + lName + year.toString().substring(2,4);
	}

	if(charTwo === '4') {
		username = fName.toLowerCase() + lName + city;
	}

	if(charTwo === '5') {
		username = fName.toLowerCase() + '.' + lName.toLowerCase();
	}

	if(charTwo === '6') {
		username = fName.toLowerCase() + '.' + lName.toLowerCase() + year;
	}

	if(charTwo === '7') {
		username = fName.substr(0,1).toLowerCase() + lName.substr(0,1).toLowerCase() + city.toLowerCase() + year.toString().substring(2,4);
	}

	if(charTwo === '8') {
		username = city + fName + year + lName;
	}

	var dollars = randomIntFromInterval(11,383);

	db.customers.insert({
		fName: fName,
		lName: lName,
		username: username,
		email: username,
		city: city,
		dollars: dollars
	});
}
