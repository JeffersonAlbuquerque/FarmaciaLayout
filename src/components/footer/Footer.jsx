import s from "./footer.module.scss"

import appSt from "../../assets/appstore.png"
import gPlay from "../../assets/gPlay.png"


import fc from "../../assets/redesSociais/fc.png"
import ig from "../../assets/redesSociais/ig.png"
import lk from "../../assets/redesSociais/lk.png"
import tt from "../../assets/redesSociais/tt.png"
import yt from "../../assets/redesSociais/yt.png"

import pgto from "../../assets/formaPgto.png"



export default function Footer() {
    return (
        <footer>
            <section>
                <div className={s.footer_contato}>
                    <div className={s.numero}>
                        <p>Fala com a Pague Menos</p>
                        <p>Conheça nossos telefones</p>
                    </div>
                    <div className={s.wpp}>
                        <img src="" alt="" />
                        <div className={s.numero}>
                            <p>Televendas - 06h00 às 23h00</p>
                            <p>4002-8282</p>
                        </div>
                    </div>

                    <div className={s.numero}>
                        <p>Atendimento ao cliente</p>
                        <p>0800 275 1313</p>
                    </div>

                    <div className={s.numero}>
                        <p>Em caso de dúvidas</p>
                        <a href="">Acesse nossa FAQ</a>
                        <p>Horário do SAC das 07:00 as 23:00</p>
                    </div>
                </div>
                <div className={s.footer_servicos}>
                    <div className={s.servicos}>
                        <p>Serviços</p>
                        <a href="">Cliente Ouro</a>
                        <a href="">Clique e Retire</a>
                        <a href="">Serviços de Saúde</a>
                        <a href="">Serviço de Manipulação</a>
                        <a href="">Programa de Assinaturas</a>
                        <a href="">Parceiros Pague Menos</a>
                        <a href="">Remédios para Emagrecer</a>
                        <a href="">Remédios para Ressaca</a>
                    </div>

                    <div className={s.servicos}>
                        <p>Institucional</p>
                        <a href="">Minha Pague Menos</a>
                        <a href="">Pague Menos Institucional</a>
                        <a href="">Realção com Investidores</a>
                        <a href="">Portal ESG</a>
                        <a href="">Trabalhe Conosco</a>
                        <a href="">Plataforma Sempre Bem</a>
                        <a href="">Nossas Lojas</a>
                        <a href="">Mapa do Site</a>
                    </div>

                    <div className={s.servicos}>
                        <p>Atendimento</p>
                        <a href="">Perguntas Frequentes</a>
                        <a href="">Minha Conta/ Meus pedidos</a>
                        <a href="">Código de Defesa do Consumidor</a>
                        <a href="">Aviso de Privacidade</a>
                        <a href="">Política de Troca e Devolução</a>
                        <a href="">Políticas de Entrega</a>
                        <a href="">Regulamento de Promoções</a>
                        <a href="">Regulamento do Programa de Fidelidade</a>
                    </div>

                    <div className={s.download}>
                        <p>Baixe Nosso App</p>

                        <div className={s.apps}>
                            <a href="#">
                                <img src={gPlay} alt="" />
                            </a>
                            <a href="#">
                                <img src={appSt} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={s.formaPgto}>
                    <div className={s.formas}>
                        <p>Formas de Pagamento</p>
                        <img src={pgto} alt="" />
                    </div>

                    <div className={s.redes}>
                        <a href="">
                            <img src={fc} alt="" />
                        </a>
                        <a href="">
                            <img src={ig} alt="" />
                        </a>
                        <a href="">
                            <img src={lk} alt="" />
                        </a>
                        <a href="">
                            <img src={tt} alt="" />
                        </a>
                        <a href="">
                            <img src={yt} alt="" />
                        </a>
                    </div>
                </div>

                <div className={s.informativo}>
                    <p>Empreendimentos Pague Menos S/A; CNPJ: 06.626.253/0001-51 | Rua Senador Pompeu, 1520, Centro, Fortaleza-CE; CEP: 60.025-001 | Telefones: 0800 275 1313 e 4002-8282 | Horário de funcionamento da filial: 24h | Farmacêutico(a) responsável pelo SAC: Ana Eloá da Silva Pinheiro - CRF: 5959
                        Registro Sanitário nº LS00032234/2022 | AFE: 0280418
                        As promoções expostas nesse site são válidas por tempo determinado ou enquanto durar o estoque.</p>
                </div>

            </section>

        </footer>
    )
}