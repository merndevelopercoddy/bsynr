import kategoriya2232 from './images/kategory2232.jpg'
const Kategoriya2232 = () => {
    return (
        <div style={{ fontFamily: "Times New Roman", fontSize: "14pt" }} className="container mt-5">
            <h3 className="text-center text-primary">
                2-sinf 2-chorak<br />
                Mavzu: So‘zning ma’nolarini o‘rganamiz<br />
“Oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
            </h3>
            <b>1-mashq. Berilgan gaplarni o‘qing va nuqtalar o‘rniga mazmunga mos so‘zni qo‘ying. </b><br />
            <i>Ta’limiy maqsad:</i> O‘quvchilarning so‘zlar ma’nosi ustida ishlash ko‘nikmalarini rivojlantirish.<br />
            <i>Mashg‘ulot davomiyligi:</i> 3-4 daqiqa <br />
            <p>Boboning … (rubob, tanbur) chertishini ko‘rgan nabira unga havas bilan boqdi.</p>
            <p>Chaqaloq … (irillashi, chinqirig‘i, ovozi) butun hovlini tutib ketdi.</p>
            <p><b>2-mashq. Juftlikda ishlang. Quyidagi jadvalni namunadagidek davom ettiring.</b></p>
            <p><i>Ta'limiy maqsad:</i>O‘quvchilarning so‘zlar ma’nosi haqidagi bilimlarini rivojlantirish.</p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa</p>
            <img src={kategoriya2232} alt="kategoriya2222" className="img-thumbnail" />
            <p><b>3-mashq. Quyidagi so‘zlarning ma’nosini izohlang. </b></p>
            <p><i>Ta’limiy maqsad:</i>O‘quvchilarning so‘zlar ma’nosi ustida ishlash ko‘nikmalarini rivojlantirish.</p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa.</p>
            <p className="text-break">Matonat - _______________________________________________________</p>
            <p className="text-break">Muzqaymoq- _____________________________________________________</p>
            <p className="text-break">Mard - _______________________________________________________</p>
            <p className="text-break">Hayvonot bog‘i - __________________________________________________</p>
        </div>
    )
}
export default Kategoriya2232;