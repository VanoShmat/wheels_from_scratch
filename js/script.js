// toggle burger
$(".burger").on("click", function () {
    $("html").toggleClass("menu-open");
});

// changes active table
function showTable(tableId) {
    var $tables = $(".pricing__table");
    $tables.removeClass("table-active");
    $("#" + tableId).addClass("table-active");
}

// changes active btn
$(".pricing__btn").on("click", function () {
    $(".pricing__btn").removeClass("active");
    $(this).addClass("active");
});

// changes active menu link
$(".menu__link").on("click", function () {
    $(".menu__link").removeClass("active");
    $(this).addClass("active");
});

// opens popup with booking
$(".book-btn").on("click", function () {
    $(".popup-book").addClass("active");
    $("html").toggleClass("popup-open");
});

// closes popup with booking
$(".popup-book__overlay, .booking__close").on("click", function () {
    $(".popup-book").removeClass("active");
    $("html").toggleClass("popup-open");
});

$(document).ready(function () {
    $(".dropdown__button").click(function () {
        var $dropdownList = $(this).siblings(".dropdown__list");
        $(".dropdown__list").not($dropdownList).removeClass("dropdown__list--show");
        $dropdownList.toggleClass("dropdown__list--show");
    });

    $(".dropdown__item").click(function () {
        var selectedText = $(this).text();
        var $dropdown = $(this).closest(".dropdown");
        $dropdown.find(".dropdown__button").text(selectedText);
        $dropdown.find(".dropdown__input").val(selectedText);
        $dropdown.find(".dropdown__list").removeClass("dropdown__list--show");
    });

    $(document).click(function (event) {
        if (!$(event.target).closest(".dropdown").length) {
            $(".dropdown__list").removeClass("dropdown__list--show");
        }
    });
});
