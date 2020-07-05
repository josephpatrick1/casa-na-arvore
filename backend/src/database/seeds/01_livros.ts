import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("livros").insert([
        {
            titulo: "O Pequeno Príncipe",
            descricao: "O Pequeno Príncipe é uma obra literária do escritor francês Antoine de Saint-Exupéry, que conta a história da amizade entre um homem frustrado por ninguém compreender os seus desenhos, com um principezinho que habita um asteroide no espaço.",
            arquivo_url: "opequenoprincipe.jpg",
            autor: "Antoine de Saint-Exupéry",
            editora: "Gallimard"
        },
        {
            titulo: "De Mal a Pior",
            editora: "Hoo Editora",
            arquivo_url: "demalapior.jpg",
            autor: "Simon James Green",
            descricao: "Pobre Noah Grimes! Seu pai desapareceu há anos, o tributo de homenagem à Beyoncé de sua mãe é um embaraço inaceitável e sua amada avó já não é ela mesma. Ele só tem um amigo, o Harry, e a escola é... bem, é um INFERNO. Por que Noah não pode ser normal, como todos os outros na escola? Talvez, se ele conseguisse namorar com alguém - a perfeita e encantadora Sophie -, ele seria um garoto mais 'aceitável'? Mas os planos de Noah desmoronam quando Harry o beija em uma festa. É aí que as coisas vão de ruim a um absoluto caos. Se você acha que sua vida é difícil, definitivamente você deveria conhecer o dia a dia do Noah, mas não esqueça de cerca-se de amuletos para espantar a má sorte."
        },
        {
            titulo: "Palavras Em Azul Profundo",
            descricao: "A vida é formada por palavras. Escritas, pronunciadas e até não ditas. Palavras como as que podem ser encontradas na Biblioteca de Cartas da Howling Books, o sebo da família Jones. Mais do que livros e suas histórias, aquele lugar conta sobre pessoas. E sobre Rachel Sweetie e Henry Jones. Eles costumavam ser melhores amigos, nada poderia separá-los. Até que Amy chegou e Rachel partiu com um amor não correspondido. Três anos se passaram. Rachel perdeu o irmão para a imensidão azul do mar, fazendo-a regressar para Gracetown. Lá, Henry também está à deriva. Os pais dele estão separados, Amy acabou de deixá-lo e a Howling Books está chegando ao seu ponto final. Sentimentos profundos permearão o reencontro dos dois. E, cercados por livros e suas histórias, Rachel e Henry terão a chance de reconstruir sua amizade e de tocar as palavras que há muito foram perdidas.",
            arquivo_url: "palavrasemazulprofundo.jpg",
            autor: "Cath Crowley",
            editora: "Plataforma 21"
        },
        {
            titulo: "O Herói Perdido",
            descricao: "Novos e conhecidos personagens do Acampamento Meio-Sangue dividem espaço nesse primeiro volume da série Os heróis do Olimpo. Rick Riordan volta ao universo de Percy Jackson e os Olimpianos com ainda mais aventuras, humor e mistério. Depois de salvar o Olimpo do maligno titã Cronos, Percy Jackson e seus amigos trabalharam duro para reconstruir seu mais querido refúgio, o Acampamento Meio-Sangue. É lá que a próxima geração de semideuses terá de se preparar para enfrentar uma nova e aterrorizante profecia. Os campistas seguirão firmes na inevitável jornada, mas, para sobreviver, precisarão contar com a ajuda de alguns heróis, digamos, um pouco mais experientes – semideuses dos quais todos já ouvimos falar… e muito.",
            arquivo_url: "oheroiperdido.jpg",
            autor: "Rick Riordan",
            editora: "Intrínseca"
        },
        {
            titulo: "O Oráculo Oculto",
            descricao: "Como você pune um deus imortal? Transformando-o em humano, claro! Depois de despertar a fúria de Zeus por causa da guerra com Gaia, Apolo é expulso do Olimpo e vai parar na Terra, mais precisamente em uma caçamba de lixo em um beco sujo de Nova York. Fraco e desorientado, ele agora é Lester Papadopoulos, um adolescente mortal com cabelo encaracolado, espinhas e sem abdome tanquinho. Sem seus poderes, a divindade de quatro mil anos terá que descobrir como sobreviver no mundo moderno e o que fazer para cair novamente nas graças de Zeus.",
            arquivo_url: "ooraculooculto.jpg",
            autor: "Rick Riordan",
            editora: "Intrínseca"
        },
        {
            titulo: "À Beira da Eternidade",
            descricao: "Mistério, romance, drama e viagem no tempo no primeiro livro de Melissa E. Hurst. 2146. Bridger é uma das poucas pessoas com a habilidade de viajar de volta ao passado. Uma habilidade que lhe foi passada pelo pai, cuja morte – envolta em mistério – o garoto tenta superar. Aos poucos, sua vida parece voltar ao normal... Até que o garoto encontra o pai em uma de suas viagens no tempo com a turma. Ele só tem tempo de lhe passar uma mensagem: Salve Alora. Bridger não tem ideia de quem seja a garota, nem de onde ela está ou em que tempo vive, mas está determinado a realizar o último pedido do pai. 2013. Alora Walker tem apagões inexplicáveis. Ela acorda toda vez em um lugar diferente, e não tem ideia de como chegou lá. A única coisa de que tem certeza é que está sendo seguida. Mas por quem?",
            arquivo_url: "abeiradaeternidade.jpg",
            autor: "Melissa E. Hurst",
            editora: "Galera"
        }
    ])
}