const Haqimizda = ()=>{
    return(
        <div className="my-3 container" style={styles}>
            <h2 className="text-center my-3">Ona tili o‘qitish metodikasiga asoslangan, boshlang‘ich sinf o‘quvchilarining yozma nutqini rivojlantirishga yo‘naltirilgan elektron ta’lim resursi</h2>
            <h3>1. Resurs konsepsiyasini ishlab chiqish:</h3>
            <p className="fs-1"><b>Maqsadli auditoriya:</b> Resurs 1-4-sinf o‘quvchilari, o‘qituvchilari va ota-onalar uchun mo‘ljallangan.</p>
            <p><b>Maqsad va vazifalar:</b> Elektron ta’lim resursining asosiy maqsadi o‘quvchilarning yozma nutqini rivojlantirish, imloviy savodxonligini oshirish, ijodiy fikrlash qobiliyatini shakllantirishdan iborat. Resurs yaratishda turli nazariyalar, yondashuv va metodlar, jumladan, kompetensiyaviy, kommunikativ, faoliyatli, shaxsga yo‘naltirilgan yondashuvlar hisobga olindi.</p>
            <p style={abzas}>Ushbu ta’lim resursi 1 – 4-sinf o‘quvchilarining bilim darajasi, individual xususiyatlari va qiziqishlari asosida ishlab chiqildi. Buning uchun o‘quvchilarga o‘z tezligida o‘rganish imkonini beruvchi algoritmlar qo‘llanadi.</p>
            <p style={abzas}>Shu maqsadda ona tili fanidan uch xil darajaga ega bo‘lgan o‘quv topshiriqlari “Eng oson”, “Oson”, “Sal murakkab” sarlavhalari ostida topshiriqlar yaratildi. </p>
        </div>
    )
}
const styles = {
    fontSize:"14pt",
    fontFamily:"Times New Roman",
    textAlign:"justify"
}
const abzas = {
    textIndent:"40px"
}
export default Haqimizda;