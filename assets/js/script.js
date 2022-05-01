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
    { id: 4, liga: 'La Liga', nome: 'Villarreal' },
    { id: 5, liga: 'La Liga', nome: 'Valencia' },

    //Alemao serie A
    { id: 6, liga: 'Alemao Serie A', nome: 'Borussia Dortmund' },
    { id: 7, liga: 'Alemao Serie A', nome: 'FC Augsburg' },
    { id: 8, liga: 'Alemao Serie A', nome: 'Bayern de Munique' },
    { id: 9, liga: 'Alemao Serie A', nome: 'Frankfurt' },
    { id: 10, liga: 'Alemao Serie A', nome: 'Bayer Leverkusen' },
    { id: 11, liga: 'Alemao Serie A', nome: 'RB Leipzig' },
    { id: 12, liga: 'Alemao Serie A', nome: 'Wolfsburg' },

    //Italiano A
    { id: 13, liga: 'Italiano Serie A', nome: 'ACF Fiorentina' },
    { id: 14, liga: 'Italiano Serie A', nome: 'Inter de Milão' },
    { id: 15, liga: 'Italiano Serie A', nome: 'Latium**' },
    { id: 16, liga: 'Italiano Serie A', nome: 'Milan' },
    { id: 17, liga: 'Italiano Serie A', nome: 'Napoli' },
    { id: 18, liga: 'Italiano Serie A', nome: 'Piemonte Calcio**' },
    { id: 19, liga: 'Italiano Serie A', nome: 'Roma FC**' },
    { id: 20, liga: 'Italiano Serie A', nome: 'Sassuolo' },
    { id: 21, liga: 'Italiano Serie A', nome: 'Torino' },
    { id: 22, liga: 'Italiano Serie A', nome: 'Udinese' },

    //Frances A
    { id: 23, liga: 'Frances A', nome: 'Paris Saint-Germain' },
    { id: 24, liga: 'Frances A', nome: 'Olympique de Marselha' },
    { id: 25, liga: 'Frances A', nome: 'Rennes' },
    { id: 26, liga: 'Frances A', nome: 'Monaco' },
    { id: 27, liga: 'Frances A', nome: 'Lille' },
    { id: 28, liga: 'Frances A', nome: 'Lyon' },
    { id: 29, liga: 'Frances A', nome: 'Montpellier' },
    { id: 30, liga: 'Frances A', nome: 'Bordeaux' },


    //Austria
    { id: 31, liga: 'Austria', nome: 'RB Salzburg' },

    //Premier League
    { id: 32, liga: 'Premier League', nome: 'Arsenal' },
    { id: 33, liga: 'Premier League', nome: 'Aston Villa' },
    { id: 34, liga: 'Premier League', nome: 'Chelsea' },
    { id: 35, liga: 'Premier League', nome: 'Crystal Palace' },
    { id: 36, liga: 'Premier League', nome: 'Everton' },
    { id: 37, liga: 'Premier League', nome: 'Leeds United' },
    { id: 38, liga: 'Premier League', nome: 'Leicester City' },
    { id: 39, liga: 'Premier League', nome: 'Liverpool' },
    { id: 40, liga: 'Premier League', nome: 'Manchester City' },
    { id: 41, liga: 'Premier League', nome: 'Manchester United' },
    { id: 42, liga: 'Premier League', nome: 'Newcastle United' },
    { id: 43, liga: 'Premier League', nome: 'Tottenham' },
    { id: 44, liga: 'Premier League', nome: 'Watford' },
    { id: 45, liga: 'Premier League', nome: 'West Ham' },

    //Eredivisie
    { id: 46, liga: 'Eredivisie', nome: 'Ajax' },
    { id: 47, liga: 'Eredivisie', nome: 'PSV' },

    //LIGA PORTUGAL
    { id: 48, liga: 'LIGA PORTUGAL', nome: 'Porto' },
    { id: 49, liga: 'LIGA PORTUGAL', nome: 'Benfica' },
    { id: 50, liga: 'LIGA PORTUGAL', nome: 'Sporting CP' },

]

    // const times = [
    //     { id: 1, nome: 'Ajax' },
    //     { id: 2, nome: 'Arsenal' },
    //     { id: 3, nome: 'Aston Villa' },
    //     { id: 4, nome: 'Atalanta' },
    //     { id: 5, nome: 'Atlético Bilbao' },
    //     { id: 6, nome: 'Atlético Madrid' },
    //     { id: 7, nome: 'Barcelona' },
    //     { id: 8, nome: 'Bayer 04 Leverkusen' },
    //     { id: 9, nome: 'Bayern München' },
    //     { id: 10, nome: 'Benfica' },
    //     { id: 11, nome: 'Benfica' },
    //     { id: 12, nome: 'Beşiktaş' },
    //     { id: 13, nome: 'Borussia Dortmund' },
    //     { id: 14, nome: 'Chelsea' },
    //     { id: 15, nome: 'Club Brugge' },
    //     { id: 16, nome: 'Dynamo Kyiv' },
    //     { id: 17, nome: 'Everton' },
    //     { id: 18, nome: 'Inter' },
    //     { id: 19, nome: 'Juventus' },
    //     { id: 20, nome: 'Lazio' },
    //     { id: 21, nome: 'Leicester' },
    //     { id: 22, nome: 'Liverpool' },
    //     { id: 23, nome: 'Lyon' },
    //     { id: 24, nome: 'Man. City' },
    //     { id: 25, nome: 'Man. United' },
    //     { id: 26, nome: 'Milan' },
    //     { id: 27, nome: 'Monaco' },
    //     { id: 28, nome: 'Paris Saint German' },
    //     { id: 29, nome: 'Porto' },
    //     { id: 30, nome: 'RB Leipzig' },
    //     { id: 31, nome: 'Real Madrid' },
    //     { id: 32, nome: 'Roma' },
    //     { id: 33, nome: 'Salzburg' },
    //     { id: 34, nome: 'Sevilla' },
    //     { id: 35, nome: 'Shakhtar Donetsk' },
    //     { id: 36, nome: 'Sporting CP' },
    //     { id: 37, nome: 'Tottenham' },
    //     { id: 38, nome: 'Villarreal' },
    //     { id: 39, nome: 'Wolfsburg' },
    //     { id: 40, nome: 'Zenit' },
    // ]

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
