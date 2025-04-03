import kategoriya2321 from './images/kategory2321.jpg'
const Kategoriya2321 = () => {
    return (
        <div style={{ fontFamily: "Times New Roman", fontSize: "14pt" }} className="container mt-5">
            <h3 className="text-center text-primary">
                2-sinf 3-chorak<br />
                Mavzu: Gapning asosi <br />
“Eng oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
            </h3>
            <b>1-mashq. Quyidagi chiqziqlar o‘rniga so‘zlar qo‘ying va so‘z birikmasi yarating. </b><br />
            <i>Ta’limiy maqsad:</i> O‘quvchilarning so‘z birikmalari haqidagi ko‘nikmalarini rivojlantirish.<br />
            <i>Mashg‘ulot davomiyligi:</i> 3-4 daqiqa.<br />
            <p>__________________ taxtani randalaydi.</p>
            <p>Bugun _______________ bemor sog‘ayganini his qildi.</p>
            <p>Kichik ______________ har doim muzqaymoq yeyishni yaxshi ko‘radi.</p>
            <p>Mehrsiz _____________, yurak emas.</p>
            <p><b>2-mashq. Juftlikda ishlang. Quyidagi jadvalni namunadagidek davom ettiring.</b></p>
            <p><i>Ta’limiy maqsad:</i> O‘quvchilarning gapning grammatik asosi haqidagi ko‘nikmalarini rivojlantirish.</p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa.</p>
            <img src={kategoriya2321} alt="kategoriya2321" className="img-thumbnail" />
            <p><b>3-mashq. FDM usulidan foydalanib, kimlar?, nimalar? so‘roqlariga javob bo‘lgan so‘zlar haqida fikrlar yozing.</b></p>
            <p><i>Ta’limiy maqsad:</i>O‘quvchilarning bog‘lanishli nutqini rivojlantirish ko‘nikmalarini rivojlantirish.</p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa.</p>
            <p className="text-break">Fikr - ___________________________________________________________</p>
            <p className="text-break">Dalil - __________________________________________________________</p>
            <p className="text-break">Misol - _______________________________________________________</p>
        </div>
    )
}
export default Kategoriya2321;