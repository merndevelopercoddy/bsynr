import kategoriya2222 from './images/kategoriya2222.jpg'
const Kategoriya2222 = () => {
    return (
        <div style={{ fontFamily: "Times New Roman", fontSize: "14pt" }} className="container mt-5">
            <h3 className="text-center text-primary">
                2-sinf 2-chorak<br />
                Mavzu: So‘z ichida yonma-yon kelgan bir xil undoshlar talaffuzi va imlosini o‘rganamiz<br />
“Oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
            </h3>
            <b>1-mashq. Berilgan so‘zlarni o‘qing va to‘g‘ri yozilganlarining tagiga bir chiziq chizing.</b><br />
            <i>Ta’limiy maqsad:</i> O‘quvchilarning yona-yon kelgan undoshlar imlosi ustida ishlash ko‘nikmalarini rivojlantirish.<br />
            <i>Mashg‘ulot davomiyligi:</i> 3 daqiqa <br />
            <p>Million, masaliq, murakab, murabbo, musaffo, mula, mitti, miliy.</p>
            <p><b>2-mashq. Juftlikda ishlang. Quyidagi jadvalni namunadagidek davom ettiring.</b></p>
            <p><i>Ta'limiy maqsad:</i>O‘quvchilarning so‘zlar imlosi ustida ishlash ko‘nikmalarini rivojlantirish.</p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa</p>
            <img src={kategoriya2222} alt="kategoriya2222" className="img-thumbnail" />
            <p><b>3-mashq. Quyidagi so‘zlarning ma’nosini izohlang. </b></p>
            <p><i>Ta’limiy maqsad:</i>O‘quvchilarning so‘zlar ma’nosi ustida ishlash ko‘nikmalarini rivojlantirish.</p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa.</p>
            <p className="text-break">Massa - _______________________________________________________</p>
            <p className="text-break">Mukammal - _____________________________________________________</p>
            <p className="text-break">Mahalla - _______________________________________________________</p>
            <p className="text-break">Attraksion - ____________________________________________________</p>
        </div>
    )
}
export default Kategoriya2222;