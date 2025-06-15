// ===== LÓGICA DE DADOS: CARREGAR DO LOCALSTORAGE OU USAR PADRÃO =====
let dadosSalvosString = localStorage.getItem('meuGameLogDados');
let baseDeDadosJogos;

if (dadosSalvosString) {
    baseDeDadosJogos = JSON.parse(dadosSalvosString);
} else {
    // Dados gerados pelo conversor em 15/06/2025, 16:15:21
		 baseDeDadosJogos = [
			{
				"id": "pc01",
				"titulo": "428: Shibuya Scramble",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "04/09/2018",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/f/f8/428EnglishArt.png",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"nicho"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc02",
				"titulo": "A Hat in Time",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "05/10/2017",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/2/2a/A_Hat_in_Time_cover_art.png",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": "Entre 9 e 10",
					"destaque": "Um platformer super carismático, com mundos bem variados e criativos. Como todo bom collectathon, tem MUITA coisa pra explorar ? do jeitinho que eu gosto.",
					"potencialRejogar": "Altíssimo. O jogo é absurdamente divertido e com o suporte pra mods, multiplayer e fases feitas pela comunidade, dá pra voltar nele quantas vezes quiser sem enjoar.",
					"dataConclusao": null,
					"comentarios": "Sinceramente? É o melhor platformer que não é da Nintendo que eu já joguei. Ele tem alma, sabe? É bem feito, direto ao ponto, respeita o tempo de quem joga e ainda acerta em cheio na vibe nostálgica tipo Banjo-Kazooie. Entrega aquele quentinho no coração de quem cresceu jogando esse estilo de jogo.",
					"screenshots": []
				}
			},
			{
				"id": "ps01",
				"titulo": "A Plague Tale: Innocence",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "14/05/2019",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/1/1d/A_Plague_Tale_cover_art.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "comprado-digital",
				"generos": [
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc03",
				"titulo": "AI: The Somnium Files 2",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "23/06/2022",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/9/96/AI_The_Somnium_Files_-_Nirvana_Initative.png",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"nicho",
					"misterio"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc04",
				"titulo": "AI: The Somnium Files",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "17/09/2019",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/9/96/AI_The_Somnium_Files_-_Nirvana_Initative.png",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"nicho",
					"misterio"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": "8",
					"destaque": "O jogo é completamente maluco no melhor sentido possível. A comédia é totalmente insana, daquelas que te pega de surpresa e te faz rir do nada — e, ao mesmo tempo, ele entrega um mistério super envolvente que te prende até o final.",
					"potencialRejogar": "Só depois de esquecer boa parte do que rolou, porque o impacto da história é grande e depende muito do fator surpresa.",
					"dataConclusao": null,
					"comentarios": "Jogo bonzão. Sabe misturar o nonsense com momentos sérios de um jeito que funciona demais. Vale muito a pena pra quem curte visual novel com personalidade forte.",
					"screenshots": []
				}
			},
			{
				"id": "ps02",
				"titulo": "Alan Wake",
				"plataforma": "ps",
				"statusCategoria": "jj",
				"dataLancamento": "14/05/2010",
				"imagemCapa": "https://upload-wikimedia-org.translate.goog/wikipedia/en/1/1f/Alan_Wake_Game_Cover.jpg?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc",
				"statusPC": null,
				"tipoAquisicaoPS": "cd",
				"generos": [
					"acao",
					"misterio"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": "8",
					"destaque": "A ambientação é surreal. Toda aquela vibe de cidadezinha sombria no meio da floresta, com névoa, postes piscando e trilha sonora tensa... parece que você esta preso dentro de um livro de terror (e é exatamente essa a ideia). A narrativa te puxa forte, quase como se o jogo estivesse escrevendo ele mesmo enquanto você joga.",
					"potencialRejogar": "Médio. É uma experiência bem fechada e marcante, então talvez só daqui um tempo ? mas ainda assim fico vontade de revisitar o clima e tentar pegar mais detalhes escondidos.",
					"dataConclusao": null,
					"comentarios": "Acho que o tema/premissa do jogo é o que mais chama atenção pra mim. Ele é bem escrito e com aquela pegada de jogo que sabe o que faz. Me surpreendeu bastante uma mistura estranha de ação, terror psicológico e metalinguagem, e tudo isso funciona. As coisas que acontecem durante o jogo, o coletáveis, as televisões com os programas, e principalmente a música, todos esses fatores que estão no jogo fazem parte do enredo então parece que realmente aquele universo está rodeado por essa energia sombria que ta pronta pra engolir o Allan e o jogador.",
					"screenshots": []
				}
			},
			{
				"id": "ps03",
				"titulo": "Alan Wake II",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "27/10/2023",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/e/ed/Alan_Wake_2_box_art.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "comprado-digital",
				"generos": [
					"acao",
					"misterio"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps04",
				"titulo": "Balatro",
				"plataforma": "ps",
				"statusCategoria": "ej",
				"dataLancamento": "20/02/2024",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/a/a9/Balatro_capa_digital_Windows.png",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"simulacao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps05",
				"titulo": "Baldurs Gate 3",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "03/08/2023",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "comprado-digital",
				"generos": [
					"rpg",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps06",
				"titulo": "Bloodborne",
				"plataforma": "ps",
				"statusCategoria": "jj",
				"dataLancamento": "24/03/2015",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/2/29/Bloodborne_capa.png",
				"statusPC": null,
				"tipoAquisicaoPS": "cd",
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps07",
				"titulo": "Call of Cthulhu",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "30/10/2018",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/9/97/Call_of_Cthulhu_cover_art.png",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc05",
				"titulo": "Castle Crashers",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "26/09/2012",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/b/b0/Castle_Crashers_cover.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc08",
				"titulo": "Ciconia When They Cry",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "04/10/2019",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/8/85/Ciconia_When_They_Cry_art.png",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"nicho",
					"misterio"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc09",
				"titulo": "Civilization VI",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "22/11/2019",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/3/3b/Civilization_VI_cover_art.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"nicho",
					"puzzle",
					"simulacao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc10",
				"titulo": "Conception II: Children of the Seven Stars",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "22/08/2013",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/1/1a/Conception_II_Japanese_cover.png",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"rpg",
					"nicho"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps08",
				"titulo": "Control",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "27/08/2019",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/7/73/Control_capa.png",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc11",
				"titulo": "Danganronpa: Trigger Happy Havoc (Danganronpa 1)",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "25/11/2010",
				"imagemCapa": "https://static.wikia.nocookie.net/danganronpa/images/9/92/Danganronpa_Trigger_Happy_Havoc_Box_Art_-_PS_Vita_-_North_America.jpg/revision/latest?cb=20180404120034",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"nicho",
					"misterio"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc12",
				"titulo": "Danganronpa 2: Goodbye Despair",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "26/07/2012",
				"imagemCapa": "https://static.wikia.nocookie.net/danganronpa/images/9/99/Danganronpa_2_Goodbye_Despair_Box_Art_-_Vita_-_North_America.jpg/revision/latest/scale-to-width-down/1000?cb=20140418154650",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"nicho",
					"misterio"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc13",
				"titulo": "Danganronpa V3: Killing Harmony (Danganronpa 3)",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "12/01/2017",
				"imagemCapa": "https://static.wikia.nocookie.net/danganronpa/images/d/d6/Danganronpa_V3-_Killing_Harmony_PS4_box_art.jpg/revision/latest?cb=20170829045900",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"nicho",
					"misterio"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps09",
				"titulo": "Dark Souls 1",
				"plataforma": "ps",
				"statusCategoria": "jj",
				"dataLancamento": "22/09/2011",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/thumb/7/7c/Dark_Souls_1_capa.png/330px-Dark_Souls_1_capa.png",
				"statusPC": null,
				"tipoAquisicaoPS": "cd",
				"generos": [
					"rpg",
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps10",
				"titulo": "Dark Souls 2",
				"plataforma": "ps",
				"statusCategoria": "jj",
				"dataLancamento": "11/03/2014",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/2/22/Dark_Souls_2_capa.png",
				"statusPC": null,
				"tipoAquisicaoPS": "cd",
				"generos": [
					"rpg",
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps11",
				"titulo": "Dark Souls 3",
				"plataforma": "ps",
				"statusCategoria": "jj",
				"dataLancamento": "12/04/2016",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/e/e9/Dark_Souls_3_capa.png",
				"statusPC": null,
				"tipoAquisicaoPS": "cd",
				"generos": [
					"rpg",
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc14",
				"titulo": "Dead Rising 3",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "05/09/2014",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/0/00/Dead_Rising_3_Cover_Art.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps12",
				"titulo": "Death Stranding",
				"plataforma": "ps",
				"statusCategoria": "jj",
				"dataLancamento": "08/11/2019",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/2/22/Death_Stranding.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"aventura",
					"simulacao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps13",
				"titulo": "Death Stranding 2",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "26/06/2025",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/e/e0/Death_Stranding_2_Icon.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "comprado-digital",
				"generos": [
					"aventura",
					"simulacao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps14",
				"titulo": "Demon's Souls (Remake)",
				"plataforma": "ps",
				"statusCategoria": "jj",
				"dataLancamento": "12/11/2020",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/7/78/Demons_Souls_remake_capa.png",
				"statusPC": null,
				"tipoAquisicaoPS": "cd",
				"generos": [
					"rpg",
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps15",
				"titulo": "Detroit: Become Human",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "25/05/2018",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/e/ee/Detroit_Become_Human.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"espaco"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc15",
				"titulo": "Deus Ex Machina",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "29/09/2016",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/e/ed/Deus_Ex_Human_Revolution_capa.png",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc16",
				"titulo": "Devil May Cry",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "23/08/2001",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/7/7d/Devil_May_Cry_-_North-american_cover.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc17",
				"titulo": "Devil May Cry 2",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "28/01/2003",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/6/6b/DMC2_capa.png",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc18",
				"titulo": "Devil May Cry 3: Dante's Awakening",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "17/02/2005",
				"imagemCapa": "https://m.media-amazon.com/images/M/MV5BNmRiYmJlYmEtN2I1Ni00N2IwLThkNWEtMDVhNzA1YTZhOTA4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc19",
				"titulo": "Devil May Cry 4",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "08/07/2008",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/b/bb/DMC4COVER.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps16",
				"titulo": "Devil May Cry 5",
				"plataforma": "ps",
				"statusCategoria": "jj",
				"dataLancamento": "08/03/2019",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/c/cb/Devil_May_Cry_5.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": null,
				"generos": [],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps17",
				"titulo": "Disgaea 5",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "25/03/2015",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/0/0a/Disgaea_5_-_Alliance_of_Vengeance.png",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"rpg",
					"nicho"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps18",
				"titulo": "Dragon Ball Z: Kakarot",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "13/01/2023",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/e/e4/Dragon_Ball_Z_Kakarot_logo.png",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc20",
				"titulo": "Dragon Dogma",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "22/05/2012",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/6/6c/DragonsDogma.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"fantasia",
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps19",
				"titulo": "Elden Ring",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "24/02/2019",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/0/0d/Elden_Ring_capa.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "comprado-digital",
				"generos": [
					"rpg",
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps20",
				"titulo": "Expedition 33",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "24/04/2025",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/d/d7/Clair_Obscur_Expedition_33.png",
				"statusPC": null,
				"tipoAquisicaoPS": "comprado-digital",
				"generos": [
					"rpg",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps21",
				"titulo": "Fallout 4",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "10/11/2015",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/7/70/Fallout_4_cover_art.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"rpg",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc21",
				"titulo": "Fallout: New Vegas",
				"plataforma": "pc",
				"statusCategoria": "ej",
				"dataLancamento": "19/10/2010",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/3/34/Fallout_New_Vegas.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"rpg",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps22",
				"titulo": "Final Fantasy VII Remake Intergrade",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "10/06/2021",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"rpg",
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps23",
				"titulo": "Final Fantasy VII Rebirth",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "29/02/2024",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/9/95/Final_Fantasy_7_Rebirth_capa.png",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"rpg",
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps24",
				"titulo": "Final Fantasy VII Reunion (Crisis Core)",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "13/12/2022",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/3/32/Crisis_Core.png",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"rpg",
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps25",
				"titulo": "Final Fantasy XVI",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "22/06/2023",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/0/00/Final_Fantasy_XVI_cover_art.png",
				"statusPC": null,
				"tipoAquisicaoPS": "cd",
				"generos": [
					"rpg",
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps26",
				"titulo": "Ghost of Tsushima",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "17/07/2020",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/d/dc/Ghost_of_Tsushima_capa.png",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps27",
				"titulo": "God of War (2018)",
				"plataforma": "ps",
				"statusCategoria": "jj",
				"dataLancamento": "20/04/2018",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/8/82/God_of_War_2018_capa.png",
				"statusPC": null,
				"tipoAquisicaoPS": "comprado-digital",
				"generos": [
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps28",
				"titulo": "God of War Ragnarok",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "19/09/2024",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/a/a5/God_of_War_Ragnar%C3%B6k_capa.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "comprado-digital",
				"generos": [
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps29",
				"titulo": "Gravity Rush Remastered",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "02/02/2016",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/0/0e/GravityRushPSVitaCover.png",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc22",
				"titulo": "Hellblade: Senua's Sacrifice",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "11/04/2019",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/2/28/Hellblade_poster.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"fantasia",
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps30",
				"titulo": "Horizon Zero Dawn",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "28/02/2017",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d0/Horizon_Zero_Dawn_capa.png/405px-Horizon_Zero_Dawn_capa.png",
				"statusPC": null,
				"tipoAquisicaoPS": null,
				"generos": [
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps31",
				"titulo": "Horizon Forbidden West",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "18/02/2022",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/e/e5/Horizon_Forbidden_West.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "cd",
				"generos": [
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps32",
				"titulo": "Judgement",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "14/09/2022",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/8/88/Judgmentcover.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "comprado-digital",
				"generos": [
					"acao",
					"aventura",
					"misterio",
					"nicho"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps33",
				"titulo": "Like a Dragon Gaiden: The Man Who Erased His Name",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "09/11/2023",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/d/d0/Like_a_Dragon_Gaiden_The_Man_Who_Erased_His_Name_PlayStation_5_capa_digital.png",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"acao",
					"aventura",
					"nicho"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps34",
				"titulo": "Like a Dragon: Ishin!",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "22/02/2014",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Like_a_Dragon_Ishin_Cover_Art.jpg/250px-Like_a_Dragon_Ishin_Cover_Art.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"acao",
					"aventura",
					"nicho"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc23",
				"titulo": "Little Nightmares",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "28/04/2017",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/d/d8/Little_Nightmares_Box_Art.png",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao",
					"aventura",
					"misterio",
					"nicho"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps35",
				"titulo": "Lost Judgment",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "14/09/2022",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/3/3e/LostJudgmentcover.png",
				"statusPC": null,
				"tipoAquisicaoPS": "comprado-digital",
				"generos": [
					"acao",
					"aventura",
					"misterio",
					"nicho"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc24",
				"titulo": "Mafia",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "29/08/2002",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/f/f9/MafiaCapa.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps36",
				"titulo": "Marvel's Guardians of the Galaxy",
				"plataforma": "ps",
				"statusCategoria": "jj",
				"dataLancamento": "26/10/2021",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/2/22/Guardians_of_the_Galaxy_game_cover_art.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"acao",
					"aventura",
					"espaco"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc25",
				"titulo": "Metal Gear Rising: Revengeance",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "19/02/2013",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/3/3b/Metal_Gear_Rising_Revengeance_box_artwork.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc26",
				"titulo": "Monster Hunter Rise",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "26/03/2021",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/4/41/Monster_hunter_rise_cover.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc27",
				"titulo": "Monster Hunter Stories",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "24/09/2018",
				"imagemCapa": "https://static.wikia.nocookie.net/monsterhunter/images/c/c4/Box_Art-MHST_N3DS_Textless_JPN.jpg/revision/latest/scale-to-width-down/250?cb=20160526103010",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc28",
				"titulo": "Monster Hunter Stories 2: Wings of Ruin",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "09/07/2021",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/8/82/Monster_Hunter_Stories_2.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps37",
				"titulo": "Monster Hunter Wilds",
				"plataforma": "ps",
				"statusCategoria": "ej",
				"dataLancamento": "28/02/2025",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/5/52/Monster_Hunter_Wilds_cover.png",
				"statusPC": null,
				"tipoAquisicaoPS": "comprado-digital",
				"generos": [
					"acao",
					"aventura",
					"rpg",
					"fantasia"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc29",
				"titulo": "Monster Hunter: World",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "26/01/2018",
				"imagemCapa": "https://static.wikia.nocookie.net/monsterhunter/images/b/b7/Iceborne-keyart.jpg/revision/latest?cb=20200818052750",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"rpg",
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": "10",
					"destaque": "Tudo ? desde o combate fluido e t�cnico at� a ambienta��o e variedade de monstros.",
					"potencialRejogar": "Alt�ssimo ? 100% rejog�vel com qualquer arma e estilo de gameplay.",
					"dataConclusao": "Final de 2021 (junto com a �ltima atualiza��o de Iceborne)",
					"comentarios": "Um dos meus jogos favoritos de todos os tempos. A experi�ncia de ca�ar em coop, testar builds com armas diferentes e entender os h�bitos dos monstros � extremamente recompensadora. Iceborne eleva tudo a outro n�vel com mais conte�do, desafio e profundidade. Desde o an�ncio tive uma preocupa��o de como o jogo estaria no momento do lan�amento visto que todo o revamp em tecnologia era muito bom para ser verdade. Estava completamente enganado, acho que nunca veremos um jogo t�o perfeito assim denovo vindo da capcom por pelo menos uma d�cada.",
					"screenshots": []
				}
			},
			{
				"id": "pc30",
				"titulo": "Narcissu 1st & 2nd",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "15/05/2007",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Narcissu_PC_Box_Art.jpg/250px-Narcissu_PC_Box_Art.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"nicho"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc31",
				"titulo": "NFS Heat",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "08/11/2019",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/f/f1/Need_for_Speed_Heat_capa.png",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc32",
				"titulo": "Night in the Woods",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "21/02/2017",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/3/36/Night_in_the_Woods.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"nicho",
					"misterio"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc33",
				"titulo": "Octodad: Dadliest Catch",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "31/12/2010",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/2/2b/Octodad_Logo.png",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps38",
				"titulo": "Oddworld: Soulstorm",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "06/04/2021",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/f/f9/Oddworld_Soulstorm_cover.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"aventura",
					"puzzle",
					"nicho"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc34",
				"titulo": "Ori and the Blind Forest",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "11/03/2015",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/b/b2/Ori_and_the_Blind_Forest_Logo.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"aventura",
					"espaco",
					"misterio",
					"puzzle"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps39",
				"titulo": "Outer Wilds",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "18/06/2020",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Outer_Wilds_Steam_artwork.jpg/250px-Outer_Wilds_Steam_artwork.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "comprado-digital",
				"generos": [
					"aventura",
					"espaco",
					"misterio",
					"puzzle"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc35",
				"titulo": "Persona 3",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "14/08/2007",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/4/47/Persona3cover.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"rpg"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps40",
				"titulo": "Persona 3 Reload",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "02/02/2024",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/6/65/Persona_3_Reload_box_art.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "comprado-digital",
				"generos": [
					"rpg",
					"simulacao",
					"nicho"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc36",
				"titulo": "Persona 4 Golden",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "14/06/2012",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/1/10/Shin_Megami_Tensei_Persona_4.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"rpg"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps41",
				"titulo": "Persona 5",
				"plataforma": "ps",
				"statusCategoria": "jj",
				"dataLancamento": "04/04/2017",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/b/b0/Persona_5_cover_art.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "cd",
				"generos": [
					"rpg",
					"simulacao",
					"nicho"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc37",
				"titulo": "Persona 5 Strikers",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "23/02/2021",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/6/6e/Persona_5_Scramble.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao",
					"aventura",
					"simulacao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc38",
				"titulo": "Portal",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "12/05/2010",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/f/f9/Portal_caixa.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao",
					"aventura",
					"nicho"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc39",
				"titulo": "Portal 2",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "18/04/2011",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/f/f9/Portal2cover.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"puzzle"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps42",
				"titulo": "Red Dead Redemption II",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "26/10/2018",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/e/e7/Red_Dead_Redemption_2.png",
				"statusPC": null,
				"tipoAquisicaoPS": "cd",
				"generos": [
					"acao",
					"aventura",
					"simulacao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc40",
				"titulo": "Resident Evil",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "22/03/1996",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/a/ab/Resident_Evil_2002_cover.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc41",
				"titulo": "Rise of the Tomb Raider",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "10/11/2015",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/3/3f/RotTR_boxart.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps43",
				"titulo": "Sekiro: Shadows Die Twice",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "22/03/2019",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/thumb/7/7b/Sekiro_Shadows_Die_Twice_capa.png/330px-Sekiro_Shadows_Die_Twice_capa.png",
				"statusPC": null,
				"tipoAquisicaoPS": "cd",
				"generos": [
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps44",
				"titulo": "Shadow of the Colossus",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "06/02/2018",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/6/66/ShadowOfTheColossusGH.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"aventura",
					"puzzle"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps45",
				"titulo": "Sonic Frontiers",
				"plataforma": "ps",
				"statusCategoria": "jj",
				"dataLancamento": "08/11/2022",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/0/0f/SonicFrontiersCoverArt.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc42",
				"titulo": "Sonic Generations",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "01/11/2011",
				"imagemCapa": "https://static.wikia.nocookie.net/sonic/images/d/d6/Sonic_Generations.jpg/revision/latest?cb=20191004103644",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc43",
				"titulo": "Spark the Electric Jester 3",
				"plataforma": "pc",
				"statusCategoria": "ej",
				"dataLancamento": "14/08/2022",
				"imagemCapa": "https://static.wikia.nocookie.net/spark-tej/images/6/6c/Spark-Electric-Jester-3_Gematsu-Thumbnail.jpg/revision/latest?cb=20221228224333",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc44",
				"titulo": "Spec Ops: The Line",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "26/06/2012",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/7/79/Spec_Ops_The_Line_capa.png",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps46",
				"titulo": "Spider-Man",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "07/09/2018",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/thumb/7/78/Spider-Man_jogo_2018_capa.png/330px-Spider-Man_jogo_2018_capa.png",
				"statusPC": null,
				"tipoAquisicaoPS": "cd",
				"generos": [
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps47",
				"titulo": "Star Wars Jedi: Survivor",
				"plataforma": "ps",
				"statusCategoria": "jj",
				"dataLancamento": "28/04/2023",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/9/93/Star_Wars_Jedi_Survivor_capa.png",
				"statusPC": null,
				"tipoAquisicaoPS": "comprado-digital",
				"generos": [
					"acao",
					"aventura",
					"espaco"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc45",
				"titulo": "Stardew Valley",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "26/02/2016",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"simulacao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc46",
				"titulo": "Sunset Overdrive",
				"plataforma": "pc",
				"statusCategoria": "ej",
				"dataLancamento": "28/10/2014",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/4/46/Sunset_Overdrive_cover.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps48",
				"titulo": "Tales of Arise",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "09/09/2021",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/pt/7/7e/Tales_of_Arise_capa.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "comprado-digital",
				"generos": [
					"rpg",
					"acao",
					"aventura",
					"fantasia"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps49",
				"titulo": "The Last Guardian",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "06/12/2016",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/2/25/The_Last_Guardian_cover_art.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"aventura",
					"puzzle"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc47",
				"titulo": "The Legend of Heroes: Trails in the Sky",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "29/07/2014",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/1/1c/Trails_in_the_Sky_artwork.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"rpg",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": "10",
					"destaque": "Os personagens carism�ticos, o clima positivo e acolhedor do jogo, e a trilha sonora fenomenal. O visual 3D isom�trico tamb�m d� um charme especial.",
					"potencialRejogar": "Tem potencial, mas como a for�a principal � a hist�ria, rejogar exigiria um bom tempo de espera (ou o remake que est� por vir).",
					"dataConclusao": "24/01/2024",
					"comentarios": "Um jogo perfeito e muito fofinho. �s vezes um pouco lento, mas sempre envolvente. Me trouxe muita felicidade ao jogar e empolga��o pelo que vem nos pr�ximos cap�tulos da s�rie.",
					"screenshots": []
				}
			},
			{
				"id": "pc48",
				"titulo": "The Legend of Heroes: Trails in the Sky SC (Second Chapter)",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "29/10/2015",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/0/08/Trails_in_the_Sky_SC_artwork.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"rpg",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": "10",
					"destaque": "A hist�ria se superou em rela��o ao primeiro jogo, com momentos ainda mais emocionantes e intensos.",
					"potencialRejogar": "Sim ? mesmo caso do primeiro jogo: hist�ria � o foco, ent�o exige tempo ou o remake para reviver.",
					"dataConclusao": "01/08/2024",
					"comentarios": "Fant�stico e apaixonante. Bem mais longo que o primeiro, mas totalmente valioso. A conclus�o da jornada � extremamente recompensadora e eleva a s�rie a outro n�vel.",
					"screenshots": []
				}
			},
			{
				"id": "pc49",
				"titulo": "The Legend of Heroes: Trails in the Sky the 3rd",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "03/05/2017",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/f/f6/Trails_in_the_Sky_the_3rd_artwork.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"rpg",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": "10",
					"destaque": "A estrutura em forma de \"\"porta de mem�rias\"\" d� um ar de antologia emocional e filos�fica que complementa lindamente os jogos anteriores.",
					"potencialRejogar": "Sim ? o foco em narrativa e explora��o torna a experi�ncia �nica, mas ainda assim poss�vel de revisitar ap�s um tempo.",
					"dataConclusao": "15/11/2024",
					"comentarios": "Muito top. Uma jornada mais introspectiva e simb�lica, com foco em desenvolver personagens secund�rios e responder pend�ncias da s�rie. � diferente dos dois primeiros, mas fecha com maestria o arco de Liberl. Um ep�logo corajoso e necess�rio.",
					"screenshots": []
				}
			},
			{
				"id": "pc50",
				"titulo": "The Legend of Heroes: Trails of Cold Steel",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "02/08/2017",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/a/a7/Trails_of_Cold_Steel_Steam_artwork.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"rpg",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": "7",
					"destaque": "Foi o primeiro jogo da s�rie Trails que joguei, e me diverti bastante com os personagens e o sistema de combate.",
					"potencialRejogar": "Talvez ? jogaria de novo um dia, mas a hist�ria n�o tem o mesmo apelo emocional ou surpresa que os outros t�tulos.",
					"dataConclusao": "09/09/2023",
					"comentarios": "Muito bom. Uma boa introdu��o ao universo de Erebonia, com tem�tica escolar, intrigas pol�ticas e batalhas estrat�gicas. Apesar de ter sido o primeiro contato com a s�rie, s� mais tarde entendi o qu�o rico � o universo conectado dos jogos.",
					"screenshots": []
				}
			},
			{
				"id": "pc51",
				"titulo": "The Legend of Heroes: Trails of Cold Steel II",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "25/09/2014",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Trails_of_Cold_Steel_II_Steam_artwork.jpg/250px-Trails_of_Cold_Steel_II_Steam_artwork.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"rpg",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc52",
				"titulo": "The Legend of Heroes: Trails of Cold Steel III",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "28/09/2017",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/1/15/Trails_of_Cold_Steel_III_Steam_artwork.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"rpg",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc53",
				"titulo": "The Legend of Heroes: Trails of Cold Steel IV",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "27/09/2018",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/c/cd/Trails_of_Cold_Steel_IV_Cover_Art.png",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"rpg",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps50",
				"titulo": "The Plucky Squire",
				"plataforma": "ps",
				"statusCategoria": "jj",
				"dataLancamento": "17/09/2024",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/8/81/The_Plucky_Squire_cover_art.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc54",
				"titulo": "Titanfall 2",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "28/10/2016",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/1/13/Titanfall_2.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao",
					"espaco"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc55",
				"titulo": "Tomb Raider (2013 reboot)",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "27/04/2016",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/f/f1/TombRaider2013.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"acao",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps51",
				"titulo": "Toukiden 2",
				"plataforma": "ps",
				"statusCategoria": "ej",
				"dataLancamento": "28/07/2016",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/f/f4/Toukiden_2_decalless_cover_art.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"acao",
					"fantasia",
					"rpg"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc56",
				"titulo": "Tribe Nine",
				"plataforma": "pc",
				"statusCategoria": "ej",
				"dataLancamento": "20/02/2025",
				"imagemCapa": "https://static.wikia.nocookie.net/tribenine/images/e/ef/TRIBE_NINE_Game_main_art.jpg/revision/latest/smart/width/250/height/250?cb=20211102235300",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"rpg",
					"acao"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc57",
				"titulo": "Undertale",
				"plataforma": "pc",
				"statusCategoria": "jj",
				"dataLancamento": "17/07/2016",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Undertale_cover.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"rpg",
					"fantasia",
					"puzzle"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "pc58",
				"titulo": "Valkyria Chronicles",
				"plataforma": "pc",
				"statusCategoria": "qj",
				"dataLancamento": "24/04/2008",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/a/a2/Valkyria_cover.jpg",
				"statusPC": "tenho",
				"tipoAquisicaoPS": null,
				"generos": [
					"rpg",
					"fantasia"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps52",
				"titulo": "Wild Hearts",
				"plataforma": "ps",
				"statusCategoria": "jj",
				"dataLancamento": "16/02/2023",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/8/80/Wild_Hearts_cover_art.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"acao",
					"fantasia",
					"aventura"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			},
			{
				"id": "ps53",
				"titulo": "Ys VIII: Lacrimosa of Dana",
				"plataforma": "ps",
				"statusCategoria": "qj",
				"dataLancamento": "01/04/2021",
				"imagemCapa": "https://upload.wikimedia.org/wikipedia/en/b/b5/Ys_VIII_cover_art.jpg",
				"statusPC": null,
				"tipoAquisicaoPS": "plus",
				"generos": [
					"rpg",
					"acao",
					"fantasia"
				],
				"screenshots": [],
				"avaliacao": {
					"nota": null,
					"destaque": null,
					"potencialRejogar": null,
					"dataConclusao": null,
					"comentarios": null,
					"screenshots": []
				}
			}
	];
}
        
// ===== DEFINIÇÃO DAS FUNÇÕES GLOBAIS =====

function salvarDados() {
    localStorage.setItem('meuGameLogDados', JSON.stringify(baseDeDadosJogos));
    console.log("Dados salvos no localStorage!");
}

function renderizarJogos() {
    const todasAsListasUl = document.querySelectorAll('.conteudo-sub-categoria ul');
    todasAsListasUl.forEach(ul => ul.innerHTML = '');

    baseDeDadosJogos.forEach(jogo => {
        let htmlAvaliacao = `<div class="detalhes-avaliacao"><p><em>Avaliação pendente...</em></p></div>`;
        if (jogo.avaliacao) {
            const gerarHtmlScreenshots = () => {
                if (!jogo.avaliacao.screenshots || jogo.avaliacao.screenshots.length === 0) return '';
                return `<h5>Screenshots:</h5><ul>${jogo.avaliacao.screenshots.map(ssUrl => `<li><img src="${ssUrl}" alt="Screenshot de ${jogo.titulo}"></li>`).join('')}</ul>`;
            };
            htmlAvaliacao = `<div class="detalhes-avaliacao"><h4>Minha Avaliação sobre ${jogo.titulo}:</h4><p><strong>Nota:</strong> ${jogo.avaliacao.nota || 'N/A'}</p><p><strong>Destaque do Jogo:</strong> ${jogo.avaliacao.destaque || 'N/A'}</p><p><strong>Potencial para Rejogar:</strong> ${jogo.avaliacao.potencialRejogar || 'N/A'}</p><p><strong>Gênero(s):</strong> ${jogo.generos.join(', ')}</p><p><strong>Data de Conclusão:</strong> ${jogo.avaliacao.dataConclusao || 'N/A'}</p><p class="texto-resenha"><strong>Comentários:</strong> ${jogo.avaliacao.comentarios || 'Sem comentários.'}</p>${gerarHtmlScreenshots()}</div>`;
        }

        let aquisicaoTexto = '';
        if(jogo.plataforma === 'ps' && jogo.tipoAquisicaoPS) {
            let texto = '';
            if (jogo.tipoAquisicaoPS === 'cd') texto = 'Mídia Física (CD)';
            else if (jogo.tipoAquisicaoPS === 'plus') texto = 'PlayStation Plus';
            else if (jogo.tipoAquisicaoPS === 'comprado-digital') texto = 'Compra Digital';
            aquisicaoTexto = `<p><strong>Aquisição:</strong> ${texto}</p>`;
        }
        
        const htmlDoJogo = `
            <li class="item-jogo" 
                data-generos="${jogo.generos.join(',')}" 
                ${jogo.plataforma === 'pc' && jogo.statusPC ? `data-status-pc="${jogo.statusPC}"` : ''}
                ${jogo.plataforma === 'ps' && jogo.tipoAquisicaoPS ? `data-tipo-aquisicao="${jogo.tipoAquisicaoPS}"` : ''}>
                <div class="resumo-jogo">
                    <div class="botoes-acao-card">
                        <button class="btn-editar" data-edit-id="${jogo.id}" title="Editar Jogo">✏️</button>
                        <button class="btn-deletar" data-delete-id="${jogo.id}" title="Deletar Jogo">🗑️</button>
                    </div>
                    <img src="${jogo.imagemCapa}" alt="Capa ${jogo.titulo}">
                    <div class="info-principal">
                        <p><strong>Título:</strong> ${jogo.titulo}</p>
                        <p><strong>Data de Lançamento:</strong> ${jogo.dataLancamento}</p>
                    </div>
                    <span class="clique-detalhes">(Ver Detalhes)</span>
                </div>
                <div class="detalhes-jogo">
                    <p><strong>Plataforma:</strong> ${jogo.plataforma.toUpperCase()}</p>
                    ${aquisicaoTexto}
                    ${htmlAvaliacao}
                </div>
            </li>`;

        const idDoPainelAlvo = `${jogo.plataforma}-${jogo.statusCategoria}`;
        const painelAlvo = document.getElementById(idDoPainelAlvo);
        if (painelAlvo) {
            painelAlvo.querySelector('ul')?.insertAdjacentHTML('beforeend', htmlDoJogo);
        }
    });
}

function prepararModalParaAdicionar() {
    document.getElementById('form-novo-jogo').reset();
    const campoIdExistente = document.getElementById('id-jogo-editando');
    if (campoIdExistente) campoIdExistente.remove();
    document.querySelector('#modal-novo-jogo h2').textContent = 'Adicionar Novo Jogo';
    document.querySelector('#form-novo-jogo .btn-salvar').textContent = 'Salvar Jogo';
}

function abrirModalParaEditar(jogo) {
    prepararModalParaAdicionar();
    document.getElementById('form-novo-jogo').insertAdjacentHTML('afterbegin', `<input type="hidden" id="id-jogo-editando" name="idJogoEditando" value="${jogo.id}">`);
    document.getElementById('titulo-jogo').value = jogo.titulo;
    document.getElementById('plataforma-jogo').value = jogo.plataforma;
    document.getElementById('status-jogo').value = jogo.statusCategoria;
    document.getElementById('imagem-jogo').value = jogo.imagemCapa;
    document.getElementById('data-lancamento-jogo').value = jogo.dataLancamento;
    document.getElementById('generos-jogo').value = jogo.generos.join(',');
    if (jogo.avaliacao) {
        document.getElementById('nota-jogo').value = jogo.avaliacao.nota || '';
        document.getElementById('destaque-jogo').value = jogo.avaliacao.destaque || '';
        document.getElementById('rejogar-jogo').value = jogo.avaliacao.potencialRejogar || '';
        document.getElementById('conclusao-jogo').value = jogo.avaliacao.dataConclusao || '';
        document.getElementById('comentarios-jogo').value = jogo.avaliacao.comentarios || '';
        if (jogo.avaliacao.screenshots) document.getElementById('screenshots-jogo').value = jogo.avaliacao.screenshots.join(', ');
    }
    document.querySelector('#modal-novo-jogo h2').textContent = 'Editar Jogo';
    document.querySelector('#form-novo-jogo .btn-salvar').textContent = 'Salvar Alterações';
    document.getElementById('modal-novo-jogo').classList.add('visivel');
}

function mostrarPlataforma(idPlataformaAlvo) {
    document.querySelectorAll('.conteudo-plataforma').forEach(secao => secao.classList.remove('visivel'));
    const secaoAlvo = document.getElementById('secao-' + idPlataformaAlvo);
    if (secaoAlvo) secaoAlvo.classList.add('visivel');
    document.querySelectorAll('.abas-plataforma button').forEach(botao => {
        botao.classList.remove('aba-ativa');
        if (botao.getAttribute('data-plataforma') === idPlataformaAlvo) botao.classList.add('aba-ativa');
    });
    if (secaoAlvo) {
        const primeiraSubAbaBotao = secaoAlvo.querySelector('.sub-abas-categorias button');
        if (primeiraSubAbaBotao) {
            const primeiroTarget = primeiraSubAbaBotao.getAttribute('data-categoria-target');
            if (primeiroTarget) { 
                const indiceUltimoHifen = primeiroTarget.lastIndexOf('-');
                const prefixo = primeiroTarget.substring(0, indiceUltimoHifen);
                const sufixo = primeiroTarget.substring(indiceUltimoHifen + 1);
                mostrarSubCategoria(prefixo, sufixo);
            }
        }
    }
}

function mostrarSubCategoria(prefixoPlataforma, idSufixoSubCategoria) {
    const secaoPlataformaAtiva = document.getElementById('secao-' + prefixoPlataforma);
    if (!secaoPlataformaAtiva) return;
    const paineisSubCategoria = secaoPlataformaAtiva.querySelectorAll('.conteudo-sub-categoria .sub-categoria-painel');
    paineisSubCategoria.forEach(painel => painel.classList.remove('visivel'));
    const painelAlvoId = prefixoPlataforma + '-' + idSufixoSubCategoria;
    const painelAlvo = document.getElementById(painelAlvoId);
    if (painelAlvo) painelAlvo.classList.add('visivel');
    const botoesSubAbas = secaoPlataformaAtiva.querySelectorAll('.sub-abas-categorias button');
    botoesSubAbas.forEach(botao => {
        botao.classList.remove('sub-aba-ativa');
        if (botao.getAttribute('data-categoria-target') === painelAlvoId) botao.classList.add('sub-aba-ativa');
    });
}

function aplicarFiltroStatusPC(statusFiltrar, botaoClicado) {
    const containerFiltros = document.getElementById('filtros-pc-aquisicao');
    if (containerFiltros) {
        containerFiltros.querySelectorAll('.filtro-btn').forEach(btn => btn.classList.remove('filtro-ativo'));
        botaoClicado.classList.add('filtro-ativo');
    } else { return; }
    const secaoPC = document.getElementById('secao-pc');
    if (secaoPC) {
        secaoPC.querySelectorAll('.item-jogo').forEach(jogo => {
            jogo.style.display = (statusFiltrar === 'todos' || jogo.getAttribute('data-status-pc') === statusFiltrar) ? '' : 'none';
        });
    }
}

function aplicarFiltroPSAquisicao(tipoAquisicaoFiltrar, botaoClicado) {
    const containerFiltros = document.getElementById('filtros-ps-aquisicao');
    if (containerFiltros) {
        containerFiltros.querySelectorAll('.filtro-btn').forEach(btn => btn.classList.remove('filtro-ativo'));
        botaoClicado.classList.add('filtro-ativo');
    } else { return; }
    const secaoPS = document.getElementById('secao-ps');
    if (secaoPS) {
        secaoPS.querySelectorAll('.item-jogo').forEach(jogo => {
            jogo.style.display = (tipoAquisicaoFiltrar === 'todos' || jogo.getAttribute('data-tipo-aquisicao') === tipoAquisicaoFiltrar) ? '' : 'none';
        });
    }
}

function aplicarFiltroGenero(plataformaPrefixo, generoFiltrar, botaoClicado) {
    const containerFiltrosId = 'filtros-' + plataformaPrefixo + '-genero';
    const containerFiltros = document.getElementById(containerFiltrosId);
    if (containerFiltros) {
        containerFiltros.querySelectorAll('.filtro-btn').forEach(btn => btn.classList.remove('filtro-ativo'));
        botaoClicado.classList.add('filtro-ativo');
    } else { return; }
    const secaoPlataformaId = 'secao-' + plataformaPrefixo;
    const secaoPlataforma = document.getElementById(secaoPlataformaId);
    if (secaoPlataforma) {
        secaoPlataforma.querySelectorAll('.item-jogo').forEach(jogo => {
            const generosDoJogoAttr = jogo.getAttribute('data-generos');
            let corresponde = false;
            if (generoFiltrar === 'todos') {
                corresponde = true;
            } else if (generosDoJogoAttr) {
                corresponde = generosDoJogoAttr.split(',').includes(generoFiltrar);
            }
            jogo.style.display = corresponde ? '' : 'none';
        });
    }
}

// ===== CONFIGURAÇÃO DOS EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
    renderizarJogos();

    const containerPrincipalDosJogos = document.querySelector('.conteudo-principal');
    const modal = document.getElementById('modal-novo-jogo');
    const btnAbrirModal = document.getElementById('btn-abrir-modal-novo-jogo');
    const btnFecharModal = document.querySelector('.modal-fechar');
    const btnCancelarForm = document.querySelector('.form-acoes .btn-cancelar');
    const formNovoJogo = document.getElementById('form-novo-jogo');

    if (containerPrincipalDosJogos) {
        containerPrincipalDosJogos.addEventListener('click', function(event) {
            const btnDeletarClicado = event.target.closest('.btn-deletar');
            if (btnDeletarClicado) {
                event.stopPropagation(); 
                const confirmou = confirm("Você tem certeza de que deseja deletar este jogo? Esta ação não pode ser desfeita.");
                if (confirmou) {
                    const idDoJogoParaDeletar = btnDeletarClicado.getAttribute('data-delete-id');
                    const indiceDoJogo = baseDeDadosJogos.findIndex(jogo => jogo.id === idDoJogoParaDeletar);
                    if (indiceDoJogo > -1) {
                        baseDeDadosJogos.splice(indiceDoJogo, 1);
                        salvarDados();
                        renderizarJogos();
                    }
                }
                return; 
            }
            const btnEditarClicado = event.target.closest('.btn-editar');
            if (btnEditarClicado) {
                event.stopPropagation(); 
                const idDoJogoParaEditar = btnEditarClicado.getAttribute('data-edit-id');
                const jogoParaEditar = baseDeDadosJogos.find(jogo => jogo.id === idDoJogoParaEditar);
                if (jogoParaEditar) abrirModalParaEditar(jogoParaEditar);
                return; 
            }
            const resumoClicado = event.target.closest('.resumo-jogo');
            if (resumoClicado) {
                const detalhesJogo = resumoClicado.nextElementSibling;
                if (detalhesJogo) {
                    detalhesJogo.classList.toggle('visivel');
                    resumoClicado.classList.toggle('detalhes-mostrando');
                    const spanToggle = resumoClicado.querySelector('span.clique-detalhes');
                    if (spanToggle) {
                        spanToggle.textContent = detalhesJogo.classList.contains('visivel') ? "(Esconder Detalhes)" : "(Ver Detalhes)";
                    }
                }
            }
        });
    }

    document.querySelectorAll('.abas-plataforma button').forEach(botao => {
        botao.addEventListener('click', function() {
            const idPlataformaAlvo = this.getAttribute('data-plataforma');
            if (idPlataformaAlvo) mostrarPlataforma(idPlataformaAlvo);
        });
    });

    document.querySelectorAll('.sub-abas-categorias button').forEach(botao => {
        botao.addEventListener('click', function() {
            const targetCompleto = this.getAttribute('data-categoria-target');
            if (targetCompleto) {
                const indiceUltimoHifen = targetCompleto.lastIndexOf('-');
                if (indiceUltimoHifen > 0) {
                    const prefixo = targetCompleto.substring(0, indiceUltimoHifen);
                    const sufixo = targetCompleto.substring(indiceUltimoHifen + 1);
                    mostrarSubCategoria(prefixo, sufixo);
                }
            }
        });
    });

    document.querySelectorAll('#filtros-pc-aquisicao .filtro-btn').forEach(botao => {
        botao.addEventListener('click', function() {
            const statusFiltrar = this.getAttribute('data-filtro-aquisicao');
            if (statusFiltrar) aplicarFiltroStatusPC(statusFiltrar, this);
        });
    });

    document.querySelectorAll('#filtros-ps-aquisicao .filtro-btn').forEach(botao => {
        botao.addEventListener('click', function() {
            const tipoAquisicaoFiltrar = this.getAttribute('data-filtro-aquisicao');
            if (tipoAquisicaoFiltrar) aplicarFiltroPSAquisicao(tipoAquisicaoFiltrar, this);
        });
    });

    document.querySelectorAll('.filtros-container[id$="-genero"] .filtro-btn').forEach(botao => {
        botao.addEventListener('click', function() {
            const plataformaPrefixo = this.getAttribute('data-plataforma-prefixo');
            const generoFiltrar = this.getAttribute('data-filtro-genero');
            if (plataformaPrefixo && generoFiltrar) aplicarFiltroGenero(plataformaPrefixo, generoFiltrar, this);
        });
    });

    if (btnAbrirModal && modal) {
        btnAbrirModal.addEventListener('click', () => {
            prepararModalParaAdicionar();
            modal.classList.add('visivel');
        });
    }
    if (btnFecharModal && modal) {
        btnFecharModal.addEventListener('click', () => {
            modal.classList.remove('visivel');
        });
    }
    if (btnCancelarForm && modal) {
        btnCancelarForm.addEventListener('click', () => {
            modal.classList.remove('visivel');
        });
    }
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.classList.remove('visivel');
        }
    });

    if (formNovoJogo) {
        formNovoJogo.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nota = document.getElementById('nota-jogo').value;
            const destaque = document.getElementById('destaque-jogo').value;
            const potencialRejogar = document.getElementById('rejogar-jogo').value;
            const dataConclusao = document.getElementById('conclusao-jogo').value;
            const comentarios = document.getElementById('comentarios-jogo').value;
            const screenshotsInput = document.getElementById('screenshots-jogo').value;
            
            let dadosAvaliacao = null;
            if (nota || destaque || potencialRejogar || dataConclusao || comentarios || screenshotsInput) {
                dadosAvaliacao = {
                    nota: nota, destaque: destaque, potencialRejogar: potencialRejogar, dataConclusao: dataConclusao, comentarios: comentarios,
                    screenshots: screenshotsInput ? screenshotsInput.split(',').map(ss => ss.trim()).filter(ss => ss) : []
                };
            }

            const idDoJogoEditando = document.getElementById('id-jogo-editando')?.value;
            if (idDoJogoEditando) {
                const indiceDoJogo = baseDeDadosJogos.findIndex(jogo => jogo.id === idDoJogoEditando);
                if (indiceDoJogo > -1) {
                    const jogoExistente = baseDeDadosJogos[indiceDoJogo];
                    jogoExistente.titulo = document.getElementById('titulo-jogo').value;
                    jogoExistente.plataforma = document.getElementById('plataforma-jogo').value;
                    jogoExistente.statusCategoria = document.getElementById('status-jogo').value;
                    jogoExistente.imagemCapa = document.getElementById('imagem-jogo').value || 'https://via.placeholder.com/120x180.png?text=Sem+Capa';
                    jogoExistente.dataLancamento = document.getElementById('data-lancamento-jogo').value || 'Não definida';
                    const generosInput = document.getElementById('generos-jogo').value;
                    jogoExistente.generos = generosInput ? generosInput.split(',').map(g => g.trim()).filter(g => g) : [];
                    jogoExistente.avaliacao = dadosAvaliacao;
                }
            } else {
                const plataformaSelecionada = document.getElementById('plataforma-jogo').value;
                const generosInput = document.getElementById('generos-jogo').value;
                const novoJogo = {
                    id: 'jogo-' + Date.now(),
                    titulo: document.getElementById('titulo-jogo').value,
                    plataforma: plataformaSelecionada,
                    statusCategoria: document.getElementById('status-jogo').value,
                    dataLancamento: document.getElementById('data-lancamento-jogo').value || 'Não definida',
                    imagemCapa: document.getElementById('imagem-jogo').value || 'https://via.placeholder.com/120x180.png?text=Sem+Capa',
                    statusPC: plataformaSelecionada === 'pc' ? 'tenho' : null,
                    tipoAquisicaoPS: null,
                    generos: generosInput ? generosInput.split(',').map(g => g.trim()).filter(g => g) : [],
                    avaliacao: dadosAvaliacao 
                };
                if (!novoJogo.titulo || !novoJogo.plataforma || !novoJogo.statusCategoria) {
                    alert("Por favor, preencha pelo menos o Título, Plataforma e Status.");
                    return;
                }
                baseDeDadosJogos.push(novoJogo);
            }
            salvarDados();
            renderizarJogos();
            modal.classList.remove('visivel');
        });
    }

    // Inicialização da página
    mostrarPlataforma('pc'); 
});