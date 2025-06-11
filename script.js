// ===== LÓGICA DE DADOS: CARREGAR DO LOCALSTORAGE OU USAR PADRÃO =====
let dadosSalvosString = localStorage.getItem('meuGameLogDados');
let baseDeDadosJogos;

if (dadosSalvosString) {
    baseDeDadosJogos = JSON.parse(dadosSalvosString);
} else {
    baseDeDadosJogos = [
        { id: 'pc01', titulo: 'Cyber Odyssey', plataforma: 'pc', statusCategoria: 'jj', dataLancamento: '15/07/2024', imagemCapa: 'https://cdn.coverstand.com/52819/754139/medium/hr_b1704e3230f4f893999084533997560d18198643.jpg', statusPC: 'tenho', tipoAquisicaoPS: null, generos: ['rpg', 'acao', 'misterio'], avaliacao: { nota: '8.5/10', destaque: 'A missão "Neon Serpent" foi espetacular em design e narrativa.', potencialRejogar: 'Médio (a história principal é linear, mas há builds diferentes para testar).', dataConclusao: '01/03/2025', comentarios: 'Uma aventura cyberpunk imersiva com uma história intrigante, mas alguns bugs persistentes. A customização de personagens é um ponto alto.', screenshots: [ 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80', 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' ] } },
        { id: 'ps01', titulo: 'Herói Estelar', plataforma: 'ps', statusCategoria: 'jj', dataLancamento: '05/05/2024', imagemCapa: 'https://api.deepai.org/job-view-file/d7c8db28-2e65-4c21-9568-99b3011ad63e/outputs/output.jpg', statusPC: null, tipoAquisicaoPS: 'plus', generos: ['aventura', 'fantasia'], avaliacao: { nota: '9/10', destaque: 'O confronto com o Dragão de Cristal.', potencialRejogar: 'Alto (muitos colecionáveis e missões secundárias).', dataConclusao: '20/02/2025', comentarios: 'Uma jornada épica com personagens carismáticos e um mundo vibrante. A jogabilidade é fluida e viciante.', screenshots: [ 'https://images.unsplash.com/photo-1609804299890-235309123718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=120&q=80' ] } },
        { id: 'pc02', titulo: 'Exploradores do Vazio', plataforma: 'pc', statusCategoria: 'ej', dataLancamento: '10/01/2025', imagemCapa: 'https://img.freepik.com/fotos-premium/uma-nave-espacial-voa-atraves-de-uma-nebulosa-em-um-planeta-distante_990942-263.jpg', statusPC: 'tenho', tipoAquisicaoPS: null, generos: ['simulacao', 'espaco'], avaliacao: null },
        { id: 'ps02', titulo: 'Aventura Lunar', plataforma: 'ps', statusCategoria: 'ej', dataLancamento: '11/11/2024', imagemCapa: 'https://img.freepik.com/fotos-premium/um-astronauta-esta-em-um-planeta-com-a-lua-ao-fundo_882954-26580.jpg', statusPC: null, tipoAquisicaoPS: 'comprado-digital', generos: ['aventura', 'espaco'], avaliacao: null }
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