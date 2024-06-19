const arrayTemp1=[
'Capitulo 1: Pilot', 'Capitulo 2: Cats in the Bag...',
 'Capitulo 3: ...And the Bags in the River','Capitulo 4: Cancer Man',
  'Capitulo 5: Gray Matter', 'Capitulo 6: Crazy Handful of Nothing',
  'Capitulo 7: A No-Rough-Stuff-Type Deal'

];

const arrayTemp2=[
    'Capitulo 1: Seven Thirty-Seven ', 'Capitulo 2: Grilled',
    'Capitulo 3: Bit by a Dead Bee','Capitulo 4: Down',
    'Capitulo 5: Breakage', 'Capitulo 6: Peekaboo',
    'Capitulo 7: Negro y Azul', 'Capitulo 8: Better Call Saul ',
    'Capitulo 9: 4 Days Out','Capitulo 10: Over',
    'Capitulo 11: Mandala','Capitulo 12: Phoenix', 'Capitulo 14: ABQ'
    
    ];

const arrayTemp3=[
    'Capitulo 1: No Más ', 'Capitulo 2: Caballo sin Nombre',
    'Capitulo 3: I.F.T.','Capitulo 4: Green Light',
    'Capitulo 5: Más', 'Capitulo 6: Sunset',
    'Capitulo 7: One Minute', 'Capitulo 8: I See You ',
    'Capitulo 9: Kafkaesque','Capitulo 10: Fly',
    'Capitulo 11: Abiquiu','Capitulo 12: Half Measures', 'Capitulo 14: Full Measure'

    ];
const arrayTemp4=[
    'Capitulo 1: Box Cutter ', 'Capitulo 2: Thirty-Eight Snub',
    'Capitulo 3: Open House','Capitulo 4: Bullet Points',
    'Capitulo 5: Shotgun', 'Capitulo 6: Cornered',
    'Capitulo 7: Problem Dog', 'Capitulo 8: Hermanos',
    'Capitulo 9: Bug','Capitulo 10: Salud',
    'Capitulo 11: Crawl Space','Capitulo 12: End Times', 'Capitulo 14: Face off'
            
    ];

 const arrayTemp5=[
    'Capitulo 1: Live Free or Die ', 'Capitulo 2: Madrigal',
    'Capitulo 3: Hazard Pay','Capitulo 4: Fifty-One',
    'Capitulo 5: Dead Freight', 'Capitulo 6: Buyout',
    'Capitulo 7: Say My Name', 'Capitulo 8: Gliding Over All',
    'Capitulo 9: Blood Money','Capitulo 10: Buried',
    'Capitulo 11: Confessions','Capitulo 12: Rabid dog', 'Capitulo 13: To hajiilee',
    'Capitulo 14: Ozymandias','Capitulo 15: Granite State', 'Capitulo 16: Felina'
                
    ];

const combo_temporada= document.getElementById('combo_temporadas');
const combo_episodio= document.getElementById('combo_capitulos');

combo_temporada.addEventListener('change', e =>{
    const valor=combo_temporada.value;
    switch(valor){
        case '1':
            combo_episodio.innerHTML='';
            arrayTemp1.forEach(o=>{
                const opcion= document.createElement('option');
                opcion.innerText= o;
                combo_episodio.appendChild(opcion);
            })
            break;
        case '2':
            combo_episodio.innerHTML='';
            arrayTemp2.forEach(o=>{
                const opcion= document.createElement('option');
                opcion.innerText= o;
                combo_episodio.appendChild(opcion);
            })
            break;
        case '3':
            combo_episodio.innerHTML='';
            arrayTemp3.forEach(o=>{
                const opcion= document.createElement('option');
                opcion.innerText= o;
                combo_episodio.appendChild(opcion);
            })
            break;
        case '4':
            combo_episodio.innerHTML='';
            arrayTemp4.forEach(o=>{
                const opcion= document.createElement('option');
                opcion.innerText= o;
                combo_episodio.appendChild(opcion);
            })
            break;
        case '5':
            combo_episodio.innerHTML='';
            arrayTemp5.forEach(o=>{
                const opcion= document.createElement('option');
                opcion.innerText= o;
                combo_episodio.appendChild(opcion);
            })
            break;


    }



});
console.log(combo_temporada);
console.log(combo_episodio);