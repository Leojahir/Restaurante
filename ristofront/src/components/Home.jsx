import React from 'react';
import nosotrosImage from '../imagenes/nosotros.jfif';
import carnePapas from '../imagenes/carne_papas.jpg';
import charchican from '../imagenes/charchican.webp';
import costillar from '../imagenes/costillar.webp';
import pescadoFrito from '../imagenes/pescado_frito.webp';
import vinos5 from '../imagenes/vinos5.webp';
import vinos6 from '../imagenes/vinos6.webp';

const Home = () => {
    return (
        <>
            <section className="dis-sto">
                <div className="container">
                    <div className="res-info">
                        <div>
                            <img src={nosotrosImage} alt="Nosotros" />
                        </div>
                        <div className="res-des pad-rig">
                            <div className="global">
                                <h2 className="h2-sub">
                                    <span className="fil">D</span>escubre
                                </h2>
                                <h1 className="head hea-dark">Nuestra Historia</h1>
                                <div className="circle">
                                    <i className="fas fa-circle"></i>
                                </div>
                            </div>
                            <p>
                                Sabores Gourmet, establecido en 2000, es un restaurante
                                de comida Chilena ubicado en Providencia, cerca de la Alameda. Este
                                lugar encantador combina la tradición culinaria de Chile
                                con un toque moderno y sofisticado. Su menú diverso ofrece
                                platos emblemáticos con sabores auténticos, presentados de
                                manera impecable. Una experiencia culinaria única que no
                                te puedes perder.
                            </p>
                            <a href="#" className="btn cta-btn">Delivery</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="taste bt">
                <div className="container">
                    <div className="global">
                        <h2 className="h2-sub">
                            <span className="fil">N</span>uestra Especialidad
                        </h2>
                        <h1 className="head">La Parrilla</h1>
                    </div>
                </div>
            </section>
            <section className="disco">
                <div className="container">
                    <div className="res-info">
                        <div className="res-des">
                            <div className="global">
                                <h2 className="h2-sub">
                                    <span className="fil">D</span>escubre
                                </h2>
                                <h1 className="head hea-dark">Nuestro Menu</h1>
                                <div className="circle">
                                    <i className="fas fa-circle"></i>
                                </div>
                            </div>
                            <p>
                                Ofrecemos una variedad de platos chilenos excepcionales
                                que fusionan la tradición culinaria con la
                                creatividad moderna. Desde las empanadas
                                crujientes y sabrosas hasta los exquisitos
                                pescados y mariscos frescos, cada plato es
                                una obra maestra gastronómica. Con una selección
                                cuidadosa de ingredientes de calidad y una
                                presentación impecable. Además,
                                su carta de vinos cuenta con una cuidada
                                selección de etiquetas de las mejores viñas
                                del país, complementando a la perfección las
                                delicias culinarias que se ofrecen.
                            </p>
                            <a href="#" className="btn cta-btn">Menu</a>
                        </div>
                        <br />
                        <br />
                        <div className="image-group pad-rig">
                            <img src={carnePapas} alt="Carne con Papas" />
                            <img src={charchican} alt="Charchican" />
                            <img src={costillar} alt="Costillar" />
                            <img src={pescadoFrito} alt="Pescado Frito" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb bt">
                <div className="container">
                    <div className="global">
                        <h2 className="h2-sub">
                            <span className="fil">P</span>ara Acompañar
                        </h2>
                        <h1 className="head">Carta de Vinos</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="res-info">
                        <div className="image-group">
                            <img src={vinos5} alt="Vinos 5" />
                            <img src={vinos6} alt="Vinos 6" />
                        </div>
                        <div className="res-des pad-rig">
                            <div className="global">
                                <h2 className="h2-sub">
                                    <span className="fil">D</span>egusta
                                </h2>
                                <h1 className="head hea-dark">Nuestros Vinos</h1>
                                <div className="circle">
                                    <i className="fas fa-circle"></i>
                                </div>
                            </div>
                            <p>
                                La carta de vinos en Sabores Gourmet
                                ofrece una selección cuidadosa de etiquetas
                                provenientes de las mejores viñas chilenas.
                                Desde tintos robustos y elegantes hasta
                                blancos refrescantes, hay opciones para
                                satisfacer todos los paladares. Cada vino
                                ha sido escogido con esmero para complementar
                                los sabores de los platos del restaurante,
                                brindando una experiencia armoniosa y
                                placentera. Ya sea que prefieras un tinto
                                encorpado para maridar con una carne a la
                                parrilla o un blanco afrutado para acompañar
                                mariscos frescos.
                            </p>
                            <a href="#" className="btn cta-btn">Carta de Vinos</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;