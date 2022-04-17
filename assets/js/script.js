function escopo() {
    const form = document.querySelector('.form');
    const jogador1 = document.querySelector('.ipt-jogador1');
    const jogador2 = document.querySelector('.ipt-jogador2');
    const quadroResposta = document.querySelector('.quadro-resposta');

    const times = [
        // La liga
        { id: 1, liga: 'La Liga', nome: 'Real Madrid' },
        { id: 2, liga: 'La Liga', nome: 'Barcelona' },
        { id: 3, liga: 'La Liga', nome: 'Atlético de Madrid' },
        { id: 4, liga: 'La Liga', nome: 'Betis' },
        { id: 5, liga: 'La Liga', nome: 'Real Sociedad' },
        { id: 6, liga: 'La Liga', nome: 'Villarreal' },
        { id: 7, liga: 'La Liga', nome: 'Athletic Club' },
        { id: 8, liga: 'La Liga', nome: 'Osasuna' },
        { id: 9, liga: 'La Liga', nome: 'Valencia' },
        { id: 10, liga: 'La Liga', nome: 'Espanyol' },
        { id: 11, liga: 'La Liga', nome: 'Celta' },
        { id: 12, liga: 'La Liga', nome: 'Elche' },
        { id: 13, liga: 'La Liga', nome: 'Rayo Vallecano' },
        { id: 14, liga: 'La Liga', nome: 'Getafe' },
        { id: 15, liga: 'La Liga', nome: 'Granada' },
        { id: 16, liga: 'La Liga', nome: 'Mallorca' },
        { id: 17, liga: 'La Liga', nome: 'Cádiz' },
        { id: 18, liga: 'La Liga', nome: 'Alavés' },
        { id: 19, liga: 'La Liga', nome: 'Levante' },
        // La liga 2
        { id: 20, liga: 'La Liga 2', nome: 'Leganés' },
        { id: 21, liga: 'La Liga 2', nome: 'AD Alcorcón' },
        { id: 22, liga: 'La Liga 2', nome: 'CD Lugo ' },
        { id: 23, liga: 'La Liga 2', nome: 'Girona FC' },
        { id: 24, liga: 'La Liga 2', nome: 'Málaga' },
        { id: 25, liga: 'La Liga 2', nome: 'Sporting Gijón' },
        { id: 26, liga: 'La Liga 2', nome: 'Real Valladolid' },

        //Alemao serie A
        { id: 27, liga: 'Alemao Serie A', nome: 'Colônia' },
        { id: 28, liga: 'Alemao Serie A', nome: 'Mainz' },
        { id: 29, liga: 'Alemao Serie A', nome: 'Arminia Bielefeld' },
        { id: 30, liga: 'Alemao Serie A', nome: 'Borussia Dortmund' },
        { id: 31, liga: 'Alemao Serie A', nome: 'FC Augsburg' },
        { id: 32, liga: 'Alemao Serie A', nome: 'Bayern de Munique' },
        { id: 33, liga: 'Alemao Serie A', nome: 'Frankfurt' },
        { id: 34, liga: 'Alemao Serie A', nome: 'Fürth' },
        { id: 35, liga: 'Alemao Serie A', nome: 'Hertha Berlin' },
        { id: 36, liga: 'Alemao Serie A', nome: 'Bayer Leverkusen' },
        { id: 37, liga: 'Alemao Serie A', nome: 'Mönchengladbach' },
        { id: 38, liga: 'Alemao Serie A', nome: 'RB Leipzig' },
        { id: 39, liga: 'Alemao Serie A', nome: 'Freiburg' },
        { id: 40, liga: 'Alemao Serie A', nome: 'Hoffenheim' },
        { id: 41, liga: 'Alemao Serie A', nome: 'Union Berlin' },
        { id: 42, liga: 'Alemao Serie A', nome: 'Stuttgart' },
        { id: 43, liga: 'Alemao Serie A', nome: 'Bochum' },
        { id: 44, liga: 'Alemao Serie A', nome: 'Wolfsburg' },

        //Bundesliga 2
        { id: 45, liga: 'Alemao Serie B', nome: 'Nuremberg' },
        { id: 46, liga: 'Alemao Serie B', nome: 'Düsseldorf' },
        { id: 47, liga: 'Alemao Serie B', nome: 'Dynamo Dresden' },
        { id: 48, liga: 'Alemao Serie B', nome: 'FC Erzgebirge Aue' },
        { id: 49, liga: 'Alemao Serie B', nome: 'FC Ingolstadt 04' },
        { id: 50, liga: 'Alemao Serie B', nome: 'Schalke 04' },
        { id: 51, liga: 'Alemao Serie B', nome: 'FC St. Pauli' },
        { id: 52, liga: 'Alemao Serie B', nome: 'Hamburgo' },
        { id: 53, liga: 'Alemao Serie B', nome: 'Hannover 96' },
        { id: 54, liga: 'Alemao Serie B', nome: 'Heidenheim' },
        { id: 55, liga: 'Alemao Serie B', nome: 'Holstein Kiel' },
        { id: 56, liga: 'Alemao Serie B', nome: 'Karlsruher SC' },
        { id: 57, liga: 'Alemao Serie B', nome: 'Regensburg' },
        { id: 58, liga: 'Alemao Serie B', nome: 'Rostock' },
        { id: 59, liga: 'Alemao Serie B', nome: 'Paderborn 07' },
        { id: 60, liga: 'Alemao Serie B', nome: 'SV Darmstadt 98' },
        { id: 61, liga: 'Alemao Serie B', nome: 'SV Sandhausen' },
        { id: 62, liga: 'Alemao Serie B', nome: 'SV Werder Bremen' },


        //Italiano A
        { id: 63, liga: 'Italiano Serie A', nome: 'Bergamo Calcio**' },
        { id: 64, liga: 'Italiano Serie A', nome: 'Bologna' },
        { id: 65, liga: 'Italiano Serie A', nome: 'Cagliari' },
        { id: 66, liga: 'Italiano Serie A', nome: 'Empoli' },
        { id: 67, liga: 'Italiano Serie A', nome: 'ACF Fiorentina' },
        { id: 68, liga: 'Italiano Serie A', nome: 'Genoa' },
        { id: 69, liga: 'Italiano Serie A', nome: 'Hellas Verona' },
        { id: 70, liga: 'Italiano Serie A', nome: 'Inter de Milão' },
        { id: 71, liga: 'Italiano Serie A', nome: 'Latium**' },
        { id: 72, liga: 'Italiano Serie A', nome: 'Milan' },
        { id: 73, liga: 'Italiano Serie A', nome: 'Napoli' },
        { id: 74, liga: 'Italiano Serie A', nome: 'Piemonte Calcio**' },
        { id: 75, liga: 'Italiano Serie A', nome: 'Roma FC**' },
        { id: 76, liga: 'Italiano Serie A', nome: 'Salernitana' },
        { id: 77, liga: 'Italiano Serie A', nome: 'Sampdoria' },
        { id: 78, liga: 'Italiano Serie A', nome: 'Sassuolo' },
        { id: 79, liga: 'Italiano Serie A', nome: 'Spezia' },
        { id: 80, liga: 'Italiano Serie A', nome: 'Torino' },
        { id: 81, liga: 'Italiano Serie A', nome: 'Udinese' },
        { id: 82, liga: 'Italiano Serie A', nome: 'Veneza' },

        //Frances A
        { id: 83, liga: 'Frances A', nome: 'Paris Saint-Germain' },
        { id: 84, liga: 'Frances A', nome: 'Olympique de Marselha' },
        { id: 85, liga: 'Frances A', nome: 'Rennes' },
        { id: 86, liga: 'Frances A', nome: 'Nice' },
        { id: 87, liga: 'Frances A', nome: 'Strasbourg' },
        { id: 88, liga: 'Frances A', nome: 'Monaco' },
        { id: 89, liga: 'Frances A', nome: 'Lens' },
        { id: 90, liga: 'Frances A', nome: 'Lille' },
        { id: 91, liga: 'Frances A', nome: 'Nantes' },
        { id: 92, liga: 'Frances A', nome: 'Lyon' },
        { id: 93, liga: 'Frances A', nome: 'Montpellier' },
        { id: 94, liga: 'Frances A', nome: 'Brest' },
        { id: 95, liga: 'Frances A', nome: 'Reims' },
        { id: 96, liga: 'Frances A', nome: 'Angers' },
        { id: 97, liga: 'Frances A', nome: 'Troyes' },
        { id: 98, liga: 'Frances A', nome: 'Lorient' },
        { id: 99, liga: 'Frances A', nome: 'Saint-Étienne' },
        { id: 100, liga: 'Frances A', nome: 'Bordeaux' },
        { id: 101, liga: 'Frances A', nome: 'Metz' },
        { id: 102, liga: 'Frances A', nome: 'Clermont Foot 63' },
        { id: 103, liga: 'Frances A', nome: 'Stade Brestois 29' },
        { id: 104, liga: 'Frances A', nome: 'Stade de Reims' },
        { id: 105, liga: 'Frances A', nome: 'Stade Rennais FC' },
        { id: 106, liga: 'Frances A', nome: 'Strasbourg' },

        //Frances B
        { id: 107, liga: 'Frances B', nome: 'Ajaccio' },
        { id: 108, liga: 'Frances B', nome: 'Auxerre' },
        { id: 109, liga: 'Frances B', nome: 'Amiens' },
        { id: 110, liga: 'Frances B', nome: 'AS Nancy Lorraine' },
        { id: 111, liga: 'Frances B', nome: 'Dijon' },
        { id: 112, liga: 'Frances B', nome: 'En Avant Guingamp' },
        { id: 113, liga: 'Frances B', nome: 'Sochaux' },
        { id: 114, liga: 'Frances B', nome: 'Grenoble Foot 38' },
        { id: 115, liga: 'Frances B', nome: 'Le Havre' },
        { id: 116, liga: 'Frances B', nome: 'Niort' },
        { id: 117, liga: 'Frances B', nome: 'Dijon FCO' },
        { id: 118, liga: 'Frances B', nome: 'Nîmes Olympique' },
        { id: 119, liga: 'Frances B', nome: 'Paris FC' },
        { id: 120, liga: 'Frances B', nome: 'Pau FC' },
        { id: 121, liga: 'Frances B', nome: 'Quevilly-Rouen' },
        { id: 122, liga: 'Frances B', nome: 'SC Bastia' },
        { id: 123, liga: 'Frances B', nome: 'SM Caen' },
        { id: 124, liga: 'Frances B', nome: 'Toulouse' },
        { id: 125, liga: 'Frances B', nome: 'Valenciennes FC' },

        //Austria
        { id: 126, liga: 'Austria', nome: 'Admira' },
        { id: 127, liga: 'Austria', nome: 'FK Austria Wien' },
        { id: 128, liga: 'Austria', nome: 'LASK' },
        { id: 129, liga: 'Austria', nome: 'RB Salzburg' },
        { id: 130, liga: 'Austria', nome: 'SCR Altach' },
        { id: 131, liga: 'Austria', nome: 'SK Rapid Wien' },
        { id: 132, liga: 'Austria', nome: 'SK Rapid Wien' },
        { id: 133, liga: 'Austria', nome: 'SV Ried' },
        { id: 134, liga: 'Austria', nome: 'TSV Hartberg' },
        { id: 135, liga: 'Austria', nome: 'Wolfsberger AC' },
        { id: 136, liga: 'Austria', nome: 'WSG Tirol' },

        //Belgica
        { id: 137, liga: 'Belgica', nome: 'Cercle Brugge' },
        { id: 138, liga: 'Belgica', nome: 'Club Brugge' },
        { id: 139, liga: 'Belgica', nome: 'K Beerschot VA' },
        { id: 140, liga: 'Belgica', nome: 'KAA Gent' },
        { id: 141, liga: 'Belgica', nome: 'KAS Eupen' },
        { id: 142, liga: 'Belgica', nome: 'KRC Genk' },
        { id: 143, liga: 'Belgica', nome: 'KV Kortrijk' },
        { id: 144, liga: 'Belgica', nome: 'KV Mechelen' },
        { id: 145, liga: 'Belgica', nome: 'KV Oostende' },
        { id: 146, liga: 'Belgica', nome: 'OH Leuven' },
        { id: 147, liga: 'Belgica', nome: 'RFC Seraing' },
        { id: 148, liga: 'Belgica', nome: 'Royal Antwerp' },
        { id: 149, liga: 'Belgica', nome: 'RSC Anderlecht' },
        { id: 150, liga: 'Belgica', nome: 'Sint-Truiden' },
        { id: 151, liga: 'Belgica', nome: 'Sp. Charleroi' },
        { id: 152, liga: 'Belgica', nome: 'Standard Liège' },
        { id: 153, liga: 'Belgica', nome: 'Union SG' },
        { id: 154, liga: 'Belgica', nome: 'Zulte-Waregem' },

        //Premier League
        { id: 155, liga: 'Premier League', nome: 'Arsenal' },
        { id: 156, liga: 'Premier League', nome: 'Aston Villa' },
        { id: 157, liga: 'Premier League', nome: 'Brentford' },
        { id: 158, liga: 'Premier League', nome: 'RBrightonSC' },
        { id: 159, liga: 'Premier League', nome: 'Burnley' },
        { id: 160, liga: 'Premier League', nome: 'Chelsea' },
        { id: 161, liga: 'Premier League', nome: 'Crystal Palace' },
        { id: 162, liga: 'Premier League', nome: 'Everton' },
        { id: 163, liga: 'Premier League', nome: 'Leeds United' },
        { id: 164, liga: 'Premier League', nome: 'Leicester City' },
        { id: 165, liga: 'Premier League', nome: 'Liverpool' },
        { id: 166, liga: 'Premier League', nome: 'Manchester City' },
        { id: 167, liga: 'Premier League', nome: 'Manchester United' },
        { id: 168, liga: 'Premier League', nome: 'Newcastle United' },
        { id: 169, liga: 'Premier League', nome: 'Norwich' },
        { id: 170, liga: 'Premier League', nome: 'Southampton' },
        { id: 171, liga: 'Premier League', nome: 'Tottenham' },
        { id: 172, liga: 'Premier League', nome: 'Watford' },
        { id: 173, liga: 'Premier League', nome: 'West Ham' },
        { id: 174, liga: 'Premier League', nome: 'Wolves' },

        //Premier league B
        { id: 175, liga: 'Premier League B', nome: 'Bournemouth' },
        { id: 176, liga: 'Premier League B', nome: 'Barnsley' },
        { id: 177, liga: 'Premier League B', nome: 'Birmingham City' },
        { id: 178, liga: 'Premier League B', nome: 'Blackburn Rovers' },
        { id: 179, liga: 'Premier League B', nome: 'Blackpool' },
        { id: 180, liga: 'Premier League B', nome: 'Bristol City' },
        { id: 181, liga: 'Premier League B', nome: 'Cardiff City' },
        { id: 182, liga: 'Premier League B', nome: 'Coventry City' },
        { id: 183, liga: 'Premier League B', nome: 'Derby County' },
        { id: 184, liga: 'Premier League B', nome: 'Fulham' },
        { id: 185, liga: 'Premier League B', nome: 'Huddersfield' },
        { id: 186, liga: 'Premier League B', nome: 'Hull City' },
        { id: 187, liga: 'Premier League B', nome: 'Luton Town' },
        { id: 188, liga: 'Premier League B', nome: 'Middlesbrough' },
        { id: 189, liga: 'Premier League B', nome: 'Millwall' },
        { id: 190, liga: 'Premier League B', nome: 'Nottingham Forest' },
        { id: 191, liga: 'Premier League B', nome: 'Peterborough' },
        { id: 192, liga: 'Premier League B', nome: 'Preston' },
        { id: 193, liga: 'Premier League B', nome: 'QPR' },
        { id: 194, liga: 'Premier League B', nome: 'Reading' },
        { id: 195, liga: 'Premier League B', nome: 'Sheffield Utd' },
        { id: 196, liga: 'Premier League B', nome: 'Stoke City' },
        { id: 197, liga: 'Premier League B', nome: 'Swansea City' },
        { id: 198, liga: 'Premier League B', nome: 'West Brom' },

        //Eredivisie
        { id: 199, liga: 'Eredivisie', nome: 'Ajax' },
        { id: 200, liga: 'Eredivisie', nome: 'FC Groningen' },
        { id: 201, liga: 'Eredivisie', nome: 'Twente' },
        { id: 202, liga: 'Eredivisie', nome: 'FC Utrecht' },
        { id: 203, liga: 'Eredivisie', nome: 'Feyenoord' },
        { id: 204, liga: 'Eredivisie', nome: 'Fortuna Sittard' },
        { id: 205, liga: 'Eredivisie', nome: 'Go Ahead Eagles' },
        { id: 216, liga: 'Eredivisie', nome: 'Heracles Almelo' },
        { id: 217, liga: 'Eredivisie', nome: 'NEC Nijmegen' },
        { id: 218, liga: 'Eredivisie', nome: 'PEC Zwolle' },
        { id: 219, liga: 'Eredivisie', nome: 'PSV' },
        { id: 210, liga: 'Eredivisie', nome: 'Waalwijk' },
        { id: 211, liga: 'Eredivisie', nome: 'SC Heerenveen' },
        { id: 212, liga: 'Eredivisie', nome: 'SC Cambuur' },
        { id: 213, liga: 'Eredivisie', nome: 'Sparta Rotterdam' },
        { id: 214, liga: 'Eredivisie', nome: 'Vitesse' },
        { id: 215, liga: 'Eredivisie', nome: 'Willem II' },

        //LIGA PORTUGAL
        { id: 216, liga: 'Liga Portugal', nome: 'Arouca' },
        { id: 217, liga: 'Liga Portugal', nome: 'Belenenses SAD' },
        { id: 218, liga: 'Liga Portugal', nome: 'Boavista' },
        { id: 219, liga: 'Liga Portugal', nome: 'Tondela' },
        { id: 220, liga: 'Liga Portugal', nome: 'Tondela' },
        { id: 221, liga: 'Liga Portugal', nome: 'FC Famalicão' },
        { id: 222, liga: 'Liga Portugal', nome: 'Porto' },
        { id: 223, liga: 'Liga Portugal', nome: 'FC Vizela' },
        { id: 224, liga: 'Liga Portugal', nome: 'Gil Vicente' },
        { id: 225, liga: 'Liga Portugal', nome: 'Marítimo' },
        { id: 226, liga: 'Liga Portugal', nome: 'Moreirense' },
        { id: 227, liga: 'Liga Portugal', nome: 'Paços Ferreira' },
        { id: 228, liga: 'Liga Portugal', nome: 'Portimonense' },
        { id: 229, liga: 'Liga Portugal', nome: 'Santa Clara' },
        { id: 230, liga: 'Liga Portugal', nome: 'Braga' },
        { id: 231, liga: 'Liga Portugal', nome: 'Benfica' },
        { id: 232, liga: 'Liga Portugal', nome: 'Sporting CP' },
        { id: 233, liga: 'Liga Portugal', nome: 'Vitória SC' },

        //RESTO DO MUNDO
        { id: 234, liga: 'Resto do Mundo', nome: 'APOEL FC' },
        { id: 235, liga: 'Resto do Mundo', nome: 'CSKA Moscou' },
        { id: 236, liga: 'Resto do Mundo', nome: 'Dinamo Zagreb' },
        { id: 237, liga: 'Resto do Mundo', nome: 'Dynamo Kyiv' },
        { id: 238, liga: 'Resto do Mundo', nome: 'Panathinaikos' },
        { id: 239, liga: 'Resto do Mundo', nome: 'Parma' },
        { id: 240, liga: 'Resto do Mundo', nome: 'PAOK' },
        { id: 241, liga: 'Resto do Mundo', nome: 'FC Shakhtar' },
        { id: 242, liga: 'Resto do Mundo', nome: 'Slavia Praha' },
        { id: 243, liga: 'Resto do Mundo', nome: 'Viktoria Plzeň' },

        //Escócia
        { id: 244, liga: 'Escócia', nome: 'Celtic' },
        { id: 245, liga: 'Escócia', nome: 'Rangers' },

        //Turquia
        { id: 246, liga: 'Turquia', nome: 'Fenerbahçe' },
        { id: 247, liga: 'Turquia', nome: 'Beşiktaş' },
    ]

    function sortearTimes(ligasSelecionadas) {

        let timesSelecioandos = [];
        if(ligasSelecionadas.length > 0){
            timesSelecioandos = times.filter((t1) => ligasSelecionadas.includes(t1.liga))
            
            timesSelecioandos.map((time,index) => {
                time.id = index + 1;
            });
        }else{
            timesSelecioandos = times;
        }
        
        const random = Math.floor(Math.random() * timesSelecioandos.length) + 1;

        const time = timesSelecioandos.filter((t1) => t1.id == random)

        return time[0];
    }

    function setQuadroResposta(jog1, jog2, time1, time2) {
        quadroResposta.style.color = 'red';

        while (quadroResposta.firstChild) {
            quadroResposta.removeChild(quadroResposta.firstChild);
        }

        const tagP1 = document.createElement('p');
        tagP1.innerText = `${jog1} = ${time1.liga} - ${time1.nome}`;

        const tagP2 = document.createElement('p');
        tagP2.innerText = `${jog2} = ${time2.liga} - ${time2.nome}`;

        quadroResposta.appendChild(tagP1)
        quadroResposta.appendChild(tagP2)
    }

    function checkbosSelecionados() {
        const ligasSelecionadas = [];

        const allCheckbox = document.querySelectorAll('input[type=checkbox]:checked')

        for (var i = 0; i < allCheckbox.length; i++) {
            ligasSelecionadas.push(allCheckbox[i].value)
        }

        return ligasSelecionadas;
    }

    form.addEventListener('submit', () => {
        window.event.preventDefault();

        quadroResposta.style.display = 'flex';

        const ligasSelecionadas = checkbosSelecionados();

        const time1 = sortearTimes(ligasSelecionadas);
        const time2 = sortearTimes(ligasSelecionadas);

        setQuadroResposta(jogador1.value, jogador2.value, time1, time2);
    });


}
escopo();
