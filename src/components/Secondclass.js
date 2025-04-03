import { useEffect } from 'react';
import '../css/still.css';
import { NavLink } from 'react-router-dom';
const SecondclassName = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
        link.integrity = 'sha384-QWTK2YjpPpEj1SV5WaRU90FeRpok6Y...';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link); // chiqishda tozalaydi
        };
    }, []);
    return (
        <>
            <section className="section-padding pt-0 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <b>2-sinf <u>1-chorak</u></b>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {/* 1-mavzu */}
                                        <figure className="text-center">
                                            <blockquote className="blockquote">
                                                <p>Mavzu: Unli va undosh tovushlar</p>
                                            </blockquote>
                                            <NavLink to="/2-sinf/1-chorak/unli-va-undosh-tovushlar/eng-oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Eng oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/1-chorak/unli-va-undosh-tovushlar/oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/1-chorak/unli-va-undosh-tovushlar/sal-murakkab">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Sal murakkab” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                        </figure>
                                        {/* 2-mavzu */}
                                        <figure className="text-center">
                                            <blockquote className="blockquote">
                                                <p>Mavzu: Harf birikmasi bilan ifodalangan undoshlar</p>
                                            </blockquote>
                                            <NavLink to="/2-sinf/1-chorak/harf-birikmasi-bilan-ifodalangan-undoshlar/eng-oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Eng oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/1-chorak/harf-birikmasi-bilan-ifodalangan-undoshlar/oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/1-chorak/harf-birikmasi-bilan-ifodalangan-undoshlar/sal-murakkab">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Sal murakkab” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <b>2-sinf <u>2-chorak</u></b>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                                                                {/* 1-mavzu */}
                                                                                <figure className="text-center">
                                            <blockquote className="blockquote">
                                                <p>Mavzu: Tutuq belgisi haqida bilib olamiz</p>
                                            </blockquote>
                                            <NavLink to="/2-sinf/2-chorak/tutuq-belgisi-haqida-bilib-olamiz/eng-oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Eng oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/2-chorak/tutuq-belgisi-haqida-bilib-olamiz/oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/2-chorak/tutuq-belgisi-haqida-bilib-olamiz/sal-murakkab">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Sal murakkab” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                        </figure>
                                        {/* 2-mavzu */}
                                        <figure className="text-center">
                                            <blockquote className="blockquote">
                                                <p>Mavzu: So‘z ichida yonma-yon kelgan bir xil undoshlar talaffuzi va imlosini o‘rganamiz</p>
                                            </blockquote>
                                            <NavLink to="/2-sinf/2-chorak/soz-ichida-yonma-yon-kelgan-bir-xil-undoshlar-talaffuzi-va-imlosini-organamiz/eng-oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Eng oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/2-chorak/soz-ichida-yonma-yon-kelgan-bir-xil-undoshlar-talaffuzi-va-imlosini-organamiz/oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/2-chorak/soz-ichida-yonma-yon-kelgan-bir-xil-undoshlar-talaffuzi-va-imlosini-organamiz/sal-murakkab">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Sal murakkab” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                        </figure>
                                        {/* 3-mavzu */}
                                        <figure className="text-center">
                                            <blockquote className="blockquote">
                                                <p>Mavzu: So‘zning ma’nolarini o‘rganamiz</p>
                                            </blockquote>
                                            <NavLink to="/2-sinf/2-chorak/sozning-manolarini-organamiz/eng-oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Eng oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/2-chorak/sozning-manolarini-organamiz/oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/2-chorak/sozning-manolarini-organamiz/sal-murakkab">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Sal murakkab” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <b>2-sinf <u>3-chorak</u></b>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                                                                                                        {/* 1-mavzu */}
                                                                                                                        <figure className="text-center">
                                            <blockquote className="blockquote">
                                                <p>Mavzu: Gap</p>
                                            </blockquote>
                                            <NavLink to="/2-sinf/3-chorak/gap/eng-oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Eng oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/3-chorak/gap/oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/3-chorak/gap/sal-murakkab">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Sal murakkab” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                        </figure>
                                        {/* 2-mavzu */}
                                        <figure className="text-center">
                                            <blockquote className="blockquote">
                                                <p>Mavzu: Gapning asosi</p>
                                            </blockquote>
                                            <NavLink to="/2-sinf/3-chorak/gapning-asosi/eng-oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Eng oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/3-chorak/gapning-asosi/oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/3-chorak/gapning-asosi/sal-murakkab">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Sal murakkab” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <b>2-sinf <u>4-chorak</u></b>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                                                                                                                                                {/* 1-mavzu */}
                                                                                                                                                          <figure className="text-center">
                                            <blockquote className="blockquote">
                                                <p>Mavzu: Eng yaxshi ixtirolar</p>
                                            </blockquote>
                                            <NavLink to="/2-sinf/4-chorak/eng-yaxshi-ixtirolar/eng-oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Eng oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/4-chorak/eng-yaxshi-ixtirolar/oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/4-chorak/eng-yaxshi-ixtirolar/sal-murakkab">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Sal murakkab” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                        </figure>
                                        {/* 2-mavzu */}
                                        <figure className="text-center">
                                            <blockquote className="blockquote">
                                                <p>Mavzu: Gapning asosi</p>
                                            </blockquote>
                                            <NavLink to="/2-sinf/3-chorak/gapning-asosi/eng-oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Eng oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/3-chorak/gapning-asosi/oson">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                            <NavLink to="/2-sinf/3-chorak/gapning-asosi/sal-murakkab">
                                                <h5>
                                                    <figcaption className="blockquote-footer">
                                                        “Sal murakkab” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
                                                    </figcaption>
                                                </h5>
                                            </NavLink>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SecondclassName;