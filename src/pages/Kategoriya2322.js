import kategoriya2322 from './images/kategory2322.jpg';
import kategoriya2322_2 from './images/kategory2322-2.jpg';
const Kategoriya2322 = () => {
    return (
        <div style={{ fontFamily: "Times New Roman", fontSize: "14pt" }} className="container mt-5">
            <h3 className="text-center text-primary">
                2-sinf 3-chorak<br />
                Mavzu: Gapning asosi<br />
“Oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
            </h3>
            <b>1-mashq. Quyidagi so‘zlarni mazmunan moslashtiring. </b><br />
            <i>Ta’limiy maqsad:</i> O‘quvchilarning gap asosi haqidagi ko‘nikmalarini rivojlantirish.<br />
            <i>Mashg‘ulot davomiyligi:</i> 3-4 daqiqa <br />
            <img src={kategoriya2322} alt="kategoriya2322" className="img-thumbnail" />
            <p><b>2-mashq. Juftlikda ishlang. Quyidagi jadvalda berilgan so‘zlarning ma’nodoshlarini yozing.</b></p>
            <p><i>Ta'limiy maqsad:</i>O‘quvchilarning gapning grammatik asosi (kesim) haqidagi ko‘nikmalarini rivojlantirish.</p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa</p>
            <img src={kategoriya2322_2} alt="kategoriya2322_2" className="img-thumbnail" />
            <p><b>3-mashq. FDM usulidan foydalanib, nima qildi?, nima qilyapti? so‘roqlariga javob bo‘lgan so‘zlar haqida fikrlar yozing.</b></p>
            <p><i>Ta’limiy maqsad:</i>O‘quvchilarning bog‘lanishli nutqini rivojlantirish ko‘nikmalarini rivojlantirish.</p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa.</p>
            <p className="text-break">Fikr - ___________________________________________________________</p>
            <p className="text-break">Dalil - __________________________________________________________</p>
            <p className="text-break">Misol - _______________________________________________________</p>
        </div>
    )
}
export default Kategoriya2322;