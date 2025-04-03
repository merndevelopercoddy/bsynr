import kategoriya2231 from './images/kategory2231.jpg'
const Kategoriya2231 = () => {
    return (
        <div style={{ fontFamily: "Times New Roman", fontSize: "14pt" }} className="container mt-5">
            <h3 className="text-center text-primary">
                2-sinf 2-chorak<br />
                Mavzu: So‘zning ma’nolarini o‘rganamiz <br />
“Eng oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
            </h3>
            <b>1-mashq. Berilgan so‘zlarni ma’nosiga ko‘ra birlashtiring.</b><br />
            <i>Ta’limiy maqsad:</i> O‘quvchilarning leksik ko‘nikmalarini rivojlantirish. <br />
            <i>Mashg‘ulot davomiyligi:</i> 3 daqiqa.<br />
            <img src={kategoriya2231} alt="kategoriya2231" className="img-thumbnail" />
            <p><b>2-mashq. Juftlikda ishlang. Ma’nosi izohlangan so‘zni yozing.</b></p>
            <p><i>Ta’limiy maqsad:</i> O‘quvchilarning so‘zlarning leksik ma’nosi ustida ishlash ko‘nikmalarini rivojlantirish.</p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa.</p>
            <p>Qizlar oyoq kiyimi - ____________________</p>
            <p>Oila-a’zolar yashaydigan joy - _______________</p>
            <p><b>3-mashq. Tez aytishni o‘qing va ajratib ko‘rsatilgan so‘zlar ma’nosini izohlang.</b></p>
            <p><i>Ta’limiy maqsad:</i>O‘quvchilarning leksik ko‘nikmalarini rivojlantirish.</p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa.</p>
            <p className="text-break">Shodmon <b>shogirdini</b> shoshirdi. ______________________________________</p>
        </div>
    )
}
export default Kategoriya2231;