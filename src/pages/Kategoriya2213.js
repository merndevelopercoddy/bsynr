import kategory2213 from './images/kategory2213.jpg'
const Kategoriya2213 = () => {
    return (
        <div style={{ fontFamily: "Times New Roman", fontSize: "14pt" }} className="container mt-5">
            <h3 className="text-center text-primary">
                2-sinf 2-chorak<br />
                Mavzu: Tutuq belgisi haqida bilib olamiz <br />
“Sal murakkab” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
            </h3>
            <b>1-mashq. Juftlikda ishlang. So‘zlarni mazmunan biriktiring.</b><br />
            <i>Ta’limiy maqsad:</i> O‘quvchilarning so‘z birikmasi ustida ishlash ko‘nikmalarini rivojlantirish.<br />
            <i>Mashg‘ulot davomiyligi:</i> 3-4 daqiqa <br />
            <img src={kategory2213} alt="ketegoriya2213" className="img-thumbnail" />
            <p><b>2-mashq. Juftlikda ishlang. Quyida berilgan iboralar ma’nosini izohlang va gaplar tuzing.</b></p>
            <p><i>Ta’limiy maqsad:</i> O‘quvchilarning gap ustida ishlash ko‘nikmalarini rivojlantirish.</p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa.</p>
            <p className="text-break">Fe’li aynimoq - _______________________________________________________________________________________________________________
</p>
            <p className="text-break">Fe’li keng - ________________________________________________________________________________________________________________
</p>
            <p><b> 3-mashq. FDM usuli asosida ibora ma’nosi haqida fikr yuriting.</b></p>
            <p><i>Ta’limiy maqsad:</i>O‘quvchilarning bog‘lanishli nutqini rivojlantirish ko‘nikmalarini rivojlantirish.</p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa.</p>
            <p className="text-center">Fig‘oni falakka chiqmoq</p>
            <p className="text-break">Fikr - ___________________________________________________________</p>
            <p className="text-break">Dalil - _________________________________________________________</p>
            <p className="text-break">Misol - _______________________________________________________</p>
        </div>
    )
}
export default Kategoriya2213;