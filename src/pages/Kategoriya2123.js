import kategory2123 from './images/kategory2123.jpg'
const Kategoriya2123 = () => {
    return (
        <div style={{ fontFamily: "Times New Roman", fontSize: "14pt" }} className="container mt-5">
            <h3 className="text-center text-primary">
                2-sinf 1-chorak<br />
                Mavzu: Harf birikmasi bilan ifodalangan undoshlar <br />
“Sal murakkab” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
            </h3>
            <b>1-mashq. Quyida berilgan so‘zlarni o‘qing va bo‘g‘inlarga bo‘ling.</b><br />
            <i>Ta’limiy maqsad:</i> O‘quvchilarning so‘z ustida ishlash ko‘nikmalarini rivojlantirish.<br />
            <i>Mashg‘ulot davomiyligi:</i> 3-4 daqiqa <br />
            <p>Tashakkurnoma, uchburchak, ko‘ngil, dengiz, sholg‘omsho‘rva, sho‘rtumshuq, chanqovbosdi, chilonjiyda, chaqirtikanak.</p>
            <p><b>2-mashq. Juftlikda ishlang. Quyidagi so‘zlarni ikki guruhga: ijobiy va salbiy so‘zlarga ajrating.</b></p>
            <p><i>Ta’limiy maqsad:</i> O‘quvchilarning so‘z ustida ishlash ko‘nikmalarini rivojlantirish. </p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa.</p>
            <p>Chalasavod, sho‘rpeshona, xumbosh, shirinso‘z, xomsemiz, oliyjanob, vatanparvar, shumqadam, kamsuqum, mehnatsevar.</p>
            <p>Namuna:</p>
            <table className="w-100">
                <thead>
                    <tr>
                        <th>Ijobiy so‘zlar:</th>
                        <th>Salbiy so‘zlar:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>kamgap</td>
                        <td>kaltafahm</td>
                    </tr>
                </tbody>
            </table>
            <p><b> 3-mashq. Juftlikda ishlang. Quyidagi iboralarning ma’nosini toping.</b></p>
            <p><i>Ta’limiy maqsad:</i>O‘quvchilarning iboralar ustida ishlash ko‘nikmalarini rivojlantirish.</p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa.</p>
            <img src={kategory2123} alt="kategory2123" className="img-thumbnail" />
        </div>
    )
}
export default Kategoriya2123;