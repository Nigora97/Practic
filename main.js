function coursesale(){
    const courseName = document.getElementById("coursename").value;
    const PYTON_PRICE = 12000000;
    const FRONTEND_PRICE = 14000000;
    const UX_UI_PRICE = 9000000;
    let price;

    if (courseName == "none"){
        price = 0;
    } else if (courseName == "py"){
        price = PYTON_PRICE;
    } else if (courseName == "fr"){
        price = FRONTEND_PRICE;
    } else if (courseName == "ux"){
    price = UX_UI_PRICE;
} else {
    price = "what"
}

const discountRange = document.getElementById("discountRange").value;
const discountValue = document.getElementById("discountValue")
discountValue.innerHTML = discountRange + "%"
const sum = price/100*(100-discountRange)
const resultValue = document.getElementById("sale")
resultValue.value=sum
}




function calc1(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let result = document.getElementById("result");

    
 
if (b === 0 || a === 0){
            result.innerHTML = "Ошибка: сторона должна иметь велечину!";
        return;
        }
        
        let area = a * b;
    result.innerHTML = "Площадь прямоугольника: " + area;
    }



    function country(){
        let select = document.getElementById("country");
        let phonenumber = document.getElementById("phonenumber");


     if (select.value === "") {
        phonenumber.value = ""; // Очищаем поле, если страна не выбрана
    } else {
        phonenumber.value = select.value;
        
    }}


    function validateForm() {
        const name = document.getElementById("name1").value.trim();
        const country = document.getElementById("country").value;
        const phone = document.getElementById("phonenumber").value.trim();
        const checkbox = document.getElementById("checkbox").checked;
    
        // Активируем кнопку, если все поля заполнены
        document.getElementById("submitBtn").disabled = !(name && country && phone && checkbox);}