
$(document).ready(function () {
    $(".content").hide();
    var array_content = [];
    array_content["item_1"] =
        "Sebagai web creator, keknya cara saya berekspresi agak aneh - aneh ya, tapi btw, lanjut ke card bawahmu";
    array_content["item_2"] =
        "Aku tau kamu belakangan ini lagi ngadepin masa - masa yang berat yang mungkin kamu emang butuh adaptasi, butuh penyesuaian yang berat, sampe rasanya waktu buat kamu dewe aja kurang - kurang";
    array_content["item_3"] =
        "Karena itu, aku mau kasi penyemangat dikit dalam wujud web, biar agak flexing kalo aku anak IT :') nah di sini, aku mau nyemangatin kamu, semangat terus ya buat aktivitasmu ke depannya, jangan nyerah dulu, aku support sini, pasti bisa kok kamu";
    array_content["item_4"] =
        "Kamu mau ngehujat ini gapapa kok btw :') ini emang tak akui ga seberapa bagus, soalnya saya sendiri bukan designer web / bagian front-end web, saya back-end, alias yang full kodingnya :') tapi aku jadi terinspirasi buat ini pas kemarin malem kamu bilang 'kamu kok ga pernah kasi aku sesuatu ?' ya jadinya terinspirasi buat ini. Ini full self-made ya :) ga ada yang namanya template - template an :)";

    $(".item_1, .item_2, .item_3, .item_4").on("click", function () {
        if ($(this).data("show")) {
        class_name = $(this).attr("class");
        $(this).children("div.box").hide(500);
        $(this)
            .children("div.content")
            .html(array_content[class_name])
            .show(500);
        $(this).data("show", false);
        } else {
        class_name = $(this).attr("class");
        $(this).children("div.content").hide(500);
        $(this).children("div.box").show(500);
        $(this).data("show", true);
        }
    });
});