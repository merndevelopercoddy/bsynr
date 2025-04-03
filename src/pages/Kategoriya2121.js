import kategory2121 from "./images/kategory2121.jpg";
const Kategoriya2121 = () => {
    return (
        <div style={{ fontFamily: "Times New Roman", fontSize: "14pt" }} className="container mt-5">
            <h3 className="text-center text-primary">
                2-sinf 1-chorak<br />
                Mavzu: Harf birikmasi bilan ifodalangan undoshlar <br />
“Eng oson” bo‘limidagi topshiriqlar va ularni o‘tkazish metodikasi
            </h3>
            <b>1-mashq. Quyidagi harf birikmalarini mos so‘zga qo‘ying.</b><br />
            <i>Ta’limiy maqsad:</i> O‘quvchilarni so‘zlarni to‘g‘ri yozishga o‘rgatish. <br />
            <i>Mashg‘ulot davomiyligi:</i> 3-4 daqiqa <br />
            <img src={kategory2121} alt="kategory2121" className="img-thumbnail" />
            <p><b>2-mashq. Guruhlarda ishlang. Berilgan so‘zlar to‘plamidagi harf birikmasi bilan ifodalangan so‘zlarni alohida ustuncha shaklida yozing.</b></p>
            <p><i>Ta’limiy maqsad:</i> O‘quvchilarda o‘zaro hamkorlikda ishlash ko‘nikmalarini rivojlantirish asosida harf birikmali undoshlar yozilishini amaliy o‘zlashtirish.</p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa.</p>
            <p>Tong, singil, bahor, ong, shahar, chuchvara, laqma, siyrak, shaftoli, luchchak, obinovvot, shaddod, shalola, osh, chellenj, xarita, kit, ko‘ndalang, kumush, chiroq.</p>
            <ul>
                <li>1-guruh: sh birikmali so‘zlarni yozing.</li>
                <li>2-guruh: ng birikmali so‘zlarni yozing.</li>
                <li>3-guruh: ch birikmali so‘zlarni yozing.</li>
            </ul>
            <p><b>3-mashq. Gapni mazmunan davom ettiring.</b></p>
            <p><i>Ta’limiy maqsad:</i>O‘quvchilarning gap tuzish ko‘nikmalarini rivojlantirish.</p>
            <p><i>Mashg‘ulot davomiyligi:</i>3-4 daqiqa.</p>
            <p className="text-break">Bahor keldi, maysalar …, bolalar _________________________________.</p>
            <p className="text-break">Bolalar muzeydan chiqqach, ______________________________________.</p>
        </div>
    )
}
export default Kategoriya2121;